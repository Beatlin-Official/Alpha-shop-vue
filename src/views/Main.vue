<template>
  <main>
    <h1 class="main__title">結帳</h1>
    <div class="main__table">
      <div class="stepper__table">
        <Stepper :now-step="step"/>
        <form class="form">
                <AddressForm v-if="step===1" />
                <DeliveryForm 
                    v-if="step===2" 
                    @after-fee-amount-chosen="afterFeeAmountChosen"
                />
                <PaymentForm 
                    v-if="step===3" 
                />         
        </form>
        <div class="button__wrapper">

          <button
            @click.stop.prevent="prevStep(step)" 
            :class="{'d-none':step===1}" 
            class="button left">
            <img src="../assets/left@2x.png" />
            上一步
          </button>

          <button
            @click.stop.prevent="nextStep(step)" 
            :class="[{'d-none':step===3}]" 
            class="button right">
            下一步
            <img src="../assets/right@2x.png" />
          </button>

          <button 
            :class="[{'d-none':step!==3}]" 
            class="button right">
            確認下單
          </button>

        </div>
      </div>

      <Cart
        :delivery-fee="deliveryFee"
      />
    </div>
  </main>
</template>

<script>
import Stepper from "../components/Stepper";
import AddressForm from "../components/AddressForm";
import DeliveryForm from "../components/DeliveryForm";
import PaymentForm from "../components/PaymentForm";
import Cart from "../components/Cart";

export default {
  components: {
    Stepper,
    AddressForm,
    DeliveryForm,
    PaymentForm,
    Cart
  },
  data() {
    return {
      step: 1,
      deliveryFee: 0
    };
  },
  methods: {
    nextStep(step) {
      this.step = step + 1;
    },
    prevStep(step) {
      this.step = step - 1;
    },
    afterFeeAmountChosen(feeAmount){
        this.deliveryFee = feeAmount
    }
  }
};
</script>