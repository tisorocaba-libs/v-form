<script>
	import VWrapper from './wrapper';

	export default {
		components: { VWrapper },

		props: {
			'classes': { default: undefined },
			'cols': { default: undefined },
			'disabled': { default: undefined },
			'id': { default: function() { return `field_${this._uid}`; } },
			'label': { default: undefined },
			'mask': { default: undefined },
			'maxlength': { default: undefined },
			'minlength': { default: undefined },
			'multiple': { default: undefined },
			'placeholder': { default: undefined },
			'readonly': { default: undefined },
			'rows': { default: undefined },
			'styles': { default: undefined },
			'type': { default: undefined },
			'value': { default: undefined },
			'validation': { default: undefined },
			'wrapped': { default: true }
		},

		mounted() {
			this.setEventListeners();
		},

		methods: {
			emitInput(e) {
				this.$emit('input', e.target.value);

				if (this.validation) {
					this.validation.$touch();
				}
			},

			setEventListeners() {
				let events = Object.keys(this._events);
				let elements = Object.keys(this.$refs);

				elements.forEach(element => {
					events.forEach(event => {
						this.$refs[element].addEventListener(event, (e) => {
							if (event !== 'input') {
								this.$emit(event, e);
							}
						});
					});
				});
			}
		}
	};
</script>