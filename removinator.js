function remove(){
	try{
		document.getElementById('Odp5De').innerHTML = '';
	}
	catch(err){
		// skip if ai isnt on the page
	}
	console.log('Bye bye AI! ');
	setTimeout(function(){remove();},10000);
}
remove();
