const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );




function findEmployee(employeeName) {
  for (let i = 0; i < employees.length; i++) {
    let person = employees[i];
    if (person.name === employeeName) {
      return person;
    }
  }
} 

let employeeInfo = findEmployee('Jem');

console.log(employeeInfo.employeeNumber.length);


function bonusCalc() {

  let bonus = 0;
  
  if (employeeInfo.reviewRating < 2){
    return bonus = 0;
  }
  else if (employeeInfo.reviewRating === 3) {
    return bonus = bonus + .04; 
  }
  else if (employeeInfo.reviewRating === 4) {
    return bonus = bonus + .06;
  }
  else if (employeeInfo.reviewRating === 5) {
    return bonus = bonus + .10;
  }

  if (employeeInfo.employeeNumber.length >= 4 && employeeInfo.reviewRating > 2) {
    return bonus = bonus + .05;
  } 
  if (employeeInfo.annualSalary > 65000 && employeeInfo.reviewRating > 2) {
    return bonus = bonus - .01;
  }
  if (bonus > .13) {
    return bonus = .13;
  } 
  if (bonus < 0) {
    return bonus = 0;
  }

  return bonus = bonus * 100;
}

console.log(bonusCalc());

  // employees.name = name;
  // employees.employeeNumber = employeeNumber
  // employees.annualSalary = annualSalary
  // employees.reviewRating = reviewRating