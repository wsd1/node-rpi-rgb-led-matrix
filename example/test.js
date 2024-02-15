var LedMatrix = require("../index.js");

//init a 16 rows  by 16 cols led matrix 
//default hardware mapping is 'regular', could be 'adafruit-hat-pwm' ect 
var matrix = new LedMatrix(32, 64, 1, 8);
matrix.setPixel(160, 20, 100, 50, 255);

matrix.drawText(160, 20, "中文也可以奥~ hahah", "msyh20.bdf", 20, 100, 20);

matrix.update();
setTimeout(function(){
		console.log('Done!')
	},3000)


