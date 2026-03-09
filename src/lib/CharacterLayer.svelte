<script>
	import Character from './Character.svelte';
	import { gameState } from './game.svelte';

	let { characters } = $props();
</script>

<div class="character-layer">
	{#each characters as character (character)}
		<Character position={gameState[character].position} />
	{/each}
</div>

<style>
	.character-layer {
		position: relative;
		width: 100%;
		height: 100%;
	}
</style>
