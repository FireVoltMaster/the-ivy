// MAY 2023


const days = [
    { date: '2023-04-30', events: [] },
    { date: '2023-05-01', isCurrentMonth: true, events: [] },
    { date: '2023-05-02', isCurrentMonth: true, events: [] },
    { date: '2023-05-03', isCurrentMonth: true, events: [] },
    { date: '2023-05-04', isCurrentMonth: true, events: [] },
    { date: '2023-05-05', isCurrentMonth: true, events: [
        { id: 1, name: "Cinco de Mayo Paint Night", time: '6:30P', datetime: '', href: '' }
    ] },
    { date: '2023-05-06', isCurrentMonth: true, events: [
        { id: 2, name: "Sabrina's 10th Birthday", time: '', datetime: '', href: '' }
    ] },
    { date: '2023-05-07', isCurrentMonth: true, events: [] },
    { date: '2023-05-08', isCurrentMonth: true, events: [] },
    { date: '2023-05-09', isCurrentMonth: true, events: [] },
    { date: '2023-05-10', isCurrentMonth: true, events: [] },
    { date: '2023-05-11', isCurrentMonth: true, events: [
        { id: 3, name: "Mother's Day Sip & Paint", time: '6:30P', datetime: '', href: '' }
    ] },
    { date: '2023-05-12', isCurrentMonth: true, events: [] },
    { date: '2023-05-13', isCurrentMonth: true, events: [
        { id: 4, name: "Mommy & Me Craft", time: '2P', datetime: '', href: '' }
    ] },
    { date: '2023-05-14', isCurrentMonth: true, events: [] },
    { date: '2023-05-15', isCurrentMonth: true, events: [] },
    { date: '2023-05-16', isCurrentMonth: true, events: [
        { id: 5, name: "Business or Brand Collab", time: '', datetime: '', href: '' }
    ] },
    { date: '2023-05-17', isCurrentMonth: true, events: [
        { id: 6, name: "Make a plant terrarium", time: '6:30', datetime: '', href: '' }
    ] },
    { date: '2023-05-18', isCurrentMonth: true, events: [] },
    { date: '2023-05-19', isCurrentMonth: true, events: [
    ] },
    { date: '2023-05-20', isCurrentMonth: true, events: [
        { id: 7, name: "Summer Kickoff Party", time: '7P', datetime: '', href: '' }
    ] },
    { date: '2023-05-21', isCurrentMonth: true, events: [] },
    { date: '2023-05-22', isCurrentMonth: true, events: [] },
    { date: '2023-05-23', isCurrentMonth: true, events: [
        { id: 8, name: "Business or Brand Collab", time: '', datetime: '', href: '' }
    ] },
    { date: '2023-05-24', isCurrentMonth: true, events: [
        { id: 9, name: "Swarovski Crystal Bead Craft", time: '6:30P', datetime: '', href: '' }
    ] },
    { date: '2023-05-25', isCurrentMonth: true, events: [
        { id: 10, name: "Tie Dye & Rolling Tray", time: '6:30P', datetime: '', href: '' }
    ] },
    { date: '2023-05-26', isCurrentMonth: true, events: [
        { id: 11, name: "Business or Brand Collab", time: '6:30P', datetime: '', href: '' }
    ] },
    { date: '2023-05-27', isCurrentMonth: true, events: [
        { id: 12, name: "Jocelyn's Birthday!", time: '', datetime: '', href: '' }
    ] },
    { date: '2023-05-28', isCurrentMonth: true, events: [] },
    { date: '2023-05-29', isCurrentMonth: true, events: [] },
    { date: '2023-05-30', isCurrentMonth: true, events: [
        { id: 13, name: "Business or Brand Collab", time: '', datetime: '', href: '' }
    ] },
    { date: '2023-05-31', isCurrentMonth: true, events: [
        { id: 13, name: "Sip & Paint", time: '6:30P', datetime: '', href: '' }
    ] },
    { date: '2023-06-01', events: [] },
    { date: '2023-06-02', events: [] },
    { date: '2023-06-03', events: [] },
    { date: '2023-06-04', events: [] },
    { date: '2023-06-05', events: [] },
    { date: '2023-06-06', events: [] },
    { date: '2023-06-07', events: [] },
    { date: '2023-06-08', events: [] },
    { date: '2023-06-09', events: [] },
    { date: '2023-06-10', events: [] },
]

export default days