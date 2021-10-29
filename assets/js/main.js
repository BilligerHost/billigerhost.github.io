(function($) {

	var	$window = $(window),
		$banner = $('#banner'),
		$body = $('body');

		breakpoints({
			default:   ['1681px',null    ],
			xlarge:    ['1281px','1680px'],
			large:     ['981px', '1280px'],
			medium:    ['737px', '980px' ],
			small:     ['481px', '736px' ],
			xsmall:    ['361px', '480px' ],
			xxsmall:   [null,    '360px' ]
		});

		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

})(jQuery);