<template>
  <div>
    <app-head-single></app-head-single>
    <div class="container">
       <div class="row">
          <div class="col-12">
              <div class="cont">
              <h3>شماره تماس و ایمیل ما</h3>
              <h4>3344545</h4>
              <h4>test@gmail.com</h4>
              </div>

          </div>
       </div>
        <form>
            
            <div id="form">
                <h3>فرم تماس با ما</h3>
  <div class="form-group">
    <label for="examplemob">شماره موبایل</label>
    <input placeholder="شماره موبایل خود را وارد کنید" type="number" class="form-control" id="examplemob">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">نام و نام خانوادگی</label>
    <input placeholder="نام خود را وارد کنید" type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">آدرس ایمیل</label>
    <input placeholder="ایمیل خود را وارد کنید" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  
    <div class="form-group">
    <label for="exampleInputPassword1">عنوان</label>
    <input placeholder="عنوان متن را وارد کنید" type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-group form-check">
       <label for="example">توضیحات</label>
     <textarea id="example"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">ارسال پیام</button>
</div>
</form>
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
  }
}
</script>

<style scoped>
#back{
    width: 30%;
    height: 80vh;
    box-shadow: 0px 1px 30px 0px rgba(0, 0, 0, 0.26);
}
 form{
     text-align: right;
     margin: 4% auto;
     width: 60%;
       box-shadow: 0px 1px 30px 0px rgba(0, 0, 0, 0.26);
       z-index: 100;
 }
 form #form{
     padding: 4%;
 }
#form h3{
    background-color:  #2ecc71;
    border-radius: 30px;
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
}
.form-check-label{
    margin-right: 3%;
}
.btn{
    width: 150px;
}
.cont{
    text-align: center;
    margin-top: 20px;
}
@media screen and (max-width:780px) {
      form{
          width: 100%;
      }
 }
 textarea{
     width: 100%;
 }
</style>
