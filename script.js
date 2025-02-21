const box = document.querySelector('#game-container');
const sprite = document.querySelector('#character');
const button = document.querySelector('button');
const char = document.getElementById("character")
const dot = document.getElementById("dot")
let speed = 25;


const toNum = (pxVal) => {
    return parseInt(pxVal, 10);
};

const handleMovement = (e) => {
    
    let left = toNum(sprite.style.left);
    const bottom = toNum(sprite.style.bottom);

    switch (e.key) {
        case 'a':
            if (left <= 0) return (sprite.style.left = 800);
            sprite.style.left = left - speed + 'px';
            char.className = " "
            char.classList.add("left")
            // detect()
            break;
        case 'd':
            if (left >= 775) return (sprite.style.left = 775);
            sprite.style.left = left + speed + 'px';
            char.className = " "
            char.classList.add("right")
            // detect()
            break;
        case 'w':
            if (bottom >= 0) return (sprite.style.bottom = -775);
            sprite.style.bottom = bottom + speed + 'px';
            char.className = " "
            char.classList.add("up")
            // detect()
            break;
        case 's':
            if (bottom <= -775) return (sprite.style.bottom = -775);
            sprite.style.bottom = bottom - speed + 'px';
            char.className = " "
            char.classList.add("down")
            // detect()
            break;
    
    }
detect()
console.log("Left " + char.style.left)
console.log("Bottom " + char.style.bottom)

};

function detect(){
    if (areElementsTouching(sprite, dot)) {
        // Elements are touching
        console.log('Elements are touching!');
        change()
      } else {
        // Elements are not touching
        console.log('Elements are not touching.');
      }
}

function areElementsTouching(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();
  
    return !(
      rect1.top > rect2.bottom || rect1.right < rect2.left || rect1.bottom < rect2.top || rect1.left > rect2.right
    );
  }

function change(){
    let left = toNum(dot.style.left);
    let bottom = toNum(dot.style.bottom);

    left = (Math.floor(Math.random()* 32)) * 25
    bottom = (Math.floor(Math.random()* 32)) * 25
    dot.style.bottom = bottom + "px"
    dot.style.left = left + "px"
    console.log(dot.style.left)
    console.log(dot.style.bottom)
}
window.addEventListener('keydown', handleMovement);

// button.addEventListener('click', () => (speed += 5));

//Make a Maze