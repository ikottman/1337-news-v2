<script>
  import Header from './lib/Header.svelte';
  import Stories from './lib/Stories.svelte'
  import Comments from './lib/Comments.svelte';

  let location = "stories";
  let storyId;
  function locationHandler() {
    location = window.location.hash.slice(1) || "stories"; // pulls page from # part of url
    storyId = window.location.hash.split('/')[1];
    console.log('changed story', storyId);
  }
  window.addEventListener("hashchange", locationHandler);
</script>

<style>
  main {
    font-family: 'Sen', sans-serif;
    font-size: 14px;
  }
</style>

<main>
  <Header />
  {#if location === 'stories'}
    <Stories /> 
  {:else}
    <Comments storyId={storyId} />
  {/if}
</main>

