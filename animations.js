const slider1 = document.getElementById('categorie1')
const rightCatOne = document.getElementById('right-cat1')
const leftCatOne = document.getElementById('left-cat1')

const slider2 = document.getElementById('categorie2')
const rightCatTwo = document.getElementById('right-cat2')
const leftCatTwo = document.getElementById('left-cat2')

const slider3 = document.getElementById('categorie3')
const rightCatThree = document.getElementById('right-cat3')
const leftCatThree = document.getElementById('left-cat3')

const slider4 = document.getElementById('categorie4')
const rightCatFour = document.getElementById('right-cat4')
const leftCatFour = document.getElementById('left-cat4')

let itemsPerScreen = parseInt(getComputedStyle(slider1).getPropertyValue("--items-per-screen"))
let sliderIndex = parseInt(getComputedStyle(slider1).getPropertyValue("--slider-index"))

rightCatOne.onclick = function () {
    let sliderIndex = parseInt(
        getComputedStyle(slider1).getPropertyValue("--slider-index")
    )
    let itemsPerScreen = parseInt(getComputedStyle(slider1).getPropertyValue("--items-per-screen")
    )
    if ((sliderIndex == 0) && (itemsPerScreen == 4)) {
        slider1.style.setProperty("--slider-index", 1)
    } else if ((sliderIndex == 1) && (itemsPerScreen == 4)) {
        slider1.style.setProperty("--slider-index", 0)
    } else if ((sliderIndex == 0) && (itemsPerScreen <= 3)) {
        slider1.style.setProperty("--slider-index", 1)
    } else if ((sliderIndex == 1) && (itemsPerScreen <= 3)) {
        slider1.style.setProperty("--slider-index", 2)
    } else if ((sliderIndex == 2) && (itemsPerScreen <= 3)) {
        slider1.style.setProperty("--slider-index", 0)
    }
}

leftCatOne.onclick = function () {
    let sliderIndex = parseInt(
        getComputedStyle(slider1).getPropertyValue("--slider-index")
    )
    let itemsPerScreen = parseInt(getComputedStyle(slider1).getPropertyValue("--items-per-screen"))
    if ((sliderIndex == 0) && (itemsPerScreen == 4)) {
        slider1.style.setProperty("--slider-index", 1)
    } else if ((sliderIndex == 1) && (itemsPerScreen == 4)) {
        slider1.style.setProperty("--slider-index", 0)
    } else if ((sliderIndex == 0) && (itemsPerScreen <= 3)) {
        slider1.style.setProperty("--slider-index", 2)
    } else if ((sliderIndex == 1) && (itemsPerScreen <= 3)) {
        slider1.style.setProperty("--slider-index", 0)
    } else if ((sliderIndex == 2) && (itemsPerScreen <= 3)) {
        slider1.style.setProperty("--slider-index", 1)
    }
}

rightCatTwo.onclick = function () {
    let sliderIndex = parseInt(
        getComputedStyle(slider2).getPropertyValue("--slider-index")
    )
    let itemsPerScreen = parseInt(getComputedStyle(slider2).getPropertyValue("--items-per-screen"))
    if ((sliderIndex == 0) && (itemsPerScreen == 4)) {
        slider2.style.setProperty("--slider-index", 1)
    } else if ((sliderIndex == 1) && (itemsPerScreen == 4)) {
        slider2.style.setProperty("--slider-index", 0)
    } else if ((sliderIndex == 0) && (itemsPerScreen <= 3)) {
        slider2.style.setProperty("--slider-index", 1)
    } else if ((sliderIndex == 1) && (itemsPerScreen <= 3)) {
        slider2.style.setProperty("--slider-index", 2)
    } else if ((sliderIndex == 2) && (itemsPerScreen <= 3)) {
        slider2.style.setProperty("--slider-index", 0)
    }
}

leftCatTwo.onclick = function () {
    let sliderIndex = parseInt(
        getComputedStyle(slider2).getPropertyValue("--slider-index")
    )
    let itemsPerScreen = parseInt(getComputedStyle(slider2).getPropertyValue("--items-per-screen"))
    if ((sliderIndex == 0) && (itemsPerScreen == 4)) {
        slider2.style.setProperty("--slider-index", 1)
    } else if ((sliderIndex == 1) && (itemsPerScreen == 4)) {
        slider2.style.setProperty("--slider-index", 0)
    } else if ((sliderIndex == 0) && (itemsPerScreen <= 3)) {
        slider2.style.setProperty("--slider-index", 2)
    } else if ((sliderIndex == 1) && (itemsPerScreen <= 3)) {
        slider2.style.setProperty("--slider-index", 0)
    } else if ((sliderIndex == 2) && (itemsPerScreen <= 3)) {
        slider2.style.setProperty("--slider-index", 1)
    }
}

