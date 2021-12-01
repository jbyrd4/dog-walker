import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}"">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

// Event Listener With Nested For Loop
//
// document.addEventListener("click", (clickEvent) => {
//     const itemClicked = clickEvent.target
//     if (itemClicked.id.startsWith("pet")) {
//         const [,petId] = itemClicked.id.split("--")
//         for (const pet of pets) {
//             if (pet.id === parseInt(petId)) {
//                 for (const walker of walkers) {
//                     if (walker.id === pet.walkerId)
//                     window.alert(`${pet.name} is being walked by ${walker.name}.`)
//                 }
//             }
//         }
        
//     }
// })

// Event Listener With Find
//
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("pet")) {
        const [,petId] = itemClicked.id.split("--")
        const petClicked = pets.find((pet) => parseInt(petId) === pet.id)
        const petWalker = walkers.find((walker) => walker.id === petClicked.walkerId)
        window.alert(`${petClicked.name} is being walked by ${petWalker.name}`)
    }
})