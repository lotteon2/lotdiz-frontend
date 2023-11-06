<template>
  <div class='fundingstatus-container'>
    <div class='fundingstatus-content'>
      <div class='fundingstatus-info-item'>
        <div style='font-weight: bold'>결제 내역</div>
      </div>
      <div class='fundingstatus-info-item-details'>
        <div class='fundingstatus-info-item-left'>
          상품 금액
        </div>
        <div class='fundingstatus-info-item-right'>
          <div style='text-align: right;'>
            {{ fundingTotalAmount }}원
          </div>
        </div>
      </div>
      <div class='fundingstatus-info-item-details'>
        <div class='fundingstatus-info-item-left'>
          포인트 차감금액
        </div>
        <div class='fundingstatus-info-item-right'>
          <div style='text-align: right;'>
            - {{ usedPoint }}원
          </div>
        </div>
      </div>
      <div class='fundingstatus-info-item-details'>
        <div class='fundingstatus-info-item-left'>
          추가 후원금
        </div>
        <div class='fundingstatus-info-item-right'>
          <div style='text-align: right;'>
            {{ fundingSupportAmount }}원
          </div>
        </div>
      </div>
      <div class='fundingstatus-info-item-details'>
        <div class='fundingstatus-info-item-left'>
          멤버십 등급 할인(3%)
        </div>
        <div class='fundingstatus-info-item-right'>
          <div style='text-align: right;'>
            - {{ fundingMembershipDiscountAmount }}원
          </div>
        </div>
      </div>
      <div class='fundingstatus-info-item-details'>
        <div class='fundingstatus-info-item-left'>
          배송비
        </div>
        <div class='fundingstatus-info-item-right'>
          <div style='text-align: right;'>
            {{ deliveryCost }}원
          </div>
        </div>
      </div>
      <hr class='hr-style'/>
      <div class='fundingstatus-info-item-details'>
        <div class='fundingstatus-info-item-left' style='font-weight: bold'>
          최종 결제 금액
        </div>
        <div class='fundingstatus-info-item-right'>
          <div style='text-align: right; color: #4fafb1; font-weight: bold;'>
            {{ fundingPaymentsActualAmount }}원
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import {useFundingDetailStore} from "@/store/FundingStore";
import {onBeforeMount, ref} from "vue";
import {getMembershipInfoForShow} from "@/services/api/MemberService";
import type {MembershipInfoForShowResponse} from "@/services/types/MemberResponse";

const fundingDetailStore = useFundingDetailStore();

const fundingTotalAmount = fundingDetailStore.fundingDetailsInfo.fundingTotalAmount;
const usedPoint = ref(fundingDetailStore.fundingDetailsInfo.fundingUsedPoint);
const fundingSupportAmount = ref(fundingDetailStore.fundingDetailsInfo.fundingSupportAmount);
const fundingMembershipDiscountAmount = ref(fundingDetailStore.fundingDetailsInfo.fundingMembershipDiscountAmount)
const deliveryCost = ref(fundingDetailStore.fundingDetailsInfo.deliveryCost);

const membershipDiscountRate = ref<number>(0);
const fundingPaymentsActualAmount = ref<number>(0);

onBeforeMount(() => {
  const response = getMembershipInfoForShow();

  response.then((data: MembershipInfoForShowResponse) => {
    membershipDiscountRate.value = data.membershipPolicyDiscountRate
    console.log("할인금액" + fundingDetailStore.fundingDetailsInfo.fundingTotalAmount * membershipDiscountRate.value * 0.01)
    fundingPaymentsActualAmount.value = (fundingDetailStore.fundingDetailsInfo.fundingTotalAmount - fundingDetailStore.fundingDetailsInfo.fundingUsedPoint + fundingDetailStore.fundingDetailsInfo.fundingSupportAmount - (fundingDetailStore.fundingDetailsInfo.fundingTotalAmount * membershipDiscountRate.value * 0.01) + fundingDetailStore.fundingDetailsInfo.deliveryCost);
  })

})
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

.fundingstatus-info-item {
  display: flex;
  align-items: flex-start;
  gap: 50px;
}

.fundingstatus-info-item-details {
  display: flex;
  padding: 0px 34px;
  gap: 740px;
}

.fundingstatus-info-item-left {
  display: flex;
  width: 30%;
  height: 31px;
  flex-direction: column;
  justify-content: center;
}

.fundingstatus-info-item-right {
  display: flex;
  width: 150px;
  height: 31px;
  flex-direction: column;
  justify-content: center;
}

.hr-style {
  margin: 5px 0px;
  border: solid 1px #c8c8c8;
}
</style>