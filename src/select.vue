<template>
	<v-wrapper v-bind="{ id, label, validation, wrapped }">
		<select
			class="form-control"
			v-bind="$props"
			:class="$props.classes"
			:style="$props.styles"
			ref="select"
			@change="emitInput"
		>
			<slot></slot>
		</select>
	</v-wrapper>
</template>

<script>
	import Base from './base';

	export default {
		extends: Base,

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

				if (this.validation) {
					this.validation.$touch();
				}
			},

			setInitialValue() {
				if (this.value) {
					let el = this.$refs.select;
					let options = [...el.options];

					options.forEach((o, index) => {
						if (o._value === this.value) {
							el.selectedIndex = index;
						}
					});
				}
			}
		}
	};
</script>