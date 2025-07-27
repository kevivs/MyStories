<script lang="ts">
	import type { StoryScene } from '../storyData';
	export let scene: StoryScene;

	let imageLoaded = false;
	let imageError = false;
	let debugInfo = '';

	function handleImageLoad() {
		imageLoaded = true;
		imageError = false;
		debugInfo = 'Image loaded successfully';
		console.log('Image loaded:', scene.imageSrc);
	}

	function handleImageError(event: Event) {
		imageError = true;
		imageLoaded = false;
		debugInfo = `Image failed: ${scene.imageSrc}`;
		console.error('Failed to load image:', scene.imageSrc);
		console.error('Image error event:', event);

		// Try to determine why the image failed
		const img = event.target as HTMLImageElement;
		console.error('Image src at time of error:', img.src);
		console.error('Current window location:', window.location.href);
	}

	// Reactive statement to update debug info when scene changes
	$: if (scene) {
		debugInfo = `Loading: ${scene.title}`;
		imageLoaded = false;
		imageError = false;
	}
</script>

<div class="scene-container">
	<div class="scene-debug">
		<small>{debugInfo}</small>
		<small>Image: {scene.imageSrc}</small>
	</div>

	{#if imageError}
		<div class="image-placeholder">
			<p>❌ Image not found</p>
			<p class="error-detail">{scene.imageSrc}</p>
			<button
				on:click={() => {
					imageError = false;
					imageLoaded = false;
				}}
			>
				Retry Loading
			</button>
		</div>
	{:else}
		<img
			src={scene.imageSrc}
			alt={scene.title}
			class="scene-image"
			class:loading={!imageLoaded}
			loading="eager"
			on:load={handleImageLoad}
			on:error={handleImageError}
		/>
		{#if !imageLoaded && !imageError}
			<div class="loading-indicator">Loading image...</div>
		{/if}
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

	.scene-debug {
		background: rgba(0, 255, 0, 0.1);
		padding: 0.5rem;
		font-family: monospace;
		font-size: 0.7rem;
		color: #8f8;
		border-bottom: 1px solid #333;
		width: 100%;
	}

	.scene-debug small {
		display: block;
		margin: 0.1rem 0;
		word-break: break-all;
	}

	.loading-indicator {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: rgba(0, 0, 0, 0.8);
		color: #fff;
		padding: 1rem;
		border-radius: 5px;
		font-size: 0.9rem;
	}

	.error-detail {
		font-family: monospace;
		font-size: 0.8rem;
		word-break: break-all;
		margin: 0.5rem 0;
	}

	.image-placeholder button {
		background: #666;
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 3px;
		cursor: pointer;
		margin-top: 0.5rem;
	}

	.image-placeholder button:hover {
		background: #888;
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
