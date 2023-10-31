<template xmlns="http://www.w3.org/1999/html">
  <div style="display: flex; flex-direction: column;gap: 30px; background-color: #F5F5F5; padding: 0 0 60px 0;">
    <FundingStatus/>
    <FundingProductInfo/>
    <FundingPayDetails/>
    <FundingPayMethod/>
    <FundingDelivery/>
  </div>
</template>

<script>
import FundingStatus from "@/modules/funding/details/FundingStatus.vue";
import FundingProductInfo from "@/modules/funding/details/FundingProductInfo.vue";
import FundingPayMethod from "@/modules/funding/details/FundingPayMethod.vue";
import FundingPayDetails from "@/modules/funding/details/FundingPayDetails.vue";
import FundingDelivery from "@/modules/funding/details/FundingDelivery.vue";

export default {
  components: {
    FundingStatus,
    FundingProductInfo,
    FundingPayDetails,
    FundingPayMethod,
    FundingDelivery
  }
}

</script>

<style></style>
