<template>
  <div class='point-section'>
    <div class='point-header'>
      <div class='point-font'>포인트</div>
    </div>
    <div class='point-contents'>
      <div class='point-inner-contents-left'>
        <div class='point-inner-contents-left-header'>멤버십 적립 예정 포인트({{ memberPointRate }}%)</div>
      </div>
      <div class='point-inner-contents-right'>
        <div class='point-inner-contents-line'></div>
        <div class='point-inner-contents-right-header'>
          <span> {{ totalAmount * memberPointRate / 100 }} </span>
        </div>
      </div>
    </div>
    <div class='point-contents'>
      <div class='point-inner-contents-left'>
        <div class='point-inner-contents-left-header'>포인트 사용</div>
      </div>
      <div class='point-inner-contents-right'>
        <div class='point-inner-contents-line'></div>
        <div class='point-inner-contents-right-header'>
          <div>보유포인트({{ memberPoint }})</div>
          <input v-model='usedPoint' type='number' />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>

import { onMounted, ref, watch } from 'vue'
import { useFundingStore } from '@/store/FundingStore'
import { getMemberPointsForShow, getMembershipInfoForShow } from '@/services/api/MemberService'

const fundingStore = useFundingStore()
const memberPoint = ref(0)
const memberPointRate = ref(0)
const totalAmount = ref(35000)

const usedPoint = ref(fundingStore.fundingDetails.fundingUsedPoint)

watch(usedPoint, (newVal, oldVal) => {
  if (newVal > memberPoint.value) {
    alert('보유하신 포인트 보다 더 많은 포인트를 사용할 수 없습니다.')
    usedPoint.value = oldVal
  } else {
    fundingStore.updateData({ fundingUsedPoint: newVal })
  }
})

onMounted(async () => {
  try {
    memberPoint.value = await getMemberPointsForShow()
  } catch (e) {
    console.log('오류발생: ', e)
  }

  getMembershipInfoForShow()
    .then(response => {
      memberPointRate.value = response.membershipPolicyPointAccumulationRate
      //point.value = memberPointRate.value()
    }).catch(error => {
    console.error('멤버십 가입 정보 조회 실패:', error)
  })
})
</script>


<style>
.point-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 17px;
}

.point-header {
  display: flex;
  width: 1400px;
  align-items: center;
}

.point-font {
  color: black;
  font-size: 20px;
  font-weight: bold;
}

.point-contents {
  display: flex;
  width: auto;
  height: 42px;
  padding: 0px 20px;
  align-items: center;
}

.point-inner-contents-left {
  display: flex;
  width: 276px;
  justify-content: center;
  align-items: center;
}

.point-inner-contents-left-header {
  width: 269px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
}

.point-inner-contents-right {
  display: flex;
  width: auto;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
}

.point-inner-contents-line {
  width: 800px;
  margin-bottom: 50px;
  height: 50px;
}

.point-inner-contents-right-header {
  margin-left: 40px;
}
</style>
