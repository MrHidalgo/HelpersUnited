

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

	const initQaCollapse = () => {
	  $('.qa__block-collapse-header').on('click', (ev) => {
	    const _head = $(ev.currentTarget),
        _bodyNode = _head.siblings('.qa__block-collapse-body');

      _bodyNode.slideToggle(300);
    });
  };

	const initWeekPopup = () => {
	  $('.m-schedule__body-title').on('click', (ev) => {
	    const _elem = $(ev.currentTarget),
        _elemPopup = _elem.siblings('.m-schedule__body-popup');

      _elemPopup.slideToggle(300);
    });

	  $('.m-schedule__body-popup--close').on('click', (ev) => {
      const _elem = $(ev.currentTarget),
        _elemPopup = _elem.closest('.m-schedule__body-popup');

      _elemPopup.slideToggle(300);
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
    initQaCollapse();
    initWeekPopup();
  };
  initJquery();
});

