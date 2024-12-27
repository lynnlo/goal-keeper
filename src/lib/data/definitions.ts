export interface Player {
	number: number;
	name: string;
}

export interface Stat {
	player: number; // player ref
	time: number;
}

export interface Application {
	metrics: string[];
	metricLinkage: Record<string, string[]>; // goals -> [shots, targets]
	metricToggles: Record<string, string>; // shots <-> targets

	undo: string[];
	state: string;
	metric: string;
	player: number;
}
