

/**
 *
 * @type {{init(): void, change(): void, chooseVal(*): void, focusElem(*): void, blurElem(*): void}}
 * @private
 */
const customSelect = {
	init() {
		const _select = document.querySelectorAll('select');

		for (let elem of _select) {
			elem.previousElementSibling.innerHTML = elem.options[elem.selectedIndex].text;
		}
	},
	change() {
		const _select = document.querySelectorAll('select');

		for (let elem of _select) {
			const _selectedOption= elem.options[elem.selectedIndex],
				_selectedValue = _selectedOption.value,
				_selectedText = _selectedOption.text;

			if(_selectedValue !== '') {
				this.chooseVal(elem);
			}

			elem.previousElementSibling.innerHTML = _selectedText;
			this.blurElem(elem);
		}
	},
	chooseVal (elem) {
		elem.closest('.c-form__field').classList.add('is-choose');
	},
	focusElem (elem) {
		elem.closest('.c-form__field').classList.add('is-focus');
	},
	blurElem (elem) {
		elem.closest('.c-form__field').classList.remove('is-focus');
	}
};


/**
 * @name initCustomSelect
 *
 * @description
 */
const initCustomSelect = () => {
	const _select = document.querySelectorAll('select');

	customSelect.init();

	for (let elem of _select) {
		elem.addEventListener('change', () => {
			customSelect.change(elem);
		});
		elem.addEventListener('focus', () => {
			customSelect.focusElem(elem);
		});
		elem.addEventListener('click', () => {
			customSelect.focusElem(elem);
		});
		elem.addEventListener('blur', () => {
			customSelect.blurElem(elem);
		});
	}
};
