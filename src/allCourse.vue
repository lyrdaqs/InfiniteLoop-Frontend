<template>
  <div>
    <app-head-single></app-head-single>
    <div class="container"> 
    <h3 id='title' class="text-right"> دوره های آموزشی <span>349+</span></h3>   
    <div class="text-right top-filter row">
        <form class="col-md-8 col-sm-12">
          <input type="text" placeholder="عنوان مورد نظر...">
          <button class="btn btn-success">جستجو</button>
        </form>
        <select class="sel col-md-4 col-sm-12">
            <option value="">مرتب سازی بر اساس تاریخ</option>
            <option value="">مرتب سازی بر اساس قیمت</option>
            <option value="">مرتب سازی بر اساس محبوبیت</option>
        </select>
    </div>
     <div class="row mt-4">
         <div class="col-lg-3 col-md-12 col-sm-12">
             <div class="card text-right" style="background-color:#fff;">
                 <div class="card-header">فیلتر براساس قیمت</div>
                 <div class="card-body">
                    <button @click="function(){btnsuccess1=true; btnsuccess2=false; btnsuccess3=false;}" :class="{btn ,'btn-success':btnsuccess1}">همه</button>
                    <button @click="function(){btnsuccess1=false; btnsuccess2=true; btnsuccess3=false;}" :class="{btn ,'btn-success':btnsuccess2}">پولی</button>
                    <button @click="function(){btnsuccess1=false; btnsuccess2=false; btnsuccess3=true;}" :class="{btn ,'btn-success':btnsuccess3}">رایگان</button>
                 </div>
             </div>
              <div class="card text-right mt-3" style="background-color:#fff;">
                 <div class="card-header">فیلتر براساس دسته بندی</div>
                 <div class="card-body">
                    <ul>
                        <li><input id="ch" type="checkbox"><label for="ch">برنامه نویسی وب</label>
                          <ul>
                              <li><input id="ch2" type="checkbox"><label for="ch2">php</label></li>
                              <li><input id="ch3" type="checkbox"><label for="ch3">javascript</label></li>
                              <li><input id="ch4" type="checkbox"><label for="ch4">react</label></li>
                              <li><input id="ch5" type="checkbox"><label for="ch5">django</label></li>
                              <li><input id="ch6" type="checkbox"><label for="ch6">html</label></li>
                              <li><input id="ch7" type="checkbox"><label for="ch7">css</label></li>
                              <li><input id="ch8" type="checkbox"><label for="ch8">jQuery</label></li>
                              <li><input id="ch9" type="checkbox"><label for="ch9">Vue</label></li>
                              <li><input id="ch10" type="checkbox"><label for="ch10">Bulma</label></li>
                              <li><input id="ch11" type="checkbox"><label for="ch11">Bootstrap</label></li>
                          </ul>
                        </li>
                         <li><input id="ch12" type="checkbox"><label for="ch12">برنامه نویسی اندروید</label>
                          <ul>
                              <li><input id="ch13" type="checkbox"><label for="ch13">php</label></li>
                              <li><input id="ch14" type="checkbox"><label for="ch14">javascript</label></li>
                              <li><input id="ch15" type="checkbox"><label for="ch15">react</label></li>
                              <li><input id="ch16" type="checkbox"><label for="ch16">django</label></li>
                              <li><input id="ch17" type="checkbox"><label for="ch17">html</label></li>
                              <li><input id="ch18" type="checkbox"><label for="ch18">css</label></li>
                              <li><input id="ch19" type="checkbox"><label for="ch19">jQuery</label></li>
                              <li><input id="ch20" type="checkbox"><label for="ch20">Vue</label></li>
                              <li><input id="ch21" type="checkbox"><label for="ch21">Bulma</label></li>
                              <li><input id="ch22" type="checkbox"><label for="ch22">Bootstrap</label></li>
                          </ul>
                        </li>
                          <li><input id="ch23" type="checkbox"><label for="ch12">هک وامنیت</label>
                          <ul>
                              <li><input id="ch24" type="checkbox"><label for="ch13">php</label></li>
                              <li><input id="ch25" type="checkbox"><label for="ch14">javascript</label></li>
                              <li><input id="ch26" type="checkbox"><label for="ch15">react</label></li>
                              <li><input id="ch27" type="checkbox"><label for="ch16">django</label></li>
                              <li><input id="ch28" type="checkbox"><label for="ch17">html</label></li>
                              <li><input id="ch29" type="checkbox"><label for="ch18">css</label></li>
                              <li><input id="ch30" type="checkbox"><label for="ch19">jQuery</label></li>
                              <li><input id="ch31" type="checkbox"><label for="ch20">Vue</label></li>
                              <li><input id="ch32" type="checkbox"><label for="ch21">Bulma</label></li>
                              <li><input id="ch33" type="checkbox"><label for="ch22">Bootstrap</label></li>
                          </ul>
                        </li>
                    </ul>
                 </div>
             </div>
         </div>
         <div class="col-lg-9 col-md-12 col-sm-12">
             <div v-if="pag1" class="pag-1"> 
              <div class="row mt-3">
            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/Csharp_Logo.png"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                      <span>آموزش برنامه نویسی......</span>
                      <p> <span><img width="13%" src="src/assets/user-2.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/Unity-logo-80lv.png"></div>
                  <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                      <span>آموزش برنامه نویسی......</span>
                      <p><span><img width="13%" src="src/assets/user-1.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                  </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/8712.mongodb-logo_19A95E89.png"></div>
                  <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                      <span>آموزش برنامه نویسی......</span>
                      <p><span><img width="13%" src="src/assets/user-3.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                </a>                
            </div>
        </div>
         <div class="row mt-4 ">
            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/OIP (3).jpg"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                     <span>آموزش برنامه نویسی......</span>
                     <p><span><img width="13%" src="src/assets/user-1.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                  </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/1200px-Unofficial_JavaScript_logo_2.svg.png"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                     <span>آموزش برنامه نویسی......</span>
                     <p><span><img width="13%" src="src/assets/user-2.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                </a>
            </div>
             <div class="col-lg-4 col-md-4 col-sm-6">
                     <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/Unity-logo-80lv.png"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                     <span>آموزش برنامه نویسی......</span>
                     <p><span><img width="13%" src="src/assets/user-3.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                </div>
                </a>
            </div>
        </div>
         <div class="row mt-4">

            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/python-logo-master-flat-symbolonly-cafepress2.png"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                      <span>آموزش برنامه نویسی......</span>
                      <p><span><img width="13%" src="src/assets/user-2.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/8712.mongodb-logo_19A95E89.png"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                      <span>آموزش برنامه نویسی......</span>
                      <p><span><img width="13%" src="src/assets/user-1.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                </a>
            </div>
              <div id="cc" class="col-lg-4 col-md-4 col-sm-6">
                      <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/OIP (3).jpg"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                     <span>آموزش برنامه نویسی......</span>
                     <p><span><img width="13%" src="src/assets/user-3.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                  </a>
            </div>
        </div>
      </div>
