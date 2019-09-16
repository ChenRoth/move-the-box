// step 1: get the element from HTML and store it in a variable

// this is the old way
// const box = document.getElementById('box');

// this is the same as using document.getElementById('box);
const box = document.querySelector('#box');

// step 2: define a function to move the box - moveBox()
function moveBox(vertical, horizontal) {

    // box.offsetTop stores the current value of top, so we add the vertical value to it
    box.style.top = box.offsetTop + vertical + 'px';
    // box.offsetLeft stores the current value of left, so we add the horizontal value to it
    box.style.left = box.offsetLeft + horizontal + 'px';
}

// step 3: connect moveBox() to the keyboard event, so that when the user presses a key, the box will be moved
document.body.addEventListener('keydown', function(event) {
    // we use event.key to know which key the user pressed
    // we can also use event.keyCode which contains the ASCII code of the key
    switch (event.key) {
        case "ArrowLeft": {
            moveBox(0, -5);
            break;
        }
        case "ArrowRight": {
            moveBox(0, 5);
            break;
        }
        case "ArrowUp": {
            moveBox(-5, 0);
            break;
        }
        case "ArrowDown": {
            moveBox(5, 0);
            break;
        }
    }
});