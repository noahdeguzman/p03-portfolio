// MENU THINGS
function menuToggle() {
    let menuOverlay = document.querySelector('#menuOverlay');
    menuOverlay.classList.toggle('hidden');
    toggleMenuLines();
}

function toggleMenuLines() {
    let line1 = document.querySelector('#menuLine1');
    let line2 = document.querySelector('#menuLine2');
    let line3 = document.querySelector('#menuLine3');

    line1.classList.toggle('transformLine1');
    line2.classList.toggle('transformLine2');
    line3.classList.toggle('transformLine3');
}


// STAR REVIEW
//reference: https://stackoverflow.com/questions/34102091/changing-images-src-with-event-onclick

function rating(starNumber, starContainer, imgID) {
    let stars = document.getElementById(starContainer).children;
    let clear;

    if (document.getElementById(imgID).getAttribute('src') ===
        "../img/star_fill.svg") {
        clear = true;
        clearRating(starContainer);
    } else {
        clear = false;
    }

    for (let i = 0; i < starNumber; i++) {
        let starImgID = stars[i].id;
        if (clear) {
            toggleStarToOutline(starImgID);
        } else {
            toggleStarToFill(starImgID);
        }
    }

}

function toggleStarToFill(starId) {
    let star = document.getElementById(starId);
    if (star.getAttribute('src') === "../img/star_outline.svg") {
        star.src = "../img/star_fill.svg";
    }
}

function toggleStarToOutline(starId) {
    let star = document.getElementById(starId);
    if (star.getAttribute('src') === "../img/star_fill.svg") {
        star.src = "../img/star_outline.svg";
    }
}

function clearRating(starContainer) {
    let stars = document.getElementById(starContainer).children;
    for (let i = 0; i < 5; i++) {
        let starDivID = stars[i].id;
        toggleStarToOutline(starDivID);
    }
}

let counter = 1;
function carouselHelper(oldId, id) {
    document.getElementById(oldId).classList.toggle("carousel-item");
    document.getElementById(id).classList.toggle("carousel-item");
}

function carouselButton(direction) {
    let oldId = "update" + counter.toString();
    let id;

    //Forward direction
    if (direction === "next") {
        if (counter === 3) {
            id = "update1";
            counter = 0;
        } else {
            id = "update" + (counter + 1).toString();
        }
        carouselHelper(oldId, id);
        counter++;
    }
    //Backward direction
    else if (direction === "prev") {
        if (counter === 1) {
            id = "update3";
            counter = 4;
        } else {
            id = "update" + (counter - 1).toString();
        }
        carouselHelper(oldId, id);
        counter--;
    }
}