<script>
  import { ignoreItem, unIgnoreItem } from './Storage';
  export let story;
  let isIgnored = false;
  let clickedStart = null;

  function onRelease() {
    if (clickedStart != null && new Date().getTime() - clickedStart > 500) {
      if (isIgnored) {
        unIgnoreItem(story.id.toString());
        isIgnored = false;
      } else {
        ignoreItem(story.id.toString());
        isIgnored = true;
      }
    }
    clickedStart = null;
  }
</script>

<li
  class:ignored={isIgnored}
  on:touchstart={() => {
    clickedStart = new Date().getTime();
  }}
  on:touchend={onRelease}
  on:touchmove={() => {
    clickedStart = null;
  }}
>
  <a href={story.url}>
    {story.title}
  </a>
  <br />
  <div class="spacing">
    <a class="comments" href="/comments/{story.id}">
      {story.descendants ? `${story.descendants}` : '0'}
      {story.descendants === 1 ? 'comment' : 'comments'}
    </a>
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

  .spacing {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .ignored {
    background-color: black;
  }
</style>
