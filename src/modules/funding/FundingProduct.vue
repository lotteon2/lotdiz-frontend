<template>
  <div class='product-container'>
    <!-- 반복되는 제품 정보를 배열로 정의 -->
    <div v-for='product in products' :key='product.productId' class='product-info-content'>
      <div class='product-info-item'>
        <div style='color: #4fafb1; font-weight: bold'>{{ product.productName }}</div>
      </div>
      <div class='product-info-item'>
        <div
          style='width: 1350px; overflow: hidden; word-wrap: break-word; overflow-wrap: break-word'
        >
          {{ product.productDescription }}
        </div>
      </div>
      <div class='product-info-item' style='justify-content: flex-end; font-weight: bold'>
        <div>
          {{ product.productFundingQuantity }}개 X {{ product.productFundingPrice }} 원 =
          {{ product.productFundingQuantity * product.productFundingPrice }}원
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import type { FundingProductsRequest } from '@/services/types/FundingRequest'
import { useFundingStore } from '@/store/FundingStore'
import { ref } from 'vue'

const fundingStore = useFundingStore()
const products = ref<FundingProductsRequest[]>(fundingStore.fundingDetailInfo.products);

</script>


<style>
.product-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.product-info-content {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  align-self: stretch;
}

.product-info-item {
  display: flex;
  align-items: flex-start;
  gap: 50px;
}
</style>
