<script>
  export let story;
</script>

<style>
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

  .comments {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: inline-block;
  }
</style>

<li>
  <a href={story.url}>
    {story.title}
  </a>
  <br/>
  <a class='comments' href={`#comments/${story.id}`}>
    {story.descendants ? `${story.descendants}` : '0'} {story.descendants === 1 ? 'comment' : 'comments'}
  </a>
</li>