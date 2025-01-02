import {
	type Stat,
	type Player,
	type Application
} from '$lib/data/definitions';

const stats = $state<Record<string, Stat[]>>({});

const players = $state<Player[]>([
	{ name: 'Alice', number: 1 },
	{ name: 'Bob', number: 2 },
	{ name: 'Charlie', number: 3 },
	{ name: 'David', number: 4 },
	{ name: 'Eve', number: 5 },
	{ name: 'Frank', number: 6 },
	{ name: 'Doe', number: 7 },
	{ name: 'Grace', number: 8 },
	{ name: 'Hank', number: 9 },
	{ name: 'John', number: 0 }
]);

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
};

onLoad();
export { stats, players, application };
