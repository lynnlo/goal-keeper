export interface Player {
	number: number;
	name: string;
}

export interface Stat {
	player: number; // player ref
	time: number;
}

export interface Application {
	state: string;
	metric: string;
	player: number;
}
