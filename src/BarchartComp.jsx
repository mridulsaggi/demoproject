import { BarChart } from '@mui/x-charts'
import React from 'react'

const BarchartComp = () => {
    return (
        <BarChart
            xAxis={[
                {
                    id: 'barCategories',
                    data: ['A', ' B', ' C', ' D', ' E'],
                    scaleType: 'band',
                },
            ]}
            series={[
                {
                    data: [2, 5, 3 ,17,7],
                },
            ]}
            width={300}
            height={300}
        />
    )
}

export default BarchartComp
