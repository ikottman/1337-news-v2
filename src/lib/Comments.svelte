<script>
  import { onMount } from 'svelte';
  import { getItem, getItems } from './ApiClient';
  
  // TODO: use store for the seleced story and navigation
  let story = { title: '', url: '' };
  let comments = [];
  onMount(async () => {
    const storyId = window.location.hash.split('/')[1];
    story = await getItem(storyId);
    comments = await getItems(story.kids, 0, 30);
  });
</script>

<style>
  ul {
    list-style-type: none;
    margin: 10px;
    padding: 0px;
  }

  a {
    outline: none;
    text-decoration: none;
  }

  a:link {
    color: black;
  }

  a:visited {
    color: black;
  }

  a:hover {
    border-bottom: 2px solid;
  }

  .username {
    font-size: 12px;
    font-weight: bold;
  }

  .comment {
    padding-top: 5px;
    font-size: 12px;
  }

  .divider {
    border-bottom: 2px solid;
  }
</style>

<ul>
  <li>
    <a href={story.url}>
      {story.title}
    </a>
  </li>
  {#each comments as comment}
    {#if comment.text}
    <li>
      {#if comment.kids}
        <a class="username" href={`#comments/${comment.id}`}>
          <span>{comment.by} - {comment.kids.length} child {comment.kids.length === 1 ? 'comment' : 'comments'}</span>
        </a>
      {:else}
        <span class="username">{comment.by}</span>
      {/if}
      <p class="comment">{@html comment.text}</p>
      <div>
        <div class="divider"/>
      </div>
    </li>
    {/if}
  {/each}
</ul>