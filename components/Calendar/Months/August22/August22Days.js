
// AUGUST 2022

const days = [
    { date: '2022-07-31', events: [] },
    { date: '2022-08-01', isCurrentMonth: true, events: [] },
    { date: '2022-08-02', isCurrentMonth: true, events: [] },
    { date: '2022-08-03', isCurrentMonth: true, events: [] },
    { date: '2022-08-04', isCurrentMonth: true, events: [] },
    { date: '2022-08-05', isCurrentMonth: true, events: [] },
    { date: '2022-08-06', isCurrentMonth: true, events: [] },
    {
      date: '2022-08-07',
      isCurrentMonth: true,
      events: [
        { id: 1, name: 'Movie Night', time: '10PM', datetime: '', href: '/events/event-test' },
        // CAN DO MULTIPLE EVENTS PER DAY
      //   { id: 2, name: 'Sales meeting', time: '2PM', datetime: '2022-01-03T14:00', href: '#' },
      ],
    },
    { date: '2022-08-08', isCurrentMonth: true, events: [] },
    { date: '2022-08-09', isCurrentMonth: true, events: [] },
    { date: '2022-08-10', isCurrentMonth: true, events: [] },
    {
      date: '2022-08-11',
      isCurrentMonth: true,
      events: [{ id: 3, name: 'Sip N Paint', time: '8PM', datetime: '', href: '/events/event-test' }],
    },
    { date: '2022-08-12', isCurrentMonth: true, events: [] },
    { date: '2022-08-13', isCurrentMonth: true, events: [] },
    { date: '2022-08-14', isCurrentMonth: true, events: [] },
    { date: '2022-08-15', isCurrentMonth: true, events: [] },
    {
      date: '2022-81-16',
      isCurrentMonth: true,
      // isToday: true,
      events: [{ id: 6, name: "Learn to Tie Dye", time: '3PM', datetime: '', href: '/events/event-test' }],
    },
    { date: '2022-08-17', isCurrentMonth: true, events: [] },
    { date: '2022-08-18', isCurrentMonth: true, events: [] },
    { date: '2022-08-19', isCurrentMonth: true, events: [] },
    { date: '2022-08-20', isCurrentMonth: true, events: [] },
    { date: '2022-08-21', isCurrentMonth: true, events: [] },
    { date: '2022-08-22', isCurrentMonth: true, events: [] },
    { date: '2022-08-23', isCurrentMonth: true, events: [] },
    { date: '2022-08-24', isCurrentMonth: true, events: [] },
    { date: '2022-08-25', isCurrentMonth: true, events: [] },
    {
      date: '2022-08-26',
      isCurrentMonth: true,
      // isSelected: true,
      events: [
        { id: 4, name: 'Beach party', time: '1PM', datetime: '', href: '/events/event-test' },
        { id: 5, name: 'Wiz Kalifa signing', time: '8PM', datetime: '', href: '/events/event-test' },
      ],
    },
    { date: '2022-08-27', isCurrentMonth: true, events: [] },
    { date: '2022-08-28', isCurrentMonth: true, events: [
        { id: 2, name: 'GRAND OPENING', time: '6PM', datetime: '', href: '/events/event-test' }
    ] },
    { date: '2022-08-29', isCurrentMonth: true, events: [] },
    { date: '2022-08-30', isCurrentMonth: true, events: [] },
    { date: '2022-08-31', isCurrentMonth: true, events: [] },
    { date: '2022-09-01', events: [] },
    { date: '2022-09-02', events: [] },
    { date: '2022-09-03', events: [] },
    { date: '2022-09-04', isCurrentMonth: true, events: [] },
    { date: '2022-09-05', events: [] },
    { date: '2022-09-06', events: [] },
    {
      date: '2022-09-07',
      events: [{ id: 7, name: 'End of Summer Bash', time: '9PM', datetime: '', href: '/events/event-test' }],
    },
    { date: '2022-09-08', events: [] },
    { date: '2022-09-09', events: [] },
    { date: '2022-09-10', events: [] },
  ]

  export default days