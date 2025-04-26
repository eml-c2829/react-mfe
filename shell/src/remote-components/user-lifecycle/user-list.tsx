import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { safeRemoteImport } from '../../core/safe-remote-import';

const UserListComponent = React.lazy(() => 
  safeRemoteImport(() => import('userLifecycle/UserList'))
);

const UserList = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const mountPoint = document.createElement('div');
    containerRef.current.appendChild(mountPoint);

    const root = createRoot(mountPoint);
    root.render(
       <UserListComponent />
    );

    return () => {
      root.unmount();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default UserList;
