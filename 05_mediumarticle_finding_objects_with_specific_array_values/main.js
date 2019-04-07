const recActivities = [
    { name:'Swimming', ages: [6, 7, 8], maxCap: 10 },
    { name:'Skating', ages: [8, 9, 10], maxCap: 20 },
    { name:'Open Gym', ages: [10, 11, 12], maxCap: 30 }
];

const largeGroup = recActivities.filter(activity => (activity.maxCap === 20));
// console.log(largeGroup);

const ageAppropriate = recActivities.filter(activity => (activity.ages.includes(8)));
// console.log(ageAppropriate);




