<script lang="ts">
  import { onMount } from 'svelte';
  import { getStories } from './ApiClient';
  import { getIgnoredItemIds } from './Storage';
  import Story from './Story.svelte';

  let stories = [];

  // pagination
  const param = new URLSearchParams(window.location.search).get('page');
  const page = param ? Number.parseInt(param) : 0;

  onMount(async () => {
    const filteredItemIds = getIgnoredItemIds();
    stories = (await getStories('top', page)).filter((story) => !filteredItemIds.includes(story.id.toString()));
  });
</script>

<ul>
  {#each stories as story}
    <Story {story} />
    <div class="divider" />
  {/each}
  <li>
    <a href="?page={page + 1}">goto page {page + 1}</a>
  </li>
</ul>

<style>
  ul {
    list-style-type: none;
    padding: 0px;
  }

  .divider {
    border-bottom: 2px solid;
  }

  li {
    margin-top: 10px;
  }

  a {
    padding: 0px;
    outline: none;
    text-decoration: none;
  }

  a:hover {
    border-bottom: 2px solid;
  }

  a:link {
    color: black;
  }

  a:visited {
    color: black;
  }
</style>
