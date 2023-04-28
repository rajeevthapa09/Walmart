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
            price: 16.99,
            description: "Time and Tru Women's T-Shirt Midi Dress",
            rating: 4,
            image: "TTW_TshirtMidiDress.jpg",
            department: "Clothing",
            brand: "Time and Tru"

        },
        {
            price: 29.99,
            description: "Time and Tru Women's Drawstring Waist Soft Shorts",
            rating: 3,
            image: "TTW_WomensDrawstring.jpg",
            department: "Clothing",
            brand: "Time and Tru"
        },
        {
            price: 39.99,
            description: "Time And Tru Women's Embroidered Top",
            rating: 2,
            image: "TTW_WomensEmbroidered.jpg",
            department: "Clothing",
            brand: "Time and Tru"
        },
        {
            price: 29.99,
            description: "Time and Tru Adult Women's Straw Bucket Hat",
            rating: 3,
            image: "TTW_AdultWomenStraw.jpg",
            department: "Apparel",
            brand: "Time and Tru"
        },
        {
            price: 139.99,
            description: "Bulova Women's Classic Crystal Stainless Steel Watch 96L238",
            rating: 5,
            image: "Bulova_WomenClassic.jpg",
            department: "Watches",
            brand: "Bulova"
        },
        {
            price: 116.71,
            description: "96L128 Women's Crystal White MOP Dial Stainless Steel Bangle Bracelet Watch",
            rating: 5,
            image: "Bulova_WomenCrystalWhite.jpg",
            department: "Watches",
            brand: "Bulova"
        },
        {
            price: 239.99,
            description: "Highbridge Diamond Chronograph Ladies Watch 96R163",
            rating: 3,
            image: "Bulova_HighbridgeDiamond.jpg",
            department: "Watches",
            brand: "Bulova"
        },
        {
            price: 139.99,
            description: "Bulova Women's TurnStyle 98L246 Watch",
            rating: 5,
            image: "Bulova_WomenFuturo.jpg",
            department: "Watches",
            brand: "Bulova"
        },
        {
            price: 19.99,
            description: "The Get Women's Plus Size Utility Mini Skirt",
            rating: 2,
            image: "TheGet_WomenPlusSize.jpg",
            department: "Clothing",
            brand: "The Get"
        },
        {
            price: 39.99,
            description: "The Get Women's Cropped Bomber Jacket",
            rating: 1,
            image: "TheGet_WomenCroppedBomber.jpg",
            department: "Fashion",
            brand: "The Get"
        },
        {
            price: 39.99,
            description: "The Get Women's Open-Back Sweatshirt",
            rating: 3,
            image: "TheGet_womenOpenBack.jpg",
            department: "Fashion",
            brand: "The Get"
        },
        {
            price: 139.99,
            description: "Michael Kors Xs Carry All Jet Set Travel Womens Tote (Black Sig/Gold)",
            rating: 3,
            image: "MichaelKors_CarryAll.jpg",
            department: "Women Purses",
            brand: "Michael Kors"
        },
        {
            price: 139.99,
            description: "MICHAEL KORS Mercer 35S1GM9M2B Medium Logo and Leather Accordion Crossbody Bag In Brown",
            rating: 2,
            image: "MichaelKors_Mercer.jpg",
            department: "Women Purses",
            brand: "Michael Kors"
        },
        {
            price: 39.99,
            description: "Michael Kors Womens Jet Set Travel Large Trifold Leather Wallet, Silver",
            rating: 5,
            image: "MichaelKors_JetSet.jpg",
            department: "Women Purses",
            brand: "Michael Kors"
        },
        {
            price: 65.99,
            description: "Michael Kors Aventura MK 1071 Metal Womens Aviator Sunglasses Light Gold 59mm Adult",
            rating: 4,
            image: "MichaelKors_Aventura.jpg",
            department: "Apparel",
            brand: "Michael Kors"
        },
        {
            price: 39.99,
            description: "10K Yellow Gold shiny Small Endless Round Hoop Earrings - 1X10mm",
            rating: 3,
            image: "JewelStop_10kYellow.jpg",
            department: "Jewelry",
            brand: "JewelStop"
        },
        {
            price: 39.99,
            description: "14K Yellow White Gold Tubular Octagonal ",
            rating: 3,
            image: "JewelStop_14kYellow.jpg",
            department: "Jewelry",
            brand: "JewelStop"
        },
        {
            price: 49.99,
            description: "Joyspun Women's Sleepwear Mesh Trim",
            rating: 4,
            image: "FreeAssembly_MiniDress.jpg",
            department: "Fashion",
            brand: "Free Assembly"
        },
        {
            price: 59.99,
            description: "Women's Short Sleeve Sleep Top and Jogger",
            rating: 4,
            image: "FreeAssembly_WomenButton.jpg",
            department: "Clothing",
            brand: "Free Assembly"
        },
        {
            price: 9.99,
            description: "Butterly Fly Fly Dress",
            rating: 4,
            image: "FreeAssembly_WomenTextured.jpg",
            department: "Clothing",
            brand: "Free Assembly"
        },
        // add more items as needed
    ];

    localStorage.setItem("items", JSON.stringify(items));

}

init();