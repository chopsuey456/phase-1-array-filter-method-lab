// Code your solution here
// findMatching function
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // fuzzyMatch function
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.slice(0, query.length).toLowerCase() === query.toLowerCase());
  }
  
  // matchName function
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  