<script lang="ts">
	import { goto } from '$app/navigation';
	import * as Card from '$lib/components/ui/card';
	
	export let className = '';
	export let style = '';
	export let title = '';
	export let bg_color: keyof typeof color_classes = 'zinc';

	export let href = '';
	export let onClick = null;

	if (!onClick) {
		onClick = () => {
			goto(href);
		};
	}

	let color_classes = {
		zinc: 'bg-zinc-900',
		red: 'bg-red-900',
		yellow: 'bg-yellow-700',
		green: 'bg-green-900',
		cyan: 'bg-cyan-900',
		blue: 'bg-blue-900',
		purple: 'bg-purple-900',
		pink: 'bg-pink-900'
	};
</script>

<Card.Root class={`touch-effects cursor-pointer select-none ${className}`} {style}>
	<button class={`w-full h-full ${color_classes[bg_color]}`} on:click={onClick}>
		<Card.Header class="p-0">
			<Card.Title>
				<span class="text-4xl xl:text-8xl">{title}</span>
			</Card.Title>
			<Card.Description class="text-md xl:text-3xl">
				<slot />
			</Card.Description>
		</Card.Header>
	</button>
</Card.Root>
