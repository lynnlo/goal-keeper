<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import {
		statLinkage,
		stats,
		players,
		application
	} from '$lib/data/stats.svelte';

	import Button from '$lib/components/custom/button.svelte';

	onMount(() => {
		if (application.state === 'idle') {
			goto('/tracker');
		}
	});

	const track = (player_number: number) => {
		application.state = 'idle';

		// Push all linked metrics, emaple goals -> targets -> shots
		statLinkage[application.metric].forEach((linkedMetric) => {
			console.log('linkedMetric', linkedMetric);
			stats[linkedMetric].push({
				player: player_number,
				time: 2
			});
		});

		stats[application.metric].push({
			player: player_number,
			time: 2
		});

		application.undo.push(application.metric);

		goto('/tracker');
	};

	const toggle_sog = () => {
		application.metric = application.metric === 'Shots' ? 'Targets' : 'Shots';
	};
</script>

{#each Object.values(players) as player}
	<Button
		title={player.number.toString()}
		onClick={() => track(player.number)}
	/>
{/each}

<Button
	style="grid-area: 7 / 1 / 9 / 3;"
	title="back"
	bg_color="red"
	href="/tracker"
/>
<Button
	className={`${application.metric === 'Shots' || application.metric === 'Targets' ? '' : 'hidden'}`}
	style="grid-area: 7 / 3 / 9 / 5;"
	title="SOG"
	bg_color={application.metric === 'Targets' ? 'green' : 'zinc'}
	onClick={toggle_sog}
/>
