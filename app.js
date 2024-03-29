// // // let canvas = document.querySelector('canvas');
// // // let ctx = canvas.getContext('2d');


// // // let cellsize =50;
// // // let bordheight = 500;
// // // let bordwidth = 1000;


// // // function draw(){


// // // }

// // // function update(){

// // // }

// // // setInterval(function(){
// // //   update();
// // //   draw();

// // // },200)


// // // ---------------------step2------------


// // // let canvas = document.querySelector('canvas');
// // // let ctx = canvas.getContext('2d');


// // // let cellsize = 50;
// // // let bordheight = 500;
// // // let bordwidth = 1000;
// // // // snake ki length 2d array 
// // // let snakecells =[[0,0]];


// // // function draw(){
// // //     // erase firsr
// // //     ctx.clearRect(0,0,bordwidth,bordheight,)
// // // for(let cell of snakecells){
// // //     ctx.fillStyle='green';
// // //     ctx.fillRect(cell[0],cell[1], cellsize, cellsize)
// // // }

// // // }

// // // function update(){
// // //     let headX = snakecells[snakecells.length-1][0];
// // // let heady = snakecells[snakecells.length-1][1];

// // // let newheadX =headX +cellsize;
// // // let newheady = heady;

// // // snakecells.push([newheadX, newheady]);
// // // snakecells.shift();

// // // }


// // // setInterval(function(){
// // //   update();
// // //   draw();

// // // },200)




// // // ====================================================step 3==================



// // let canvas = document.querySelector('canvas');
// // let ctx = canvas.getContext('2d');

// // let cellsize = 50;
// // let bordheight = 600;
// // let bordwidth = 1000;
// // let direction = "right";
// // // snake ki length 2d array 
// // let snakecells =[[0,0],[50,0],[100,0]];

// // function foodgenrator(){
// //     return[
// //         Math.round((Math.random()*(bordwidth-cellsize))/cellsize)*cellsize,
// //         Math.round((Math.random()*(bordheight-cellsize))/cellsize)*cellsize
// //     ]
// // } 
// // let food = foodgenrator();

// // function draw(){
// //     // erase firsr
// //     ctx.clearRect(0,0,bordwidth,bordheight)
// // for(let cell of snakecells){
// //     ctx.fillStyle='green';
// //     ctx.fillRect(cell[0],cell[1], cellsize, cellsize)
// // }
// // ctx.fillStyle ='orange';
// //  ctx.fillRect(food[0],food[1],cellsize,cellsize)
// // }

// // function update(){
// //     let headX = snakecells[snakecells.length-1][0];
// // let heady = snakecells[snakecells.length-1][1];

// // // let newheadX =headX +cellsize;
// // // let newheady = heady;

// // let newheadX;
// // let newheady;
// // if(direction === "right"){
// //     newheadX = headX + cellsize;
// //     newheady = heady;
// // }
// // else if(direction === "left"){
// //     newheadX = headX - cellsize;
// //     newheady = heady;
// // }
// // else if(direction === "up"){
// //     newheadX = headX ;
// //     newheady = heady - cellsize;
// // }
// // else{
// //     newheadX = headX;
// //     newheady = heady + cellsize;
// // }

// // snakecells.push([newheadX, newheady]);
// // if(food[0] === newheadX && food[1] === newheady){
// //     food = foodgenrator();
// // }
// // else{
// // snakecells.shift();
// // }
// // }
// // document.addEventListener('keydown',function(e){
// //     if(e.key === 'ArrowUp'){
// //         direction ='up'
// //     }
// //    else if(e.key === 'ArrowRight'){
// //         direction ='right'
// //     }
// //     else if(e.key === 'ArrowDown'){
// //         direction ='down'
// //     }
// //     else if(e.key === 'ArrowLeft'){
// //         direction ='left'
// //     }
// // })




// // setInterval(function(){
// //   update();
// //   draw();

// // },300)



// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellsize = 50;
// let bordheight = 600;
// let bordwidth = 1000;
// let direction = "right";
// // snake ki length 2d array 
// let snakecells =[[0,0],[50,0],[100,0]];

// function foodgenrator(){
//     return[
//         Math.round((Math.random()*(bordwidth-cellsize))/cellsize)*cellsize,
//         Math.round((Math.random()*(bordheight-cellsize))/cellsize)*cellsize
//     ]
// } 
// let food = foodgenrator();

// function draw(){
//     // erase first
//     ctx.clearRect(0,0,bordwidth,bordheight)
//     for(let cell of snakecells){
//         ctx.fillStyle='green';
//         ctx.fillRect(cell[0],cell[1], cellsize, cellsize)
//     }
//     ctx.fillStyle ='orange';
//     ctx.fillRect(food[0],food[1],cellsize,cellsize)
// }

