<script lang="ts">
	import { goto } from '$app/navigation';
	import * as Card from '$lib/components/ui/card';

	export let className = '';
	export let style = '';
	export let title = '';
	export let bg_color: keyof typeof color_classes | 'rand' = 'zinc';

	export let href = '';
	export let onClick = null;

	if (!onClick) {
		onClick = () => {
			goto(href);
		};
	}

	let color_classes = {
		zinc: 'bg-zinc-900',
		red: 'bg-red-700',
		orange: 'bg-orange-700',
		yellow: 'bg-yellow-700',
		amber: 'bg-amber-700',
		green: 'bg-green-700',
		teal: 'bg-teal-700',
		cyan: 'bg-cyan-700',
		blue: 'bg-blue-700',
		purple: 'bg-purple-700',
		indigo: 'bg-indigo-700',
		pink: 'bg-pink-700',
		fuchsia: 'bg-fuchsia-700'
	};

	if (bg_color === 'rand') {
		let keys = Object.keys(color_classes).filter(
			(key) => key !== 'zinc' && key !== 'red' && key !== 'yellow'
		);
		bg_color = keys[
			Math.floor(Math.random() * keys.length)
		] as keyof typeof color_classes;
	}
</script>

<Card.Root
	class={`touch-effects cursor-pointer select-none ${className} transition-all`}
	{style}
>
	<button class={`w-full h-full ${color_classes[bg_color]}`} on:click={onClick}>
		<Card.Header class="p-0">
			<Card.Title>
				<span class="text-4xl xl:text-7xl">{title}</span>
			</Card.Title>
			<Card.Description class="text-md xl:text-3xl">
				<slot />
			</Card.Description>
		</Card.Header>
	</button>
</Card.Root>
