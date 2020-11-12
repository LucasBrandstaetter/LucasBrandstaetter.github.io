
function neuerWurf() {
	
	let x = Math.floor((Math.random() * 6) + 1);
	console.log(x);
	document.getElementById('erg').innerHTML=`<img src="PinClipart_cube_${x}.png" style="width:300px;">`;
	

	
}
