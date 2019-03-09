<template>
	<div>
		<h1>{{$t('home.title')}}</h1>
		<example-component></example-component>
	</div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ExampleComponent from '@/components/ExampleComponent.vue';

    @Component({
        name: 'home',
        components: {ExampleComponent},
    })
    export default class Home extends Vue {
    }
</script>

<style scoped>

</style>
