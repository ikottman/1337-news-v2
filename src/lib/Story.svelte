<script>
  import { ignoreItem } from './Storage';
  export let story;
  let isIgnored = false;

  function ignoreStory() {
    if (!isIgnored) {
      ignoreItem(story.id.toString());
      isIgnored = true;
    }
  }
</script>

<li class:ignored={isIgnored}>
  <a href={story.url}>
    {story.title}
  </a>
  <br />
  <div class="grid">
    <a class="comments" href="/comments/{story.id}">
      {story.descendants ? `${story.descendants}` : '0'}
      {story.descendants === 1 ? 'comment' : 'comments'}
    </a>
    <div class="ignore" on:dblclick={ignoreStory}>ignore</div>
  </div>
</li>

<style>
  a {
    outline: none;
    text-decoration: none;
    border-bottom: 2px solid transparent;
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

  .comments {
    font-size: 14px;
    white-space: nowrap;
  }

  .grid {
    display: grid;
    grid-template-columns: min-content auto;
    align-content: self;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .ignore {
    justify-self: right;
    padding-right: 10px;
  }

  .ignored {
    background-color: black;
  }
</style>
