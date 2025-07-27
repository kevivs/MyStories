<script lang="ts">
	import { storyScenes } from '$lib/storyData';
	import Scene from '$lib/components/Scene.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let currentSceneIndex = 0;
	let isNavigating = false;

	$: currentScene = storyScenes[currentSceneIndex] || storyScenes[0];
	$: isLastScene = currentSceneIndex === storyScenes.length - 1;

	function advanceStory() {
		if (isNavigating) return; // Prevent double clicks

		isNavigating = true;
		console.log('Current scene index:', currentSceneIndex, 'Total scenes:', storyScenes.length);

		if (isLastScene) {
			currentSceneIndex = 0;
			console.log('Restarting story');
		} else {
			currentSceneIndex = Math.min(currentSceneIndex + 1, storyScenes.length - 1);
			console.log('Advanced to scene:', currentSceneIndex);
		}

		// Reset navigation flag after transition
		setTimeout(() => {
			isNavigating = false;
		}, 1000);
	}

	onMount(() => {
		console.log('Story loaded with', storyScenes.length, 'scenes');
	});
</script>

<main>
	{#key currentScene.id}
		<div in:fade={{ duration: 800, delay: 200 }} out:fade={{ duration: 400 }}>
			<Scene scene={currentScene} />
		</div>
	{/key}

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
		min-width: 100px;
	}

	button:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	button:hover {
		background-color: #f0d4a3;
		transform: scale(1.05);
	}

	button:active {
		transform: scale(1);
	}
</style>
