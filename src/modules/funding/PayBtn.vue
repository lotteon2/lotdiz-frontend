<template>
  <input
      style='
      width: 100%;
      height: 500%;
      background-color: #58c1c2;
      color: white;
      font-size: 1.5rem;
      padding: 20px;
      border: 1px solid;
      margin: 10px 0 50px 0;
    '
      type='button'
      value='결제하기'
      @click='readyForFundingPayments'
  />
</template>

<script lang='ts' setup>
import {onMounted, onUnmounted} from 'vue'
import {useRouter} from 'vue-router'
import type {
  FundingPaymentReadyResponse,
  FundingPaymentsReadyInfo,
  FundingProductsRequest,
  PayReadyResponse
} from '@/services/types/FundingRequest'
import {postFundingInfoForPayReady} from '@/services/api/FundingService'
import {useFundingStore} from '@/store/FundingStore'

const router = useRouter()
const fundingStore = useFundingStore()
const products = <FundingProductsRequest[]>(fundingStore.fundingDetailInfo.products);
const fundingPaymentsRequest: FundingPaymentsReadyInfo = {
  quantity: 0,
  itemName: '',
  totalAmount: 0,
  taxFreeAmount: 0
}

fundingPaymentsRequest.itemName = products[0].productName + ' 그 외'

for (const p of products) {
  fundingPaymentsRequest.quantity += p.productFundingQuantity
  fundingPaymentsRequest.totalAmount += p.productFundingPrice * p.productFundingQuantity
}

fundingStore.updateData({itemName: fundingPaymentsRequest.itemName})

const readyForFundingPayments = () => {

  if (fundingStore.fundingDetailInfo.fundingPrivacyAgreement == true) {
    const response: Promise<PayReadyResponse> = postFundingInfoForPayReady(fundingPaymentsRequest)

    response
        .then((data: PayReadyResponse) => {
          const fundingPaymentReadyResponse: FundingPaymentReadyResponse = data.payReady
          const redirectUrl: string = fundingPaymentReadyResponse.next_redirect_pc_url
          const tid: string = fundingPaymentReadyResponse.tid

          window.localStorage.setItem('tid', tid)
          window.open(
              redirectUrl,
              '펀딩 결제 QR 코드',
              'top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no'
          )
        })
        .catch((error) => {
          console.error('오류발생: ', error)
        })
  } else {
    alert("약간 동의 후 펀딩 가능합니다.")
  }
}

const messageHandler = (event: MessageEvent) => {
  if (event.data.status === 'complete') {
    // 자식 페이지 작업 완료 후 route
    router.push('/funding/details/' + event.data.fundingId)
  }
}

onMounted(() => {
  window.addEventListener('message', messageHandler)
})

onUnmounted(() => {
  window.removeEventListener('message', messageHandler)
})

</script>

<style></style>
