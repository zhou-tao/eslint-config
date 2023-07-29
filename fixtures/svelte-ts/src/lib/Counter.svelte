<script lang="ts">
  export let desc

  let count = 0

  const increment = () => {
    count += 1
  }

  switch (count) {
    case 1:

      break

    default:
      break
  }
</script>

<button on:click={increment}>
  {desc} is {count}
</button>
