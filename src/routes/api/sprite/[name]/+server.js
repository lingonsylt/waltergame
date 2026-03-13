import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function GET({ params }) {
	try {
		const filePath = path.resolve('src/lib/sprites/orc3_' + params.name + '.png');

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
