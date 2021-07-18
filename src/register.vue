<template>
  <div>
    <app-head-single></app-head-single>
    <div class="container">
       
        <form>
            
            <div id="form">
                <h3>ثبت نام در سایت</h3>
  <div class="form-group">
    <label for="examplemob">شماره موبایل</label>
    <input placeholder="شماره موبایل خود را وارد کنید" type="number" class="form-control" id="examplemob">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">آدرس ایمیل</label>
    <input placeholder="ایمیل خود را وارد کنید" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">رمز عبور</label>
    <input placeholder="رمز خود را وارد کنید" type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword2">تکرار رمز عبور</label>
    <input placeholder="رمز خود را تایید کنید" type="password" class="form-control" id="exampleInputPassword2">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">مرا بخاطر بسپار</label>
  </div>
  <button type="submit" class="btn btn-primary">ثبت نام</button>
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
@media screen and (max-width:780px) {
      form{
          width: 100%;
      }
 }
</style>
