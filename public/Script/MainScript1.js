window.onload = function () {
	// Funções de Animação
	// AnimationIn();
	// document.getElementById('SkipAButton').onclick = function () {
	// 	AnimationSkip();
	// };

	// Carregar Páginas
	LoadBlocks(localStorage.getItem('Page') || 0);
	BannerInfo();
	setTimeout(function(){
		AnimationKnowledge();
	}, 200);



	var arrowSocial = document.querySelector('.SocialText img'),
		textSocial = document.querySelector('.SocialText p'),
		arrowPot = document.querySelector('.SocialTextImg');
	arrowSocial.onclick = function (){
		if (textSocial.style.transform != 'none') {
			textSocial.style.transform = 'none';
			textSocial.style.height = '19vh';
		} else {
			textSocial.style.transform = 'scaleY(0)';
			textSocial.style.height = '0';
		}
		arrowPot.style.transform = 'rotate(' + (parseInt(arrowPot.getAttribute('style').replace(/[^0-9]/g,''))+180) + 'deg)';

	}


	// Troca de Páginas
	var menuIcons = document.querySelectorAll('#MainMenu li');
	for (i = 0; i < menuIcons.length; i++) {
		menuIcons[i].addEventListener('click', function(){
			var classCheck = this.classList.contains('MenuSelected');
			if (!classCheck) {
				for (var i = menuIcons.length - 1; i >= 0; i--) {
					if (menuIcons[i] == this) {
						PageSwitch(i);
					}
				}
			}
		});
	};

	// Troca  de Temas
	var themeIcons = document.querySelectorAll('#FloatTheme li');
	for (i = 0; i < themeIcons.length; i++) {
		themeIcons[i].addEventListener('click', function(){
			var actualTheme = document.querySelector('#ThemeLink').getAttribute('href').replace(/[^0-9]/g,''), 
				clickTheme = this.getAttribute('id').replace(/[^0-9]/g,'');
			if (actualTheme != clickTheme)
				ThemeSwitch(clickTheme);
		});
	}

};

// Funções //

// Carrega Páginas
function LoadBlocks (num) {
	var Block = document.querySelectorAll('.Block')[num];
	Block.style.display = 'block';
	Block.classList.add('BlockSelected', 'BlockOver');

	document.querySelectorAll('#MainMenu li')[num].classList.add('MenuSelected');
}

// Troca Páginas
function PageSwitch (num) {
	document.querySelector('#MainMenu').style.opacity = '0';

	setTimeout(function(){
		var allBlocks = document.querySelectorAll('.Block'), OffSet = document.querySelector('#OffSet'),
			Block = allBlocks[num], vHeight = (window.innerHeight * 0.01);
		
		OffSet.style.display = 'block';
		OffSet.classList.add('Opaque');

		for (var i = allBlocks.length - 1; i >= 0; i--) {
			if (allBlocks[i].classList.contains('BlockSelected')) {
				var offsetTop = i;
			}
		}

		for (var i = allBlocks.length -1; i >= 0; i--) {
			allBlocks[i].style.marginTop = ((vHeight * 26.5) * (-offsetTop + i)) + 'px';
			var randomC = Math.floor(Math.random()*16777215).toString(16), randomC2 = Math.floor(Math.random()*16777215).toString(16);	
			allBlocks[i].style.boxShadow = '0px 0px 0px .5vw #' + randomC + ', -10vw 0px 10vw -5vw #' + randomC2;
		}

		allBlocks.forEach(b => {
			b.style.transform = 'scale(.25)';
			b.style.display = 'block';
		});

		document.querySelector('.MenuSelected').removeAttribute('class');
		document.querySelector('body').style.overflowY = 'hidden';
		document.querySelectorAll('#MainMenu li')[num].classList.add('MenuSelected');
		document.querySelectorAll('.BlockOver')[0].classList.remove('BlockSelected');
		
		
		setTimeout(function(){
			document.querySelector('.BlockOver').classList.remove('BlockOver');
			for (var i = allBlocks.length - 1; i >= 0; i--) {
				allBlocks[i].style.marginTop = ((vHeight * 26.5) * (-num + i)) + 'px';
			}

			setTimeout(function(){

				Block.classList.add('BlockOver', 'BlockSelected');
				Block.style.transform = 'scale(1)';
				

				setTimeout(function(){
				 	allBlocks.forEach(b => {
						b.style.display = 'none';
					});

	 				document.querySelector('#OffSet').style.display = 'none';
	 				document.querySelector('#OffSet').removeAttribute('class');
	 				document.querySelector('#MainMenu').removeAttribute('style');
					document.querySelector('body').removeAttribute('style');
	 				
				}, 750);

			}, 550);

		}, 750);

	}, 250);

	localStorage.setItem('Page', num);
}

