<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import { stats, players, application } from '$lib/data/stats.svelte';

	import Button from '$lib/components/custom/button.svelte';

	onMount(() => {
		if (application.state === 'idle') {
			goto('/tracker');
		}
	});

	const track = (player_number: number) => {
		application.state = 'idle';

		// Push all linked metrics, emaple goals -> targets -> shots
		if (application.metricLinkage[application.metric])
			application.metricLinkage[application.metric].forEach((linkedMetric) => {
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
</script>

{#each Object.values(players) as player}
	<Button
		title={player.number.toString()}
		onClick={() => track(player.number)}
	/>
{/each}

<Button
	style="grid-area: 7 / 1 / 9 / 2;"
	title="back"
	bg_color="red"
	href="/tracker"
/>

<div class="flex" style="grid-area: 7 / 2 / 9 / 7;">
	{#each Object.keys(application.metricToggles) as metric}
		<Button
			className={`w-1/4 ${application.metric === metric || application.metricToggles[application.metric] == metric ? '' : 'hidden'}`}
			title={metric}
			bg_color={application.metric === metric ? 'green' : 'zinc'}
			onClick={() => {
				application.metric = metric;
			}}
		/>
	{/each}
</div>
