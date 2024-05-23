namespace lake {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;

    let clouds: Cloud[] = [];
    let trees: Tree[] = [];
    let ducks: Duck[] = [];
    let bees: Bee[] = [];
    let houses: House[] = [];
    
    
    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    
        for (let i: number = 0; i < 10; i++) {
            let cloud: Cloud = new Cloud(Math.random() * 500, Math.random() * 200);
            clouds.push(cloud);
        }

        let tree: Tree = new Tree(100, 350,);
        tree.draw();
        trees.push(tree);

        let house1: House = new House(160, 250, 90, 100, "lightgrey");
        let house2: House = new House(270, 200, 80, 100, "beige");
        houses.push(house1, house2);
        

        drawBackground();
        setInterval(animate, 40);

        let duck: Duck = new Duck(10, 430, "white");
        duck.draw();
        ducks.push(duck);

        let duck2: Duck = new Duck(200, 550, "#A78B71");
        duck.draw();
        ducks.push(duck2);

        let bee: Bee = new Bee(100, 600, "yellow");
        bee.draw();
        bees.push(bee);

        let bee2: Bee = new Bee(0, 300, "yellow");
        bee.draw();
        bees.push(bee2);
    }

    function animate(): void {
        drawBackground();
        drawSun({ x: 70, y: 60 });
        drawFlower();

        for (let house of houses) {
            house.draw();
        }

        for (let i: number = 0; i < 4; i++) {
            clouds[i].move();
            clouds[i].draw();
        }
        for (let i: number = 0; i < 1; i++) {
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

    function drawFlower(): void {
        crc2.save();
        crc2.translate(300, 390);

        crc2.fillStyle = "green";
        crc2.fillRect(0, 0, 2, -20);

        crc2.fillStyle = "white";
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
}