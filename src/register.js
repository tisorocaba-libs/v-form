import Vue from 'vue';

export default function (prefix) {
	let context = require.context('./', true, /\.vue$/);
	let components = context.keys();

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