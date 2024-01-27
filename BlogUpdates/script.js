var currentPos = 0;
var numberOfPosts = 0;
var gridColumns = document.getElementById('carousel-container').style.gridTemplateColumns; //not complete, don't implement
console.log(gridColumns);

const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

//when the page loads, add the first three posts to the page
window.addEventListener('load', e=> {
    addItems();
});

leftBtn.addEventListener('click', e=> {
    goLeft(currentPos);
});

rightBtn.addEventListener('click', e=> {
    goRight(currentPos);
});

function addItems() {
    const container = document.getElementById('carousel-container');
    const instaPosts = container.getElementsByClassName('carousel-item');
    numberOfPosts = instaPosts.length;

    for (var i = 0; i < instaPosts.length; i++) {
        instaPosts[i].classList.add('hidden');
    }

    for (var i = currentPos; i < currentPos + 3; i++) {
        instaPosts[i].classList.remove('hidden');
    }
}

function goLeft(index) {
    if (currentPos!=0) {
        currentPos--;
        addItems();
    }
}

function goRight(index) {
    if (currentPos < numberOfPosts - 3) {
        currentPos++;
        addItems();
    }
}