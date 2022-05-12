const toggleButton = document.getElementsByClassName('toggle-button')[0]
const topLinks = document.getElementsByClassName('topLinks')[0]

function createMenu() {
	topLinks.classList.toggle('active');
}

toggleButton.addEventListener('click', createMenu)