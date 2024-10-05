"use client"
import Image from "next/image";
import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
    {
        id: 1,
        title: 'Conversation Session',
        time: '12:00 PM - 1:00 PM',
        description: 'conversation session to improve student speaking and listening'
    },
    {
        id: 2,
        title: 'Private Class',
        time: '1:00 PM - 2:00 PM',
        description: 'Private Class to improve student speaking and listening'
    },
    {
        id: 3,
        title: 'Conversation Session',
        time: '2:00 PM - 3:00 PM',
        description: 'conversation session to improve student speaking and listening'
    },
]

const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className='bg-white p-4 rounded-md '>
            <Calendar onChange={onChange} value={value} />
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4">Events</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <div className="">
                {events.map(event => (
                    <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-waleSky even:border-t-walePurple"
                        key={event.id}>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-gray-600">{event.title}</h1>
                            <span className="text-gray-300 text-xs">{event.time}</span>
                        </div>
                        <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalender