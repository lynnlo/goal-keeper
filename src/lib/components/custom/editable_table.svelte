<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';

	export let dataSet: Record<string, any>;
	export let editSet: string[];
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			{#each editSet as key}
				<Table.Cell>{key}</Table.Cell>
			{/each}
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each Object.values(dataSet) as dataPair}
			<Table.Row>
				{#each Object.keys(dataPair) as key}
					<Table.Cell>
						{#if editSet.includes(key)}
							<Input bind:value={dataPair[key]} />
						{/if}
					</Table.Cell>
				{/each}
				<Table.Cell class="flex justify-center">
					<Button class="text-red-800" variant="ghost">Delete</Button>
				</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
