<script lang="ts">
  import { storyScenes } from '$lib/storyData';
  import Scene from '$lib/components/Scene.svelte';
  import { fade } from 'svelte/transition';

  let currentSceneIndex = 0;
  $: currentScene = storyScenes[currentSceneIndex];
  $: isLastScene = currentSceneIndex === storyScenes.length - 1;

  function advanceStory() {
    if (isLastScene) {
      currentSceneIndex = 0;
    } else {
      currentSceneIndex++;
    }
  }
</script>

<main>
  {#key currentScene.id}
    <div in:fade={{ duration: 800, delay: 200 }} out:fade={{ duration: 400 }}>
      <Scene scene={currentScene} />
    </div>
  {/key}

  <button on:click={advanceStory}>
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
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  button:hover {
    background-color: #f0d4a3;
    transform: scale(1.05);
  }

  button:active {
    transform: scale(1);
  }
</style>
