<template>
  <div class="main">
 <MyCarousel></MyCarousel>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import MyCarousel from '~/components/Carousel.vue'

export default {
  components: {
    MyCarousel
  },
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>
.main{
  height: 1000px;
}
</style>
