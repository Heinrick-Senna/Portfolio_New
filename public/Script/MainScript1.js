$(document).ready(function(){
	// Funções de Animação
	// AnimationIn();
	// $('#SkipAButton').click(function(){
	// 	AnimationSkip();
	// });

	LoadBlocks(localStorage.getItem('Page') || 0);
	
	// Troca  de Temas
	$('#FloatTheme li').click(function (){
		var actualTheme = $('#ThemeLink').attr('href').replace(/[^0-9]/g,''), clickTheme = $(this).attr('id').replace(/[^0-9]/g,'');
		if (actualTheme != clickTheme)
			ThemeSwitch(clickTheme);	
	});

	// Troca de Páginas
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
});


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
		setTimeout(function(){
			AnimationSkip();
		}, 2000);
		}, 1000);
	}, 4000);
}


// Substituindo Animação
function AnimationSkip () {
	var Cover = $('#BlackScreen');
	Cover.attr('style', 'transform-origin: top;transform: scaleY(1);');

	setTimeout(function(){
		$('#AnimationSpace').remove();
		$('#MainMenu').css('display', 'block');
		LoadBlocks(localStorage.getItem('Page') || 0);
		$('#AnimationLink').remove();
	}, 500);

	setTimeout(function(){
		Cover.attr('style', 'transform-origin: bottom;transform: scaleY(0);');
	
		setTimeout(function(){
				Cover.remove();
			}, 510);
	}, 1000);
}

// Troca Páginas
function PageSwitch (num) {
	$('#MainMenu').css('opacity', '0');

	setTimeout(function(){
		var b = $('.Block'), o = $('#OffSet'), 
			Block = document.getElementsByClassName('Block')[num], vHeight = (window.innerHeight * 0.01);
	 	
	 	o.css('display', 'block');
	 	o.attr('class', 'Opaque');
	 	
	 	for (var i = b.length - 1; i >= 0; i--) {
	 		if (document.getElementsByClassName('Block')[i].classList.contains('BlockSelected')) {
				var offsetTop = i;
	 		}
	 	}

		for (var i = b.length -1; i >= 0; i--) {
		 	$('.Block:nth-child('+(i+1)+')').css('margin-top', ((vHeight * 26.5) * (-offsetTop + i)) + 'px');
		 	var randomC = Math.floor(Math.random()*16777215).toString(16), randomC2 = Math.floor(Math.random()*16777215).toString(16);
		 	$('.Block:nth-child('+(i+1)+')').css('box-shadow', '0px 0px 0px .5vw #' + randomC + ', -10vw 0px 10vw -5vw #' + randomC2);
		}
	 	
	 	b.css('transform', 'scale(0.25)');
	 	b.css('display', 'block');

	 	$('.MenuSelected').removeAttr('class');
	 	
	 	$('#MainMenu li:nth-child('+(parseInt(num)+1)+')').addClass('MenuSelected');
	 	$('body').css('overflow', 'hidden');
	 	document.getElementsByClassName('BlockOver')[0].classList.remove('BlockSelected');
	 	
	 	setTimeout(function(){
	 		
	 		document.getElementsByClassName('BlockOver')[0].classList.remove('BlockOver');
	 		for (var i = b.length - 1; i >= 0; i--) {
		 		$('.Block:nth-child('+(i+1)+')').css('margin-top', ((vHeight * 26.5) * (-num + i)) + 'px');
			}
	 		
	 		setTimeout(function(){
	 			Block.classList.add('BlockOver');
	 			Block.classList.add('BlockSelected');
	 			Block.style.transform = 'scale(1)';
	 			$('body').removeAttr('css');
	 			
	 			setTimeout(function(){
	 				$('.Block').css('display', 'none');
	 				$('#OffSet').css('display', 'none');
	 				$('#OffSet').removeAttr('class');
	 				$('#MainMenu').removeAttr('style');
	 			}, 750);
	 			
	 		}, 550);

	 	}, 750);

 	}, 250);
 	localStorage.setItem('Page', num);
}

// Carrega Páginas
function LoadBlocks (num) {
	var Block = document.getElementsByClassName('Block')[num],
		Icon = document.getElementById('MainMenu').getElementsByTagName('li');
	
	Block.style.display = 'block';
	Block.classList.add('BlockSelected');
	Block.classList.add('BlockOver');

	Icon[num].classList.add('MenuSelected');
}


// Temas
function ThemeSwitch (clickTheme) {
	var themesIco = document.getElementById('FloatTheme').getElementsByTagName('li'),
	 	newTheme = 'CSS/Colors' + clickTheme + '.css';
	 	$('#ThemeLink').attr('href', newTheme);
	 	
	 	switch (clickTheme) {
	 		case 0:
				themesIco[clickTheme].innerHTML = '<svg viewBox="0 0 16 16" class="bi bi-dice-1-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z">';
				themesIco[1].innerHTML = '<svg viewBox="0 0 16 16" class="bi bi-dice-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="4" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/>';
				themesIco[2].innerHTML = '<svg viewBox="0 0 16 16" class="bi bi-dice-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="4" cy="4" r="1.5"/> <circle cx="12" cy="12" r="1.5"/> <circle cx="8" cy="8" r="1.5"/>';
	 		
	 		case 1:
				themesIco[clickTheme].innerHTML = '<svg viewBox="0 0 16 16" class="bi bi-dice-2-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3zm5.5 1a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z">';
				themesIco[0].innerHTML = '<svg viewBox="0 0 16 16" class="bi bi-dice-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="8" cy="8" r="1.5"/>';
				themesIco[2].innerHTML = '<svg viewBox="0 0 16 16" class="bi bi-dice-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="4" cy="4" r="1.5"/> <circle cx="12" cy="12" r="1.5"/> <circle cx="8" cy="8" r="1.5"/>';
			case 2:
				themesIco[clickTheme].innerHTML = '<svg viewBox="0 0 16 16" class="bi bi-dice-3-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>';
				themesIco[0].innerHTML = '<svg viewBox="0 0 16 16" class="bi bi-dice-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="8" cy="8" r="1.5"/>';
				themesIco[1].innerHTML = '<svg viewBox="0 0 16 16" class="bi bi-dice-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="4" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/>';
		}
		
}

