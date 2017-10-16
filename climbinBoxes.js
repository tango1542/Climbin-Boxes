
var myScore;

(function () {  //This function continually updates the frame
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 1000,
    height = 800,
    player = {
        x: 25,
        y: 700,
        width: 8,
        height: 18,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false

    },
    keys = [],
    friction = 0.8,
    gravity = 0.3;

var boxes = [];  //Set up an array of boxes to be displayed on the canvas
var goal = [];  //Set up an array with a goal that will have a different set of instructions when the player collides with this object

//This is creating a goal box object in the goal array
goal.push({
  x: 20,
  y: 40,
  width: 43,
  height: 34,

})

// These three boxes are the boundary boxes for the canvas.  Without these, the player would fall off the canvas
boxes.push({  //left boundary
    x: 0,
    y: 0,
    width: 10,
    height: height
});
boxes.push({  //bottom boundary
    x: 0,
    y: height - 2,
    width: width,
    height: 50
});
boxes.push({  //right boundary
    x: width - 10,
    y: 0,
    width: 50,
    height: height
});


//This is a large assorment of the numerous obstacle boxes in the canvas.  Continues until line 543

boxes.push({
    x: 60,
    y: 750,
    width: 40,
    height: 40
});

boxes.push({
    x: 118,
    y: 723,
    width: 40,
    height: 50
});

boxes.push({
    x: 178,
    y: 703,
    width: 30,
    height: 60
});

boxes.push({
    x: 230,
    y: 675,
    width: 20,
    height: 40
});
boxes.push({
    x: 235,
    y: 700,
    width: 100,
    height: 15
});
boxes.push({
    x: 330,
    y: 675,
    width: 20,
    height: 40
});

boxes.push({
    x: 439,
    y: 693,
    width: 25,
    height: 80
});

boxes.push({
    x: 532,
    y: 672,
    width: 30,
    height: 10
});

boxes.push({
    x: 551,
    y: 636,
    width: 20,
    height: 46
});
boxes.push({
    x: 571,
    y: 607,
    width: 32,
    height: 75
});
boxes.push({
    x: 743,
    y: 707,
    width: 15,
    height: 70
});
boxes.push({
    x: 780,
    y: 695,
    width: 25,
    height: 10
});
boxes.push({
    x: 821,
    y: 665,
    width: 25,
    height: 10
});
boxes.push({
    x: 840,
    y: 675,
    width: 25,
    height: 10
});
boxes.push({
    x: 862,
    y: 682,
    width: 25,
    height: 10
});
boxes.push({
    x: 884,
    y: 687,
    width: 25,
    height: 10
});
boxes.push({
    x: 906,
    y: 632,
    width: 40,
    height: 40
});
boxes.push({
    x: 950,
    y: 580,
    width: 20,
    height: 80
});
boxes.push({
    x: 903,
    y: 547,
    width: 30,
    height: 15
});
boxes.push({
    x: 840,
    y: 513,
    width: 20,
    height: 15
});
boxes.push({
    x: 645,
    y: 490,
    width: 105,
    height: 40
});
boxes.push({
    x: 579,
    y: 437,
    width: 30,
    height: 30
});
boxes.push({
    x: 502,
    y: 430,
    width: 35,
    height: 25
});
boxes.push({
    x: 397,
    y: 511,
    width: 30,
    height: 50
});
boxes.push({
    x: 333,
    y: 468,
    width: 20,
    height: 10
});
boxes.push({
    x: 281,
    y: 429,
    width: 40,
    height: 5
});
boxes.push({
    x: 217,
    y: 400,
    width: 20,
    height: 100
});
boxes.push({
    x: 149,
    y: 361,
    width: 25,
    height: 100
});
boxes.push({
    x: 139,
    y: 339,
    width: 25,
    height: 100
});
boxes.push({
    x: 113,
    y: 308,
    width: 25,
    height: 100
});
boxes.push({
    x: 104,
    y: 295,
    width: 25,
    height: 100
});
boxes.push({
    x: 86,
    y: 273,
    width: 25,
    height: 100
});
boxes.push({
    x: 71,
    y: 250,
    width: 25,
    height: 100
});
boxes.push({
    x: 10,
    y: 222,
    width: 4,
    height: 200
});
boxes.push({
    x: 40,
    y: 172,
    width: 20,
    height: 20
});
boxes.push({
    x: 74,
    y: 154,
    width: 20,
    height: 20
});
boxes.push({
    x: 137,
    y: 189,
    width: 20,
    height: 20
});
boxes.push({
    x: 222,
    y: 253,
    width: 120,
    height: 10
});
boxes.push({
    x: 377,
    y: 282,
    width: 110,
    height: 15
});
boxes.push({
    x: 543,
    y: 323,
    width: 110,
    height: 50
});
boxes.push({
    x: 724,
    y: 349,
    width: 100,
    height: 20
});
boxes.push({
    x: 885,
    y: 320,
    width: 50,
    height: 40
});
boxes.push({
    x: 948,
    y: 282,
    width: 20,
    height: 10
});
boxes.push({
    x: 910,
    y: 243,
    width: 20,
    height: 10
});
boxes.push({
    x: 954,
    y: 217,
    width: 20,
    height: 10
});
boxes.push({
    x: 915,
    y: 179,
    width: 20,
    height: 10
});
boxes.push({
    x: 949,
    y: 147,
    width: 20,
    height: 10
});
boxes.push({
    x: 910,
    y: 112,
    width: 20,
    height: 10
});
boxes.push({
    x: 949,
    y: 87,
    width: 20,
    height: 10
});
boxes.push({
    x: 975,
    y: 312,
    width: 20,
    height: 20
});
boxes.push({
    x: 902,
    y: 61,
    width: 20,
    height: 10
});
boxes.push({
    x: 717,
    y: 56,
    width: 100,
    height: 20
});
boxes.push({
    x: 625,
    y: 151,
    width: 30,
    height: 20
});
boxes.push({
    x: 522,
    y: 118,
    width: 50,
    height: 10
});
boxes.push({
    x: 399,
    y: 139,
    width: 100,
    height: 10
});
boxes.push({
    x: 249,
    y: 106,
    width: 130,
    height: 10
});
boxes.push({
    x: 10,
    y: 74,
    width: 170,
    height: 10
});
boxes.push({
    x: 940,
    y: 655,
    width: 30,
    height: 30
});
boxes.push({
    x: 735,
    y: 745,
    width: 20,
    height: 20
});
boxes.push({
    x: 983,
    y: 613,
    width: 10,
    height: 10
});
boxes.push({
    x: 127,
    y: 543,
    width: 210,
    height: 8
});
boxes.push({
    x: 10,
    y: 479,
    width: 20,
    height: 40
});
boxes.push({
    x: 12,
    y: 5,
    width: 20,
    height: 2
});
boxes.push({
    x: 12,
    y: 5,
    width: 2,
    height: 20
});
boxes.push({
    x: 12,
    y: 25,
    width: 20,
    height: 2
});
boxes.push({
    x: 22,
    y: 15,
    width: 10,
    height: 2
});
boxes.push({
    x: 32,
    y: 15,
    width: 2,
    height: 12
});
boxes.push({
    x: 40,
    y: 5,
    width: 20,
    height: 2
});
boxes.push({
    x: 40,
    y: 5,
    width: 2,
    height: 20
});
boxes.push({
    x: 40,
    y: 25,
    width: 20,
    height: 2
});
boxes.push({
    x: 60,
    y: 5,
    width: 2,
    height: 22
});
boxes.push({
    x: 70,
    y: 5,
    width: 20,
    height: 2
});
boxes.push({
    x: 70,
    y: 5,
    width: 2,
    height: 22
});
boxes.push({
    x: 70,
    y: 15,
    width: 20,
    height: 2
});
boxes.push({
    x: 90,
    y: 5,
    width: 2,
    height: 22
});
boxes.push({
    x: 100,
    y: 5,
    width: 2,
    height: 20
});
boxes.push({
    x: 100,
    y: 25,
    width: 20,
    height: 2
});
boxes.push({
    x: 33,
    y: 261,
    width: 30,
    height: 10
});
boxes.push({
    x: 0,
    y: 0,
    width: 0,
    height: 0
});


canvas.width = width;  //These two settings are setting the width and height of the canvas
canvas.height = height;

function update() {  //This is the main loop.  It is checking for changes to what needs to be displayed, and redraws the canvas
    // check keys
    if (keys[38] || keys[32]) {  //These two keys are the up arrow or space bar
        if (!player.jumping && player.grounded) {  //The player can only jump when they are on the ground.  Without this, they could double/triple jump
            player.jumping = true;
            player.grounded = false;
            player.velY = -player.speed * 2;
        }
    }
    if (keys[39]) {
        // right arrow
        if (player.velX < player.speed) {  //This moves the player to the right, and accelerates their velocity.  But they cannot go faster than the speed setting
            player.velX++;
        }
    }
    if (keys[37]) {
        // left arrow
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }

    player.velX *= friction;  //Friction will parabollically slow the player down on the x axis
    player.velY += gravity;  //gravity has a constant force on the player on the y axix

    ctx.clearRect(0, 0, width, height);  //This clears the screen after each frame after a player action
    ctx.fillStyle = "black";
    ctx.beginPath();

    player.grounded = false;   //
    for (var i = 0; i < boxes.length; i++) {  //This goes through all of the boxes, and draws them in their locations
        ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);

        var dir = colCheck(player, boxes[i]);  //This variable checks to see if the player and a box is colliding

        if (dir === "l" || dir === "r") {
            player.velX = 0;  //This stops the player if they collide with a box from the left or right
            player.jumping = false;
        } else if (dir === "b") {  //This stops the player if they collide with a box on the bottom.
            player.grounded = true;
            player.jumping = false;
        } else if (dir === "t") {  //This bounces the player if they jump into an obstacle above them.
            player.velY *= -1;
        }

    }
    if(player.grounded){  //This would always set the y velocity to 0 if the player is in the grounded state
         player.velY = 0;
    }

    for (var i = 0; i < goal.length; i++) {  //This is doing collision detection for the goal object
        ctx.rect(goal[i].x, goal[i].y, goal[i].width, goal[i].height);

        var dirGoal = colCheck(player, goal[i]);  //uses the function colCheck below

        if (dirGoal === "l" || dirGoal === "r" || dirGoal === "b" || dirGoal === "t") {  //If the player collides with the goal from any side, an end result will happen
            player.width = 300;
            player.height = 300;
            player.speed = 10;
        }

    }
    if(player.grounded){
         player.velY = 0;
    }

    player.x += player.velX;
    player.y += player.velY;

    ctx.fill();
    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, player.width, player.height);



    requestAnimationFrame(update);  //This finishes the update function, and redraws the canvas
}

// function showCoords(event) {  //this function runs on a mouseclick.  I used this in the process of pinpointing where I wanted to place the boxes
//     var x = event.clientX;
//     var y = event.clientY;
//     console.log(x);
//     console.log(y);
//   }

function colCheck(shapeA, shapeB) {  //This function is running the collision checks.  I followed an online guide at this URL  http://www.somethinghitme.com/2013/01/09/creating-a-canvas-platformer-tutorial-part-one/
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;

    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});


window.addEventListener("load", function () {
    update();
});
