import DayWithEvents from '@/components/day-with-events/DayWithEvents';

const WeekWithEvents = () => {
  return (
    <div className='mb-6'>
      <DayWithEvents
        day={17}
        month='Agosto'
        events={[
          {
            title: 'Cine de verano: Los Mitchels contra las máquinas',
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
            title: 'Repique de camapnas y cohetes y Juegos Populares',
            time: '10:00',
            place: 'Junto al peñón',
          },
          {
            title: 'Feria del mediodía con tapeo',
            time: '14:00',
          },
          {
            title: 'Gaming Day',
            time: '18:00',
            place: 'Salón de usos múltiples',
          },
          {
            title: 'Fiesta ibicenca',
            time: '23:00',
            place: 'Recinto ferial',
          },
          {
            title: 'Duo Los Canarios',
            time: '23:00',
            place: 'Recinto ferial',
          },
          {
            title: 'Elección de Reina de las Fiestas, Damas y Reina infantil',
            time: '00:30',
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
            title: 'Diana floreada y pasacalles con la charanga LA YUNKA',
            time: '10:00',
          },
          {
            title: 'Fiesta de la espuma (junto al peñón)',
            time: '12:00',
          },
          {
            title: 'Fecha del mediodía',
            time: '14:00',
          },
          {
            title: 'Mago Luisma (junto al peñón)',
            time: '18:30',
          },
          {
            title: 'Concurso de disfraces y pasacalles',
            time: '20:30',
          },
          {
            title:
              'Comienzo de la Verbena musical a cargo de RAUL VAZCO y DJ ISMA MOLINA',
            time: '23:00',
          },
          {
            title: 'Castillo de Fuegos Artificiales y entrega de premios',
            time: '01:00',
          },
          {
            title: 'Continuación de la velada musical',
            time: '01:30',
          },
        ]}
      />
    </div>
  );
};

export default WeekWithEvents;
