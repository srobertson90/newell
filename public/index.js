

window.onload = function(){

  var canvas = document.getElementById('main');
  console.log(canvas);

  var context = canvas.getContext('2d');
  console.log(context);

  // context.fillStyle = "red";
  // context.strokeRect(50, 50, 100, 100);
  // context.strokeRect(75, 75, 50, 50);
  // context.strokeRect(25, 25, 150, 150)

  // context.beginPath();
  // context.moveTo(125,125);
  // context.lineTo(175, 175);
  // context.stroke();

  // context.beginPath();
  // context.moveTo(125,75);
  // context.lineTo(175, 25);
  // context.stroke();

  // context.beginPath();
  // context.moveTo(75,75);
  // context.lineTo(25, 25);
  // context.stroke();

  // context.beginPath();
  // context.moveTo(75,125);
  // context.lineTo(25, 175);
  // context.stroke();

  // context.beginPath();
  // context.moveTo(200,200);
  // context.lineTo(200,300);
  // context.lineTo(100,300);
  // context.closePath();
  // context.stroke();

  // context.beginPath();
  // context.arc(400, 300, 150, 0, Math.PI*2, true);
  // context.stroke();



  var img = document.createElement('img');
  var startImg = document.createElement('img');
  // img.src = 'https://s-media-cache-ak0.pinimg.com/originals/5c/22/e5/5c22e5e1db9f768b86ab7be5889b61e0.jpg';

  startImg.src = 'http://static.giantbomb.com/uploads/scale_super/1/13692/1766760-gabe_newell.png'

  img.src = 'https://camo.githubusercontent.com/d2e0baa709b2ab2e70983083c5a23e9736f50c74/68747470733a2f2f7261772e6769746875622e636f6d2f726576616e736f706865722f676162656e697a65722f6d61737465722f676162656e2e706e67';
  var loadImage = function(x, y){context.drawImage(img, (x-100), (y-100), 200, 200);}
  var loadStartImage = function(x, y){context.drawImage(startImg, (x-150), (y-105), 300, 275);}

  canvas.onmousedown= function(){ 
    console.log('mouse down');
    img.onload = loadStartImage(event.clientX, event.clientY);
    canvas.onmousemove = function(event){
      img.onload = loadImage(event.clientX, event.clientY);
    }
  }

  canvas.onmouseup= function(event){ 
    console.log('mouse up');
    canvas.onmousemove = function(event){}
  }
 

 
  // canvas.onmousedown = function(){
  //   context.beginPath();
  //   context.moveTo(event.clientX,event.clientY);
  // }
  
  // canvas.onmouseup = function(){
  //   context.lineTo(event.clientX, event.clientY);
  //   context.stroke();
  // }

  
}