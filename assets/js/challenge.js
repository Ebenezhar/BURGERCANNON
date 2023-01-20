
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function fire(ball, ballCoOrds, targetX, targetY) {

    let xDistance = ballCoOrds.x - targetX;
    let yDistance = ballCoOrds.y - targetY;
    // console.log("x", xDistance);
    // console.log("y", yDistance);

    distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance),
        time = distance;


    let start = {
        x: ballCoOrds.x,
        y: ballCoOrds.y,
        t: Date.now()
    }
    let difference = {
        x: targetX - ballCoOrds.x,
        y: targetY - ballCoOrds.y,
        t: time
    };
    // console.log("dx", difference.x);
    // console.log("dy", difference.y);


    let fireAction = setInterval(function (curTime = Date.now()) {

        let elapsed = curTime - start.t, ratio = elapsed / difference.t;

        ball.style.left = start.x + difference.x * ratio;
        ball.style.top = start.y + difference.y * ratio;
        alertUser()
        if (elapsed >= 1500) {
            clearInterval(fireAction);
        }

    }, 10)

}


const dropBurger = (burger) => {


    let movingDownwards = true;

    const speed = getRandomInt(50, 200)

    interval = setInterval(function () {

        let burgertCoOrds = burger.getBoundingClientRect();
        // console.log("x", burgertCoOrds.x);
        // console.log("y", burgertCoOrds.y);
        pos1 = burgertCoOrds.top
        // console.log(pos1);

        if (pos1 > 650) {
            movingDownwards = false
        }
        if (pos1 < 100) {
            movingDownwards = true
        }

        if (movingDownwards == true) {
            pos1 = pos1 + 10;
            burger.style.top = pos1
        } else {
            pos1 = pos1 - 10;
            burger.style.top = pos1
        }
    }, speed);
}


function initializePosition(burger) {

    burger.style.left = getRandomInt(300, 1200)
}




function hanldeMouse() {

    let cannonBall = document.getElementById("cannonBall");
    let cannonBallCoOrds = cannonBall.getBoundingClientRect();
    console.log(cannonBallCoOrds.x);


    let cannon = document.getElementById("cannon");
    let cannonCoOrds = cannon.getBoundingClientRect();
    console.log("Cannon", cannonCoOrds.x, cannonCoOrds.y);

    document.addEventListener("mousemove", e => {
        let angle = Math.atan2(e.pageX - cannonCoOrds.x, - (e.pageY - cannonCoOrds.y)) * (180 / Math.PI);
        angle = angle - 13
        cannon.style.transform = `rotate(${angle}deg)`;

        document.addEventListener('click', function (event) {
            // Don't follow the link
            event.preventDefault();
            fire(cannonBall, cannonBallCoOrds, event.pageX, event.pageY)

        }, false);
    });

}

let alertUser = () => {
    // let burgertCoOrds = burger.getBoundingClientRect();
    let cannonBall = document.getElementById("cannonBall");
    let cannonBallCoOrds = cannonBall.getBoundingClientRect();
    let burger1 = document.getElementById("burger1");
    let burger2 = document.getElementById("burger2");
    let burger3 = document.getElementById("burger3");
    let burgertCoOrds1 = burger1.getBoundingClientRect();
    let burgertCoOrds2 = burger2.getBoundingClientRect();
    let burgertCoOrds3 = burger3.getBoundingClientRect();

    let ballx = Math.floor(cannonBallCoOrds.x)
    ballx = Math.floor(ballx / 10) * 10
    let bally = Math.floor(cannonBallCoOrds.y);
    bally = Math.floor(bally / 10) * 10
    let ballxmin = ballx - 2;
    let ballxmax = ballx + 2;
    let ballymin = bally - 2;
    let ballymax = bally + 2;

    let burg1corx = Math.floor(burgertCoOrds1.x);
    burg1corx = Math.floor(burg1corx / 10) * 10

    let burg1cory = Math.floor(burgertCoOrds1.y);
    burg1cory = Math.floor(burg1cory / 10) * 10;
    let burg2corx = Math.floor(burgertCoOrds2.x);
    burg2corx = Math.floor(burg2corx / 10) * 10
    let burg2cory = Math.floor(burgertCoOrds2.y);
    burg2cory = Math.floor(burg2cory / 10) * 10;

    let burg3corx = Math.floor(burgertCoOrds3.x);
    burg3corx = Math.floor(burg3corx / 10) * 10
    let burg3cory = Math.floor(burgertCoOrds3.y);
    burg3cory = Math.floor(burg3cory / 10) * 10;

    let burg1corxmin = burg1corx - 10
    let burg1corxmax = burg1corx + 10
    let burg1corymin = burg1cory - 10
    let burg1corymax = burg1cory + 10
    // console.log(ballx, bally);
    // console.log(burg1corxmin, burg1corxmax);

    if (ballx == burg1corx && bally == burg1cory
        || ballx == burg2corx && bally == burg2cory
        || ballx == burg3corx && bally == burg3cory) {
        alert("Hit")
    }


}


document.addEventListener('DOMContentLoaded', function () {
    hanldeMouse();

    let burger1 = document.getElementById("burger1");
    let burger2 = document.getElementById("burger2");
    let burger3 = document.getElementById("burger3");
    initializePosition(burger1)
    initializePosition(burger2)
    initializePosition(burger3)
    dropBurger(burger1)
    dropBurger(burger2)
    dropBurger(burger3)


});