import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WorkflowAssignmentModel = runtime.Types.Result.DefaultSelection<Prisma.$WorkflowAssignmentPayload>;
export type AggregateWorkflowAssignment = {
    _count: WorkflowAssignmentCountAggregateOutputType | null;
    _min: WorkflowAssignmentMinAggregateOutputType | null;
    _max: WorkflowAssignmentMaxAggregateOutputType | null;
};
export type WorkflowAssignmentMinAggregateOutputType = {
    id: string | null;
    versionId: string | null;
    userId: string | null;
    type: $Enums.WorkflowAssignmentType | null;
    assignedAt: Date | null;
    completedAt: Date | null;
};
export type WorkflowAssignmentMaxAggregateOutputType = {
    id: string | null;
    versionId: string | null;
    userId: string | null;
    type: $Enums.WorkflowAssignmentType | null;
    assignedAt: Date | null;
    completedAt: Date | null;
};
export type WorkflowAssignmentCountAggregateOutputType = {
    id: number;
    versionId: number;
    userId: number;
    type: number;
    assignedAt: number;
    completedAt: number;
    _all: number;
};
export type WorkflowAssignmentMinAggregateInputType = {
    id?: true;
    versionId?: true;
    userId?: true;
    type?: true;
    assignedAt?: true;
    completedAt?: true;
};
export type WorkflowAssignmentMaxAggregateInputType = {
    id?: true;
    versionId?: true;
    userId?: true;
    type?: true;
    assignedAt?: true;
    completedAt?: true;
};
export type WorkflowAssignmentCountAggregateInputType = {
    id?: true;
    versionId?: true;
    userId?: true;
    type?: true;
    assignedAt?: true;
    completedAt?: true;
    _all?: true;
};
export type WorkflowAssignmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkflowAssignmentWhereInput;
    orderBy?: Prisma.WorkflowAssignmentOrderByWithRelationInput | Prisma.WorkflowAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.WorkflowAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WorkflowAssignmentCountAggregateInputType;
    _min?: WorkflowAssignmentMinAggregateInputType;
    _max?: WorkflowAssignmentMaxAggregateInputType;
};
export type GetWorkflowAssignmentAggregateType<T extends WorkflowAssignmentAggregateArgs> = {
    [P in keyof T & keyof AggregateWorkflowAssignment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWorkflowAssignment[P]> : Prisma.GetScalarType<T[P], AggregateWorkflowAssignment[P]>;
};
export type WorkflowAssignmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkflowAssignmentWhereInput;
    orderBy?: Prisma.WorkflowAssignmentOrderByWithAggregationInput | Prisma.WorkflowAssignmentOrderByWithAggregationInput[];
    by: Prisma.WorkflowAssignmentScalarFieldEnum[] | Prisma.WorkflowAssignmentScalarFieldEnum;
    having?: Prisma.WorkflowAssignmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WorkflowAssignmentCountAggregateInputType | true;
    _min?: WorkflowAssignmentMinAggregateInputType;
    _max?: WorkflowAssignmentMaxAggregateInputType;
};
export type WorkflowAssignmentGroupByOutputType = {
    id: string;
    versionId: string;
    userId: string;
    type: $Enums.WorkflowAssignmentType;
    assignedAt: Date;
    completedAt: Date | null;
    _count: WorkflowAssignmentCountAggregateOutputType | null;
    _min: WorkflowAssignmentMinAggregateOutputType | null;
    _max: WorkflowAssignmentMaxAggregateOutputType | null;
};
export type GetWorkflowAssignmentGroupByPayload<T extends WorkflowAssignmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WorkflowAssignmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WorkflowAssignmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WorkflowAssignmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WorkflowAssignmentGroupByOutputType[P]>;
}>>;
export type WorkflowAssignmentWhereInput = {
    AND?: Prisma.WorkflowAssignmentWhereInput | Prisma.WorkflowAssignmentWhereInput[];
    OR?: Prisma.WorkflowAssignmentWhereInput[];
    NOT?: Prisma.WorkflowAssignmentWhereInput | Prisma.WorkflowAssignmentWhereInput[];
    id?: Prisma.StringFilter<"WorkflowAssignment"> | string;
    versionId?: Prisma.StringFilter<"WorkflowAssignment"> | string;
    userId?: Prisma.StringFilter<"WorkflowAssignment"> | string;
    type?: Prisma.EnumWorkflowAssignmentTypeFilter<"WorkflowAssignment"> | $Enums.WorkflowAssignmentType;
    assignedAt?: Prisma.DateTimeFilter<"WorkflowAssignment"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"WorkflowAssignment"> | Date | string | null;
    version?: Prisma.XOR<Prisma.DocumentVersionScalarRelationFilter, Prisma.DocumentVersionWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type WorkflowAssignmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    version?: Prisma.DocumentVersionOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type WorkflowAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    versionId_type?: Prisma.WorkflowAssignmentVersionIdTypeCompoundUniqueInput;
    AND?: Prisma.WorkflowAssignmentWhereInput | Prisma.WorkflowAssignmentWhereInput[];
    OR?: Prisma.WorkflowAssignmentWhereInput[];
    NOT?: Prisma.WorkflowAssignmentWhereInput | Prisma.WorkflowAssignmentWhereInput[];
    versionId?: Prisma.StringFilter<"WorkflowAssignment"> | string;
    userId?: Prisma.StringFilter<"WorkflowAssignment"> | string;
    type?: Prisma.EnumWorkflowAssignmentTypeFilter<"WorkflowAssignment"> | $Enums.WorkflowAssignmentType;
    assignedAt?: Prisma.DateTimeFilter<"WorkflowAssignment"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"WorkflowAssignment"> | Date | string | null;
    version?: Prisma.XOR<Prisma.DocumentVersionScalarRelationFilter, Prisma.DocumentVersionWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "versionId_type">;
export type WorkflowAssignmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.WorkflowAssignmentCountOrderByAggregateInput;
    _max?: Prisma.WorkflowAssignmentMaxOrderByAggregateInput;
    _min?: Prisma.WorkflowAssignmentMinOrderByAggregateInput;
};
export type WorkflowAssignmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.WorkflowAssignmentScalarWhereWithAggregatesInput | Prisma.WorkflowAssignmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.WorkflowAssignmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WorkflowAssignmentScalarWhereWithAggregatesInput | Prisma.WorkflowAssignmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WorkflowAssignment"> | string;
    versionId?: Prisma.StringWithAggregatesFilter<"WorkflowAssignment"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"WorkflowAssignment"> | string;
    type?: Prisma.EnumWorkflowAssignmentTypeWithAggregatesFilter<"WorkflowAssignment"> | $Enums.WorkflowAssignmentType;
    assignedAt?: Prisma.DateTimeWithAggregatesFilter<"WorkflowAssignment"> | Date | string;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WorkflowAssignment"> | Date | string | null;
};
export type WorkflowAssignmentCreateInput = {
    id?: string;
    type: $Enums.WorkflowAssignmentType;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
    version: Prisma.DocumentVersionCreateNestedOneWithoutAssignmentsInput;
    user: Prisma.UserCreateNestedOneWithoutAssignmentsInput;
};
export type WorkflowAssignmentUncheckedCreateInput = {
    id?: string;
    versionId: string;
    userId: string;
    type: $Enums.WorkflowAssignmentType;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
};
export type WorkflowAssignmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumWorkflowAssignmentTypeFieldUpdateOperationsInput | $Enums.WorkflowAssignmentType;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.DocumentVersionUpdateOneRequiredWithoutAssignmentsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutAssignmentsNestedInput;
};
export type WorkflowAssignmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumWorkflowAssignmentTypeFieldUpdateOperationsInput | $Enums.WorkflowAssignmentType;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WorkflowAssignmentCreateManyInput = {
    id?: string;
    versionId: string;
    userId: string;
    type: $Enums.WorkflowAssignmentType;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
};
export type WorkflowAssignmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumWorkflowAssignmentTypeFieldUpdateOperationsInput | $Enums.WorkflowAssignmentType;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WorkflowAssignmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumWorkflowAssignmentTypeFieldUpdateOperationsInput | $Enums.WorkflowAssignmentType;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WorkflowAssignmentListRelationFilter = {
    every?: Prisma.WorkflowAssignmentWhereInput;
    some?: Prisma.WorkflowAssignmentWhereInput;
    none?: Prisma.WorkflowAssignmentWhereInput;
};
export type WorkflowAssignmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WorkflowAssignmentVersionIdTypeCompoundUniqueInput = {
    versionId: string;
    type: $Enums.WorkflowAssignmentType;
};
export type WorkflowAssignmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type WorkflowAssignmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type WorkflowAssignmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type WorkflowAssignmentCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.WorkflowAssignmentCreateWithoutUserInput, Prisma.WorkflowAssignmentUncheckedCreateWithoutUserInput> | Prisma.WorkflowAssignmentCreateWithoutUserInput[] | Prisma.WorkflowAssignmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WorkflowAssignmentCreateOrConnectWithoutUserInput | Prisma.WorkflowAssignmentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.WorkflowAssignmentCreateManyUserInputEnvelope;
    connect?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
};
export type WorkflowAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.WorkflowAssignmentCreateWithoutUserInput, Prisma.WorkflowAssignmentUncheckedCreateWithoutUserInput> | Prisma.WorkflowAssignmentCreateWithoutUserInput[] | Prisma.WorkflowAssignmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WorkflowAssignmentCreateOrConnectWithoutUserInput | Prisma.WorkflowAssignmentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.WorkflowAssignmentCreateManyUserInputEnvelope;
    connect?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
};
export type WorkflowAssignmentUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.WorkflowAssignmentCreateWithoutUserInput, Prisma.WorkflowAssignmentUncheckedCreateWithoutUserInput> | Prisma.WorkflowAssignmentCreateWithoutUserInput[] | Prisma.WorkflowAssignmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WorkflowAssignmentCreateOrConnectWithoutUserInput | Prisma.WorkflowAssignmentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.WorkflowAssignmentUpsertWithWhereUniqueWithoutUserInput | Prisma.WorkflowAssignmentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.WorkflowAssignmentCreateManyUserInputEnvelope;
    set?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
    disconnect?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
    delete?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
    connect?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
    update?: Prisma.WorkflowAssignmentUpdateWithWhereUniqueWithoutUserInput | Prisma.WorkflowAssignmentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.WorkflowAssignmentUpdateManyWithWhereWithoutUserInput | Prisma.WorkflowAssignmentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.WorkflowAssignmentScalarWhereInput | Prisma.WorkflowAssignmentScalarWhereInput[];
};
export type WorkflowAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.WorkflowAssignmentCreateWithoutUserInput, Prisma.WorkflowAssignmentUncheckedCreateWithoutUserInput> | Prisma.WorkflowAssignmentCreateWithoutUserInput[] | Prisma.WorkflowAssignmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WorkflowAssignmentCreateOrConnectWithoutUserInput | Prisma.WorkflowAssignmentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.WorkflowAssignmentUpsertWithWhereUniqueWithoutUserInput | Prisma.WorkflowAssignmentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.WorkflowAssignmentCreateManyUserInputEnvelope;
    set?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
    disconnect?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
    delete?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
    connect?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
    update?: Prisma.WorkflowAssignmentUpdateWithWhereUniqueWithoutUserInput | Prisma.WorkflowAssignmentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.WorkflowAssignmentUpdateManyWithWhereWithoutUserInput | Prisma.WorkflowAssignmentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.WorkflowAssignmentScalarWhereInput | Prisma.WorkflowAssignmentScalarWhereInput[];
};
export type WorkflowAssignmentCreateNestedManyWithoutVersionInput = {
    create?: Prisma.XOR<Prisma.WorkflowAssignmentCreateWithoutVersionInput, Prisma.WorkflowAssignmentUncheckedCreateWithoutVersionInput> | Prisma.WorkflowAssignmentCreateWithoutVersionInput[] | Prisma.WorkflowAssignmentUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.WorkflowAssignmentCreateOrConnectWithoutVersionInput | Prisma.WorkflowAssignmentCreateOrConnectWithoutVersionInput[];
    createMany?: Prisma.WorkflowAssignmentCreateManyVersionInputEnvelope;
    connect?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
};
export type WorkflowAssignmentUncheckedCreateNestedManyWithoutVersionInput = {
    create?: Prisma.XOR<Prisma.WorkflowAssignmentCreateWithoutVersionInput, Prisma.WorkflowAssignmentUncheckedCreateWithoutVersionInput> | Prisma.WorkflowAssignmentCreateWithoutVersionInput[] | Prisma.WorkflowAssignmentUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.WorkflowAssignmentCreateOrConnectWithoutVersionInput | Prisma.WorkflowAssignmentCreateOrConnectWithoutVersionInput[];
    createMany?: Prisma.WorkflowAssignmentCreateManyVersionInputEnvelope;
    connect?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
};
export type WorkflowAssignmentUpdateManyWithoutVersionNestedInput = {
    create?: Prisma.XOR<Prisma.WorkflowAssignmentCreateWithoutVersionInput, Prisma.WorkflowAssignmentUncheckedCreateWithoutVersionInput> | Prisma.WorkflowAssignmentCreateWithoutVersionInput[] | Prisma.WorkflowAssignmentUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.WorkflowAssignmentCreateOrConnectWithoutVersionInput | Prisma.WorkflowAssignmentCreateOrConnectWithoutVersionInput[];
    upsert?: Prisma.WorkflowAssignmentUpsertWithWhereUniqueWithoutVersionInput | Prisma.WorkflowAssignmentUpsertWithWhereUniqueWithoutVersionInput[];
    createMany?: Prisma.WorkflowAssignmentCreateManyVersionInputEnvelope;
    set?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
    disconnect?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
    delete?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
    connect?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
    update?: Prisma.WorkflowAssignmentUpdateWithWhereUniqueWithoutVersionInput | Prisma.WorkflowAssignmentUpdateWithWhereUniqueWithoutVersionInput[];
    updateMany?: Prisma.WorkflowAssignmentUpdateManyWithWhereWithoutVersionInput | Prisma.WorkflowAssignmentUpdateManyWithWhereWithoutVersionInput[];
    deleteMany?: Prisma.WorkflowAssignmentScalarWhereInput | Prisma.WorkflowAssignmentScalarWhereInput[];
};
export type WorkflowAssignmentUncheckedUpdateManyWithoutVersionNestedInput = {
    create?: Prisma.XOR<Prisma.WorkflowAssignmentCreateWithoutVersionInput, Prisma.WorkflowAssignmentUncheckedCreateWithoutVersionInput> | Prisma.WorkflowAssignmentCreateWithoutVersionInput[] | Prisma.WorkflowAssignmentUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.WorkflowAssignmentCreateOrConnectWithoutVersionInput | Prisma.WorkflowAssignmentCreateOrConnectWithoutVersionInput[];
    upsert?: Prisma.WorkflowAssignmentUpsertWithWhereUniqueWithoutVersionInput | Prisma.WorkflowAssignmentUpsertWithWhereUniqueWithoutVersionInput[];
    createMany?: Prisma.WorkflowAssignmentCreateManyVersionInputEnvelope;
    set?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
    disconnect?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
    delete?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
    connect?: Prisma.WorkflowAssignmentWhereUniqueInput | Prisma.WorkflowAssignmentWhereUniqueInput[];
    update?: Prisma.WorkflowAssignmentUpdateWithWhereUniqueWithoutVersionInput | Prisma.WorkflowAssignmentUpdateWithWhereUniqueWithoutVersionInput[];
    updateMany?: Prisma.WorkflowAssignmentUpdateManyWithWhereWithoutVersionInput | Prisma.WorkflowAssignmentUpdateManyWithWhereWithoutVersionInput[];
    deleteMany?: Prisma.WorkflowAssignmentScalarWhereInput | Prisma.WorkflowAssignmentScalarWhereInput[];
};
export type EnumWorkflowAssignmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.WorkflowAssignmentType;
};
export type WorkflowAssignmentCreateWithoutUserInput = {
    id?: string;
    type: $Enums.WorkflowAssignmentType;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
    version: Prisma.DocumentVersionCreateNestedOneWithoutAssignmentsInput;
};
export type WorkflowAssignmentUncheckedCreateWithoutUserInput = {
    id?: string;
    versionId: string;
    type: $Enums.WorkflowAssignmentType;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
};
export type WorkflowAssignmentCreateOrConnectWithoutUserInput = {
    where: Prisma.WorkflowAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkflowAssignmentCreateWithoutUserInput, Prisma.WorkflowAssignmentUncheckedCreateWithoutUserInput>;
};
export type WorkflowAssignmentCreateManyUserInputEnvelope = {
    data: Prisma.WorkflowAssignmentCreateManyUserInput | Prisma.WorkflowAssignmentCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type WorkflowAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.WorkflowAssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.WorkflowAssignmentUpdateWithoutUserInput, Prisma.WorkflowAssignmentUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.WorkflowAssignmentCreateWithoutUserInput, Prisma.WorkflowAssignmentUncheckedCreateWithoutUserInput>;
};
export type WorkflowAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.WorkflowAssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.WorkflowAssignmentUpdateWithoutUserInput, Prisma.WorkflowAssignmentUncheckedUpdateWithoutUserInput>;
};
export type WorkflowAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.WorkflowAssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.WorkflowAssignmentUpdateManyMutationInput, Prisma.WorkflowAssignmentUncheckedUpdateManyWithoutUserInput>;
};
export type WorkflowAssignmentScalarWhereInput = {
    AND?: Prisma.WorkflowAssignmentScalarWhereInput | Prisma.WorkflowAssignmentScalarWhereInput[];
    OR?: Prisma.WorkflowAssignmentScalarWhereInput[];
    NOT?: Prisma.WorkflowAssignmentScalarWhereInput | Prisma.WorkflowAssignmentScalarWhereInput[];
    id?: Prisma.StringFilter<"WorkflowAssignment"> | string;
    versionId?: Prisma.StringFilter<"WorkflowAssignment"> | string;
    userId?: Prisma.StringFilter<"WorkflowAssignment"> | string;
    type?: Prisma.EnumWorkflowAssignmentTypeFilter<"WorkflowAssignment"> | $Enums.WorkflowAssignmentType;
    assignedAt?: Prisma.DateTimeFilter<"WorkflowAssignment"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"WorkflowAssignment"> | Date | string | null;
};
export type WorkflowAssignmentCreateWithoutVersionInput = {
    id?: string;
    type: $Enums.WorkflowAssignmentType;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutAssignmentsInput;
};
export type WorkflowAssignmentUncheckedCreateWithoutVersionInput = {
    id?: string;
    userId: string;
    type: $Enums.WorkflowAssignmentType;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
};
export type WorkflowAssignmentCreateOrConnectWithoutVersionInput = {
    where: Prisma.WorkflowAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkflowAssignmentCreateWithoutVersionInput, Prisma.WorkflowAssignmentUncheckedCreateWithoutVersionInput>;
};
export type WorkflowAssignmentCreateManyVersionInputEnvelope = {
    data: Prisma.WorkflowAssignmentCreateManyVersionInput | Prisma.WorkflowAssignmentCreateManyVersionInput[];
    skipDuplicates?: boolean;
};
export type WorkflowAssignmentUpsertWithWhereUniqueWithoutVersionInput = {
    where: Prisma.WorkflowAssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.WorkflowAssignmentUpdateWithoutVersionInput, Prisma.WorkflowAssignmentUncheckedUpdateWithoutVersionInput>;
    create: Prisma.XOR<Prisma.WorkflowAssignmentCreateWithoutVersionInput, Prisma.WorkflowAssignmentUncheckedCreateWithoutVersionInput>;
};
export type WorkflowAssignmentUpdateWithWhereUniqueWithoutVersionInput = {
    where: Prisma.WorkflowAssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.WorkflowAssignmentUpdateWithoutVersionInput, Prisma.WorkflowAssignmentUncheckedUpdateWithoutVersionInput>;
};
export type WorkflowAssignmentUpdateManyWithWhereWithoutVersionInput = {
    where: Prisma.WorkflowAssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.WorkflowAssignmentUpdateManyMutationInput, Prisma.WorkflowAssignmentUncheckedUpdateManyWithoutVersionInput>;
};
export type WorkflowAssignmentCreateManyUserInput = {
    id?: string;
    versionId: string;
    type: $Enums.WorkflowAssignmentType;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
};
export type WorkflowAssignmentUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumWorkflowAssignmentTypeFieldUpdateOperationsInput | $Enums.WorkflowAssignmentType;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.DocumentVersionUpdateOneRequiredWithoutAssignmentsNestedInput;
};
export type WorkflowAssignmentUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumWorkflowAssignmentTypeFieldUpdateOperationsInput | $Enums.WorkflowAssignmentType;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WorkflowAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumWorkflowAssignmentTypeFieldUpdateOperationsInput | $Enums.WorkflowAssignmentType;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WorkflowAssignmentCreateManyVersionInput = {
    id?: string;
    userId: string;
    type: $Enums.WorkflowAssignmentType;
    assignedAt?: Date | string;
    completedAt?: Date | string | null;
};
export type WorkflowAssignmentUpdateWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumWorkflowAssignmentTypeFieldUpdateOperationsInput | $Enums.WorkflowAssignmentType;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutAssignmentsNestedInput;
};
export type WorkflowAssignmentUncheckedUpdateWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumWorkflowAssignmentTypeFieldUpdateOperationsInput | $Enums.WorkflowAssignmentType;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WorkflowAssignmentUncheckedUpdateManyWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumWorkflowAssignmentTypeFieldUpdateOperationsInput | $Enums.WorkflowAssignmentType;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WorkflowAssignmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    versionId?: boolean;
    userId?: boolean;
    type?: boolean;
    assignedAt?: boolean;
    completedAt?: boolean;
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workflowAssignment"]>;
export type WorkflowAssignmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    versionId?: boolean;
    userId?: boolean;
    type?: boolean;
    assignedAt?: boolean;
    completedAt?: boolean;
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workflowAssignment"]>;
export type WorkflowAssignmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    versionId?: boolean;
    userId?: boolean;
    type?: boolean;
    assignedAt?: boolean;
    completedAt?: boolean;
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workflowAssignment"]>;
export type WorkflowAssignmentSelectScalar = {
    id?: boolean;
    versionId?: boolean;
    userId?: boolean;
    type?: boolean;
    assignedAt?: boolean;
    completedAt?: boolean;
};
export type WorkflowAssignmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "versionId" | "userId" | "type" | "assignedAt" | "completedAt", ExtArgs["result"]["workflowAssignment"]>;
export type WorkflowAssignmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type WorkflowAssignmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type WorkflowAssignmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $WorkflowAssignmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WorkflowAssignment";
    objects: {
        version: Prisma.$DocumentVersionPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        versionId: string;
        userId: string;
        type: $Enums.WorkflowAssignmentType;
        assignedAt: Date;
        completedAt: Date | null;
    }, ExtArgs["result"]["workflowAssignment"]>;
    composites: {};
};
export type WorkflowAssignmentGetPayload<S extends boolean | null | undefined | WorkflowAssignmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WorkflowAssignmentPayload, S>;
export type WorkflowAssignmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WorkflowAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WorkflowAssignmentCountAggregateInputType | true;
};
export interface WorkflowAssignmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WorkflowAssignment'];
        meta: {
            name: 'WorkflowAssignment';
        };
    };
    findUnique<T extends WorkflowAssignmentFindUniqueArgs>(args: Prisma.SelectSubset<T, WorkflowAssignmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WorkflowAssignmentClient<runtime.Types.Result.GetResult<Prisma.$WorkflowAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WorkflowAssignmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WorkflowAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkflowAssignmentClient<runtime.Types.Result.GetResult<Prisma.$WorkflowAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WorkflowAssignmentFindFirstArgs>(args?: Prisma.SelectSubset<T, WorkflowAssignmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__WorkflowAssignmentClient<runtime.Types.Result.GetResult<Prisma.$WorkflowAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WorkflowAssignmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WorkflowAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkflowAssignmentClient<runtime.Types.Result.GetResult<Prisma.$WorkflowAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WorkflowAssignmentFindManyArgs>(args?: Prisma.SelectSubset<T, WorkflowAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkflowAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WorkflowAssignmentCreateArgs>(args: Prisma.SelectSubset<T, WorkflowAssignmentCreateArgs<ExtArgs>>): Prisma.Prisma__WorkflowAssignmentClient<runtime.Types.Result.GetResult<Prisma.$WorkflowAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WorkflowAssignmentCreateManyArgs>(args?: Prisma.SelectSubset<T, WorkflowAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WorkflowAssignmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WorkflowAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkflowAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WorkflowAssignmentDeleteArgs>(args: Prisma.SelectSubset<T, WorkflowAssignmentDeleteArgs<ExtArgs>>): Prisma.Prisma__WorkflowAssignmentClient<runtime.Types.Result.GetResult<Prisma.$WorkflowAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WorkflowAssignmentUpdateArgs>(args: Prisma.SelectSubset<T, WorkflowAssignmentUpdateArgs<ExtArgs>>): Prisma.Prisma__WorkflowAssignmentClient<runtime.Types.Result.GetResult<Prisma.$WorkflowAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WorkflowAssignmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, WorkflowAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WorkflowAssignmentUpdateManyArgs>(args: Prisma.SelectSubset<T, WorkflowAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WorkflowAssignmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WorkflowAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkflowAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WorkflowAssignmentUpsertArgs>(args: Prisma.SelectSubset<T, WorkflowAssignmentUpsertArgs<ExtArgs>>): Prisma.Prisma__WorkflowAssignmentClient<runtime.Types.Result.GetResult<Prisma.$WorkflowAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WorkflowAssignmentCountArgs>(args?: Prisma.Subset<T, WorkflowAssignmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WorkflowAssignmentCountAggregateOutputType> : number>;
    aggregate<T extends WorkflowAssignmentAggregateArgs>(args: Prisma.Subset<T, WorkflowAssignmentAggregateArgs>): Prisma.PrismaPromise<GetWorkflowAssignmentAggregateType<T>>;
    groupBy<T extends WorkflowAssignmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WorkflowAssignmentGroupByArgs['orderBy'];
    } : {
        orderBy?: WorkflowAssignmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WorkflowAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WorkflowAssignmentFieldRefs;
}
export interface Prisma__WorkflowAssignmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    version<T extends Prisma.DocumentVersionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentVersionDefaultArgs<ExtArgs>>): Prisma.Prisma__DocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WorkflowAssignmentFieldRefs {
    readonly id: Prisma.FieldRef<"WorkflowAssignment", 'String'>;
    readonly versionId: Prisma.FieldRef<"WorkflowAssignment", 'String'>;
    readonly userId: Prisma.FieldRef<"WorkflowAssignment", 'String'>;
    readonly type: Prisma.FieldRef<"WorkflowAssignment", 'WorkflowAssignmentType'>;
    readonly assignedAt: Prisma.FieldRef<"WorkflowAssignment", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"WorkflowAssignment", 'DateTime'>;
}
export type WorkflowAssignmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowAssignmentOmit<ExtArgs> | null;
    include?: Prisma.WorkflowAssignmentInclude<ExtArgs> | null;
    where: Prisma.WorkflowAssignmentWhereUniqueInput;
};
export type WorkflowAssignmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowAssignmentOmit<ExtArgs> | null;
    include?: Prisma.WorkflowAssignmentInclude<ExtArgs> | null;
    where: Prisma.WorkflowAssignmentWhereUniqueInput;
};
export type WorkflowAssignmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WorkflowAssignmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WorkflowAssignmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WorkflowAssignmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowAssignmentOmit<ExtArgs> | null;
    include?: Prisma.WorkflowAssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkflowAssignmentCreateInput, Prisma.WorkflowAssignmentUncheckedCreateInput>;
};
export type WorkflowAssignmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WorkflowAssignmentCreateManyInput | Prisma.WorkflowAssignmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WorkflowAssignmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowAssignmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WorkflowAssignmentOmit<ExtArgs> | null;
    data: Prisma.WorkflowAssignmentCreateManyInput | Prisma.WorkflowAssignmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WorkflowAssignmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WorkflowAssignmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowAssignmentOmit<ExtArgs> | null;
    include?: Prisma.WorkflowAssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkflowAssignmentUpdateInput, Prisma.WorkflowAssignmentUncheckedUpdateInput>;
    where: Prisma.WorkflowAssignmentWhereUniqueInput;
};
export type WorkflowAssignmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WorkflowAssignmentUpdateManyMutationInput, Prisma.WorkflowAssignmentUncheckedUpdateManyInput>;
    where?: Prisma.WorkflowAssignmentWhereInput;
    limit?: number;
};
export type WorkflowAssignmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowAssignmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WorkflowAssignmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkflowAssignmentUpdateManyMutationInput, Prisma.WorkflowAssignmentUncheckedUpdateManyInput>;
    where?: Prisma.WorkflowAssignmentWhereInput;
    limit?: number;
    include?: Prisma.WorkflowAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WorkflowAssignmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowAssignmentOmit<ExtArgs> | null;
    include?: Prisma.WorkflowAssignmentInclude<ExtArgs> | null;
    where: Prisma.WorkflowAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkflowAssignmentCreateInput, Prisma.WorkflowAssignmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WorkflowAssignmentUpdateInput, Prisma.WorkflowAssignmentUncheckedUpdateInput>;
};
export type WorkflowAssignmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowAssignmentOmit<ExtArgs> | null;
    include?: Prisma.WorkflowAssignmentInclude<ExtArgs> | null;
    where: Prisma.WorkflowAssignmentWhereUniqueInput;
};
export type WorkflowAssignmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkflowAssignmentWhereInput;
    limit?: number;
};
export type WorkflowAssignmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowAssignmentOmit<ExtArgs> | null;
    include?: Prisma.WorkflowAssignmentInclude<ExtArgs> | null;
};
