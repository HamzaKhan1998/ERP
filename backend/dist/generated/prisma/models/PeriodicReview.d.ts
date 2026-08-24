import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PeriodicReviewModel = runtime.Types.Result.DefaultSelection<Prisma.$PeriodicReviewPayload>;
export type AggregatePeriodicReview = {
    _count: PeriodicReviewCountAggregateOutputType | null;
    _min: PeriodicReviewMinAggregateOutputType | null;
    _max: PeriodicReviewMaxAggregateOutputType | null;
};
export type PeriodicReviewMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    versionId: string | null;
    reviewedById: string | null;
    outcome: $Enums.PeriodicReviewOutcome | null;
    comments: string | null;
    referencesChecked: string | null;
    reviewedAt: Date | null;
    nextReviewDate: Date | null;
};
export type PeriodicReviewMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    versionId: string | null;
    reviewedById: string | null;
    outcome: $Enums.PeriodicReviewOutcome | null;
    comments: string | null;
    referencesChecked: string | null;
    reviewedAt: Date | null;
    nextReviewDate: Date | null;
};
export type PeriodicReviewCountAggregateOutputType = {
    id: number;
    tenantId: number;
    versionId: number;
    reviewedById: number;
    outcome: number;
    comments: number;
    referencesChecked: number;
    reviewedAt: number;
    nextReviewDate: number;
    _all: number;
};
export type PeriodicReviewMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    versionId?: true;
    reviewedById?: true;
    outcome?: true;
    comments?: true;
    referencesChecked?: true;
    reviewedAt?: true;
    nextReviewDate?: true;
};
export type PeriodicReviewMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    versionId?: true;
    reviewedById?: true;
    outcome?: true;
    comments?: true;
    referencesChecked?: true;
    reviewedAt?: true;
    nextReviewDate?: true;
};
export type PeriodicReviewCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    versionId?: true;
    reviewedById?: true;
    outcome?: true;
    comments?: true;
    referencesChecked?: true;
    reviewedAt?: true;
    nextReviewDate?: true;
    _all?: true;
};
export type PeriodicReviewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PeriodicReviewWhereInput;
    orderBy?: Prisma.PeriodicReviewOrderByWithRelationInput | Prisma.PeriodicReviewOrderByWithRelationInput[];
    cursor?: Prisma.PeriodicReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PeriodicReviewCountAggregateInputType;
    _min?: PeriodicReviewMinAggregateInputType;
    _max?: PeriodicReviewMaxAggregateInputType;
};
export type GetPeriodicReviewAggregateType<T extends PeriodicReviewAggregateArgs> = {
    [P in keyof T & keyof AggregatePeriodicReview]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePeriodicReview[P]> : Prisma.GetScalarType<T[P], AggregatePeriodicReview[P]>;
};
export type PeriodicReviewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PeriodicReviewWhereInput;
    orderBy?: Prisma.PeriodicReviewOrderByWithAggregationInput | Prisma.PeriodicReviewOrderByWithAggregationInput[];
    by: Prisma.PeriodicReviewScalarFieldEnum[] | Prisma.PeriodicReviewScalarFieldEnum;
    having?: Prisma.PeriodicReviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PeriodicReviewCountAggregateInputType | true;
    _min?: PeriodicReviewMinAggregateInputType;
    _max?: PeriodicReviewMaxAggregateInputType;
};
export type PeriodicReviewGroupByOutputType = {
    id: string;
    tenantId: string;
    versionId: string;
    reviewedById: string;
    outcome: $Enums.PeriodicReviewOutcome;
    comments: string | null;
    referencesChecked: string | null;
    reviewedAt: Date;
    nextReviewDate: Date | null;
    _count: PeriodicReviewCountAggregateOutputType | null;
    _min: PeriodicReviewMinAggregateOutputType | null;
    _max: PeriodicReviewMaxAggregateOutputType | null;
};
export type GetPeriodicReviewGroupByPayload<T extends PeriodicReviewGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PeriodicReviewGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PeriodicReviewGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PeriodicReviewGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PeriodicReviewGroupByOutputType[P]>;
}>>;
export type PeriodicReviewWhereInput = {
    AND?: Prisma.PeriodicReviewWhereInput | Prisma.PeriodicReviewWhereInput[];
    OR?: Prisma.PeriodicReviewWhereInput[];
    NOT?: Prisma.PeriodicReviewWhereInput | Prisma.PeriodicReviewWhereInput[];
    id?: Prisma.StringFilter<"PeriodicReview"> | string;
    tenantId?: Prisma.StringFilter<"PeriodicReview"> | string;
    versionId?: Prisma.StringFilter<"PeriodicReview"> | string;
    reviewedById?: Prisma.StringFilter<"PeriodicReview"> | string;
    outcome?: Prisma.EnumPeriodicReviewOutcomeFilter<"PeriodicReview"> | $Enums.PeriodicReviewOutcome;
    comments?: Prisma.StringNullableFilter<"PeriodicReview"> | string | null;
    referencesChecked?: Prisma.StringNullableFilter<"PeriodicReview"> | string | null;
    reviewedAt?: Prisma.DateTimeFilter<"PeriodicReview"> | Date | string;
    nextReviewDate?: Prisma.DateTimeNullableFilter<"PeriodicReview"> | Date | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    version?: Prisma.XOR<Prisma.DocumentVersionScalarRelationFilter, Prisma.DocumentVersionWhereInput>;
    reviewedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type PeriodicReviewOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    comments?: Prisma.SortOrderInput | Prisma.SortOrder;
    referencesChecked?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    nextReviewDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    version?: Prisma.DocumentVersionOrderByWithRelationInput;
    reviewedBy?: Prisma.UserOrderByWithRelationInput;
};
export type PeriodicReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PeriodicReviewWhereInput | Prisma.PeriodicReviewWhereInput[];
    OR?: Prisma.PeriodicReviewWhereInput[];
    NOT?: Prisma.PeriodicReviewWhereInput | Prisma.PeriodicReviewWhereInput[];
    tenantId?: Prisma.StringFilter<"PeriodicReview"> | string;
    versionId?: Prisma.StringFilter<"PeriodicReview"> | string;
    reviewedById?: Prisma.StringFilter<"PeriodicReview"> | string;
    outcome?: Prisma.EnumPeriodicReviewOutcomeFilter<"PeriodicReview"> | $Enums.PeriodicReviewOutcome;
    comments?: Prisma.StringNullableFilter<"PeriodicReview"> | string | null;
    referencesChecked?: Prisma.StringNullableFilter<"PeriodicReview"> | string | null;
    reviewedAt?: Prisma.DateTimeFilter<"PeriodicReview"> | Date | string;
    nextReviewDate?: Prisma.DateTimeNullableFilter<"PeriodicReview"> | Date | string | null;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    version?: Prisma.XOR<Prisma.DocumentVersionScalarRelationFilter, Prisma.DocumentVersionWhereInput>;
    reviewedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type PeriodicReviewOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    comments?: Prisma.SortOrderInput | Prisma.SortOrder;
    referencesChecked?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    nextReviewDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PeriodicReviewCountOrderByAggregateInput;
    _max?: Prisma.PeriodicReviewMaxOrderByAggregateInput;
    _min?: Prisma.PeriodicReviewMinOrderByAggregateInput;
};
export type PeriodicReviewScalarWhereWithAggregatesInput = {
    AND?: Prisma.PeriodicReviewScalarWhereWithAggregatesInput | Prisma.PeriodicReviewScalarWhereWithAggregatesInput[];
    OR?: Prisma.PeriodicReviewScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PeriodicReviewScalarWhereWithAggregatesInput | Prisma.PeriodicReviewScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PeriodicReview"> | string;
    tenantId?: Prisma.StringWithAggregatesFilter<"PeriodicReview"> | string;
    versionId?: Prisma.StringWithAggregatesFilter<"PeriodicReview"> | string;
    reviewedById?: Prisma.StringWithAggregatesFilter<"PeriodicReview"> | string;
    outcome?: Prisma.EnumPeriodicReviewOutcomeWithAggregatesFilter<"PeriodicReview"> | $Enums.PeriodicReviewOutcome;
    comments?: Prisma.StringNullableWithAggregatesFilter<"PeriodicReview"> | string | null;
    referencesChecked?: Prisma.StringNullableWithAggregatesFilter<"PeriodicReview"> | string | null;
    reviewedAt?: Prisma.DateTimeWithAggregatesFilter<"PeriodicReview"> | Date | string;
    nextReviewDate?: Prisma.DateTimeNullableWithAggregatesFilter<"PeriodicReview"> | Date | string | null;
};
export type PeriodicReviewCreateInput = {
    id?: string;
    outcome: $Enums.PeriodicReviewOutcome;
    comments?: string | null;
    referencesChecked?: string | null;
    reviewedAt?: Date | string;
    nextReviewDate?: Date | string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutPeriodicReviewsInput;
    version: Prisma.DocumentVersionCreateNestedOneWithoutPeriodicReviewsInput;
    reviewedBy: Prisma.UserCreateNestedOneWithoutPeriodicReviewsInput;
};
export type PeriodicReviewUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    versionId: string;
    reviewedById: string;
    outcome: $Enums.PeriodicReviewOutcome;
    comments?: string | null;
    referencesChecked?: string | null;
    reviewedAt?: Date | string;
    nextReviewDate?: Date | string | null;
};
export type PeriodicReviewUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumPeriodicReviewOutcomeFieldUpdateOperationsInput | $Enums.PeriodicReviewOutcome;
    comments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencesChecked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutPeriodicReviewsNestedInput;
    version?: Prisma.DocumentVersionUpdateOneRequiredWithoutPeriodicReviewsNestedInput;
    reviewedBy?: Prisma.UserUpdateOneRequiredWithoutPeriodicReviewsNestedInput;
};
export type PeriodicReviewUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumPeriodicReviewOutcomeFieldUpdateOperationsInput | $Enums.PeriodicReviewOutcome;
    comments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencesChecked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PeriodicReviewCreateManyInput = {
    id?: string;
    tenantId: string;
    versionId: string;
    reviewedById: string;
    outcome: $Enums.PeriodicReviewOutcome;
    comments?: string | null;
    referencesChecked?: string | null;
    reviewedAt?: Date | string;
    nextReviewDate?: Date | string | null;
};
export type PeriodicReviewUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumPeriodicReviewOutcomeFieldUpdateOperationsInput | $Enums.PeriodicReviewOutcome;
    comments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencesChecked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PeriodicReviewUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumPeriodicReviewOutcomeFieldUpdateOperationsInput | $Enums.PeriodicReviewOutcome;
    comments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencesChecked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PeriodicReviewListRelationFilter = {
    every?: Prisma.PeriodicReviewWhereInput;
    some?: Prisma.PeriodicReviewWhereInput;
    none?: Prisma.PeriodicReviewWhereInput;
};
export type PeriodicReviewOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PeriodicReviewCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    comments?: Prisma.SortOrder;
    referencesChecked?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    nextReviewDate?: Prisma.SortOrder;
};
export type PeriodicReviewMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    comments?: Prisma.SortOrder;
    referencesChecked?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    nextReviewDate?: Prisma.SortOrder;
};
export type PeriodicReviewMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    comments?: Prisma.SortOrder;
    referencesChecked?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    nextReviewDate?: Prisma.SortOrder;
};
export type PeriodicReviewCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.PeriodicReviewCreateWithoutTenantInput, Prisma.PeriodicReviewUncheckedCreateWithoutTenantInput> | Prisma.PeriodicReviewCreateWithoutTenantInput[] | Prisma.PeriodicReviewUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.PeriodicReviewCreateOrConnectWithoutTenantInput | Prisma.PeriodicReviewCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.PeriodicReviewCreateManyTenantInputEnvelope;
    connect?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
};
export type PeriodicReviewUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.PeriodicReviewCreateWithoutTenantInput, Prisma.PeriodicReviewUncheckedCreateWithoutTenantInput> | Prisma.PeriodicReviewCreateWithoutTenantInput[] | Prisma.PeriodicReviewUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.PeriodicReviewCreateOrConnectWithoutTenantInput | Prisma.PeriodicReviewCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.PeriodicReviewCreateManyTenantInputEnvelope;
    connect?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
};
export type PeriodicReviewUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.PeriodicReviewCreateWithoutTenantInput, Prisma.PeriodicReviewUncheckedCreateWithoutTenantInput> | Prisma.PeriodicReviewCreateWithoutTenantInput[] | Prisma.PeriodicReviewUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.PeriodicReviewCreateOrConnectWithoutTenantInput | Prisma.PeriodicReviewCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.PeriodicReviewUpsertWithWhereUniqueWithoutTenantInput | Prisma.PeriodicReviewUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.PeriodicReviewCreateManyTenantInputEnvelope;
    set?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    disconnect?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    delete?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    connect?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    update?: Prisma.PeriodicReviewUpdateWithWhereUniqueWithoutTenantInput | Prisma.PeriodicReviewUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.PeriodicReviewUpdateManyWithWhereWithoutTenantInput | Prisma.PeriodicReviewUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.PeriodicReviewScalarWhereInput | Prisma.PeriodicReviewScalarWhereInput[];
};
export type PeriodicReviewUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.PeriodicReviewCreateWithoutTenantInput, Prisma.PeriodicReviewUncheckedCreateWithoutTenantInput> | Prisma.PeriodicReviewCreateWithoutTenantInput[] | Prisma.PeriodicReviewUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.PeriodicReviewCreateOrConnectWithoutTenantInput | Prisma.PeriodicReviewCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.PeriodicReviewUpsertWithWhereUniqueWithoutTenantInput | Prisma.PeriodicReviewUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.PeriodicReviewCreateManyTenantInputEnvelope;
    set?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    disconnect?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    delete?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    connect?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    update?: Prisma.PeriodicReviewUpdateWithWhereUniqueWithoutTenantInput | Prisma.PeriodicReviewUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.PeriodicReviewUpdateManyWithWhereWithoutTenantInput | Prisma.PeriodicReviewUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.PeriodicReviewScalarWhereInput | Prisma.PeriodicReviewScalarWhereInput[];
};
export type PeriodicReviewCreateNestedManyWithoutReviewedByInput = {
    create?: Prisma.XOR<Prisma.PeriodicReviewCreateWithoutReviewedByInput, Prisma.PeriodicReviewUncheckedCreateWithoutReviewedByInput> | Prisma.PeriodicReviewCreateWithoutReviewedByInput[] | Prisma.PeriodicReviewUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.PeriodicReviewCreateOrConnectWithoutReviewedByInput | Prisma.PeriodicReviewCreateOrConnectWithoutReviewedByInput[];
    createMany?: Prisma.PeriodicReviewCreateManyReviewedByInputEnvelope;
    connect?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
};
export type PeriodicReviewUncheckedCreateNestedManyWithoutReviewedByInput = {
    create?: Prisma.XOR<Prisma.PeriodicReviewCreateWithoutReviewedByInput, Prisma.PeriodicReviewUncheckedCreateWithoutReviewedByInput> | Prisma.PeriodicReviewCreateWithoutReviewedByInput[] | Prisma.PeriodicReviewUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.PeriodicReviewCreateOrConnectWithoutReviewedByInput | Prisma.PeriodicReviewCreateOrConnectWithoutReviewedByInput[];
    createMany?: Prisma.PeriodicReviewCreateManyReviewedByInputEnvelope;
    connect?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
};
export type PeriodicReviewUpdateManyWithoutReviewedByNestedInput = {
    create?: Prisma.XOR<Prisma.PeriodicReviewCreateWithoutReviewedByInput, Prisma.PeriodicReviewUncheckedCreateWithoutReviewedByInput> | Prisma.PeriodicReviewCreateWithoutReviewedByInput[] | Prisma.PeriodicReviewUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.PeriodicReviewCreateOrConnectWithoutReviewedByInput | Prisma.PeriodicReviewCreateOrConnectWithoutReviewedByInput[];
    upsert?: Prisma.PeriodicReviewUpsertWithWhereUniqueWithoutReviewedByInput | Prisma.PeriodicReviewUpsertWithWhereUniqueWithoutReviewedByInput[];
    createMany?: Prisma.PeriodicReviewCreateManyReviewedByInputEnvelope;
    set?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    disconnect?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    delete?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    connect?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    update?: Prisma.PeriodicReviewUpdateWithWhereUniqueWithoutReviewedByInput | Prisma.PeriodicReviewUpdateWithWhereUniqueWithoutReviewedByInput[];
    updateMany?: Prisma.PeriodicReviewUpdateManyWithWhereWithoutReviewedByInput | Prisma.PeriodicReviewUpdateManyWithWhereWithoutReviewedByInput[];
    deleteMany?: Prisma.PeriodicReviewScalarWhereInput | Prisma.PeriodicReviewScalarWhereInput[];
};
export type PeriodicReviewUncheckedUpdateManyWithoutReviewedByNestedInput = {
    create?: Prisma.XOR<Prisma.PeriodicReviewCreateWithoutReviewedByInput, Prisma.PeriodicReviewUncheckedCreateWithoutReviewedByInput> | Prisma.PeriodicReviewCreateWithoutReviewedByInput[] | Prisma.PeriodicReviewUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.PeriodicReviewCreateOrConnectWithoutReviewedByInput | Prisma.PeriodicReviewCreateOrConnectWithoutReviewedByInput[];
    upsert?: Prisma.PeriodicReviewUpsertWithWhereUniqueWithoutReviewedByInput | Prisma.PeriodicReviewUpsertWithWhereUniqueWithoutReviewedByInput[];
    createMany?: Prisma.PeriodicReviewCreateManyReviewedByInputEnvelope;
    set?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    disconnect?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    delete?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    connect?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    update?: Prisma.PeriodicReviewUpdateWithWhereUniqueWithoutReviewedByInput | Prisma.PeriodicReviewUpdateWithWhereUniqueWithoutReviewedByInput[];
    updateMany?: Prisma.PeriodicReviewUpdateManyWithWhereWithoutReviewedByInput | Prisma.PeriodicReviewUpdateManyWithWhereWithoutReviewedByInput[];
    deleteMany?: Prisma.PeriodicReviewScalarWhereInput | Prisma.PeriodicReviewScalarWhereInput[];
};
export type PeriodicReviewCreateNestedManyWithoutVersionInput = {
    create?: Prisma.XOR<Prisma.PeriodicReviewCreateWithoutVersionInput, Prisma.PeriodicReviewUncheckedCreateWithoutVersionInput> | Prisma.PeriodicReviewCreateWithoutVersionInput[] | Prisma.PeriodicReviewUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.PeriodicReviewCreateOrConnectWithoutVersionInput | Prisma.PeriodicReviewCreateOrConnectWithoutVersionInput[];
    createMany?: Prisma.PeriodicReviewCreateManyVersionInputEnvelope;
    connect?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
};
export type PeriodicReviewUncheckedCreateNestedManyWithoutVersionInput = {
    create?: Prisma.XOR<Prisma.PeriodicReviewCreateWithoutVersionInput, Prisma.PeriodicReviewUncheckedCreateWithoutVersionInput> | Prisma.PeriodicReviewCreateWithoutVersionInput[] | Prisma.PeriodicReviewUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.PeriodicReviewCreateOrConnectWithoutVersionInput | Prisma.PeriodicReviewCreateOrConnectWithoutVersionInput[];
    createMany?: Prisma.PeriodicReviewCreateManyVersionInputEnvelope;
    connect?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
};
export type PeriodicReviewUpdateManyWithoutVersionNestedInput = {
    create?: Prisma.XOR<Prisma.PeriodicReviewCreateWithoutVersionInput, Prisma.PeriodicReviewUncheckedCreateWithoutVersionInput> | Prisma.PeriodicReviewCreateWithoutVersionInput[] | Prisma.PeriodicReviewUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.PeriodicReviewCreateOrConnectWithoutVersionInput | Prisma.PeriodicReviewCreateOrConnectWithoutVersionInput[];
    upsert?: Prisma.PeriodicReviewUpsertWithWhereUniqueWithoutVersionInput | Prisma.PeriodicReviewUpsertWithWhereUniqueWithoutVersionInput[];
    createMany?: Prisma.PeriodicReviewCreateManyVersionInputEnvelope;
    set?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    disconnect?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    delete?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    connect?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    update?: Prisma.PeriodicReviewUpdateWithWhereUniqueWithoutVersionInput | Prisma.PeriodicReviewUpdateWithWhereUniqueWithoutVersionInput[];
    updateMany?: Prisma.PeriodicReviewUpdateManyWithWhereWithoutVersionInput | Prisma.PeriodicReviewUpdateManyWithWhereWithoutVersionInput[];
    deleteMany?: Prisma.PeriodicReviewScalarWhereInput | Prisma.PeriodicReviewScalarWhereInput[];
};
export type PeriodicReviewUncheckedUpdateManyWithoutVersionNestedInput = {
    create?: Prisma.XOR<Prisma.PeriodicReviewCreateWithoutVersionInput, Prisma.PeriodicReviewUncheckedCreateWithoutVersionInput> | Prisma.PeriodicReviewCreateWithoutVersionInput[] | Prisma.PeriodicReviewUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.PeriodicReviewCreateOrConnectWithoutVersionInput | Prisma.PeriodicReviewCreateOrConnectWithoutVersionInput[];
    upsert?: Prisma.PeriodicReviewUpsertWithWhereUniqueWithoutVersionInput | Prisma.PeriodicReviewUpsertWithWhereUniqueWithoutVersionInput[];
    createMany?: Prisma.PeriodicReviewCreateManyVersionInputEnvelope;
    set?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    disconnect?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    delete?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    connect?: Prisma.PeriodicReviewWhereUniqueInput | Prisma.PeriodicReviewWhereUniqueInput[];
    update?: Prisma.PeriodicReviewUpdateWithWhereUniqueWithoutVersionInput | Prisma.PeriodicReviewUpdateWithWhereUniqueWithoutVersionInput[];
    updateMany?: Prisma.PeriodicReviewUpdateManyWithWhereWithoutVersionInput | Prisma.PeriodicReviewUpdateManyWithWhereWithoutVersionInput[];
    deleteMany?: Prisma.PeriodicReviewScalarWhereInput | Prisma.PeriodicReviewScalarWhereInput[];
};
export type EnumPeriodicReviewOutcomeFieldUpdateOperationsInput = {
    set?: $Enums.PeriodicReviewOutcome;
};
export type PeriodicReviewCreateWithoutTenantInput = {
    id?: string;
    outcome: $Enums.PeriodicReviewOutcome;
    comments?: string | null;
    referencesChecked?: string | null;
    reviewedAt?: Date | string;
    nextReviewDate?: Date | string | null;
    version: Prisma.DocumentVersionCreateNestedOneWithoutPeriodicReviewsInput;
    reviewedBy: Prisma.UserCreateNestedOneWithoutPeriodicReviewsInput;
};
export type PeriodicReviewUncheckedCreateWithoutTenantInput = {
    id?: string;
    versionId: string;
    reviewedById: string;
    outcome: $Enums.PeriodicReviewOutcome;
    comments?: string | null;
    referencesChecked?: string | null;
    reviewedAt?: Date | string;
    nextReviewDate?: Date | string | null;
};
export type PeriodicReviewCreateOrConnectWithoutTenantInput = {
    where: Prisma.PeriodicReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.PeriodicReviewCreateWithoutTenantInput, Prisma.PeriodicReviewUncheckedCreateWithoutTenantInput>;
};
export type PeriodicReviewCreateManyTenantInputEnvelope = {
    data: Prisma.PeriodicReviewCreateManyTenantInput | Prisma.PeriodicReviewCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type PeriodicReviewUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.PeriodicReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.PeriodicReviewUpdateWithoutTenantInput, Prisma.PeriodicReviewUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.PeriodicReviewCreateWithoutTenantInput, Prisma.PeriodicReviewUncheckedCreateWithoutTenantInput>;
};
export type PeriodicReviewUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.PeriodicReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.PeriodicReviewUpdateWithoutTenantInput, Prisma.PeriodicReviewUncheckedUpdateWithoutTenantInput>;
};
export type PeriodicReviewUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.PeriodicReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.PeriodicReviewUpdateManyMutationInput, Prisma.PeriodicReviewUncheckedUpdateManyWithoutTenantInput>;
};
export type PeriodicReviewScalarWhereInput = {
    AND?: Prisma.PeriodicReviewScalarWhereInput | Prisma.PeriodicReviewScalarWhereInput[];
    OR?: Prisma.PeriodicReviewScalarWhereInput[];
    NOT?: Prisma.PeriodicReviewScalarWhereInput | Prisma.PeriodicReviewScalarWhereInput[];
    id?: Prisma.StringFilter<"PeriodicReview"> | string;
    tenantId?: Prisma.StringFilter<"PeriodicReview"> | string;
    versionId?: Prisma.StringFilter<"PeriodicReview"> | string;
    reviewedById?: Prisma.StringFilter<"PeriodicReview"> | string;
    outcome?: Prisma.EnumPeriodicReviewOutcomeFilter<"PeriodicReview"> | $Enums.PeriodicReviewOutcome;
    comments?: Prisma.StringNullableFilter<"PeriodicReview"> | string | null;
    referencesChecked?: Prisma.StringNullableFilter<"PeriodicReview"> | string | null;
    reviewedAt?: Prisma.DateTimeFilter<"PeriodicReview"> | Date | string;
    nextReviewDate?: Prisma.DateTimeNullableFilter<"PeriodicReview"> | Date | string | null;
};
export type PeriodicReviewCreateWithoutReviewedByInput = {
    id?: string;
    outcome: $Enums.PeriodicReviewOutcome;
    comments?: string | null;
    referencesChecked?: string | null;
    reviewedAt?: Date | string;
    nextReviewDate?: Date | string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutPeriodicReviewsInput;
    version: Prisma.DocumentVersionCreateNestedOneWithoutPeriodicReviewsInput;
};
export type PeriodicReviewUncheckedCreateWithoutReviewedByInput = {
    id?: string;
    tenantId: string;
    versionId: string;
    outcome: $Enums.PeriodicReviewOutcome;
    comments?: string | null;
    referencesChecked?: string | null;
    reviewedAt?: Date | string;
    nextReviewDate?: Date | string | null;
};
export type PeriodicReviewCreateOrConnectWithoutReviewedByInput = {
    where: Prisma.PeriodicReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.PeriodicReviewCreateWithoutReviewedByInput, Prisma.PeriodicReviewUncheckedCreateWithoutReviewedByInput>;
};
export type PeriodicReviewCreateManyReviewedByInputEnvelope = {
    data: Prisma.PeriodicReviewCreateManyReviewedByInput | Prisma.PeriodicReviewCreateManyReviewedByInput[];
    skipDuplicates?: boolean;
};
export type PeriodicReviewUpsertWithWhereUniqueWithoutReviewedByInput = {
    where: Prisma.PeriodicReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.PeriodicReviewUpdateWithoutReviewedByInput, Prisma.PeriodicReviewUncheckedUpdateWithoutReviewedByInput>;
    create: Prisma.XOR<Prisma.PeriodicReviewCreateWithoutReviewedByInput, Prisma.PeriodicReviewUncheckedCreateWithoutReviewedByInput>;
};
export type PeriodicReviewUpdateWithWhereUniqueWithoutReviewedByInput = {
    where: Prisma.PeriodicReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.PeriodicReviewUpdateWithoutReviewedByInput, Prisma.PeriodicReviewUncheckedUpdateWithoutReviewedByInput>;
};
export type PeriodicReviewUpdateManyWithWhereWithoutReviewedByInput = {
    where: Prisma.PeriodicReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.PeriodicReviewUpdateManyMutationInput, Prisma.PeriodicReviewUncheckedUpdateManyWithoutReviewedByInput>;
};
export type PeriodicReviewCreateWithoutVersionInput = {
    id?: string;
    outcome: $Enums.PeriodicReviewOutcome;
    comments?: string | null;
    referencesChecked?: string | null;
    reviewedAt?: Date | string;
    nextReviewDate?: Date | string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutPeriodicReviewsInput;
    reviewedBy: Prisma.UserCreateNestedOneWithoutPeriodicReviewsInput;
};
export type PeriodicReviewUncheckedCreateWithoutVersionInput = {
    id?: string;
    tenantId: string;
    reviewedById: string;
    outcome: $Enums.PeriodicReviewOutcome;
    comments?: string | null;
    referencesChecked?: string | null;
    reviewedAt?: Date | string;
    nextReviewDate?: Date | string | null;
};
export type PeriodicReviewCreateOrConnectWithoutVersionInput = {
    where: Prisma.PeriodicReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.PeriodicReviewCreateWithoutVersionInput, Prisma.PeriodicReviewUncheckedCreateWithoutVersionInput>;
};
export type PeriodicReviewCreateManyVersionInputEnvelope = {
    data: Prisma.PeriodicReviewCreateManyVersionInput | Prisma.PeriodicReviewCreateManyVersionInput[];
    skipDuplicates?: boolean;
};
export type PeriodicReviewUpsertWithWhereUniqueWithoutVersionInput = {
    where: Prisma.PeriodicReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.PeriodicReviewUpdateWithoutVersionInput, Prisma.PeriodicReviewUncheckedUpdateWithoutVersionInput>;
    create: Prisma.XOR<Prisma.PeriodicReviewCreateWithoutVersionInput, Prisma.PeriodicReviewUncheckedCreateWithoutVersionInput>;
};
export type PeriodicReviewUpdateWithWhereUniqueWithoutVersionInput = {
    where: Prisma.PeriodicReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.PeriodicReviewUpdateWithoutVersionInput, Prisma.PeriodicReviewUncheckedUpdateWithoutVersionInput>;
};
export type PeriodicReviewUpdateManyWithWhereWithoutVersionInput = {
    where: Prisma.PeriodicReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.PeriodicReviewUpdateManyMutationInput, Prisma.PeriodicReviewUncheckedUpdateManyWithoutVersionInput>;
};
export type PeriodicReviewCreateManyTenantInput = {
    id?: string;
    versionId: string;
    reviewedById: string;
    outcome: $Enums.PeriodicReviewOutcome;
    comments?: string | null;
    referencesChecked?: string | null;
    reviewedAt?: Date | string;
    nextReviewDate?: Date | string | null;
};
export type PeriodicReviewUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumPeriodicReviewOutcomeFieldUpdateOperationsInput | $Enums.PeriodicReviewOutcome;
    comments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencesChecked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.DocumentVersionUpdateOneRequiredWithoutPeriodicReviewsNestedInput;
    reviewedBy?: Prisma.UserUpdateOneRequiredWithoutPeriodicReviewsNestedInput;
};
export type PeriodicReviewUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumPeriodicReviewOutcomeFieldUpdateOperationsInput | $Enums.PeriodicReviewOutcome;
    comments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencesChecked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PeriodicReviewUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumPeriodicReviewOutcomeFieldUpdateOperationsInput | $Enums.PeriodicReviewOutcome;
    comments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencesChecked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PeriodicReviewCreateManyReviewedByInput = {
    id?: string;
    tenantId: string;
    versionId: string;
    outcome: $Enums.PeriodicReviewOutcome;
    comments?: string | null;
    referencesChecked?: string | null;
    reviewedAt?: Date | string;
    nextReviewDate?: Date | string | null;
};
export type PeriodicReviewUpdateWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumPeriodicReviewOutcomeFieldUpdateOperationsInput | $Enums.PeriodicReviewOutcome;
    comments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencesChecked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutPeriodicReviewsNestedInput;
    version?: Prisma.DocumentVersionUpdateOneRequiredWithoutPeriodicReviewsNestedInput;
};
export type PeriodicReviewUncheckedUpdateWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumPeriodicReviewOutcomeFieldUpdateOperationsInput | $Enums.PeriodicReviewOutcome;
    comments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencesChecked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PeriodicReviewUncheckedUpdateManyWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumPeriodicReviewOutcomeFieldUpdateOperationsInput | $Enums.PeriodicReviewOutcome;
    comments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencesChecked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PeriodicReviewCreateManyVersionInput = {
    id?: string;
    tenantId: string;
    reviewedById: string;
    outcome: $Enums.PeriodicReviewOutcome;
    comments?: string | null;
    referencesChecked?: string | null;
    reviewedAt?: Date | string;
    nextReviewDate?: Date | string | null;
};
export type PeriodicReviewUpdateWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumPeriodicReviewOutcomeFieldUpdateOperationsInput | $Enums.PeriodicReviewOutcome;
    comments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencesChecked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutPeriodicReviewsNestedInput;
    reviewedBy?: Prisma.UserUpdateOneRequiredWithoutPeriodicReviewsNestedInput;
};
export type PeriodicReviewUncheckedUpdateWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumPeriodicReviewOutcomeFieldUpdateOperationsInput | $Enums.PeriodicReviewOutcome;
    comments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencesChecked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PeriodicReviewUncheckedUpdateManyWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedById?: Prisma.StringFieldUpdateOperationsInput | string;
    outcome?: Prisma.EnumPeriodicReviewOutcomeFieldUpdateOperationsInput | $Enums.PeriodicReviewOutcome;
    comments?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencesChecked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nextReviewDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PeriodicReviewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    versionId?: boolean;
    reviewedById?: boolean;
    outcome?: boolean;
    comments?: boolean;
    referencesChecked?: boolean;
    reviewedAt?: boolean;
    nextReviewDate?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["periodicReview"]>;
