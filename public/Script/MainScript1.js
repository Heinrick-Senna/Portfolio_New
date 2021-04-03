window.onload = function () {
	// Verificar Config
	if (localStorage.getItem('Config') == 0) {
		qsl('#AnimationCheck').checked = false;
		LoadBlocks(localStorage.getItem('Page') || 0);
	} else {
		qsl('#AnimationSpace').removeAttribute('style');
		qsl('#AnimationCheck').checked = true;
		// Funções de Animação
		setTimeout(function(){
			AnimationIn();
			qsl('#SkipAButton button').onclick = function () {
				AnimationSkip();
				
			};
		}, 15);
	}

	BannerInfo();

	// Menu Resize
	window.onresize = () => {
		if (window.innerWidth < 576) {
			MenuVerify = 1;
			CloseOpenMenu();
		}
		ConfigVerify = 1;
		CloseOpenConfig();
	}

	// Abrir e Fechar Configurações
	qsl('#ButtonConfig').addEventListener('click', () => {
		CloseOpenConfig();
	});

	// Verificar Configurações
	qsl('#AnimationCheck').addEventListener('click', function(){
		let i = this.checked ? 1 : 0 ;
		localStorage.setItem('Config', i);
	});

	// Abrir e Fechar Menu
	qsl('#ButtonMenu').addEventListener('click', () => {
		CloseOpenMenu();
	});

	// Troca de Temas
	let themeIcons = qsla('#FloatTheme li');
	for (var i = 0, len = themeIcons.length; i < len; i++) {
		(function(index){
			themeIcons[i].onclick = () => { 
				qsl('#ThemeLink').getAttribute('href').replace(/[^0-9]/g,'') == index ? null : ThemeSwitch(index);
			}    
		})(i);
	}

	// Troca de Páginas
	let menuIcons = qsla('#MainMenu li');
	for (var i = 0, len = menuIcons.length; i < len; i++) {
		(function(index){
			menuIcons[i].onclick = () => {
				if (window.innerWidth < 576) {
					MenuVerify = 1;
					CloseOpenMenu();
				}
				localStorage.getItem('Page') == index ? null : PageSwitch(index) ; 
			}    
		})(i);
	}
}


var MenuVerify = 0, ConfigVerify = 0;

// Função Global
function qsl(element) { return document.querySelector(element); }

function qsla(element) { return document.querySelectorAll(element); }


// Abrir e Fechar Menu
function CloseOpenMenu () {
	if (qsl('#AnimationSpace') == null) {	
		if (MenuVerify % 2 === 0) {
			if (qsl('#ConfigContainer').getAttribute('style') != null) {
				qsl('#ConfigContainer').removeAttribute('Style');
				ConfigVerify = 0;
			}
			qsl('#MainMenu').setAttribute('style', 'display:block!important');

		} else {
			qsl('#MainMenu').removeAttribute('Style');
		}
		MenuVerify++;
	}	
}

// Abrir e Fechar Configurações
function CloseOpenConfig () {
	if (ConfigVerify % 2 === 0) {
		if (qsl('#MainMenu').getAttribute('style') != null) {
			qsl('#MainMenu').removeAttribute('Style');
			MenuVerify = 0;
		}
		qsl('#ConfigContainer').setAttribute('style', 'display:block!important');
	} else {
		qsl('#ConfigContainer').removeAttribute('Style');
	}
	ConfigVerify++;	
}

// Carrega Páginas
function LoadBlocks (num) {
	var Block = qsla('.Block')[num];
	Block.style.display = 'block';
	Block.classList.add('BlockSelected', 'BlockOver');

	qsl('body').removeAttribute('style');
	qsl('#AnimationSpace').remove();
	qsl('#SkipAButton').remove();
	qsl('#MainMenu').removeAttribute('style');
	qsl('#ButtonMenu').removeAttribute('style');
	qsl('#ButtonConfig').removeAttribute('style');

	qsla('#MainMenu li')[num].classList.add('MenuSelected');
	if (num == 2) {
		setTimeout(function(){
			AnimationKnowledge(0);
		}, 200);	
	}
}

