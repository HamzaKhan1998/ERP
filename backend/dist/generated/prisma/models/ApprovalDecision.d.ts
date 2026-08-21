import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ApprovalDecisionModel = runtime.Types.Result.DefaultSelection<Prisma.$ApprovalDecisionPayload>;
export type AggregateApprovalDecision = {
    _count: ApprovalDecisionCountAggregateOutputType | null;
    _min: ApprovalDecisionMinAggregateOutputType | null;
    _max: ApprovalDecisionMaxAggregateOutputType | null;
};
export type ApprovalDecisionMinAggregateOutputType = {
    id: string | null;
    versionId: string | null;
    userId: string | null;
    decision: $Enums.ApprovalDecisionType | null;
    comment: string | null;
    decidedAt: Date | null;
};
export type ApprovalDecisionMaxAggregateOutputType = {
    id: string | null;
    versionId: string | null;
    userId: string | null;
    decision: $Enums.ApprovalDecisionType | null;
    comment: string | null;
    decidedAt: Date | null;
};
export type ApprovalDecisionCountAggregateOutputType = {
    id: number;
    versionId: number;
    userId: number;
    decision: number;
    comment: number;
    decidedAt: number;
    _all: number;
};
export type ApprovalDecisionMinAggregateInputType = {
    id?: true;
    versionId?: true;
    userId?: true;
    decision?: true;
    comment?: true;
    decidedAt?: true;
};
export type ApprovalDecisionMaxAggregateInputType = {
    id?: true;
    versionId?: true;
    userId?: true;
    decision?: true;
    comment?: true;
    decidedAt?: true;
};
export type ApprovalDecisionCountAggregateInputType = {
    id?: true;
    versionId?: true;
    userId?: true;
    decision?: true;
    comment?: true;
    decidedAt?: true;
    _all?: true;
};
export type ApprovalDecisionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalDecisionWhereInput;
    orderBy?: Prisma.ApprovalDecisionOrderByWithRelationInput | Prisma.ApprovalDecisionOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalDecisionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ApprovalDecisionCountAggregateInputType;
    _min?: ApprovalDecisionMinAggregateInputType;
    _max?: ApprovalDecisionMaxAggregateInputType;
};
export type GetApprovalDecisionAggregateType<T extends ApprovalDecisionAggregateArgs> = {
    [P in keyof T & keyof AggregateApprovalDecision]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApprovalDecision[P]> : Prisma.GetScalarType<T[P], AggregateApprovalDecision[P]>;
};
export type ApprovalDecisionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalDecisionWhereInput;
    orderBy?: Prisma.ApprovalDecisionOrderByWithAggregationInput | Prisma.ApprovalDecisionOrderByWithAggregationInput[];
    by: Prisma.ApprovalDecisionScalarFieldEnum[] | Prisma.ApprovalDecisionScalarFieldEnum;
    having?: Prisma.ApprovalDecisionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApprovalDecisionCountAggregateInputType | true;
    _min?: ApprovalDecisionMinAggregateInputType;
    _max?: ApprovalDecisionMaxAggregateInputType;
};
export type ApprovalDecisionGroupByOutputType = {
    id: string;
    versionId: string;
    userId: string;
    decision: $Enums.ApprovalDecisionType;
    comment: string | null;
    decidedAt: Date;
    _count: ApprovalDecisionCountAggregateOutputType | null;
    _min: ApprovalDecisionMinAggregateOutputType | null;
    _max: ApprovalDecisionMaxAggregateOutputType | null;
};
export type GetApprovalDecisionGroupByPayload<T extends ApprovalDecisionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApprovalDecisionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApprovalDecisionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApprovalDecisionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApprovalDecisionGroupByOutputType[P]>;
}>>;
export type ApprovalDecisionWhereInput = {
    AND?: Prisma.ApprovalDecisionWhereInput | Prisma.ApprovalDecisionWhereInput[];
    OR?: Prisma.ApprovalDecisionWhereInput[];
    NOT?: Prisma.ApprovalDecisionWhereInput | Prisma.ApprovalDecisionWhereInput[];
    id?: Prisma.StringFilter<"ApprovalDecision"> | string;
    versionId?: Prisma.StringFilter<"ApprovalDecision"> | string;
    userId?: Prisma.StringFilter<"ApprovalDecision"> | string;
    decision?: Prisma.EnumApprovalDecisionTypeFilter<"ApprovalDecision"> | $Enums.ApprovalDecisionType;
    comment?: Prisma.StringNullableFilter<"ApprovalDecision"> | string | null;
    decidedAt?: Prisma.DateTimeFilter<"ApprovalDecision"> | Date | string;
    version?: Prisma.XOR<Prisma.DocumentVersionScalarRelationFilter, Prisma.DocumentVersionWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ApprovalDecisionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
    version?: Prisma.DocumentVersionOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ApprovalDecisionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ApprovalDecisionWhereInput | Prisma.ApprovalDecisionWhereInput[];
    OR?: Prisma.ApprovalDecisionWhereInput[];
    NOT?: Prisma.ApprovalDecisionWhereInput | Prisma.ApprovalDecisionWhereInput[];
    versionId?: Prisma.StringFilter<"ApprovalDecision"> | string;
    userId?: Prisma.StringFilter<"ApprovalDecision"> | string;
    decision?: Prisma.EnumApprovalDecisionTypeFilter<"ApprovalDecision"> | $Enums.ApprovalDecisionType;
    comment?: Prisma.StringNullableFilter<"ApprovalDecision"> | string | null;
    decidedAt?: Prisma.DateTimeFilter<"ApprovalDecision"> | Date | string;
    version?: Prisma.XOR<Prisma.DocumentVersionScalarRelationFilter, Prisma.DocumentVersionWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type ApprovalDecisionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
    _count?: Prisma.ApprovalDecisionCountOrderByAggregateInput;
    _max?: Prisma.ApprovalDecisionMaxOrderByAggregateInput;
    _min?: Prisma.ApprovalDecisionMinOrderByAggregateInput;
};
export type ApprovalDecisionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApprovalDecisionScalarWhereWithAggregatesInput | Prisma.ApprovalDecisionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApprovalDecisionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApprovalDecisionScalarWhereWithAggregatesInput | Prisma.ApprovalDecisionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ApprovalDecision"> | string;
    versionId?: Prisma.StringWithAggregatesFilter<"ApprovalDecision"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"ApprovalDecision"> | string;
    decision?: Prisma.EnumApprovalDecisionTypeWithAggregatesFilter<"ApprovalDecision"> | $Enums.ApprovalDecisionType;
    comment?: Prisma.StringNullableWithAggregatesFilter<"ApprovalDecision"> | string | null;
    decidedAt?: Prisma.DateTimeWithAggregatesFilter<"ApprovalDecision"> | Date | string;
};
export type ApprovalDecisionCreateInput = {
    id?: string;
    decision: $Enums.ApprovalDecisionType;
    comment?: string | null;
    decidedAt?: Date | string;
    version: Prisma.DocumentVersionCreateNestedOneWithoutApprovalsInput;
    user: Prisma.UserCreateNestedOneWithoutApprovalsInput;
};
export type ApprovalDecisionUncheckedCreateInput = {
    id?: string;
    versionId: string;
    userId: string;
    decision: $Enums.ApprovalDecisionType;
    comment?: string | null;
    decidedAt?: Date | string;
};
export type ApprovalDecisionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionTypeFieldUpdateOperationsInput | $Enums.ApprovalDecisionType;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.DocumentVersionUpdateOneRequiredWithoutApprovalsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutApprovalsNestedInput;
};
export type ApprovalDecisionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionTypeFieldUpdateOperationsInput | $Enums.ApprovalDecisionType;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalDecisionCreateManyInput = {
    id?: string;
    versionId: string;
    userId: string;
    decision: $Enums.ApprovalDecisionType;
    comment?: string | null;
    decidedAt?: Date | string;
};
export type ApprovalDecisionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionTypeFieldUpdateOperationsInput | $Enums.ApprovalDecisionType;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalDecisionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionTypeFieldUpdateOperationsInput | $Enums.ApprovalDecisionType;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalDecisionListRelationFilter = {
    every?: Prisma.ApprovalDecisionWhereInput;
    some?: Prisma.ApprovalDecisionWhereInput;
    none?: Prisma.ApprovalDecisionWhereInput;
};
export type ApprovalDecisionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ApprovalDecisionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
};
export type ApprovalDecisionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
};
export type ApprovalDecisionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
};
export type ApprovalDecisionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutUserInput, Prisma.ApprovalDecisionUncheckedCreateWithoutUserInput> | Prisma.ApprovalDecisionCreateWithoutUserInput[] | Prisma.ApprovalDecisionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ApprovalDecisionCreateOrConnectWithoutUserInput | Prisma.ApprovalDecisionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ApprovalDecisionCreateManyUserInputEnvelope;
    connect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
};
export type ApprovalDecisionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutUserInput, Prisma.ApprovalDecisionUncheckedCreateWithoutUserInput> | Prisma.ApprovalDecisionCreateWithoutUserInput[] | Prisma.ApprovalDecisionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ApprovalDecisionCreateOrConnectWithoutUserInput | Prisma.ApprovalDecisionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ApprovalDecisionCreateManyUserInputEnvelope;
    connect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
};
export type ApprovalDecisionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutUserInput, Prisma.ApprovalDecisionUncheckedCreateWithoutUserInput> | Prisma.ApprovalDecisionCreateWithoutUserInput[] | Prisma.ApprovalDecisionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ApprovalDecisionCreateOrConnectWithoutUserInput | Prisma.ApprovalDecisionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ApprovalDecisionUpsertWithWhereUniqueWithoutUserInput | Prisma.ApprovalDecisionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ApprovalDecisionCreateManyUserInputEnvelope;
    set?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    disconnect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    delete?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    connect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    update?: Prisma.ApprovalDecisionUpdateWithWhereUniqueWithoutUserInput | Prisma.ApprovalDecisionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ApprovalDecisionUpdateManyWithWhereWithoutUserInput | Prisma.ApprovalDecisionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ApprovalDecisionScalarWhereInput | Prisma.ApprovalDecisionScalarWhereInput[];
};
export type ApprovalDecisionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutUserInput, Prisma.ApprovalDecisionUncheckedCreateWithoutUserInput> | Prisma.ApprovalDecisionCreateWithoutUserInput[] | Prisma.ApprovalDecisionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ApprovalDecisionCreateOrConnectWithoutUserInput | Prisma.ApprovalDecisionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ApprovalDecisionUpsertWithWhereUniqueWithoutUserInput | Prisma.ApprovalDecisionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ApprovalDecisionCreateManyUserInputEnvelope;
    set?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    disconnect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    delete?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    connect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    update?: Prisma.ApprovalDecisionUpdateWithWhereUniqueWithoutUserInput | Prisma.ApprovalDecisionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ApprovalDecisionUpdateManyWithWhereWithoutUserInput | Prisma.ApprovalDecisionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ApprovalDecisionScalarWhereInput | Prisma.ApprovalDecisionScalarWhereInput[];
};
export type ApprovalDecisionCreateNestedManyWithoutVersionInput = {
    create?: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutVersionInput, Prisma.ApprovalDecisionUncheckedCreateWithoutVersionInput> | Prisma.ApprovalDecisionCreateWithoutVersionInput[] | Prisma.ApprovalDecisionUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.ApprovalDecisionCreateOrConnectWithoutVersionInput | Prisma.ApprovalDecisionCreateOrConnectWithoutVersionInput[];
    createMany?: Prisma.ApprovalDecisionCreateManyVersionInputEnvelope;
    connect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
};
export type ApprovalDecisionUncheckedCreateNestedManyWithoutVersionInput = {
    create?: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutVersionInput, Prisma.ApprovalDecisionUncheckedCreateWithoutVersionInput> | Prisma.ApprovalDecisionCreateWithoutVersionInput[] | Prisma.ApprovalDecisionUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.ApprovalDecisionCreateOrConnectWithoutVersionInput | Prisma.ApprovalDecisionCreateOrConnectWithoutVersionInput[];
    createMany?: Prisma.ApprovalDecisionCreateManyVersionInputEnvelope;
    connect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
};
export type ApprovalDecisionUpdateManyWithoutVersionNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutVersionInput, Prisma.ApprovalDecisionUncheckedCreateWithoutVersionInput> | Prisma.ApprovalDecisionCreateWithoutVersionInput[] | Prisma.ApprovalDecisionUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.ApprovalDecisionCreateOrConnectWithoutVersionInput | Prisma.ApprovalDecisionCreateOrConnectWithoutVersionInput[];
    upsert?: Prisma.ApprovalDecisionUpsertWithWhereUniqueWithoutVersionInput | Prisma.ApprovalDecisionUpsertWithWhereUniqueWithoutVersionInput[];
    createMany?: Prisma.ApprovalDecisionCreateManyVersionInputEnvelope;
    set?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    disconnect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    delete?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    connect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    update?: Prisma.ApprovalDecisionUpdateWithWhereUniqueWithoutVersionInput | Prisma.ApprovalDecisionUpdateWithWhereUniqueWithoutVersionInput[];
    updateMany?: Prisma.ApprovalDecisionUpdateManyWithWhereWithoutVersionInput | Prisma.ApprovalDecisionUpdateManyWithWhereWithoutVersionInput[];
    deleteMany?: Prisma.ApprovalDecisionScalarWhereInput | Prisma.ApprovalDecisionScalarWhereInput[];
};
export type ApprovalDecisionUncheckedUpdateManyWithoutVersionNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutVersionInput, Prisma.ApprovalDecisionUncheckedCreateWithoutVersionInput> | Prisma.ApprovalDecisionCreateWithoutVersionInput[] | Prisma.ApprovalDecisionUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.ApprovalDecisionCreateOrConnectWithoutVersionInput | Prisma.ApprovalDecisionCreateOrConnectWithoutVersionInput[];
    upsert?: Prisma.ApprovalDecisionUpsertWithWhereUniqueWithoutVersionInput | Prisma.ApprovalDecisionUpsertWithWhereUniqueWithoutVersionInput[];
    createMany?: Prisma.ApprovalDecisionCreateManyVersionInputEnvelope;
    set?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    disconnect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    delete?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    connect?: Prisma.ApprovalDecisionWhereUniqueInput | Prisma.ApprovalDecisionWhereUniqueInput[];
    update?: Prisma.ApprovalDecisionUpdateWithWhereUniqueWithoutVersionInput | Prisma.ApprovalDecisionUpdateWithWhereUniqueWithoutVersionInput[];
    updateMany?: Prisma.ApprovalDecisionUpdateManyWithWhereWithoutVersionInput | Prisma.ApprovalDecisionUpdateManyWithWhereWithoutVersionInput[];
    deleteMany?: Prisma.ApprovalDecisionScalarWhereInput | Prisma.ApprovalDecisionScalarWhereInput[];
};
export type EnumApprovalDecisionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ApprovalDecisionType;
};
export type ApprovalDecisionCreateWithoutUserInput = {
    id?: string;
    decision: $Enums.ApprovalDecisionType;
    comment?: string | null;
    decidedAt?: Date | string;
    version: Prisma.DocumentVersionCreateNestedOneWithoutApprovalsInput;
};
export type ApprovalDecisionUncheckedCreateWithoutUserInput = {
    id?: string;
    versionId: string;
    decision: $Enums.ApprovalDecisionType;
    comment?: string | null;
    decidedAt?: Date | string;
};
export type ApprovalDecisionCreateOrConnectWithoutUserInput = {
    where: Prisma.ApprovalDecisionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutUserInput, Prisma.ApprovalDecisionUncheckedCreateWithoutUserInput>;
};
export type ApprovalDecisionCreateManyUserInputEnvelope = {
    data: Prisma.ApprovalDecisionCreateManyUserInput | Prisma.ApprovalDecisionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ApprovalDecisionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ApprovalDecisionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApprovalDecisionUpdateWithoutUserInput, Prisma.ApprovalDecisionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutUserInput, Prisma.ApprovalDecisionUncheckedCreateWithoutUserInput>;
};
export type ApprovalDecisionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ApprovalDecisionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApprovalDecisionUpdateWithoutUserInput, Prisma.ApprovalDecisionUncheckedUpdateWithoutUserInput>;
};
export type ApprovalDecisionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ApprovalDecisionScalarWhereInput;
    data: Prisma.XOR<Prisma.ApprovalDecisionUpdateManyMutationInput, Prisma.ApprovalDecisionUncheckedUpdateManyWithoutUserInput>;
};
export type ApprovalDecisionScalarWhereInput = {
    AND?: Prisma.ApprovalDecisionScalarWhereInput | Prisma.ApprovalDecisionScalarWhereInput[];
    OR?: Prisma.ApprovalDecisionScalarWhereInput[];
    NOT?: Prisma.ApprovalDecisionScalarWhereInput | Prisma.ApprovalDecisionScalarWhereInput[];
    id?: Prisma.StringFilter<"ApprovalDecision"> | string;
    versionId?: Prisma.StringFilter<"ApprovalDecision"> | string;
    userId?: Prisma.StringFilter<"ApprovalDecision"> | string;
    decision?: Prisma.EnumApprovalDecisionTypeFilter<"ApprovalDecision"> | $Enums.ApprovalDecisionType;
    comment?: Prisma.StringNullableFilter<"ApprovalDecision"> | string | null;
    decidedAt?: Prisma.DateTimeFilter<"ApprovalDecision"> | Date | string;
};
export type ApprovalDecisionCreateWithoutVersionInput = {
    id?: string;
    decision: $Enums.ApprovalDecisionType;
    comment?: string | null;
    decidedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutApprovalsInput;
};
export type ApprovalDecisionUncheckedCreateWithoutVersionInput = {
    id?: string;
    userId: string;
    decision: $Enums.ApprovalDecisionType;
    comment?: string | null;
    decidedAt?: Date | string;
};
export type ApprovalDecisionCreateOrConnectWithoutVersionInput = {
    where: Prisma.ApprovalDecisionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutVersionInput, Prisma.ApprovalDecisionUncheckedCreateWithoutVersionInput>;
};
export type ApprovalDecisionCreateManyVersionInputEnvelope = {
    data: Prisma.ApprovalDecisionCreateManyVersionInput | Prisma.ApprovalDecisionCreateManyVersionInput[];
    skipDuplicates?: boolean;
};
export type ApprovalDecisionUpsertWithWhereUniqueWithoutVersionInput = {
    where: Prisma.ApprovalDecisionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApprovalDecisionUpdateWithoutVersionInput, Prisma.ApprovalDecisionUncheckedUpdateWithoutVersionInput>;
    create: Prisma.XOR<Prisma.ApprovalDecisionCreateWithoutVersionInput, Prisma.ApprovalDecisionUncheckedCreateWithoutVersionInput>;
};
export type ApprovalDecisionUpdateWithWhereUniqueWithoutVersionInput = {
    where: Prisma.ApprovalDecisionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApprovalDecisionUpdateWithoutVersionInput, Prisma.ApprovalDecisionUncheckedUpdateWithoutVersionInput>;
};
export type ApprovalDecisionUpdateManyWithWhereWithoutVersionInput = {
    where: Prisma.ApprovalDecisionScalarWhereInput;
    data: Prisma.XOR<Prisma.ApprovalDecisionUpdateManyMutationInput, Prisma.ApprovalDecisionUncheckedUpdateManyWithoutVersionInput>;
};
export type ApprovalDecisionCreateManyUserInput = {
    id?: string;
    versionId: string;
    decision: $Enums.ApprovalDecisionType;
    comment?: string | null;
    decidedAt?: Date | string;
};
export type ApprovalDecisionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionTypeFieldUpdateOperationsInput | $Enums.ApprovalDecisionType;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.DocumentVersionUpdateOneRequiredWithoutApprovalsNestedInput;
};
export type ApprovalDecisionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionTypeFieldUpdateOperationsInput | $Enums.ApprovalDecisionType;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalDecisionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionTypeFieldUpdateOperationsInput | $Enums.ApprovalDecisionType;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalDecisionCreateManyVersionInput = {
    id?: string;
    userId: string;
    decision: $Enums.ApprovalDecisionType;
    comment?: string | null;
    decidedAt?: Date | string;
};
export type ApprovalDecisionUpdateWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionTypeFieldUpdateOperationsInput | $Enums.ApprovalDecisionType;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutApprovalsNestedInput;
};
export type ApprovalDecisionUncheckedUpdateWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionTypeFieldUpdateOperationsInput | $Enums.ApprovalDecisionType;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalDecisionUncheckedUpdateManyWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionTypeFieldUpdateOperationsInput | $Enums.ApprovalDecisionType;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalDecisionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    versionId?: boolean;
    userId?: boolean;
    decision?: boolean;
    comment?: boolean;
    decidedAt?: boolean;
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalDecision"]>;
export type ApprovalDecisionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    versionId?: boolean;
    userId?: boolean;
    decision?: boolean;
    comment?: boolean;
    decidedAt?: boolean;
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalDecision"]>;
export type ApprovalDecisionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    versionId?: boolean;
    userId?: boolean;
    decision?: boolean;
    comment?: boolean;
    decidedAt?: boolean;
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalDecision"]>;
export type ApprovalDecisionSelectScalar = {
    id?: boolean;
    versionId?: boolean;
    userId?: boolean;
    decision?: boolean;
    comment?: boolean;
    decidedAt?: boolean;
};
export type ApprovalDecisionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "versionId" | "userId" | "decision" | "comment" | "decidedAt", ExtArgs["result"]["approvalDecision"]>;
export type ApprovalDecisionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ApprovalDecisionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ApprovalDecisionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ApprovalDecisionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ApprovalDecision";
    objects: {
        version: Prisma.$DocumentVersionPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        versionId: string;
        userId: string;
        decision: $Enums.ApprovalDecisionType;
        comment: string | null;
        decidedAt: Date;
    }, ExtArgs["result"]["approvalDecision"]>;
    composites: {};
};
export type ApprovalDecisionGetPayload<S extends boolean | null | undefined | ApprovalDecisionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload, S>;
export type ApprovalDecisionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApprovalDecisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApprovalDecisionCountAggregateInputType | true;
};
export interface ApprovalDecisionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ApprovalDecision'];
        meta: {
            name: 'ApprovalDecision';
        };
    };
    findUnique<T extends ApprovalDecisionFindUniqueArgs>(args: Prisma.SelectSubset<T, ApprovalDecisionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApprovalDecisionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ApprovalDecisionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApprovalDecisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApprovalDecisionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ApprovalDecisionFindFirstArgs>(args?: Prisma.SelectSubset<T, ApprovalDecisionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApprovalDecisionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ApprovalDecisionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApprovalDecisionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApprovalDecisionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ApprovalDecisionFindManyArgs>(args?: Prisma.SelectSubset<T, ApprovalDecisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ApprovalDecisionCreateArgs>(args: Prisma.SelectSubset<T, ApprovalDecisionCreateArgs<ExtArgs>>): Prisma.Prisma__ApprovalDecisionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ApprovalDecisionCreateManyArgs>(args?: Prisma.SelectSubset<T, ApprovalDecisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ApprovalDecisionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApprovalDecisionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ApprovalDecisionDeleteArgs>(args: Prisma.SelectSubset<T, ApprovalDecisionDeleteArgs<ExtArgs>>): Prisma.Prisma__ApprovalDecisionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ApprovalDecisionUpdateArgs>(args: Prisma.SelectSubset<T, ApprovalDecisionUpdateArgs<ExtArgs>>): Prisma.Prisma__ApprovalDecisionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ApprovalDecisionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApprovalDecisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ApprovalDecisionUpdateManyArgs>(args: Prisma.SelectSubset<T, ApprovalDecisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ApprovalDecisionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApprovalDecisionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ApprovalDecisionUpsertArgs>(args: Prisma.SelectSubset<T, ApprovalDecisionUpsertArgs<ExtArgs>>): Prisma.Prisma__ApprovalDecisionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalDecisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ApprovalDecisionCountArgs>(args?: Prisma.Subset<T, ApprovalDecisionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApprovalDecisionCountAggregateOutputType> : number>;
    aggregate<T extends ApprovalDecisionAggregateArgs>(args: Prisma.Subset<T, ApprovalDecisionAggregateArgs>): Prisma.PrismaPromise<GetApprovalDecisionAggregateType<T>>;
    groupBy<T extends ApprovalDecisionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApprovalDecisionGroupByArgs['orderBy'];
    } : {
        orderBy?: ApprovalDecisionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApprovalDecisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalDecisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ApprovalDecisionFieldRefs;
}
export interface Prisma__ApprovalDecisionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    version<T extends Prisma.DocumentVersionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentVersionDefaultArgs<ExtArgs>>): Prisma.Prisma__DocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ApprovalDecisionFieldRefs {
    readonly id: Prisma.FieldRef<"ApprovalDecision", 'String'>;
    readonly versionId: Prisma.FieldRef<"ApprovalDecision", 'String'>;
    readonly userId: Prisma.FieldRef<"ApprovalDecision", 'String'>;
    readonly decision: Prisma.FieldRef<"ApprovalDecision", 'ApprovalDecisionType'>;
    readonly comment: Prisma.FieldRef<"ApprovalDecision", 'String'>;
    readonly decidedAt: Prisma.FieldRef<"ApprovalDecision", 'DateTime'>;
}
export type ApprovalDecisionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalDecisionInclude<ExtArgs> | null;
    where: Prisma.ApprovalDecisionWhereUniqueInput;
};
export type ApprovalDecisionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalDecisionInclude<ExtArgs> | null;
    where: Prisma.ApprovalDecisionWhereUniqueInput;
};
export type ApprovalDecisionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ApprovalDecisionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ApprovalDecisionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ApprovalDecisionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalDecisionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalDecisionCreateInput, Prisma.ApprovalDecisionUncheckedCreateInput>;
};
export type ApprovalDecisionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ApprovalDecisionCreateManyInput | Prisma.ApprovalDecisionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ApprovalDecisionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    data: Prisma.ApprovalDecisionCreateManyInput | Prisma.ApprovalDecisionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ApprovalDecisionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ApprovalDecisionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalDecisionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalDecisionUpdateInput, Prisma.ApprovalDecisionUncheckedUpdateInput>;
    where: Prisma.ApprovalDecisionWhereUniqueInput;
};
export type ApprovalDecisionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ApprovalDecisionUpdateManyMutationInput, Prisma.ApprovalDecisionUncheckedUpdateManyInput>;
    where?: Prisma.ApprovalDecisionWhereInput;
    limit?: number;
};
export type ApprovalDecisionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalDecisionUpdateManyMutationInput, Prisma.ApprovalDecisionUncheckedUpdateManyInput>;
    where?: Prisma.ApprovalDecisionWhereInput;
    limit?: number;
    include?: Prisma.ApprovalDecisionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ApprovalDecisionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalDecisionInclude<ExtArgs> | null;
    where: Prisma.ApprovalDecisionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalDecisionCreateInput, Prisma.ApprovalDecisionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ApprovalDecisionUpdateInput, Prisma.ApprovalDecisionUncheckedUpdateInput>;
};
export type ApprovalDecisionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalDecisionInclude<ExtArgs> | null;
    where: Prisma.ApprovalDecisionWhereUniqueInput;
};
export type ApprovalDecisionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalDecisionWhereInput;
    limit?: number;
};
export type ApprovalDecisionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalDecisionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalDecisionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalDecisionInclude<ExtArgs> | null;
};
