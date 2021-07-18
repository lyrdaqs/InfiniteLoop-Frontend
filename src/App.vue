<template>
  <div>
    <div> 
    <VueScrollProgress></VueScrollProgress>
    </div>  
    <app-header></app-header>
    <app-sugges></app-sugges>
    <app-learning></app-learning>
     <app-lo-learning></app-lo-learning>
      <app-slide-news></app-slide-news>
     <app-number></app-number>
     <app-footer></app-footer>
  </div>

</template>

<script>

import Head from './components/header.vue';
import slideN from './components/slideNews';
import Learn from './components/learning.vue';
import learnL from './components/loveLearning';
import number from './components/numberOf.vue';
import Footer from './components/footer.vue';
import Sugges from './components/sugges.vue';


export default {
  components:{
    'app-header':Head,
    'app-slide-news':slideN,
    'app-learning':Learn,
    'app-lo-learning':learnL,
    'app-number':number,
    'app-footer':Footer,
    'app-sugges':Sugges
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
