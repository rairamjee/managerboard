"use client"
import { useState } from 'react';
import { Home, User, Settings, ChartPie } from 'lucide-react';
import Dashboard from './dashboard/page';
import Report from './Report/page'; // Assuming you have a Report component

function Sidebar() {
    const [activePage, setActivePage] = useState('Dashboard');

    const renderContent = () => {
        switch (activePage) {
            case 'Dashboard':
                return <Dashboard />;
            case 'Report':
                return <Report />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="bg-slate-900 w-1/6 h-screen text-white fixed top-0 left-0">
                <div className="rounded-full p-4 flex flex-col items-start">
                    <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Logo" className="h-8 w-8" />
                    <h3 className="mt-4 text-xl">SaleSkip!</h3>
                </div>
                <div className="px-4 my-6">
                    <div 
                        className={`flex items-center mb-4 cursor-pointer p-2 rounded-lg hover:bg-slate-700  hover:text-slate-50 ${activePage === 'Dashboard' ? 'text-slate-50 bg-slate-700' : 'text-slate-400'}`} 
                        onClick={() => setActivePage('Dashboard')}
                    >
                        <Home className="h-4 w-4 mr-8" />
                        <span>Dashboard</span>
                    </div>
                    <div 
                        className={`flex items-center mb-4 cursor-pointer rounded-lg hover:bg-slate-700 p-2 hover:text-slate-50 ${activePage === 'Report' ? 'text-slate-50 bg-slate-700' : 'text-slate-400'}`} 
                        onClick={() => setActivePage('Report')}
                    >
                        <ChartPie className="h-4 w-4 mr-8" />
                        <span>Report</span>
                    </div>
                    <div className="flex items-center mb-4 text-slate-400 cursor-pointer hover:bg-slate-700 hover:text-slate-50 p-2 rounded-lg">
                        <User className="h-4 w-4 mr-8" />
                        <span>Contact</span>
                    </div>
                    <div className="flex items-center cursor-pointer text-slate-400 hover:bg-slate-700 p-2 hover:text-slate-50 rounded-lg">
                        <Settings className="h-4 w-4 mr-8" />
                        <span>Settings</span>
                    </div>
                </div>
            </div>

            <div className="ml-[16.6667%] w-screen">
                {renderContent()}
            </div>
        </div>
    );
}

export default Sidebar;
