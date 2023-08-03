import DayWithEvents from '@/components/day-with-events/DayWithEvents';
import React from 'react';

const WeekWithEvents = () => {
  return (
    <div className='mb-6'>
      <DayWithEvents
        day={17}
        month='Agosto'
        events={[
          {
            title: 'Cine de verano: Bella',
            time: '23:00',
            place: 'Paseo marítimo',
          },
        ]}
      />
      <DayWithEvents
        day={18}
        month='Agosto'
        events={[
          {
            title: 'Juegos Populares',
            time: '10:00',
            place: 'Junto al peñón',
          },
          {
            title: 'Feria del mediodía',
            time: '12:00',
          },
          {
            title: 'Fiesta ibicenca',
            time: '23:00',
            place: 'Recinto ferial',
          },
          {
            title: 'GROXDJ',
            time: '03:00',
          },
        ]}
      />
      <DayWithEvents
        day={19}
        month='Agosto'
        events={[
          {
            title: 'Por definir',
            time: 'XX:XX',
          },
        ]}
      />
      <DayWithEvents
        day={20}
        month='Agosto'
        events={[
          {
            title: 'Por definir',
            time: 'XX:XX',
          },
        ]}
      />
    </div>
  );
};

export default WeekWithEvents;
