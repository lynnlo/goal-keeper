<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Button from '$lib/components/custom/button.svelte';
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';

	const isMobile = new IsMobile();
</script>

<main>
	<div
		class="w-full h-screen layout"
		class:p-2={isMobile.current}
		class:p-8={!isMobile.current}
	>
		<Button
			style={isMobile.current
				? 'grid-area: 1 / 1 / 5 / 5;'
				: 'grid-area: 2 / 2 / 5 / 5;'}
			title="start"
			bg_color="green"
			href="/tracker"
		>
			Start a Game
		</Button>
		<Button
			style={isMobile.current
				? 'grid-area: 1 / 5 / 5 / 9;'
				: 'grid-area: 2 / 5 / 5 / 8;'}
			title="config"
			bg_color="yellow"
			href="/config"
		>
			Change Settings
		</Button>
		<Button
			style={isMobile.current
				? 'grid-area: 5 / 1 / 9 / 5;'
				: 'grid-area: 5 / 2 / 8 / 5;'}
			title="load"
			bg_color="blue"
		>
			Load a Game
		</Button>
		<Button
			style={isMobile.current
				? 'grid-area: 5 / 5 / 9 / 9;'
				: 'grid-area: 5 / 5 / 8 / 8;'}
			title="stats"
			bg_color="purple"
			href="/stats"
		>
			See Statistics
		</Button>
	</div>
</main>
