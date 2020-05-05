import QRCode, { QRErrorCorrectLevel } from './qrcode'

function QRender(options) {
  this.options = Object.assign({
    render: "canvas",
    padding: 10,
    width: 256,
    height: 256,
    imgWidth: 60,
    imgHeight: 60,
    typeNumber: -1,
    correctLevel: QRErrorCorrectLevel.H,
    background: "#ffffff",
    foreground: "#000000",
  }, options)

  const canvas = this.createCanvas()
  this.options.el.appendChild(canvas)
}

QRender.prototype.createCanvas = function() {
  var qrcode	= new QRCode(this.options.typeNumber, this.options.correctLevel);
  qrcode.addData(this.toUtf8(this.options.text));
  qrcode.make();

  // create canvas element
  var canvas	= document.createElement('canvas');
  canvas.width	= this.options.width;
  canvas.height	= this.options.height;
  var ctx		= canvas.getContext('2d');
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, this.options.width, this.options.height)

  var img = new Image();
  img.src = this.options.src;
  //不放在onload里，图片出不来
  img.onload = () => {
    ctx.fillRect((this.options.width - this.options.imgWidth - this.options.padding) / 2, (this.options.height - this.options.imgHeight - this.options.padding) / 2, this.options.imgWidth + this.options.padding , this.options.imgHeight + this.options.padding);
    ctx.drawImage(img, (this.options.width - this.options.imgWidth) / 2, (this.options.height - this.options.imgHeight) / 2, this.options.imgWidth, this.options.imgHeight);
  }


  // compute tileW/tileH based on this.options.width/this.options.height
  var tileW	= (this.options.width - this.options.padding * 2)  / qrcode.getModuleCount();
  var tileH	= (this.options.height - this.options.padding * 2) / qrcode.getModuleCount();

  // draw in the canvas
  for( var row = 0; row < qrcode.getModuleCount(); row++ ){
    for( var col = 0; col < qrcode.getModuleCount(); col++ ){
      ctx.fillStyle = qrcode.isDark(row, col) ? this.options.foreground : this.options.background;
      var w = (Math.ceil((col+1)*tileW) - Math.floor(col*tileW));
      var h = (Math.ceil((row+1)*tileH) - Math.floor(row*tileH));
      ctx.fillRect(Math.round(col*tileW) + this.options.padding,Math.round(row*tileH) + this.options.padding, w, h);
    }
  }
  return canvas
}

QRender.prototype.toUtf8 = function(str) {
  var out, i, len, c;
  out = "";
  len = str.length;
  for (i = 0; i < len; i++) {
      c = str.charCodeAt(i);
      if ((c >= 0x0001) && (c <= 0x007F)) {
          out += str.charAt(i);
      } else if (c > 0x07FF) {
          out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
          out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
          out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
      } else {
          out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
          out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
      }
  }
  return out;
}

window.QRender = QRender

export default QRender
