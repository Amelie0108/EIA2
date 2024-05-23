"use strict";
var lake;
(function (lake) {
    class Tree {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            lake.crc2.save();
            lake.crc2.translate(this.x, this.y);
            lake.crc2.fillStyle = "#583E26";
            lake.crc2.fillRect(-10, 40, 20, -70);
            lake.crc2.fillStyle = "#14471E";
            this.drawFoliage(0, -40, 35);
            this.drawFoliage(-20, -20, 30);
            this.drawFoliage(20, -20, 30);
            this.drawFoliage(0, -50, 20);
            lake.crc2.restore();
        }
        drawFoliage(x, y, radius) {
            lake.crc2.beginPath();
            lake.crc2.arc(x, y, radius, 0, 2 * Math.PI);
            lake.crc2.fill();
        }
    }
    lake.Tree = Tree;
})(lake || (lake = {}));
//# sourceMappingURL=Tree.js.map