<template>
  <div class="form__wrapper">
    <h2 class="form__title">寄送地址</h2>
    <div class="form__content">
      <label class="title">
        稱謂
        <select v-model="addressInfo.gender">
          <option value>請輸入稱謂</option>
          <option value="先生">先生</option>
          <option value="女士">女士</option>
        </select>
      </label>
      <label class="name">
        姓名
        <input 
          v-model="addressInfo.name" 
          type="text" 
          placeholder="請輸入姓名" 
        />
      </label>
      <label class="phone">
        電話
        <input 
          type="tel" 
          v-model="addressInfo.phone" 
          placeholder="請輸入行動電話" 
        />
      </label>
      <label class="email">
        Email
        <input 
          type="email" 
          v-model="addressInfo.email" 
          placeholder="請輸入電子郵件" 
        />
      </label>
      <label class="city">
        縣市
        <select v-model="addressInfo.city">
          <option value>請選擇縣市</option>
          <option>基隆市</option>
          <option>台北市</option>
          <option>新北市</option>
          <option>宜蘭縣</option>
          <option>桃園市</option>
          <option>新竹市</option>
          <option>新竹縣</option>
          <option>苗栗縣</option>
          <option>台中市</option>
          <option>彰化縣</option>
          <option>南投縣</option>
          <option>雲林縣</option>
          <option>嘉義市</option>
          <option>嘉義縣</option>
          <option>台南市</option>
          <option>高雄市</option>
          <option>屏東縣</option>
          <option>花蓮縣</option>
          <option>台東縣</option>
          <option>澎湖縣</option>
          <option>連江縣</option>
          <option>金門縣</option>
        </select>
      </label>
      <label class="address">
        地址
        <input 
          v-model="addressInfo.address" 
          type="email"
          placeholder="請輸入地址" 
        />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      addressInfo:{
        gender: "",
        name: "",
        phone: "",
        email: "",
        city: "",
        address: ""
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form__wrapper {
  .form__content {
    label {
      &:nth-child(1) {
        width: 30%;
      }
      &:nth-child(2) {
        flex-grow: 1;
        width: 60%;
      }
      &:nth-child(3),
      &:nth-child(4) {
        @include tablet {
          width: 45%;
          flex-grow: 1;
        }
      }
      &:nth-child(5) {
        @include tablet {
          width: 30%;
        }
      }
      &:nth-child(6) {
        @include tablet {
          flex-grow: 1;
          width: 60%;
        }
      }
    }
    @include tablet {
    }
  }
}
</style>