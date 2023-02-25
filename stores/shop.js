import { defineStore } from 'pinia'

export const useShopStore = defineStore({
  id: 'shop',
  state: () => ({
    shopList: []
  }),
  actions: {
    addShopItem(item) {
      this.shopList.push(item)
    },
    removeShopItem(index) {
      this.shopList.splice(index, 1)
    }
  },
  persist: {
    key: 'shop', // 設定 localstorage 中的 key
    // 定義要 persist 的狀態
    // 在這裡只 persist shopList 狀態
    // 其他狀態如果需要 persist，也可以在這裡加上去
    state: ['shopList']
  }
})