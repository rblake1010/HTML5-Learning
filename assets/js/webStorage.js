function doFirst(){
		var button = $('#button');
		button.bind('click', function(){
			console.log('clicked');			
			saveCrap();
		});
		display();
}

$('#clear').bind('click', function(){
	sessionStorage.clear();
});

function saveCrap(){
	var one = $('#one').val();
	var two = $('#two').val();
	sessionStorage.setItem(one,two);
	console.log('stored');
	display();
	$('#one').val('');
	$('#two').val('');
}

// function display(){
// 	var rightbox = document.getElementById('rightbox')	
// 	var x = 0
// 	while (x < sessionStorage.length) {
// 		var a = sessionStorage.key(x);
// 		var b = sessionStorage.getItem(a); 
// 		rightbox.innerHTML += a + ' - ' + b + '<br>'; 
//     x++;
// 	}	

	function display(){
		console.log('I am here');
	var rightbox = document.getElementById('rightbox')	
	rightbox.innerHTML = '';
	for(var x = 0; x < sessionStorage.length; x++){
		var a = sessionStorage.key(x);
		var b = sessionStorage.getItem(a); 
		rightbox.innerHTML += a + ' - ' + b + '<br>';
		}
	}	

window.addEventListener("load", doFirst, false);