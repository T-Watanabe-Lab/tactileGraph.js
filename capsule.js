var capsule = function(id){
  var RATIO = 1654 / 599;
  var cvs = document.getElementById(id);
  var cx = cvs.getContext('2d');
  cx.font= 'bold 53px "Ikarashi Braille"';
  cx.lineWidth=3;
  cx.fillStyle = "white";
  cx.fillRect(0,0,1654,2339);
  cx.fillStyle = "black";

 return {
  drawBraille:function(str, x, y, returnX){
    cx.fillText( str, x*RATIO, y*RATIO);
  },

  drawLine:function(x1, y1, x2, y2) {
    cx.beginPath();
    cx.moveTo(x1*RATIO, y1*RATIO);
    cx.lineTo(x2*RATIO, y2*RATIO);
    cx.stroke();
  },

  setDot:function(num){
    switch(num){
      case 0: cx.lineWidth=1;break;
      case 1: cx.lineWidth=3;break;
      case 2: cx.lineWidth=5;break;
    }
  },

  loadImage(){
    return cvs.toDataURL();
  }
 }
}