$(document).ready(function(){
	// AnimationIn();
	// $('button').click(function(){
	// 	AnimationSkip();
	// });
		
	$('#FloatTheme li').click(function (){
		var actualTheme = parseInt($('#ThemeLink').attr('href').substr(-5).replace(/[^0-9]/g,''));
		var clickTheme=$(this).attr('id').replace(/[^0-9]/g,'');
		if (actualTheme != clickTheme) {
			ThemeSwitch(clickTheme);	
		}
	});

	$("#MainMenu li").click(function() {
		var classCheck = this.classList.contains('MenuSelected'),
			elements = document.getElementById('MainMenu').getElementsByTagName('li');
			if (!classCheck) {
				for (var i = elements.length - 1; i >= 0; i--) {
					if (elements[i] == this) {
						PageSwitch(i);
					}
				}
			}
	});
	var Page = 0;
	LoadBlocks(Page);
});




 function LoadBlocks (num) {
	var Block = document.getElementsByClassName('Block')[num],
 		idSiblings = Block.getAttribute('id');
 		Icon = document.getElementById('MainMenu').getElementsByTagName('li')[num];
 	Block.style.display = 'block';
 	 var blockHeight = (($('.Block').height()) / 4 ),
 		viewportHeight = (window.innerHeight * 0.01),
 		upValue = (blockHeight + viewportHeight);
 		var Cached = $('.Block:nth-child('+(num+1)+')').css("marginTop"),
 				finalCount = (parseInt(Cached) - (upValue * num));
 	$('.Block:nth-child('+(num+1)+')').css("margin-top", finalCount);
	$('#'+idSiblings).siblings('.Block').css('display', 'none');
	$('#MainMenu li:nth-child('+(num+1)+')').addClass('MenuSelected');
}



 function PageSwitch (num) {
 	$('.MenuSelected').removeAttr('class');
 	$('#MainMenu li:nth-child('+(num+1)+')').addClass('MenuSelected');
 	$('.Block').css('transform', 'scale(.25)');
 	setTimeout(function(){
 		$('.Block').css('display', 'block');
 	}, 500);
 	var blockHeight = (($('.Block').height()) / 4 ),
 		viewportHeight = (window.innerHeight * 0.01),
 		upValue = (blockHeight + viewportHeight);
 	setTimeout(function(){
 		for (var i = 4; i >= 0; i--) {
 			var Cached = $('.Block:nth-child('+(i+2)+')').css("marginTop"),
 				finalCount = (parseInt(Cached) - (upValue * num));
 			$('.Block:nth-child('+(i+2)+')').css("margin-top", finalCount);
 		}
 		setTimeout(function(){
 			var blockSelected = document.getElementsByClassName('Block')[num];
 			$('.Block').css('display', 'none');
 			blockSelected.style.display = 'block';
 			$('.Block').css('transform', 'scale(1)');
 			blockSelected.classList.add('BlockSelected');

 		}, 200);
 	}, 750);
}


 
// Animação de Início//
 function AnimationIn () {
	var FirstContainerAnimation = $('#AnimationBackground'),
		SecondContainerAnimation = $('#AnimationLogoMask'),
		SecondImageAnimation = $('#SecondHalfLogo'),
		NamesAnimation = $('.NamesContainer img'),
		NamesMask = $('.AnimationNameMask');
	// Abrindo Animação
	FirstContainerAnimation.attr('class', 'FirstHalfStart');
	SecondContainerAnimation.attr('class', 'SecondHalfStart');
	SecondImageAnimation.attr('style', 'margin-top: 110%;');
	setTimeout(function(){
		NamesAnimation.attr('style', 'margin-left: 72%;');
		setTimeout(function(){
			NamesMask.attr('style', 'margin-left: -150%');
		}, 500);
	}, 2000);

	// Fechando Animação
	setTimeout(function(){
			NamesMask.attr('style', 'margin-left: -100%');
		setTimeout(function(){
			NamesAnimation.attr('style', 'margin-left: -100%;');
	}, 600);
		setTimeout(function(){
		FirstContainerAnimation.attr('class', '');
		SecondContainerAnimation.attr('class', 'SecondHalfOff');
		SecondImageAnimation.removeAttr('style');	
		}, 1000);
	}, 4000);
}


// Substituindo Animação
function AnimationSkip () {
		var Cover = $('#BlackScreen');
		Cover.attr('style', 'transform-origin: top;transform: scaleY(1);');
			setTimeout(function(){	
				$('#AnimationSpace').remove();
			}, 510);
				
			setTimeout(function(){
				Cover.attr('style', 'transform-origin: bottom;transform: scaleY(0);');
				setTimeout(function(){
					Cover.remove();
				}, 600);
			}, 1000);
}


// Temas
function ThemeSwitch (clickTheme) {
	var themesIco = document.getElementById('FloatTheme').getElementsByTagName('li');
		if (clickTheme == 0){
			themesIco[clickTheme].innerHTML = '<svg viewBox="0 0 16 16" class="bi bi-dice-1-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z">';
			themesIco[1].innerHTML = '<svg viewBox="0 0 16 16" class="bi bi-dice-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="4" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/>';
			themesIco[2].innerHTML = '<svg viewBox="0 0 16 16" class="bi bi-dice-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="4" cy="4" r="1.5"/> <circle cx="12" cy="12" r="1.5"/> <circle cx="8" cy="8" r="1.5"/>';
			}
		if (clickTheme == 1){
			themesIco[clickTheme].innerHTML = '<svg viewBox="0 0 16 16" class="bi bi-dice-2-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3zm5.5 1a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z">';
			themesIco[0].innerHTML = '<svg viewBox="0 0 16 16" class="bi bi-dice-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="8" cy="8" r="1.5"/>';
			themesIco[2].innerHTML = '<svg viewBox="0 0 16 16" class="bi bi-dice-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="4" cy="4" r="1.5"/> <circle cx="12" cy="12" r="1.5"/> <circle cx="8" cy="8" r="1.5"/>';
		}
		if (clickTheme == 2){
			themesIco[clickTheme].innerHTML = '<svg viewBox="0 0 16 16" class="bi bi-dice-3-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>';
			themesIco[0].innerHTML = '<svg viewBox="0 0 16 16" class="bi bi-dice-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="8" cy="8" r="1.5"/>';
			themesIco[1].innerHTML = '<svg viewBox="0 0 16 16" class="bi bi-dice-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="4" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/>';
		}
		var newTheme = 'CSS/Colors' + clickTheme + '.css';
		document.getElementById('ThemeLink').setAttribute('href', newTheme);
}