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

		data() {
			return {
				lastPosition: 0,
				preventCursorJump: false
			};
		},

		methods: {
			emitInput(e) {
				this.$emit('input', e.target.value);

				if (e instanceof InputEvent) {

					this.lastPosition = e.target.selectionEnd;

					if (e.target.value.length > this.lastPosition) {
						this.preventCursorJump = true;
					} else {
						this.lastPosition++;
					}

					setTimeout(() => {
						if (navigator.userAgent.indexOf('MSIE 9') !== -1) return;

						if (this.preventCursorJump) {
							this.$el.selectionStart = this.$el.selectionEnd = this.lastPosition;
						} else {
							this.$el.selectionStart = this.$el.selectionEnd = e.target.value.length;
						}
					});
				}
			}
		}
	};
</script>