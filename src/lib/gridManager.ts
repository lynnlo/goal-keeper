import { v4 } from 'uuid';

interface Grid {
	width: number;
	height: number;

	items: GridItem[];
}

interface GridItem {
	id: string;
	name: string;

	x: number;
	y: number;
	width: number;
	height: number;
}

class GridManager {
	grid: Grid;

	constructor(width: number, height: number) {
		this.grid = {
			width,
			height,
			items: []
		};
	}

	findFirstAvailablePosition(
		width: number,
		height: number
	): { x: number; y: number } {
		let xPos = 0;
		let yPos = 0;
		let i = 0;

		while (i < 500) {
			let found = true;
			for (const element of this.grid.items) {
				if (
					xPos < element.x + element.width &&
					xPos + width > element.x &&
					yPos < element.y + element.height &&
					yPos + height > element.y
				) {
					found = false;
					break;
				}
			}
			if (found) {
				return { x: xPos, y: yPos };
			}

			xPos++;
			i++;
			if (xPos + width > this.grid.width) {
				xPos = 0;
				yPos++;
			}
		}

		return { x: -1, y: -1 };
	}

	addItem(
		name: string,
		width: number,
		height: number,
		x: number = -1,
		y: number = -1,
		id: string = v4()
	) {
		if (x === -1 || y === -1) {
			const position = this.findFirstAvailablePosition(width, height);
			x = position.x;
			y = position.y;
		}

		this.grid.items.push({
			id,
			name,
			x,
			y,
			width,
			height
		});
	}

	removeItem(id: string) {
		this.grid.items = this.grid.items.filter((item) => item.id !== id);
	}
}

export type { Grid, GridItem };
export { GridManager };
