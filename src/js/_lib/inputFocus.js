

/**
 * @name initInputFocus
 *
 * @description
 */
const initInputFocus = () => {
	const inputElem = $("[input-js]");

	/**
	 * @description
	 */
	inputElem.on("focus", (ev) => {
		let curElem = $(ev.currentTarget);

		curElem.closest(".c-form__field").addClass("is-focus");
	});

	/**
	 * @description
	 */
	inputElem.on("blur", (ev) => {
		let curElem = $(ev.currentTarget),
			curElemVal = curElem.val().trim();

		if(curElemVal === "") {
			curElem.closest(".c-form__field").removeClass("is-focus");
		}
	});
};