export type PeriodicReviewSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    versionId?: boolean;
    reviewedById?: boolean;
    outcome?: boolean;
    comments?: boolean;
    referencesChecked?: boolean;
    reviewedAt?: boolean;
    nextReviewDate?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["periodicReview"]>;
export type PeriodicReviewSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    versionId?: boolean;
    reviewedById?: boolean;
    outcome?: boolean;
    comments?: boolean;
    referencesChecked?: boolean;
    reviewedAt?: boolean;
    nextReviewDate?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["periodicReview"]>;
export type PeriodicReviewSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    versionId?: boolean;
    reviewedById?: boolean;
    outcome?: boolean;
    comments?: boolean;
    referencesChecked?: boolean;
    reviewedAt?: boolean;
    nextReviewDate?: boolean;
};
export type PeriodicReviewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "versionId" | "reviewedById" | "outcome" | "comments" | "referencesChecked" | "reviewedAt" | "nextReviewDate", ExtArgs["result"]["periodicReview"]>;
export type PeriodicReviewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PeriodicReviewIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PeriodicReviewIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PeriodicReviewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PeriodicReview";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
        version: Prisma.$DocumentVersionPayload<ExtArgs>;
        reviewedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        versionId: string;
        reviewedById: string;
        outcome: $Enums.PeriodicReviewOutcome;
        comments: string | null;
        referencesChecked: string | null;
        reviewedAt: Date;
        nextReviewDate: Date | null;
    }, ExtArgs["result"]["periodicReview"]>;
    composites: {};
};
export type PeriodicReviewGetPayload<S extends boolean | null | undefined | PeriodicReviewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PeriodicReviewPayload, S>;
export type PeriodicReviewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PeriodicReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PeriodicReviewCountAggregateInputType | true;
};
export interface PeriodicReviewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PeriodicReview'];
        meta: {
            name: 'PeriodicReview';
        };
    };
    findUnique<T extends PeriodicReviewFindUniqueArgs>(args: Prisma.SelectSubset<T, PeriodicReviewFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PeriodicReviewClient<runtime.Types.Result.GetResult<Prisma.$PeriodicReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PeriodicReviewFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PeriodicReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PeriodicReviewClient<runtime.Types.Result.GetResult<Prisma.$PeriodicReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PeriodicReviewFindFirstArgs>(args?: Prisma.SelectSubset<T, PeriodicReviewFindFirstArgs<ExtArgs>>): Prisma.Prisma__PeriodicReviewClient<runtime.Types.Result.GetResult<Prisma.$PeriodicReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PeriodicReviewFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PeriodicReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PeriodicReviewClient<runtime.Types.Result.GetResult<Prisma.$PeriodicReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PeriodicReviewFindManyArgs>(args?: Prisma.SelectSubset<T, PeriodicReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PeriodicReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PeriodicReviewCreateArgs>(args: Prisma.SelectSubset<T, PeriodicReviewCreateArgs<ExtArgs>>): Prisma.Prisma__PeriodicReviewClient<runtime.Types.Result.GetResult<Prisma.$PeriodicReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PeriodicReviewCreateManyArgs>(args?: Prisma.SelectSubset<T, PeriodicReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PeriodicReviewCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PeriodicReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PeriodicReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PeriodicReviewDeleteArgs>(args: Prisma.SelectSubset<T, PeriodicReviewDeleteArgs<ExtArgs>>): Prisma.Prisma__PeriodicReviewClient<runtime.Types.Result.GetResult<Prisma.$PeriodicReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PeriodicReviewUpdateArgs>(args: Prisma.SelectSubset<T, PeriodicReviewUpdateArgs<ExtArgs>>): Prisma.Prisma__PeriodicReviewClient<runtime.Types.Result.GetResult<Prisma.$PeriodicReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PeriodicReviewDeleteManyArgs>(args?: Prisma.SelectSubset<T, PeriodicReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PeriodicReviewUpdateManyArgs>(args: Prisma.SelectSubset<T, PeriodicReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PeriodicReviewUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PeriodicReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PeriodicReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PeriodicReviewUpsertArgs>(args: Prisma.SelectSubset<T, PeriodicReviewUpsertArgs<ExtArgs>>): Prisma.Prisma__PeriodicReviewClient<runtime.Types.Result.GetResult<Prisma.$PeriodicReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PeriodicReviewCountArgs>(args?: Prisma.Subset<T, PeriodicReviewCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PeriodicReviewCountAggregateOutputType> : number>;
    aggregate<T extends PeriodicReviewAggregateArgs>(args: Prisma.Subset<T, PeriodicReviewAggregateArgs>): Prisma.PrismaPromise<GetPeriodicReviewAggregateType<T>>;
    groupBy<T extends PeriodicReviewGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PeriodicReviewGroupByArgs['orderBy'];
    } : {
        orderBy?: PeriodicReviewGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PeriodicReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeriodicReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PeriodicReviewFieldRefs;
}
export interface Prisma__PeriodicReviewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    version<T extends Prisma.DocumentVersionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentVersionDefaultArgs<ExtArgs>>): Prisma.Prisma__DocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reviewedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PeriodicReviewFieldRefs {
    readonly id: Prisma.FieldRef<"PeriodicReview", 'String'>;
    readonly tenantId: Prisma.FieldRef<"PeriodicReview", 'String'>;
    readonly versionId: Prisma.FieldRef<"PeriodicReview", 'String'>;
    readonly reviewedById: Prisma.FieldRef<"PeriodicReview", 'String'>;
    readonly outcome: Prisma.FieldRef<"PeriodicReview", 'PeriodicReviewOutcome'>;
    readonly comments: Prisma.FieldRef<"PeriodicReview", 'String'>;
    readonly referencesChecked: Prisma.FieldRef<"PeriodicReview", 'String'>;
    readonly reviewedAt: Prisma.FieldRef<"PeriodicReview", 'DateTime'>;
    readonly nextReviewDate: Prisma.FieldRef<"PeriodicReview", 'DateTime'>;
}
export type PeriodicReviewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodicReviewSelect<ExtArgs> | null;
    omit?: Prisma.PeriodicReviewOmit<ExtArgs> | null;
    include?: Prisma.PeriodicReviewInclude<ExtArgs> | null;
    where: Prisma.PeriodicReviewWhereUniqueInput;
};
export type PeriodicReviewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodicReviewSelect<ExtArgs> | null;
    omit?: Prisma.PeriodicReviewOmit<ExtArgs> | null;
    include?: Prisma.PeriodicReviewInclude<ExtArgs> | null;
    where: Prisma.PeriodicReviewWhereUniqueInput;
};
export type PeriodicReviewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodicReviewSelect<ExtArgs> | null;
    omit?: Prisma.PeriodicReviewOmit<ExtArgs> | null;
    include?: Prisma.PeriodicReviewInclude<ExtArgs> | null;
    where?: Prisma.PeriodicReviewWhereInput;
    orderBy?: Prisma.PeriodicReviewOrderByWithRelationInput | Prisma.PeriodicReviewOrderByWithRelationInput[];
    cursor?: Prisma.PeriodicReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PeriodicReviewScalarFieldEnum | Prisma.PeriodicReviewScalarFieldEnum[];
};
export type PeriodicReviewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodicReviewSelect<ExtArgs> | null;
    omit?: Prisma.PeriodicReviewOmit<ExtArgs> | null;
    include?: Prisma.PeriodicReviewInclude<ExtArgs> | null;
    where?: Prisma.PeriodicReviewWhereInput;
    orderBy?: Prisma.PeriodicReviewOrderByWithRelationInput | Prisma.PeriodicReviewOrderByWithRelationInput[];
    cursor?: Prisma.PeriodicReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PeriodicReviewScalarFieldEnum | Prisma.PeriodicReviewScalarFieldEnum[];
};
export type PeriodicReviewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodicReviewSelect<ExtArgs> | null;
    omit?: Prisma.PeriodicReviewOmit<ExtArgs> | null;
    include?: Prisma.PeriodicReviewInclude<ExtArgs> | null;
    where?: Prisma.PeriodicReviewWhereInput;
    orderBy?: Prisma.PeriodicReviewOrderByWithRelationInput | Prisma.PeriodicReviewOrderByWithRelationInput[];
    cursor?: Prisma.PeriodicReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PeriodicReviewScalarFieldEnum | Prisma.PeriodicReviewScalarFieldEnum[];
};
export type PeriodicReviewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodicReviewSelect<ExtArgs> | null;
    omit?: Prisma.PeriodicReviewOmit<ExtArgs> | null;
    include?: Prisma.PeriodicReviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PeriodicReviewCreateInput, Prisma.PeriodicReviewUncheckedCreateInput>;
};
export type PeriodicReviewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PeriodicReviewCreateManyInput | Prisma.PeriodicReviewCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PeriodicReviewCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodicReviewSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PeriodicReviewOmit<ExtArgs> | null;
    data: Prisma.PeriodicReviewCreateManyInput | Prisma.PeriodicReviewCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PeriodicReviewIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PeriodicReviewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodicReviewSelect<ExtArgs> | null;
    omit?: Prisma.PeriodicReviewOmit<ExtArgs> | null;
    include?: Prisma.PeriodicReviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PeriodicReviewUpdateInput, Prisma.PeriodicReviewUncheckedUpdateInput>;
    where: Prisma.PeriodicReviewWhereUniqueInput;
};
export type PeriodicReviewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PeriodicReviewUpdateManyMutationInput, Prisma.PeriodicReviewUncheckedUpdateManyInput>;
    where?: Prisma.PeriodicReviewWhereInput;
    limit?: number;
};
export type PeriodicReviewUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodicReviewSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PeriodicReviewOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PeriodicReviewUpdateManyMutationInput, Prisma.PeriodicReviewUncheckedUpdateManyInput>;
    where?: Prisma.PeriodicReviewWhereInput;
    limit?: number;
    include?: Prisma.PeriodicReviewIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PeriodicReviewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodicReviewSelect<ExtArgs> | null;
    omit?: Prisma.PeriodicReviewOmit<ExtArgs> | null;
    include?: Prisma.PeriodicReviewInclude<ExtArgs> | null;
    where: Prisma.PeriodicReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.PeriodicReviewCreateInput, Prisma.PeriodicReviewUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PeriodicReviewUpdateInput, Prisma.PeriodicReviewUncheckedUpdateInput>;
};
export type PeriodicReviewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodicReviewSelect<ExtArgs> | null;
    omit?: Prisma.PeriodicReviewOmit<ExtArgs> | null;
    include?: Prisma.PeriodicReviewInclude<ExtArgs> | null;
    where: Prisma.PeriodicReviewWhereUniqueInput;
};
export type PeriodicReviewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PeriodicReviewWhereInput;
    limit?: number;
};
export type PeriodicReviewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PeriodicReviewSelect<ExtArgs> | null;
    omit?: Prisma.PeriodicReviewOmit<ExtArgs> | null;
    include?: Prisma.PeriodicReviewInclude<ExtArgs> | null;
};
