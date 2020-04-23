var totalResults = [];
var biggest = 0;

function CreateBeerResults(name, image) {
    this.name = name;
    this.image = image;
    totalResults.push(this);

}

function restoreFromLocal() {

    if (JSON.parse(localStorage.getItem('finalLiquorResult'))) {
        var finalRestore = JSON.parse(localStorage.getItem('finalLiquorResult'));

    }
    if (JSON.parse(localStorage.getItem('finalBeerResult'))) {
        var finalRestore = JSON.parse(localStorage.getItem('finalBeerResult'));
    }
    var biggestIndex = 0;
    var biggestValue = 0;

    for (var i = 0; i < finalRestore.length; i++) {

        if (finalRestore[i] > biggestValue) {
            biggestIndex = i;
            biggestValue = finalRestore[i];
        }
        biggest = biggestIndex;
    }
    console.log(finalRestore);
    console.log('The biggest index: ' + biggestIndex);
    localStorage.clear(finalRestore);

}

function renderPartTwo() {
    var targetSection = document.getElementById('beerresults');
    var newP = document.createElement('p');
    var newImage = document.createElement('img');
    newImage.src = totalResults[biggest].image;
    newP.appendChild(newImage);
    targetSection.appendChild(newP);


}


var beer1 = new CreateBeerResults('beerOne', 'images/pexels-photo-1028637.jpeg');
var beer2 = new CreateBeerResults('beerTwo', 'images/pexels-photo-1028637.jpeg');
var beer3 = new CreateBeerResults('beerThree', 'images/pexels-photo-1028637.jpeg');
var beer4 = new CreateBeerResults('beerFour', 'images/pexels-photo-1028637.jpeg');
var beer5 = new CreateBeerResults('beerFive', 'images/pexels-photo-1028637.jpeg');
var beer6 = new CreateBeerResults('beerSix', 'images/pexels-photo-1028637.jpeg');
var beer7 = new CreateBeerResults('beerSeven', 'images/pexels-photo-1028637.jpeg');
var beer8 = new CreateBeerResults('beerEight', 'images/pexels-photo-1028637.jpeg');


restoreFromLocal();



renderPartTwo();

// Inspired By
// https://codepen.io/abeatrize/pen/LJqYey

// Bongo Cat originally created by @StrayRogue and @DitzyFlama

const ID = "bongo-cat"
const s = selector => `#${ID} ${selector}`
const notes = document.querySelectorAll(".note")

for (let note of notes) {
    note.parentElement.appendChild(note.cloneNode(true))
    note.parentElement.appendChild(note.cloneNode(true))
}

const music = { note: s(".music .note") }
const terminal = { frame: s(".terminal-frame"), code: s(".terminal-code line") }
const cat = {
    pawRight: {
        up: s(".paw-right .up"),
        down: s(".paw-right .down")
    },
    pawLeft: {
        up: s(".paw-left .up"),
        down: s(".paw-left .down")
    }
}

const style = getComputedStyle(document.documentElement)

const green = style.getPropertyValue("--green")
const pink = style.getPropertyValue("--pink")
const blue = style.getPropertyValue("--blue")
const orange = style.getPropertyValue("--orange")
const cyan = style.getPropertyValue("--cyan")

gsap.set(music.note, { scale: 0, autoAlpha: 1 })

const animatePawState = selector =>
    gsap.fromTo(
        selector, { autoAlpha: 0 }, {
            autoAlpha: 1,
            duration: 0.01,
            repeatDelay: 0.19,
            yoyo: true,
            repeat: -1
        }
    )

const tl = gsap.timeline()

tl
    .add(animatePawState(cat.pawLeft.up), "start")
    .add(animatePawState(cat.pawRight.down), "start")
    .add(animatePawState(cat.pawLeft.down), "start+=0.19")
    .add(animatePawState(cat.pawRight.up), "start+=0.19")
    .timeScale(1.6)

gsap.from(".terminal-code line", {
    drawSVG: "0%",
    duration: 0.1,
    stagger: 0.1,
    ease: 'none',
    repeat: -1
})

const noteEls = gsap.utils.pipe(
    gsap.utils.toArray,
    gsap.utils.shuffle
)(music.note)

const numNotes = noteEls.length / 3
const notesG1 = noteEls.splice(0, numNotes)
const notesG2 = noteEls.splice(0, numNotes)
const notesG3 = noteEls

const colorizer = gsap.utils.random([green, pink, blue, orange, cyan, "#a3a4ec", "#67b5c0", "#fd7c6e"], true)
const rotator = gsap.utils.random(-50, 50, 1, true);
const dir = amt => `${gsap.utils.random(["-", "+"])}=${amt}`

const animateNotes = (els) => {
    els.forEach(el => {
        gsap.set(el, {
            stroke: colorizer(),
            rotation: rotator(),
            x: gsap.utils.random(-25, 25, 1)
        })
    })

    return gsap.fromTo(els, {
        autoAlpha: 1,
        y: 0,
        scale: 0
    }, {
        duration: 2,
        autoAlpha: 0,
        scale: 1,
        ease: "none",
        stagger: {
            from: "random",
            each: 0.5
        },
        rotation: dir(gsap.utils.random(20, 30, 1)),
        x: dir(gsap.utils.random(40, 60, 1)),
        y: gsap.utils.random(-200, -220, 1),
        onComplete: () => animateNotes(els)
    })
}

tl
    .add(animateNotes(notesG1))
    .add(animateNotes(notesG2), ">0.05")
    .add(animateNotes(notesG3), ">0.25")