<!---->
<div v-if="pag3" class="pag-3"> 
   <div class="row mt-3">
            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/Unity-logo-80lv.png"></div>
                  <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                      <span>آموزش برنامه نویسی......</span>
                      <p><span><img width="13%" src="src/assets/user-1.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                  </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/Csharp_Logo.png"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                      <span>آموزش برنامه نویسی......</span>
                      <p> <span><img width="13%" src="src/assets/user-2.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/8712.mongodb-logo_19A95E89.png"></div>
                  <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                      <span>آموزش برنامه نویسی......</span>
                      <p><span><img width="13%" src="src/assets/user-3.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                </a>                
            </div>
        </div>
         <div class="row mt-4 ">
            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/OIP (3).jpg"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                     <span>آموزش برنامه نویسی......</span>
                     <p><span><img width="13%" src="src/assets/user-1.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                  </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/1200px-Unofficial_JavaScript_logo_2.svg.png"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                     <span>آموزش برنامه نویسی......</span>
                     <p><span><img width="13%" src="src/assets/user-2.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                </a>
            </div>
             <div class="col-lg-4 col-md-4 col-sm-6">
                     <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/Unity-logo-80lv.png"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                     <span>آموزش برنامه نویسی......</span>
                     <p><span><img width="13%" src="src/assets/user-3.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                </div>
                </a>
            </div>
        </div>
         <div class="row mt-4">

            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/python-logo-master-flat-symbolonly-cafepress2.png"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                      <span>آموزش برنامه نویسی......</span>
                      <p><span><img width="13%" src="src/assets/user-2.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/8712.mongodb-logo_19A95E89.png"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                      <span>آموزش برنامه نویسی......</span>
                      <p><span><img width="13%" src="src/assets/user-1.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                </a>
            </div>
              <div id="cc" class="col-lg-4 col-md-4 col-sm-6">
                      <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/OIP (3).jpg"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                     <span>آموزش برنامه نویسی......</span>
                     <p><span><img width="13%" src="src/assets/user-3.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                  </a>
            </div>
        </div>
        </div>
<!---->

