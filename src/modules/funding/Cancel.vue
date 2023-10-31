<template>
</template>

<script lang="ts" setup>
import {onMounted} from "vue";

onMounted(() => {
  alert("결제를 취소하였습니다.");
  window.close();
});
</script>