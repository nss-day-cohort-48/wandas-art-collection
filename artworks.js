const artCollection = [
  {
    id: 1 /** Number */,
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
  },
  {
    id: 3,
    title: "Sculpture of David",
    artistName: "Michaelangelo",
    price: 1000000.99,
    typeOfMedium: "Marble",
    inStock: true,
    notes: "Much heavier than I thought",
    dateAquired: "April 18, 2021",
  },
  {
    id: 4,
    title: "Sculpture of David",
    artistName: "Michaelangelo",
    price: 1000000.99,
    typeOfMedium: "Marble",
    inStock: true,
    notes: "Much heavier than I thought",
    dateAquired: "April 18, 2021",
  },
  {
    id: 5,
    title: "Sculpture of David",
    artistName: "Michaelangelo",
    price: 1000000.99,
    typeOfMedium: "Marble",
    inStock: true,
    notes: "Much heavier than I thought",
    dateAquired: "April 18, 2021",
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
// for (const artwork of artCollection) {

//     // Wanda double's the market value for sale on the Dark Web
//     artwork.price = artwork.price * 2

//     // Wanda doesn't want potential clients to see items that have already sold
//     if (artwork.inStock) {
//         // console.log(`The artwork ${artwork.title} is valued at $${artwork.price}.`)
//     }
// }


// // Wanda wants to be able to find a particular piece of art by its title
// const findArtpiece = (title) => {
//     // Track if the piece was found. Assume it hasn't by default.
//     let titlesFound = []

//     // Look at each art object
//     for (const art of artCollection) {

//         // Does the current object's title property value equal the parameter
//         if (title === art.title) {
//             titlesFound.push(art)
//         }
//     }

//     // Loop done.... now what?
//     if (titlesFound.length > 0) {
//         console.log(titlesFound)
//     }
//     else {
//         console.log(`Could not find ${title}`)
//     }
// }

// findArtpiece("Sculpture of David")


// const something = true
// const somethingElse = false

// console.log(somethingElse + something)

// for (let i = 0; i < artCollection.length; i++) {

// }



// let i
// let len = words.length
// let sentence = ""

// for (i = 0; i < len; i = i+1) {
//     sentence += `${words[i]} `
// }

// console.log(sentence.slice(0, -1) + ".")

// const elementId = "this--is--so--cool"

// const array = elementId.split("--")

// console.log(array)









const words = [
    "what",
    "is",
    "happening"
]

console.log(words) // [ 'what', 'is', 'happening' ]
console.log(words.length) // 3
console.log(words[-1]) // undefined - KEY of -1
// ^ All of this is what I fully expected.. but then things got weird.

words[-1] = "here"

console.log(words) // [ 'what', 'is', 'happening', '-1': 'here' ] - Internal indexing still shows 0, 1, 2 along with an additional key value pair NOT part of sequencing
// ^ What's the deal with the
//     '-1': 'here'
// situation?? It's like a ghost value or something because...

console.log(words[-1]) // < This prints the string 'here'
console.log(words.length) // < But the length is still 3
console.log(words.slice(-1)) // < And when I tried using negative indexing to access the last item in the array with the slice method, it prints [ 'happening' ]... as if the 'here' doesn't exist??

words[10] = "THIS IS WIERD"

console.log(words) /** [
  'what',
  'is',
  'happening',
  <7 empty items>,
  'THIS IS WIERD',
  '-1': 'here'
] */
console.log(words.length) // < and the 'here' is still not factored into the length which evaluates to 11, including the 'THIS IS WEIRD' item, AND all the 'empty items'....
console.log(words.slice(-1)) // And THIS time when I use negative indexing via slice, it prints [ 'THIS IS WIERD' ]...


// The slice method supports negative indexing. To understand this, let's look at the image below. The items at the last position are indexed as -1 and the one at second to the last position as -2 and so on. While the positive indexing moves from left to right, the negative one moves from right to left. With this kind of indexing, the index of the first element is 'negative value of the length of the array'.


// if (somethingElse + something) console.log("yep!"), console.log("yep, again!")
// else console.log("nope!")




