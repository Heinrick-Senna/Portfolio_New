window.onload = function () {
	setTimeout(function(){
		Animation();
	}, 2000);
	}

function Animation () {
	var FirstLetter = document.getElementById('FirstHalf');
	var SecondLetter = document.getElementById('SecondHalf');
	var divcontainer = document.getElementsByTagName('div')[0];
	var divcontainer2 = document.getElementsByTagName('div')[1];
	SecondLetter.setAttribute('style', 'margin-top:200%');
}
