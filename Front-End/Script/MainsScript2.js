window.onload = function () {
	setTimeout(function(){
		Animation();
	}, 2000);
	}

function Animation () {
	var FirstLetter = document.getElementById('FirstHalf');
	var SecondLetter = document.getElementById('SecondHalf');
	var ConnectorLetter = document.getElementById('ConnectorLetter');
	FirstLetter.setAttribute('style', 'position:absolute;margin-top:-10%;');
	SecondLetter.setAttribute('style', 'position:absolute;margin-top:10%;');	
	ConnectorLetter.setAttribute('style', 'position:absolute;margin-top:10%');
	setTimeout(function(){
		ConnectorLetter.setAttribute('src', '');
		SecondLetter.setAttribute('src', '../Design/HalfLogo2.png');
	}, 1000);
}
