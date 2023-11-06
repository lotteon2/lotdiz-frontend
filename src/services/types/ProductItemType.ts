export interface ProductItemType {
    productName: String,
    productDescription: String,
    productPrice: Number,
    productRegisteredStockQuantity: Number
}

export interface ProductFundingInfoResponse {
    productId: number;
    productName: string;
    productDescription: string;
    productFundingPrice: number;
    productFundingQuantity: number;
}