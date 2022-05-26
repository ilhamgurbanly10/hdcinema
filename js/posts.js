
// show-text-more

const showTextMore = () => {

	const text = document.querySelector('.posts-head-text');
	const btn = document.querySelector('.posts-head-read-more-btn');
	const icon = btn.querySelector('.fa');

	const toggle = () => { text.classList.toggle('fl-show'); icon.classList.toggle('fa-chevron-down'); }

	btn.addEventListener('click', toggle);
}

showTextMore();

// the-end-of-show-text-more