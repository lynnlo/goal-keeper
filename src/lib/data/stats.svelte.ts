import {
	type Stat,
	type Player,
	type Application
} from '$lib/data/definitions';

const stats = $state<Record<string, Stat[]>>({});

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
	10: { name: 'John', number: 0 }
});

const application = $state<Application>({
	metrics: [
		'Goals',
		'Assists',
		'Shots',
		'SOG',
		'Steals',
		'Saves',
		'GoalsA',
		'ShotsA'
	],
	metricLinkage: {
		Goals: ['Shots', 'SOG'],
		SOG: ['Shots']
	},
	metricToggles: {
		Shots: 'SOG',
		SOG: 'Shots'
	},
	metricButtons: {
		SOG: {
			hidden: true
		},
		Steals: {
			size: [4, 2]
		}
	},

	state: 'idle',
	metric: '',
	player: 0,
	undo: []
});

const onLoad = () => {
	if (Object.keys(stats).length !== application.metrics.length) {
		application.metrics.forEach((metric) => {
			if (!stats[metric]) {
				stats[metric] = [];
			}
		});
	}

	console.log(stats);
};

onLoad();
export { stats, players, application };
