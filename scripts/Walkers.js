import { getWalkers } from "./database.js"
import { getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

document.addEventListener("click", (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")
            const walkerObj = walkers.find((walker) => walker.id === parseInt(walkerId))
            const cityObj = cities.find((city) => city.id === walkerObj.cityId)
            window.alert(`${walkerObj.name} services ${cityObj.name}`)
        }
    }
    )