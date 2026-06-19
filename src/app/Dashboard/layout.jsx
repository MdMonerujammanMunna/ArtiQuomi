import { DashBoardsideBar } from '@/components/Dashboard/SIdebar/Side';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div className="flex">
                <DashBoardsideBar />
                <div className="flex-1 overflow-hidden px-10 py-20">
                    <main>{children}</main>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;