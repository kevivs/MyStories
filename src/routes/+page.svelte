<script lang="ts">
	import { storyScenes } from '$lib/storyData';
	import Scene from '$lib/components/Scene.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	let currentSceneIndex = 0;
	let isNavigating = false;
	let mounted = false;

	$: currentScene = storyScenes[currentSceneIndex] || storyScenes[0];
	$: isLastScene = currentSceneIndex === storyScenes.length - 1;

	function advanceStory() {
		if (isNavigating) return; // Prevent double clicks

		isNavigating = true;

		if (isLastScene) {
			currentSceneIndex = 0;
		} else {
			currentSceneIndex = currentSceneIndex + 1;
		}

		console.log('Navigated to scene:', currentSceneIndex + 1);

		// Reset navigation flag after transition
		setTimeout(() => {
			isNavigating = false;
		}, 800);
	}

	onMount(() => {
		mounted = true;
		console.log('App mounted');
		console.log('Base path:', base);
		console.log('Total scenes:', storyScenes.length);
		console.log('Location:', window.location.href);
	});
</script>

<main>
	{#if mounted}
		<div class="debug-info">
			<p>
				Scene: {currentSceneIndex + 1}/{storyScenes.length} - {currentScene?.title || 'Loading...'}
			</p>
			<p>Base: {base}</p>
			<p>Location: {window.location.hostname}{window.location.pathname}</p>
		</div>
	{/if}

	{#if currentScene}
		{#key currentScene.id}
			<div in:fade={{ duration: 800, delay: 200 }} out:fade={{ duration: 400 }}>
				<Scene scene={currentScene} />
			</div>
		{/key}
	{:else}
		<div class="error">
			<p>Error: No scene data loaded</p>
		</div>
	{/if}

	<button on:click={advanceStory} disabled={isNavigating}>
		{#if isLastScene}
			Restart
		{:else}
			Next
		{/if}
	</button>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		padding: 2rem;
		min-height: 100vh;
	}

	.debug-info {
		background: rgba(255, 255, 255, 0.1);
		padding: 1rem;
		border-radius: 5px;
		font-family: monospace;
		font-size: 0.8rem;
		color: #ccc;
		text-align: left;
		width: 100%;
		max-width: 600px;
	}

	.debug-info p {
		margin: 0.2rem 0;
	}

	.error {
		background: rgba(255, 0, 0, 0.2);
		color: #ff6666;
		padding: 2rem;
		border-radius: 5px;
		text-align: center;
	}

	button {
		background-color: #e6bf83;
		color: #111;
		border: none;
		padding: 12px 30px;
		font-family: 'Crimson Pro', serif;
		font-size: 1.2rem;
		font-weight: bold;
		border-radius: 5px;
		cursor: pointer;
		transition:
			background-color 0.3s ease,
			transform 0.2s ease;
		min-width: 120px;
	}

	button:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	button:hover:not(:disabled) {
		background-color: #f0d4a3;
		transform: scale(1.05);
	}

	button:active {
		transform: scale(1);
	}
</style>
