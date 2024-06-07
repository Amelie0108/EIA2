"use strict";
var lake;
(function (lake) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        lake.crc2 = canvas.getContext("2d");
        for (let i = 0; i < 10; i++) {
            let cloud = new lake.Cloud(Math.random() * 500, Math.random() * 200);
            moveables.push(cloud);
        }
        let tree = new lake.Tree(100, 350);
        tree.draw();
        moveables.push(tree);
        let house1 = new lake.House(160, 250, 90, 100, "lightgrey");
        let house2 = new lake.House(270, 200, 80, 100, "beige");
        moveables.push(house1, house2);
        drawBackground();
        setInterval(animate, 40);
        let duck = new lake.Duck(10, 430, "white");
        duck.draw();
        moveables.push(duck);
        let duck2 = new lake.Duck(200, 550, "#A78B71");
        duck.draw();
        moveables.push(duck2);
        let bee = new lake.Bee(100, 600, "yellow");
        bee.draw();
        moveables.push(bee);
        let bee2 = new lake.Bee(0, 300, "yellow");
        bee.draw();
        moveables.push(bee2);
    }
    function animate() {
        drawBackground();
        drawSun({ x: 70, y: 60 });
        drawFlower();
        for (let house of houses) {
            house.draw();
        }
        for (let i = 0; i < 4; i++) {
            clouds[i].move();
            clouds[i].draw();
        }
        for (let i = 0; i < 1; i++) {
            trees[i].draw();
        }
        ducks[0].draw();
        ducks[1].draw();
        ducks[0].move();
        ducks[1].move();
        bees[0].draw();
        bees[0].move();
        bees[1].draw();
        bees[1].move();
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
    function drawFlower() {
        lake.crc2.save();
        lake.crc2.translate(300, 390);
        lake.crc2.fillStyle = "green";
        lake.crc2.fillRect(0, 0, 2, -20);
        lake.crc2.fillStyle = "white";
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
})(lake || (lake = {}));
//# sourceMappingURL=Main.js.map