//Race Day Project 

var raceNumber = Math.floor(Math.random() * 1000); 

var earlyRegistration = true; 

var runnerAge = 34; 

if (runnerAge > 18 && earlyRegistration) {
    raceNumber += 1000; 
}

if (runnerAge > 18 && earlyRegistration === true) {
    console.log(`Your race number is ${raceNumber} and you will race at 9:30am`); 
} else if (runnerAge > 18 && earlyRegistration === false) {
    console.log(`Your race number is ${raceNumber} and you will race at 11:00am.`)
} else if (runnerAge < 18) {
    console.log(`Your race number is ${raceNumber} and you will race at 12:30am.`)
}

//note: project said that it would account for runners that are exactly 18 years old but I did not see that in the directions...
