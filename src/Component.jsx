import React from 'react'
// import BarchartComp from './Barchart'
import { BarChart } from '@mui/x-charts/BarChart';
import BarchartComp from './BarchartComp';
import PiechartComp from './PiechartComp';
const Component = () => {
    return (
        <div>
            <div className="text-3xl h-full w-[70%] my-[10rem] mx-auto flex flex-col md:flex-row justify-center items-center"> 
                <PiechartComp/>
                <BarchartComp/>
            </div>
        </div>
    )
}

export default Component
