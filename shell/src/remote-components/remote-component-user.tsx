import React, { Suspense } from 'react';
import { useEffect, useRef } from 'react';
import { createRoot, Root } from 'react-dom/client';
import RemoteComponentErrorBoundary from '../core/remote-component-error-boudary';

let root: Root | null = null;

const RemoteComponentX = React.lazy(() => import('remoteApp/RemoteComponent'));

const RemoteComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const shadowRoot = containerRef.current.attachShadow({ mode: 'open' });

    const mountPoint = document.createElement('div');
    shadowRoot.appendChild(mountPoint);

    root = createRoot(mountPoint);
    root.render(
      <div>
        {/* Your actual remote component UI */}
        <h1>Hello from Remote</h1>
            <Suspense fallback={<div>Loading...</div>}>
              <RemoteComponentErrorBoundary>
                <RemoteComponentX />
              </RemoteComponentErrorBoundary>
            </Suspense>
      </div>
    );

    return () => {
      if (root) {
        root.unmount();
        root = null;
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default RemoteComponent;
