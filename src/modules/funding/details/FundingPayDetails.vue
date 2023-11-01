<template>
  <div class="fundingstatus-container">
    <div class="fundingstatus-content">
      <div class="fundingstatus-info-item">
        <div style="font-weight: bold">결제 내역</div>
      </div>
      <div class="fundingstatus-info-item-details">
        <div class="fundingstatus-info-item-left">
          상품 금액
        </div>
        <div class="fundingstatus-info-item-right">
          <div style="text-align: right;">
            31,000원
          </div>
        </div>
      </div>
      <div class="fundingstatus-info-item-details">
        <div class="fundingstatus-info-item-left">
          포인트 차감금액
        </div>
        <div class="fundingstatus-info-item-right">
          <div style="text-align: right;">
            - 0원
          </div>
        </div>
      </div>
      <div class="fundingstatus-info-item-details">
        <div class="fundingstatus-info-item-left">
          추가 후원금
        </div>
        <div class="fundingstatus-info-item-right">
          <div style="text-align: right;">
            0원
          </div>
        </div>
      </div>
      <div class="fundingstatus-info-item-details">
        <div class="fundingstatus-info-item-left">
          배송비
        </div>
        <div class="fundingstatus-info-item-right">
          <div style="text-align: right;">
            0원
          </div>
        </div>
      </div>
      <hr class="hr-style"/>
      <div class="fundingstatus-info-item-details">
        <div class="fundingstatus-info-item-left" style="font-weight: bold">
          최종 결제 금액
        </div>
        <div class="fundingstatus-info-item-right">
          <div style="text-align: right; color: #4fafb1; font-weight: bold;">
            35,000원
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
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