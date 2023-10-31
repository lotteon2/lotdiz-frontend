<template>
  <div class="funding-list-card-wrapper">
    <div class="funding-list-header">
      <div class="funding-list-left">
        <div
            style="border: 1px solid; width: 15px; height: 15px; border-radius: 50px; background-color: #4fafb1"></div>
        <div class="funding-list-status">진행중</div>
      </div>
      <div class="funding-list-right">
        2023.09.25 참여
      </div>
    </div>
    <div class="funding-list-body">
      <div class="funding-list-img">
        <img
            height="80px;"
            src="https://cdn.wadiz.kr/wwwwadiz/green001/2023/0901/20230901151029859_236909.jpg/wadiz/resize/1200/format/jpg/quality/80/"
            width="120px"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.funding-list-card-wrapper {
  display: inline-flex;
  padding: 15px 0px;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
}

.funding-list-header {
  display: flex;
  width: 1600px;
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
  width: 70%;
  padding: 10px 0px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.funding-list-body {
  display: flex;
  align-items: center;
  gap: 7px;
}

.funding-list-img {
  display: flex;
  width: 402px;
  height: 246px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>