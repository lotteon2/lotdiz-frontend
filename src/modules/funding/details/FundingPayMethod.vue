<template>
  <div class='fundingstatus-container'>
    <div class='fundingstatus-content'>
      <div class='fundingstatus-info-item'>
        <div style='font-weight: bold'>결제 정보</div>
      </div>
      <div class='fundingstatus-info-item-details'>
        <div class='fundingstatus-info-item-left'>
          결제 방법
        </div>
        <div class='fundingstatus-info-item-right'>
          <div style='text-align: right;'>
            카카오페이
          </div>
        </div>
      </div>
      <div class='fundingstatus-info-item-details'>
        <div class='fundingstatus-info-item-left'>
          할부기간
        </div>
        <div class='fundingstatus-info-item-right'>
          <div style='text-align: right;'>
            일시불
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang='ts' setup>
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
</style>