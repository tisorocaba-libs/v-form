export default {
	created() {
		this.correctIEQuirks();
	},

	methods: {
		correctIEQuirks() {
			// http://stackoverflow.com/questions/6382389/oninput-in-ie9-doesnt-fire-when-we-hit-backspace-del-do-cut
			(function (d) {
				if (navigator.userAgent.indexOf('MSIE 9') === -1) return;

				d.addEventListener('selectionchange', function() {
					var el = d.activeElement;

					if (el && (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT')) {
						var ev = d.createEvent('CustomEvent');
						ev.initCustomEvent('input', true, true, {});
						el.dispatchEvent(ev);
					}
				});
			})(document);
		}
	}
}