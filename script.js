const box = document.getElementById('game-container');
// const sprite = document.querySelector('#character');
const button = document.querySelector('button');
const char = document.getElementById("character")
const dot = document.getElementById("dot")
const maxX = window.innerWidth;
const maxY = window.innerHeight;
const boxX = box.getBoundingClientRect()
const boxY = box.getBoundingClientRect()
let condition = false
let left_rightChat = document.getElementById("left-right")
let top_bottomChat = document.getElementById("top-bottom")
// const ctx = canvas.getContext('2d');
// let speed = 25;

console.log(boxX.width)
console.log(boxY.height)
const toNum = (pxVal) => {
    return parseInt(pxVal, 10);
};

change()

// const handleMovement = (e) => {
    
//     let left = toNum(sprite.style.left);
//     const bottom = toNum(sprite.style.bottom);

//     switch (e.key) {
//         case 'a':
//             if (left <= 0) return (sprite.style.left = 800);
//             sprite.style.left = left - speed + 'px';
//             char.className = " "
//             char.classList.add("left")
//             detect()
//             break;
//         case 'd':
//             if (left >= 775) return (sprite.style.left = 775);
//             sprite.style.left = left + speed + 'px';
//             char.className = " "
//             char.classList.add("right")
//             detect()
//             break;
//         case 'w':
//             if (bottom >= 0) return (sprite.style.bottom = -775);
//             sprite.style.bottom = bottom + speed + 'px';
//             char.className = " "
//             char.classList.add("up")
//             detect()
//             break;
//         case 's':
//             if (bottom <= -775) return (sprite.style.bottom = -775);
//             sprite.style.bottom = bottom - speed + 'px';
//             char.className = " "
//             char.classList.add("down")
//             detect()
//             break;
        
//     }
// detect()
// console.log("Left " + char.style.left)
// console.log("Bottom " + char.style.bottom)

// };

// function detect(){
//     if (areElementsTouching(char, dot)) {
//         // Elements are touching
//         console.log('Elements are touching!');
//         change()
//       } else {
//         // Elements are not touching
//         console.log('Elements are not touching.');
//       }
// }

// function areElementsTouching(element1, element2) {
//     const rect1 = element1.getBoundingClientRect();
//     const rect2 = element2.getBoundingClientRect();
//     // return ((rect1.top + rect1.bottom + rect1.left + rect1.right) == (rect2.top + rect2.bottom + rect2.left + rect2.right))
//     return (rect2.top < rect1.top && rect2.right < rect1.right && rect2.bottom > rect1.bottom && rect2.left > rect1.left);
    
//   }

function change(){
    const boxX = box.getBoundingClientRect()
    const boxY = box.getBoundingClientRect()

    let left = toNum(dot.style.left);
    let bottom = toNum(dot.style.bottom);
    let right = toNum(dot.style.right);
    let top = toNum(dot.style.top);

    console.log(boxX.width, boxX.height, boxX.top, boxX.bottom,  boxX.left, boxX.right)
    console.log(boxY.width, boxY.height, boxY.top, boxY.bottom,  boxY.left, boxY.right)

    left = Math.floor(Math.random() * (boxX.width));
    bottom = Math.floor(Math.random() * (boxY.height));
    right = left + 50
    top = bottom + 50

    //Container size - Element Size

    if(dot.style.right > 990){
        console.log("CHANGED")
        change()
    }
    if(dot.style.bottom > 600){
        console.log("CHANGED")
        change()
    }

    dot.style.bottom = bottom + "px"
    dot.style.left = left + "px"
    dot.style.top = top + "px"
    dot.style.right = right + "px"
    // if (){
    //     change()
    // }
}
// window.addEventListener('keydown', handleMovement);
// window.addEventListener('keydown', function(event){
//     switch(event.key){
//         case 'spacebar':
//             change()
//             break
//     }
// })

window.addEventListener('mousemove', function(event) {
    
    console.log("mouse is moving")
    const x = event.clientX - boxX.left;
    const y = event.clientY - boxY.top;

    char.style.left = (x - 12.5 + "px")
    char.style.top = (y - 12.5 + "px")
    char.style.right = (x + 12.5 + "px")
    char.style.bottom = (y - 90 + "px")

    console.log("Char right: ", char.style.right, "   ", "Dot Right: ", dot.style.right)
    // console.log("Char top: ", char.style.top, "   ", "Dot Top: ", dot.style.top)
    // console.log("Char Left: ", char.style.left,"   ", "Dot left: ", dot.style.left)
    console.log("Char bottom: ", char.style.bottom,"   ", "Dot bottom: ", dot.style.bottom)
    if(char.style.right < dot.style.right){
        // console.log("Char right is less than ")
        left_rightChat.textContent = "To the Right"
    }else{
        // console.log("Char right is more than ")
        left_rightChat.textContent = "To the Left"
    }
    if(char.style.top < dot.style.top){
        // console.log("Char top is less than ")
        top_bottomChat.textContent = "Below You"
    }else{
        // console.log("Char top is more than ")
        top_bottomChat.textContent = "Above You"
    }
    if(char.style.left < dot.style.left){
        // console.log("Char left is less than ")
    }else{
        // console.log("Char left is more than ")
    }
    if(char.style.bottom < dot.style.bottom){
        // console.log("Char bottom is less than ")
    }else{
        // console.log("Char bottom is more than ")
    }
    if ((char.style.right < dot.style.right) && (char.style.top > dot.style.top) && (char.style.left > dot.style.left) && (char.style.bottom < dot.style.bottom)){
        // setTimeout(() => {
            change()
        // }, 500)
       
    }
});
