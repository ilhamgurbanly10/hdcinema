
// sidebar

const sidebar = () => {

	const sidebar = document.querySelector('.sidebar');
	const seeMore = sidebar.querySelector('.form-see-more-btn');
	const defaultText = seeMore.innerHTML;
	const dataText = "See Less";
	const hiddenItems = sidebar.querySelectorAll('.list-dropdown-hidden-item'); 

	const toggle = () => {

		for (let i = 0; i < hiddenItems.length; i++) {
			
			hiddenItems[i].classList.contains('fl-show') ? seeMore.innerHTML = defaultText : seeMore.innerHTML = dataText;

			hiddenItems[i].classList.toggle('fl-show');

		}

	}

	seeMore.addEventListener('click', toggle);

}

sidebar();

// the-end-of-sidebar