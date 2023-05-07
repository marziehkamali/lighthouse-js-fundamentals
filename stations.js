const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (s) {
 
const chosenStations = [];
 // then we want to loop through the provided array of stations so we can check each one
  for (const station of s) {
       if (station[1] >= 20 && (station[2] === "school" || station[2] === "community centre")) {
      chosenStations.push(station[0]);  
    };
  };
  return chosenStations;
};

console.log(chooseStations(stations));
