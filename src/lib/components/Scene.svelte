<script lang="ts">
	import type { StoryScene } from '../storyData';
	export let scene: StoryScene;

	let imageLoaded = false;
	let imageError = false;

	function handleImageLoad() {
		imageLoaded = true;
		imageError = false;
	}

	function handleImageError() {
		imageError = true;
		console.error('Failed to load image:', scene.imageSrc);
	}
</script>

<div class="scene-container">
	{#if imageError}
		<div class="image-placeholder">
			<p>Image not found: {scene.title}</p>
		</div>
	{:else}
		<img
			src={scene.imageSrc}
			alt={scene.title}
			class="scene-image"
			class:loading={!imageLoaded}
			loading="lazy"
			on:load={handleImageLoad}
			on:error={handleImageError}
		/>
	{/if}
	<div class="text-content">
		<h2>{scene.title}</h2>
		<p>{scene.storyText}</p>
	</div>
</div>

<style>
	.scene-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		max-width: 900px;
		width: 100%;
		border: 1px solid #333;
		background-color: #1a1a1a;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
		margin: 0 auto;
	}

	.scene-image {
		width: 100%;
		height: auto;
		max-height: 60vh;
		min-height: 300px;
		object-fit: cover;
		display: block;
		background-color: #2a2a2a;
		transition: opacity 0.3s ease;
	}

	.scene-image.loading {
		opacity: 0.7;
	}

	.image-placeholder {
		width: 100%;
		min-height: 300px;
		background-color: #2a2a2a;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #666;
		font-style: italic;
	}

	.text-content {
		padding: 2rem;
		width: 100%;
	}

	h2 {
		font-size: 1.5rem;
		color: #e6bf83;
		margin-bottom: 1rem;
		font-weight: 600;
		font-family: 'Crimson Pro', serif;
	}

	p {
		font-size: 1.2rem;
		line-height: 1.6;
		color: #ccc;
		max-width: 65ch;
		margin: 0 auto;
		white-space: pre-line;
		font-family: 'Crimson Pro', serif;
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.scene-container {
			max-width: 100%;
			margin: 0 1rem;
		}

		.text-content {
			padding: 1.5rem;
		}

		h2 {
			font-size: 1.3rem;
		}

		p {
			font-size: 1.1rem;
		}
	}
</style>
