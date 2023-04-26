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
            brand: "Apple"

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
            brand: "Apple"
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