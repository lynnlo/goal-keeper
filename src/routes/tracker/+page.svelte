<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Button from '$lib/components/custom/button.svelte';
	import type { Player, Stat } from '$lib/stats/definitions';

	let { data } = $props();
</script>

<div class="w-full h-screen layout p-8">
	<!--- Soccer -->
	<Button style="grid-area: 1 / 1 / 2 / 2;" title="goal" bg_color="green" />
	<Button style="grid-area: 1 / 2 / 2 / 3;" title="assist" bg_color="blue" />
	<Button style="grid-area: 2 / 1 / 3 / 3;" title="shot" bg_color="purple" />

	<Button style="grid-area: 3 / 1 / 4 / 2;" title="save" bg_color="yellow" />
	<Button style="grid-area: 3 / 2 / 4 / 3;" title="redo" bg_color="green" />
	<Button
		style="grid-area: 4 / 1 / 5 / 2;"
		title="exit"
		bg_color="red"
		href="/"
	/>
	<Button style="grid-area: 4 / 2 / 5 / 3;" title="undo" bg_color="zinc" />

	<Button style="grid-area: 3 / 3 / 5 / 5;" title="steal" bg_color="yellow" />

	<!--- Stats -->
	<div class="flex flex-col gap-4" style="grid-area: 1 / 3 / 3 / 5;">
		{#each Object.keys(data.stats) as metric}
			<Card.Root
				class={`bg-zinc-900 ${metric === 'steal' ? 'flex-grow ' : ''}`}
			>
				<Card.Header>
					{metric.charAt(0).toUpperCase() + metric.slice(1)}s
				</Card.Header>
				<Card.Content class="flex gap-4">
					{#each data.stats[metric] as stat}
						<span>
							{metric === 'goal' || metric === 'assist'
								? `(${stat.player.number}) ${stat.player.name} - ${stat.time}'`
								: ''}
							{metric === 'shot'
								? `(${stat.player.number}) - ${stat.time}'`
								: ''}
							{metric === 'steal' ? `(${stat.player.number})` : ''}
						</span>
					{/each}
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</div>
