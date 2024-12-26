<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Table from '$lib/components/ui/table';
	import Button from '$lib/components/custom/button.svelte';
	import type { Player, Stat } from '$lib/stats/definitions';

	let { data } = $props();

	let players: Record<number, Player[]> = data.players;
	let stats: Record<string, Stat[]> = data.stats;

	const get_stats = (player_id: number) => {
		let player = players[player_id];
		let player_stats = {
			goal: 0,
			assist: 0,
			shot: 0,
			steal: 0
		};

		for (let metric in stats) {
			stats[metric].forEach((instance) => {
				if (instance.player === player.number) {
					player_stats[metric]++;
				}
			});
		}

		console.log(player_stats);

		return {
			number: player.number,
			player: player.name,
			...player_stats
		};
	};
</script>

<div class="w-full h-screen layout p-8">
	<!--- Soccer -->
	<Button style="grid-area: 1 / 1 / 3 / 3;" title="goal" bg_color="green" />
	<Button style="grid-area: 1 / 3 / 3 / 5;" title="assist" bg_color="blue" />
	<Button style="grid-area: 3 / 1 / 5 / 5;" title="shot" bg_color="purple" />

	<Button style="grid-area: 5 / 1 / 7 / 3;" title="save" bg_color="yellow" />
	<Button style="grid-area: 5 / 3 / 7 / 5;" title="redo" bg_color="green" />
	<Button
		style="grid-area: 7 / 1 / 9 / 3;"
		title="exit"
		bg_color="red"
		href="/"
	/>
	<Button style="grid-area: 7 / 3 / 9 / 5;" title="undo" bg_color="zinc" />

	<Button style="grid-area: 5 / 5 / 9 / 9;" title="steal" bg_color="yellow" />

	<!--- Stats -->
	<div class="flex flex-col gap-4" style="grid-area: 1 / 5 / 5 / 9;">
		<Table.Root sc>
			<Table.Header>
				<Table.Row>
					<Table.Cell>#</Table.Cell>
					<Table.Cell>Player</Table.Cell>
					<Table.Cell>Goals</Table.Cell>
					<Table.Cell>Assists</Table.Cell>
					<Table.Cell>Shots</Table.Cell>
					<Table.Cell>Steals</Table.Cell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each Object.keys(players) as player_id}
					<Table.Row>
						{#each Object.values(get_stats(player_id)) as stat}
							<Table.Cell>{stat}</Table.Cell>
						{/each}
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
</div>
