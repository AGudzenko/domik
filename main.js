console.log("page loaded");

// как нарисовать хоть что-нибудь
// без jquery
let canvas = document.getElementById('game');
// ctx - контекст для рисования, все действия только с ним
let ctx = canvas.getContext('2d'); //еще есть 'webgl'



ctx.fillStyle = "#4682B4"; // как в css
ctx.fillRect(0,0,640,480);

//земля
ctx.fillStyle = "#006400";
ctx.closePath();
ctx.beginPath();
ctx.moveTo(0, 400);
ctx.quadraticCurveTo(320, 390, 640, 400);
ctx.lineTo(640, 480);
ctx.lineTo(0, 480);
ctx.lineTo(0, 400);
ctx.fill();


//фасад
ctx.fillStyle = "#D2B48C"; // как в css

ctx.fillRect(250,200,240,200);
ctx.fillStyle = "#8B4513";
ctx.fillRect(305,245,130,95);
ctx.fillStyle = "#FFD700";
ctx.fillRect(315,255,33,20);
ctx.fillRect(353,255,33,20);
ctx.fillRect(391,255,33,20);
ctx.fillRect(315,280,33,50);
ctx.fillRect(353,280,33,50);
ctx.fillRect(391,280,33,50);



// рисование крыши

//дым
ctx.fillStyle = "#696969";
ctx.closePath();
ctx.beginPath();

ctx.moveTo(445, 110);
ctx.quadraticCurveTo(410, 90, 445, 80);
ctx.quadraticCurveTo(475, 60, 455, 40);
ctx.quadraticCurveTo(450, 20, 480, 5);
ctx.quadraticCurveTo(450, 20, 485, 40);
ctx.quadraticCurveTo(495, 60, 480, 70);
ctx.quadraticCurveTo(445, 90, 470, 110);

ctx.strokeStyle = "#696969";
ctx.lineWidth = 2;
ctx.stroke();
// line color
ctx.fill();


ctx.fillStyle = "#A52A2A";
ctx.beginPath();
//дымоход
ctx.moveTo(445, 160); 
ctx.lineTo(445, 120);
ctx.lineTo(435, 120);
ctx.lineTo(435, 110);
ctx.lineTo(475, 110);
ctx.lineTo(475, 120);
ctx.lineTo(465, 120);
ctx.lineTo(465, 170);

ctx.closePath(); // явная команда провести в контуре линию в начало

//крыша
ctx.moveTo(220, 220); 
ctx.lineTo(305, 140);
ctx.lineTo(435, 140);
ctx.lineTo(520, 220);
ctx.lineTo(220, 220);

ctx.strokeStyle = '#A52A2A';
ctx.lineWidth = 4;
ctx.stroke(); // нарисовать по контуру цветом strokeStyle
ctx.fill();

//месяц
ctx.fillStyle = "#FFFF00";
ctx.beginPath();
ctx.arc(75,75,40,0,Math.PI*2,true);

ctx.strokeStyle = '#FFFF00';
ctx.lineWidth = 0;
ctx.stroke();
ctx.fill();

ctx.fillStyle = "#4682B4";
ctx.beginPath();
ctx.arc(100,75,40,0,Math.PI*2,false);

ctx.fill();

