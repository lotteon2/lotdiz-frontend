export interface ProjectsResponse<T> {
  totalPages: number,
  projects: Array<T>
}

export interface BannersResponse {
  banners: Array<Banner>,
}

export interface ProjectDetailResponse {
  projectDetail: ProjectDetail
}

export interface ProjectsByCategory {
  projectId: number;
  projectName: string;
  remainingDays: number;
  projectThumbnailImageUrl: string;
  makerName: string;
  fundingAchievementRate: string;
  accumulatedFundingAmount: number;
  lotdealDueTime: string;
  projectStatus: string;
  isLike: boolean;
}

export interface ProjectDetail {
  projectId: number;
  projectName: string;
  projectDescription: string;
  remainingDays: number;
  makerName: string;
  categoryName: string;
  projectTag: string;
  numberOfBuyers: number;
  numberOfSupporter: number;
  numberOfLikes: number;
  fundingAchievementRate: number;
  accumulatedFundingAmount: number;
  projectStoryImageUrl: string;
  projectImages: Array<ProjectImage>
  lotdealDueTime: string;
  projectStatus: string;
  products: Array<Product>
}

export interface Banner {
  bannerId: number
  bannerImageUrl: string
  bannerUrl: string
}

export interface LotdealProject {
  projectId: number;
  projectName: string;
  remainingDays: number;
  projectThumbnailImageUrl: string;
  makerName: string;
  fundingAchievementRate: string;
  accumulatedFundingAmount: number;
  lotdealDueTime: string;
  projectStatus: string;
  isLike: boolean;
}

export interface SpecialExhibition {
  projectId: number;
  projectName: string;
  remainingDays: number;
  projectThumbnailImageUrl: string;
  makerName: string;
  fundingAchievementRate: number;
  accumulatedFundingAmount: number;
  lotdealDueTime: string;
  projectStatus: string;
  isLike: boolean;
}

export interface ProjectImage {
  projectImageId: number;
  projectImageUrl: string;
  projectThumbnailImageUrl: boolean;
}

export interface Product {
  productId: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  productRegisteredStockQuantity: number;
  productCurrentStockQuantity: number;
}

