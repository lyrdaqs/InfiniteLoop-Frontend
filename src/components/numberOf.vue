<template>
<div class="container"> 
<div id="body" class="row"> 
  <div id="contt" class="container">
      <div class="num">
    <div id="num-stu"><h3 class="title">تعداد کاربران</h3><img src="../assets/mader.jpg"><h3 class="number">{{nums}}</h3></div>
    <div id="num-te"><h3 class="title">تعداد دانشجو ها</h3><img src="../assets/mader.jpg"><h3 class="number">{{numte}}</h3></div>
    <div id="time"><h3 class="title">تعداد مدرس ها</h3><img src="../assets/mader.jpg"><h3 class="number">{{time}}</h3></div>
 </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
          'nums':0,
          'numte':0,
          'time':0,
          'interval':null,
          'interval2':null,
          'interval3':null
        }
    },

    created(){
        this.handleScroll()
    },
    destroyed(){
        window.removeEventListener('scroll',this.handleScroll)
    },
    
    methods:{
       handleScroll(){

            this.interval=setInterval(function(){
            this.nums++
            if(this.nums==2000){
                clearInterval(this.interval)
            }
           }.bind(this),10)

            this.interval2=setInterval(function(){
            this.numte++
           
            if(this.numte==1000){
                clearInterval(this.interval2)
            }
           }.bind(this),10)

            this.interval3=setInterval(function(){
            this.time++
            if(this.time==1000){
                clearInterval(this.interval3)
            }
           }.bind(this),10)
       }
    }

}
</script>

<style scoped>

 @media only screen and (max-width:1100px) {
      #body{
          margin-top: 7%;
          margin-bottom:20%;
      }           
  }

.num{
    display: flex;
    

}

#num-stu,#num-te,#time{
    width: 40%;
}
#num-stu img,#num-te img,#time img{
    width:100%;
    border-radius: 50%;
}
#num-stu h3,#num-te h3,#time h3{
    text-align: center;
    width: 100%;
    color: #2ecc71;
}
.number{
   font-weight: 500;
   font-size: 50pt;
}
.title{
    font-weight: 600;
    font-size: 15pt;
}

</style>
