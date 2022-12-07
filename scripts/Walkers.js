import { getWalkers, getWalkerCities, getCities } from "./database.js"
// import getWalkerCities 

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("walker")) {

            const [, walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterWalkerCitiesByWalker(walker)
                    const cities = assignedCityNames(assignments)

                    window.alert(`${walker.name} services ${cities}`)
                }
            }
        }
    }
)


// The function need the walker information, so define a parameter
const filterWalkerCitiesByWalker = (walker) => {
    // Define an empty array to store all of the assignment objects
    const assignments = []
    // Iterate the array value of walkerCities
    for (const assignment of walkerCities) {
        // Check if the primary key of the walker equals the foreign key on the assignment
        if (assignment.walkerId === walker.id) {

            assignments.push(assignment)
        }
        // If it does, add the current object to the array of assignments

        // After the loop is done, return the assignments array
    }
    return assignments
}


const cities = getCities()

// Define a function that builds a string of city names. Needs a paramter for assignments array.
const assignedCityNames = (assignments) => {
    // Define an empty string that will get appended with matching cities
    let cityNames = ""
    // Iterate the array of assignment objects
    for (const assignment of assignments) {
        // For each assignment, iterate the cities array to find the match
        for (const city of cities) {
            // Add the name of the matching city to the array of city names
            if (city.id === assignment.cityId) {
                // After the loop is done, return the string
                cityNames = `${cityNames} \n${city.name}`
            }
        }
    }
    return cityNames
}


//${matchingCity.id}
//one mistake
const walkers = getWalkers()
// store walkerCities func in a variable 
const walkerCities = getWalkerCities()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    //two mistake 
    return walkerHTML

}
