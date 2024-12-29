<script lang="ts">
	import { goto } from '$app/navigation';

	import { stats, players, application } from '$lib/data/stats.svelte';

	import { GridManager } from '$lib/gridManager';

	import Button from '$lib/components/custom/button.svelte';
	import Table from '$lib/components/custom/table.svelte';
	import type { StatButton } from '$lib/data/definitions';

	const track = (metric: string) => {
		application.state = 'tracking'; // 'idle' | 'tracking' | 'posting'
		application.metric = metric;

		goto('/tracker/player');
	};

	const undo = () => {
		let undoMetric = application.undo.pop();
		if (undoMetric) {
			stats[undoMetric].pop();
			application.metricLinkage[undoMetric].forEach((linkedMetric) => {
				stats[linkedMetric].pop();
			});
		}
	};

	const gridManager = new GridManager(9, 9);
	gridManager.addItem('.table', 4, 4, 4, 0);
	gridManager.addItem('.control', 4, 2, 0, 6);
	application.metrics.forEach((metric, index) => {
		let button: StatButton = application.metricButtons[metric];
		if (!button) {
			button = {
				hidden: false,
				size: [2, 2]
			};
		}

		if (!button.hidden && button.size)
			gridManager.addItem(metric, button.size[0], button.size[1]);
	});
</script>

<!--- Soccer -->
{#each gridManager.grid.items as element}
	{#if !element.name.startsWith('.')}
		<Button
			style={`grid-area: ${element.y + 1} / ${element.x + 1} / ${element.y + element.height + 1} / ${element.x + element.width + 1};`}
			title={element.name}
			bg_color="rand"
			onClick={() => {
				track(element.name);
			}}
		/>
	{/if}
{/each}

<Button style="grid-area: 7 / 2 / 9 / 4;" title="save" bg_color="yellow" />
<Button
	style="grid-area: 7 / 1 / 9 / 2;"
	title="exit"
	bg_color="red"
	href="/"
/>
<Button
	style="grid-area: 7 / 4 / 9 / 5;"
	title="undo"
	bg_color="zinc"
	onClick={undo}
/>

<!--- Stats -->
<div class="flex flex-col gap-4" style="grid-area: 1 / 5 / 5 / 9;">
	<Table />
</div>
