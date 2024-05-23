"use strict";
var lake;
(function (lake) {
    class Cloud {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            this.x += 1;
            if (this.x > lake.crc2.canvas.width) {
                this.x = -100;
            }
        }
        draw() {
            lake.crc2.save();
            lake.crc2.translate(this.x, this.y);
            lake.crc2.fillStyle = "#D8EAF2";
            this.drawCloudPart(0, 0, 25);
            this.drawCloudPart(30, 20, 30);
            this.drawCloudPart(50, 10, 30);
            this.drawCloudPart(80, 10, 20);
            lake.crc2.restore();
        }
        drawCloudPart(x, y, radius) {
            lake.crc2.beginPath();
            lake.crc2.arc(x, y, radius, 0, 2 * Math.PI);
            lake.crc2.fill();
        }
    }
    lake.Cloud = Cloud;
})(lake || (lake = {}));
//# sourceMappingURL=Cloud.js.map