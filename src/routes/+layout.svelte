<script lang="ts">
  import '@fontsource/crimson-pro';
</script>

<slot />

<style>
  :global(body) {
    background-color: #111;
    color: #e0e0e0;
    font-family: 'Crimson Pro', serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
</style>
