<script lang="ts">
	import { application, players } from '$lib/data/stats.svelte';

	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';

	import EditableTable from '$lib/components/custom/editable_table.svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { Button } from '$lib/components/ui/button';
</script>

<main class="w-screen h-screen flex justify-center items-center">
	<Tabs.Root class="w-1/2 h-1/2 gap-8" value="players">
		<Tabs.List class="p-6">
			<Tabs.Trigger value="metrics" class="text-xl">Metrics</Tabs.Trigger>
			<Tabs.Trigger value="players" class="text-xl">Players</Tabs.Trigger>
		</Tabs.List>

		<Tabs.Content class="h-full" value="settings">
			<Card.Root class="h-full">
				<Card.Content></Card.Content>
			</Card.Root>
		</Tabs.Content>

		<Tabs.Content class="h-full" value="metrics">
			<Card.Root class="h-full">
				<ScrollArea class="h-full">
					<Card.Content>
						<EditableTable
							dataSet={application.metrics.map((metric) => ({
								metric: metric
							}))}
							editSet={['metric']}
						/>
					</Card.Content>
				</ScrollArea>
				<div class="sticky bottom-0 p-6">
					<Button>+ Add Player</Button>
				</div>
			</Card.Root>
		</Tabs.Content>

		<Tabs.Content class="h-full" value="players">
			<Card.Root class="h-full">
				<ScrollArea class="h-full">
					<Card.Content>
						<EditableTable dataSet={players} editSet={['name', 'number']} />
					</Card.Content>
				</ScrollArea>
				<div class="sticky bottom-0 p-6">
					<Button>+ Add Player</Button>
				</div>
			</Card.Root>
		</Tabs.Content>
	</Tabs.Root>
</main>
