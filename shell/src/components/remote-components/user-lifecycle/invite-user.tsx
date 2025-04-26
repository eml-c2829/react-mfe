import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

const InviteUserComponent = React.lazy(() => import('userLifecycle/InviteUser'));

const InviteUser = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const mountPoint = document.createElement('div');
    containerRef.current.appendChild(mountPoint);

    const root = createRoot(mountPoint);
    root.render(
       <InviteUserComponent />
    );

    return () => {
      root.unmount();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default InviteUser;
