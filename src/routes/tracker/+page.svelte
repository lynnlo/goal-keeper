<script lang="ts">
	import { goto } from '$app/navigation';

	import {
		stats,
		players,
		application,
		statLinkage
	} from '$lib/data/stats.svelte';

	import * as Card from '$lib/components/ui/card';
	import * as Table from '$lib/components/ui/table';

	import Button from '$lib/components/custom/button.svelte';

	const get_stats = (player_number: number) => {
		let player = players[player_number];
		let player_stats = application.metrics.reduce(
			(acc: Record<string, number>, metric) => {
				acc[metric] = 0;
				return acc;
			},
			{}
		);

		for (let metric in stats) {
			stats[metric].forEach((instance) => {
				if (instance.player === player.number) {
					player_stats[metric]++;
				}
			});
		}

		return {
			number: player.number,
			player: player.name,
			...player_stats
		};
	};

	const track = (metric: string) => {
		application.state = 'tracking'; // 'idle' | 'tracking' | 'posting'
		application.metric = metric;

		goto('/tracker/player');
	};

	const undo = () => {
		let undoMetric = application.undo.pop();
		if (undoMetric) {
			stats[undoMetric].pop();
			statLinkage[undoMetric].forEach((linkedMetric) => {
				stats[linkedMetric].pop();
			});
		}
	};
</script>

<!--- Soccer -->
<Button
	style="grid-area: 1 / 1 / 3 / 3;"
	title="goal"
	bg_color="green"
	onClick={() => {
		track('Goals');
	}}
/>
<Button
	style="grid-area: 1 / 3 / 3 / 5;"
	title="assist"
	bg_color="blue"
	onClick={() => {
		track('Assists');
	}}
/>
<Button
	style="grid-area: 3 / 1 / 5 / 5;"
	title="shot"
	bg_color="purple"
	onClick={() => {
		track('Shots');
	}}
/>

<Button style="grid-area: 5 / 1 / 7 / 3;" title="save" bg_color="yellow" />
<Button
	style="grid-area: 7 / 1 / 9 / 3;"
	title="exit"
	bg_color="red"
	href="/"
/>
<Button
	style="grid-area: 7 / 3 / 9 / 5;"
	title="undo"
	bg_color="zinc"
	onClick={undo}
/>

<Button
	style="grid-area: 5 / 5 / 9 / 9;"
	title="steal"
	bg_color="yellow"
	onClick={() => {
		track('Steals');
	}}
/>

<!--- Stats -->
<div class="flex flex-col gap-4" style="grid-area: 1 / 5 / 5 / 9;">
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Cell>#</Table.Cell>
				<Table.Cell>Player</Table.Cell>
				{#each application.metrics as stat}
					<Table.Cell>{stat}</Table.Cell>
				{/each}
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each Object.keys(players).map(Number) as player_number}
				<Table.Row>
					{#each Object.values(get_stats(player_number)) as stat}
						<Table.Cell>{stat}</Table.Cell>
					{/each}
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
