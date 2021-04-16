/**
 * The variable 'artCollection'
 * holds the value of an array
 * of objects.
 **/

const artCollection = [
  {
    id: 1 /** Number */
    /**
     * The id is the unique identifier.
     * Also known as the primary key
     **/,
    title: "Starry Night" /** String */,
    artistName: "Van Gogh" /** String */,
    price: 400000.0 /** Number */,
    typeOfMedium: "Oils" /** String */,
    inStock: true /** Boolean */,
    notes: "This is a dope painting." /** String */,
    dateAquired: "January 01, 2020" /** String */,
  },
  {
    id: 2 /** Number */
    /**
     * The id is the unique identifier.
     * Also known as the primary key
     **/,
    title: "The Persistence Of Memory" /** String */,
    artistName: "Salvido Dali" /** String */,
    price: 2.0 /** Number */,
    typeOfMedium: "Oils" /** String */,
    inStock: false /** Boolean */,
    notes: "This one's aaaight!" /** String */,
    dateAquired: "December 03, 1924" /** String */,
  },
]


/**
 * In order to access the data inside the array,
 * we are going to us a for..of loop.
 * A for..of loop is used to iterate an array.
 **/

for (const artwork of artCollection) {
  /**
   * The variable 'artwork' holds the value
   * of each individual item in the array,
   * and it only exists inside these curly braces.
   **/
  console.log(`The artwork ${artwork.title} is valued at $${artwork.price}.`)
  /**
   * We use dot notation to
   * access the value of the properties
   * on each artwork object.
   */
}

