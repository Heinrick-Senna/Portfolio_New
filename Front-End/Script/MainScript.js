window.onload = function () {
	var actualTheme = '0';
	$('#FloatTheme li').click(function (){
		ThemeSwitch(clickTheme = $(this).attr('id'), verifyTheme = actualTheme);
	})
}

function ThemeSwitch () {
	if (clickTheme != verifyTheme) {
		if (clickTheme == 0){
			var selectTheme = document.getElementById('FloatTheme').getElementsByTagName('li')[clickTheme];
			selectTheme.innerHTML = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dice-1-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z">';
		}
		if (clickTheme == 1){
			var selectTheme = document.getElementById('FloatTheme').getElementsByTagName('li')[clickTheme];
			selectTheme.innerHTML = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dice-2-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3zm5.5 1a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z">';
		}
		if (clickTheme == 2){
			var selectTheme = document.getElementById('FloatTheme').getElementsByTagName('li')[clickTheme];
			selectTheme.innerHTML = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dice-3-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>';
		}
	}
}