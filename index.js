import Vue from 'vue';
import VueMask from 'v-mask';
import register from './src/register';
import input from './src/input';
import select from './src/select';
import textarea from './src/textarea';

Vue.use(VueMask);

export {
	register,
	input,
	select,
	textarea
}