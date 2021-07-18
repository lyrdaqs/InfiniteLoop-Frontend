<template>
  <header>
  <div :class="addClass"> 
          <div id="close" @click="active=false">
              <div class="linee1"></div>
              <div class="linee2"></div>
          </div>
          <div id="mm">
            <ul>
                <li><a href="#">ورود</a></li>
                <li><a href="#">ثبت نام</a></li>
            </ul>
          </div>
            <ul>
             <li class="mob-item" v-for="n in menu" ref="moblink"><a data-toggle="collapse" :href='n.slug'  role="button" aria-expanded="false" aria-controls="collapseExample">{{n.name}}</a>
                 <ul class="collapse" :id="n.id">
                     <li class="mobile-dropdown text-right" v-for="child in n.child">
                         <a href="#">
                             {{child}}
                        </a>
                     </li>
                 </ul>                 
             </li>
             </ul>
    
         </div>
<div class="head col-12"> 
<div class="mask"></div>  
 
 <div class="container">      
      <div :class="{white}" id="navbar">
         <a href="index.html">
           <div id="logo">
            <h2><img width="100%" src="../assets/8712.mongodb-logo_19A95E89.png" alt=""></h2> 
          </div>    
         </a> 
         <div id="menu">
            <ul>
             <li @mouseover="show=true" @mouseout="show=false" :class='{dropdown:true,show}'><a  href="#" class="dropdown-toggle" data-toggle="dropdown">  برنامه نویسی وب </a>
               <ul :class="{'dropdown-menu':true,'dropdown-menu-right':true,show}">
                 <li class="dropdown-item"><a href="#">html</a></li>
                 <li class="dropdown-item"><a href="#">css</a></li>
                 <li class="dropdown-item"><a href="#">javascript</a></li>
                 <li class="dropdown-item"><a href="#">django</a></li>
                 <li class="dropdown-item"><a href="#">php</a></li>
                 <li class="dropdown-item"><a href="#">laravel</a></li>
               </ul>
             </li>
             <li @mouseover="show2=true" @mouseout="show2=false" :class='{dropdown:true,show2}'><a href="#" class="dropdown-toggle" data-toggle="dropdown">  برنامه نویسی اندروید</a>
              <ul :class="{'dropdown-menu':true,'dropdown-menu-right':true,show2}"> 
                 <li class="dropdown-item"><a href="#">java</a></li>
                 <li class="dropdown-item"><a href="#">kotlin</a></li>
                 <li class="dropdown-item"><a href="#">ionic</a></li>
                 <li class="dropdown-item"><a href="#">xamarin</a></li>
                 <li class="dropdown-item"><a href="#">react native</a></li>
             </ul>
             </li>
             <li><a href="#">  هک وامنیت                  </a></li>
             <li><a href="#">  پرسش وپاسخ                </a></li>
             <li><a href="contact.html">  تماس با ما              </a></li>
             </ul>
         </div>
          <div class="mr-auto" id="menu2">
            <ul >
             <li><a href="login.html">ورود</a></li>
             <li><a href="register.html">ثبت نام</a></li>
             </ul>
         </div>
           <div @click="func" class="burger">
                 <div class="line1"></div>
                 <div class="line2"></div>
                 <div class="line3"></div>
             </div>

      </div>
   <div class="row">       
      <div id="head-left" class=" col-md-6 col-sm-12">
        <h3 > با ما مهارت کسب کن و به راحتی وارد بازار کار شو</h3>
        <br>
        <h4> بیش از دو هزار ویدیوی آموزشی</h4>
      </div>
 
      <div id="head-right" class="col-md-6 col-sm-12">
        <h3 id="title">بزرگترین مرجع آموزش برنامه نویسی</h3>
         <form  id="search" action="#" method="POST">
               <input type="text" placeholder="چی دوس داری یاد بگیری؟">
               <input class="btn" type="submit" value="جست و جو">
         </form>  
      </div>
