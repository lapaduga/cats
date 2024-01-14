const files = {
	kapa: new Audio('../audio/kapa.mp3'),
	sonya: new Audio('../audio/sonya.mp3'),
	marusya: new Audio('../audio/marusya.mp3'),
	johnny: new Audio('../audio/johnny.mp3')
}

const handleButtons = () => {
	const buttons = document.querySelectorAll('.btn');

	buttons.forEach(btn => {
		btn.addEventListener('click', () => {

			btn.classList.add('run-animation');

			setTimeout(() => {
				btn.classList.remove('run-animation');
			}, 500);

			for (const key in files) {
				if (Object.hasOwnProperty.call(files, key)) {
					const file = files[key];

					if (btn.dataset.cat === key) {
						file.play();
					}
				}
			}
		});
	});
}

document.addEventListener('DOMContentLoaded', () => {
	const swiper = new Swiper('.swiper', {
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	handleButtons();
});