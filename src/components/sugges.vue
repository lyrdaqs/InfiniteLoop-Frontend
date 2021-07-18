<template>
  <div class="container">
      <div id="sugs" class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 justify-content-center align-items-center"> 
       <div class="sug "><h3>هک و امنیت</h3></div>
       </div>
       <div class="col-lg-4 col-md-4 col-sm-12 justify-content-center align-items-center">
      <div class="sug "><h3>طراحی وب</h3></div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 justify-content-center align-items-center">
      <div class="sug "><h3>برنامه نویسی</h3></div>
      </div>
      </div>
      
  </div>

</template>

<script>
export default {
  
}
</script>

<style scoped>
 #sugs{
     margin-top: -3%;
     margin-bottom: 4%;
 }
 .sug{
     width: 300px;
     height: 200px;
     background: url('../assets/bigstock-abstract-technology-background-250119211.jpg') center;
     object-fit: cover;
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 20px;
     box-shadow: 0px 1px 14px 0px rgb(0, 0,0);
     transition: .5s ease-in-out;
     cursor: pointer;
 }
 .col-sm-12{
     display: flex;
     justify-content: center;
     align-items: center;
     padding-top: 20px;
 }
 .sug h3{
     color: #fff;
 }
 .sug:hover{
    transform: translateY(10px);
    box-shadow: 0px 1px 20px 0px rgb(0, 0,0);
    opacity: .9;
}

</style>
