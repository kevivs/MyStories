<script lang="ts">
  import type { StoryScene } from '../storyData';
  export let scene: StoryScene;
</script>

<div class="scene-container">
  <img src={scene.imageSrc} alt={scene.title} class="scene-image" loading="lazy" />
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
  }

  .scene-image {
    width: 100%;
    height: auto;
    max-height: 60vh;
    object-fit: cover;
    display: block;
  }

  .text-content {
    padding: 2rem;
  }

  h2 {
    font-size: 1.5rem;
    color: #e6bf83;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #ccc;
    max-width: 65ch;
    margin: 0 auto;
  }
</style>
