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
export declare const DocumentVersionStatus: {
    readonly CURRENT: "CURRENT";
    readonly DRAFT: "DRAFT";
    readonly SUPERSEDED: "SUPERSEDED";
};
export type DocumentVersionStatus = (typeof DocumentVersionStatus)[keyof typeof DocumentVersionStatus];
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
export declare const ChangeRequestStatus: {
    readonly SUBMITTED: "SUBMITTED";
    readonly ACCEPTED_FOR_CHANGE: "ACCEPTED_FOR_CHANGE";
    readonly REJECTED: "REJECTED";
    readonly INCORPORATED: "INCORPORATED";
};
export type ChangeRequestStatus = (typeof ChangeRequestStatus)[keyof typeof ChangeRequestStatus];
export declare const PeriodicReviewOutcome: {
    readonly REMAINS_VALID: "REMAINS_VALID";
    readonly REVISION_REQUIRED: "REVISION_REQUIRED";
    readonly RETIRED: "RETIRED";
    readonly RETURNED_FOR_CLARIFICATION: "RETURNED_FOR_CLARIFICATION";
};
export type PeriodicReviewOutcome = (typeof PeriodicReviewOutcome)[keyof typeof PeriodicReviewOutcome];
