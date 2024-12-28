export interface Player {
	number: number;
	name: string;
}

export interface Stat {
	player: number; // player ref
	time: number;
}

export interface StatButton {
	hidden?: boolean;
	size?: [number, number];
}

export interface Application {
	metrics: string[];
	metricLinkage: Record<string, string[]>; // goals -> [shots, targets]
	metricToggles: Record<string, string>; // shots <-> targets
	metricButtons: Record<string, StatButton>; // steal -> lg

	undo: string[];
	state: string;
	metric: string;
	player: number;
}
