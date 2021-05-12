<script>
  export let price;
  export let money;
</script>

<div class="card">
  <div class="card-header text-center">
    <slot name="header" />
  </div>
  <div class="card-body">
    <slot name="body" />
  </div>
  <div class="card-footer">
    {#if price === money}
      <slot name="footer" />
    {:else}
      <button disabled class="btn btn-block">Price too high</button>
    {/if}
  </div>
</div>
