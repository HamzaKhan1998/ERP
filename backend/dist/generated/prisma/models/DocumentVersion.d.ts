import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DocumentVersionModel = runtime.Types.Result.DefaultSelection<Prisma.$DocumentVersionPayload>;
export type AggregateDocumentVersion = {
    _count: DocumentVersionCountAggregateOutputType | null;
    _avg: DocumentVersionAvgAggregateOutputType | null;
    _sum: DocumentVersionSumAggregateOutputType | null;
    _min: DocumentVersionMinAggregateOutputType | null;
    _max: DocumentVersionMaxAggregateOutputType | null;
};
export type DocumentVersionAvgAggregateOutputType = {
    revisionNumber: number | null;
};
export type DocumentVersionSumAggregateOutputType = {
    revisionNumber: number | null;
};
export type DocumentVersionMinAggregateOutputType = {
    id: string | null;
    documentId: string | null;
    versionLabel: string | null;
    revisionNumber: number | null;
    effectiveDate: Date | null;
    nextReviewDate: Date | null;
    purpose: string | null;
    scope: string | null;
    responsibilities: string | null;
    procedureContent: string | null;
    recordsDescription: string | null;
    relatedDocuments: string | null;
    complianceNote: string | null;
    createdAt: Date | null;
};
export type DocumentVersionMaxAggregateOutputType = {
    id: string | null;
    documentId: string | null;
    versionLabel: string | null;
    revisionNumber: number | null;
    effectiveDate: Date | null;
    nextReviewDate: Date | null;
    purpose: string | null;
    scope: string | null;
    responsibilities: string | null;
    procedureContent: string | null;
    recordsDescription: string | null;
    relatedDocuments: string | null;
    complianceNote: string | null;
    createdAt: Date | null;
};
export type DocumentVersionCountAggregateOutputType = {
    id: number;
    documentId: number;
    versionLabel: number;
    revisionNumber: number;
    effectiveDate: number;
    nextReviewDate: number;
    purpose: number;
    scope: number;
    responsibilities: number;
    procedureContent: number;
    recordsDescription: number;
    relatedDocuments: number;
    complianceNote: number;
    createdAt: number;
    _all: number;
};
export type DocumentVersionAvgAggregateInputType = {
    revisionNumber?: true;
};
export type DocumentVersionSumAggregateInputType = {
    revisionNumber?: true;
};
export type DocumentVersionMinAggregateInputType = {
    id?: true;
    documentId?: true;
    versionLabel?: true;
    revisionNumber?: true;
    effectiveDate?: true;
    nextReviewDate?: true;
    purpose?: true;
    scope?: true;
    responsibilities?: true;
    procedureContent?: true;
    recordsDescription?: true;
    relatedDocuments?: true;
    complianceNote?: true;
    createdAt?: true;
};
export type DocumentVersionMaxAggregateInputType = {
    id?: true;
    documentId?: true;
    versionLabel?: true;
    revisionNumber?: true;
    effectiveDate?: true;
    nextReviewDate?: true;
    purpose?: true;
    scope?: true;
    responsibilities?: true;
    procedureContent?: true;
    recordsDescription?: true;
    relatedDocuments?: true;
    complianceNote?: true;
    createdAt?: true;
};
export type DocumentVersionCountAggregateInputType = {
    id?: true;
    documentId?: true;
    versionLabel?: true;
    revisionNumber?: true;
    effectiveDate?: true;
    nextReviewDate?: true;
    purpose?: true;
    scope?: true;
    responsibilities?: true;
    procedureContent?: true;
    recordsDescription?: true;
    relatedDocuments?: true;
    complianceNote?: true;
    createdAt?: true;
    _all?: true;
};
export type DocumentVersionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentVersionWhereInput;
    orderBy?: Prisma.DocumentVersionOrderByWithRelationInput | Prisma.DocumentVersionOrderByWithRelationInput[];
    cursor?: Prisma.DocumentVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DocumentVersionCountAggregateInputType;
    _avg?: DocumentVersionAvgAggregateInputType;
    _sum?: DocumentVersionSumAggregateInputType;
    _min?: DocumentVersionMinAggregateInputType;
    _max?: DocumentVersionMaxAggregateInputType;
};
export type GetDocumentVersionAggregateType<T extends DocumentVersionAggregateArgs> = {
    [P in keyof T & keyof AggregateDocumentVersion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDocumentVersion[P]> : Prisma.GetScalarType<T[P], AggregateDocumentVersion[P]>;
};
export type DocumentVersionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentVersionWhereInput;
    orderBy?: Prisma.DocumentVersionOrderByWithAggregationInput | Prisma.DocumentVersionOrderByWithAggregationInput[];
    by: Prisma.DocumentVersionScalarFieldEnum[] | Prisma.DocumentVersionScalarFieldEnum;
    having?: Prisma.DocumentVersionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentVersionCountAggregateInputType | true;
    _avg?: DocumentVersionAvgAggregateInputType;
    _sum?: DocumentVersionSumAggregateInputType;
    _min?: DocumentVersionMinAggregateInputType;
    _max?: DocumentVersionMaxAggregateInputType;
};
export type DocumentVersionGroupByOutputType = {
    id: string;
    documentId: string;
    versionLabel: string;
    revisionNumber: number;
    effectiveDate: Date | null;
    nextReviewDate: Date | null;
    purpose: string | null;
    scope: string | null;
    responsibilities: string | null;
    procedureContent: string | null;
    recordsDescription: string | null;
    relatedDocuments: string | null;
    complianceNote: string | null;
    createdAt: Date;
    _count: DocumentVersionCountAggregateOutputType | null;
    _avg: DocumentVersionAvgAggregateOutputType | null;
    _sum: DocumentVersionSumAggregateOutputType | null;
    _min: DocumentVersionMinAggregateOutputType | null;
    _max: DocumentVersionMaxAggregateOutputType | null;
};
export type GetDocumentVersionGroupByPayload<T extends DocumentVersionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DocumentVersionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DocumentVersionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DocumentVersionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DocumentVersionGroupByOutputType[P]>;
}>>;
export type DocumentVersionWhereInput = {
    AND?: Prisma.DocumentVersionWhereInput | Prisma.DocumentVersionWhereInput[];
    OR?: Prisma.DocumentVersionWhereInput[];
    NOT?: Prisma.DocumentVersionWhereInput | Prisma.DocumentVersionWhereInput[];
    id?: Prisma.StringFilter<"DocumentVersion"> | string;
    documentId?: Prisma.StringFilter<"DocumentVersion"> | string;
    versionLabel?: Prisma.StringFilter<"DocumentVersion"> | string;
    revisionNumber?: Prisma.IntFilter<"DocumentVersion"> | number;
    effectiveDate?: Prisma.DateTimeNullableFilter<"DocumentVersion"> | Date | string | null;
    nextReviewDate?: Prisma.DateTimeNullableFilter<"DocumentVersion"> | Date | string | null;
    purpose?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    scope?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    responsibilities?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    procedureContent?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    recordsDescription?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    relatedDocuments?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    complianceNote?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DocumentVersion"> | Date | string;
    document?: Prisma.XOR<Prisma.DocumentScalarRelationFilter, Prisma.DocumentWhereInput>;
    assignments?: Prisma.WorkflowAssignmentListRelationFilter;
    approvals?: Prisma.ApprovalDecisionListRelationFilter;
    complianceRefs?: Prisma.ComplianceReferenceListRelationFilter;
    revisionHistory?: Prisma.RevisionHistoryListRelationFilter;
};
export type DocumentVersionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    versionLabel?: Prisma.SortOrder;
    revisionNumber?: Prisma.SortOrder;
    effectiveDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    nextReviewDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    purpose?: Prisma.SortOrderInput | Prisma.SortOrder;
    scope?: Prisma.SortOrderInput | Prisma.SortOrder;
    responsibilities?: Prisma.SortOrderInput | Prisma.SortOrder;
    procedureContent?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordsDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    relatedDocuments?: Prisma.SortOrderInput | Prisma.SortOrder;
    complianceNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    document?: Prisma.DocumentOrderByWithRelationInput;
    assignments?: Prisma.WorkflowAssignmentOrderByRelationAggregateInput;
    approvals?: Prisma.ApprovalDecisionOrderByRelationAggregateInput;
    complianceRefs?: Prisma.ComplianceReferenceOrderByRelationAggregateInput;
    revisionHistory?: Prisma.RevisionHistoryOrderByRelationAggregateInput;
};
export type DocumentVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    documentId_revisionNumber?: Prisma.DocumentVersionDocumentIdRevisionNumberCompoundUniqueInput;
    AND?: Prisma.DocumentVersionWhereInput | Prisma.DocumentVersionWhereInput[];
    OR?: Prisma.DocumentVersionWhereInput[];
    NOT?: Prisma.DocumentVersionWhereInput | Prisma.DocumentVersionWhereInput[];
    documentId?: Prisma.StringFilter<"DocumentVersion"> | string;
    versionLabel?: Prisma.StringFilter<"DocumentVersion"> | string;
    revisionNumber?: Prisma.IntFilter<"DocumentVersion"> | number;
    effectiveDate?: Prisma.DateTimeNullableFilter<"DocumentVersion"> | Date | string | null;
    nextReviewDate?: Prisma.DateTimeNullableFilter<"DocumentVersion"> | Date | string | null;
    purpose?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    scope?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    responsibilities?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    procedureContent?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    recordsDescription?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    relatedDocuments?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    complianceNote?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DocumentVersion"> | Date | string;
    document?: Prisma.XOR<Prisma.DocumentScalarRelationFilter, Prisma.DocumentWhereInput>;
    assignments?: Prisma.WorkflowAssignmentListRelationFilter;
    approvals?: Prisma.ApprovalDecisionListRelationFilter;
    complianceRefs?: Prisma.ComplianceReferenceListRelationFilter;
    revisionHistory?: Prisma.RevisionHistoryListRelationFilter;
}, "id" | "documentId_revisionNumber">;
export type DocumentVersionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    versionLabel?: Prisma.SortOrder;
    revisionNumber?: Prisma.SortOrder;
    effectiveDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    nextReviewDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    purpose?: Prisma.SortOrderInput | Prisma.SortOrder;
    scope?: Prisma.SortOrderInput | Prisma.SortOrder;
    responsibilities?: Prisma.SortOrderInput | Prisma.SortOrder;
    procedureContent?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordsDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    relatedDocuments?: Prisma.SortOrderInput | Prisma.SortOrder;
    complianceNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DocumentVersionCountOrderByAggregateInput;
    _avg?: Prisma.DocumentVersionAvgOrderByAggregateInput;
    _max?: Prisma.DocumentVersionMaxOrderByAggregateInput;
    _min?: Prisma.DocumentVersionMinOrderByAggregateInput;
    _sum?: Prisma.DocumentVersionSumOrderByAggregateInput;
};
export type DocumentVersionScalarWhereWithAggregatesInput = {
    AND?: Prisma.DocumentVersionScalarWhereWithAggregatesInput | Prisma.DocumentVersionScalarWhereWithAggregatesInput[];
    OR?: Prisma.DocumentVersionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DocumentVersionScalarWhereWithAggregatesInput | Prisma.DocumentVersionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DocumentVersion"> | string;
    documentId?: Prisma.StringWithAggregatesFilter<"DocumentVersion"> | string;
    versionLabel?: Prisma.StringWithAggregatesFilter<"DocumentVersion"> | string;
    revisionNumber?: Prisma.IntWithAggregatesFilter<"DocumentVersion"> | number;
    effectiveDate?: Prisma.DateTimeNullableWithAggregatesFilter<"DocumentVersion"> | Date | string | null;
    nextReviewDate?: Prisma.DateTimeNullableWithAggregatesFilter<"DocumentVersion"> | Date | string | null;
    purpose?: Prisma.StringNullableWithAggregatesFilter<"DocumentVersion"> | string | null;
    scope?: Prisma.StringNullableWithAggregatesFilter<"DocumentVersion"> | string | null;
    responsibilities?: Prisma.StringNullableWithAggregatesFilter<"DocumentVersion"> | string | null;
    procedureContent?: Prisma.StringNullableWithAggregatesFilter<"DocumentVersion"> | string | null;
    recordsDescription?: Prisma.StringNullableWithAggregatesFilter<"DocumentVersion"> | string | null;
    relatedDocuments?: Prisma.StringNullableWithAggregatesFilter<"DocumentVersion"> | string | null;
    complianceNote?: Prisma.StringNullableWithAggregatesFilter<"DocumentVersion"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DocumentVersion"> | Date | string;
};
export type DocumentVersionCreateInput = {
    id?: string;
    versionLabel: string;
    revisionNumber: number;
    effectiveDate?: Date | string | null;
    nextReviewDate?: Date | string | null;
    purpose?: string | null;
    scope?: string | null;
    responsibilities?: string | null;
    procedureContent?: string | null;
    recordsDescription?: string | null;
    relatedDocuments?: string | null;
    complianceNote?: string | null;
    createdAt?: Date | string;
    document: Prisma.DocumentCreateNestedOneWithoutVersionsInput;
    assignments?: Prisma.WorkflowAssignmentCreateNestedManyWithoutVersionInput;
    approvals?: Prisma.ApprovalDecisionCreateNestedManyWithoutVersionInput;
    complianceRefs?: Prisma.ComplianceReferenceCreateNestedManyWithoutVersionInput;
    revisionHistory?: Prisma.RevisionHistoryCreateNestedManyWithoutVersionInput;
};
export type DocumentVersionUncheckedCreateInput = {
    id?: string;
    documentId: string;
    versionLabel: string;
    revisionNumber: number;
    effectiveDate?: Date | string | null;
    nextReviewDate?: Date | string | null;
    purpose?: string | null;
    scope?: string | null;
    responsibilities?: string | null;
    procedureContent?: string | null;
    recordsDescription?: string | null;
    relatedDocuments?: string | null;
    complianceNote?: string | null;
    createdAt?: Date | string;
    assignments?: Prisma.WorkflowAssignmentUncheckedCreateNestedManyWithoutVersionInput;
    approvals?: Prisma.ApprovalDecisionUncheckedCreateNestedManyWithoutVersionInput;
    complianceRefs?: Prisma.ComplianceReferenceUncheckedCreateNestedManyWithoutVersionInput;
    revisionHistory?: Prisma.RevisionHistoryUncheckedCreateNestedManyWithoutVersionInput;
};
export type DocumentVersionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibilities?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    procedureContent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordsDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedDocuments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.DocumentUpdateOneRequiredWithoutVersionsNestedInput;
    assignments?: Prisma.WorkflowAssignmentUpdateManyWithoutVersionNestedInput;
    approvals?: Prisma.ApprovalDecisionUpdateManyWithoutVersionNestedInput;
    complianceRefs?: Prisma.ComplianceReferenceUpdateManyWithoutVersionNestedInput;
    revisionHistory?: Prisma.RevisionHistoryUpdateManyWithoutVersionNestedInput;
};
export type DocumentVersionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibilities?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    procedureContent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordsDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedDocuments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.WorkflowAssignmentUncheckedUpdateManyWithoutVersionNestedInput;
    approvals?: Prisma.ApprovalDecisionUncheckedUpdateManyWithoutVersionNestedInput;
    complianceRefs?: Prisma.ComplianceReferenceUncheckedUpdateManyWithoutVersionNestedInput;
    revisionHistory?: Prisma.RevisionHistoryUncheckedUpdateManyWithoutVersionNestedInput;
};
export type DocumentVersionCreateManyInput = {
    id?: string;
    documentId: string;
    versionLabel: string;
    revisionNumber: number;
    effectiveDate?: Date | string | null;
    nextReviewDate?: Date | string | null;
    purpose?: string | null;
    scope?: string | null;
    responsibilities?: string | null;
    procedureContent?: string | null;
    recordsDescription?: string | null;
    relatedDocuments?: string | null;
    complianceNote?: string | null;
    createdAt?: Date | string;
};
export type DocumentVersionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibilities?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    procedureContent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordsDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedDocuments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentVersionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibilities?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    procedureContent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordsDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedDocuments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentVersionListRelationFilter = {
    every?: Prisma.DocumentVersionWhereInput;
    some?: Prisma.DocumentVersionWhereInput;
    none?: Prisma.DocumentVersionWhereInput;
};
export type DocumentVersionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DocumentVersionDocumentIdRevisionNumberCompoundUniqueInput = {
    documentId: string;
    revisionNumber: number;
};
export type DocumentVersionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    versionLabel?: Prisma.SortOrder;
    revisionNumber?: Prisma.SortOrder;
    effectiveDate?: Prisma.SortOrder;
    nextReviewDate?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    responsibilities?: Prisma.SortOrder;
    procedureContent?: Prisma.SortOrder;
    recordsDescription?: Prisma.SortOrder;
    relatedDocuments?: Prisma.SortOrder;
    complianceNote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DocumentVersionAvgOrderByAggregateInput = {
    revisionNumber?: Prisma.SortOrder;
};
export type DocumentVersionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    versionLabel?: Prisma.SortOrder;
    revisionNumber?: Prisma.SortOrder;
    effectiveDate?: Prisma.SortOrder;
    nextReviewDate?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    responsibilities?: Prisma.SortOrder;
    procedureContent?: Prisma.SortOrder;
    recordsDescription?: Prisma.SortOrder;
    relatedDocuments?: Prisma.SortOrder;
    complianceNote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DocumentVersionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    versionLabel?: Prisma.SortOrder;
    revisionNumber?: Prisma.SortOrder;
    effectiveDate?: Prisma.SortOrder;
    nextReviewDate?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    responsibilities?: Prisma.SortOrder;
    procedureContent?: Prisma.SortOrder;
    recordsDescription?: Prisma.SortOrder;
    relatedDocuments?: Prisma.SortOrder;
    complianceNote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DocumentVersionSumOrderByAggregateInput = {
    revisionNumber?: Prisma.SortOrder;
};
export type DocumentVersionScalarRelationFilter = {
    is?: Prisma.DocumentVersionWhereInput;
    isNot?: Prisma.DocumentVersionWhereInput;
};
export type DocumentVersionCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.DocumentVersionCreateWithoutDocumentInput, Prisma.DocumentVersionUncheckedCreateWithoutDocumentInput> | Prisma.DocumentVersionCreateWithoutDocumentInput[] | Prisma.DocumentVersionUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.DocumentVersionCreateOrConnectWithoutDocumentInput | Prisma.DocumentVersionCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.DocumentVersionCreateManyDocumentInputEnvelope;
    connect?: Prisma.DocumentVersionWhereUniqueInput | Prisma.DocumentVersionWhereUniqueInput[];
};
export type DocumentVersionUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.DocumentVersionCreateWithoutDocumentInput, Prisma.DocumentVersionUncheckedCreateWithoutDocumentInput> | Prisma.DocumentVersionCreateWithoutDocumentInput[] | Prisma.DocumentVersionUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.DocumentVersionCreateOrConnectWithoutDocumentInput | Prisma.DocumentVersionCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.DocumentVersionCreateManyDocumentInputEnvelope;
    connect?: Prisma.DocumentVersionWhereUniqueInput | Prisma.DocumentVersionWhereUniqueInput[];
};
export type DocumentVersionUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentVersionCreateWithoutDocumentInput, Prisma.DocumentVersionUncheckedCreateWithoutDocumentInput> | Prisma.DocumentVersionCreateWithoutDocumentInput[] | Prisma.DocumentVersionUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.DocumentVersionCreateOrConnectWithoutDocumentInput | Prisma.DocumentVersionCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.DocumentVersionUpsertWithWhereUniqueWithoutDocumentInput | Prisma.DocumentVersionUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.DocumentVersionCreateManyDocumentInputEnvelope;
    set?: Prisma.DocumentVersionWhereUniqueInput | Prisma.DocumentVersionWhereUniqueInput[];
    disconnect?: Prisma.DocumentVersionWhereUniqueInput | Prisma.DocumentVersionWhereUniqueInput[];
    delete?: Prisma.DocumentVersionWhereUniqueInput | Prisma.DocumentVersionWhereUniqueInput[];
    connect?: Prisma.DocumentVersionWhereUniqueInput | Prisma.DocumentVersionWhereUniqueInput[];
    update?: Prisma.DocumentVersionUpdateWithWhereUniqueWithoutDocumentInput | Prisma.DocumentVersionUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.DocumentVersionUpdateManyWithWhereWithoutDocumentInput | Prisma.DocumentVersionUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.DocumentVersionScalarWhereInput | Prisma.DocumentVersionScalarWhereInput[];
};
export type DocumentVersionUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentVersionCreateWithoutDocumentInput, Prisma.DocumentVersionUncheckedCreateWithoutDocumentInput> | Prisma.DocumentVersionCreateWithoutDocumentInput[] | Prisma.DocumentVersionUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.DocumentVersionCreateOrConnectWithoutDocumentInput | Prisma.DocumentVersionCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.DocumentVersionUpsertWithWhereUniqueWithoutDocumentInput | Prisma.DocumentVersionUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.DocumentVersionCreateManyDocumentInputEnvelope;
    set?: Prisma.DocumentVersionWhereUniqueInput | Prisma.DocumentVersionWhereUniqueInput[];
    disconnect?: Prisma.DocumentVersionWhereUniqueInput | Prisma.DocumentVersionWhereUniqueInput[];
    delete?: Prisma.DocumentVersionWhereUniqueInput | Prisma.DocumentVersionWhereUniqueInput[];
    connect?: Prisma.DocumentVersionWhereUniqueInput | Prisma.DocumentVersionWhereUniqueInput[];
    update?: Prisma.DocumentVersionUpdateWithWhereUniqueWithoutDocumentInput | Prisma.DocumentVersionUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.DocumentVersionUpdateManyWithWhereWithoutDocumentInput | Prisma.DocumentVersionUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.DocumentVersionScalarWhereInput | Prisma.DocumentVersionScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DocumentVersionCreateNestedOneWithoutAssignmentsInput = {
    create?: Prisma.XOR<Prisma.DocumentVersionCreateWithoutAssignmentsInput, Prisma.DocumentVersionUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.DocumentVersionCreateOrConnectWithoutAssignmentsInput;
    connect?: Prisma.DocumentVersionWhereUniqueInput;
};
export type DocumentVersionUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentVersionCreateWithoutAssignmentsInput, Prisma.DocumentVersionUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.DocumentVersionCreateOrConnectWithoutAssignmentsInput;
    upsert?: Prisma.DocumentVersionUpsertWithoutAssignmentsInput;
    connect?: Prisma.DocumentVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DocumentVersionUpdateToOneWithWhereWithoutAssignmentsInput, Prisma.DocumentVersionUpdateWithoutAssignmentsInput>, Prisma.DocumentVersionUncheckedUpdateWithoutAssignmentsInput>;
};
export type DocumentVersionCreateNestedOneWithoutApprovalsInput = {
    create?: Prisma.XOR<Prisma.DocumentVersionCreateWithoutApprovalsInput, Prisma.DocumentVersionUncheckedCreateWithoutApprovalsInput>;
    connectOrCreate?: Prisma.DocumentVersionCreateOrConnectWithoutApprovalsInput;
    connect?: Prisma.DocumentVersionWhereUniqueInput;
};
export type DocumentVersionUpdateOneRequiredWithoutApprovalsNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentVersionCreateWithoutApprovalsInput, Prisma.DocumentVersionUncheckedCreateWithoutApprovalsInput>;
    connectOrCreate?: Prisma.DocumentVersionCreateOrConnectWithoutApprovalsInput;
    upsert?: Prisma.DocumentVersionUpsertWithoutApprovalsInput;
    connect?: Prisma.DocumentVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DocumentVersionUpdateToOneWithWhereWithoutApprovalsInput, Prisma.DocumentVersionUpdateWithoutApprovalsInput>, Prisma.DocumentVersionUncheckedUpdateWithoutApprovalsInput>;
};
export type DocumentVersionCreateNestedOneWithoutComplianceRefsInput = {
    create?: Prisma.XOR<Prisma.DocumentVersionCreateWithoutComplianceRefsInput, Prisma.DocumentVersionUncheckedCreateWithoutComplianceRefsInput>;
    connectOrCreate?: Prisma.DocumentVersionCreateOrConnectWithoutComplianceRefsInput;
    connect?: Prisma.DocumentVersionWhereUniqueInput;
};
export type DocumentVersionUpdateOneRequiredWithoutComplianceRefsNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentVersionCreateWithoutComplianceRefsInput, Prisma.DocumentVersionUncheckedCreateWithoutComplianceRefsInput>;
    connectOrCreate?: Prisma.DocumentVersionCreateOrConnectWithoutComplianceRefsInput;
    upsert?: Prisma.DocumentVersionUpsertWithoutComplianceRefsInput;
    connect?: Prisma.DocumentVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DocumentVersionUpdateToOneWithWhereWithoutComplianceRefsInput, Prisma.DocumentVersionUpdateWithoutComplianceRefsInput>, Prisma.DocumentVersionUncheckedUpdateWithoutComplianceRefsInput>;
};
export type DocumentVersionCreateNestedOneWithoutRevisionHistoryInput = {
    create?: Prisma.XOR<Prisma.DocumentVersionCreateWithoutRevisionHistoryInput, Prisma.DocumentVersionUncheckedCreateWithoutRevisionHistoryInput>;
    connectOrCreate?: Prisma.DocumentVersionCreateOrConnectWithoutRevisionHistoryInput;
    connect?: Prisma.DocumentVersionWhereUniqueInput;
};
export type DocumentVersionUpdateOneRequiredWithoutRevisionHistoryNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentVersionCreateWithoutRevisionHistoryInput, Prisma.DocumentVersionUncheckedCreateWithoutRevisionHistoryInput>;
    connectOrCreate?: Prisma.DocumentVersionCreateOrConnectWithoutRevisionHistoryInput;
    upsert?: Prisma.DocumentVersionUpsertWithoutRevisionHistoryInput;
    connect?: Prisma.DocumentVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DocumentVersionUpdateToOneWithWhereWithoutRevisionHistoryInput, Prisma.DocumentVersionUpdateWithoutRevisionHistoryInput>, Prisma.DocumentVersionUncheckedUpdateWithoutRevisionHistoryInput>;
};
export type DocumentVersionCreateWithoutDocumentInput = {
    id?: string;
    versionLabel: string;
    revisionNumber: number;
    effectiveDate?: Date | string | null;
    nextReviewDate?: Date | string | null;
    purpose?: string | null;
    scope?: string | null;
    responsibilities?: string | null;
    procedureContent?: string | null;
    recordsDescription?: string | null;
    relatedDocuments?: string | null;
    complianceNote?: string | null;
    createdAt?: Date | string;
    assignments?: Prisma.WorkflowAssignmentCreateNestedManyWithoutVersionInput;
    approvals?: Prisma.ApprovalDecisionCreateNestedManyWithoutVersionInput;
    complianceRefs?: Prisma.ComplianceReferenceCreateNestedManyWithoutVersionInput;
    revisionHistory?: Prisma.RevisionHistoryCreateNestedManyWithoutVersionInput;
};
export type DocumentVersionUncheckedCreateWithoutDocumentInput = {
    id?: string;
    versionLabel: string;
    revisionNumber: number;
    effectiveDate?: Date | string | null;
    nextReviewDate?: Date | string | null;
    purpose?: string | null;
    scope?: string | null;
    responsibilities?: string | null;
    procedureContent?: string | null;
    recordsDescription?: string | null;
    relatedDocuments?: string | null;
    complianceNote?: string | null;
    createdAt?: Date | string;
    assignments?: Prisma.WorkflowAssignmentUncheckedCreateNestedManyWithoutVersionInput;
    approvals?: Prisma.ApprovalDecisionUncheckedCreateNestedManyWithoutVersionInput;
    complianceRefs?: Prisma.ComplianceReferenceUncheckedCreateNestedManyWithoutVersionInput;
    revisionHistory?: Prisma.RevisionHistoryUncheckedCreateNestedManyWithoutVersionInput;
};
export type DocumentVersionCreateOrConnectWithoutDocumentInput = {
    where: Prisma.DocumentVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentVersionCreateWithoutDocumentInput, Prisma.DocumentVersionUncheckedCreateWithoutDocumentInput>;
};
export type DocumentVersionCreateManyDocumentInputEnvelope = {
    data: Prisma.DocumentVersionCreateManyDocumentInput | Prisma.DocumentVersionCreateManyDocumentInput[];
    skipDuplicates?: boolean;
};
export type DocumentVersionUpsertWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.DocumentVersionWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentVersionUpdateWithoutDocumentInput, Prisma.DocumentVersionUncheckedUpdateWithoutDocumentInput>;
    create: Prisma.XOR<Prisma.DocumentVersionCreateWithoutDocumentInput, Prisma.DocumentVersionUncheckedCreateWithoutDocumentInput>;
};
export type DocumentVersionUpdateWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.DocumentVersionWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentVersionUpdateWithoutDocumentInput, Prisma.DocumentVersionUncheckedUpdateWithoutDocumentInput>;
};
export type DocumentVersionUpdateManyWithWhereWithoutDocumentInput = {
    where: Prisma.DocumentVersionScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentVersionUpdateManyMutationInput, Prisma.DocumentVersionUncheckedUpdateManyWithoutDocumentInput>;
};
export type DocumentVersionScalarWhereInput = {
    AND?: Prisma.DocumentVersionScalarWhereInput | Prisma.DocumentVersionScalarWhereInput[];
    OR?: Prisma.DocumentVersionScalarWhereInput[];
    NOT?: Prisma.DocumentVersionScalarWhereInput | Prisma.DocumentVersionScalarWhereInput[];
    id?: Prisma.StringFilter<"DocumentVersion"> | string;
    documentId?: Prisma.StringFilter<"DocumentVersion"> | string;
    versionLabel?: Prisma.StringFilter<"DocumentVersion"> | string;
    revisionNumber?: Prisma.IntFilter<"DocumentVersion"> | number;
    effectiveDate?: Prisma.DateTimeNullableFilter<"DocumentVersion"> | Date | string | null;
    nextReviewDate?: Prisma.DateTimeNullableFilter<"DocumentVersion"> | Date | string | null;
    purpose?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    scope?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    responsibilities?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    procedureContent?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    recordsDescription?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    relatedDocuments?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    complianceNote?: Prisma.StringNullableFilter<"DocumentVersion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DocumentVersion"> | Date | string;
};
export type DocumentVersionCreateWithoutAssignmentsInput = {
    id?: string;
    versionLabel: string;
    revisionNumber: number;
    effectiveDate?: Date | string | null;
    nextReviewDate?: Date | string | null;
    purpose?: string | null;
    scope?: string | null;
    responsibilities?: string | null;
    procedureContent?: string | null;
    recordsDescription?: string | null;
    relatedDocuments?: string | null;
    complianceNote?: string | null;
    createdAt?: Date | string;
    document: Prisma.DocumentCreateNestedOneWithoutVersionsInput;
    approvals?: Prisma.ApprovalDecisionCreateNestedManyWithoutVersionInput;
    complianceRefs?: Prisma.ComplianceReferenceCreateNestedManyWithoutVersionInput;
    revisionHistory?: Prisma.RevisionHistoryCreateNestedManyWithoutVersionInput;
};
export type DocumentVersionUncheckedCreateWithoutAssignmentsInput = {
    id?: string;
    documentId: string;
    versionLabel: string;
    revisionNumber: number;
    effectiveDate?: Date | string | null;
    nextReviewDate?: Date | string | null;
    purpose?: string | null;
    scope?: string | null;
    responsibilities?: string | null;
    procedureContent?: string | null;
    recordsDescription?: string | null;
    relatedDocuments?: string | null;
    complianceNote?: string | null;
    createdAt?: Date | string;
    approvals?: Prisma.ApprovalDecisionUncheckedCreateNestedManyWithoutVersionInput;
    complianceRefs?: Prisma.ComplianceReferenceUncheckedCreateNestedManyWithoutVersionInput;
    revisionHistory?: Prisma.RevisionHistoryUncheckedCreateNestedManyWithoutVersionInput;
};
export type DocumentVersionCreateOrConnectWithoutAssignmentsInput = {
    where: Prisma.DocumentVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentVersionCreateWithoutAssignmentsInput, Prisma.DocumentVersionUncheckedCreateWithoutAssignmentsInput>;
};
export type DocumentVersionUpsertWithoutAssignmentsInput = {
    update: Prisma.XOR<Prisma.DocumentVersionUpdateWithoutAssignmentsInput, Prisma.DocumentVersionUncheckedUpdateWithoutAssignmentsInput>;
    create: Prisma.XOR<Prisma.DocumentVersionCreateWithoutAssignmentsInput, Prisma.DocumentVersionUncheckedCreateWithoutAssignmentsInput>;
    where?: Prisma.DocumentVersionWhereInput;
};
export type DocumentVersionUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: Prisma.DocumentVersionWhereInput;
    data: Prisma.XOR<Prisma.DocumentVersionUpdateWithoutAssignmentsInput, Prisma.DocumentVersionUncheckedUpdateWithoutAssignmentsInput>;
};
export type DocumentVersionUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibilities?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    procedureContent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordsDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedDocuments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.DocumentUpdateOneRequiredWithoutVersionsNestedInput;
    approvals?: Prisma.ApprovalDecisionUpdateManyWithoutVersionNestedInput;
    complianceRefs?: Prisma.ComplianceReferenceUpdateManyWithoutVersionNestedInput;
    revisionHistory?: Prisma.RevisionHistoryUpdateManyWithoutVersionNestedInput;
};
export type DocumentVersionUncheckedUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibilities?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    procedureContent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordsDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedDocuments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvals?: Prisma.ApprovalDecisionUncheckedUpdateManyWithoutVersionNestedInput;
    complianceRefs?: Prisma.ComplianceReferenceUncheckedUpdateManyWithoutVersionNestedInput;
    revisionHistory?: Prisma.RevisionHistoryUncheckedUpdateManyWithoutVersionNestedInput;
};
export type DocumentVersionCreateWithoutApprovalsInput = {
    id?: string;
    versionLabel: string;
    revisionNumber: number;
    effectiveDate?: Date | string | null;
    nextReviewDate?: Date | string | null;
    purpose?: string | null;
    scope?: string | null;
    responsibilities?: string | null;
    procedureContent?: string | null;
    recordsDescription?: string | null;
    relatedDocuments?: string | null;
    complianceNote?: string | null;
    createdAt?: Date | string;
    document: Prisma.DocumentCreateNestedOneWithoutVersionsInput;
    assignments?: Prisma.WorkflowAssignmentCreateNestedManyWithoutVersionInput;
    complianceRefs?: Prisma.ComplianceReferenceCreateNestedManyWithoutVersionInput;
    revisionHistory?: Prisma.RevisionHistoryCreateNestedManyWithoutVersionInput;
};
export type DocumentVersionUncheckedCreateWithoutApprovalsInput = {
    id?: string;
    documentId: string;
    versionLabel: string;
    revisionNumber: number;
    effectiveDate?: Date | string | null;
    nextReviewDate?: Date | string | null;
    purpose?: string | null;
    scope?: string | null;
    responsibilities?: string | null;
    procedureContent?: string | null;
    recordsDescription?: string | null;
    relatedDocuments?: string | null;
    complianceNote?: string | null;
    createdAt?: Date | string;
    assignments?: Prisma.WorkflowAssignmentUncheckedCreateNestedManyWithoutVersionInput;
    complianceRefs?: Prisma.ComplianceReferenceUncheckedCreateNestedManyWithoutVersionInput;
    revisionHistory?: Prisma.RevisionHistoryUncheckedCreateNestedManyWithoutVersionInput;
};
export type DocumentVersionCreateOrConnectWithoutApprovalsInput = {
    where: Prisma.DocumentVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentVersionCreateWithoutApprovalsInput, Prisma.DocumentVersionUncheckedCreateWithoutApprovalsInput>;
};
export type DocumentVersionUpsertWithoutApprovalsInput = {
    update: Prisma.XOR<Prisma.DocumentVersionUpdateWithoutApprovalsInput, Prisma.DocumentVersionUncheckedUpdateWithoutApprovalsInput>;
    create: Prisma.XOR<Prisma.DocumentVersionCreateWithoutApprovalsInput, Prisma.DocumentVersionUncheckedCreateWithoutApprovalsInput>;
    where?: Prisma.DocumentVersionWhereInput;
};
export type DocumentVersionUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: Prisma.DocumentVersionWhereInput;
    data: Prisma.XOR<Prisma.DocumentVersionUpdateWithoutApprovalsInput, Prisma.DocumentVersionUncheckedUpdateWithoutApprovalsInput>;
};
export type DocumentVersionUpdateWithoutApprovalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibilities?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    procedureContent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordsDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedDocuments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.DocumentUpdateOneRequiredWithoutVersionsNestedInput;
    assignments?: Prisma.WorkflowAssignmentUpdateManyWithoutVersionNestedInput;
    complianceRefs?: Prisma.ComplianceReferenceUpdateManyWithoutVersionNestedInput;
    revisionHistory?: Prisma.RevisionHistoryUpdateManyWithoutVersionNestedInput;
};
export type DocumentVersionUncheckedUpdateWithoutApprovalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibilities?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    procedureContent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordsDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedDocuments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.WorkflowAssignmentUncheckedUpdateManyWithoutVersionNestedInput;
    complianceRefs?: Prisma.ComplianceReferenceUncheckedUpdateManyWithoutVersionNestedInput;
    revisionHistory?: Prisma.RevisionHistoryUncheckedUpdateManyWithoutVersionNestedInput;
};
export type DocumentVersionCreateWithoutComplianceRefsInput = {
    id?: string;
    versionLabel: string;
    revisionNumber: number;
    effectiveDate?: Date | string | null;
    nextReviewDate?: Date | string | null;
    purpose?: string | null;
    scope?: string | null;
    responsibilities?: string | null;
    procedureContent?: string | null;
    recordsDescription?: string | null;
    relatedDocuments?: string | null;
    complianceNote?: string | null;
    createdAt?: Date | string;
    document: Prisma.DocumentCreateNestedOneWithoutVersionsInput;
    assignments?: Prisma.WorkflowAssignmentCreateNestedManyWithoutVersionInput;
    approvals?: Prisma.ApprovalDecisionCreateNestedManyWithoutVersionInput;
    revisionHistory?: Prisma.RevisionHistoryCreateNestedManyWithoutVersionInput;
};
export type DocumentVersionUncheckedCreateWithoutComplianceRefsInput = {
    id?: string;
    documentId: string;
    versionLabel: string;
    revisionNumber: number;
    effectiveDate?: Date | string | null;
    nextReviewDate?: Date | string | null;
    purpose?: string | null;
    scope?: string | null;
    responsibilities?: string | null;
    procedureContent?: string | null;
    recordsDescription?: string | null;
    relatedDocuments?: string | null;
    complianceNote?: string | null;
    createdAt?: Date | string;
    assignments?: Prisma.WorkflowAssignmentUncheckedCreateNestedManyWithoutVersionInput;
    approvals?: Prisma.ApprovalDecisionUncheckedCreateNestedManyWithoutVersionInput;
    revisionHistory?: Prisma.RevisionHistoryUncheckedCreateNestedManyWithoutVersionInput;
};
export type DocumentVersionCreateOrConnectWithoutComplianceRefsInput = {
    where: Prisma.DocumentVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentVersionCreateWithoutComplianceRefsInput, Prisma.DocumentVersionUncheckedCreateWithoutComplianceRefsInput>;
};
export type DocumentVersionUpsertWithoutComplianceRefsInput = {
    update: Prisma.XOR<Prisma.DocumentVersionUpdateWithoutComplianceRefsInput, Prisma.DocumentVersionUncheckedUpdateWithoutComplianceRefsInput>;
    create: Prisma.XOR<Prisma.DocumentVersionCreateWithoutComplianceRefsInput, Prisma.DocumentVersionUncheckedCreateWithoutComplianceRefsInput>;
    where?: Prisma.DocumentVersionWhereInput;
};
export type DocumentVersionUpdateToOneWithWhereWithoutComplianceRefsInput = {
    where?: Prisma.DocumentVersionWhereInput;
    data: Prisma.XOR<Prisma.DocumentVersionUpdateWithoutComplianceRefsInput, Prisma.DocumentVersionUncheckedUpdateWithoutComplianceRefsInput>;
};
export type DocumentVersionUpdateWithoutComplianceRefsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibilities?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    procedureContent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordsDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedDocuments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.DocumentUpdateOneRequiredWithoutVersionsNestedInput;
    assignments?: Prisma.WorkflowAssignmentUpdateManyWithoutVersionNestedInput;
    approvals?: Prisma.ApprovalDecisionUpdateManyWithoutVersionNestedInput;
    revisionHistory?: Prisma.RevisionHistoryUpdateManyWithoutVersionNestedInput;
};
export type DocumentVersionUncheckedUpdateWithoutComplianceRefsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibilities?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    procedureContent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordsDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedDocuments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.WorkflowAssignmentUncheckedUpdateManyWithoutVersionNestedInput;
    approvals?: Prisma.ApprovalDecisionUncheckedUpdateManyWithoutVersionNestedInput;
    revisionHistory?: Prisma.RevisionHistoryUncheckedUpdateManyWithoutVersionNestedInput;
};
export type DocumentVersionCreateWithoutRevisionHistoryInput = {
    id?: string;
    versionLabel: string;
    revisionNumber: number;
    effectiveDate?: Date | string | null;
    nextReviewDate?: Date | string | null;
    purpose?: string | null;
    scope?: string | null;
    responsibilities?: string | null;
    procedureContent?: string | null;
    recordsDescription?: string | null;
    relatedDocuments?: string | null;
    complianceNote?: string | null;
    createdAt?: Date | string;
    document: Prisma.DocumentCreateNestedOneWithoutVersionsInput;
    assignments?: Prisma.WorkflowAssignmentCreateNestedManyWithoutVersionInput;
    approvals?: Prisma.ApprovalDecisionCreateNestedManyWithoutVersionInput;
    complianceRefs?: Prisma.ComplianceReferenceCreateNestedManyWithoutVersionInput;
};
export type DocumentVersionUncheckedCreateWithoutRevisionHistoryInput = {
    id?: string;
    documentId: string;
    versionLabel: string;
    revisionNumber: number;
    effectiveDate?: Date | string | null;
    nextReviewDate?: Date | string | null;
    purpose?: string | null;
    scope?: string | null;
    responsibilities?: string | null;
    procedureContent?: string | null;
    recordsDescription?: string | null;
    relatedDocuments?: string | null;
    complianceNote?: string | null;
    createdAt?: Date | string;
    assignments?: Prisma.WorkflowAssignmentUncheckedCreateNestedManyWithoutVersionInput;
    approvals?: Prisma.ApprovalDecisionUncheckedCreateNestedManyWithoutVersionInput;
    complianceRefs?: Prisma.ComplianceReferenceUncheckedCreateNestedManyWithoutVersionInput;
};
export type DocumentVersionCreateOrConnectWithoutRevisionHistoryInput = {
    where: Prisma.DocumentVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentVersionCreateWithoutRevisionHistoryInput, Prisma.DocumentVersionUncheckedCreateWithoutRevisionHistoryInput>;
};
export type DocumentVersionUpsertWithoutRevisionHistoryInput = {
    update: Prisma.XOR<Prisma.DocumentVersionUpdateWithoutRevisionHistoryInput, Prisma.DocumentVersionUncheckedUpdateWithoutRevisionHistoryInput>;
    create: Prisma.XOR<Prisma.DocumentVersionCreateWithoutRevisionHistoryInput, Prisma.DocumentVersionUncheckedCreateWithoutRevisionHistoryInput>;
    where?: Prisma.DocumentVersionWhereInput;
};
export type DocumentVersionUpdateToOneWithWhereWithoutRevisionHistoryInput = {
    where?: Prisma.DocumentVersionWhereInput;
    data: Prisma.XOR<Prisma.DocumentVersionUpdateWithoutRevisionHistoryInput, Prisma.DocumentVersionUncheckedUpdateWithoutRevisionHistoryInput>;
};
export type DocumentVersionUpdateWithoutRevisionHistoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibilities?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    procedureContent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordsDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedDocuments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.DocumentUpdateOneRequiredWithoutVersionsNestedInput;
    assignments?: Prisma.WorkflowAssignmentUpdateManyWithoutVersionNestedInput;
    approvals?: Prisma.ApprovalDecisionUpdateManyWithoutVersionNestedInput;
    complianceRefs?: Prisma.ComplianceReferenceUpdateManyWithoutVersionNestedInput;
};
export type DocumentVersionUncheckedUpdateWithoutRevisionHistoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibilities?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    procedureContent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordsDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedDocuments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.WorkflowAssignmentUncheckedUpdateManyWithoutVersionNestedInput;
    approvals?: Prisma.ApprovalDecisionUncheckedUpdateManyWithoutVersionNestedInput;
    complianceRefs?: Prisma.ComplianceReferenceUncheckedUpdateManyWithoutVersionNestedInput;
};
export type DocumentVersionCreateManyDocumentInput = {
    id?: string;
    versionLabel: string;
    revisionNumber: number;
    effectiveDate?: Date | string | null;
    nextReviewDate?: Date | string | null;
    purpose?: string | null;
    scope?: string | null;
    responsibilities?: string | null;
    procedureContent?: string | null;
    recordsDescription?: string | null;
    relatedDocuments?: string | null;
    complianceNote?: string | null;
    createdAt?: Date | string;
};
export type DocumentVersionUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibilities?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    procedureContent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordsDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedDocuments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.WorkflowAssignmentUpdateManyWithoutVersionNestedInput;
    approvals?: Prisma.ApprovalDecisionUpdateManyWithoutVersionNestedInput;
    complianceRefs?: Prisma.ComplianceReferenceUpdateManyWithoutVersionNestedInput;
    revisionHistory?: Prisma.RevisionHistoryUpdateManyWithoutVersionNestedInput;
};
export type DocumentVersionUncheckedUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibilities?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    procedureContent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordsDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedDocuments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.WorkflowAssignmentUncheckedUpdateManyWithoutVersionNestedInput;
    approvals?: Prisma.ApprovalDecisionUncheckedUpdateManyWithoutVersionNestedInput;
    complianceRefs?: Prisma.ComplianceReferenceUncheckedUpdateManyWithoutVersionNestedInput;
    revisionHistory?: Prisma.RevisionHistoryUncheckedUpdateManyWithoutVersionNestedInput;
};
export type DocumentVersionUncheckedUpdateManyWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    revisionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    effectiveDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibilities?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    procedureContent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordsDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedDocuments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    complianceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentVersionCountOutputType = {
    assignments: number;
    approvals: number;
    complianceRefs: number;
    revisionHistory: number;
};
export type DocumentVersionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignments?: boolean | DocumentVersionCountOutputTypeCountAssignmentsArgs;
    approvals?: boolean | DocumentVersionCountOutputTypeCountApprovalsArgs;
    complianceRefs?: boolean | DocumentVersionCountOutputTypeCountComplianceRefsArgs;
    revisionHistory?: boolean | DocumentVersionCountOutputTypeCountRevisionHistoryArgs;
};
export type DocumentVersionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVersionCountOutputTypeSelect<ExtArgs> | null;
};
export type DocumentVersionCountOutputTypeCountAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkflowAssignmentWhereInput;
};
export type DocumentVersionCountOutputTypeCountApprovalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalDecisionWhereInput;
};
export type DocumentVersionCountOutputTypeCountComplianceRefsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplianceReferenceWhereInput;
};
export type DocumentVersionCountOutputTypeCountRevisionHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RevisionHistoryWhereInput;
};
export type DocumentVersionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    documentId?: boolean;
    versionLabel?: boolean;
    revisionNumber?: boolean;
    effectiveDate?: boolean;
    nextReviewDate?: boolean;
    purpose?: boolean;
    scope?: boolean;
    responsibilities?: boolean;
    procedureContent?: boolean;
    recordsDescription?: boolean;
    relatedDocuments?: boolean;
    complianceNote?: boolean;
    createdAt?: boolean;
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    assignments?: boolean | Prisma.DocumentVersion$assignmentsArgs<ExtArgs>;
    approvals?: boolean | Prisma.DocumentVersion$approvalsArgs<ExtArgs>;
    complianceRefs?: boolean | Prisma.DocumentVersion$complianceRefsArgs<ExtArgs>;
    revisionHistory?: boolean | Prisma.DocumentVersion$revisionHistoryArgs<ExtArgs>;
    _count?: boolean | Prisma.DocumentVersionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentVersion"]>;
