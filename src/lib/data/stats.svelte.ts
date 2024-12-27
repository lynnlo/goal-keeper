import {
	type Stat,
	type Player,
	type Application
} from '$lib/data/definitions';

const stats = $state<Record<string, Stat[]>>({
	Goals: [],
	Assists: [],
	Shots: [],
	ShotsOnGoal: [],
	Steals: [],
	
	ShotsAgainst: [],
	Saves: [],
	GoalsAgainst: []
});

const players = $state<Record<number, Player>>({
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
});

const application = $state<Application>({
	metrics: ['Goals', 'Assists', 'Shots', 'ShotsOnGoal', 'Steals'],
	undo: [],

	metricLinkage: {
		Goals: ['Shots', 'ShotsOnGoal'],
		Assists: [],
		Shots: [],
		ShotsOnGoal: ['Shots'],
		Steals: []
	},
	metricToggles: {
		Shots: 'ShotsOnGoal',
		ShotsOnGoal: 'Shots'
	},

	state: 'idle',
	metric: '',
	player: 0
});

export { stats, players, application };
