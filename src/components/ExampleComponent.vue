<template>
	<div>
		<h3>
			<font-awesome-icon icon="home"></font-awesome-icon>
			{{$t('exampleComponent.title')}}
		</h3>
	</div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'example-component',
    })
    export default class ExampleComponent extends Vue {
    }
</script>

<style scoped>

</style>