export type DocumentVersionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    documentId?: boolean;
    versionLabel?: boolean;
    revisionNumber?: boolean;
    effectiveDate?: boolean;
    nextReviewDate?: boolean;
    purpose?: boolean;
    scope?: boolean;
    responsibilities?: boolean;
    procedureContent?: boolean;
    recordsDescription?: boolean;
    relatedDocuments?: boolean;
    complianceNote?: boolean;
    createdAt?: boolean;
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentVersion"]>;
export type DocumentVersionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    documentId?: boolean;
    versionLabel?: boolean;
    revisionNumber?: boolean;
    effectiveDate?: boolean;
    nextReviewDate?: boolean;
    purpose?: boolean;
    scope?: boolean;
    responsibilities?: boolean;
    procedureContent?: boolean;
    recordsDescription?: boolean;
    relatedDocuments?: boolean;
    complianceNote?: boolean;
    createdAt?: boolean;
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentVersion"]>;
export type DocumentVersionSelectScalar = {
    id?: boolean;
    documentId?: boolean;
    versionLabel?: boolean;
    revisionNumber?: boolean;
    effectiveDate?: boolean;
    nextReviewDate?: boolean;
    purpose?: boolean;
    scope?: boolean;
    responsibilities?: boolean;
    procedureContent?: boolean;
    recordsDescription?: boolean;
    relatedDocuments?: boolean;
    complianceNote?: boolean;
    createdAt?: boolean;
};
export type DocumentVersionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "documentId" | "versionLabel" | "revisionNumber" | "effectiveDate" | "nextReviewDate" | "purpose" | "scope" | "responsibilities" | "procedureContent" | "recordsDescription" | "relatedDocuments" | "complianceNote" | "createdAt", ExtArgs["result"]["documentVersion"]>;
export type DocumentVersionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    assignments?: boolean | Prisma.DocumentVersion$assignmentsArgs<ExtArgs>;
    approvals?: boolean | Prisma.DocumentVersion$approvalsArgs<ExtArgs>;
    complianceRefs?: boolean | Prisma.DocumentVersion$complianceRefsArgs<ExtArgs>;
    revisionHistory?: boolean | Prisma.DocumentVersion$revisionHistoryArgs<ExtArgs>;
    _count?: boolean | Prisma.DocumentVersionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DocumentVersionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
};
export type DocumentVersionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
};
export type $DocumentVersionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DocumentVersion";
    objects: {
        document: Prisma.$DocumentPayload<ExtArgs>;
        assignments: Prisma.$WorkflowAssignmentPayload<ExtArgs>[];
        approvals: Prisma.$ApprovalDecisionPayload<ExtArgs>[];
        complianceRefs: Prisma.$ComplianceReferencePayload<ExtArgs>[];
        revisionHistory: Prisma.$RevisionHistoryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        documentId: string;
        versionLabel: string;
        revisionNumber: number;
        effectiveDate: Date | null;
        nextReviewDate: Date | null;
        purpose: string | null;
        scope: string | null;
        responsibilities: string | null;
        procedureContent: string | null;
        recordsDescription: string | null;
        relatedDocuments: string | null;
        complianceNote: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["documentVersion"]>;
    composites: {};
};
export type DocumentVersionGetPayload<S extends boolean | null | undefined | DocumentVersionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload, S>;
export type DocumentVersionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DocumentVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DocumentVersionCountAggregateInputType | true;
};
export interface DocumentVersionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DocumentVersion'];
        meta: {
            name: 'DocumentVersion';
        };
    };
    findUnique<T extends DocumentVersionFindUniqueArgs>(args: Prisma.SelectSubset<T, DocumentVersionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DocumentVersionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DocumentVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DocumentVersionFindFirstArgs>(args?: Prisma.SelectSubset<T, DocumentVersionFindFirstArgs<ExtArgs>>): Prisma.Prisma__DocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DocumentVersionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DocumentVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DocumentVersionFindManyArgs>(args?: Prisma.SelectSubset<T, DocumentVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DocumentVersionCreateArgs>(args: Prisma.SelectSubset<T, DocumentVersionCreateArgs<ExtArgs>>): Prisma.Prisma__DocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DocumentVersionCreateManyArgs>(args?: Prisma.SelectSubset<T, DocumentVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DocumentVersionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DocumentVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DocumentVersionDeleteArgs>(args: Prisma.SelectSubset<T, DocumentVersionDeleteArgs<ExtArgs>>): Prisma.Prisma__DocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DocumentVersionUpdateArgs>(args: Prisma.SelectSubset<T, DocumentVersionUpdateArgs<ExtArgs>>): Prisma.Prisma__DocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DocumentVersionDeleteManyArgs>(args?: Prisma.SelectSubset<T, DocumentVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DocumentVersionUpdateManyArgs>(args: Prisma.SelectSubset<T, DocumentVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DocumentVersionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DocumentVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DocumentVersionUpsertArgs>(args: Prisma.SelectSubset<T, DocumentVersionUpsertArgs<ExtArgs>>): Prisma.Prisma__DocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DocumentVersionCountArgs>(args?: Prisma.Subset<T, DocumentVersionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DocumentVersionCountAggregateOutputType> : number>;
    aggregate<T extends DocumentVersionAggregateArgs>(args: Prisma.Subset<T, DocumentVersionAggregateArgs>): Prisma.PrismaPromise<GetDocumentVersionAggregateType<T>>;
    groupBy<T extends DocumentVersionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DocumentVersionGroupByArgs['orderBy'];
    } : {
        orderBy?: DocumentVersionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DocumentVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DocumentVersionFieldRefs;
}
export interface Prisma__DocumentVersionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    document<T extends Prisma.DocumentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentDefaultArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    assignments<T extends Prisma.DocumentVersion$assignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentVersion$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkflowAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    approvals<T extends Prisma.DocumentVersion$approvalsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentVersion$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    complianceRefs<T extends Prisma.DocumentVersion$complianceRefsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentVersion$complianceRefsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplianceReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    revisionHistory<T extends Prisma.DocumentVersion$revisionHistoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentVersion$revisionHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DocumentVersionFieldRefs {
    readonly id: Prisma.FieldRef<"DocumentVersion", 'String'>;
    readonly documentId: Prisma.FieldRef<"DocumentVersion", 'String'>;
    readonly versionLabel: Prisma.FieldRef<"DocumentVersion", 'String'>;
    readonly revisionNumber: Prisma.FieldRef<"DocumentVersion", 'Int'>;
    readonly effectiveDate: Prisma.FieldRef<"DocumentVersion", 'DateTime'>;
    readonly nextReviewDate: Prisma.FieldRef<"DocumentVersion", 'DateTime'>;
    readonly purpose: Prisma.FieldRef<"DocumentVersion", 'String'>;
    readonly scope: Prisma.FieldRef<"DocumentVersion", 'String'>;
    readonly responsibilities: Prisma.FieldRef<"DocumentVersion", 'String'>;
    readonly procedureContent: Prisma.FieldRef<"DocumentVersion", 'String'>;
    readonly recordsDescription: Prisma.FieldRef<"DocumentVersion", 'String'>;
    readonly relatedDocuments: Prisma.FieldRef<"DocumentVersion", 'String'>;
    readonly complianceNote: Prisma.FieldRef<"DocumentVersion", 'String'>;
    readonly createdAt: Prisma.FieldRef<"DocumentVersion", 'DateTime'>;
}
export type DocumentVersionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.DocumentVersionInclude<ExtArgs> | null;
    where: Prisma.DocumentVersionWhereUniqueInput;
};
export type DocumentVersionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.DocumentVersionInclude<ExtArgs> | null;
    where: Prisma.DocumentVersionWhereUniqueInput;
};
export type DocumentVersionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.DocumentVersionInclude<ExtArgs> | null;
    where?: Prisma.DocumentVersionWhereInput;
    orderBy?: Prisma.DocumentVersionOrderByWithRelationInput | Prisma.DocumentVersionOrderByWithRelationInput[];
    cursor?: Prisma.DocumentVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentVersionScalarFieldEnum | Prisma.DocumentVersionScalarFieldEnum[];
};
export type DocumentVersionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.DocumentVersionInclude<ExtArgs> | null;
    where?: Prisma.DocumentVersionWhereInput;
    orderBy?: Prisma.DocumentVersionOrderByWithRelationInput | Prisma.DocumentVersionOrderByWithRelationInput[];
    cursor?: Prisma.DocumentVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentVersionScalarFieldEnum | Prisma.DocumentVersionScalarFieldEnum[];
};
export type DocumentVersionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.DocumentVersionInclude<ExtArgs> | null;
    where?: Prisma.DocumentVersionWhereInput;
    orderBy?: Prisma.DocumentVersionOrderByWithRelationInput | Prisma.DocumentVersionOrderByWithRelationInput[];
    cursor?: Prisma.DocumentVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentVersionScalarFieldEnum | Prisma.DocumentVersionScalarFieldEnum[];
};
export type DocumentVersionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.DocumentVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentVersionCreateInput, Prisma.DocumentVersionUncheckedCreateInput>;
};
export type DocumentVersionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DocumentVersionCreateManyInput | Prisma.DocumentVersionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DocumentVersionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVersionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentVersionOmit<ExtArgs> | null;
    data: Prisma.DocumentVersionCreateManyInput | Prisma.DocumentVersionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DocumentVersionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DocumentVersionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.DocumentVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentVersionUpdateInput, Prisma.DocumentVersionUncheckedUpdateInput>;
    where: Prisma.DocumentVersionWhereUniqueInput;
};
export type DocumentVersionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DocumentVersionUpdateManyMutationInput, Prisma.DocumentVersionUncheckedUpdateManyInput>;
    where?: Prisma.DocumentVersionWhereInput;
    limit?: number;
};
export type DocumentVersionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVersionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentVersionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentVersionUpdateManyMutationInput, Prisma.DocumentVersionUncheckedUpdateManyInput>;
    where?: Prisma.DocumentVersionWhereInput;
    limit?: number;
    include?: Prisma.DocumentVersionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DocumentVersionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.DocumentVersionInclude<ExtArgs> | null;
    where: Prisma.DocumentVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentVersionCreateInput, Prisma.DocumentVersionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DocumentVersionUpdateInput, Prisma.DocumentVersionUncheckedUpdateInput>;
};
export type DocumentVersionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.DocumentVersionInclude<ExtArgs> | null;
    where: Prisma.DocumentVersionWhereUniqueInput;
};
export type DocumentVersionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentVersionWhereInput;
    limit?: number;
};
export type DocumentVersion$assignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowAssignmentOmit<ExtArgs> | null;
    include?: Prisma.WorkflowAssignmentInclude<ExtArgs> | null;
    where?: Prisma.WorkflowAssignmentWhereInput;
    orderBy?: Prisma.WorkflowAssignmentOrderByWithRelationInput | Prisma.WorkflowAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.WorkflowAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WorkflowAssignmentScalarFieldEnum | Prisma.WorkflowAssignmentScalarFieldEnum[];
};
export type DocumentVersion$approvalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalDecisionInclude<ExtArgs> | null;
    where?: Prisma.ApprovalDecisionWhereInput;
    orderBy?: Prisma.ApprovalDecisionOrderByWithRelationInput | Prisma.ApprovalDecisionOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalDecisionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalDecisionScalarFieldEnum | Prisma.ApprovalDecisionScalarFieldEnum[];
};
export type DocumentVersion$complianceRefsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceReferenceSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceReferenceOmit<ExtArgs> | null;
    include?: Prisma.ComplianceReferenceInclude<ExtArgs> | null;
    where?: Prisma.ComplianceReferenceWhereInput;
    orderBy?: Prisma.ComplianceReferenceOrderByWithRelationInput | Prisma.ComplianceReferenceOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceReferenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplianceReferenceScalarFieldEnum | Prisma.ComplianceReferenceScalarFieldEnum[];
};
export type DocumentVersion$revisionHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevisionHistorySelect<ExtArgs> | null;
    omit?: Prisma.RevisionHistoryOmit<ExtArgs> | null;
    include?: Prisma.RevisionHistoryInclude<ExtArgs> | null;
    where?: Prisma.RevisionHistoryWhereInput;
    orderBy?: Prisma.RevisionHistoryOrderByWithRelationInput | Prisma.RevisionHistoryOrderByWithRelationInput[];
    cursor?: Prisma.RevisionHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RevisionHistoryScalarFieldEnum | Prisma.RevisionHistoryScalarFieldEnum[];
};
export type DocumentVersionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.DocumentVersionInclude<ExtArgs> | null;
};
