<template>
  <div class="submit">
    <button>{{ ms }}</button>
  </div>
</template>

<script>
export default {
    name: 'my-button',
    props: {
        ms: String
    }
}
</script>

<style scoped>
  button {
    color: aliceblue;
    border-radius: 1em;
    background-color: #2c3e50;
    font-size: 1.3em;
    padding: 0.7em;
    border-color: #2c3e50;
    outline: none;
  }
</style>
