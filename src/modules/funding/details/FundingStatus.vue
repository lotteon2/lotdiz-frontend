<template>
  <div class='fundingstatus-container'>
    <div class='fundingstatus-content'>
      <div class='fundingstatus-header'>롯드+</div>
      <div class='fundingStatus-status'>
        <div
            style='border: 1px solid; width: 15px; height: 15px; border-radius: 50px; background-color: #4fafb1'></div>
        <div>{{ projectStatus }}</div>
      </div>
      <div class='fundingstatus-info-item'>
        <div style='font-weight: bold'>{{ projectName }}</div>
      </div>
      <div class='fundingstatus-info-item'>
        <div>{{ makerName }}</div>
      </div>
      <div class='fundingstatus-info-item-details'>
        <div class='fundingstatus-info-item-left'>
          펀딩번호
        </div>
        <div class='fundingstatus-info-item-right'>
          <div style='text-align: right;'>
            {{ fundingId }}
          </div>
        </div>
      </div>
      <div class='fundingstatus-info-item-details'>
        <div class='fundingstatus-info-item-left'>
          참여일
        </div>
        <div class='fundingstatus-info-item-right'>
          <div style='text-align: right;'>
            {{ createdAt }}
          </div>
        </div>
      </div>
      <div class='fundingstatus-info-item-details'>
        <div class='fundingstatus-info-item-left '>
          종료일
        </div>
        <div class='fundingstatus-info-item-right'>
          <div style='text-align: right;'>
            {{ endDate }}
          </div>
        </div>
      </div>
      <div class='fundingstatus-info-item-details'>
        <div class='fundingstatus-info-item-left '>
          결제 상태
        </div>
        <div class='fundingstatus-info-item-right'>
          <div style='text-align: right;'>
            {{ fundingStatus === 'COMPLETED' ? '펀딩완료' : fundingStatus }}
          </div>
        </div>
      </div>
      <div class='fundingstatus-cancel-btn'>
        <div class='fundingstatus-cancel-btn-style'>
          결제 취소
        </div>
      </div>
      <div class='fundingstatus-info-item'>
        <div class='fundingstatus-precaution-header'>
          <div class='info-style'>
            <img alt='info logo' src='@/assets/info.png'/>
          </div>
          <div class='info-description'>
            <div> 결제 취소 유의사항) 상품 옵션 변경과 결제 취소는 프로젝트 종료일인 "**{{ endDate }}**"까지 가능합니다.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>

import {useFundingDetailStore} from "@/store/FundingStore";
import {ref} from "vue";

const fundingDetailStore = useFundingDetailStore();

const projectStatus = ref(fundingDetailStore.fundingDetailsInfo.projectStatus)
const projectName = ref(fundingDetailStore.fundingDetailsInfo.projectName)
const fundingTotalAMount = ref(fundingDetailStore.fundingDetailsInfo.fundingTotalAmount)
const makerName = ref(fundingDetailStore.fundingDetailsInfo.makerName)
const fundingId = ref(fundingDetailStore.fundingDetailsInfo.fundingId)
const createdAt = ref(fundingDetailStore.fundingDetailsInfo.createdAt.slice(0, 10))

// const date = new Date(createdAt);
// const year = date.getFullYear();
// const month = date.getMonth() + 1;
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const formattedDate = `${year}-${month}-${day} ${hour}:${minutes}`;

const endDate = ref(fundingDetailStore.fundingDetailsInfo.endDate.slice(0, 10))
const fundingStatus = ref(fundingDetailStore.fundingDetailsInfo.fundingStatus)
const fundingPaymentsActualAmount = ref(fundingDetailStore.fundingDetailsInfo.fundingPaymentsActualAmount)

</script>

<style>
.fundingstatus-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 90px;
  gap: 10px;
  flex-shrink: 0;
}

.fundingstatus-content {
  background-color: white;
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
  flex-direction: column;
  justify-content: center;
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

.fundingstatus-cancel-btn {
  display: flex;
  width: auto;
  height: 66px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #000;
}

.fundingstatus-cancel-btn-style {
  display: flex;
  width: 292px;
  height: 46px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  text-align: center;
}

.fundingstatus-precaution-header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
}

.info-style {
  display: flex;
  width: 43px;
  height: 43px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info-description {
  display: flex;;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
}
</style>