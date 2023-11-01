<template>
  <div class='agreement-container'>
    <div class='agreement-info-header'>
      <div class='agreement-info-header-font'>약관 동의</div>
    </div>
    <div class='agreement-info-content'>
      <div style='display: flex; align-items: flex-start'>
        <input v-model='supporterWithUsIsAmountPublic' required style='width: 25px; height: 25px'
               type='checkbox' />
        <div style='margin-left: 30px; font-size: 1.2rem'>구매조건, 결제 진행 및 결제 대행 서비스 동의(필수)</div>
      </div>
      <div style='display: flex; align-items: flex-start'>
        <input v-model="supporterWithUsIsNamePublic" required style='width: 25px; height: 25px' type='checkbox' />
        <div style='margin-left: 30px; font-size: 1.2rem'>개인정보 제3자 제공 동의 (필수)</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'
import { useFundingStore } from '@/store/FundingStore'

const fundingStore = useFundingStore()

const supporterWithUsIsAmountPublic = ref(fundingStore.fundingDetailInfo.supporterWithUsIsAmountPublic)
const supporterWithUsIsNamePublic = ref(fundingStore.fundingDetailInfo.supporterWithUsIsNamePublic)
watch(supporterWithUsIsAmountPublic, (newValue) => {
  fundingStore.fundingDetailInfo.supporterWithUsIsNamePublic = newValue
})
watch(supporterWithUsIsNamePublic, (newValue) => {
  fundingStore.fundingDetailInfo.supporterWithUsIsAmountPublic = newValue
})
</script>

<style>
.agreement-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.agreement-info-header {
  display: flex;
  align-items: center;
  align-self: stretch;
}

.agreement-info-header-font {
  display: flex;
  text-align: left;
  align-items: center;
  color: black;
  font-size: 20px;
  font-weight: bold;
}

.agreement-info-content {
  display: flex;
  padding: 20px 50px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
}
</style>