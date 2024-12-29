<script lang="ts">
	import Button from '$lib/components/custom/button.svelte';
	import Table from '$lib/components/custom/table.svelte';
</script>

<div class="w-full h-screen p-8 layout">
	<div style="grid-area: 1 / 1 / 7 / 9;">
		<Table />
	</div>
	<Button
		style="grid-area: 7 / 1 / 9 / 2;"
		title="exit"
		bg_color="red"
		href="/"
	/>
	<Button
		style="grid-area: 7 / 2 / 9 / 3;"
		title="config"
		bg_color="yellow"
		href="/config"
	/>
</div>
