
//incoming info from user
const input = document.getElementById("input");
const button = document.getElementById("button");
let conString = "";
let keyArray = [];

//canvas stuff
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const rand =(x)=>{
 return Math.floor(Math.random() * x)
}

//interpret draw logic-refactor??
const ring =(key)=>{
  console.log("yo",key);
  ctx.shadowBlur=60;
  ctx.shadowColor=`rgb(${rand(255)}, ${rand(255)}, ${rand(255)})`;  
  ctx.strokeStyle=`rgb(${rand(255)}, ${rand(255)}, ${rand(255)})`;
  
  switch (key) {
    case 'a':
      ctx.lineTo(rand(15),rand(45));      
      break;
    case 'b':
      ctx.moveTo(rand(50), rand(30));
      break;
    case 'c':
      ctx.lineTo(rand(10), rand(10));
      ctx.lineTo(rand(10), rand(10));
      break;
    case 'd':
      ctx.quadraticCurveTo(rand(230), rand(30), rand(50), rand(100));
      ctx.lineTo(rand(10), rand(10));
      break;
    case 'e':
      ctx.lineTo(rand(25),rand(20));
      break;
    case 'f':
      ctx.lineTo(rand(25),rand(45));
      ctx.lineTo(rand(10), rand(10));
      break;
    case 'g':
      ctx.moveTo(rand(500), rand(300));
      break;
    case 'h':
      ctx.quadraticCurveTo(230, 30, 50, 100);
      break;
    case 'i':
      ctx.lineTo(rand(25),rand(45));
      break;
    case 'j':
      ctx.rotate(-rand(45) * Math.PI / 180);
      // ctx.quadraticCurveTo(230, 30, 50, 100);
      break;
    case 'k':
      ctx.closePath();
      break;
    case 'l':
      ctx.arcTo(rand(150), rand(100), rand(50), rand(20), rand(30));
      break;
    case 'm':
      ctx.lineTo(rand(250),rand(500));
      break;
    case 'n':
      // ctx.quadraticCurveTo(230, 30, 50, 100);    
      ctx.moveTo(rand(50), rand(30));
      break;
    case 'o':
    ctx.arcTo(rand(150), rand(100), rand(50), rand(20), rand(30));    
      break;
    case 'p':
      ctx.lineTo(rand(250),rand(500));
      break;
    case 'q':
      ctx.closePath();
      break;
    case 'r':
      // ctx.lineTo(rand(100), rand(100));
      ctx.arcTo(rand(150), rand(100), rand(50), rand(20), rand(30));
      break;
    case 's':
      ctx.closePath();
      break;
    case 't':
      ctx.rect(rand(100), rand(100), rand(100), rand(100));
      break;
    case 'u':
      ctx.restore();
      break;
    case 'v':
      ctx.rotate(rand(180) * Math.PI / 180);
      break;      
    case 'w':
      ctx.lineTo(rand(255),rand(55));
      // ctx.quadraticCurveTo(rand(230), rand(30), rand(50), rand(100));      
      break;      
    case 'x':
      // ctx.quadraticCurveTo(rand(230), rand(30), rand(50), rand(100));
      ctx.rect(rand(100), rand(100), rand(100), rand(100));
      break;
    case 'y':
      ctx.moveTo(rand(500), rand(500));
      break;
    case 'z':      
      ctx.lineTo(rand(250),rand(50));
      break;
    case /[0-9]/g:
      ctx.lineTo(rand(255),rand(55));
      ctx.quadraticCurveTo(rand(230), rand(30), rand(50), rand(100));      
      break;  
    case /[^a-zA-Z0-9]/g:
      ctx.quadraticCurveTo(rand(230), rand(30), rand(50), rand(100));    
      ctx.lineTo(rand(255),rand(55));
      break;   
  }   
  ctx.stroke();       
}

//catch input
const netInput =()=>{
  conString += input.value.toLowerCase();
};

//get value of object key from string character
let decode = ()=>{
  netInput();   
  for(let i=0; i<conString.length;i++){
  let key = conString.charAt(i);
  ring(key);
  };
}

//draw images
function draw(conString) {
  ctx.beginPath();  
  ctx.save();  
  ctx.translate(547,246);
  ctx.translate(canvas.innerWidth/4,canvas.innerHeight/4);
  
  decode(conString);
  ctx.restore()
};

// const showCoords =(event)=> {
//   let x = event.clientX;
//   let y = event.clientY;
//   draw()
//   console.log(x,y)
//   ctx.translate(x,y); 
// }
// canvas.addEventListener()
button.addEventListener("click",draw);
