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

    let burg1corx = Math.floor(burgertCoOrds1.x);
    burg1corx = Math.floor(burg1corx / 10) * 10

    let burg1cory = Math.floor(burgertCoOrds1.y);
    burg1cory = Math.floor(burg1cory / 10) * 10;
    let burg1corxmin = burg1corx - 10
    let burg1corxmax = burg1corx + 10
    let burg1corymin = burg1cory - 10
    let burg1corymax = burg1cory + 10

    let burg2corx = Math.floor(burgertCoOrds2.x);
    burg2corx = Math.floor(burg2corx / 10) * 10
    let burg2cory = Math.floor(burgertCoOrds2.y);
    burg2cory = Math.floor(burg2cory / 10) * 10;
    let burg2corxmin = burg2corx - 10
    let burg2corxmax = burg2corx + 10
    let burg2corymin = burg2cory - 10
    let burg2corymax = burg2cory + 10

    let burg3corx = Math.floor(burgertCoOrds3.x);
    burg3corx = Math.floor(burg3corx / 10) * 10
    let burg3cory = Math.floor(burgertCoOrds3.y);
    burg3cory = Math.floor(burg3cory / 10) * 10;

    let burg3corxmin = burg3corx - 10
    let burg3corxmax = burg3corx + 10
    let burg3corymin = burg3cory - 10
    let burg3corymax = burg3cory + 10


    if (burg1corxmin < ballx < burg1corxmax && burg1corymin < bally < burg1corymax
        || burg2corxmin < ballx < burg2corxmax && burg2corymin < bally < burg2corymax
        || burg3corxmin < ballx < burg3corxmax && burg3corymin < bally < burg3corymax) {
        alert("Hit")
    }


}