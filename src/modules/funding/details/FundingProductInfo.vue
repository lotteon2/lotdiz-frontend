<template>
  <div class='fundingstatus-container'>
    <div v-for="product in products" class='fundingstatus-content'>
      <div class='fundingstatus-info-item'>
        <div style='font-weight: bold'>상품 정보</div>
      </div>
      <div class='fundingstatus-info-item'>
        <div style='font-weight: bold'>{{ product.productName }}</div>
      </div>
      <!--      <div class='fundingstatus-info-item'>-->
      <!--        <div>홍무화과와 청무화과를 한번에 만날 수 있는 기회 ! 부드러운 식감에 톡톡 터지는 식감 그리고 달큰한 맛까지 제대로된 무화과를 산지직송으로 만나보세요 :) * 무농약</div>-->
      <!--      </div>-->
      <hr class='hr-style'/>
      <div class='fundingstatus-info-item'>
        <div>
          {{ product.productFundingPrice }}원 / {{ product.productFundingQuantity }}개
        </div>
      </div>
      <div class='fundingstatus-info-item'>
        <div style='color: #4FAFB1; font-weight: bold'>
          {{ projectStatus }}
        </div>
      </div>
      <!--      </div>-->
    </div>
  </div>
</template>

<script lang='ts' setup>
import {useFundingDetailStore} from "@/store/FundingStore";
import {ref} from "vue";

const fundingDetailStore = useFundingDetailStore();

const products = fundingDetailStore.fundingDetailsInfo.products;

const projectStatus = ref(fundingDetailStore.fundingDetailsInfo.projectStatus);

</script>

<style scoped>
.fundingstatus-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 90px;
  gap: 10px;
  flex-shrink: 0;
}

.fundingstatus-content {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  align-self: stretch;
  border: 1px solid white;
  padding: 10px;
  border-radius: 5px;
}

.fundingstatus-header {
  margin-top: 30px;
  font-size: 25px;
}

.fundingStatus-status {
  display: flex;
  align-items: center;
  gap: 10px;
}

.fundingstatus-info-item {
  display: flex;
  align-items: flex-start;
  gap: 50px;
}

.hr-style {
  margin: 5px 0px;
  border: solid 1px #c8c8c8;
}
</style>