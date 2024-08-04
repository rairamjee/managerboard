import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { TableDemo } from "./Table";


function Report() {

    const today = new Date();
    const formattedDate = today.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });

    return (
        <div className="block justify-between items-start flex-col bg-slate-200 p-8">
            <h1 className=" h-16 text-3xl text-slate-900">Report</h1>

            <div className="flex justify-between">
                <div>
                    <h1 className="py-4 h-4 text-2xl text-blue-950 mb-8"> Welcome Manager <br /><span className="text-lg"> Reports are Ready</span></h1>
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

            <div>
                <h3 className='mb-4 text-slate-900 text-2xl mt-8'>Employee Details</h3>
            </div>

            <TableDemo/>


        </div>
    );
}

export default Report;
