import { getCities, getWalkers } from "./database.js"

// update city list module to invoke get cities 
const cities = getCities()
const walkers = getWalkers()


export const CityList = () => {
    let citiesHTML = "<ul>" // changed to unordered list

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

