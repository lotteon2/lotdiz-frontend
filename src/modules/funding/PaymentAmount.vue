<template>
  <div class='payments-container'>
    <div class='payments-info-header'>
      <div class='payments-info-header-font'>결제 금액</div>
    </div>
    <div class='payments-info-content'>
      <div class='payments-info-item'>
        <div class='payments-info-item-left'>상품 금액</div>
        <div class='payments-info-item-right'>{{ fundingTotalAmount }}</div>
      </div>
      <div class='payments-info-item'>
        <div class='payments-info-item-left'>포인트 할인</div>
        <div class='payments-info-item-right' style='color: red'>{{ usedPoint ? '-' +  usedPoint + '원' : '0원' }}</div>
      </div>
      <div class='payments-info-item'>
        <div class='payments-info-item-left'>멤버십 등급 할인({{ membershipDiscount }}%)</div>
        <div class='payments-info-item-right' style='color: red'>{{ fundingMembershipDiscountAmount }}</div>
      </div>
      <div class='payments-info-item'>
        <div class='payments-info-item-left'>후원금</div>
        <div class='payments-info-item-right'>{{ supportAmount ? supportAmount + '원' : '0원' }}</div>
      </div>
      <div class='payments-info-item'>
        <div class='payments-info-item-left'>배송비</div>
        <div class='payments-info-item-right'>{{ deliveryCost }}</div>
      </div>
      <div class='payments-info-item-total'>
        <div class='payments-info-item-total-left'>총 결제 금액</div>
        <div class='payments-info-item-total-right'>{{ fundingPaymentsActualAmount }}</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import {computed, onBeforeMount, ref, watch} from 'vue'
import {useFundingStore} from '@/store/FundingStore'
import {getMembershipInfoForShow} from '@/services/api/MemberService'
import type {MembershipInfoForShowResponse} from '@/services/types/MemberResponse'
import type {FundingProductsRequest} from '@/services/types/FundingRequest'

const fundingStore = useFundingStore()
const products = <FundingProductsRequest[]>(fundingStore.fundingDetailInfo.products);
const deliveryCost = ref<number>(0);
let fundingTotalAmount = ref<number>(0);
const membershipDiscount = ref<number>(0);
const fundingMembershipDiscountAmount = ref<number>(0);
const fundingPaymentsActualAmount = ref<number>(0);

const supportAmount = computed(() => {
  return fundingStore.fundingDetailInfo.fundingSupportAmount
})

const usedPoint = computed(() => {
  return fundingStore.fundingDetailInfo.fundingUsedPoint
})

for (const p of products) {
  fundingTotalAmount.value += p.productFundingPrice * p.productFundingQuantity
}

if (fundingTotalAmount.value < 50000) {
  deliveryCost.value = 3000
}

fundingMembershipDiscountAmount.value = fundingTotalAmount.value * (membershipDiscount.value * 0.01)
fundingPaymentsActualAmount.value = fundingTotalAmount.value * (1 - membershipDiscount.value * 0.01) - usedPoint.value + supportAmount.value + deliveryCost.value

fundingStore.updateData({fundingMembershipDiscountAmount: fundingMembershipDiscountAmount.value})
fundingStore.updateData({deliveryCost: deliveryCost.value})
fundingStore.updateData({fundingTotalAmount: fundingTotalAmount.value})

watch ([usedPoint, supportAmount], ([newUsedPoint, newSupportAmount]) => {
  fundingPaymentsActualAmount.value = fundingTotalAmount.value * (1 - membershipDiscount.value * 0.01) - newUsedPoint + newSupportAmount + deliveryCost.value
  fundingStore.updateData({fundingPaymentsActualAmount: fundingPaymentsActualAmount.value})
})

onBeforeMount(() => {
  const response = getMembershipInfoForShow();

  response.then((data: MembershipInfoForShowResponse) => {
    membershipDiscount.value = data.membershipPolicyDiscountRate
  })

})


</script>


<style scoped>
.payments-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.payments-info-header {
  display: flex;
  align-items: center;
  align-self: stretch;
}

.payments-info-header-font {
  display: flex;
  text-align: left;
  align-items: center;
  color: black;
  font-size: 20px;
  font-weight: bold;
}

.payments-info-content {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  align-self: stretch;
}

.payments-info-item {
  display: flex;
  align-items: flex-start;
  gap: 902px;
}

.payments-info-item-left {
  display: flex;
  width: 170px;
  height: 31px;
  flex-direction: column;
  justify-content: center;
}

.payments-info-item-right {
  text-align: right;
  display: flex;
  width: 153px;
  height: 31px;
  flex-direction: column;
  justify-content: center;
}

.payments-info-item-total {
  display: flex;
  align-items: flex-start;
  gap: 902px;
  font-weight: bold;
}

.payments-info-item-total-left {
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  width: 170px;
  height: 31px;
  flex-direction: column;
  justify-content: center;
}

.payments-info-item-total-right {
  text-align: right;
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  width: 153px;
  height: 31px;
  flex-direction: column;
  justify-content: center;
}

.hr-style {
  margin: 50px 0px;
  border: solid 1px #c8c8c8;
}
</style>