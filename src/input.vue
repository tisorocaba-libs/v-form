<template>
	<input
		type="text"
		class="form-control"
		:value="value"
		@input="emitInput"
	>
</template>

<script>
	import BaseMixin from './base';

	export default {
		mixins: [BaseMixin],

		props: {
			value: { default: '' }
		},

		methods: {
			emitInput(e) {
				this.$emit('input', e.target.value);

				setTimeout(() => {
					if (navigator.userAgent.indexOf('MSIE 9') !== -1) return;

					if (e.target) {
						this.$el.selectionStart = this.$el.selectionEnd = e.target.value.length;
					}
				}, 0);
			}
		}
	};
</script>