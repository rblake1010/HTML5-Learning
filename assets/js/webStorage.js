function doFirst(){
		var button = $('#button');
		button.bind('click', function(){
			console.log('clicked');
			saveCrap();
		});
}

function saveCrap(){
	var one = $('#one').val();
	var two = $('#two').val();
	sessionStorage.setItem(one,two);
	console.log('stored');
	display(one);
}

function display(one){
	var rightbox = $('#rightbox');
	var two = sessionStorage.getItem(one);
	rightbox.html('Name of variable:' + one + "<br> Value:" + two);
	console.log('output');
}

window.addEventListener("load", doFirst, false);