import React, { useEffect } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { Menu, PanelRightClose, PanelRightOpen, X } from 'lucide-react';

interface ThreePanelLayoutProps {
  leftPanel: React.ReactNode;
  centerPanel: React.ReactNode;
  rightPanel: React.ReactNode;
}

export function ThreePanelLayout({ leftPanel, centerPanel, rightPanel }: ThreePanelLayoutProps) {
  const { leftDrawerOpen, setLeftDrawerOpen, rightDrawerOpen, setRightDrawerOpen } = useAppStore();

  // Close drawers on resize if they become non-drawer
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setLeftDrawerOpen(false);
        setRightDrawerOpen(false);
      } else if (window.innerWidth >= 768) {
        setLeftDrawerOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setLeftDrawerOpen, setRightDrawerOpen]);

  return (
    <div className="flex h-full w-full pt-[52px] overflow-hidden bg-bg relative">
      {/* Mobile Drawer Toggles */}
      <div className="absolute top-[60px] left-4 z-40 md:hidden">
        <button
          onClick={() => setLeftDrawerOpen(!leftDrawerOpen)}
          className="p-2 bg-panel border border-border rounded-lg shadow-lg text-text hover:text-accent transition-colors"
        >
          {leftDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      <div className="absolute top-[60px] right-4 z-40 lg:hidden">
        <button
          onClick={() => setRightDrawerOpen(!rightDrawerOpen)}
          className="p-2 bg-panel border border-border rounded-lg shadow-lg text-text hover:text-accent transition-colors"
        >
          {rightDrawerOpen ? <PanelRightClose className="w-5 h-5" /> : <PanelRightOpen className="w-5 h-5" />}
        </button>
      </div>

      {/* LEFT PANEL */}
      <div
        className={`fixed inset-y-0 left-0 pt-[52px] w-[280px] md:w-[320px] bg-bg border-r border-border z-30 transition-transform duration-300 md:static md:translate-x-0 ${
          leftDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {leftPanel}
      </div>

      {/* Backdrop for left drawer */}
      {leftDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setLeftDrawerOpen(false)}
        />
      )}

      {/* CENTER PANEL */}
      <div className="flex-1 min-w-0 relative h-full flex flex-col">
        {centerPanel}
      </div>

      {/* RIGHT PANEL */}
      <div
        className={`fixed inset-y-0 right-0 pt-[52px] w-[300px] bg-bg border-l border-border z-30 transition-transform duration-300 lg:static lg:translate-x-0 ${
          rightDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {rightPanel}
      </div>

      {/* Backdrop for right drawer */}
      {rightDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setRightDrawerOpen(false)}
        />
      )}
    </div>
  );
}
