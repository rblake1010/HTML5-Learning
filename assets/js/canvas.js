$(document).ready(function(){ 
	var theCanvas = document.getElementById('c');
	var ctx = theCanvas.getContext('2d');

	var image = new Image();

	image.onload = function(){
		console.log('Loaded image')
		ctx.drawImage(image, 0, 0, c.width, c.height);
	}
	image.src = "http://www.eastcottvets.co.uk/uploads/Animals/gingerkitten.jpg";
});