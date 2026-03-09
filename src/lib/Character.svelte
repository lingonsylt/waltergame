<script>
	let { position, sprite } = $props();
</script>

<div class="character" style="left: {position[0]}px; bottom: {position[1]}px">
	{#if sprite}
		<img class="sprite" src={sprite} alt="" />
	{:else}
		<div class="sprite-placeholder"></div>
	{/if}
</div>

<style>
	.character {
		position: absolute;
		width: 50px;
		height: 50px;
	}
	.sprite,
	.sprite-placeholder {
		width: 100%;
		height: 100%;
	}
	.sprite-placeholder {
		background-color: aqua;
	}
</style>
