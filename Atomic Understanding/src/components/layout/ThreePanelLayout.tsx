import React, { useEffect } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ThreePanelLayoutProps {
  leftPanel: React.ReactNode;
  centerPanel: React.ReactNode;
  rightPanel: React.ReactNode;
  offsetTop?: number;
}

const HEADER = 56;

export function ThreePanelLayout({ leftPanel, centerPanel, rightPanel, offsetTop = HEADER }: ThreePanelLayoutProps) {
  const {
    leftDrawerOpen, setLeftDrawerOpen,
    rightDrawerOpen, setRightDrawerOpen,
    leftCollapsed, setLeftCollapsed,
    rightCollapsed, setRightCollapsed,
  } = useAppStore();

  const hasLeft = !!leftPanel;
  const hasRight = !!rightPanel;

  // Close mobile drawers when growing to desktop
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

  return (
    <div className="flex h-full w-full overflow-hidden bg-bg relative" style={{ paddingTop: offsetTop }}>
      {/* Mobile drawer toggles */}
      {hasLeft && (
        <button
          onClick={() => setLeftDrawerOpen(!leftDrawerOpen)}
          className="absolute top-3 left-3 z-40 md:hidden glass-strong rounded-full p-2 text-text hover:text-accent transition-colors"
        >
          {leftDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      )}

      {/* ===== LEFT PANEL ===== */}
      {hasLeft && (
        <>
          <aside
            className={`glass border-r border-border z-30 overflow-hidden
              fixed left-0 top-[56px] bottom-0 w-[300px]
              transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${leftDrawerOpen ? 'translate-x-0' : '-translate-x-full'}
              md:static md:top-auto md:bottom-auto md:h-full md:translate-x-0 md:transition-[width] md:duration-300
              ${leftCollapsed ? 'md:w-0' : 'md:w-[300px]'}`}
          >
            <div className="h-full" style={{ width: 300 }}>
              {leftPanel}
            </div>
          </aside>

          {/* Desktop collapse tab */}
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

      {/* ===== CENTER ===== */}
      <div className="flex-1 min-w-0 relative h-full flex flex-col">
        {centerPanel}
      </div>

      {/* ===== RIGHT PANEL ===== */}
      {hasRight && (
        <>
          {/* Desktop collapse tab */}
          <button
            onClick={() => setRightCollapsed(!rightCollapsed)}
            title={rightCollapsed ? 'Show panel' : 'Hide panel'}
            className="hidden lg:flex items-center justify-center absolute z-40 top-1/2 -translate-y-1/2
              w-5 h-14 glass-strong rounded-l-lg text-text-dim hover:text-accent transition-all duration-300"
            style={{ right: rightCollapsed ? 0 : 320 }}
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
              fixed right-0 top-[56px] bottom-0 w-[320px]
              transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${rightDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
              lg:static lg:top-auto lg:bottom-auto lg:h-full lg:translate-x-0 lg:transition-[width] lg:duration-300
              ${rightCollapsed ? 'lg:w-0' : 'lg:w-[320px]'}`}
          >
            <div className="h-full" style={{ width: 320 }}>
              {rightPanel}
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
