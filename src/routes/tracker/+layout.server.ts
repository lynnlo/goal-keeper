import type { Stat, Player } from '$lib/stats/definitions';
const stats: Record<string, Stat[]> = {
	goal: [
		{
			player: 7,
			time: 57
		},
		{
			player: 7,
			time: 60
		},
		{
			player: 5,
			time: 45
		}
	],
	assist: [
		{
			player: 3,
			time: 57
		},
		{
			player: 8,
			time: 60
		}
	],
	shot: [
		{
			player: 2,
			time: 30
		},
		{
			player: 4,
			time: 50
		}
	],
	steal: [
		{
			player: 10,
			time: 57
		},
		{
			player: 7,
			time: 60
		},
		{
			player: 6,
			time: 70
		}
	]
};

const players: Record<number, Player> = {
	1: { name: 'Alice', number: 1 },
	2: { name: 'Bob', number: 2 },
	3: { name: 'Charlie', number: 3 },
	4: { name: 'David', number: 4 },
	5: { name: 'Eve', number: 5 },
	6: { name: 'Frank', number: 6 },
	7: { name: 'Doe', number: 7 },
	8: { name: 'Grace', number: 8 },
	9: { name: 'Hank', number: 9 },
	10: { name: 'John', number: 10 }
};

export function load() {
	return {
		stats: stats,
		players: players
	};
}
