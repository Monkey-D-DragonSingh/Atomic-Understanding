import assert from 'node:assert/strict';
import { CURATED_REACTIONS } from '../src/data/curatedReactions';
import { CATALYSTS } from '../src/data/catalysts';
import { ALL_REACTANTS } from '../src/data/allReactants';
import { MOLECULES } from '../src/data/molecules';
import { matchReaction } from '../src/lib/reactionMatcher';
import { parseFormula } from '../src/lib/parseFormula';
import type { ReactionParticipant } from '../src/types/curatedReaction';

function expectReaction(reactants: string[], option: string | null, id: string) {
  const result = matchReaction(reactants, option);
  assert.equal(result.status, 'valid', `${id}: ${result.status}`);
  if (result.status === 'valid') assert.equal(result.reaction.id, id);
}

assert.equal(new Set(CURATED_REACTIONS.map(r => r.id)).size, CURATED_REACTIONS.length);
assert.equal(new Set(CATALYSTS.map(c => c.id)).size, CATALYSTS.length);
assert.deepEqual(parseFormula('Ca(OH)2'), { Ca: 1, O: 2, H: 2 });
assert.deepEqual(parseFormula('C12H22O11'), { C: 12, H: 22, O: 11 });
assert.deepEqual(parseFormula('C3H5(OOCCH3)3'), { C: 9, H: 14, O: 6 });
assert.throws(() => parseFormula('Ca(OH2'));
assert.equal(matchReaction([], null).status, 'empty');
assert.equal(matchReaction(['helium', 'water'], null).status, 'invalid');
assert.equal(matchReaction(['Co', 'oxygen'], 'platinum-catalyst').status, 'invalid');
assert.equal(matchReaction(['atom-Co', 'oxygen'], 'platinum-catalyst').status, 'invalid');
assert.equal(matchReaction(['nitrogen', 'hydrogen'], null).status, 'catalyst-missing');
assert.equal(matchReaction(['nitrogen', 'hydrogen'], 'heat').status, 'wrong-catalyst');
assert.equal(matchReaction(['water'], null).status, 'catalyst-missing');
assert.equal(matchReaction(['water'], 'unknown-option').status, 'wrong-catalyst');
assert.equal(matchReaction(['hydrogen-chloride', 'sodium-hydroxide'], 'nickel-catalyst').status, 'wrong-catalyst');
expectReaction(['CO', 'O2'], 'platinum-catalyst', 'catalytic-oxidation-of-carbon-monoxide');
expectReaction(['H2', 'N2'], 'iron-catalyst', 'haber-process');
expectReaction(['water'], 'electricity', 'decomposition-of-water');
expectReaction(['carbon-dioxide', 'water'], null, 'formation-of-carbonic-acid');
expectReaction(['carbon-dioxide', 'water'], 'sunlight-chlorophyll', 'photosynthesis');
expectReaction(['carbon-dioxide', 'water'], 'pressure', 'pressurized-carbonation');
expectReaction(['oxygen', 'ethanol'], 'heat', 'combustion-of-ethanol');
expectReaction(['oxygen', 'ethanol'], 'acetobacter', 'oxidation-of-ethanol');
expectReaction(['methanol', 'oxygen'], 'heat', 'combustion-of-methanol');
expectReaction(['methanol', 'oxygen'], 'copper-catalyst', 'catalytic-oxidation-of-methanol');
expectReaction(['hydrogen-peroxide'], 'catalase', 'decomposition-of-hydrogen-peroxide');
expectReaction(['glucose'], 'yeast-enzymes', 'fermentation-of-glucose');
expectReaction(['ethanol'], 'alumina', 'dehydration-of-ethanol-alumina');
expectReaction(['ethanol'], 'sulfuric-acid-catalyst', 'dehydration-of-ethanol-sulfuric-acid');

const totalAtoms = (participants: ReactionParticipant[]) => {
  const counts: Record<string, number> = {};
  for (const participant of participants) {
    assert.ok(Number.isInteger(participant.coefficient) && participant.coefficient > 0);
    for (const [element, count] of Object.entries(parseFormula(participant.formula))) {
      counts[element] = (counts[element] ?? 0) + count * participant.coefficient;
    }
  }
  return counts;
};

const unreachable: string[] = [];
for (const reaction of CURATED_REACTIONS) {
  assert.deepEqual(totalAtoms(reaction.reactants), totalAtoms(reaction.products), `Unbalanced: ${reaction.id}`);
  for (const participant of [...reaction.reactants, ...reaction.products]) {
    if (participant.moleculeId) assert.ok(MOLECULES.some(m => m.id === participant.moleculeId), `${reaction.id}: ${participant.moleculeId}`);
  }
  for (const option of reaction.builderOptions) assert.ok(CATALYSTS.some(c => c.id === option), `${reaction.id}: ${option}`);
  const selections = reaction.reactants.map(r => ALL_REACTANTS.find(m => r.moleculeId ? m.id === r.moleculeId : m.formula === r.formula)?.id);
  if (selections.some(id => !id)) unreachable.push(reaction.id);
  for (const option of reaction.builderOptions.length ? reaction.builderOptions : [null]) {
    const result = matchReaction(reaction.reactants.map(r => r.formula), option);
    assert.equal(result.status, 'valid', `Formula lookup: ${reaction.id}/${option}`);
    if (selections.every((id): id is string => !!id)) {
      const picked = matchReaction([...selections].reverse(), option);
      assert.equal(picked.status, 'valid', `Picker lookup: ${reaction.id}/${option}`);
      if (picked.status === 'valid') {
        // The original database has two identical limestone decomposition entries.
        assert.ok(picked.reaction.id === reaction.id || reaction.id === 'calcination-of-limestone', `Wrong pathway: ${reaction.id}`);
      }
    }
  }
}
assert.deepEqual(unreachable.sort(), ['roasting-zinc-sulfide', 'saponification-of-fat']);
for (const option of CATALYSTS) assert.ok(CURATED_REACTIONS.some(r => r.builderOptions.includes(option.id)), `Unused option: ${option.id}`);
console.log(`PASS: ${CURATED_REACTIONS.length} balanced reactions, ${CATALYSTS.length} connected options, alternate pathways, and matching regressions.`);
console.log('Known pre-existing picker gaps: zinc sulfide and the simplified saponification substrate. All new reactions are picker-accessible.');
