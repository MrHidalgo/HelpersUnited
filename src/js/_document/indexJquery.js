

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

	const initInputSearch = () => {
    $('.c-form__input-search').on('keyup', (ev) => {
      const _elem = $(ev.currentTarget),
        _parentNode = _elem.closest('.c-form__input-wrapper'),
        _elemVal = _elem.val(),
        _elemIcon = _elem.siblings('a'),
        _elemDropdown = _parentNode.find('.c-form__dropdown');

      if(_elemVal.length > 0) {
        _elem.addClass('is-search');
        _elemIcon.addClass('is-close');
        _elemDropdown.slideDown(350);
      } else {
        _elem.removeClass('is-search');
        _elemIcon.removeClass('is-close');
        _elemDropdown.slideUp(350);
      }
    });

    $('.c-form__input-btn').on('click', (ev) => {
      const _elem = $(ev.currentTarget);

      if(_elem.hasClass('is-close')) {
        $('.c-form__input-search').removeClass('is-search').val('');
        _elem.removeClass('is-close');
        _elem.closest('.c-form__field').removeClass('is-focus');
        $('.c-form__dropdown').slideUp(350);
      }
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
    initHamburger();

    // callback
		// ==========================================
    initBodyClick();
    initDropdown();
    initQaCollapse();
    initWeekPopup();
    initInputSearch();
  };
  initJquery();
});

