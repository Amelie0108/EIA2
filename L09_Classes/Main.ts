namespace lake {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;

    let moveables: Moveable[] = [];
    
    
    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    
        for (let i: number = 0; i < 6; i++) {
            let cloud: Cloud = new Cloud(Math.random() * 500, Math.random() * 200, "white");
            moveables.push(cloud);
        }

        let duck: Duck = new Duck(280, 430, "white");
        duck.draw();
        moveables.push(duck);

        let duck2: Duck = new Duck(350, 550, "#A78B71");
        duck.draw();
        moveables.push(duck2);

        let bee: Bee = new Bee(350, 500, "yellow");
        bee.draw();
        moveables.push(bee);

        let bee2: Bee = new Bee(100, 300, "yellow");
        bee.draw();
        moveables.push(bee2);

        drawBackground();
        setInterval(animate, 40);

        let house1: House = new House(160, 250, 90, 100, "lightgrey");
        let house2: House = new House(270,200,80,100, "beige");
        moveables.push(house1, house2);

        canvas.addEventListener("click", handleCanvasClick);
        window.addEventListener("keydown", handleKeyDown);
    }

    function animate(): void {
        drawBackground();
        drawSun({ x: 70, y: 60 });
        drawFlower();
        drawTree ();
        
        for (let i: number = 0; i < moveables.length; i++) {
            moveables[i].move();
            moveables[i].draw();
        }
        }

   

    function drawBackground(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0.1, "#81BECE");
        gradient.addColorStop(0.27, "#E0EFEA");
       

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);



        drawHills();
        drawPond();

    }
    

    function drawHills(): void {

        let color: string = "#AAABA8";

        crc2.save();
        crc2.beginPath();
        crc2.translate(0, 280);
        crc2.fillStyle = color;
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(400, 0);
        crc2.lineTo(500, -30);
        crc2.lineTo(300, -85);
        crc2.lineTo(150, -50);
        crc2.lineTo(100, -70);
        crc2.lineTo(20, -70);
        crc2.lineTo(0, -55);
        crc2.closePath();
        crc2.fill();
        crc2.restore();

        crc2.save();
        crc2.beginPath();
        crc2.translate(0, 300);
        crc2.fillStyle = "#466A44";
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(390, 1200000);
        crc2.lineTo(390, -60);
        crc2.lineTo(300, -30);
        crc2.lineTo(240, -35);
        crc2.lineTo(200, -50);
        crc2.lineTo(100, -55);
        crc2.lineTo(50, -50);
        crc2.lineTo(0, -60);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }

    export function pseudoRandom(seed: number): () => number {
        let value = seed;
        return function () {
            value = (value * 9301 + 49297) % 233280;
            return value / 233280;
        };
    }

    export interface Vector {
        x: number;
        y: number;
      }

      function drawSun(_position: Vector): void {

        let r1: number = 20;
        let r2: number = 100;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
    
        gradient.addColorStop(0, "#FDD48A");
        gradient.addColorStop(1, "rgba(223, 131, 226, 0)");
    
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
      }

    function drawPond(): void {

        let centerX = 200;
        let centerY = 500;
        let radiusX = 270;
        let radiusY = 100;

        crc2.save();
        crc2.beginPath();
        crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#778FD2";
        crc2.fill();
        crc2.restore();
    }

    let flowerColor: string = "white";

    function drawFlower(): void {
        crc2.save();
        crc2.translate(300, 390);

        crc2.fillStyle = "green";
        crc2.fillRect(0, 0, 2, -20);

        crc2.fillStyle = flowerColor;
        for (let i = 0; i < 5; i++) {
            crc2.beginPath();
            crc2.ellipse(0, -20, 5, 15, i * (Math.PI / 2.5), 0, 2 * Math.PI);
            crc2.fill();
        }

        crc2.fillStyle = "yellow";
        crc2.beginPath();
        crc2.arc(0, -20, 5, 0, 2 * Math.PI);
        crc2.fill();

        crc2.restore();
    }


    function drawTree(): void {
        crc2.save();
        crc2.translate(80, 380);
    
        crc2.fillStyle = "brown";
        crc2.fillRect(-5, 0, 10, -50);
    
        crc2.fillStyle = "green";
        let ellipses = [
            { x: 0, y: -60, rx: 30, ry: 20 },
            { x: -20, y: -50, rx: 30, ry: 25 },
            { x: 20, y: -50, rx: 25, ry: 20 },
            { x: 0, y: -80, rx: 35, ry: 25 },
            { x: -15, y: -70, rx: 25, ry: 20 },
            { x: 15, y: -70, rx: 30, ry: 25 }
        ];
    
        for (let ellipse of ellipses) {
            crc2.beginPath();
            crc2.ellipse(ellipse.x, ellipse.y, ellipse.rx, ellipse.ry, 0, 0, 2 * Math.PI);
            crc2.fill();
        }
    
        crc2.restore();
        }

        function handleCanvasClick(event: MouseEvent): void {
            let canvasRect = crc2.canvas.getBoundingClientRect();
            let x = event.clientX - canvasRect.left;
            let y = event.clientY - canvasRect.top;
        
            for (let moveable of moveables) {
                if (moveable instanceof House) {
                    if (
                        x >= moveable.positionX &&
                        x <= moveable.positionX + moveable.width &&
                        y >= moveable.positionY &&
                        y <= moveable.positionY + moveable.height) 
                    {
                        moveable.color = moveable.color === "#217074" ? "#EDC5AB" : "#217074";
                        
                        drawBackground();
                        for (let m of moveables) {
                            m.draw();
                        }
                    }
                }

                else if (moveable instanceof Duck) {
                    if (x >= moveable.x - 15 && x <= moveable.x + 15 && y >= moveable.y - 30 && y <= moveable.y + 30) {
                        moveable.x = Math.random() * (crc2.canvas.width - 60) + 30;
                        moveable.y = 400 + Math.random() * 100;
                        drawBackground();
                        for (let m of moveables) {
                            m.draw();
                        }
                    }
                }
            }
        }

        function handleKeyDown(event: KeyboardEvent): void {
            if (event.code === "Space") {
                flowerColor = flowerColor === "#B9848C" ? "pink" : "#B9848C";
                    drawBackground();
            for (let m of moveables) {
                        m.draw();
                    }
                }
            }
}

        
    
