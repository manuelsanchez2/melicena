import React from 'react';

type Event = {
  title: string;
  time: string;
  place?: string;
};

type DayWithEventsProps = {
  day: number;
  month: string;
  events: Event[];
};

const DayWithEvents = ({ day, month, events }: DayWithEventsProps) => {
  return (
    <div className='lg:flex shadow rounded-sm border border-gray-400 mb-6'>
      <div className='bg-primary-500 lg:w-2/12 py-4 block h-full shadow-inner'>
        <div className='text-center tracking-wide'>
          <div className='text-white font-bold text-4xl '>{day}</div>
          <div className='text-white font-normal text-2xl'>{month}</div>
        </div>
      </div>
      <div className='w-full lg:w-11/12 xl:w-full px-1 bg-white py-2 lg:px-2 lg:py-2 tracking-wide'>
        {events.map((event: Event, index) => (
          <div
            key={index}
            className='flex flex-row items-center justify-between'
          >
            <div className='flex flex-row gap-3'>
              <span className='text-sm text-gray-600 font-semibold min-w-[60px]'>
                - {event.time}
              </span>

              <span className='text-sm text-gray-600 font-semibold'>-</span>
              <span className='text-sm text-gray-600 font-semibold min-w-[130px]'>
                {event.title}
              </span>
              {event.place && (
                <>
                  <span className='text-sm text-gray-600 font-semibold'>-</span>
                  <span className='text-sm text-gray-600 font-semibold'>
                    📍 {event.place}
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayWithEvents;
