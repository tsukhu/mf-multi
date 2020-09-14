<script>
  let count = 0;

  window.addEventListener('incr', function(e) {
    if (e.type === 'incr') {
      count +=1;
    }
  })
</script>
<style>
  header {
    background: lightblue;
    padding: 1em;
    font-size: xx-large;
    display: grid;
    grid-template-columns: 90% 10%;
  }
</style>
<header>
  <div>My Svelte Header</div>
  <div>{count}</div>
</header>