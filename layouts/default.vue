<template>
   <div>
     <MyHeader/>
    <nuxt/>
    <MyFooter/>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'
import MyHeader from '~/components/Header.vue'

export default {
  components: {
    MyFooter,
    MyHeader
  }
}
</script>

<style>


</style>
