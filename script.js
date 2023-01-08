const toggleSwitch = document.querySelector('input[type="checkbox"]');

const home = document.getElementById("home");
const projects = document.getElementById('projects');

const toggleIcon = document.getElementById('toggle-icon');

const currentTheme = localStorage.getItem('theme');
function imageMode(color){
	// Dark or Light Images
home.style.backgroundImage = `url('./pages/images/bady-abbas-hxi_yRxODNc-unsplash-${color}.jpg')`; 
projects.style.backgroundImage = `url('./pages/images/pexels-lukas-1420701-${color}.jpg')`;
}

// switch from light to dark mode
function toggleDarkLightMode(isDark){
	if (isDark) {
	toggleIcon.children[0].textContent = 'Dark Mode';
	toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
	imageMode('dark');
	return false;
	}else{
	toggleIcon.children[0].textContent = 'Light Mode';
	toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
	imageMode('light');
	return false;
	}	
}

// Switch Theme
function switchTheme(event){
	if (event.target.checked){
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark')
		toggleDarkLightMode(true)
	}else{
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light')
		toggleDarkLightMode(false)
	}
}

// Event listener
toggleSwitch.addEventListener('change', switchTheme);

// set theme on page load
if (currentTheme){
	document.documentElement.setAttribute('data-theme', currentTheme);
	if(currentTheme === 'dark'){
		toggleSwitch.checked = true;
	toggleDarkLightMode(true)
	}
}

