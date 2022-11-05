<script>
  import Header from "./lib/Header.svelte";
  import Stories from "./lib/Stories.svelte";
  import Comments from "./lib/Comments.svelte";

  let storyId;
  let location = "stories";
  if (window.location.pathname.includes("comments")) {
    location = "comments";
    storyId = window.location.pathname.split("/")[2];
  }
</script>

<main>
  <Header />
  {#if location === "stories"}
    <Stories />
  {:else}
    <Comments {storyId} />
  {/if}
</main>

<style>
  main {
    font-family: "Sen", sans-serif;
    font-size: 14px;
  }
</style>
