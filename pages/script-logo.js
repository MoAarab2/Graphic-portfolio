const toggleSwitch = document.querySelector('input[type="checkbox"]');

const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('i1');
const image2 = document.getElementById('i2');
const image3 = document.getElementById('i3');
const image4 = document.getElementById('i4');
const image5 = document.getElementById('i5');
const image6 = document.getElementById('i6');
const image7 = document.getElementById('i7');
const image8 = document.getElementById('i8');
const image9 = document.getElementById('i9');
const image10 = document.getElementById('i10');

const currentTheme = localStorage.getItem('theme');
function imageMode(color){
	// Dark or Light Images
  image1.src = `png bestanden/logos/we try we buy-${color}.png`;
  image2.src = `png bestanden/logos/de nijl logo-${color}.png`;
  image3.src = `png bestanden/logos/finop en vve beheer logo-${color}.png`;
	image4.src = `png bestanden/logos/fts koeriers-${color}.png`;
  image5.src = `png bestanden/logos/office power logo-${color}.png`;
  image6.src = `png bestanden/logos/reparatie service flevoland logo-${color}.png`;
	image7.src = `png bestanden/logos/sign creations logo-${color}.png`;
	image8.src = `png bestanden/logos/josefien-${color}.png`;
	image9.src = `png bestanden/logos/trik logo-${color}.png`;
	image10.src = `png bestanden/logos/meike logo-${color}.png`;
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

