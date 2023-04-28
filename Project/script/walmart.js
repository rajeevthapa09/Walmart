//Speed Filter
function speedChevron() {
    let speedImg = document.getElementById("speedChevron");
    if (speedImg.getAttribute("src") === "image/chevron-down-icon.svg") {
        speedImg.setAttribute("src", "image/chevron-up-icon.svg");
    } else if (speedImg.getAttribute("src") === "image/chevron-up-icon.svg") {
        speedImg.setAttribute("src", "image/chevron-down-icon.svg");
    }
}

//Brand Filter
function brandChevron() {
    let brandImg = document.getElementById("brandChevron");
    if (brandImg.getAttribute("src") === "image/chevron-down-icon.svg") {
        brandImg.setAttribute("src", "image/chevron-up-icon.svg");
        document.getElementById("brandFilterBox").style.display = "block";
    } else if (brandImg.getAttribute("src") === "image/chevron-up-icon.svg") {
        brandImg.setAttribute("src", "image/chevron-down-icon.svg");
        document.getElementById("brandFilterBox").style.display = "none";
    }
}

//Price Filter
function priceChevron() {
    let priceFilter = document.getElementById("priceFilterBox");
    let priceImg = document.getElementById("priceChevron");
    if (priceImg.getAttribute("src") === "image/chevron-down-icon.svg") {
        priceImg.setAttribute("src", "image/chevron-up-icon.svg");
        priceFilter.style.display = "block";
        //adding price Slider range
        document.getElementById("priceSlider").innerHTML = "<input id='ex2' type='text' class='span2' value='' data-slider-min='0' " +
            "data-slider-max='1300' data-slider-step='5' data-slider-value='[0,1300]' />";
        let slider = new Slider('#ex2', {});

        //price value on the slider
        let value = slider.getValue();
        slider.on('slideStop', function (value) {
            document.getElementById('priceRange').innerHTML = "$" + value[0] + " - $" + value[1];
            detectChangeOfPrice(value[0], value[1]);
            priceFilter.style.display = "none";
            priceImg.setAttribute("src", "image/chevron-down-icon.svg");
        })
    } else if (priceImg.getAttribute("src") === "image/chevron-up-icon.svg") {
        priceImg.setAttribute("src", "image/chevron-down-icon.svg");
        priceFilter.style.display = "none";
        document.getElementById("priceSlider").innerHTML = "";
    }
}

function clearPriceFilter(){
    document.getElementById('priceRange').innerHTML = "$" + 0 + " - $" + 1300;
    detectChangeOfPrice(0, 1300);
}

//All Filters
function allFilters(){
    let filter = document.getElementById("allFiltersWin");
    filter.style.display="block";
}

function closeAllFilters(){
    document.getElementById("allFiltersWin").style.display = "none";
}

//All Departments
function deptFilter() {
    let dept = document.getElementById("deptFilter");
    let chevron = document.getElementById("deptChevron");
    if (chevron.getAttribute("src") === "image/chevron-down-icon.svg") {
        chevron.setAttribute("src", "image/chevron-up-icon.svg");
        document.getElementById("department_AllFilters").style.display = "block";
    } else if (chevron.getAttribute("src") === "image/chevron-up-icon.svg") {
        chevron.setAttribute("src", "image/chevron-down-icon.svg");
        document.getElementById("department_AllFilters").style.display = "none";
    }
}

//All Departments
function filterRating() {
    let rating = document.getElementById("ratingFlex");
    let chevron = document.getElementById("ratingChevron");
    if (chevron.getAttribute("src") === "image/chevron-down-icon.svg") {
        chevron.setAttribute("src", "image/chevron-up-icon.svg");
        rating.style.display = "block";
    } else if (chevron.getAttribute("src") === "image/chevron-up-icon.svg") {
        chevron.setAttribute("src", "image/chevron-down-icon.svg");
        rating.style.display = "none";
    }
}

function filterByDept(){
    document.getElementById("allFiltersWin").style.display = "none";
    detectChangeOfDept();
}

//sort Menu
function sortMenu() {
    let img = document.getElementById("spanSortChev");
    if (img.getAttribute("src") === "image/chevron-down-icon.svg") {
        img.setAttribute("src", "image/chevron-up-icon.svg");
        document.getElementById("sortDropDown").style.display = "block";

    } else if (img.getAttribute("src") === "image/chevron-up-icon.svg") {
        img.setAttribute("src", "image/chevron-down-icon.svg");
        document.getElementById("sortDropDown").style.display = "none";
    }
}

