<template>
	<v-wrapper v-bind="{ id, label, validation, wrapped }">
		<input
			class="form-control"
			v-bind="$props"
			:class="$props.classes"
			:style="$props.styles"
			v-mask="mask ? mask : ''"
			ref="input"
			@input="emitInput"
		>
	</v-wrapper>
</template>

<script>
	import Base from './base';

	export default {
		extends: Base,

		methods: {
			emitInput(e) {
				this.$emit('input', e.target.value);

				if (this.validation) {
					this.validation.$touch();
				}

				setTimeout(() => {
					if (this.mask) {
						if (navigator.userAgent.indexOf('MSIE 9') !== -1) return;
						
						this.$refs.input.selectionStart = this.$refs.input.selectionEnd = this.mask.length;
					}
				}, 0);
			}
		}
	};
</script>