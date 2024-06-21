"use strict";
var lake;
(function (lake) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let breadcrumbs = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        lake.crc2 = canvas.getContext("2d");
        for (let i = 0; i < 6; i++) {
            let cloud = new lake.Cloud(Math.random() * 500, Math.random() * 200, "white");
            moveables.push(cloud);
        }
        let duck = new lake.Duck(280, 430, "white");
        moveables.push(duck);
        let duck2 = new lake.Duck(350, 550, "#A78B71");
        moveables.push(duck2);
        let bee = new lake.Bee(350, 500, "yellow");
        moveables.push(bee);
        let bee2 = new lake.Bee(100, 300, "yellow");
        moveables.push(bee2);
        drawBackground();
        setInterval(animate, 40);
        let house1 = new lake.House(160, 250, 90, 100, "lightgrey");
        let house2 = new lake.House(270, 200, 80, 100, "beige");
        moveables.push(house1, house2);
        canvas.addEventListener("click", handleCanvasClick);
        window.addEventListener("keydown", handleKeyDown);
    }
    function animate() {
        drawBackground();
        drawSun({ x: 70, y: 60 });
        drawFlower();
        drawTree();
        for (let i = 0; i < moveables.length; i++) {
            moveables[i].move();
            moveables[i].draw();
        }
        drawBreadcrumbs();
        moveDucksToBreadcrumbs();
    }
    function drawBackground() {
        let gradient = lake.crc2.createLinearGradient(0, 0, 0, lake.crc2.canvas.height);
        gradient.addColorStop(0.1, "#81BECE");
        gradient.addColorStop(0.27, "#E0EFEA");
        lake.crc2.fillStyle = gradient;
        lake.crc2.fillRect(0, 0, lake.crc2.canvas.width, lake.crc2.canvas.height);
        drawHills();
        drawPond();
    }
    function drawHills() {
        let color = "#AAABA8";
        lake.crc2.save();
        lake.crc2.beginPath();
        lake.crc2.translate(0, 280);
        lake.crc2.fillStyle = color;
        lake.crc2.beginPath();
        lake.crc2.moveTo(0, 0);
        lake.crc2.lineTo(400, 0);
        lake.crc2.lineTo(500, -30);
        lake.crc2.lineTo(300, -85);
        lake.crc2.lineTo(150, -50);
        lake.crc2.lineTo(100, -70);
        lake.crc2.lineTo(20, -70);
        lake.crc2.lineTo(0, -55);
        lake.crc2.closePath();
        lake.crc2.fill();
        lake.crc2.restore();
        lake.crc2.save();
        lake.crc2.beginPath();
        lake.crc2.translate(0, 300);
        lake.crc2.fillStyle = "#466A44";
        lake.crc2.beginPath();
        lake.crc2.moveTo(0, 0);
        lake.crc2.lineTo(390, 1200000);
        lake.crc2.lineTo(390, -60);
        lake.crc2.lineTo(300, -30);
        lake.crc2.lineTo(240, -35);
        lake.crc2.lineTo(200, -50);
        lake.crc2.lineTo(100, -55);
        lake.crc2.lineTo(50, -50);
        lake.crc2.lineTo(0, -60);
        lake.crc2.closePath();
        lake.crc2.fill();
        lake.crc2.restore();
    }
    function pseudoRandom(seed) {
        let value = seed;
        return function () {
            value = (value * 9301 + 49297) % 233280;
            return value / 233280;
        };
    }
    lake.pseudoRandom = pseudoRandom;
    function drawSun(_position) {
        let r1 = 20;
        let r2 = 100;
        let gradient = lake.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "#FDD48A");
        gradient.addColorStop(1, "rgba(223, 131, 226, 0)");
        lake.crc2.save();
        lake.crc2.translate(_position.x, _position.y);
        lake.crc2.fillStyle = gradient;
        lake.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        lake.crc2.fill();
        lake.crc2.restore();
    }
    function drawPond() {
        let centerX = 200;
        let centerY = 500;
        let radiusX = 270;
        let radiusY = 100;
        lake.crc2.save();
        lake.crc2.beginPath();
        lake.crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        lake.crc2.closePath();
        lake.crc2.fillStyle = "#778FD2";
        lake.crc2.fill();
        lake.crc2.restore();
    }
    let flowerColor = "white";
    function drawFlower() {
        lake.crc2.save();
        lake.crc2.translate(300, 390);
        lake.crc2.fillStyle = "green";
        lake.crc2.fillRect(0, 0, 2, -20);
        lake.crc2.fillStyle = flowerColor;
        for (let i = 0; i < 5; i++) {
            lake.crc2.beginPath();
            lake.crc2.ellipse(0, -20, 5, 15, i * (Math.PI / 2.5), 0, 2 * Math.PI);
            lake.crc2.fill();
        }
        lake.crc2.fillStyle = "yellow";
        lake.crc2.beginPath();
        lake.crc2.arc(0, -20, 5, 0, 2 * Math.PI);
        lake.crc2.fill();
        lake.crc2.restore();
    }
    function drawTree() {
        lake.crc2.save();
        lake.crc2.translate(80, 380);
        lake.crc2.fillStyle = "brown";
        lake.crc2.fillRect(-5, 0, 10, -50);
        lake.crc2.fillStyle = "green";
        let ellipses = [
            { x: 0, y: -60, rx: 30, ry: 20 },
            { x: -20, y: -50, rx: 30, ry: 25 },
            { x: 20, y: -50, rx: 25, ry: 20 },
            { x: 0, y: -80, rx: 35, ry: 25 },
            { x: -15, y: -70, rx: 25, ry: 20 },
            { x: 15, y: -70, rx: 30, ry: 25 }
        ];
        for (let ellipse of ellipses) {
            lake.crc2.beginPath();
            lake.crc2.ellipse(ellipse.x, ellipse.y, ellipse.rx, ellipse.ry, 0, 0, 2 * Math.PI);
            lake.crc2.fill();
        }
        lake.crc2.restore();
    }
    function handleCanvasClick(event) {
        let canvasRect = lake.crc2.canvas.getBoundingClientRect();
        let x = event.clientX - canvasRect.left;
        let y = event.clientY - canvasRect.top;
        let clickedOnDuck = false;
        let clickedOnHouse = false;
        for (let moveable of moveables) {
            if (moveable instanceof lake.House) {
                if (x >= moveable.positionX &&
                    x <= moveable.positionX + moveable.width &&
                    y >= moveable.positionY &&
                    y <= moveable.positionY + moveable.height) {
                    moveable.color = moveable.color === "#217074" ? "#EDC5AB" : "#217074";
                    clickedOnHouse = true;
                }
            }
            else if (moveable instanceof lake.Duck) {
                if (x >= moveable.x - 15 && x <= moveable.x + 15 && y >= moveable.y - 30 && y <= moveable.y + 30) {
                    moveable.x = Math.random() * (lake.crc2.canvas.width - 60) + 30;
                    moveable.y = 400 + Math.random() * 100;
                    clickedOnDuck = true;
                }
            }
        }
        if (!clickedOnDuck && !clickedOnHouse) {
            breadcrumbs.push({ x, y });
        }
        drawBackground();
        drawBreadcrumbs();
        for (let m of moveables) {
            m.draw();
        }
    }
    function handleKeyDown(event) {
        if (event.code === "Space") {
            flowerColor = flowerColor === "#B9848C" ? "pink" : "#B9848C";
            drawBackground();
            for (let m of moveables) {
                m.draw();
            }
        }
    }
    function drawBreadcrumbs() {
        for (let breadcrumb of breadcrumbs) {
            lake.crc2.save();
            lake.crc2.fillStyle = "#DCC1A3";
            lake.crc2.beginPath();
            lake.crc2.arc(breadcrumb.x, breadcrumb.y, 5, 0, 2 * Math.PI);
            lake.crc2.fill();
            lake.crc2.restore();
        }
    }
    function moveDucksToBreadcrumbs() {
        for (let duck of moveables) {
            if (duck instanceof lake.Duck) {
                if (breadcrumbs.length > 0) {
                    let breadcrumb = breadcrumbs[breadcrumbs.length - 1];
                    duck.target = breadcrumb;
                }
            }
        }
    }
})(lake || (lake = {}));
//# sourceMappingURL=Main.js.map