// Troca Páginas
function PageSwitch (num) {

	var allBlocks = qsla('.Block');
	if(window.innerWidth > 576) {
		qsl('#MainMenu').style.opacity = '0';		
		setTimeout(function(){
			var OffSet = qsl('#OffSet'),
				Block = allBlocks[num], vHeight = (window.innerHeight * 0.01);
			
			OffSet.style.display = 'block';
			OffSet.classList.add('Opaque');

			for (let i = allBlocks.length - 1; i >= 0; i--) {
				allBlocks[i].style.maxHeight = '100vh';
				if (allBlocks[i].classList.contains('BlockSelected')) {
					var offsetTop = i;
				}
			}

			for (let i = allBlocks.length -1; i >= 0; i--) {
				allBlocks[i].style.marginTop = ((vHeight * 27.5) * (-offsetTop + i)) + 'px';
			}

			allBlocks.forEach(b => {
				b.style.transform = 'scale(.25)';
				b.style.display = 'block';
			});

			qsl('.MenuSelected').removeAttribute('class');
			qsl('body').style.overflowY = 'hidden';
			qsla('#MainMenu li')[num].classList.add('MenuSelected');
			qsl('.BlockOver').classList.remove('BlockSelected');
			
			
			setTimeout(function(){
				qsl('.BlockOver').classList.remove('BlockOver');
				for (let i = allBlocks.length - 1; i >= 0; i--) {
					allBlocks[i].style.marginTop = ((vHeight * 27.5) * (-num + i)) + 'px';
				}

				setTimeout(function(){
					Block.classList.add('BlockOver', 'BlockSelected');
					Block.style.transform = 'scale(1)';

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
						qsl('#OffSet').style.display = 'none';
						qsl('#OffSet').removeAttribute('class');
						qsl('#MainMenu').removeAttribute('style');
						qsl('body').removeAttribute('style');
						
						for (let i = 0; i < allBlocks.length - 1;i++) {
							allBlocks[i].style.maxHeight = 'none';
						}
					}, 750);

				}, 550);

			}, 750);

		}, 250);
	} else {

		qsl('.MenuSelected').classList.remove('MenuSelected');
		qsla('#MainMenu li')[num].classList.add('MenuSelected');
		
		qsl('.BlockOver').style.transform = 'scale(.25)';
		qsl('.BlockOver').style.display = 'none';
		qsl('.BlockOver').classList.remove('BlockSelected', 'BlockOver');
		
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
	var themesIco = qsla('#FloatTheme li'),
	 	newTheme = 'CSS/Colors' + clickTheme + '.css';
	 	qsl('#ThemeLink').setAttribute('href', newTheme);
	 	
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
	var AnimSpace = qsl('#AnimationSpace'),
		Imgs = qsla('.LogoPart'),
		Names = qsla('.AnimationName');

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
						if(qsl('#AnimationSpace') != null)
							AnimationSkip();
					}, 1500);
				}, 1000);
			}, 1200);
		}, 1000);
	}, 500);


}


// Substituindo Animação Início
function AnimationSkip () {
	var Cover = qsl('#BlackScreen');
	Cover.style.transform = 'scaleY(1)';
	Cover.style.transformOrigin = 'top';

	setTimeout(function(){
		
		LoadBlocks(localStorage.getItem('Page') || 0);
	}, 500);

	setTimeout(function(){
		Cover.style.transform = 'scaleY(0)';
		Cover.style.transformOrigin = 'bottom';

		setTimeout(function(){
			Cover.remove();
			qsl('#AnimationLink').remove();
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
		element = qsl('.bannerText');
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
	let strings = ['CSS', 'HTML 5', 'GIT', 'PhotoShop', 'React', 'Javascript', 'Node.js', 'SASS', 'Typescript', 'Vue.js', 'Docker', 'MongoDB']
	let itemspan = qsla('.KnowText');
	if (valueS == 0) {
		qsla('.KnowledgeItens').forEach(I => {
			I.style.transform = 'rotateX(0deg)';
		});
		setTimeout(function(){
			itemspan.forEach(function (element, index) {
				let i = element.innerHTML;
				element.innerHTML = '';
				AnimationText(strings[index], element, 195);

				setTimeout(function(){
					element.nextElementSibling.style.transform = 'scaleX(1)';

					setTimeout(function(){
						element.nextElementSibling.getElementsByTagName('span')[0].style.opacity = '1';
					}, 400);

				}, i.length * 195 + 195);
			});
			
		}, 200);
	} else {
		for (var i = 0; i < itemspan.length; i++) {
			itemspan[i].innerHTML = '';
		}
		qsla('.KnowledgeItens').forEach(I => {
			I.style.transform = 'rotateX(180deg)';
		});
	}
}