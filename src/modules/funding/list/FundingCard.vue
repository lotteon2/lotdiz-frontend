<template>
  <div v-for='(funding, index) in fundings' :key='index' class='funding-list-card-wrapper'>
    <div class='funding-list-header'>
      <div class='funding-list-left'>
        <div
            style='border: 1px solid; width: 15px; height: 15px; border-radius: 50px; background-color: #4fafb1'></div>
        <div class='funding-list-status'>{{ funding.status }}</div>
      </div>
      <div style='width: 20%;'></div>
      <div class='funding-list-right'>
        {{ funding.participationDate }} 참여
      </div>
    </div>
    <div class='funding-list-body'>
      <div class='funding-list-img'>
        <img :src='funding.imageUrl' alt='product img' style='width: 240px;'/>
      </div>
      <div class='funding-list-contents'>
        <div class='funding-list-contents-header' style='color: #58C1C2;text-align: center;font-size: 20px;'>
          {{ funding.achievement }}% 달성
        </div>
        <div class='funding-list-contents-item'>
          {{ funding.title }}
        </div>
        <div class='funding-list-contents-item'>
          <div class='funding-inner-contents'>
            {{ funding.amountAchieved }}
            <div style='font-size: 10px'> 원 달성</div>
          </div>

          <div class='funding-inner-contents'>
            참여자 수: {{ funding.participantCount }} 명
          </div>
          <div class='funding-inner-contents'>
            {{ funding.daysLeft }}일 남음
          </div>
        </div>
        <div class='funding-list-contents-item'>
          {{ funding.provider }}
        </div>
        <div class='funding-list-contents-item'>
          내 결제 금액: {{ funding.paymentAmount }}
        </div>
      </div>
    </div>
    <div class='funding-list-bottom'>
      <div class='funding-status'>
        펀딩/배송상태: {{ funding.fundingStatus }}
      </div>
      <div style='width: 20%;'></div>
      <div class='funding-details-btn'>
        상세보기 >
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import {ref} from 'vue'

const fundings: any = ref([
  {
    status: '진행중',
    participationDate: '2023.09.25',
    imageUrl: 'https://cdn.wadiz.kr/wwwwadiz/green001/2023/0901/20230901151029859_236909.jpg/wadiz/resize/1200/format/jpg/quality/80/',
    achievement: '3478% 달성',
    title: '평점5.0/마지막수확ㅣ진~하게 완숙된 초 달큰한 무화과, 홍&청무화과세트',
    amountAchieved: '28,100,000원',
    participantCount: '250명',
    daysLeft: '7일 남음',
    provider: 'by 올데이온(alldayON)',
    paymentAmount: '78,900원',
    fundingStatus: '결제 취소'
  },
  {
    status: '진행중',
    participationDate: '2023.09.25',
    imageUrl: 'https://cdn.wadiz.kr/wwwwadiz/green001/2023/0901/20230901151029859_236909.jpg/wadiz/resize/1200/format/jpg/quality/80/',
    achievement: '3478% 달성',
    title: '평점5.0/마지막수확ㅣ진~하게 완숙된 초 달큰한 무화과, 홍&청무화과세트',
    amountAchieved: '28,100,000원',
    participantCount: '250명',
    daysLeft: '7일 남음',
    provider: 'by 올데이온(alldayON)',
    paymentAmount: '78,900원',
    fundingStatus: '결제 취소'
  }
])
</script>

<style scoped>
.funding-list-card-wrapper {
  display: inline-flex;
  padding: 15px 0px;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border: 1px solid gray;
  width: 1410px;
  margin: 20px 0;
}

.funding-list-header {
  display: flex;
  width: 1400px;
  padding: 0px 30px;
  align-items: center;
}

.funding-list-left {
  display: flex;
  padding: 0px 30px;
  align-items: center;
  width: 10%;
}

.funding-list-status {
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.funding-list-right {
  display: flex;
  width: 60%;
  padding: 10px 0px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.funding-list-body {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0 30px;
}

.funding-list-img {
  display: flex;
  padding: 10px;
}

.funding-list-contents {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.funding-list-contents-header {
  display: flex;
  width: 1191px;
  padding: 10px;
  align-items: center;
  gap: 10px;
}

.funding-list-contents-item {
  display: flex;
  width: 1191px;
  padding: 0px 10px;
  align-items: center;
  gap: 85px;
}

.funding-inner-contents {
  display: flex;
  align-items: center;
  gap: 10px;
}

.funding-list-bottom {
  display: flex;
  width: 1575px;
  align-items: flex-start;
}

.funding-status {
  width: 20%;
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  padding: 0 40px;
}

.funding-details-btn {
  display: flex;
  width: 40%;
  padding: 10px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
</style>