<!---->
<div v-if="pag2" class="pag-2"> 
   <div class="row mt-3">
        <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/8712.mongodb-logo_19A95E89.png"></div>
                  <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                      <span>آموزش برنامه نویسی......</span>
                      <p><span><img width="13%" src="src/assets/user-3.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                </a>                
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/Unity-logo-80lv.png"></div>
                  <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                      <span>آموزش برنامه نویسی......</span>
                      <p><span><img width="13%" src="src/assets/user-1.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                  </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/Csharp_Logo.png"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                      <span>آموزش برنامه نویسی......</span>
                      <p> <span><img width="13%" src="src/assets/user-2.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                </a>
            </div>
        </div>
         <div class="row mt-4 ">
            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/OIP (3).jpg"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                     <span>آموزش برنامه نویسی......</span>
                     <p><span><img width="13%" src="src/assets/user-1.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                  </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/1200px-Unofficial_JavaScript_logo_2.svg.png"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                     <span>آموزش برنامه نویسی......</span>
                     <p><span><img width="13%" src="src/assets/user-2.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                </a>
            </div>
             <div class="col-lg-4 col-md-4 col-sm-6">
                     <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/Unity-logo-80lv.png"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                     <span>آموزش برنامه نویسی......</span>
                     <p><span><img width="13%" src="src/assets/user-3.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                </div>
                </a>
            </div>
        </div>
         <div class="row mt-4">

            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/python-logo-master-flat-symbolonly-cafepress2.png"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                      <span>آموزش برنامه نویسی......</span>
                      <p><span><img width="13%" src="src/assets/user-2.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                </a>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6">
                    <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/8712.mongodb-logo_19A95E89.png"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                      <span>آموزش برنامه نویسی......</span>
                      <p><span><img width="13%" src="src/assets/user-1.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                </a>
            </div>
              <div id="cc" class="col-lg-4 col-md-4 col-sm-6">
                      <a class="card-link" href="buycourse.html">
                <div class="card"> 
                  <div class="card-head"><img src="src/assets/OIP (3).jpg"></div>
                   <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#eee" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                  <div class="card-info">
                     <span>آموزش برنامه نویسی......</span>
                     <p><span><img width="13%" src="src/assets/user-3.png"></span> مدرس: علیرضا قاسمی</p>
                      <hr>
                      <span id="money">رایگان</span>
                      <span id="hour" class="ml-auto">00:00:00</span>
                  </div>
                  </div>
                  </a>
            </div>
        </div>
        </div>
<!---->
    </div> 
         </div>

     </div>
        <div id="pagi">
            <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li @click="pagone" class="page-item"><a class="page-link" href="#">1</a></li>
    <li @click="pagtwo" class="page-item"><a class="page-link" href="#">2</a></li>
    <li @click="pagthree" class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
         </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Head from './components/headerSinglePage';
import Footer from './components/footer.vue';
export default {
  components:{
     'app-head-single':Head,
     'app-footer':Footer
  },
  data(){
      return{
         pag1:true,
         pag2:false,
         pag3:false,
         btnsuccess1:true,
         btnsuccess2:false,
         btnsuccess3:false,
         btn:true
      }
  },
  methods:{
      pagone(){
        this.pag1=true
        this.pag2=false
        this.pag3=false
      },
      pagtwo(){
        this.pag1=false
        this.pag2=true
        this.pag3=false
      },
      pagthree(){
        this.pag1=false
        this.pag2=false
        this.pag3=true
      }
  }
}
</script>

<style scoped>
  .container{
      max-width: 1304px;
  }
  .top-filter{
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-shadow: 0px 1px 30px 0px rgba(0, 0, 0, 0.15);
      padding: 2%;
  }  
  .top-filter input{
      width: 400px;
      height: 38px;
  }
  #title{
      margin:4% 0;
  }
  #title span{
      background-color: #333;
      color: #fff;
      border-radius: 50%;
      padding: 1%;
  }
  .card-link{
      width: 100%;
  }

  @media only screen and (max-width:1100px) {
      .card{
          margin-top:20px;
      }           
  }
.card{
    max-width:100%;
    height:auto;
     box-shadow: 0px 1px 9px 0px #2ecc71;
     border-radius: 20px;
     background-color: #eee;
     cursor: pointer;
     transition: .5s all;
     overflow: hidden;
}

.card:hover img{
    transform: scale(1.1);
    opacity: .9;
    
}


.card-head img{
    width: 100%;
    height: 100%;
     border-radius: 20px;
    object-fit: cover;
    transition: .5s all;
}

.card-info{
    width: 100%;
    height: 100%;
    text-align: right;
    padding: 10%;
}
.title {
    margin: 3% 0;
    text-align: center;
    border-bottom: #2ecc71 5px solid;
}

.title h4 {
    font-size: 13pt;
    padding-bottom: 2%;
}

.wave{
    background: none;
    position: absolute;
    margin-top: 87%;
    width: 100%;
    color: #eee;
    opacity: 1;
}

.card-info span{
    font-size: 12pt;
    font-weight: 500;
}

#money{
    color: #2ecc71;
    font-size:15pt;
    font-weight:600 ;
}
#hour{
    padding-right: 37%;
   color: chocolate;
}
hr{
    background-color: #2ecc71;
    box-shadow: 0px 1px 40px 0px #2ecc71 ;
}

.card-info p{
    font-size: 9pt;
    font-weight: 500;
    padding-top: 3%;
    color: chocolate;
}
.col-sm-6{
    display: flex;
    justify-content: center;
}
.card-link{
    color: black;
    text-decoration: none;
}
span img{
    transition: .5s all;
    border-radius: 50%;
    margin-left: 8px;
}
ul{
    list-style: none;
}
input[type='checkbox']{
    margin-left: 10px;
}
#pagi{
    display: flex;
    justify-content: center;
    margin-top: 2%;
    margin-right: 20%;
}
</style>
