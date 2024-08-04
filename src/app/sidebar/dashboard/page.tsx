import { User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import Charts from './Charts';

function Dashboard() {

    const today = new Date();
    const formattedDate = today.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });

    return (
        <div className="block justify-between items-start flex-col bg-slate-200 p-8">
            <h1 className=" h-16 text-3xl text-slate-900">Dashboard</h1>

            <div className="flex justify-between">
                <div>
                    <h1 className="py-4 h-4 text-2xl text-blue-950">Welcome Manager</h1>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger className="py-4 font-bold">SaleSkip!</TooltipTrigger>
                            <TooltipContent>
                                <p>Product Delivery Head</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="my-auto border-y border-gray-950 hover:bg-slate-950 hover:text-white hover:rounded-md p-2">
                    Date: {formattedDate}
                </div>
            </div>

            <div className="flex justify-center flex-wrap mb-8 mt-8">
                <div className="flex justify-center p-4 flex-col bg-slate-950 text-white text-sm w-56 h-32 rounded-md m-4 transform transition duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex justify-between mb-4">
                        <div className='flex'>
                            <User className='mr-4 m-auto h-4' />
                            Employees
                        </div>
                        <div className='my-auto'>
                            ...
                        </div>
                    </div>
                    <div className="flex text-2xl justify-between">
                        50.8 K
                        <Button className='h-8'>Incr</Button>
                    </div>
                </div>

                <div className="flex justify-center p-4 flex-col bg-slate-950 text-white text-sm w-56 h-32 rounded-md m-4 transform transition duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex justify-between mb-4">
                        <div className='flex'>
                            <User className='mr-4 m-auto h-4' />
                            Employees
                        </div>
                        <div className='my-auto'>
                            ...
                        </div>
                    </div>
                    <div className="flex text-2xl justify-between">
                        50.8 K
                        <Button className='h-8'>Incr</Button>
                    </div>
                </div>

                <div className="flex justify-center p-4 flex-col bg-slate-950 text-white text-sm w-56 h-32 rounded-md m-4 transform transition duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex justify-between mb-4">
                        <div className='flex'>
                            <User className='mr-4 m-auto h-4' />
                            Employees
                        </div>
                        <div className='my-auto'>
                            ...
                        </div>
                    </div>
                    <div className="flex text-2xl justify-between">
                        50.8 K
                        <Button className='h-8'>Incr</Button>
                    </div>
                </div>

                <div className="flex justify-center p-4 flex-col bg-slate-950 text-white text-sm w-56 h-32 rounded-md m-4 transform transition duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex justify-between mb-4">
                        <div className='flex'>
                            <User className='mr-4 m-auto h-4' />
                            Employees
                        </div>
                        <div className='my-auto'>
                            ...
                        </div>
                    </div>
                    <div className="flex text-2xl justify-between">
                        50.8 K
                        <Button className='h-8'>Incr</Button>
                    </div>
                </div>
            </div>

            <div className='flex justify-center flex-col'>
                <h3 className='mb-4 text-slate-900 text-2xl'>Employee Charts</h3>
                <Charts/>
            </div>
        </div>
    );
}

export default Dashboard;
