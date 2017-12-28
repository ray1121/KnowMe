<template>
 <div>
<el-button @click="$store.commit('increment')" type="danger">
    {{ $store.state.counter }}
</el-button>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style>

 
</style>
