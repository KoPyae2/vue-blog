<template>
  <div class="loading">

  </div>
</template>

<script>
export default {

}
</script>

<style>

.loading{
    width: 40px;
    height: 40px;
    border: 3px solid transparent;
    border-radius: 50%;
    margin:30px auto;
    border-top-color: red;
    animation: spin 1s linear infinite;
}
@keyframes spin {
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(1turn);
    }
}

</style>