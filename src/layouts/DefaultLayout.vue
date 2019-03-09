<template>
	<div>
		<router-view/>
	</div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: 'default-layout',
    })
    export default class DefaultLayout extends Vue {
    }
</script>

<style scoped>

</style>
