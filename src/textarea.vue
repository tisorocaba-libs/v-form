<template>
	<v-wrapper v-bind="{ id, label, validation, wrapped }">
		<textarea
			class="form-control"
			v-bind="$props"
			:class="$props.classes"
			:style="$props.styles"
			ref="textarea"
			@input="emitInput"
		></textarea>
	</v-wrapper>
</template>

<script>
	import Base from './base';

	export default {
		extends: Base
	};
</script>