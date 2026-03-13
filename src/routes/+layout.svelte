<script>
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { gameTick } from '$lib/game.svelte';

	let { children } = $props();

	let keys = [];
	let keyEvents = {};

	function handleKeyDown(e) {
		keys.push(e.key);
	}
	function handleKeyUp(e) {
		keys.splice(keys.findIndex(e.key));
	}

	onMount(() => {
		setInterval(gameTick, 100);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
¨
<svelte:window onkeydown={handleKeyDown} onkeyup={handleKeyUp} />

<div class="container">
	<main>
		{@render children()}
	</main>
</div>

<style>
	.container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	:global(body) {
		background-color: black;
	}
</style>
