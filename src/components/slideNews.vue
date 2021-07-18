<template>
  <div id="slide">
      <div>
          <div class="swiper-container">
            <div class="row"> 
                <div class="container"> 
              <div class="col-lg-4 col-md-6 col-sm-12">
             <div class="title">
           <h4>آخرین مطالب سایت</h4>
                </div>
             </div>
            <a id="blog_all" href="Blog.html" class='btn btn-primary'> مشاهده ی همه ی مطالب</a>
            </div>
         </div>
             <div class="swiper-wrapper">
                <div class="col-lg-3 col-md-4 col-sm-4 swiper-slide">  
                  <div class="card">
                    <img src="../assets/code_programming_text_140050_1366x768.jpg" alt="">
                    <div class="info"> 
                       <h2>ابزار برنامه نویس</h2>
                       <p>
                        ابزار برنامه نویس اینجوریه که خیلی خوبه پس مطلب مارو ببین که عالی
                        ابزار برنامه نویس اینجوریه که خیلی خوبه پس مطلب مارو ببین که عالی
                        ابزار برنامه نویس اینجوریه که خیلی خوبه پس مطلب مارو ببین که عالیه
                       </p>
                       <a href="newPage.html" class="btn btn-info" >ادامه مطلب</a>
                   </div>
                  </div>
               </div>

       <div class="col-lg-3 col-md-4 col-sm-4 swiper-slide">  
        <div class="card">
            <img src="../assets/arif-riyanto-1DRq1ZsE2N0-unsplash.jpg" alt="">
            <div class="info"> 
               <h2>ابزار برنامه نویس</h2>
               <p>
                   ابزار برنامه نویس اینجوریه که خیلی خوبه پس مطلب مارو ببین که عالی
                   ابزار برنامه نویس اینجوریه که خیلی خوبه پس مطلب مارو ببین که عالی
                 ابزار برنامه نویس اینجوریه که خیلی خوبه پس مطلب مارو ببین که عالیه
               </p>
               <a href="newPage.html" class="btn btn-info" >ادامه مطلب</a>
            </div>
        </div>
      </div>

       <div class="col-lg-3 col-md-4 col-sm-4 swiper-slide">  
        <div class="card">
            <img src="../assets/arif-riyanto-1DRq1ZsE2N0-unsplash.jpg" alt="">
            <div class="info"> 
               <h2>ابزار برنامه نویس</h2>
               <p>
                   ابزار برنامه نویس اینجوریه که خیلی خوبه پس مطلب مارو ببین که عالی
                   ابزار برنامه نویس اینجوریه که خیلی خوبه پس مطلب مارو ببین که عالی
                 ابزار برنامه نویس اینجوریه که خیلی خوبه پس مطلب مارو ببین که عالیه
               </p>
               <a href="newPage.html" class="btn btn-info" >ادامه مطلب</a>
            </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-4 col-sm-4 swiper-slide"> 
         <div class="card">
            <img src="../assets/danial-ricaros-FCHlYvR5gJI-unsplash.jpg" alt="">
            <div class="info"> 
               <h2>ابزار برنامه نویس</h2>
               <p>
                   ابزار برنامه نویس اینجوریه که خیلی خوبه پس مطلب مارو ببین که عالی
                   ابزار برنامه نویس اینجوریه که خیلی خوبه پس مطلب مارو ببین که عالی
                   ابزار برنامه نویس اینجوریه که خیلی خوبه پس مطلب مارو ببین که عالیه
               </p>
               <a href="newPage.html" class="btn btn-info" >ادامه مطلب</a>
            </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-4 col-sm-4 swiper-slide"> 
        <div class="card">
            <img src="../assets/danial-ricaros-FCHlYvR5gJI-unsplash.jpg" alt="">
            <div class="info"> 
             <h2>ابزار برنامه نویس</h2>
             <p>
                 ابزار برنامه نویس اینجوریه که خیلی خوبه پس مطلب مارو ببین که عالی
                 ابزار برنامه نویس اینجوریه که خیلی خوبه پس مطلب مارو ببین که عالی
                 ابزار برنامه نویس اینجوریه که خیلی خوبه پس مطلب مارو ببین که عالیه
             </p>
             <a href="newPage.html" class="btn btn-info" >ادامه مطلب</a>
            </div>
        </div>
      </div> 
      </div>
       <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default { 
}
</script>

<style scoped>
#slide{
                 background: url('../assets/2872.jpg') center no-repeat;
        background-size: cover;
        margin-bottom: 40px;
}
 @media only screen and (max-width:1100px) {
        .swiper-wrapper{
            padding-bottom: 100px;
        }   
  }
.card{
    max-width: 280px;
    height: 360px;
    background: #fff;
    position: relative;
    margin:30px 0;
    display: flex;
    align-items: flex-end;
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
    transition: 0.5s ease-in-out;
    border-radius: 20px;
}
.card:hover{
    transform: translateY(20px);
}

.card img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 20px;
}

.card:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom,rgba(0,176,155,0.5),rgba(150,201,61,1));
    transition: .5s all;
    z-index: 2;
    opacity: 0;
    border-radius: 20px;
}

.card:hover:before{
    opacity: 1;
}

.card .info{
    color: #fff;
    text-align: center;
    position: absolute;
    transform: translateY(50%);
    z-index: 3;
    transition: .5s all;
    opacity: 0;
}

.card:hover .info{
    opacity: 1;
}
button{
    font-weight: 600;
}

.col-4{
    display: flex;
    justify-content: center;
}

 .swiper-container {
            width: 100%;
            padding-top: 20px;
            padding-bottom: 50px; 
 }

    #mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #2ecc71;
        opacity: 0.7;
    }
        
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 300px;
            height: 300px;
        }

        .swiper-wrapper{
            margin-bottom: 9%;
        }
        
.title {
    margin-top: 0;
    text-align: center;
    border-bottom: #2ecc71 6px solid;
}

.title h4 {
    font-size: 13pt;
    padding-bottom: 2%;
    color: #fff;
}

 @media only screen and (max-width:700px) {
        #blog_all{
            margin-top: 20px;
        }   
  }
</style>
