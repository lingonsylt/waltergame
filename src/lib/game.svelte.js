import { onNavigate } from '$app/navigation';

export let gameState = $state({
	player: {
		position: [5, 0]
	}
});

export function gameTick() {
	return;
}

onNavigate(() => {});
