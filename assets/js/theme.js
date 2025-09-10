//  ┌┬┐┬ ┬┌─┐┌┬┐┌─┐
//  │ ├─┤├┤ │││├┤
//  ┴ ┴ ┴└─┘┴ ┴└─┘
// Set theme based on Configurations and Preferences

let darkTheme = localStorage.getItem('darkTheme');
const themeToggle = document.querySelector('#themeButton');
const themeIcon = document.querySelector('#themeIcon');
const bodyBackground = document.getElementById('#body');

const enableDark = () => {
	document.body.classList.add('darktheme');
	localStorage.setItem('darkTheme', 'enabled');
	themeIcon.style.backgroundImage = "url('chrome/icons/circle.svg')";
};

const disableDark = () => {
	document.body.classList.remove('darktheme');
	localStorage.setItem('darkTheme', null);
	themeIcon.style.backgroundImage = "url('chrome/icons/circle-dark.svg')";
};

if (darkTheme === 'enabled') {
	document.body.classList.add('notransition');
	enableDark();
	document.body.classList.remove('notransition');
} else {
	disableDark();
}

themeToggle.addEventListener('click', () => {
	darkTheme = localStorage.getItem('darkTheme');
	if (darkTheme !== 'enabled') {
		enableDark();
	} else {
		disableDark();
	}
});

if (CONFIG.imageBackground) {
	document.body.classList.add('withImageBackground');
}

if (CONFIG.changeThemeByOS && CONFIG.autoChangeTheme) {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		enableDark();
	} else {
		disableDark();
	}
}

if (CONFIG.changeThemeByHour && CONFIG.autoChangeTheme && !CONFIG.changeThemeByOS) {
	const date = new Date();
	const hours = date.getHours() < 10 ? '0' + date.getHours().toString() : date.getHours().toString();
	const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes().toString();
	const currentTime = hours + ':' + minutes;
	if (currentTime >= CONFIG.hourDarkThemeActive) {
		enableDark();
	} else if (currentTime >= CONFIG.hourDarkThemeInactive) {
		disableDark();
	}
}