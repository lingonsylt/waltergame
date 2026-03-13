import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function GET({ params }) {
	const prefixes = {
		orc: 'orc3_',
		knight: '',
		player: ''
	};
	try {
		const filePath = path.resolve(
			`src/lib/sprites/${params.character}/${prefixes[params.character]}${params.sprite}.png`
		);

		if (!fs.existsSync(filePath)) {
			error(404, 'Sprite does not exist');
		}

		const file = fs.readFileSync(filePath);

		return new Response(file, {
			headers: {
				'Content-Type': 'image/png'
			}
		});
	} catch (err) {
		console.error(err);
		error(500, 'Server error');
	}
}