</div>
  </div>
  
    </div>
        <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">

  <path fill="#fff" fill-opacity="1" d="M0,64L48,58.7C96,53,192,43,288,80C384,117,480,203,576,197.3C672,192,768,96,864,74.7C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>
  </header>
</template>

<script>

export default {
  data(){
      return{
          active:false,
          menu:[
              {name:'برنامه نویسی وب',id:'collapseExample',slug:'#collapseExample',hasChild:true,child:['html','css','javascript','php','django','laravel']}
              ,{name:'برنامه نویسی اندروید',id:'collapseExample2',slug:'#collapseExample2',hasChild:true,child:['java','kotlin','ionic','xamarin','reat native']}
              ,{name:'هک وامنیت',hasChild:false,slug:'#'}
              ,{name:'پرسش و پاسخ',hasChild:false,slug:'#'}
              ,{name:'تماس با ما',hasChild:false,slug:'contact.html'}
          ],
          show:false,
          show2:false,
          white:false
      }
  },
  created(){
      window.addEventListener('scroll',this.handleScroll)
  },
  destroyed(){
      window.removeEventListener('scroll',this.handleScroll)
  },
  methods:{
     func(){
         this.active=true
         this.$refs.moblink.forEach((link,index)=>{
             if(link.style.animation){
                 link.style.animation=''
             }else{
                 
         link.style.animation = `navLinkFade .5s ease forwards ${index/7+1.5}s`
             }      
         })
         
     },
     handleScroll(){
         if(window.scrollY){
           this.white=true
         }else{
             this.white=false
         }
         
     }
  },
  computed:{
      addClass(){
          return{
              'menu-active':this.active,
              'menu-mobile':true
          }
      }
  },
  

}
</script>

<style scoped>

#menu a{
    transition: all 0.25s ease-in-out;
}

.show2{
    display: block; 
}

.dropdown:hover .dropdown-menu{
     opacity: 1;
     visibility: visible;
     animation-name: swingdown;
     animation-duration: 1s;
     animation-timing-function: ease;
}
.dropdown-menu{
    opacity: 0;
    visibility: hidden;
    border: #2ecc71 3px solid;
    transition: .5s all; 
     margin-top: -10%;
}
.dropdown-item{
    line-height: 44px;
}
.dropdown-item a{
    text-decoration: none;
    color: black;
    font-weight: 700;
    padding: 0;
}
.dropdown-item:hover{
    background-color: lightgrey;
}

.burger{
    display: none;
    cursor: pointer;
}

.burger div{
   width: 50px;
   height: 5px;
   background-color:#fff;
   margin-top: 7px;
   border-radius: 20px;
}
    
.head{
    width: 100%;
    background: url('../assets/danial-ricaros-FCHlYvR5gJI-unsplash.jpg');
     background-size: cover;
    background-position: center;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
}
.mask{
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: .8;
}
.wave{
    background: none;
    width: 100%;
    color: #fff;
    opacity: 1;
    position: relative;
    z-index: 1000;
    margin-top: -14%;
}

  #navbar{
      position: fixed;
      top: 0;
      left: 0;
     width: 100%;
      height: 80px;
      display: flex;
      border-bottom:#2ecc71 4px solid ;
      box-shadow: 0px 1px 30px 0px rgba(0, 0, 0, 0.15);
      z-index: 100;
      transition: .5s all;

  }
#navbar.white {
    background:#eee;
    padding: 0px 100px;
    z-index: 3000;
    height: 54px;
}
#navbar.white ul li{
    margin-top: -12px;
    transition: .5s all;
}
#navbar.white ul li a{
    color: black;
    font-size: 11pt;
    transition: .5s all;
}
#navbar.white #logo h2{
    width:52px;
}
#navbar.white .burger div{
    background-color:#2ecc71;
}
#head-left{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: right;
}
#head-left h3{
    color: #fff;
}
#head-left h4{
    color: #2ecc71;
}