// Temas
function ThemeSwitch (clickTheme) {
	var themesIco = document.querySelectorAll('#FloatTheme li'),
	 	newTheme = 'CSS/Colors' + clickTheme + '.css';
	 	document.querySelector('#ThemeLink').setAttribute('href', newTheme);
	 	
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

// Animação de Início//
function AnimationIn () {
	var FirstContainerAnimation = document.querySelector('#AnimationBackground'),
		SecondContainerAnimation = document.querySelector('#AnimationLogoMask'),
		SecondImageAnimation = document.querySelector('#SecondHalfLogo'),
		NamesAnimation = document.querySelectorAll('.NamesContainer img'),
		NamesMask = document.querySelectorAll('.AnimationNameMask');
	// Abrindo Animação
	FirstContainerAnimation.setAttribute('class', 'FirstHalfStart');
	SecondContainerAnimation.setAttribute('class', 'SecondHalfStart');
	SecondImageAnimation.setAttribute('style', 'margin-top: 110%;');
	setTimeout(function(){
		NamesAnimation[0].setAttribute('style', 'margin-left: 72%;');
		NamesAnimation[1].setAttribute('style', 'margin-left: 72%;');
		setTimeout(function(){
			NamesMask[0].setAttribute('style', 'margin-left: -150%');
			NamesMask[1].setAttribute('style', 'margin-left: -150%');
		}, 500);
	}, 2000);

	// Fechando Animação
	setTimeout(function(){
			NamesMask[0].setAttribute('style', 'margin-left: -100%');
			NamesMask[1].setAttribute('style', 'margin-left: -100%');
		setTimeout(function(){
			NamesAnimation[0].setAttribute('style', 'margin-left: -100%;');
			NamesAnimation[1].setAttribute('style', 'margin-left: -100%;');
	}, 600);
		setTimeout(function(){
		FirstContainerAnimation.setAttribute('class', '');
		SecondContainerAnimation.setAttribute('class', 'SecondHalfOff');
		SecondImageAnimation.removeAttribute('style');
		setTimeout(function(){
			if (document.getElementById('AnimationSpace') != null) {
				AnimationSkip();
			}
		}, 2000);
		}, 1000);
	}, 4000);
}


// Substituindo Animação Início
function AnimationSkip () {
	var Cover = document.querySelector('#BlackScreen');
	Cover.style.transform = 'scaleY(1)';
	Cover.style.transformOrigin = 'top';

	setTimeout(function(){
		document.querySelector('#AnimationSpace').remove();
		document.querySelector('#MainMenu').removeAttribute('style');
		LoadBlocks(localStorage.getItem('Page') || 0);
	}, 500);

	setTimeout(function(){
		Cover.style.transform = 'scaleY(0)';
		Cover.style.transformOrigin = 'bottom';

		setTimeout(function(){
			Cover.remove();
			document.querySelector('#AnimationLink').remove();
		}, 500);
		
	}, 1000);
}

// Função que escreve textos
function AnimationText (text, element, speed) {
	var i = 0;
		setInterval(function() {
		if (i < text.length) {
			element.append(text.charAt(i));
			i++;
		}}, speed);
}

// Animações Aba Home
function BannerInfo () {
	var ptexts = ['Esse é o meu portfolio Front-End.', 'Seja Bem-Vindo!', 'Sinta-se a vontade para navegar.'],
		element = document.querySelector('.bannerText');
	var i1 = 0, i2 = 0, i3 = 0;
		element.innerHTML = '';
		AnimationText(ptexts[0], element, 115);

		var secondText = setInterval(function() {
			if (element.innerHTML == ptexts[0] && i1 == 0) {
				i1++;
				setTimeout(function(){
					element.innerHTML = '';
					AnimationText(ptexts[1], element, 115);
					clearInterval(secondText);
				}, 115);
			}
		}, 1000);

		var thirdText = setInterval(function() {
			if (element.innerHTML == ptexts[1] && i2 == 0) {
				i2++;
				setTimeout(function(){
					element.innerHTML = '';
					AnimationText(ptexts[2], element, 115);
					clearInterval(thirdText);
				}, 115);
			}
		}, 1000);

		var fourthText = setInterval(function() {
			if (element.innerHTML == ptexts[2] && i3 == 0) {
				i3++;
				setTimeout(function(){
					BannerInfo();
					clearInterval(fourthText);
				}, 115);
			}
		}, 1000);
}

// Animação Aba Conhecimentos
function AnimationKnowledge () {
	var itemspan = document.querySelectorAll('.KnowText');
	document.querySelectorAll('.KnowledgeItens').forEach(I => {
		I.style.transform = 'rotateX(0deg)';
	});
	setTimeout(function(){
		itemspan.forEach(I => {
			var i = I.innerHTML;
			I.innerHTML = '';
			AnimationText(i, I, 175);

			setTimeout(function(){
				I.nextElementSibling.style.transform = 'scaleX(1)';

				setTimeout(function(){
					I.nextElementSibling.getElementsByTagName('span')[0].style.opacity = '1';
				}, 400);

			}, i.length * 175 + 175);
		});
		
	}, 200);
}