// public class MemberInfoForQueryResponseDto {
//   private Long membershipPolicyId;
//   private Long memberId;
//   private String memberName;
//   private String memberPhoneNumber;
//   private String memberProfileImageUrl;
// }

export interface MemberInfoForQueryResponse {
    memberId: number;
    memberName: string;
    memberPhoneNumber: string;
    memberProfileImageUrl: string;
    membershipPolicyId: number;
}