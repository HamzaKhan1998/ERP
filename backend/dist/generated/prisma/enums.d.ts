export declare const TenantStatus: {
    readonly ONBOARDING: "ONBOARDING";
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
};
export type TenantStatus = (typeof TenantStatus)[keyof typeof TenantStatus];
export declare const UserStatus: {
    readonly INVITED: "INVITED";
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const DocumentLevel: {
    readonly LEVEL_1: "LEVEL_1";
    readonly LEVEL_2: "LEVEL_2";
    readonly LEVEL_3: "LEVEL_3";
    readonly LEVEL_4: "LEVEL_4";
};
export type DocumentLevel = (typeof DocumentLevel)[keyof typeof DocumentLevel];
export declare const DocumentStatus: {
    readonly DRAFT: "DRAFT";
    readonly DOCUMENT_CONTROL_REVIEW: "DOCUMENT_CONTROL_REVIEW";
    readonly PENDING_APPROVAL: "PENDING_APPROVAL";
    readonly APPROVED: "APPROVED";
    readonly PUBLISHED: "PUBLISHED";
    readonly RETURNED_FOR_CORRECTION: "RETURNED_FOR_CORRECTION";
    readonly SUPERSEDED: "SUPERSEDED";
    readonly RETIRED: "RETIRED";
};
export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus];
export declare const WorkflowAssignmentType: {
    readonly PREPARED_BY: "PREPARED_BY";
    readonly REVIEWED_BY: "REVIEWED_BY";
    readonly APPROVED_BY: "APPROVED_BY";
};
export type WorkflowAssignmentType = (typeof WorkflowAssignmentType)[keyof typeof WorkflowAssignmentType];
export declare const ApprovalDecisionType: {
    readonly APPROVED: "APPROVED";
    readonly RETURNED_FOR_CORRECTION: "RETURNED_FOR_CORRECTION";
};
export type ApprovalDecisionType = (typeof ApprovalDecisionType)[keyof typeof ApprovalDecisionType];
