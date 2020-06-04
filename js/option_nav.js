var menuBar = document.getElementById('menu_bar');


function showMenuBar() {
	menuBar.classList.add('show-menu-bar');
	setTimeout(function() {
		menuBar.classList.add('move-menu-bar');
	},100)
}

function hideMenuBar() {
	menuBar.classList.remove('move-menu-bar');
	setTimeout(function() {
		menuBar.classList.remove('show-menu-bar');
	},760)
}