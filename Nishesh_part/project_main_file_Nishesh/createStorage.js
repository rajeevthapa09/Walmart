// This javascript file is for initializing  data at first if the local storage is empty. 
// function declared here init() is called at the bottom here.
//  using this file name- "createStorage.js" in other files, data is initialized . 
// If the local storage is empty,  initialization function init() is called .
// If local storage already has something, then init() is not called.  

function init() {

    let storedItems = localStorage.getItem('items');

    if (storedItems)
        return;


    let items = [
        {
            price: 19.99,
            description: "Item 1 description",
            rating: 4,
            image: "image/sampleImage1.jpeg",
            department: "Technology",
            brand: "Microsoft"

        },
        {
            price: 29.99,
            description: "Item 2 description",
            rating: 3,
            image: "image/sampleImage1.jpeg",
            department: "Business",
            brand: "Apple"
        },
        {
            price: 39.99,
            description: "Item 3 description",
            rating: 5,
            image: "image/sampleImage1.jpeg",
            department: "Business",
            brand: "Microsoft"
        },
        {
            price: 29.99,
            description: "Item 2 description",
            rating: 3,
            image: "image/sampleImage1.jpeg",
            department: "Business",
            brand: "Apple"
        },
        {
            price: 39.99,
            description: "Item 3 description",
            rating: 5,
            image: "image/sampleImage1.jpeg",
            department: "Marketing",
            brand: "Apple"
        },
        // add more items as needed
    ];

    localStorage.setItem("items", JSON.stringify(items));

}

init();