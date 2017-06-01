<template>
	<div class="form-group" :class="{ 'has-error has-feedback': validation && validation.$error }">
		<label class="control-label" :for="elementId" v-html="label" v-if="label"></label>
		<slot></slot>
		<span class="help-block" v-if="validation && validation.$error">{{ validationMessage }}</span>
	</div>
</template>

<script>
	export default {
		props: {
			id: { default() { return `field_${this._uid}`; } },
			label: { default: '' },
			validation: { default: '' },
			validationMessages: {
				default() {
					return {
						required: 'Preenchimento obrigatório'
					}
				}
			}
		},

		data() {
			let elementId = this.id;

			return {
				elementId
			}
		},

		computed: {
			validationMessage() {
				for (let m in this.validationMessages) {
					if (this.validation[m] === false) {
						return this.validationMessages[m];
					}
				}
			}
		},

		mounted() {
			let tags = ['SELECT', 'INPUT', 'TEXTAREA'];

			this.slotElement = this.$slots.default && this.$slots.default[0].elm;

			if (this.slotElement && tags.indexOf(this.slotElement.tagName) === -1) {
				this.slotElement = [...this.slotElement.children].find(c => {
					return tags.indexOf(c.tagName) !== -1;
				});
			}

			if (this.slotElement) {
				if (this.slotElement.type && this.slotElement.type !== 'checkbox' && this.slotElement.type !== 'radio') {
					if (this.slotElement.id) {
						this.elementId = this.slotElement.id;
					} else {
						this.slotElement.id = this.elementId;
					}
				}

				if (this.validation) {
					this.slotElement.addEventListener('input', this.validation.$touch);
				}
			}
		},

		beforeDestroy() {
			this.slotElement.removeEventListener('input', this.validation.$touch);
		}
	}
</script>

<style scoped>
	label.control-label {
		display: block;
	}
</style>