#head-right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: right;
}

#menu > ul, #menu2>ul{
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
}
#menu > ul > li,#menu2 > ul > li{
    line-height: 80px;
    padding: 0 25px;
    transition: .5s all;
}

#menu > ul > li > a,#menu2 > ul > li > a{
    text-decoration: none;
    color: white;
    font-weight: 600;
    transition: .5s all;
}

#menu ul li:hover > a {
    color: #2ecc71;
}

#menu2 ul li:hover a{
    color: #2ecc71;
}

#navbar.white ul li:hover > a{
    color: #2ecc71;
}

#logo h2{
    width: 80px;
    color: #2ecc71;
}
#search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 7px;
}

#search input[type="text"] {
    width: 100%;
    height: 40px;
    border: none;
}

#search input[type="submit"] {
    width: 100px;
    height: 40px;
    background-color:#2ecc71;
    cursor: pointer;
    color: #fff;
    font-size: small;
    font-weight: 500;
    margin-top: 0px;
    display: flex;
    align-items: center;
}

#title{
    padding: 40px;
    border: #2ecc71 solid 5px;
    border-radius: 20px;
    box-shadow: 0px 1px 30px 0px rgba(0, 0, 0, 0.15);
    color: #fff;
}
#menu2{
    margin-left:16%;
}
 
.menu-mobile{
    transform: translateX(-100%);
     position: fixed;
           display: flex;
           flex-direction: column;
           width: 100%;
           height: 100vh;
           background-color: #2ecc71;
           justify-content: center;
           align-items: center;
           z-index: 1000;
           transition: .5s all;
           z-index: 2000;
}
.menu-active{
   transform: translateX(0%);
}
#close{
    position: absolute;
    top: 4%;
    left: 78%;
    cursor: pointer;
}
#close div{
   width: 30px;
   height: 5px;
   border-radius: 20px;
   background-color: #fff;
}
#close .linee1{
    transform: rotate(45deg)  translateY(3px);
}
#close .linee2{
    transform: rotate(-45deg) translateY(-4px);
}
#mm{
    position: absolute;
    top: -7%;
    left: 4%;
}
#mm ul{
    list-style: none;
    display: flex;
}
#mm li{
    padding-left: 35px;
}
#mm li a{
    text-decoration: none;
    color: #fff;
    font-size: 20pt;
    font-weight: 600;
}

.mobile-dropdown{
    padding: 0;
}

.mobile-dropdown a{
    font-size: 20px !important;
}


.mobile-dropdown:hover{
    background-color: lightgray;
}
.mobile-dropdown:hover a{
    color: black;
}

 @media screen and (max-width:780px) {
      #head-right{
          margin-top: 7%;
      }
 }
 @media screen and (max-width:1100px) {
         #menu2,#menu{
            display: none;
        }
        #navbar{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
       .burger{
           display: block;
       }

     .menu-mobile ul{
         list-style: none;
     }
     .menu-mobile ul .mob-item{
         margin-top: 40px;
         transition: .5s all;
         text-align: right;
     }
     .menu-mobile #mm li{
        margin-top: 66px;
         transition: .5s all;
     }
      .menu-mobile ul li a{
          text-decoration: none;
          color: #fff;
          font-size: 20pt;
          font-weight: 600;
          transition: .5s all;
      }
  }

  @keyframes navLinkFade{
      form{
          opacity: 0;
          transform: translateX(-50px);
      }
      to{
          opacity: 1;
          transform: translateX(0px);
      }
  }
  @keyframes swingdown{
      0%{
          opacity: 0.9999;
          transform: rotateX(90deg);
      }
      30%{
          transform: rotateX(-20deg) rotateY(5deg);
          animation-timing-function: ease-in-out;
      }
      65%{
          transform: rotateX(20deg) rotateY(-3deg);
          animation-timing-function: ease-in-out;
      }
  }
  
</style>









