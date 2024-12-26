<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Button from '$lib/components/custom/button.svelte';
</script>

<main>
	<div class="w-full h-screen layout p-2 xl:hidden">
		<Button
			style="grid-area: 1 / 1 / 5 / 5;"
			title="start"
			bg_color="green"
			href="/tracker"
		>
			Start a Game
		</Button>
		<Button style="grid-area: 1 / 5 / 5 / 9;" title="config" bg_color="yellow">
			Change Settings
		</Button>
		<Button style="grid-area: 5 / 1 / 9 / 5;" title="load" bg_color="blue">
			Load a Game
		</Button>
		<Button style="grid-area: 5 / 5 / 9 / 9;" title="stats" bg_color="purple">
			See Statistics
		</Button>
	</div>

	<div class="w-full h-screen layout p-8">
		<Button
			style="grid-area: 2 / 2 / 5 / 5;"
			title="start"
			bg_color="green"
			href="/tracker"
		>
			Start a Game
		</Button>
		<Button style="grid-area: 2 / 5 / 5 / 8;" title="config" bg_color="yellow">
			Change Settings
		</Button>
		<Button style="grid-area: 5 / 2 / 8 / 5;" title="load" bg_color="blue">
			Load a Game
		</Button>
		<Button style="grid-area: 5 / 5 / 8 / 8;" title="stats" bg_color="purple">
			See Statistics
		</Button>
	</div>
</main>