rightCatThree.onclick = function () {
    let sliderIndex = parseInt(
        getComputedStyle(slider3).getPropertyValue("--slider-index")
    )
    let itemsPerScreen = parseInt(getComputedStyle(slider3).getPropertyValue("--items-per-screen"))
    if ((sliderIndex == 0) && (itemsPerScreen == 4)) {
        slider3.style.setProperty("--slider-index", 1)
    } else if ((sliderIndex == 1) && (itemsPerScreen == 4)) {
        slider3.style.setProperty("--slider-index", 0)
    } else if ((sliderIndex == 0) && (itemsPerScreen <= 3)) {
        slider3.style.setProperty("--slider-index", 1)
    } else if ((sliderIndex == 1) && (itemsPerScreen <= 3)) {
        slider3.style.setProperty("--slider-index", 2)
    } else if ((sliderIndex == 2) && (itemsPerScreen <= 3)) {
        slider3.style.setProperty("--slider-index", 0)
    }
}

leftCatThree.onclick = function () {
    let sliderIndex = parseInt(
        getComputedStyle(slider3).getPropertyValue("--slider-index")
    )
    let itemsPerScreen = parseInt(getComputedStyle(slider3).getPropertyValue("--items-per-screen"))
    if ((sliderIndex == 0) && (itemsPerScreen == 4)) {
        slider3.style.setProperty("--slider-index", 1)
    } else if ((sliderIndex == 1) && (itemsPerScreen == 4)) {
        slider3.style.setProperty("--slider-index", 0)
    } else if ((sliderIndex == 0) && (itemsPerScreen <= 3)) {
        slider3.style.setProperty("--slider-index", 2)
    } else if ((sliderIndex == 1) && (itemsPerScreen <= 3)) {
        slider3.style.setProperty("--slider-index", 0)
    } else if ((sliderIndex == 2) && (itemsPerScreen <= 3)) {
        slider3.style.setProperty("--slider-index", 1)
    }
}

rightCatFour.onclick = function () {
    let sliderIndex = parseInt(
        getComputedStyle(slider4).getPropertyValue("--slider-index")
    )
    let itemsPerScreen = parseInt(getComputedStyle(slider4).getPropertyValue("--items-per-screen"))
    if ((sliderIndex == 0) && (itemsPerScreen == 4)) {
        slider4.style.setProperty("--slider-index", 1)
    } else if ((sliderIndex == 1) && (itemsPerScreen == 4)) {
        slider4.style.setProperty("--slider-index", 0)
    } else if ((sliderIndex == 0) && (itemsPerScreen <= 3)) {
        slider4.style.setProperty("--slider-index", 1)
    } else if ((sliderIndex == 1) && (itemsPerScreen <= 3)) {
        slider4.style.setProperty("--slider-index", 2)
    } else if ((sliderIndex == 2) && (itemsPerScreen <= 3)) {
        slider4.style.setProperty("--slider-index", 0)
    }
}

leftCatFour.onclick = function () {
    let sliderIndex = parseInt(
        getComputedStyle(slider4).getPropertyValue("--slider-index")
    )
    let itemsPerScreen = parseInt(getComputedStyle(slider4).getPropertyValue("--items-per-screen"))
    if ((sliderIndex == 0) && (itemsPerScreen == 4)) {
        slider4.style.setProperty("--slider-index", 1)
    } else if ((sliderIndex == 1) && (itemsPerScreen == 4)) {
        slider4.style.setProperty("--slider-index", 0)
    } else if ((sliderIndex == 0) && (itemsPerScreen <= 3)) {
        slider4.style.setProperty("--slider-index", 2)
    } else if ((sliderIndex == 1) && (itemsPerScreen <= 3)) {
        slider4.style.setProperty("--slider-index", 0)
    } else if ((sliderIndex == 2) && (itemsPerScreen <= 3)) {
        slider4.style.setProperty("--slider-index", 1)
    }
}





