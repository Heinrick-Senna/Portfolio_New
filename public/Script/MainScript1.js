window.onload = function () {
	// Verificar Config
	if (localStorage.getItem('Config') == 0) {
		document.querySelector('#AnimationCheck').checked = false;
		document.querySelector('#AnimationSpace').remove();
		document.querySelector('#MainMenu').style.display = 'block';
		// Carregar Página
		LoadBlocks(localStorage.getItem('Page') || 0);
	} else {
		document.querySelector('#AnimationCheck').checked = true;
		// Funções de Animação
		AnimationIn();
		document.getElementById('SkipAButton').onclick = function () {
			AnimationSkip();
		};
	}

	BannerInfo();

	// StartUp Config
	document.querySelector('#AnimationCheck').addEventListener('click', function(){
	let chk = document.querySelector('#AnimationCheck').checked;
		if (chk) {
			localStorage.setItem('Config', 1);
		} else {
			localStorage.setItem('Config', 0);
		}
	});

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
	if (num == 2) {
		setTimeout(function(){
			AnimationKnowledge(0);
		}, 200);	
	}
}

// Troca Páginas
function PageSwitch (num) {
	
	var allBlocks = document.querySelectorAll('.Block');
	if(window.innerWidth > 970) {
		document.querySelector('#MainMenu').style.opacity = '0';		
		setTimeout(function(){
			var OffSet = document.querySelector('#OffSet'),
				Block = allBlocks[num], vHeight = (window.innerHeight * 0.01);
			
			OffSet.style.display = 'block';
			OffSet.classList.add('Opaque');

			for (var i = allBlocks.length - 1; i >= 0; i--) {
				if (allBlocks[i].classList.contains('BlockSelected')) {
					var offsetTop = i;
				}
			}

			for (var i = allBlocks.length -1; i >= 0; i--) {
				allBlocks[i].style.overflow = 'hidden';
				allBlocks[i].style.maxHeight = '100vh';
				allBlocks[i].style.marginTop = ((vHeight * 27.5) * (-offsetTop + i)) + 'px';
			}

			allBlocks.forEach(b => {
				b.style.transform = 'scale(.25)';
				b.style.display = 'block';
			});

			document.querySelector('.MenuSelected').removeAttribute('class');
			document.querySelector('body').style.overflowY = 'hidden';
			document.querySelectorAll('#MainMenu li')[num].classList.add('MenuSelected');
			document.querySelector('.BlockOver').classList.remove('BlockSelected');
			
			
			setTimeout(function(){
				document.querySelector('.BlockOver').classList.remove('BlockOver');
				for (var i = allBlocks.length - 1; i >= 0; i--) {
					allBlocks[i].style.marginTop = ((vHeight * 27.5) * (-num + i)) + 'px';
				}

				setTimeout(function(){

					Block.classList.add('BlockOver', 'BlockSelected');
					Block.style.transform = 'scale(1)';
					Block.style.maxHeight = 'none';
					Block.style.overflow = 'none';
					if (num == 2) {
						setTimeout(function(){
							AnimationKnowledge(0);
						}, 1000) 
					} else {
						AnimationKnowledge(1);
					}
					

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
	} else {
		document.querySelector('.MenuSelected').classList.remove('MenuSelected');
		document.querySelectorAll('#MainMenu li')[num].classList.add('MenuSelected');
		document.querySelector('.BlockOver').style.transform = 'scale(.25)';
		document.querySelector('.BlockOver').classList.remove('BlockSelected', 'BlockOver');
		allBlocks[num].classList.add('BlockOver', 'BlockSelected');
		allBlocks[num].style.transform = 'scale(1)';
		if (num == 2) {
			setTimeout(function(){
				AnimationKnowledge(0);
			}, 1000) 
		} else {
			AnimationKnowledge(1);
		}
	}
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
	var AnimSpace = document.querySelector('#AnimationSpace'),
		Imgs = document.querySelectorAll('.LogoPart'),
		Names = document.querySelectorAll('.AnimationName');

	// Abrindo Animação
	Imgs[0].style.marginTop = '-17.5%';
	Imgs[1].style.marginTop = '11.5%';
	Imgs[1].setAttribute('style', 'margin-top:11.5%;-webkit-mask-position: 0 53.8%, center!important;');
	setTimeout(function(){
		AnimSpace.style.marginTop = '-10vh';
		setTimeout(function(){
			Names[0].setAttribute('style', 'margin-left:21.45%!important;-webkit-mask-position-x: -2vw!important;');
			Names[1].setAttribute('style', 'margin-left:21.45%!important;-webkit-mask-position-x: -2vw!important;');
			setTimeout(function(){
				Names[0].removeAttribute('style');
				Names[1].removeAttribute('style');
				setTimeout(function(){
					AnimSpace.style.marginTop = '0';
					Imgs[0].style.marginTop = '0';
					Imgs[1].style.marginTop = '0';
					Imgs[1].removeAttribute('style');
					setTimeout(function(){
						if(document.querySelector('#AnimationSpace') != null)
							AnimationSkip();
					}, 1500);
				}, 1000);
			}, 1200);
		}, 1000);
	}, 500);


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
	var ptexts = ['Esse é o meu site Front-End.', 'Seja Bem-Vindo!', 'Sinta-se a vontade para navegar.'],
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
function AnimationKnowledge (valueS) {
	var itemspan = document.querySelectorAll('.KnowText');
	if (valueS == 0) {
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
	} else {
		document.querySelectorAll('.KnowledgeItens').forEach(I => {
			I.style.transform = 'rotateX(180deg)';
		});
	}
}