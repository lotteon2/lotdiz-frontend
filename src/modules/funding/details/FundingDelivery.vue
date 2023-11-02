<template>
  <div class='fundingstatus-container'>
    <div class='fundingstatus-content'>
      <div class='fundingstatus-info-item'>
        <div style='font-weight: bold'>배송지 정보</div>
      </div>
      <div class='fundingstatus-info-item-details'>
        <div class='fundingstatus-info-item-left'>
          {{ deliveryRecipientName }}
        </div>
      </div>
      <div class='fundingstatus-info-item-details'>
        <div class='fundingstatus-info-item-left'>
          {{ deliveryRecipientPhoneNumber }}
        </div>
      </div>
      <div class='fundingstatus-info-item-details'>
        <div class='fundingstatus-info-item-left'>
          [{{ deliveryzipcode }}] {{ deliveryRoadName }}
        </div>
      </div>
      <div class='fundingstatus-info-item-details'>
        <div class='fundingstatus-info-item-left'>
          {{ deliveryAddressDetail }}
        </div>
      </div>
      <div class='fundingstatus-cancel-btn' style='border: 2px solid #4fafb1'>
        <div class='fundingstatus-cancel-btn-style' style='color: #4fafb1; font-weight: bold;'>
          배송지 정보 변경하기
        </div>
      </div>
    </div>
  </div>
</template>


<script lang='ts' setup>
import {useFundingDetailStore} from "@/store/FundingStore";
import {ref} from "vue";

const fundingDetailStore = useFundingDetailStore();

const deliveryRecipientName = ref(fundingDetailStore.fundingDetailsInfo.deliveryRecipientName);
const deliveryRecipientPhoneNumber = ref(fundingDetailStore.fundingDetailsInfo.deliveryRecipientPhoneNumber);
const deliveryzipcode = ref(fundingDetailStore.fundingDetailsInfo.deliveryZipcode);
const deliveryRoadName = ref(fundingDetailStore.fundingDetailsInfo.deliveryRoadName);
const deliveryAddressDetail = ref(fundingDetailStore.fundingDetailsInfo.deliveryAddressDetail);

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
</style>