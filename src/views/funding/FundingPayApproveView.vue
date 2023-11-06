<template>
  <div style='display:flex; flex-direction: column; gap:10px; width: fit-content'>
    <div> 결제가 진행중입니다. 잠시만 기다려주세요</div>
    <img alt='loading' src='@/assets/loading.gif'>
  </div>
</template>

<script lang='ts' setup>
import {onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {postFundingInfoForPayApproval} from '@/services/api/FundingService'
import type {FundingPaymentsApproveInfo} from '@/services/types/FundingPaymentsApproveInfo'
import {useFundingStore} from '@/store/FundingStore'
import type {FundingDetailInfo} from '@/services/types/FundingRequest'

const route = useRoute()
const fundingStore = useFundingStore();
const fundingDetailInfo: FundingDetailInfo = fundingStore.fundingDetailInfo;

const fundingPaymentsRequest = <FundingPaymentsApproveInfo>{
  tid: window.localStorage.getItem('tid'),
  pgToken: '',
  partnerOrderId: '',
  partnerUserId: '',
  projectId: 3,
  products: [
    {
      productId: 6,
      productFundingPrice: 22000,
      productFundingQuantity: 1,
      productName: 'Product 1',
      productDescription: 'Description 1'
    }
  ],
  itemName: '무화과 1kg',
  fundingSupporterEmail: 'abc@gmail.com',
  fundingTotalAmount: 22000,
  fundingIsRefundable: false,
  fundingSupportAmount: 0,
  fundingLotdealDiscountAmount: 0,
  fundingMembershipDiscountAmount: 660,
  fundingUsedPoint: 400,
  fundingPrivacyAgreement: true,
  supporterWithUsIsAmountPublic: true,
  supporterWithUsIsNamePublic: true,
  deliveryCost: 0,
  fundingPaymentsActualAmount: 20940,
  deliveryAddressRecipientName: '임한결',
  deliveryAddressRecipientPhoneNumber: '010-1234-5678',
  deliveryAddressRequest: '문 앞',
  deliveryAddressRoadName: '서울시 강동구 올림픽로 22길 21-2',
  deliveryAddressDetail: '1101호',
  deliveryAddressZipCode: '05321'
}

const messageData: any = {
  status: 'complete',
  fundingId: 0,
}

onMounted(
    async () => {
      try {
        // index.ts에 url mapping 정의됨.
        fundingPaymentsRequest.partnerOrderId = route.params.order as string
        fundingPaymentsRequest.partnerUserId = route.params.user as string
        fundingPaymentsRequest.pgToken = route.query.pg_token as string

        console.log("partnerOrderId: " + fundingPaymentsRequest.partnerOrderId + "partnerUserId" + fundingPaymentsRequest.partnerUserId)
        console.log(fundingPaymentsRequest.pgToken);

        // store에 저장된 값들 넣기
        fundingPaymentsRequest.projectId = fundingDetailInfo.projectId
        fundingPaymentsRequest.products = fundingDetailInfo.products
        fundingPaymentsRequest.itemName = fundingDetailInfo.itemName
        fundingPaymentsRequest.fundingSupporterEmail = fundingDetailInfo.fundingSupporterEmail
        fundingPaymentsRequest.fundingTotalAmount= fundingDetailInfo.fundingTotalAmount
        fundingPaymentsRequest.fundingIsRefundable= fundingDetailInfo.fundingIsRefundable
        fundingPaymentsRequest.fundingSupportAmount= fundingDetailInfo.fundingSupportAmount
        fundingPaymentsRequest.fundingLotdealDiscountAmount= fundingDetailInfo.fundingLotdealDiscountAmount
        fundingPaymentsRequest.fundingMembershipDiscountAmount= fundingDetailInfo.fundingMembershipDiscountAmount
        fundingPaymentsRequest.fundingUsedPoint= fundingDetailInfo.fundingUsedPoint
        fundingPaymentsRequest.fundingPrivacyAgreement= fundingDetailInfo.fundingPrivacyAgreement
        fundingPaymentsRequest.supporterWithUsIsAmountPublic= fundingDetailInfo.supporterWithUsIsAmountPublic
        fundingPaymentsRequest.supporterWithUsIsNamePublic= fundingDetailInfo.supporterWithUsIsNamePublic
        fundingPaymentsRequest.deliveryCost= fundingDetailInfo.deliveryCost
        fundingPaymentsRequest.fundingPaymentsActualAmount= fundingDetailInfo.fundingPaymentsActualAmount
        fundingPaymentsRequest.deliveryAddressRecipientName= fundingDetailInfo.deliveryAddressRecipientName
        fundingPaymentsRequest.deliveryAddressRecipientPhoneNumber= fundingDetailInfo.deliveryAddressRecipientPhoneNumber
        fundingPaymentsRequest.deliveryAddressRequest= fundingDetailInfo.deliveryAddressRequest
        fundingPaymentsRequest.deliveryAddressRoadName= fundingDetailInfo.deliveryAddressRoadName
        fundingPaymentsRequest.deliveryAddressDetail= fundingDetailInfo.deliveryAddressDetail
        fundingPaymentsRequest.deliveryAddressZipCode= fundingDetailInfo.deliveryAddressZipCode

        console.log("fundingPaymentsRequest: "+ JSON.stringify(fundingPaymentsRequest));
        console.log("fundingStore: "+ JSON.stringify(fundingDetailInfo));


        // TODO: projectID 받아서 넣기
        const response = await postFundingInfoForPayApproval(fundingPaymentsRequest, fundingDetailInfo.projectId)
        alert(response.detail)
        messageData.fundingId = response.data

        window.opener.postMessage(messageData, '*')
        window.close()
      } catch (error) {
        console.error('An error occurred:' + error)
      }
    })

</script>
