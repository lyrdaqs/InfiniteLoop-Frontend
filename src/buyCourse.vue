<template>
  <div>
    <div>
      <VueScrollProgress></VueScrollProgress>
    </div>
    <app-title-course></app-title-course>
    <app-main-Source></app-main-Source>
    <app-footer></app-footer>
  </div>

</template>

<script>
import Footer from './components/footer.vue';
import Title from './components/titleCourse.vue';
import Source from './components/mainSource.vue';
export default {
  components:{
   'app-footer':Footer,
   'app-title-course':Title,
   'app-main-Source':Source
  }, 
}
</script>

<style >
  #progress-container-el{
     background-color: #2ecc71 !important;
  }
  #progress-el{
    background-color: white !important;
  }

</style>
