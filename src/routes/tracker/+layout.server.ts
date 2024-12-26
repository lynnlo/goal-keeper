import type { Stat } from '$lib/stats/definitions';

const stats: Record<string, Stat[]> = {
	goal: [
		{
			player: { name: 'John', number: 10 },
			time: 57
		},
		{
			player: { name: 'Doe', number: 7 },
			time: 60
		}
	],
	assist: [],
	shot: [],
	steal: [
		{
			player: { name: 'John', number: 10 },
			time: 57
		},
		{
			player: { name: 'Doe', number: 7 },
			time: 60
		}
	]
};

export function load() {
	return {
		stats: stats
	};
}
