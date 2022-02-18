<template>
  <div class="form__wrapper">
    <h2 class="form__title">運送方式</h2>
    <div class="form__content">
      <label 
        v-for="deliveryWay in delivery"
        :key="deliveryWay.id"
        @change="currentFeeAmountChosen"
      >
        <input 
          type="radio" 
          name="fare" 
          :id="deliveryWay.selector" 
          :value="deliveryWay.feeAmount"
          v-model="feeAmountChosen" 
          checked
        >
        <label :for="deliveryWay.selector">
          <p>
            {{deliveryWay.name}}
            <br />
            <span>{{deliveryWay.day}}</span>
          </p>
          <span>{{deliveryWay.fee}}</span>
        </label>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      delivery:[{
        id: 1,
        selector: "free-fare",
        name: "標準運送",
        day: "約 3~7 個工作天",
        fee: "免費",
        feeAmount: 0,
      },{
        id: 2,
        selector: "dhl-fare",
        name: "DHL 貨運",
        day: "48 小時內送達",
        fee: "$500",
        feeAmount: 500,        
      }],
      feeAmountChosen: 0
    }
  },
  methods:{
    currentFeeAmountChosen(){
      this.$emit("after-fee-amount-chosen",this.feeAmountChosen)
    }
  }
}
</script>

<style lang="scss" scoped>
.form__wrapper {
  .form__content {
    margin-bottom: 165px;
    @mixin tablet {
      margin-bottom:unset
    }
    label {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      border: 1px solid $border-gray;
      border-radius: 4px;
      padding: 0 10px;
      color: $black;
      font-size: 14px;
      &:hover {
        border: 1px solid $black;
      }
      >label {
        padding: 8px;
        border: none;
        &:hover {
          border: none;
        }
      }
    }
    input[type="radio"] {
      -webkit-appearance: none;
      border-radius: 100%;
      width: 35px;
      height: 35px;
      transform: scale(0.5, 0.5);
      cursor: pointer;
      &:checked {
        box-shadow: inset 0 0 0 10px $black;
      }
    }
    .dhl-fare p {
      font-weight: $bold-weight;
    }
    span {
      font-weight: $regular-weight;
      font-size: 12px;
    }
  }
}
</style>