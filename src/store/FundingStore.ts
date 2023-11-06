import {defineStore} from 'pinia'
import type {FundingDetailInfo, FundingDetailsInfoResponse} from '@/services/types/FundingRequest'
import {getInfoForFundingDetails} from '@/services/api/FundingService'

interface FundingState {
    fundingDetailInfo: FundingDetailInfo;
}

export const useFundingStore = defineStore('funding', {

    state: (): FundingState => ({
        fundingDetailInfo: {
            projectId: 0,
            products: [],
            itemName: '',
            fundingSupporterEmail: '',
            fundingTotalAmount: 0,
            fundingIsRefundable: false,
            fundingSupportAmount: 0,
            fundingLotdealDiscountAmount: 0,
            fundingMembershipDiscountAmount: 0,
            fundingUsedPoint: 0,
            fundingPrivacyAgreement: true,
            supporterWithUsIsAmountPublic: false,
            supporterWithUsIsNamePublic: false,
            deliveryCost: 0,
            fundingPaymentsActualAmount: 0,
            deliveryAddressRecipientName: '',
            deliveryAddressRecipientPhoneNumber: '',
            deliveryAddressRequest: '',
            deliveryAddressRoadName: '',
            deliveryAddressDetail: '',
            deliveryAddressZipCode: '',
        }
    }),

    actions: {
        // 부분적인 데이터 업데이트를 위한 메소드
        updateData(partialFundingInfos: Partial<FundingDetailInfo>) {
            // Object.assign을 사용하여 현재 상태에 새로운 데이터를 병합
            Object.assign(this.fundingDetailInfo, partialFundingInfos)
        }
    }

})

interface FundingDetailSate {
    fundingDetailsInfo: FundingDetailsInfoResponse
}

export const useFundingDetailStore = defineStore('fundingDetailInfo', {
    state: (): FundingDetailSate => ({
        fundingDetailsInfo: {
            projectId: 0,
            projectStatus: '',
            projectName: '',
            makerName: '',
            fundingId: 0,
            createdAt: '',
            endDate: '',
            fundingStatus: '',
            fundingTotalAmount: 0,
            fundingUsedPoint: 0,
            fundingSupportAmount: 0,
            fundingMembershipDiscountAmount: 0,
            fundingPaymentsActualAmount: 0,
            products: [],
            deliveryCost: 0,
            deliveryRecipientName: '',
            deliveryRecipientPhoneNumber: '',
            deliveryRoadName: '',
            deliveryAddressDetail: '',
            deliveryZipcode: ''

        }
    }),
    actions: {
        async setData(fundingId: number) {
            try {
                const response: any = await getInfoForFundingDetails(fundingId)
                if (response !== undefined) {
                    this.fundingDetailsInfo = response.data.fundingDetails
                    console.log(response.data.fundingDetails)
                }
            } catch (error) {
                alert('펀딩상세 내역 조회 실패')
            }
        }
    },
    persist: true
})