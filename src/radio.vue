<template>
	<label class="radio-inline">
		<span class="radio-container">
			<input type="radio" :id="id" :value="value" :checked="isChecked" @change="emitInput">
			<label :for="id"></label>
		</span>
	</label>
</template>

<script>
	import BaseMixin from './base';

	export default {
		mixins: [BaseMixin],

		props: {
			value: { default: '' },
			modelValue: { default: '' },
			id: { default() { return `field_${this._uid}`; } },
			rounded: { default: true }
		},

		model: {
			prop: 'modelValue',
			event: 'change'
		},

		computed: {
			isChecked() {
				return this.modelValue === this.value;
			}
		},

		watch: {
			rounded() {
				this.toggleRounded();
			}
		},

		mounted() {
			this.toggleRounded();
		},

		methods: {
			toggleRounded() {
				if (this.rounded) {
					this.$el.querySelector('.radio-container').classList.add('rounded');
				} else {
					this.$el.querySelector('.radio-container').classList.remove('rounded');
				}
			},

			emitInput(e) {
				this.$emit('change', this.value);
			}
		}
	}
</script>

<style>
	.radio label,
	.radio-inline {
		padding-left: 0;
	}
</style>

<style scoped>
	.radio-container {
		position: relative;
		display: inline-block;
		width: 20px;
		height: 20px;
	}

	.radio-container label {
		display: inline-block;
		position: absolute;
		top: 0;
		left: 0;
		width: 20px;
		height: 20px;
		background: #ffffff;
		border: solid 1px #ccc;
		border-radius: 2px;
		user-select: none;
	}

	.radio-container input[type="radio"] {
		visibility: hidden;
	}

	.radio-container input[type="radio"]:checked + label:before {
		content: '';
		position: absolute;
		width: 13px;
		height: 7px;
		top: 4px;
		left: 3px;
		border: solid 3px #666;
		border-top: none;
		border-right: none;
		transform: rotate(-45deg);
	}

	.radio-container.rounded label {
		border-radius: 50px;
	}

	.radio-container.rounded input[type="radio"]:checked + label:before {
		width: 12px;
	}
</style>