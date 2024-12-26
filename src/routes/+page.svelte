<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Button from '$lib/components/custom/button.svelte';
</script>

<main>
	<div class="w-full h-screen layout p-2 xl:hidden">
		<Button
			style="grid-area: 1 / 1 / 3 / 3;"
			title="start"
			bg_color="green"
			href="/tracker"
		>
			Start a New Game SSS
		</Button>
		<Button style="grid-area: 1 / 3 / 3 / 5;" title="config" bg_color="yellow">
			Change Settings
		</Button>
		<Button style="grid-area: 3 / 1 / 5 / 3;" title="load" bg_color="blue">
			Load a Previous Game
		</Button>
		<Button style="grid-area: 3 / 3 / 5 / 5;" title="stats" bg_color="purple">
			See Statistics
		</Button>
	</div>

	<div class="w-full h-screen layout p-8">
		<Button
			style="grid-area: 2 / 2 / 3 / 3;"
			title="start"
			bg_color="green"
			href="/tracker"
		>
			Start a New Game
		</Button>
		<Button style="grid-area: 2 / 3 / 3 / 4;" title="config" bg_color="yellow">
			Change Settings
		</Button>
		<Button style="grid-area: 3 / 2 / 4 / 3;" title="load" bg_color="blue">
			Load a Previous Game
		</Button>
		<Button style="grid-area: 3 / 3 / 4 / 4;" title="stats" bg_color="purple">
			See Statistics
		</Button>
	</div>
</main>
