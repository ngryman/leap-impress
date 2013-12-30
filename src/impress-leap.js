!function(exports) {

	function init(selector) {
		selector = selector || 'impress';

		var impressEl = document.getElementById('impress'),
			transitioning = false;

		impressEl.addEventListener('impress:stepleave', function() {
			transitioning = true;
		});

		impressEl.addEventListener('impress:stepenter', function() {
			transitioning = false;
		});

		Leap.loop({ enableGestures: true }, function(e) {
			if (transitioning) return;

			var gesture = e.gestures[0];

			if (!gesture) return;
			if ('swipe' != gesture.type || 'stop' != gesture.state) return;

			if (gesture.startPosition[0] < gesture.position[0]) impress().prev();
			else impress().next();
		});
	}

	exports.impressLeap = function() {
		return {
			init: init
		}
	}
	
}(window);
