import Vue from 'vue';

export default function (prefix) {
	let context = require.context('./', true, /\.vue$/);
	let components = context.keys();

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

	components.forEach(c => {
		let name = c.replace('./', '').replace('.vue', '');

		name = name.replace(/([A-Z])/, '-$1').toLowerCase();

		if (prefix) {
			name = `${prefix}-${name}`;
		} else {
			name = `${name[0].toUpperCase()}${name.substr(1)}`;
		}

		Vue.component(name, context(c));
	});
}