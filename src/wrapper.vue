<template>
	<div>
		<template v-if="wrapped">
			<div class="form-group" :class="{ 'has-error has-feedback': validation && validation.$error }">
				<label :for="id" class="control-label" v-html="label"></label>
				<slot></slot>
				<span class="glyphicon glyphicon-remove form-control-feedback" v-if="validation && validation.$error"></span>
				<span class="help-block" v-if="validation && validation.$error">{{ _validationMessage }}</span>
			</div>
		</template>

		<template v-else>
			<slot></slot>
			<span class="glyphicon glyphicon-remove form-control-feedback" v-if="validation && validation.$error"></span>
			<span class="help-block" v-if="validation && validation.$error">{{ _validationMessage }}</span>
		</template>
	</div>
</template>

<script>
	export default {
		props: ['id', 'label', 'validation', 'wrapped'],

		data() {
			let minLength = this.validation && this.validation.$params.minLength && this.validation.$params.minLength.min;

			return {
				validationMessages: {
					required: 'Preenchimento obrigatório',
					minLength: `Deve ter ao menos ${minLength} caracteres`,
					sameAs: 'Os valores devem ser iguais',
					email: 'E-mail inválido',
					cpf: 'CPF inválido',
					date: 'Data inválida',
					cep: 'CEP inválido',
					telefoneFixo: 'Telefone inválido',
					telefoneCelular: 'Celular inválido'
				}
			};
		},

		computed: {
			_validationMessage() {
				for (let m in this.validationMessages) {
					if (this.validation[m] === false) {
						return this.validationMessages[m];
					}
				}
			}
		}
	};
</script>

<style scoped>
	label {
		display: block;
	}

	.help-block {
		position: absolute;
	}
</style>