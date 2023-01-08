// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

findMatching(drivers,'Bobby')
function findMatching(drivers, attribute) {
    return drivers.filter( function (driver) { 
        return driver.toLowerCase() === attribute.toLowerCase() 
    })
} 

fuzzyMatch(drivers,'Sa')
function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function (driver) { 
        return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() 
    })
}

const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

matchName(driver,'Bobby')
function matchName(driver, argument) {
    return driver.filter(function (driver) { 
        return driver.name === argument 
    })
  }