

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
    _window = $(window);


	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */

	const initBodyClick = () => {
	  const className = '.c-dropdown';

    $('body').on('click', (e) => {
      if (!$(e.target).closest(className).length) {
        $('.c-dropdown__content').hide();
      }
    });
  };

	const initDropdown = () => {
	  $('[dropdown-js]').on('click', (ev) => {
	    const _elem = $(ev.currentTarget),
        _parentNode = _elem.closest('.c-dropdown'),
        _dropdownContent = _parentNode.find('.c-dropdown__content');

      $('.c-dropdown__content').not(_dropdownContent).hide();

      _dropdownContent.slideToggle(300);
    });
  };

	/*
	* CALLBACK :: end
	* ============================================= */



  /**
   * @description Init all method
   */
  const initJquery = () => {
    // default
    initWebFontLoader();
    initPreventBehavior();
    initSvg4everybody();
		// ==========================================

    // lib
		// ==========================================
    initSwiper();
    initCustomSelect();
    initInputFocus();

    // callback
		// ==========================================
    initBodyClick();
    initDropdown();
  };
  initJquery();
});

