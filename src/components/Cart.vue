<template>
  <div class="cart__table">
    <h3 class="cart__title">購物籃</h3>
    <div class="product__list">
      <div v-for="product in products" :key="product.id" class="product__item">
        <img class="product__img" :src="product.image" alt=" " />
        <div class="product__info">
          <p>{{product.name}}</p>
          <div class="product__count">
            <button @click.stop.prevent="handleDecreaseButton(product.id)" class="icon decrease">
              <img src="../assets/decrease-icon@2x.png" alt=" " />
            </button>
            <p class="quantity">{{product.amount}}</p>
            <button @click.stop.prevent="handleIncreaseButton(product.id)" class="icon increase">
              <img src="../assets/Increase-icon@2x.png" alt=" " />
            </button>
          </div>
          <div class="price">
            <p class="count-price">{{product.price}}</p>
          </div>
        </div>
      </div>
      <div class="cart__fare">
        <p>
          運費
          <span class="fare">{{deliveryFee | showDeliveryFee}}</span>
        </p>
      </div>
      <div class="cart__total">
        <p>
          小計
          <span class="total">${{renewTotalPrice}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import product1 from "../assets/product-1@2x.png";
import product2 from "../assets/product-2@2x.png";

const dummyData = {
  products: [
    {
      id: uuidv4(),
      name: "破壞補丁修身牛仔褲",
      image: product1,
      price: "$3,299",
      priceValue: 3299,
      amount: 1
    },
    {
      id: uuidv4(),
      name: "刷色直筒牛仔褲",
      image: product2,
      price: "$1,299",
      priceValue: 1299,
      amount: 1
    }
  ]
};

export default {
  props: {
    deliveryFee: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      products: [],
      totalPrice: 0
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.products = dummyData.products;
    },
    fetchTotalPrice() {
      this.totalPrice = 0; // 每次計算初值設為0，避免去加到computed計算回傳後的totalPrice
      this.totalPrice += this.deliveryFee;
    },
    handleDecreaseButton(productId) {
      this.products = this.products.map(product => {
        if (product.id === productId && product.amount !== 0) {
          return {
            ...product,
            amount: product.amount - 1
          };
        }
        return product;
      });
    },
    handleIncreaseButton(productId) {
      this.products = this.products.map(product => {
        if (product.id === productId) {
          return {
            ...product,
            amount: product.amount + 1
          };
        }
        return product;
      });
    }
  },
  computed: {
    renewTotalPrice() {
      this.fetchTotalPrice();
      this.products.forEach(product => {
        this.totalPrice += product.priceValue * product.amount;
      });
      return this.totalPrice;
    }
  },
  filters: {
    showDeliveryFee(fee) {
      if (fee === 0) {
        return "免費";
      } else {
        return "$" + fee;
      }
    }
  }
};
</script>