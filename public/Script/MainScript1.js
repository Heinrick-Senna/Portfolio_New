window.onload = function () {
	// Verificar Config
	if (localStorage.getItem('Config') == 0) {
		qsl('#AnimationCheck').checked = false;
		LoadBlocks(localStorage.getItem('Page') || 0);
	} else {
		qsl('#AnimationSpace').removeAttribute('style');
		localStorage.setItem('Config', 0);
		// Funções de Animação
		setTimeout(function(){
			AnimationIn();
			qsl('#SkipAButton button').onclick = function () {
				AnimationSkip();
				
			};
		}, 15);
	}
	var themeSwtich = 0;
	if (localStorage.getItem('Theme') == 0) {
		themeSwtich++;
		ThemeFunctions(qsl('#ConfigContainer li'), 0);
	} else {
		ThemeFunctions(qsl('#ConfigContainer li'), 1);
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
	
	qsl('#FloatTheme li').addEventListener('click', function(){
		ThemeFunctions(this, themeSwtich);
		themeSwtich++;
	});

	// Troca de Páginas
	let menuIcons = qsla('#MainMenu li');
	for (var i = 0; i < menuIcons.length; i++) {
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
	if (window.innerWidth > 576) {
		if (ConfigVerify % 2 === 0 ) {
			qsl('#ConfigContainer').setAttribute('style', 'right: 0!important;');
		} else {
			qsl('#ConfigContainer').removeAttribute('style')
		}
	} else {
		if (ConfigVerify % 2 === 0) {
			if (qsl('#MainMenu').getAttribute('style') != null) {
				qsl('#MainMenu').removeAttribute('Style');
				MenuVerify = 0;
			}
			qsl('#ConfigContainer').setAttribute('style', 'display:block!important');
		} else {
			qsl('#ConfigContainer').removeAttribute('Style');
		}
	}
	ConfigVerify++;	
}

function ThemeFunctions (element, n) {
	if (n % 2 === 0) {
		localStorage.setItem('Theme', 0);
		element.innerHTML = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 312.999 312.999" style="enable-background:new 0 0 312.999 312.999;" xml:space="preserve">\
		<path d="M305.6,178.053c-3.2-0.8-6.4,0-9.2,2c-10.4,8.8-22.4,16-35.6,20.8c-12.4,4.8-26,7.2-40.4,7.2c-32.4,0-62-13.2-83.2-34.4\
		c-21.2-21.2-34.4-50.8-34.4-83.2c0-13.6,2.4-26.8,6.4-38.8c4.4-12.8,10.8-24.4,19.2-34.4c3.6-4.4,2.8-10.8-1.6-14.4\
		c-2.8-2-6-2.8-9.2-2c-34,9.2-63.6,29.6-84.8,56.8c-20.4,26.8-32.8,60-32.8,96.4c0,43.6,17.6,83.2,46.4,112s68.4,46.4,112,46.4\
		c36.8,0,70.8-12.8,98-34c27.6-21.6,47.6-52.4,56-87.6C314.4,184.853,311.2,179.253,305.6,178.053z M244.4,261.653\
		c-23.2,18.4-52.8,29.6-85.2,29.6c-38,0-72.4-15.6-97.2-40.4c-24.8-24.8-40.4-59.2-40.4-97.2c0-31.6,10.4-60.4,28.4-83.6\
		c12.4-16,28-29.2,46-38.4c-2,4.4-4,8.8-5.6,13.6c-5.2,14.4-7.6,29.6-7.6,45.6c0,38,15.6,72.8,40.4,97.6s59.6,40.4,97.6,40.4\
		c16.8,0,32.8-2.8,47.6-8.4c5.2-2,10.4-4,15.2-6.4C274,232.453,260.8,248.853,244.4,261.653z"/>\
		</svg>';
		qsl('#ThemeLink').setAttribute('href', '/CSS/Pallete2.css');
	} else {
		localStorage.setItem('Theme', 1);
		element.innerHTML = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 312.812 312.812" style="enable-background:new 0 0 312.812 312.812;" xml:space="preserve">\
		<path d="M305.2,178.159c-3.2-0.8-6.4,0-9.2,2c-10.4,8.8-22.4,16-35.6,20.8c-12.4,4.8-26,7.2-40.4,7.2c-32.4,0-62-13.2-83.2-34.4\
		c-21.2-21.2-34.4-50.8-34.4-83.2c0-13.6,2.4-26.8,6.4-38.8c4.4-12.8,10.8-24.4,19.2-34.4c3.6-4.4,2.8-10.8-1.6-14.4\
		c-2.8-2-6-2.8-9.2-2c-34,9.2-63.6,29.6-84.8,56.8c-20.4,26.8-32.4,60-32.4,96c0,43.6,17.6,83.2,46.4,112s68,46.4,112,46.4\
		c36.8,0,70.8-12.8,98-34c27.6-21.6,47.6-52.4,56-87.6C314,184.959,310.8,179.359,305.2,178.159z"/></svg>';
		qsl('#ThemeLink').setAttribute('href', '/CSS/Pallete1.css');
	}
}

// Carrega Páginas
function LoadBlocks (num) {
	var Block = qsla('.Block')[num];
	Block.style.display = 'block';
	Block.classList.add('BlockSelected', 'BlockOver');

	qsl('body').setAttribute('style', 'overflow-x: hidden;');
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
			qsl('body').setAttribute('style', 'overflow: hidden;')
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
						qsl('body').setAttribute('style', 'overflow-x: hidden;')
						
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