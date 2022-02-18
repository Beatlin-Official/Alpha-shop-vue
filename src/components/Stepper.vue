<template>
  <div class="stepper__wrapper">
      
    <div
        :class="[{ active:nowStep===1, checked:nowStep>1 }]" 
        class="step">
        <span class="step__line"></span>
        <div class="step__number"></div>
        <p class="step__title">寄送地址</p>
    </div>

    <div
        :class="[{ active:nowStep===2, checked:nowStep>2 }]" 
        class="step">
        <span class="step__line"></span>
        <div class="step__number"></div>
        <p class="step__title">運送方式</p>
    </div>

    <div
        :class="[{ active:nowStep===3, checked:nowStep===3 }]" 
        class="step">
        <div class="step__number"></div>
        <p class="step__title">付款資訊</p>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        nowStep:{
            type: Number,
            required: true
        }
    }
}
</script>