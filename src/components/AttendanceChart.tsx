"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 30,
    absent: 20,
    reschedule: 6,
  },
  {
    name: 'Tue',
    present: 60,
    absent: 40,
    reschedule: 3,
  },
  {
    name: 'Wed',
    present: 70,
    absent: 10,
    reschedule: 4,
  },
  {
    name: 'Thur',
    present: 80,
    absent: 5,
    reschedule: 6,
  },
  {
    name: 'Fri',
    present: 60,
    absent: 15,
    reschedule: 5,
  },
];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full '>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image src="/moreDark.png" alt='' width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />
          <Legend align="left" verticalAlign="top" wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
          <Bar
            dataKey="present"
            fill="#C3EBFA"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
            legendType='circle'
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#82ca98"
            activeBar={<Rectangle fill="green" stroke="purple" />}
            legendType='circle'
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="reschedule"
            fill="#FAE27C"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
            legendType='circle'
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart