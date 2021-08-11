<template>
  <div class="info">
      <p>{{message}}</p>
  </div>
</template>

<script>
export default {
    props: ['message']

}
</script>

<style scoped>
    .info {
        display: grid;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -100%);
        background: #FFF9EB;
        text-align: center;
        width: 70%;
        border-radius: 10px;
        padding: 2rem;
        box-shadow: 20px 20px 40px #2E383826;   

    }

</style>