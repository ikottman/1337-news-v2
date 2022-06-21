<script>
  import { getItem, getItems } from './ApiClient';
  
  export let storyId;

  let story = { title: '', url: '' };
  let comments = [];

  $: getItem(storyId)
    .then((item) => story = item)
    .then(() => getItems(story.kids, 0, 30))
    .then((items) => comments = items);
</script>

<style>
  ul {
    list-style-type: none;
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

  li {
    margin-top: 10px;
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
  {#if story.title}
  <li>
    <a href={story.url}>
      {story.title}
    </a>
  </li>
  {/if}
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