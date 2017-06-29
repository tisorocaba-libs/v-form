<template>
	<div class="toggle-container">
		<span v-if="longest" ref="longest" v-html="longest"></span>
		<input type="checkbox" :id="id" :checked="value" @change="$emit('input', $event.target.checked)">
		<label :for="id">
			<div class="toggle-circle"></div>
			<div class="toggle-text">{{ value ? labels[0] : labels[1] }}</div>
		</label>
	</div>
</template>

<script>
	import BaseMixin from './base';

	export default {
		mixins: [BaseMixin],

		props: {
			value: { default: '' },
			id: { default() { return `field_${this._uid}`; } },
			rounded: { default: true },
			labels: { default() { return ['', '']; } }
		},

		data() {
			return {
				longest: ''
			};
		},

		watch: {
			rounded() {
				this.toggleRounded();
			}
		},

		mounted() {
			this.toggleRounded();
			this.setSize();
		},

		methods: {
			toggleRounded() {
				if (this.rounded) {
					this.$el.classList.add('rounded');
				} else {
					this.$el.classList.remove('rounded');
				}
			},

			setSize() {
				this.longest = this.labels.reduce((a, b) => a.length > b.length ? a : b);

				this.$nextTick(() => {
					let size = this.$refs.longest.offsetWidth;

					this.longest = '';

					if (size < 40) {
						size = 40;
					}

					this.$el.querySelector('label').style.width = `${size + 30}px`;
				});
			}
		}
	};
</script>

<style scoped>
	.toggle-container {
		position: relative;
	}

	.toggle-container input {
		visibility: hidden;
	}

	.toggle-container label {
		position: absolute;
		top: 0;
		left: 0;
		height: 25px;
		background: #999;
		border-radius: 2px;
		line-height: 26px;
		text-align: center;
		font-size: 12px;
		user-select: none;
		color: #ffffff;
	}

	.toggle-container .toggle-text {
		margin-left: 23px;
	}

	.toggle-container.rounded label,
	.toggle-container.rounded .toggle-circle {
		border-radius: 50px;
	}

	.toggle-container .toggle-circle {
		position: absolute;
		width: 23px;
		height: 23px;
		top: 1px;
		left: 1px;
		background: #ffffff;
		border-radius: 2px;
		transition: all 0.1s;
		cursor: pointer;
	}

	.toggle-container input[type="checkbox"]:checked + label {
		background: #71b9db;
	}

	.toggle-container input[type="checkbox"]:checked + label .toggle-text {
		margin-left: -23px;
	}

	.toggle-container input[type="checkbox"]:checked + label .toggle-circle {
		left: calc(100% - 24px);
	}
</style>