// function update(){
//     let headX = snakecells[snakecells.length-1][0];
//     let heady = snakecells[snakecells.length-1][1];

//     let newheadX;
//     let newheady;
//     if(direction === "right"){
//         newheadX = headX + cellsize;
//         newheady = heady;
//     }
//     else if(direction === "left"){
//         newheadX = headX - cellsize;
//         newheady = heady;
//     }
//     else if(direction === "up"){
//         newheadX = headX ;
//         newheady = heady - cellsize;
//     }
//     else{
//         newheadX = headX;
//         newheady = heady + cellsize;
//     }

//     if(isGameOver(newheadX, newheady) || isSnakeOverlap(newheadX, newheady)){
//         gameOver();
//         return;
//     }

//     snakecells.push([newheadX, newheady]);
//     if(food[0] === newheadX && food[1] === newheady){
//         food = foodgenrator();
//     }
//     else{
//         snakecells.shift();
//     }
// }

// function isGameOver(x, y){
//     return x < 0 || x >= bordwidth || y < 0 || y >= bordheight;
// }

// function isSnakeOverlap(x, y){
//     for(let cell of snakecells){
//         if(cell[0] === x && cell[1] === y){
//             return true;
//         }
//     }
//     return false;
// }

// function gameOver(){
//     // Display a game over message
//     ctx.fillStyle = 'red';
//     ctx.font = '40px Arial';
//     ctx.fillText('Game Over', canvas.width / 2 - 70, canvas.height / 2);

//     // Stop the game loop
//     clearInterval(gameLoop);
// }

// document.addEventListener('keydown',function(e){
//     if(e.key === 'ArrowUp'){
//         direction ='up'
//     }
//    else if(e.key === 'ArrowRight'){
//         direction ='right'
//     }
//     else if(e.key === 'ArrowDown'){
//         direction ='down'
//     }
//     else if(e.key === 'ArrowLeft'){
//         direction ='left'
//     }
// })

// let gameLoop = setInterval(function(){
//   update();
//   draw();

// },300)


let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let cellsize = 50;
let bordheight = 600;
let bordwidth = 1000;
let direction = "right";
// snake ki length 2d array 
let snakecells =[[0,0],[50,0],[100,0]];

function foodgenrator(){
    return[
        Math.round((Math.random()*(bordwidth-cellsize))/cellsize)*cellsize,
        Math.round((Math.random()*(bordheight-cellsize))/cellsize)*cellsize
    ]
} 
let food = foodgenrator();

function draw(){
    // erase first
    ctx.clearRect(0,0,bordwidth,bordheight)
    for(let cell of snakecells){
        ctx.fillStyle='red';
        ctx.fillRect(cell[0],cell[1], cellsize, cellsize)
    }
    ctx.fillStyle ='yellow';
    ctx.fillRect(food[0],food[1],cellsize,cellsize)
}

function update(){
    let headX = snakecells[snakecells.length-1][0];
    let heady = snakecells[snakecells.length-1][1];

    let newheadX;
    let newheady;
    if(direction === "right"){
        newheadX = headX + cellsize;
        newheady = heady;
    }
    else if(direction === "left"){
        newheadX = headX - cellsize;
        newheady = heady;
    }
    else if(direction === "up"){
        newheadX = headX ;
        newheady = heady - cellsize;
    }
    else{
        newheadX = headX;
        newheady = heady + cellsize;
    }

    if(isGameOver(newheadX, newheady) || isSnakeOverlap(newheadX, newheady)){
        gameOver();
        showMessage("Game Over");
        return;
    }

    snakecells.push([newheadX, newheady]);
    if(food[0] === newheadX && food[1] === newheady){
        food = foodgenrator();
    }
    else{
        snakecells.shift();
    }
}

function isGameOver(x, y){
    return x < 0 || x >= bordwidth || y < 0 || y >= bordheight;
}

function isSnakeOverlap(x, y){
    for(let cell of snakecells){
        if(cell[0] === x && cell[1] === y){
            return true;
        }
    }
    return false;
}

function gameOver(){
    // Stop the game loop
    clearInterval(gameLoop);
}

function showMessage(message){
    ctx.fillStyle = 'red';
    ctx.font = '10px Arial';
    ctx.fillText(message, canvas.width / 2 - 70, canvas.height / 2);
}

document.addEventListener('keydown',function(e){
    if(e.key === 'ArrowUp'){
        direction ='up'
    }
   else if(e.key === 'ArrowRight'){
        direction ='right'
    }
    else if(e.key === 'ArrowDown'){
        direction ='down'
    }
    else if(e.key === 'ArrowLeft'){
        direction ='left'
    }
})

let gameLoop = setInterval(function(){
  update();
  draw();

},300)
