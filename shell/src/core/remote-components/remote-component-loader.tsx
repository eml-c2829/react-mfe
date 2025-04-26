/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, lazy, ComponentType } from 'react';
import { createRoot } from 'react-dom/client';

interface RemoteComponentLoaderProps {
  loadComponent: () => Promise<{ default: ComponentType<any> }>;
}

const RemoteComponentLoader: React.FC<RemoteComponentLoaderProps> = ({ loadComponent }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const LazyComponent = lazy(loadComponent);

  useEffect(() => {
    if (!containerRef.current) return;

    const mountPoint = document.createElement('div');
    containerRef.current.appendChild(mountPoint);

    const root = createRoot(mountPoint);
    root.render(<LazyComponent />);

    return () => {
      root.unmount();
    };
  }, [LazyComponent]);

  return <div ref={containerRef} />;
};

export default RemoteComponentLoader;
