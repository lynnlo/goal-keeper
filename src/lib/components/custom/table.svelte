<script lang="ts">
	import { stats, players, application } from '$lib/data/stats.svelte';
	import * as Table from '$lib/components/ui/table';

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
</script>

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
