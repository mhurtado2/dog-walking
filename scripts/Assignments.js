import { getPets, getWalkers} from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
//const walkerCities = getWalkerCities()

// Function whose responsibility is to find the walker assigned to a pet
//one mistake 2nd param chnaged to allWalkers
const findPetWalker = (pet, allWalkers) => {
    let petWalker = null

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

/*
const assignedCityNames = (assignments) => {
    // Define an empty string that will get appended with matching cities
    let cityNames = " "
    // Iterate the array of assignment objects
    for (const assignment of assignments) {
        // For each assignment, iterate the cities array to find the match
        for (const city of cities) {
            // Add the name of the matching city to the array of city names
            if (city.id === assignment.cityId) {
                // After the loop is done, return the string
                cityNames = `${cityNames} and ${city.name}`
            }
        }
    }
    return cityNames
}
*/




export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"


    // added a += to line 30 after assignmentHtml
    for (const currentPet of pets) {
        const currentPetWalker = findPetWalker(currentPet, walkers)
        assignmentHTML += ` 
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetWalker.city}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

