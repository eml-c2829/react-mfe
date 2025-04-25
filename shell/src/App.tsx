import React, { Suspense } from 'react';
import './App.css'
import BreadCum from './bread-cum/bread-cum'
import Header from './header/header'
import LeftSidePanel from './left-side-panel/left-side-panel'
import RemoteComponentErrorBoundary from './core/remote-component-error-boudary';

const RemoteComponent = React.lazy(() => import('remoteApp/RemoteComponent'));

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="flex w-2xs">
          <LeftSidePanel />
        </div>
        <div className="w-full pt-2 pl-4">
          <BreadCum />
          <div id="remote-container" className="bg-primary-color w-full">
            <Suspense fallback={<div>Loading...</div>}>
              <RemoteComponentErrorBoundary>
                <RemoteComponent />
              </RemoteComponentErrorBoundary>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
