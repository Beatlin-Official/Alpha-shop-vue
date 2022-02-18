<template>
  <div class="form__wrapper">
    <h2 class="form__title">付款資訊</h2>
    <div class="form__content">
      <label class="credit-card-name">
        持卡人姓名
        <input
          v-model="creditCardInfo.name" 
          type="credit card name " 
          name=" " 
          id=" " 
          placeholder="John Doe" />
      </label>
      <label class="credit-card-number">
        卡號
        <input
          v-model="creditCardInfo.number" 
          type="credit card number " 
          name=" " 
          id=" " 
          placeholder="1111 2222 3333 4444" />
      </label>
      <label class="credit-card-date">
        有效期限
        <input
          v-model="creditCardInfo.date" 
          type="credit card date " 
          name=" " 
          id=" " 
          placeholder="MM/YY" />
      </label>
      <label class="credit-card-cvc">
        CVC / CCV
        <input
          v-model="creditCardInfo.cvc" 
          type="credit card cvc " 
          name=" " 
          id=" " 
          placeholder="123" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      creditCardInfo:{
        name:"",
        number:"",
        date:"",
        cvc:""
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .form__wrapper {
    .form__content {
      label {
        &:nth-child(1),
        &:nth-child(2) {
          @include tablet {
            width: 70%;
          }
        }
        &:nth-child(3),
        &:nth-child(4) {
          flex-grow: 1;
          width: 45%;
        }
      }
    }
  }
</style>