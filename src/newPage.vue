<template>
  <div>
    <div>
      <VueScrollProgress></VueScrollProgress>
    </div>
    <app-head-single></app-head-single>
    <app-content-single></app-content-single>
    <app-exmp></app-exmp>
    <app-footer></app-footer>
  </div>

</template>

<script>
import Footer from './components/footer.vue';
import Head from './components/headerSinglePage';
import Main from './components/mainContent.vue';
import Slide from './components/slideNews.vue';
export default {
  components:{
   'app-footer':Footer,
   'app-head-single':Head,
   'app-content-single':Main,
    'app-exmp':Slide
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
