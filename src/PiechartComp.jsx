import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
const PiechartComp = () => {

    const userdata=[
        { id: 0, value: 20, label: 'Maths' },
          { id: 1, value: 30, label: 'Science' },
          { id: 2, value: 30, label: 'Hindi' },
          { id: 3, value: 20, label: 'English' },
    ]

  return (
    <PieChart
    series={[
      {
        data:userdata,
      },
    ]}
    width={400}
    height={200}
  />
  )
}

export default PiechartComp
