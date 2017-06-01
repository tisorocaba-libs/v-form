<template>
	<textarea
		class="form-control"
		:value="value"
		@input="emitInput"
	></textarea>
</template>

<script>
	import BaseMixin from './base';

	export default {
		mixins: [BaseMixin],

		props: {
			value: { default: '' },
			autoResize: { default: true }
		},

		mounted() {
			if (this.autoResize) {
				this.resize();
			}
		},

		methods: {
			emitInput(e) {
				this.$emit('input', e.target.value);

				if (this.autoResize) {
					this.resize();
				}
			},

			resize() {
				this.$el.style.overflow = 'hidden';
				this.$el.style.height = 'auto';
				this.$el.style.height = (this.$el.scrollHeight) + 'px';
			}
		}
	}
</script>