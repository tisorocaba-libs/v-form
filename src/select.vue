<template>
	<select
		class="form-control"
		@change="emitInput"
	>
		<slot></slot>
	</select>
</template>

<script>
	import BaseMixin from './base';

	export default {
		mixins: [BaseMixin],

		props: {
			value: { default: null }
		},

		mounted() {
			this.setInitialValue();
		},

		updated() {
			this.setInitialValue();
		},

		methods: {
			emitInput(e) {
				let selectedOptions = [...e.target.options].filter(o => o.selected === true);
				let values = selectedOptions.map(option => {
					return option._value !== undefined ? option._value : option.value;
				});

				if (this.multiple) {
					this.$emit('input', values);
				} else {
					this.$emit('input', values[0]);
				}
			},

			setInitialValue() {
				if (this.value) {
					let el = this.$el;
					let options = [...el.options];

					options.forEach((o, index) => {
						if (JSON.stringify(o._value) === JSON.stringify(this.value)) {
							el.selectedIndex = index;
						}
					});
				}
			}
		}
	}
</script>