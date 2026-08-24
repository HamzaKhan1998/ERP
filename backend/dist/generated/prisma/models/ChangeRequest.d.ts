import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ChangeRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$ChangeRequestPayload>;
export type AggregateChangeRequest = {
    _count: ChangeRequestCountAggregateOutputType | null;
    _min: ChangeRequestMinAggregateOutputType | null;
    _max: ChangeRequestMaxAggregateOutputType | null;
};
export type ChangeRequestMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    documentId: string | null;
    sourceVersionId: string | null;
    incorporatedVersionId: string | null;
    requestedById: string | null;
    reviewedById: string | null;
    status: $Enums.ChangeRequestStatus | null;
    existingRequirement: string | null;
    proposedChange: string | null;
    reason: string | null;
    managementComment: string | null;
    createdAt: Date | null;
    reviewedAt: Date | null;
};
export type ChangeRequestMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    documentId: string | null;
    sourceVersionId: string | null;
    incorporatedVersionId: string | null;
    requestedById: string | null;
    reviewedById: string | null;
    status: $Enums.ChangeRequestStatus | null;
    existingRequirement: string | null;
    proposedChange: string | null;
    reason: string | null;
    managementComment: string | null;
    createdAt: Date | null;
    reviewedAt: Date | null;
};
export type ChangeRequestCountAggregateOutputType = {
    id: number;
    tenantId: number;
    documentId: number;
    sourceVersionId: number;
    incorporatedVersionId: number;
    requestedById: number;
    reviewedById: number;
    status: number;
    existingRequirement: number;
    proposedChange: number;
    reason: number;
    managementComment: number;
    createdAt: number;
    reviewedAt: number;
    _all: number;
};
export type ChangeRequestMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    documentId?: true;
    sourceVersionId?: true;
    incorporatedVersionId?: true;
    requestedById?: true;
    reviewedById?: true;
    status?: true;
    existingRequirement?: true;
    proposedChange?: true;
    reason?: true;
    managementComment?: true;
    createdAt?: true;
    reviewedAt?: true;
};
export type ChangeRequestMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    documentId?: true;
    sourceVersionId?: true;
    incorporatedVersionId?: true;
    requestedById?: true;
    reviewedById?: true;
    status?: true;
    existingRequirement?: true;
    proposedChange?: true;
    reason?: true;
    managementComment?: true;
    createdAt?: true;
    reviewedAt?: true;
};
export type ChangeRequestCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    documentId?: true;
    sourceVersionId?: true;
    incorporatedVersionId?: true;
    requestedById?: true;
    reviewedById?: true;
    status?: true;
    existingRequirement?: true;
    proposedChange?: true;
    reason?: true;
    managementComment?: true;
    createdAt?: true;
    reviewedAt?: true;
    _all?: true;
};
export type ChangeRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChangeRequestWhereInput;
    orderBy?: Prisma.ChangeRequestOrderByWithRelationInput | Prisma.ChangeRequestOrderByWithRelationInput[];
    cursor?: Prisma.ChangeRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ChangeRequestCountAggregateInputType;
    _min?: ChangeRequestMinAggregateInputType;
    _max?: ChangeRequestMaxAggregateInputType;
};
export type GetChangeRequestAggregateType<T extends ChangeRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateChangeRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChangeRequest[P]> : Prisma.GetScalarType<T[P], AggregateChangeRequest[P]>;
};
export type ChangeRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChangeRequestWhereInput;
    orderBy?: Prisma.ChangeRequestOrderByWithAggregationInput | Prisma.ChangeRequestOrderByWithAggregationInput[];
    by: Prisma.ChangeRequestScalarFieldEnum[] | Prisma.ChangeRequestScalarFieldEnum;
    having?: Prisma.ChangeRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChangeRequestCountAggregateInputType | true;
    _min?: ChangeRequestMinAggregateInputType;
    _max?: ChangeRequestMaxAggregateInputType;
};
export type ChangeRequestGroupByOutputType = {
    id: string;
    tenantId: string;
    documentId: string;
    sourceVersionId: string;
    incorporatedVersionId: string | null;
    requestedById: string;
    reviewedById: string | null;
    status: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment: string | null;
    createdAt: Date;
    reviewedAt: Date | null;
    _count: ChangeRequestCountAggregateOutputType | null;
    _min: ChangeRequestMinAggregateOutputType | null;
    _max: ChangeRequestMaxAggregateOutputType | null;
};
export type GetChangeRequestGroupByPayload<T extends ChangeRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChangeRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChangeRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChangeRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChangeRequestGroupByOutputType[P]>;
}>>;
export type ChangeRequestWhereInput = {
    AND?: Prisma.ChangeRequestWhereInput | Prisma.ChangeRequestWhereInput[];
    OR?: Prisma.ChangeRequestWhereInput[];
    NOT?: Prisma.ChangeRequestWhereInput | Prisma.ChangeRequestWhereInput[];
    id?: Prisma.StringFilter<"ChangeRequest"> | string;
    tenantId?: Prisma.StringFilter<"ChangeRequest"> | string;
    documentId?: Prisma.StringFilter<"ChangeRequest"> | string;
    sourceVersionId?: Prisma.StringFilter<"ChangeRequest"> | string;
    incorporatedVersionId?: Prisma.StringNullableFilter<"ChangeRequest"> | string | null;
    requestedById?: Prisma.StringFilter<"ChangeRequest"> | string;
    reviewedById?: Prisma.StringNullableFilter<"ChangeRequest"> | string | null;
    status?: Prisma.EnumChangeRequestStatusFilter<"ChangeRequest"> | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFilter<"ChangeRequest"> | string;
    proposedChange?: Prisma.StringFilter<"ChangeRequest"> | string;
    reason?: Prisma.StringFilter<"ChangeRequest"> | string;
    managementComment?: Prisma.StringNullableFilter<"ChangeRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ChangeRequest"> | Date | string;
    reviewedAt?: Prisma.DateTimeNullableFilter<"ChangeRequest"> | Date | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    document?: Prisma.XOR<Prisma.DocumentScalarRelationFilter, Prisma.DocumentWhereInput>;
    sourceVersion?: Prisma.XOR<Prisma.DocumentVersionScalarRelationFilter, Prisma.DocumentVersionWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    reviewedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    incorporatedVersion?: Prisma.XOR<Prisma.DocumentVersionNullableScalarRelationFilter, Prisma.DocumentVersionWhereInput> | null;
};
export type ChangeRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    sourceVersionId?: Prisma.SortOrder;
    incorporatedVersionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    existingRequirement?: Prisma.SortOrder;
    proposedChange?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    managementComment?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    document?: Prisma.DocumentOrderByWithRelationInput;
    sourceVersion?: Prisma.DocumentVersionOrderByWithRelationInput;
    requestedBy?: Prisma.UserOrderByWithRelationInput;
    reviewedBy?: Prisma.UserOrderByWithRelationInput;
    incorporatedVersion?: Prisma.DocumentVersionOrderByWithRelationInput;
};
export type ChangeRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ChangeRequestWhereInput | Prisma.ChangeRequestWhereInput[];
    OR?: Prisma.ChangeRequestWhereInput[];
    NOT?: Prisma.ChangeRequestWhereInput | Prisma.ChangeRequestWhereInput[];
    tenantId?: Prisma.StringFilter<"ChangeRequest"> | string;
    documentId?: Prisma.StringFilter<"ChangeRequest"> | string;
    sourceVersionId?: Prisma.StringFilter<"ChangeRequest"> | string;
    incorporatedVersionId?: Prisma.StringNullableFilter<"ChangeRequest"> | string | null;
    requestedById?: Prisma.StringFilter<"ChangeRequest"> | string;
    reviewedById?: Prisma.StringNullableFilter<"ChangeRequest"> | string | null;
    status?: Prisma.EnumChangeRequestStatusFilter<"ChangeRequest"> | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFilter<"ChangeRequest"> | string;
    proposedChange?: Prisma.StringFilter<"ChangeRequest"> | string;
    reason?: Prisma.StringFilter<"ChangeRequest"> | string;
    managementComment?: Prisma.StringNullableFilter<"ChangeRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ChangeRequest"> | Date | string;
    reviewedAt?: Prisma.DateTimeNullableFilter<"ChangeRequest"> | Date | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    document?: Prisma.XOR<Prisma.DocumentScalarRelationFilter, Prisma.DocumentWhereInput>;
    sourceVersion?: Prisma.XOR<Prisma.DocumentVersionScalarRelationFilter, Prisma.DocumentVersionWhereInput>;
    requestedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    reviewedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    incorporatedVersion?: Prisma.XOR<Prisma.DocumentVersionNullableScalarRelationFilter, Prisma.DocumentVersionWhereInput> | null;
}, "id">;
export type ChangeRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    sourceVersionId?: Prisma.SortOrder;
    incorporatedVersionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    existingRequirement?: Prisma.SortOrder;
    proposedChange?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    managementComment?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ChangeRequestCountOrderByAggregateInput;
    _max?: Prisma.ChangeRequestMaxOrderByAggregateInput;
    _min?: Prisma.ChangeRequestMinOrderByAggregateInput;
};
export type ChangeRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChangeRequestScalarWhereWithAggregatesInput | Prisma.ChangeRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChangeRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChangeRequestScalarWhereWithAggregatesInput | Prisma.ChangeRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ChangeRequest"> | string;
    tenantId?: Prisma.StringWithAggregatesFilter<"ChangeRequest"> | string;
    documentId?: Prisma.StringWithAggregatesFilter<"ChangeRequest"> | string;
    sourceVersionId?: Prisma.StringWithAggregatesFilter<"ChangeRequest"> | string;
    incorporatedVersionId?: Prisma.StringNullableWithAggregatesFilter<"ChangeRequest"> | string | null;
    requestedById?: Prisma.StringWithAggregatesFilter<"ChangeRequest"> | string;
    reviewedById?: Prisma.StringNullableWithAggregatesFilter<"ChangeRequest"> | string | null;
    status?: Prisma.EnumChangeRequestStatusWithAggregatesFilter<"ChangeRequest"> | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringWithAggregatesFilter<"ChangeRequest"> | string;
    proposedChange?: Prisma.StringWithAggregatesFilter<"ChangeRequest"> | string;
    reason?: Prisma.StringWithAggregatesFilter<"ChangeRequest"> | string;
    managementComment?: Prisma.StringNullableWithAggregatesFilter<"ChangeRequest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ChangeRequest"> | Date | string;
    reviewedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ChangeRequest"> | Date | string | null;
};
export type ChangeRequestCreateInput = {
    id?: string;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutChangeRequestsInput;
    document: Prisma.DocumentCreateNestedOneWithoutChangeRequestsInput;
    sourceVersion: Prisma.DocumentVersionCreateNestedOneWithoutChangeRequestsInput;
    requestedBy: Prisma.UserCreateNestedOneWithoutChangeRequestsInitiatedInput;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutChangeRequestsReviewedInput;
    incorporatedVersion?: Prisma.DocumentVersionCreateNestedOneWithoutIncorporatedChangeRequestsInput;
};
export type ChangeRequestUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    documentId: string;
    sourceVersionId: string;
    incorporatedVersionId?: string | null;
    requestedById: string;
    reviewedById?: string | null;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
};
export type ChangeRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutChangeRequestsNestedInput;
    document?: Prisma.DocumentUpdateOneRequiredWithoutChangeRequestsNestedInput;
    sourceVersion?: Prisma.DocumentVersionUpdateOneRequiredWithoutChangeRequestsNestedInput;
    requestedBy?: Prisma.UserUpdateOneRequiredWithoutChangeRequestsInitiatedNestedInput;
    reviewedBy?: Prisma.UserUpdateOneWithoutChangeRequestsReviewedNestedInput;
    incorporatedVersion?: Prisma.DocumentVersionUpdateOneWithoutIncorporatedChangeRequestsNestedInput;
};
export type ChangeRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    incorporatedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ChangeRequestCreateManyInput = {
    id?: string;
    tenantId: string;
    documentId: string;
    sourceVersionId: string;
    incorporatedVersionId?: string | null;
    requestedById: string;
    reviewedById?: string | null;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
};
export type ChangeRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ChangeRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    incorporatedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ChangeRequestListRelationFilter = {
    every?: Prisma.ChangeRequestWhereInput;
    some?: Prisma.ChangeRequestWhereInput;
    none?: Prisma.ChangeRequestWhereInput;
};
export type ChangeRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ChangeRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    sourceVersionId?: Prisma.SortOrder;
    incorporatedVersionId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    existingRequirement?: Prisma.SortOrder;
    proposedChange?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    managementComment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
};
export type ChangeRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    sourceVersionId?: Prisma.SortOrder;
    incorporatedVersionId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    existingRequirement?: Prisma.SortOrder;
    proposedChange?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    managementComment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
};
export type ChangeRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    sourceVersionId?: Prisma.SortOrder;
    incorporatedVersionId?: Prisma.SortOrder;
    requestedById?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    existingRequirement?: Prisma.SortOrder;
    proposedChange?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    managementComment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
};
export type ChangeRequestCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutTenantInput, Prisma.ChangeRequestUncheckedCreateWithoutTenantInput> | Prisma.ChangeRequestCreateWithoutTenantInput[] | Prisma.ChangeRequestUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutTenantInput | Prisma.ChangeRequestCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.ChangeRequestCreateManyTenantInputEnvelope;
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
};
export type ChangeRequestUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutTenantInput, Prisma.ChangeRequestUncheckedCreateWithoutTenantInput> | Prisma.ChangeRequestCreateWithoutTenantInput[] | Prisma.ChangeRequestUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutTenantInput | Prisma.ChangeRequestCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.ChangeRequestCreateManyTenantInputEnvelope;
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
};
export type ChangeRequestUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutTenantInput, Prisma.ChangeRequestUncheckedCreateWithoutTenantInput> | Prisma.ChangeRequestCreateWithoutTenantInput[] | Prisma.ChangeRequestUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutTenantInput | Prisma.ChangeRequestCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.ChangeRequestUpsertWithWhereUniqueWithoutTenantInput | Prisma.ChangeRequestUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.ChangeRequestCreateManyTenantInputEnvelope;
    set?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    disconnect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    delete?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    update?: Prisma.ChangeRequestUpdateWithWhereUniqueWithoutTenantInput | Prisma.ChangeRequestUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.ChangeRequestUpdateManyWithWhereWithoutTenantInput | Prisma.ChangeRequestUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.ChangeRequestScalarWhereInput | Prisma.ChangeRequestScalarWhereInput[];
};
export type ChangeRequestUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutTenantInput, Prisma.ChangeRequestUncheckedCreateWithoutTenantInput> | Prisma.ChangeRequestCreateWithoutTenantInput[] | Prisma.ChangeRequestUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutTenantInput | Prisma.ChangeRequestCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.ChangeRequestUpsertWithWhereUniqueWithoutTenantInput | Prisma.ChangeRequestUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.ChangeRequestCreateManyTenantInputEnvelope;
    set?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    disconnect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    delete?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    update?: Prisma.ChangeRequestUpdateWithWhereUniqueWithoutTenantInput | Prisma.ChangeRequestUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.ChangeRequestUpdateManyWithWhereWithoutTenantInput | Prisma.ChangeRequestUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.ChangeRequestScalarWhereInput | Prisma.ChangeRequestScalarWhereInput[];
};
export type ChangeRequestCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutRequestedByInput, Prisma.ChangeRequestUncheckedCreateWithoutRequestedByInput> | Prisma.ChangeRequestCreateWithoutRequestedByInput[] | Prisma.ChangeRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutRequestedByInput | Prisma.ChangeRequestCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.ChangeRequestCreateManyRequestedByInputEnvelope;
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
};
export type ChangeRequestCreateNestedManyWithoutReviewedByInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutReviewedByInput, Prisma.ChangeRequestUncheckedCreateWithoutReviewedByInput> | Prisma.ChangeRequestCreateWithoutReviewedByInput[] | Prisma.ChangeRequestUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutReviewedByInput | Prisma.ChangeRequestCreateOrConnectWithoutReviewedByInput[];
    createMany?: Prisma.ChangeRequestCreateManyReviewedByInputEnvelope;
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
};
export type ChangeRequestUncheckedCreateNestedManyWithoutRequestedByInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutRequestedByInput, Prisma.ChangeRequestUncheckedCreateWithoutRequestedByInput> | Prisma.ChangeRequestCreateWithoutRequestedByInput[] | Prisma.ChangeRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutRequestedByInput | Prisma.ChangeRequestCreateOrConnectWithoutRequestedByInput[];
    createMany?: Prisma.ChangeRequestCreateManyRequestedByInputEnvelope;
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
};
export type ChangeRequestUncheckedCreateNestedManyWithoutReviewedByInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutReviewedByInput, Prisma.ChangeRequestUncheckedCreateWithoutReviewedByInput> | Prisma.ChangeRequestCreateWithoutReviewedByInput[] | Prisma.ChangeRequestUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutReviewedByInput | Prisma.ChangeRequestCreateOrConnectWithoutReviewedByInput[];
    createMany?: Prisma.ChangeRequestCreateManyReviewedByInputEnvelope;
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
};
export type ChangeRequestUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutRequestedByInput, Prisma.ChangeRequestUncheckedCreateWithoutRequestedByInput> | Prisma.ChangeRequestCreateWithoutRequestedByInput[] | Prisma.ChangeRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutRequestedByInput | Prisma.ChangeRequestCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.ChangeRequestUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.ChangeRequestUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.ChangeRequestCreateManyRequestedByInputEnvelope;
    set?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    disconnect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    delete?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    update?: Prisma.ChangeRequestUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.ChangeRequestUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.ChangeRequestUpdateManyWithWhereWithoutRequestedByInput | Prisma.ChangeRequestUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.ChangeRequestScalarWhereInput | Prisma.ChangeRequestScalarWhereInput[];
};
export type ChangeRequestUpdateManyWithoutReviewedByNestedInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutReviewedByInput, Prisma.ChangeRequestUncheckedCreateWithoutReviewedByInput> | Prisma.ChangeRequestCreateWithoutReviewedByInput[] | Prisma.ChangeRequestUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutReviewedByInput | Prisma.ChangeRequestCreateOrConnectWithoutReviewedByInput[];
    upsert?: Prisma.ChangeRequestUpsertWithWhereUniqueWithoutReviewedByInput | Prisma.ChangeRequestUpsertWithWhereUniqueWithoutReviewedByInput[];
    createMany?: Prisma.ChangeRequestCreateManyReviewedByInputEnvelope;
    set?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    disconnect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    delete?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    update?: Prisma.ChangeRequestUpdateWithWhereUniqueWithoutReviewedByInput | Prisma.ChangeRequestUpdateWithWhereUniqueWithoutReviewedByInput[];
    updateMany?: Prisma.ChangeRequestUpdateManyWithWhereWithoutReviewedByInput | Prisma.ChangeRequestUpdateManyWithWhereWithoutReviewedByInput[];
    deleteMany?: Prisma.ChangeRequestScalarWhereInput | Prisma.ChangeRequestScalarWhereInput[];
};
export type ChangeRequestUncheckedUpdateManyWithoutRequestedByNestedInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutRequestedByInput, Prisma.ChangeRequestUncheckedCreateWithoutRequestedByInput> | Prisma.ChangeRequestCreateWithoutRequestedByInput[] | Prisma.ChangeRequestUncheckedCreateWithoutRequestedByInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutRequestedByInput | Prisma.ChangeRequestCreateOrConnectWithoutRequestedByInput[];
    upsert?: Prisma.ChangeRequestUpsertWithWhereUniqueWithoutRequestedByInput | Prisma.ChangeRequestUpsertWithWhereUniqueWithoutRequestedByInput[];
    createMany?: Prisma.ChangeRequestCreateManyRequestedByInputEnvelope;
    set?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    disconnect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    delete?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    update?: Prisma.ChangeRequestUpdateWithWhereUniqueWithoutRequestedByInput | Prisma.ChangeRequestUpdateWithWhereUniqueWithoutRequestedByInput[];
    updateMany?: Prisma.ChangeRequestUpdateManyWithWhereWithoutRequestedByInput | Prisma.ChangeRequestUpdateManyWithWhereWithoutRequestedByInput[];
    deleteMany?: Prisma.ChangeRequestScalarWhereInput | Prisma.ChangeRequestScalarWhereInput[];
};
export type ChangeRequestUncheckedUpdateManyWithoutReviewedByNestedInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutReviewedByInput, Prisma.ChangeRequestUncheckedCreateWithoutReviewedByInput> | Prisma.ChangeRequestCreateWithoutReviewedByInput[] | Prisma.ChangeRequestUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutReviewedByInput | Prisma.ChangeRequestCreateOrConnectWithoutReviewedByInput[];
    upsert?: Prisma.ChangeRequestUpsertWithWhereUniqueWithoutReviewedByInput | Prisma.ChangeRequestUpsertWithWhereUniqueWithoutReviewedByInput[];
    createMany?: Prisma.ChangeRequestCreateManyReviewedByInputEnvelope;
    set?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    disconnect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    delete?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    update?: Prisma.ChangeRequestUpdateWithWhereUniqueWithoutReviewedByInput | Prisma.ChangeRequestUpdateWithWhereUniqueWithoutReviewedByInput[];
    updateMany?: Prisma.ChangeRequestUpdateManyWithWhereWithoutReviewedByInput | Prisma.ChangeRequestUpdateManyWithWhereWithoutReviewedByInput[];
    deleteMany?: Prisma.ChangeRequestScalarWhereInput | Prisma.ChangeRequestScalarWhereInput[];
};
export type ChangeRequestCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutDocumentInput, Prisma.ChangeRequestUncheckedCreateWithoutDocumentInput> | Prisma.ChangeRequestCreateWithoutDocumentInput[] | Prisma.ChangeRequestUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutDocumentInput | Prisma.ChangeRequestCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.ChangeRequestCreateManyDocumentInputEnvelope;
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
};
export type ChangeRequestUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutDocumentInput, Prisma.ChangeRequestUncheckedCreateWithoutDocumentInput> | Prisma.ChangeRequestCreateWithoutDocumentInput[] | Prisma.ChangeRequestUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutDocumentInput | Prisma.ChangeRequestCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.ChangeRequestCreateManyDocumentInputEnvelope;
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
};
export type ChangeRequestUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutDocumentInput, Prisma.ChangeRequestUncheckedCreateWithoutDocumentInput> | Prisma.ChangeRequestCreateWithoutDocumentInput[] | Prisma.ChangeRequestUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutDocumentInput | Prisma.ChangeRequestCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.ChangeRequestUpsertWithWhereUniqueWithoutDocumentInput | Prisma.ChangeRequestUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.ChangeRequestCreateManyDocumentInputEnvelope;
    set?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    disconnect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    delete?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    update?: Prisma.ChangeRequestUpdateWithWhereUniqueWithoutDocumentInput | Prisma.ChangeRequestUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.ChangeRequestUpdateManyWithWhereWithoutDocumentInput | Prisma.ChangeRequestUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.ChangeRequestScalarWhereInput | Prisma.ChangeRequestScalarWhereInput[];
};
export type ChangeRequestUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutDocumentInput, Prisma.ChangeRequestUncheckedCreateWithoutDocumentInput> | Prisma.ChangeRequestCreateWithoutDocumentInput[] | Prisma.ChangeRequestUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutDocumentInput | Prisma.ChangeRequestCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.ChangeRequestUpsertWithWhereUniqueWithoutDocumentInput | Prisma.ChangeRequestUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.ChangeRequestCreateManyDocumentInputEnvelope;
    set?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    disconnect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    delete?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    update?: Prisma.ChangeRequestUpdateWithWhereUniqueWithoutDocumentInput | Prisma.ChangeRequestUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.ChangeRequestUpdateManyWithWhereWithoutDocumentInput | Prisma.ChangeRequestUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.ChangeRequestScalarWhereInput | Prisma.ChangeRequestScalarWhereInput[];
};
export type ChangeRequestCreateNestedManyWithoutSourceVersionInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutSourceVersionInput, Prisma.ChangeRequestUncheckedCreateWithoutSourceVersionInput> | Prisma.ChangeRequestCreateWithoutSourceVersionInput[] | Prisma.ChangeRequestUncheckedCreateWithoutSourceVersionInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutSourceVersionInput | Prisma.ChangeRequestCreateOrConnectWithoutSourceVersionInput[];
    createMany?: Prisma.ChangeRequestCreateManySourceVersionInputEnvelope;
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
};
export type ChangeRequestCreateNestedManyWithoutIncorporatedVersionInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutIncorporatedVersionInput, Prisma.ChangeRequestUncheckedCreateWithoutIncorporatedVersionInput> | Prisma.ChangeRequestCreateWithoutIncorporatedVersionInput[] | Prisma.ChangeRequestUncheckedCreateWithoutIncorporatedVersionInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutIncorporatedVersionInput | Prisma.ChangeRequestCreateOrConnectWithoutIncorporatedVersionInput[];
    createMany?: Prisma.ChangeRequestCreateManyIncorporatedVersionInputEnvelope;
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
};
export type ChangeRequestUncheckedCreateNestedManyWithoutSourceVersionInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutSourceVersionInput, Prisma.ChangeRequestUncheckedCreateWithoutSourceVersionInput> | Prisma.ChangeRequestCreateWithoutSourceVersionInput[] | Prisma.ChangeRequestUncheckedCreateWithoutSourceVersionInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutSourceVersionInput | Prisma.ChangeRequestCreateOrConnectWithoutSourceVersionInput[];
    createMany?: Prisma.ChangeRequestCreateManySourceVersionInputEnvelope;
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
};
export type ChangeRequestUncheckedCreateNestedManyWithoutIncorporatedVersionInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutIncorporatedVersionInput, Prisma.ChangeRequestUncheckedCreateWithoutIncorporatedVersionInput> | Prisma.ChangeRequestCreateWithoutIncorporatedVersionInput[] | Prisma.ChangeRequestUncheckedCreateWithoutIncorporatedVersionInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutIncorporatedVersionInput | Prisma.ChangeRequestCreateOrConnectWithoutIncorporatedVersionInput[];
    createMany?: Prisma.ChangeRequestCreateManyIncorporatedVersionInputEnvelope;
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
};
export type ChangeRequestUpdateManyWithoutSourceVersionNestedInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutSourceVersionInput, Prisma.ChangeRequestUncheckedCreateWithoutSourceVersionInput> | Prisma.ChangeRequestCreateWithoutSourceVersionInput[] | Prisma.ChangeRequestUncheckedCreateWithoutSourceVersionInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutSourceVersionInput | Prisma.ChangeRequestCreateOrConnectWithoutSourceVersionInput[];
    upsert?: Prisma.ChangeRequestUpsertWithWhereUniqueWithoutSourceVersionInput | Prisma.ChangeRequestUpsertWithWhereUniqueWithoutSourceVersionInput[];
    createMany?: Prisma.ChangeRequestCreateManySourceVersionInputEnvelope;
    set?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    disconnect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    delete?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    update?: Prisma.ChangeRequestUpdateWithWhereUniqueWithoutSourceVersionInput | Prisma.ChangeRequestUpdateWithWhereUniqueWithoutSourceVersionInput[];
    updateMany?: Prisma.ChangeRequestUpdateManyWithWhereWithoutSourceVersionInput | Prisma.ChangeRequestUpdateManyWithWhereWithoutSourceVersionInput[];
    deleteMany?: Prisma.ChangeRequestScalarWhereInput | Prisma.ChangeRequestScalarWhereInput[];
};
export type ChangeRequestUpdateManyWithoutIncorporatedVersionNestedInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutIncorporatedVersionInput, Prisma.ChangeRequestUncheckedCreateWithoutIncorporatedVersionInput> | Prisma.ChangeRequestCreateWithoutIncorporatedVersionInput[] | Prisma.ChangeRequestUncheckedCreateWithoutIncorporatedVersionInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutIncorporatedVersionInput | Prisma.ChangeRequestCreateOrConnectWithoutIncorporatedVersionInput[];
    upsert?: Prisma.ChangeRequestUpsertWithWhereUniqueWithoutIncorporatedVersionInput | Prisma.ChangeRequestUpsertWithWhereUniqueWithoutIncorporatedVersionInput[];
    createMany?: Prisma.ChangeRequestCreateManyIncorporatedVersionInputEnvelope;
    set?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    disconnect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    delete?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    update?: Prisma.ChangeRequestUpdateWithWhereUniqueWithoutIncorporatedVersionInput | Prisma.ChangeRequestUpdateWithWhereUniqueWithoutIncorporatedVersionInput[];
    updateMany?: Prisma.ChangeRequestUpdateManyWithWhereWithoutIncorporatedVersionInput | Prisma.ChangeRequestUpdateManyWithWhereWithoutIncorporatedVersionInput[];
    deleteMany?: Prisma.ChangeRequestScalarWhereInput | Prisma.ChangeRequestScalarWhereInput[];
};
export type ChangeRequestUncheckedUpdateManyWithoutSourceVersionNestedInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutSourceVersionInput, Prisma.ChangeRequestUncheckedCreateWithoutSourceVersionInput> | Prisma.ChangeRequestCreateWithoutSourceVersionInput[] | Prisma.ChangeRequestUncheckedCreateWithoutSourceVersionInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutSourceVersionInput | Prisma.ChangeRequestCreateOrConnectWithoutSourceVersionInput[];
    upsert?: Prisma.ChangeRequestUpsertWithWhereUniqueWithoutSourceVersionInput | Prisma.ChangeRequestUpsertWithWhereUniqueWithoutSourceVersionInput[];
    createMany?: Prisma.ChangeRequestCreateManySourceVersionInputEnvelope;
    set?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    disconnect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    delete?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    update?: Prisma.ChangeRequestUpdateWithWhereUniqueWithoutSourceVersionInput | Prisma.ChangeRequestUpdateWithWhereUniqueWithoutSourceVersionInput[];
    updateMany?: Prisma.ChangeRequestUpdateManyWithWhereWithoutSourceVersionInput | Prisma.ChangeRequestUpdateManyWithWhereWithoutSourceVersionInput[];
    deleteMany?: Prisma.ChangeRequestScalarWhereInput | Prisma.ChangeRequestScalarWhereInput[];
};
export type ChangeRequestUncheckedUpdateManyWithoutIncorporatedVersionNestedInput = {
    create?: Prisma.XOR<Prisma.ChangeRequestCreateWithoutIncorporatedVersionInput, Prisma.ChangeRequestUncheckedCreateWithoutIncorporatedVersionInput> | Prisma.ChangeRequestCreateWithoutIncorporatedVersionInput[] | Prisma.ChangeRequestUncheckedCreateWithoutIncorporatedVersionInput[];
    connectOrCreate?: Prisma.ChangeRequestCreateOrConnectWithoutIncorporatedVersionInput | Prisma.ChangeRequestCreateOrConnectWithoutIncorporatedVersionInput[];
    upsert?: Prisma.ChangeRequestUpsertWithWhereUniqueWithoutIncorporatedVersionInput | Prisma.ChangeRequestUpsertWithWhereUniqueWithoutIncorporatedVersionInput[];
    createMany?: Prisma.ChangeRequestCreateManyIncorporatedVersionInputEnvelope;
    set?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    disconnect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    delete?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    connect?: Prisma.ChangeRequestWhereUniqueInput | Prisma.ChangeRequestWhereUniqueInput[];
    update?: Prisma.ChangeRequestUpdateWithWhereUniqueWithoutIncorporatedVersionInput | Prisma.ChangeRequestUpdateWithWhereUniqueWithoutIncorporatedVersionInput[];
    updateMany?: Prisma.ChangeRequestUpdateManyWithWhereWithoutIncorporatedVersionInput | Prisma.ChangeRequestUpdateManyWithWhereWithoutIncorporatedVersionInput[];
    deleteMany?: Prisma.ChangeRequestScalarWhereInput | Prisma.ChangeRequestScalarWhereInput[];
};
export type EnumChangeRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChangeRequestStatus;
};
export type ChangeRequestCreateWithoutTenantInput = {
    id?: string;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
    document: Prisma.DocumentCreateNestedOneWithoutChangeRequestsInput;
    sourceVersion: Prisma.DocumentVersionCreateNestedOneWithoutChangeRequestsInput;
    requestedBy: Prisma.UserCreateNestedOneWithoutChangeRequestsInitiatedInput;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutChangeRequestsReviewedInput;
    incorporatedVersion?: Prisma.DocumentVersionCreateNestedOneWithoutIncorporatedChangeRequestsInput;
};
export type ChangeRequestUncheckedCreateWithoutTenantInput = {
    id?: string;
    documentId: string;
    sourceVersionId: string;
    incorporatedVersionId?: string | null;
    requestedById: string;
    reviewedById?: string | null;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
};
export type ChangeRequestCreateOrConnectWithoutTenantInput = {
    where: Prisma.ChangeRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChangeRequestCreateWithoutTenantInput, Prisma.ChangeRequestUncheckedCreateWithoutTenantInput>;
};
export type ChangeRequestCreateManyTenantInputEnvelope = {
    data: Prisma.ChangeRequestCreateManyTenantInput | Prisma.ChangeRequestCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type ChangeRequestUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.ChangeRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChangeRequestUpdateWithoutTenantInput, Prisma.ChangeRequestUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.ChangeRequestCreateWithoutTenantInput, Prisma.ChangeRequestUncheckedCreateWithoutTenantInput>;
};
export type ChangeRequestUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.ChangeRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChangeRequestUpdateWithoutTenantInput, Prisma.ChangeRequestUncheckedUpdateWithoutTenantInput>;
};
export type ChangeRequestUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.ChangeRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.ChangeRequestUpdateManyMutationInput, Prisma.ChangeRequestUncheckedUpdateManyWithoutTenantInput>;
};
export type ChangeRequestScalarWhereInput = {
    AND?: Prisma.ChangeRequestScalarWhereInput | Prisma.ChangeRequestScalarWhereInput[];
    OR?: Prisma.ChangeRequestScalarWhereInput[];
    NOT?: Prisma.ChangeRequestScalarWhereInput | Prisma.ChangeRequestScalarWhereInput[];
    id?: Prisma.StringFilter<"ChangeRequest"> | string;
    tenantId?: Prisma.StringFilter<"ChangeRequest"> | string;
    documentId?: Prisma.StringFilter<"ChangeRequest"> | string;
    sourceVersionId?: Prisma.StringFilter<"ChangeRequest"> | string;
    incorporatedVersionId?: Prisma.StringNullableFilter<"ChangeRequest"> | string | null;
    requestedById?: Prisma.StringFilter<"ChangeRequest"> | string;
    reviewedById?: Prisma.StringNullableFilter<"ChangeRequest"> | string | null;
    status?: Prisma.EnumChangeRequestStatusFilter<"ChangeRequest"> | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFilter<"ChangeRequest"> | string;
    proposedChange?: Prisma.StringFilter<"ChangeRequest"> | string;
    reason?: Prisma.StringFilter<"ChangeRequest"> | string;
    managementComment?: Prisma.StringNullableFilter<"ChangeRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ChangeRequest"> | Date | string;
    reviewedAt?: Prisma.DateTimeNullableFilter<"ChangeRequest"> | Date | string | null;
};
export type ChangeRequestCreateWithoutRequestedByInput = {
    id?: string;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutChangeRequestsInput;
    document: Prisma.DocumentCreateNestedOneWithoutChangeRequestsInput;
    sourceVersion: Prisma.DocumentVersionCreateNestedOneWithoutChangeRequestsInput;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutChangeRequestsReviewedInput;
    incorporatedVersion?: Prisma.DocumentVersionCreateNestedOneWithoutIncorporatedChangeRequestsInput;
};
export type ChangeRequestUncheckedCreateWithoutRequestedByInput = {
    id?: string;
    tenantId: string;
    documentId: string;
    sourceVersionId: string;
    incorporatedVersionId?: string | null;
    reviewedById?: string | null;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
};
export type ChangeRequestCreateOrConnectWithoutRequestedByInput = {
    where: Prisma.ChangeRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChangeRequestCreateWithoutRequestedByInput, Prisma.ChangeRequestUncheckedCreateWithoutRequestedByInput>;
};
export type ChangeRequestCreateManyRequestedByInputEnvelope = {
    data: Prisma.ChangeRequestCreateManyRequestedByInput | Prisma.ChangeRequestCreateManyRequestedByInput[];
    skipDuplicates?: boolean;
};
export type ChangeRequestCreateWithoutReviewedByInput = {
    id?: string;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutChangeRequestsInput;
    document: Prisma.DocumentCreateNestedOneWithoutChangeRequestsInput;
    sourceVersion: Prisma.DocumentVersionCreateNestedOneWithoutChangeRequestsInput;
    requestedBy: Prisma.UserCreateNestedOneWithoutChangeRequestsInitiatedInput;
    incorporatedVersion?: Prisma.DocumentVersionCreateNestedOneWithoutIncorporatedChangeRequestsInput;
};
export type ChangeRequestUncheckedCreateWithoutReviewedByInput = {
    id?: string;
    tenantId: string;
    documentId: string;
    sourceVersionId: string;
    incorporatedVersionId?: string | null;
    requestedById: string;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
};
export type ChangeRequestCreateOrConnectWithoutReviewedByInput = {
    where: Prisma.ChangeRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChangeRequestCreateWithoutReviewedByInput, Prisma.ChangeRequestUncheckedCreateWithoutReviewedByInput>;
};
export type ChangeRequestCreateManyReviewedByInputEnvelope = {
    data: Prisma.ChangeRequestCreateManyReviewedByInput | Prisma.ChangeRequestCreateManyReviewedByInput[];
    skipDuplicates?: boolean;
};
export type ChangeRequestUpsertWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.ChangeRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChangeRequestUpdateWithoutRequestedByInput, Prisma.ChangeRequestUncheckedUpdateWithoutRequestedByInput>;
    create: Prisma.XOR<Prisma.ChangeRequestCreateWithoutRequestedByInput, Prisma.ChangeRequestUncheckedCreateWithoutRequestedByInput>;
};
export type ChangeRequestUpdateWithWhereUniqueWithoutRequestedByInput = {
    where: Prisma.ChangeRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChangeRequestUpdateWithoutRequestedByInput, Prisma.ChangeRequestUncheckedUpdateWithoutRequestedByInput>;
};
export type ChangeRequestUpdateManyWithWhereWithoutRequestedByInput = {
    where: Prisma.ChangeRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.ChangeRequestUpdateManyMutationInput, Prisma.ChangeRequestUncheckedUpdateManyWithoutRequestedByInput>;
};
export type ChangeRequestUpsertWithWhereUniqueWithoutReviewedByInput = {
    where: Prisma.ChangeRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChangeRequestUpdateWithoutReviewedByInput, Prisma.ChangeRequestUncheckedUpdateWithoutReviewedByInput>;
    create: Prisma.XOR<Prisma.ChangeRequestCreateWithoutReviewedByInput, Prisma.ChangeRequestUncheckedCreateWithoutReviewedByInput>;
};
export type ChangeRequestUpdateWithWhereUniqueWithoutReviewedByInput = {
    where: Prisma.ChangeRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChangeRequestUpdateWithoutReviewedByInput, Prisma.ChangeRequestUncheckedUpdateWithoutReviewedByInput>;
};
export type ChangeRequestUpdateManyWithWhereWithoutReviewedByInput = {
    where: Prisma.ChangeRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.ChangeRequestUpdateManyMutationInput, Prisma.ChangeRequestUncheckedUpdateManyWithoutReviewedByInput>;
};
export type ChangeRequestCreateWithoutDocumentInput = {
    id?: string;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutChangeRequestsInput;
    sourceVersion: Prisma.DocumentVersionCreateNestedOneWithoutChangeRequestsInput;
    requestedBy: Prisma.UserCreateNestedOneWithoutChangeRequestsInitiatedInput;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutChangeRequestsReviewedInput;
    incorporatedVersion?: Prisma.DocumentVersionCreateNestedOneWithoutIncorporatedChangeRequestsInput;
};
export type ChangeRequestUncheckedCreateWithoutDocumentInput = {
    id?: string;
    tenantId: string;
    sourceVersionId: string;
    incorporatedVersionId?: string | null;
    requestedById: string;
    reviewedById?: string | null;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
};
export type ChangeRequestCreateOrConnectWithoutDocumentInput = {
    where: Prisma.ChangeRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChangeRequestCreateWithoutDocumentInput, Prisma.ChangeRequestUncheckedCreateWithoutDocumentInput>;
};
export type ChangeRequestCreateManyDocumentInputEnvelope = {
    data: Prisma.ChangeRequestCreateManyDocumentInput | Prisma.ChangeRequestCreateManyDocumentInput[];
    skipDuplicates?: boolean;
};
export type ChangeRequestUpsertWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.ChangeRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChangeRequestUpdateWithoutDocumentInput, Prisma.ChangeRequestUncheckedUpdateWithoutDocumentInput>;
    create: Prisma.XOR<Prisma.ChangeRequestCreateWithoutDocumentInput, Prisma.ChangeRequestUncheckedCreateWithoutDocumentInput>;
};
export type ChangeRequestUpdateWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.ChangeRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChangeRequestUpdateWithoutDocumentInput, Prisma.ChangeRequestUncheckedUpdateWithoutDocumentInput>;
};
export type ChangeRequestUpdateManyWithWhereWithoutDocumentInput = {
    where: Prisma.ChangeRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.ChangeRequestUpdateManyMutationInput, Prisma.ChangeRequestUncheckedUpdateManyWithoutDocumentInput>;
};
export type ChangeRequestCreateWithoutSourceVersionInput = {
    id?: string;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutChangeRequestsInput;
    document: Prisma.DocumentCreateNestedOneWithoutChangeRequestsInput;
    requestedBy: Prisma.UserCreateNestedOneWithoutChangeRequestsInitiatedInput;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutChangeRequestsReviewedInput;
    incorporatedVersion?: Prisma.DocumentVersionCreateNestedOneWithoutIncorporatedChangeRequestsInput;
};
export type ChangeRequestUncheckedCreateWithoutSourceVersionInput = {
    id?: string;
    tenantId: string;
    documentId: string;
    incorporatedVersionId?: string | null;
    requestedById: string;
    reviewedById?: string | null;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
};
export type ChangeRequestCreateOrConnectWithoutSourceVersionInput = {
    where: Prisma.ChangeRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChangeRequestCreateWithoutSourceVersionInput, Prisma.ChangeRequestUncheckedCreateWithoutSourceVersionInput>;
};
export type ChangeRequestCreateManySourceVersionInputEnvelope = {
    data: Prisma.ChangeRequestCreateManySourceVersionInput | Prisma.ChangeRequestCreateManySourceVersionInput[];
    skipDuplicates?: boolean;
};
export type ChangeRequestCreateWithoutIncorporatedVersionInput = {
    id?: string;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutChangeRequestsInput;
    document: Prisma.DocumentCreateNestedOneWithoutChangeRequestsInput;
    sourceVersion: Prisma.DocumentVersionCreateNestedOneWithoutChangeRequestsInput;
    requestedBy: Prisma.UserCreateNestedOneWithoutChangeRequestsInitiatedInput;
    reviewedBy?: Prisma.UserCreateNestedOneWithoutChangeRequestsReviewedInput;
};
export type ChangeRequestUncheckedCreateWithoutIncorporatedVersionInput = {
    id?: string;
    tenantId: string;
    documentId: string;
    sourceVersionId: string;
    requestedById: string;
    reviewedById?: string | null;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
};
export type ChangeRequestCreateOrConnectWithoutIncorporatedVersionInput = {
    where: Prisma.ChangeRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChangeRequestCreateWithoutIncorporatedVersionInput, Prisma.ChangeRequestUncheckedCreateWithoutIncorporatedVersionInput>;
};
export type ChangeRequestCreateManyIncorporatedVersionInputEnvelope = {
    data: Prisma.ChangeRequestCreateManyIncorporatedVersionInput | Prisma.ChangeRequestCreateManyIncorporatedVersionInput[];
    skipDuplicates?: boolean;
};
export type ChangeRequestUpsertWithWhereUniqueWithoutSourceVersionInput = {
    where: Prisma.ChangeRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChangeRequestUpdateWithoutSourceVersionInput, Prisma.ChangeRequestUncheckedUpdateWithoutSourceVersionInput>;
    create: Prisma.XOR<Prisma.ChangeRequestCreateWithoutSourceVersionInput, Prisma.ChangeRequestUncheckedCreateWithoutSourceVersionInput>;
};
export type ChangeRequestUpdateWithWhereUniqueWithoutSourceVersionInput = {
    where: Prisma.ChangeRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChangeRequestUpdateWithoutSourceVersionInput, Prisma.ChangeRequestUncheckedUpdateWithoutSourceVersionInput>;
};
export type ChangeRequestUpdateManyWithWhereWithoutSourceVersionInput = {
    where: Prisma.ChangeRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.ChangeRequestUpdateManyMutationInput, Prisma.ChangeRequestUncheckedUpdateManyWithoutSourceVersionInput>;
};
export type ChangeRequestUpsertWithWhereUniqueWithoutIncorporatedVersionInput = {
    where: Prisma.ChangeRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChangeRequestUpdateWithoutIncorporatedVersionInput, Prisma.ChangeRequestUncheckedUpdateWithoutIncorporatedVersionInput>;
    create: Prisma.XOR<Prisma.ChangeRequestCreateWithoutIncorporatedVersionInput, Prisma.ChangeRequestUncheckedCreateWithoutIncorporatedVersionInput>;
};
export type ChangeRequestUpdateWithWhereUniqueWithoutIncorporatedVersionInput = {
    where: Prisma.ChangeRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChangeRequestUpdateWithoutIncorporatedVersionInput, Prisma.ChangeRequestUncheckedUpdateWithoutIncorporatedVersionInput>;
};
export type ChangeRequestUpdateManyWithWhereWithoutIncorporatedVersionInput = {
    where: Prisma.ChangeRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.ChangeRequestUpdateManyMutationInput, Prisma.ChangeRequestUncheckedUpdateManyWithoutIncorporatedVersionInput>;
};
export type ChangeRequestCreateManyTenantInput = {
    id?: string;
    documentId: string;
    sourceVersionId: string;
    incorporatedVersionId?: string | null;
    requestedById: string;
    reviewedById?: string | null;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
};
export type ChangeRequestUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document?: Prisma.DocumentUpdateOneRequiredWithoutChangeRequestsNestedInput;
    sourceVersion?: Prisma.DocumentVersionUpdateOneRequiredWithoutChangeRequestsNestedInput;
    requestedBy?: Prisma.UserUpdateOneRequiredWithoutChangeRequestsInitiatedNestedInput;
    reviewedBy?: Prisma.UserUpdateOneWithoutChangeRequestsReviewedNestedInput;
    incorporatedVersion?: Prisma.DocumentVersionUpdateOneWithoutIncorporatedChangeRequestsNestedInput;
};
export type ChangeRequestUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    incorporatedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ChangeRequestUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    incorporatedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ChangeRequestCreateManyRequestedByInput = {
    id?: string;
    tenantId: string;
    documentId: string;
    sourceVersionId: string;
    incorporatedVersionId?: string | null;
    reviewedById?: string | null;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
};
export type ChangeRequestCreateManyReviewedByInput = {
    id?: string;
    tenantId: string;
    documentId: string;
    sourceVersionId: string;
    incorporatedVersionId?: string | null;
    requestedById: string;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
};
export type ChangeRequestUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutChangeRequestsNestedInput;
    document?: Prisma.DocumentUpdateOneRequiredWithoutChangeRequestsNestedInput;
    sourceVersion?: Prisma.DocumentVersionUpdateOneRequiredWithoutChangeRequestsNestedInput;
    reviewedBy?: Prisma.UserUpdateOneWithoutChangeRequestsReviewedNestedInput;
    incorporatedVersion?: Prisma.DocumentVersionUpdateOneWithoutIncorporatedChangeRequestsNestedInput;
};
export type ChangeRequestUncheckedUpdateWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    incorporatedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ChangeRequestUncheckedUpdateManyWithoutRequestedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    incorporatedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ChangeRequestUpdateWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutChangeRequestsNestedInput;
    document?: Prisma.DocumentUpdateOneRequiredWithoutChangeRequestsNestedInput;
    sourceVersion?: Prisma.DocumentVersionUpdateOneRequiredWithoutChangeRequestsNestedInput;
    requestedBy?: Prisma.UserUpdateOneRequiredWithoutChangeRequestsInitiatedNestedInput;
    incorporatedVersion?: Prisma.DocumentVersionUpdateOneWithoutIncorporatedChangeRequestsNestedInput;
};
export type ChangeRequestUncheckedUpdateWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    incorporatedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ChangeRequestUncheckedUpdateManyWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    incorporatedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ChangeRequestCreateManyDocumentInput = {
    id?: string;
    tenantId: string;
    sourceVersionId: string;
    incorporatedVersionId?: string | null;
    requestedById: string;
    reviewedById?: string | null;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
};
export type ChangeRequestUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutChangeRequestsNestedInput;
    sourceVersion?: Prisma.DocumentVersionUpdateOneRequiredWithoutChangeRequestsNestedInput;
    requestedBy?: Prisma.UserUpdateOneRequiredWithoutChangeRequestsInitiatedNestedInput;
    reviewedBy?: Prisma.UserUpdateOneWithoutChangeRequestsReviewedNestedInput;
    incorporatedVersion?: Prisma.DocumentVersionUpdateOneWithoutIncorporatedChangeRequestsNestedInput;
};
export type ChangeRequestUncheckedUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    incorporatedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ChangeRequestUncheckedUpdateManyWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    incorporatedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ChangeRequestCreateManySourceVersionInput = {
    id?: string;
    tenantId: string;
    documentId: string;
    incorporatedVersionId?: string | null;
    requestedById: string;
    reviewedById?: string | null;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
};
export type ChangeRequestCreateManyIncorporatedVersionInput = {
    id?: string;
    tenantId: string;
    documentId: string;
    sourceVersionId: string;
    requestedById: string;
    reviewedById?: string | null;
    status?: $Enums.ChangeRequestStatus;
    existingRequirement: string;
    proposedChange: string;
    reason: string;
    managementComment?: string | null;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
};
export type ChangeRequestUpdateWithoutSourceVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutChangeRequestsNestedInput;
    document?: Prisma.DocumentUpdateOneRequiredWithoutChangeRequestsNestedInput;
    requestedBy?: Prisma.UserUpdateOneRequiredWithoutChangeRequestsInitiatedNestedInput;
    reviewedBy?: Prisma.UserUpdateOneWithoutChangeRequestsReviewedNestedInput;
    incorporatedVersion?: Prisma.DocumentVersionUpdateOneWithoutIncorporatedChangeRequestsNestedInput;
};
export type ChangeRequestUncheckedUpdateWithoutSourceVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    incorporatedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ChangeRequestUncheckedUpdateManyWithoutSourceVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    incorporatedVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ChangeRequestUpdateWithoutIncorporatedVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutChangeRequestsNestedInput;
    document?: Prisma.DocumentUpdateOneRequiredWithoutChangeRequestsNestedInput;
    sourceVersion?: Prisma.DocumentVersionUpdateOneRequiredWithoutChangeRequestsNestedInput;
    requestedBy?: Prisma.UserUpdateOneRequiredWithoutChangeRequestsInitiatedNestedInput;
    reviewedBy?: Prisma.UserUpdateOneWithoutChangeRequestsReviewedNestedInput;
};
export type ChangeRequestUncheckedUpdateWithoutIncorporatedVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ChangeRequestUncheckedUpdateManyWithoutIncorporatedVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestedById?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumChangeRequestStatusFieldUpdateOperationsInput | $Enums.ChangeRequestStatus;
    existingRequirement?: Prisma.StringFieldUpdateOperationsInput | string;
    proposedChange?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    managementComment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ChangeRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    documentId?: boolean;
    sourceVersionId?: boolean;
    incorporatedVersionId?: boolean;
    requestedById?: boolean;
    reviewedById?: boolean;
    status?: boolean;
    existingRequirement?: boolean;
    proposedChange?: boolean;
    reason?: boolean;
    managementComment?: boolean;
    createdAt?: boolean;
    reviewedAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    sourceVersion?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.ChangeRequest$reviewedByArgs<ExtArgs>;
    incorporatedVersion?: boolean | Prisma.ChangeRequest$incorporatedVersionArgs<ExtArgs>;
}, ExtArgs["result"]["changeRequest"]>;
export type ChangeRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    documentId?: boolean;
    sourceVersionId?: boolean;
    incorporatedVersionId?: boolean;
    requestedById?: boolean;
    reviewedById?: boolean;
    status?: boolean;
    existingRequirement?: boolean;
    proposedChange?: boolean;
    reason?: boolean;
    managementComment?: boolean;
    createdAt?: boolean;
    reviewedAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    sourceVersion?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.ChangeRequest$reviewedByArgs<ExtArgs>;
    incorporatedVersion?: boolean | Prisma.ChangeRequest$incorporatedVersionArgs<ExtArgs>;
}, ExtArgs["result"]["changeRequest"]>;
export type ChangeRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    documentId?: boolean;
    sourceVersionId?: boolean;
    incorporatedVersionId?: boolean;
    requestedById?: boolean;
    reviewedById?: boolean;
    status?: boolean;
    existingRequirement?: boolean;
    proposedChange?: boolean;
    reason?: boolean;
    managementComment?: boolean;
    createdAt?: boolean;
    reviewedAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    sourceVersion?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.ChangeRequest$reviewedByArgs<ExtArgs>;
    incorporatedVersion?: boolean | Prisma.ChangeRequest$incorporatedVersionArgs<ExtArgs>;
}, ExtArgs["result"]["changeRequest"]>;
export type ChangeRequestSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    documentId?: boolean;
    sourceVersionId?: boolean;
    incorporatedVersionId?: boolean;
    requestedById?: boolean;
    reviewedById?: boolean;
    status?: boolean;
    existingRequirement?: boolean;
    proposedChange?: boolean;
    reason?: boolean;
    managementComment?: boolean;
    createdAt?: boolean;
    reviewedAt?: boolean;
};
export type ChangeRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "documentId" | "sourceVersionId" | "incorporatedVersionId" | "requestedById" | "reviewedById" | "status" | "existingRequirement" | "proposedChange" | "reason" | "managementComment" | "createdAt" | "reviewedAt", ExtArgs["result"]["changeRequest"]>;
export type ChangeRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    sourceVersion?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.ChangeRequest$reviewedByArgs<ExtArgs>;
    incorporatedVersion?: boolean | Prisma.ChangeRequest$incorporatedVersionArgs<ExtArgs>;
};
export type ChangeRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    sourceVersion?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.ChangeRequest$reviewedByArgs<ExtArgs>;
    incorporatedVersion?: boolean | Prisma.ChangeRequest$incorporatedVersionArgs<ExtArgs>;
};
export type ChangeRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    sourceVersion?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    requestedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.ChangeRequest$reviewedByArgs<ExtArgs>;
    incorporatedVersion?: boolean | Prisma.ChangeRequest$incorporatedVersionArgs<ExtArgs>;
};
export type $ChangeRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ChangeRequest";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
        document: Prisma.$DocumentPayload<ExtArgs>;
        sourceVersion: Prisma.$DocumentVersionPayload<ExtArgs>;
        requestedBy: Prisma.$UserPayload<ExtArgs>;
        reviewedBy: Prisma.$UserPayload<ExtArgs> | null;
        incorporatedVersion: Prisma.$DocumentVersionPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        documentId: string;
        sourceVersionId: string;
        incorporatedVersionId: string | null;
        requestedById: string;
        reviewedById: string | null;
        status: $Enums.ChangeRequestStatus;
        existingRequirement: string;
        proposedChange: string;
        reason: string;
        managementComment: string | null;
        createdAt: Date;
        reviewedAt: Date | null;
    }, ExtArgs["result"]["changeRequest"]>;
    composites: {};
};
export type ChangeRequestGetPayload<S extends boolean | null | undefined | ChangeRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChangeRequestPayload, S>;
export type ChangeRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChangeRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChangeRequestCountAggregateInputType | true;
};
export interface ChangeRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ChangeRequest'];
        meta: {
            name: 'ChangeRequest';
        };
    };
    findUnique<T extends ChangeRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, ChangeRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$ChangeRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ChangeRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChangeRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$ChangeRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ChangeRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, ChangeRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$ChangeRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ChangeRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChangeRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$ChangeRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ChangeRequestFindManyArgs>(args?: Prisma.SelectSubset<T, ChangeRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChangeRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ChangeRequestCreateArgs>(args: Prisma.SelectSubset<T, ChangeRequestCreateArgs<ExtArgs>>): Prisma.Prisma__ChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$ChangeRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ChangeRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, ChangeRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ChangeRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ChangeRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChangeRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ChangeRequestDeleteArgs>(args: Prisma.SelectSubset<T, ChangeRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__ChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$ChangeRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ChangeRequestUpdateArgs>(args: Prisma.SelectSubset<T, ChangeRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__ChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$ChangeRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ChangeRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChangeRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ChangeRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, ChangeRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ChangeRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ChangeRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChangeRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ChangeRequestUpsertArgs>(args: Prisma.SelectSubset<T, ChangeRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__ChangeRequestClient<runtime.Types.Result.GetResult<Prisma.$ChangeRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ChangeRequestCountArgs>(args?: Prisma.Subset<T, ChangeRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChangeRequestCountAggregateOutputType> : number>;
    aggregate<T extends ChangeRequestAggregateArgs>(args: Prisma.Subset<T, ChangeRequestAggregateArgs>): Prisma.PrismaPromise<GetChangeRequestAggregateType<T>>;
    groupBy<T extends ChangeRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChangeRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: ChangeRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChangeRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChangeRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ChangeRequestFieldRefs;
}
export interface Prisma__ChangeRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    document<T extends Prisma.DocumentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentDefaultArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sourceVersion<T extends Prisma.DocumentVersionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentVersionDefaultArgs<ExtArgs>>): Prisma.Prisma__DocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    requestedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reviewedBy<T extends Prisma.ChangeRequest$reviewedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChangeRequest$reviewedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    incorporatedVersion<T extends Prisma.ChangeRequest$incorporatedVersionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChangeRequest$incorporatedVersionArgs<ExtArgs>>): Prisma.Prisma__DocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ChangeRequestFieldRefs {
    readonly id: Prisma.FieldRef<"ChangeRequest", 'String'>;
    readonly tenantId: Prisma.FieldRef<"ChangeRequest", 'String'>;
    readonly documentId: Prisma.FieldRef<"ChangeRequest", 'String'>;
    readonly sourceVersionId: Prisma.FieldRef<"ChangeRequest", 'String'>;
    readonly incorporatedVersionId: Prisma.FieldRef<"ChangeRequest", 'String'>;
    readonly requestedById: Prisma.FieldRef<"ChangeRequest", 'String'>;
    readonly reviewedById: Prisma.FieldRef<"ChangeRequest", 'String'>;
    readonly status: Prisma.FieldRef<"ChangeRequest", 'ChangeRequestStatus'>;
    readonly existingRequirement: Prisma.FieldRef<"ChangeRequest", 'String'>;
    readonly proposedChange: Prisma.FieldRef<"ChangeRequest", 'String'>;
    readonly reason: Prisma.FieldRef<"ChangeRequest", 'String'>;
    readonly managementComment: Prisma.FieldRef<"ChangeRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ChangeRequest", 'DateTime'>;
    readonly reviewedAt: Prisma.FieldRef<"ChangeRequest", 'DateTime'>;
}
export type ChangeRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.ChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.ChangeRequestInclude<ExtArgs> | null;
    where: Prisma.ChangeRequestWhereUniqueInput;
};
export type ChangeRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.ChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.ChangeRequestInclude<ExtArgs> | null;
    where: Prisma.ChangeRequestWhereUniqueInput;
};
export type ChangeRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.ChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.ChangeRequestInclude<ExtArgs> | null;
    where?: Prisma.ChangeRequestWhereInput;
    orderBy?: Prisma.ChangeRequestOrderByWithRelationInput | Prisma.ChangeRequestOrderByWithRelationInput[];
    cursor?: Prisma.ChangeRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChangeRequestScalarFieldEnum | Prisma.ChangeRequestScalarFieldEnum[];
};
export type ChangeRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.ChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.ChangeRequestInclude<ExtArgs> | null;
    where?: Prisma.ChangeRequestWhereInput;
    orderBy?: Prisma.ChangeRequestOrderByWithRelationInput | Prisma.ChangeRequestOrderByWithRelationInput[];
    cursor?: Prisma.ChangeRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChangeRequestScalarFieldEnum | Prisma.ChangeRequestScalarFieldEnum[];
};
export type ChangeRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.ChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.ChangeRequestInclude<ExtArgs> | null;
    where?: Prisma.ChangeRequestWhereInput;
    orderBy?: Prisma.ChangeRequestOrderByWithRelationInput | Prisma.ChangeRequestOrderByWithRelationInput[];
    cursor?: Prisma.ChangeRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChangeRequestScalarFieldEnum | Prisma.ChangeRequestScalarFieldEnum[];
};
export type ChangeRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.ChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.ChangeRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChangeRequestCreateInput, Prisma.ChangeRequestUncheckedCreateInput>;
};
export type ChangeRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ChangeRequestCreateManyInput | Prisma.ChangeRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ChangeRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ChangeRequestOmit<ExtArgs> | null;
    data: Prisma.ChangeRequestCreateManyInput | Prisma.ChangeRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ChangeRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ChangeRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.ChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.ChangeRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChangeRequestUpdateInput, Prisma.ChangeRequestUncheckedUpdateInput>;
    where: Prisma.ChangeRequestWhereUniqueInput;
};
export type ChangeRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ChangeRequestUpdateManyMutationInput, Prisma.ChangeRequestUncheckedUpdateManyInput>;
    where?: Prisma.ChangeRequestWhereInput;
    limit?: number;
};
export type ChangeRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ChangeRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChangeRequestUpdateManyMutationInput, Prisma.ChangeRequestUncheckedUpdateManyInput>;
    where?: Prisma.ChangeRequestWhereInput;
    limit?: number;
    include?: Prisma.ChangeRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ChangeRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.ChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.ChangeRequestInclude<ExtArgs> | null;
    where: Prisma.ChangeRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChangeRequestCreateInput, Prisma.ChangeRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ChangeRequestUpdateInput, Prisma.ChangeRequestUncheckedUpdateInput>;
};
export type ChangeRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.ChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.ChangeRequestInclude<ExtArgs> | null;
    where: Prisma.ChangeRequestWhereUniqueInput;
};
export type ChangeRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChangeRequestWhereInput;
    limit?: number;
};
export type ChangeRequest$reviewedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type ChangeRequest$incorporatedVersionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.DocumentVersionInclude<ExtArgs> | null;
    where?: Prisma.DocumentVersionWhereInput;
};
export type ChangeRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChangeRequestSelect<ExtArgs> | null;
    omit?: Prisma.ChangeRequestOmit<ExtArgs> | null;
    include?: Prisma.ChangeRequestInclude<ExtArgs> | null;
};
