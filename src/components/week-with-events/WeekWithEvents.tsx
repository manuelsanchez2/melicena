import DayWithEvents from '@/components/day-with-events/DayWithEvents';

const WeekWithEvents = () => {
  return (
    <div className='mb-6'>
      <DayWithEvents
        day={17}
        month='Agosto'
        events={[
          {
            title: 'Cine de verano: Bella',
            time: '22:00',
            place: 'Paseo marítimo',
          },
          {
            title: 'Noche de Bingo',
            time: '23:45',
            place: 'Recinto ferial',
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
            title: 'Gaming Day',
            time: '19:00',
            place: 'Salón de usos múltiples',
          },
          {
            title: 'Fiesta ibicenca',
            time: '23:00',
            place: 'Recinto ferial',
          },
          {
            title: 'Duo Los Canarios',
            time: 'XX:XX',
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
            title: 'Diana floreada y pasacalles con la charanga LA YUNKA',
            time: '10:00',
          },
          {
            title:
              'Celebración de la Santa misa en honor a la Virgen del Carmen',
            time: '11:30',
          },
          {
            title: 'Taller de pintura de manos',
            time: '13:00',
          },
          {
            title: 'Fecha del mediodía',
            time: '14:00',
          },
          {
            title: 'Carrera de Cintas',
            time: '18:30',
          },
          {
            title: 'Salida de la procesión en honor a la Virgen del Carmen',
            time: '20:30',
          },
          {
            title: 'Velada musical a cargo de Los Vinilos - Pop de los 80',
            time: '23:30',
          },
          {
            title: 'Neon Party con DJ Danny Diaz',
            time: '01:00',
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
