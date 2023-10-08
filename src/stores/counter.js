import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'Chocolate ball', img: 'https://cdn.pic.in.th/file/picinth/chocolate-ball25950910119e512b.th.jpeg', price: 50 },
    { name: ' Chocolate Cake ', img: 'https://cdn.pic.in.th/file/picinth/chocolate-bar4587cbc77bf61102.th.jpeg', price: 120 },
    { name: ' Chocolate bar ', img: 'https://cdn.pic.in.th/file/picinth/chocolate-cakef7922e1e2f97ce98.th.jpeg', price: 50 },
    { name: 'Chocolate cookies ', img: 'https://cdn.pic.in.th/file/picinth/chocolate-cookiesdcfc93978c0f31f8.jpeg', price: 20 },
    { name: ' Chocolate cupcakes', img: 'https://cdn.pic.in.th/file/picinth/chocolate-cupcakes6e8d76bc3042750d.th.jpeg', price: 100 },
    { name: ' Chocolate ice-scream ', img: 'https://cdn.pic.in.th/file/picinth/chocolate-ice419d97cffd969657.th.jpeg', price: 40 },
    { name: ' Chocolate nama ', img: 'https://cdn.pic.in.th/file/picinth/chocolate-nama4712b9391781a774.th.jpeg', price: 150 },
    { name: ' Chocolate strawberries ', img: 'https://cdn.pic.in.th/file/picinth/chocolate-strawberries83ec9923f3593406.th.jpeg', price: 50 },
  ])
    
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
