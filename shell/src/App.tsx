import UserList from 'userLifecycle/UserList';
import './App.css';
import BreadCum from './bread-cum/bread-cum';
import Header from './header/header';
import LeftSidePanel from './left-side-panel/left-side-panel';
import InviteUser from 'userLifecycle/InviteUser';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';

function App() {
    return (
        <>
          <Router>
            <Header />
            <div className="flex">
                <div className="flex w-2xs">
                    <LeftSidePanel />
                </div>
                <div className="w-full pt-2 pl-4">
                    <BreadCum />
                    <div id="remote-container" className="bg-primary-color w-full">
                      <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                          <Route path="/" element={<Navigate to="/user-lifecycle/user-list" replace/>} />
                          <Route path="/user-lifecycle/user-list" element={<UserList />} />
                          <Route path="/user-lifecycle/invite-user" element={<InviteUser />} />
                        </Routes>
                      </Suspense>
                    </div>
                </div>
            </div>
          </Router>
        </>
    );
}

export default App;
