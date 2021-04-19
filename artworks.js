const artCollection = [
    {
        id: 1, /** Number */
        title: "Starry Night" /** String */,
        artistName: "Van Gogh" /** String */,
        price: 400000.0 /** Number */,
        typeOfMedium: "Oils" /** String */,
        inStock: true /** Boolean */,
        notes: "This is a dope painting." /** String */,
        dateAquired: "January 01, 2020" /** String */,
    },
    {
        id: 2,
        title: "The Persistence Of Memory",
        artistName: "Salvido Dali",
        price: 2.0,
        typeOfMedium: "Oils",
        inStock: false,
        notes: "This one's aaaight!",
        dateAquired: "December 03, 1924",
    }
]


const davidSculpture = {
    id: 3,
    title: "Sculpture of David",
    artistName: "Michaelangelo",
    price: 1000000.99,
    typeOfMedium: "Marble",
    inStock: true,
    notes: "Much heavier than I thought",
    dateAquired: "April 18, 2021",
}

artCollection.push(davidSculpture)

const monaLisa = {
    id: 4,
    title: "Mona Lisa",
    artistName: "Leonardo da Vinci",
    price: 5000000.33,
    typeOfMedium: "Oil",
    inStock: true,
    notes: "Meh",
    dateAquired: "April 11, 2021",
}

artCollection.push(monaLisa)

const counterfeitDavidSculpture = {
    id: 5,
    title: "Sculpture of David",
    artistName: "Jeffangelo",
    price: 10000.99,
    typeOfMedium: "Concrete",
    inStock: true,
    notes: "Much heavier than I thought",
    dateAquired: "January 18, 2021",
}

artCollection.push(counterfeitDavidSculpture)



/**
 * In order to access the data inside the array,
 * we are going to us a for..of loop.
 * A for..of loop is used to iterate an array.
 **/


/**
 * The variable 'artwork' holds the value
 * of each individual item in the array,
 * and it only exists inside these curly braces.
 **/
for (const artwork of artCollection) {

    // Wanda double's the market value for sale on the Dark Web
    artwork.price = artwork.price * 2

    // Wanda doesn't want potential clients to see items that have already sold
    if (artwork.inStock) {
        // console.log(`The artwork ${artwork.title} is valued at $${artwork.price}.`)
    }
}


// Wanda wants to be able to find a particular piece of art by its title
const findArtpiece = (title) => {
    // Track if the piece was found. Assume it hasn't by default.
    let titlesFound = []

    // Look at each art object
    for (const art of artCollection) {

        // Does the current object's title property value equal the parameter
        if (title === art.title) {
            titlesFound.push(art)
        }
    }

    // Loop done.... now what?
    if (titlesFound.length > 0) {
        console.log(titlesFound)
    }
    else {
        console.log(`Could not find ${title}`)
    }
}

findArtpiece("Sculpture of David")


