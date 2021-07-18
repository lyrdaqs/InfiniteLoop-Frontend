<template>
<div id="footer"> 
  <svg class=wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,224C384,235,480,181,576,138.7C672,96,768,64,864,90.7C960,117,1056,203,1152,224C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    <footer >    
            <div id="logo">
            <h2>LOGO</h2>
            <p>بزرگترین مرجع آموزش برنامه نویسی</p> 
          </div>  
          <div class="container mt-4">
            <div class="row">
           <div class="col-md-3 "> 
            <ul>
                <li><a class="text-muted" href="#">C آموزش</a></li>
                <li><a class="text-muted" href="#">C++ آموزش</a></li>
                <li><a class="text-muted" href="#">C# آموزش</a></li>
                <li><a class="text-muted" href="#">Java آموزش</a></li>
                <li><a class="text-muted" href="#">Matlab آموزش</a></li>
                <li><a class="text-muted" href="#">Python آموزش</a></li>
                <li><a class="text-muted" href="#">Javascript آموزش</a></li>
            </ul>
            </div>  
            <div class="col-md-3 ">
             <ul>
                <li><a class="text-muted" href="#">C آموزش</a></li>
                <li><a class="text-muted" href="#">C++ آموزش</a></li>
                <li><a class="text-muted" href="#">C# آموزش</a></li>
                <li><a class="text-muted" href="#">Java آموزش</a></li>
                <li><a class="text-muted" href="#">Matlab آموزش</a></li>
                <li><a class="text-muted" href="#">Python آموزش</a></li>
                <li><a class="text-muted" href="#">Javascript آموزش</a></li>
            </ul>  
            </div>
            <div class="col-md-3 "> 
            <ul>
                <li><a class="text-muted" href="#">Network+ آموزش</a></li>
                <li><a class="text-muted" href="#">Linux آموزش</a></li>
                <li><a class="text-muted" href="#">Ceh آموزش</a></li>
                <li><a class="text-muted" href="#">PWK آموزش</a></li>
                <li><a class="text-muted" href="#">ccna آموزش</a></li>
                <li><a class="text-muted" href="#">Security+ آموزش</a></li>
                <li><a class="text-muted" href="#">Sec642 آموزش</a></li>
            </ul>
            </div>
            <div class="col-md-3 ">  
            <ul>
                <li><a class="text-muted" href="#">PHP آموزش</a></li>
                <li><a class="text-muted" href="#">Django آموزش</a></li>
                <li><a class="text-muted" href="#">Node js آموزش</a></li>
                <li><a class="text-muted" href="#">React آموزش</a></li>
                <li><a class="text-muted" href="#">MongoDb آموزش</a></li>
                <li><a class="text-muted" href="#">Sql server آموزش</a></li>
                <li><a class="text-muted" href="#">nosql آموزش</a></li>
            </ul>

            </div>  
            </div>
          </div>  
          <hr>
          <div class="container"> 
          <p class="text-muted text-justify dir-rtl text-white font-weight-lighter mb-3">
               شرکت راهکار هوشمند ایرانیان، اولین شرکت ارائه کننده خدمات صنعت فناوری اطلاعات در قالب بسته های تعریف شده می باشد. این بسته ها خدمات مختلفی را در زمینه های انجام پروژه های نرم افزاری ، راه اندازی شبکه و ارائه مشاوره در بخش فناوری اطلاعات ، بهینه سازی،
               پیاده سازی ابزارهای نرم افزاری و هوشمند سازی صنایع مختلف ارائه می دهد.        
          </p>     
          </div>

      <br><br>
    
    </footer>
 </div>
</template>

<script>


export default {
  
}
</script>

<style scoped>
#footer{
    display: flex;
    flex-direction: column;
}
.col-md-3{
    display: flex;
    justify-content: center;
    align-items: center;
}
.wave{
    background: none;
    width: 100%;
    color: #fff;
    opacity: 1;
    z-index: 100;
}
  footer{
      position: absolute;
      height: auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #2ecc71;
      padding-top: 20vh;
  }
#logo h2{
    color: chocolate;
    text-align: center;
}
#logo p{
    color: chocolate;
    font-weight: 500;
}
ul{
    list-style: none;
    padding:0 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 300px;
    padding: 0;
}
ul li{
    padding-top: 5%;
}
ul li a{
    color: black;
    font-weight: 500;
    text-decoration: none;
}
</style>
