$(document).ready(function(){
	$('#FloatTheme li').click(function (){
		var actualTheme = parseInt($('#ThemeLink').attr('href').substr(-5).replace(/[^0-9]/g,''));
		var clickTheme=$(this).attr('id').replace(/[^0-9]/g,'');
		if (actualTheme != clickTheme) {
		ThemeSwitch(clickTheme);	
		}
	});

	$("#NavBarIcon").click(function(){
		OpenCloseMenu();
	});

});

function ThemeSwitch (clickTheme) {
	var themesIco = document.getElementById('FloatTheme').getElementsByTagName('li');
		if (clickTheme == 0){
			themesIco[clickTheme].innerHTML = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dice-1-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z">';
			themesIco[1].innerHTML = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dice-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="4" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/>';
			themesIco[2].innerHTML = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dice-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="4" cy="4" r="1.5"/> <circle cx="12" cy="12" r="1.5"/> <circle cx="8" cy="8" r="1.5"/>';
			}
		if (clickTheme == 1){
			themesIco[clickTheme].innerHTML = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dice-2-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3zm5.5 1a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z">';
			themesIco[0].innerHTML = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dice-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="8" cy="8" r="1.5"/>';
			themesIco[2].innerHTML = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dice-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="4" cy="4" r="1.5"/> <circle cx="12" cy="12" r="1.5"/> <circle cx="8" cy="8" r="1.5"/>';
		}
		if (clickTheme == 2){
			themesIco[clickTheme].innerHTML = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dice-3-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>';
			themesIco[0].innerHTML = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dice-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="8" cy="8" r="1.5"/>';
			themesIco[1].innerHTML = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dice-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13 1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><circle cx="4" cy="4" r="1.5"/><circle cx="12" cy="12" r="1.5"/>';
		}
		var newTheme = 'CSS/Design' + clickTheme + '.css';
		document.getElementById('ThemeLink').setAttribute('href', newTheme);
}

function OpenCloseMenu () {
	var Menu = document.getElementById('OutMenu');
	var MenuCheck = Menu.getAttribute('class');
	if (MenuCheck == 'MenuOff'){
		alert(MenuCheck);
		Menu.classList.remove('MenuOff');
		Menu.classList.add('MenuHidden');
		setTimeout(function(){ 
			Menu.classList.add('MenuOn');
			Menu.classList.remove('MenuHidden');
		}, 100);
	}

}