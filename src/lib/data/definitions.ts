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
	undo: string[];

	state: string;
	metric: string;
	player: number;
}
