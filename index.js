const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function() {
    return drivers.slice(0,2)
};
const returnLastTwoDrivers = function() {
    return drivers.slice(-2)
};
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
    return function (value) {
      return fareMultiplier * value;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function (drivers, differentDrivers) {
    return differentDrivers(drivers);
  };