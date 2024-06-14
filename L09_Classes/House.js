"use strict";
var lake;
(function (lake) {
    class House extends lake.Moveable {
        positionX;
        positionY;
        width;
        height;
        color;
        constructor(_x, _y, _width, _height, _color) {
            super(_x, _y, _color);
            this.positionX = _x;
            this.positionY = _y;
            this.width = _width;
            this.height = _height;
            this.color = _color;
        }
        draw() {
            lake.crc2.save();
            lake.crc2.translate(this.positionX, this.positionY);
            lake.crc2.fillStyle = this.color;
            lake.crc2.fillRect(0, 0, this.width, this.height);
            lake.crc2.fillStyle = "darkred";
            lake.crc2.beginPath();
            lake.crc2.moveTo(0, 0);
            lake.crc2.lineTo(this.width / 2, -this.height / 2);
            lake.crc2.lineTo(this.width, 0);
            lake.crc2.closePath();
            lake.crc2.fill();
            this.drawWindow(this.width * 0.2, this.height * 0.2);
            this.drawWindow(this.width * 0.6, this.height * 0.2);
            this.drawDoor(this.width * 0.4, this.height * 0.6);
            this.drawChimney(this.width * 0.7, -this.height * 0.4);
            lake.crc2.restore();
        }
        drawWindow(x, y) {
            lake.crc2.fillStyle = "lightblue";
            lake.crc2.fillRect(x, y, this.width * 0.2, this.height * 0.3);
        }
        drawDoor(x, y) {
            lake.crc2.fillStyle = "brown";
            lake.crc2.fillRect(x, y, this.width * 0.2, this.height * 0.4);
        }
        drawChimney(x, y) {
            lake.crc2.fillStyle = "gray";
            lake.crc2.fillRect(x, y, this.width * 0.1, this.height * 0.3);
        }
    }
    lake.House = House;
})(lake || (lake = {}));
//# sourceMappingURL=House.js.map