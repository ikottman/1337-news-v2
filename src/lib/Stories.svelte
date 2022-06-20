<script lang='ts'>
  import { onMount } from "svelte";
  import { getStories } from './ApiClient';
  import Story from './Story.svelte';

  let stories = [];

  onMount(async () => {
    stories = await getStories('top');
  })
</script>

<style>
  ul {
    list-style-type: none;
    margin: 10px;
    padding: 0px;
  }

  .divider {
    border-bottom: 2px solid;
  }
</style>

<ul>
  {#each stories as story}
    <Story story={story}/>
    <div class="divider"/>
  {/each}
</ul>