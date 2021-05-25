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
