import UserList from 'userLifecycle/UserList';
import InviteUser from 'userLifecycle/InviteUser';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../mains/header/header';
import LeftSidePanel from '../mains/left-side-panel/left-side-panel';
import BreadCrumb from '../mains/breadcrumb/breadcrumb';

function AuthenticatedLayout() {
    return (
        <>
          <Router>
            <Header />
            <div className="flex">
                <div className="flex w-2xs">
                    <LeftSidePanel />
                </div>
                <div className="w-full pt-2 pl-4">
                    <BreadCrumb />
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

export default AuthenticatedLayout;
