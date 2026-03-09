<script>
	import CharacterLayer from '$lib/CharacterLayer.svelte';
</script>

<div class="room">
	<CharacterLayer characters={['player']} />
</div>

<style>
	.room {
		position: relative;
		background-color: rgba(255, 255, 255, 0.2);
		width: 500px;
		height: 500px;
	}
	.player {
		width: 50px;
		height: 50px;
	}
</style>
