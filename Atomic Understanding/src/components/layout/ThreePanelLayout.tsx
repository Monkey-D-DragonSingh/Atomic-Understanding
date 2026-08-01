import React, { useEffect, useRef } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ThreePanelLayoutProps {
  leftPanel: React.ReactNode;
  centerPanel: React.ReactNode;
  rightPanel: React.ReactNode;
  offsetTop?: number;
}

const HEADER = 56;
const MIN_RIGHT_WIDTH = 250;
const MAX_RIGHT_WIDTH = 800;
const MAX_RIGHT_WIDTH_RATIO = 0.4; // right panel can never exceed 40% of the container
const DEFAULT_RIGHT_WIDTH = 320;
const MIN_CENTER_WIDTH = 320; // never squeeze the center panel smaller than this

function getEffectiveMax(containerWidth: number, leftWidth: number) {
  const byRatio = containerWidth * MAX_RIGHT_WIDTH_RATIO;
  const bySpace = containerWidth - leftWidth - MIN_CENTER_WIDTH;
  return Math.max(MIN_RIGHT_WIDTH, Math.min(MAX_RIGHT_WIDTH, byRatio, bySpace));
}

export function ThreePanelLayout({ leftPanel, centerPanel, rightPanel, offsetTop = HEADER }: ThreePanelLayoutProps) {
  const {
    leftDrawerOpen, setLeftDrawerOpen,
    rightDrawerOpen, setRightDrawerOpen,
    leftCollapsed, setLeftCollapsed,
    rightCollapsed, setRightCollapsed,
    rightPanelWidth, setRightPanelWidth,
  } = useAppStore();

  const hasLeft = !!leftPanel;
  const hasRight = !!rightPanel;

  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const currentWidth = rightPanelWidth ?? DEFAULT_RIGHT_WIDTH;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setLeftDrawerOpen(false);
        setRightDrawerOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setLeftDrawerOpen, setRightDrawerOpen]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const newWidth = containerRect.right - e.clientX;
      const leftWidth = hasLeft && !leftCollapsed ? 300 : 0;
      const effectiveMax = getEffectiveMax(containerRect.width, leftWidth);
      const clamped = Math.min(effectiveMax, Math.max(MIN_RIGHT_WIDTH, newWidth));
      setRightPanelWidth(clamped);
    };
    const handleMouseUp = () => {
      isDraggingRef.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [setRightPanelWidth, hasLeft, leftCollapsed]);

  // Clamp on mount, on window resize, and whenever the left panel toggles —
  // this is what fixes a stale/oversized width that got persisted to
  // localStorage from before.
  useEffect(() => {
    const clampToViewport = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const leftWidth = hasLeft && !leftCollapsed ? 300 : 0;
      const effectiveMax = getEffectiveMax(containerRect.width, leftWidth);
      if (currentWidth > effectiveMax) {
        setRightPanelWidth(effectiveMax);
      }
    };
    clampToViewport();
    window.addEventListener('resize', clampToViewport);
    return () => window.removeEventListener('resize', clampToViewport);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leftCollapsed, hasLeft, currentWidth]);

  const startDragging = () => {
    isDraggingRef.current = true;
    document.body.style.cursor = 'ew-resize';
    document.body.style.userSelect = 'none';
  };

  return (
    <div
      ref={containerRef}
      className="flex h-full w-full overflow-hidden bg-bg relative"
      style={{ paddingTop: offsetTop }}
    >
      {hasLeft && (
        <button
          onClick={() => setLeftDrawerOpen(!leftDrawerOpen)}
          className="absolute top-3 left-3 z-40 md:hidden glass-strong rounded-full p-2 text-text hover:text-accent transition-colors"
        >
          {leftDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      )}

      {hasLeft && (
        <>
          <aside
            className={`glass border-r border-border z-30 overflow-hidden
              fixed left-0 top-[56px] bottom-0 w-[300px]
              transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${leftDrawerOpen ? 'translate-x-0' : '-translate-x-full'}
              md:static md:top-auto md:bottom-auto md:h-full md:translate-x-0 md:transition-[width] md:duration-300 md:shrink-0
              ${leftCollapsed ? 'md:w-0' : 'md:w-[300px]'}`}
          >
            <div className="h-full" style={{ width: 300 }}>
              {leftPanel}
            </div>
          </aside>

          <button
            onClick={() => setLeftCollapsed(!leftCollapsed)}
            title={leftCollapsed ? 'Show panel' : 'Hide panel'}
            className="hidden md:flex items-center justify-center absolute z-40 top-1/2 -translate-y-1/2
              w-5 h-14 glass-strong rounded-r-lg text-text-dim hover:text-accent transition-all duration-300"
            style={{ left: leftCollapsed ? 0 : 300 }}
          >
            {leftCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </>
      )}

      {leftDrawerOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 md:hidden" onClick={() => setLeftDrawerOpen(false)} />
      )}

      <div className="flex-1 min-w-0 relative h-full flex flex-col overflow-hidden">
        {centerPanel}
      </div>

      {hasRight && (
        <>
          <button
            onClick={() => setRightCollapsed(!rightCollapsed)}
            title={rightCollapsed ? 'Show panel' : 'Hide panel'}
            className="hidden lg:flex items-center justify-center absolute z-40 top-1/2 -translate-y-1/2
              w-5 h-14 glass-strong rounded-l-lg text-text-dim hover:text-accent transition-all duration-300"
            style={{ right: rightCollapsed ? 0 : currentWidth }}
          >
            {rightCollapsed ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setRightDrawerOpen(!rightDrawerOpen)}
            className="absolute top-3 right-3 z-40 lg:hidden glass-strong rounded-full p-2 text-text hover:text-accent transition-colors"
          >
            {rightDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <aside
            className={`glass border-l border-border z-30 overflow-hidden
              fixed right-0 top-[56px] bottom-0
              transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${rightDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
              lg:static lg:top-auto lg:bottom-auto lg:h-full lg:translate-x-0 lg:shrink-0
              ${rightCollapsed ? 'lg:transition-[width] lg:duration-300' : ''}`}
            style={{ width: rightCollapsed ? 0 : currentWidth, maxWidth: '100%' }}
          >
            <div className="h-full relative">
              {!rightCollapsed && (
                <div
                  onMouseDown={startDragging}
                  className="hidden lg:block absolute left-0 top-0 bottom-0 w-1.5 cursor-ew-resize hover:bg-accent/40 active:bg-accent/60 z-10 -ml-0.5"
                />
              )}
              <div className="h-full overflow-hidden">
                {rightPanel}
              </div>
            </div>
          </aside>
        </>
      )}

      {rightDrawerOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 lg:hidden" onClick={() => setRightDrawerOpen(false)} />
      )}
    </div>
  );
}