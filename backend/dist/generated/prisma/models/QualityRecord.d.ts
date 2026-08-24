import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type QualityRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$QualityRecordPayload>;
export type AggregateQualityRecord = {
    _count: QualityRecordCountAggregateOutputType | null;
    _min: QualityRecordMinAggregateOutputType | null;
    _max: QualityRecordMaxAggregateOutputType | null;
};
export type QualityRecordMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    templateId: string | null;
    documentId: string | null;
    versionId: string | null;
    completedById: string | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type QualityRecordMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    templateId: string | null;
    documentId: string | null;
    versionId: string | null;
    completedById: string | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type QualityRecordCountAggregateOutputType = {
    id: number;
    tenantId: number;
    templateId: number;
    documentId: number;
    versionId: number;
    completedById: number;
    status: number;
    values: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type QualityRecordMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    templateId?: true;
    documentId?: true;
    versionId?: true;
    completedById?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type QualityRecordMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    templateId?: true;
    documentId?: true;
    versionId?: true;
    completedById?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type QualityRecordCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    templateId?: true;
    documentId?: true;
    versionId?: true;
    completedById?: true;
    status?: true;
    values?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type QualityRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QualityRecordWhereInput;
    orderBy?: Prisma.QualityRecordOrderByWithRelationInput | Prisma.QualityRecordOrderByWithRelationInput[];
    cursor?: Prisma.QualityRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QualityRecordCountAggregateInputType;
    _min?: QualityRecordMinAggregateInputType;
    _max?: QualityRecordMaxAggregateInputType;
};
export type GetQualityRecordAggregateType<T extends QualityRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateQualityRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQualityRecord[P]> : Prisma.GetScalarType<T[P], AggregateQualityRecord[P]>;
};
export type QualityRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QualityRecordWhereInput;
    orderBy?: Prisma.QualityRecordOrderByWithAggregationInput | Prisma.QualityRecordOrderByWithAggregationInput[];
    by: Prisma.QualityRecordScalarFieldEnum[] | Prisma.QualityRecordScalarFieldEnum;
    having?: Prisma.QualityRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QualityRecordCountAggregateInputType | true;
    _min?: QualityRecordMinAggregateInputType;
    _max?: QualityRecordMaxAggregateInputType;
};
export type QualityRecordGroupByOutputType = {
    id: string;
    tenantId: string;
    templateId: string;
    documentId: string | null;
    versionId: string | null;
    completedById: string;
    status: string;
    values: runtime.JsonValue;
    createdAt: Date;
    updatedAt: Date;
    _count: QualityRecordCountAggregateOutputType | null;
    _min: QualityRecordMinAggregateOutputType | null;
    _max: QualityRecordMaxAggregateOutputType | null;
};
export type GetQualityRecordGroupByPayload<T extends QualityRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QualityRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QualityRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QualityRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QualityRecordGroupByOutputType[P]>;
}>>;
export type QualityRecordWhereInput = {
    AND?: Prisma.QualityRecordWhereInput | Prisma.QualityRecordWhereInput[];
    OR?: Prisma.QualityRecordWhereInput[];
    NOT?: Prisma.QualityRecordWhereInput | Prisma.QualityRecordWhereInput[];
    id?: Prisma.StringFilter<"QualityRecord"> | string;
    tenantId?: Prisma.StringFilter<"QualityRecord"> | string;
    templateId?: Prisma.StringFilter<"QualityRecord"> | string;
    documentId?: Prisma.StringNullableFilter<"QualityRecord"> | string | null;
    versionId?: Prisma.StringNullableFilter<"QualityRecord"> | string | null;
    completedById?: Prisma.StringFilter<"QualityRecord"> | string;
    status?: Prisma.StringFilter<"QualityRecord"> | string;
    values?: Prisma.JsonFilter<"QualityRecord">;
    createdAt?: Prisma.DateTimeFilter<"QualityRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"QualityRecord"> | Date | string;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    template?: Prisma.XOR<Prisma.FormTemplateScalarRelationFilter, Prisma.FormTemplateWhereInput>;
    document?: Prisma.XOR<Prisma.DocumentNullableScalarRelationFilter, Prisma.DocumentWhereInput> | null;
    version?: Prisma.XOR<Prisma.DocumentVersionNullableScalarRelationFilter, Prisma.DocumentVersionWhereInput> | null;
    completedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    attachments?: Prisma.FileAssetListRelationFilter;
};
export type QualityRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    versionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedById?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    values?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    template?: Prisma.FormTemplateOrderByWithRelationInput;
    document?: Prisma.DocumentOrderByWithRelationInput;
    version?: Prisma.DocumentVersionOrderByWithRelationInput;
    completedBy?: Prisma.UserOrderByWithRelationInput;
    attachments?: Prisma.FileAssetOrderByRelationAggregateInput;
};
export type QualityRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.QualityRecordWhereInput | Prisma.QualityRecordWhereInput[];
    OR?: Prisma.QualityRecordWhereInput[];
    NOT?: Prisma.QualityRecordWhereInput | Prisma.QualityRecordWhereInput[];
    tenantId?: Prisma.StringFilter<"QualityRecord"> | string;
    templateId?: Prisma.StringFilter<"QualityRecord"> | string;
    documentId?: Prisma.StringNullableFilter<"QualityRecord"> | string | null;
    versionId?: Prisma.StringNullableFilter<"QualityRecord"> | string | null;
    completedById?: Prisma.StringFilter<"QualityRecord"> | string;
    status?: Prisma.StringFilter<"QualityRecord"> | string;
    values?: Prisma.JsonFilter<"QualityRecord">;
    createdAt?: Prisma.DateTimeFilter<"QualityRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"QualityRecord"> | Date | string;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    template?: Prisma.XOR<Prisma.FormTemplateScalarRelationFilter, Prisma.FormTemplateWhereInput>;
    document?: Prisma.XOR<Prisma.DocumentNullableScalarRelationFilter, Prisma.DocumentWhereInput> | null;
    version?: Prisma.XOR<Prisma.DocumentVersionNullableScalarRelationFilter, Prisma.DocumentVersionWhereInput> | null;
    completedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    attachments?: Prisma.FileAssetListRelationFilter;
}, "id">;
export type QualityRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    versionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedById?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    values?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.QualityRecordCountOrderByAggregateInput;
    _max?: Prisma.QualityRecordMaxOrderByAggregateInput;
    _min?: Prisma.QualityRecordMinOrderByAggregateInput;
};
export type QualityRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.QualityRecordScalarWhereWithAggregatesInput | Prisma.QualityRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.QualityRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QualityRecordScalarWhereWithAggregatesInput | Prisma.QualityRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"QualityRecord"> | string;
    tenantId?: Prisma.StringWithAggregatesFilter<"QualityRecord"> | string;
    templateId?: Prisma.StringWithAggregatesFilter<"QualityRecord"> | string;
    documentId?: Prisma.StringNullableWithAggregatesFilter<"QualityRecord"> | string | null;
    versionId?: Prisma.StringNullableWithAggregatesFilter<"QualityRecord"> | string | null;
    completedById?: Prisma.StringWithAggregatesFilter<"QualityRecord"> | string;
    status?: Prisma.StringWithAggregatesFilter<"QualityRecord"> | string;
    values?: Prisma.JsonWithAggregatesFilter<"QualityRecord">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"QualityRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"QualityRecord"> | Date | string;
};
export type QualityRecordCreateInput = {
    id?: string;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutQualityRecordsInput;
    template: Prisma.FormTemplateCreateNestedOneWithoutQualityRecordsInput;
    document?: Prisma.DocumentCreateNestedOneWithoutQualityRecordsInput;
    version?: Prisma.DocumentVersionCreateNestedOneWithoutQualityRecordsInput;
    completedBy: Prisma.UserCreateNestedOneWithoutQualityRecordsInput;
    attachments?: Prisma.FileAssetCreateNestedManyWithoutQualityRecordInput;
};
export type QualityRecordUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    templateId: string;
    documentId?: string | null;
    versionId?: string | null;
    completedById: string;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attachments?: Prisma.FileAssetUncheckedCreateNestedManyWithoutQualityRecordInput;
};
export type QualityRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutQualityRecordsNestedInput;
    template?: Prisma.FormTemplateUpdateOneRequiredWithoutQualityRecordsNestedInput;
    document?: Prisma.DocumentUpdateOneWithoutQualityRecordsNestedInput;
    version?: Prisma.DocumentVersionUpdateOneWithoutQualityRecordsNestedInput;
    completedBy?: Prisma.UserUpdateOneRequiredWithoutQualityRecordsNestedInput;
    attachments?: Prisma.FileAssetUpdateManyWithoutQualityRecordNestedInput;
};
export type QualityRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedById?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attachments?: Prisma.FileAssetUncheckedUpdateManyWithoutQualityRecordNestedInput;
};
export type QualityRecordCreateManyInput = {
    id?: string;
    tenantId: string;
    templateId: string;
    documentId?: string | null;
    versionId?: string | null;
    completedById: string;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QualityRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QualityRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedById?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QualityRecordListRelationFilter = {
    every?: Prisma.QualityRecordWhereInput;
    some?: Prisma.QualityRecordWhereInput;
    none?: Prisma.QualityRecordWhereInput;
};
export type QualityRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type QualityRecordNullableScalarRelationFilter = {
    is?: Prisma.QualityRecordWhereInput | null;
    isNot?: Prisma.QualityRecordWhereInput | null;
};
export type QualityRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    completedById?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    values?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type QualityRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    completedById?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type QualityRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    completedById?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type QualityRecordCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutTenantInput, Prisma.QualityRecordUncheckedCreateWithoutTenantInput> | Prisma.QualityRecordCreateWithoutTenantInput[] | Prisma.QualityRecordUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutTenantInput | Prisma.QualityRecordCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.QualityRecordCreateManyTenantInputEnvelope;
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
};
export type QualityRecordUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutTenantInput, Prisma.QualityRecordUncheckedCreateWithoutTenantInput> | Prisma.QualityRecordCreateWithoutTenantInput[] | Prisma.QualityRecordUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutTenantInput | Prisma.QualityRecordCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.QualityRecordCreateManyTenantInputEnvelope;
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
};
export type QualityRecordUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutTenantInput, Prisma.QualityRecordUncheckedCreateWithoutTenantInput> | Prisma.QualityRecordCreateWithoutTenantInput[] | Prisma.QualityRecordUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutTenantInput | Prisma.QualityRecordCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.QualityRecordUpsertWithWhereUniqueWithoutTenantInput | Prisma.QualityRecordUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.QualityRecordCreateManyTenantInputEnvelope;
    set?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    disconnect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    delete?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    update?: Prisma.QualityRecordUpdateWithWhereUniqueWithoutTenantInput | Prisma.QualityRecordUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.QualityRecordUpdateManyWithWhereWithoutTenantInput | Prisma.QualityRecordUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.QualityRecordScalarWhereInput | Prisma.QualityRecordScalarWhereInput[];
};
export type QualityRecordUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutTenantInput, Prisma.QualityRecordUncheckedCreateWithoutTenantInput> | Prisma.QualityRecordCreateWithoutTenantInput[] | Prisma.QualityRecordUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutTenantInput | Prisma.QualityRecordCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.QualityRecordUpsertWithWhereUniqueWithoutTenantInput | Prisma.QualityRecordUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.QualityRecordCreateManyTenantInputEnvelope;
    set?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    disconnect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    delete?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    update?: Prisma.QualityRecordUpdateWithWhereUniqueWithoutTenantInput | Prisma.QualityRecordUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.QualityRecordUpdateManyWithWhereWithoutTenantInput | Prisma.QualityRecordUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.QualityRecordScalarWhereInput | Prisma.QualityRecordScalarWhereInput[];
};
export type QualityRecordCreateNestedManyWithoutCompletedByInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutCompletedByInput, Prisma.QualityRecordUncheckedCreateWithoutCompletedByInput> | Prisma.QualityRecordCreateWithoutCompletedByInput[] | Prisma.QualityRecordUncheckedCreateWithoutCompletedByInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutCompletedByInput | Prisma.QualityRecordCreateOrConnectWithoutCompletedByInput[];
    createMany?: Prisma.QualityRecordCreateManyCompletedByInputEnvelope;
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
};
export type QualityRecordUncheckedCreateNestedManyWithoutCompletedByInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutCompletedByInput, Prisma.QualityRecordUncheckedCreateWithoutCompletedByInput> | Prisma.QualityRecordCreateWithoutCompletedByInput[] | Prisma.QualityRecordUncheckedCreateWithoutCompletedByInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutCompletedByInput | Prisma.QualityRecordCreateOrConnectWithoutCompletedByInput[];
    createMany?: Prisma.QualityRecordCreateManyCompletedByInputEnvelope;
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
};
export type QualityRecordUpdateManyWithoutCompletedByNestedInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutCompletedByInput, Prisma.QualityRecordUncheckedCreateWithoutCompletedByInput> | Prisma.QualityRecordCreateWithoutCompletedByInput[] | Prisma.QualityRecordUncheckedCreateWithoutCompletedByInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutCompletedByInput | Prisma.QualityRecordCreateOrConnectWithoutCompletedByInput[];
    upsert?: Prisma.QualityRecordUpsertWithWhereUniqueWithoutCompletedByInput | Prisma.QualityRecordUpsertWithWhereUniqueWithoutCompletedByInput[];
    createMany?: Prisma.QualityRecordCreateManyCompletedByInputEnvelope;
    set?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    disconnect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    delete?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    update?: Prisma.QualityRecordUpdateWithWhereUniqueWithoutCompletedByInput | Prisma.QualityRecordUpdateWithWhereUniqueWithoutCompletedByInput[];
    updateMany?: Prisma.QualityRecordUpdateManyWithWhereWithoutCompletedByInput | Prisma.QualityRecordUpdateManyWithWhereWithoutCompletedByInput[];
    deleteMany?: Prisma.QualityRecordScalarWhereInput | Prisma.QualityRecordScalarWhereInput[];
};
export type QualityRecordUncheckedUpdateManyWithoutCompletedByNestedInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutCompletedByInput, Prisma.QualityRecordUncheckedCreateWithoutCompletedByInput> | Prisma.QualityRecordCreateWithoutCompletedByInput[] | Prisma.QualityRecordUncheckedCreateWithoutCompletedByInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutCompletedByInput | Prisma.QualityRecordCreateOrConnectWithoutCompletedByInput[];
    upsert?: Prisma.QualityRecordUpsertWithWhereUniqueWithoutCompletedByInput | Prisma.QualityRecordUpsertWithWhereUniqueWithoutCompletedByInput[];
    createMany?: Prisma.QualityRecordCreateManyCompletedByInputEnvelope;
    set?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    disconnect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    delete?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    update?: Prisma.QualityRecordUpdateWithWhereUniqueWithoutCompletedByInput | Prisma.QualityRecordUpdateWithWhereUniqueWithoutCompletedByInput[];
    updateMany?: Prisma.QualityRecordUpdateManyWithWhereWithoutCompletedByInput | Prisma.QualityRecordUpdateManyWithWhereWithoutCompletedByInput[];
    deleteMany?: Prisma.QualityRecordScalarWhereInput | Prisma.QualityRecordScalarWhereInput[];
};
export type QualityRecordCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutDocumentInput, Prisma.QualityRecordUncheckedCreateWithoutDocumentInput> | Prisma.QualityRecordCreateWithoutDocumentInput[] | Prisma.QualityRecordUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutDocumentInput | Prisma.QualityRecordCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.QualityRecordCreateManyDocumentInputEnvelope;
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
};
export type QualityRecordUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutDocumentInput, Prisma.QualityRecordUncheckedCreateWithoutDocumentInput> | Prisma.QualityRecordCreateWithoutDocumentInput[] | Prisma.QualityRecordUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutDocumentInput | Prisma.QualityRecordCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.QualityRecordCreateManyDocumentInputEnvelope;
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
};
export type QualityRecordUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutDocumentInput, Prisma.QualityRecordUncheckedCreateWithoutDocumentInput> | Prisma.QualityRecordCreateWithoutDocumentInput[] | Prisma.QualityRecordUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutDocumentInput | Prisma.QualityRecordCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.QualityRecordUpsertWithWhereUniqueWithoutDocumentInput | Prisma.QualityRecordUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.QualityRecordCreateManyDocumentInputEnvelope;
    set?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    disconnect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    delete?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    update?: Prisma.QualityRecordUpdateWithWhereUniqueWithoutDocumentInput | Prisma.QualityRecordUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.QualityRecordUpdateManyWithWhereWithoutDocumentInput | Prisma.QualityRecordUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.QualityRecordScalarWhereInput | Prisma.QualityRecordScalarWhereInput[];
};
export type QualityRecordUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutDocumentInput, Prisma.QualityRecordUncheckedCreateWithoutDocumentInput> | Prisma.QualityRecordCreateWithoutDocumentInput[] | Prisma.QualityRecordUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutDocumentInput | Prisma.QualityRecordCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.QualityRecordUpsertWithWhereUniqueWithoutDocumentInput | Prisma.QualityRecordUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.QualityRecordCreateManyDocumentInputEnvelope;
    set?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    disconnect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    delete?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    update?: Prisma.QualityRecordUpdateWithWhereUniqueWithoutDocumentInput | Prisma.QualityRecordUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.QualityRecordUpdateManyWithWhereWithoutDocumentInput | Prisma.QualityRecordUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.QualityRecordScalarWhereInput | Prisma.QualityRecordScalarWhereInput[];
};
export type QualityRecordCreateNestedManyWithoutVersionInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutVersionInput, Prisma.QualityRecordUncheckedCreateWithoutVersionInput> | Prisma.QualityRecordCreateWithoutVersionInput[] | Prisma.QualityRecordUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutVersionInput | Prisma.QualityRecordCreateOrConnectWithoutVersionInput[];
    createMany?: Prisma.QualityRecordCreateManyVersionInputEnvelope;
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
};
export type QualityRecordUncheckedCreateNestedManyWithoutVersionInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutVersionInput, Prisma.QualityRecordUncheckedCreateWithoutVersionInput> | Prisma.QualityRecordCreateWithoutVersionInput[] | Prisma.QualityRecordUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutVersionInput | Prisma.QualityRecordCreateOrConnectWithoutVersionInput[];
    createMany?: Prisma.QualityRecordCreateManyVersionInputEnvelope;
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
};
export type QualityRecordUpdateManyWithoutVersionNestedInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutVersionInput, Prisma.QualityRecordUncheckedCreateWithoutVersionInput> | Prisma.QualityRecordCreateWithoutVersionInput[] | Prisma.QualityRecordUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutVersionInput | Prisma.QualityRecordCreateOrConnectWithoutVersionInput[];
    upsert?: Prisma.QualityRecordUpsertWithWhereUniqueWithoutVersionInput | Prisma.QualityRecordUpsertWithWhereUniqueWithoutVersionInput[];
    createMany?: Prisma.QualityRecordCreateManyVersionInputEnvelope;
    set?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    disconnect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    delete?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    update?: Prisma.QualityRecordUpdateWithWhereUniqueWithoutVersionInput | Prisma.QualityRecordUpdateWithWhereUniqueWithoutVersionInput[];
    updateMany?: Prisma.QualityRecordUpdateManyWithWhereWithoutVersionInput | Prisma.QualityRecordUpdateManyWithWhereWithoutVersionInput[];
    deleteMany?: Prisma.QualityRecordScalarWhereInput | Prisma.QualityRecordScalarWhereInput[];
};
export type QualityRecordUncheckedUpdateManyWithoutVersionNestedInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutVersionInput, Prisma.QualityRecordUncheckedCreateWithoutVersionInput> | Prisma.QualityRecordCreateWithoutVersionInput[] | Prisma.QualityRecordUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutVersionInput | Prisma.QualityRecordCreateOrConnectWithoutVersionInput[];
    upsert?: Prisma.QualityRecordUpsertWithWhereUniqueWithoutVersionInput | Prisma.QualityRecordUpsertWithWhereUniqueWithoutVersionInput[];
    createMany?: Prisma.QualityRecordCreateManyVersionInputEnvelope;
    set?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    disconnect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    delete?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    update?: Prisma.QualityRecordUpdateWithWhereUniqueWithoutVersionInput | Prisma.QualityRecordUpdateWithWhereUniqueWithoutVersionInput[];
    updateMany?: Prisma.QualityRecordUpdateManyWithWhereWithoutVersionInput | Prisma.QualityRecordUpdateManyWithWhereWithoutVersionInput[];
    deleteMany?: Prisma.QualityRecordScalarWhereInput | Prisma.QualityRecordScalarWhereInput[];
};
export type QualityRecordCreateNestedOneWithoutAttachmentsInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutAttachmentsInput, Prisma.QualityRecordUncheckedCreateWithoutAttachmentsInput>;
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutAttachmentsInput;
    connect?: Prisma.QualityRecordWhereUniqueInput;
};
export type QualityRecordUpdateOneWithoutAttachmentsNestedInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutAttachmentsInput, Prisma.QualityRecordUncheckedCreateWithoutAttachmentsInput>;
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutAttachmentsInput;
    upsert?: Prisma.QualityRecordUpsertWithoutAttachmentsInput;
    disconnect?: Prisma.QualityRecordWhereInput | boolean;
    delete?: Prisma.QualityRecordWhereInput | boolean;
    connect?: Prisma.QualityRecordWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QualityRecordUpdateToOneWithWhereWithoutAttachmentsInput, Prisma.QualityRecordUpdateWithoutAttachmentsInput>, Prisma.QualityRecordUncheckedUpdateWithoutAttachmentsInput>;
};
export type QualityRecordCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutTemplateInput, Prisma.QualityRecordUncheckedCreateWithoutTemplateInput> | Prisma.QualityRecordCreateWithoutTemplateInput[] | Prisma.QualityRecordUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutTemplateInput | Prisma.QualityRecordCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.QualityRecordCreateManyTemplateInputEnvelope;
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
};
export type QualityRecordUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutTemplateInput, Prisma.QualityRecordUncheckedCreateWithoutTemplateInput> | Prisma.QualityRecordCreateWithoutTemplateInput[] | Prisma.QualityRecordUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutTemplateInput | Prisma.QualityRecordCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.QualityRecordCreateManyTemplateInputEnvelope;
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
};
export type QualityRecordUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutTemplateInput, Prisma.QualityRecordUncheckedCreateWithoutTemplateInput> | Prisma.QualityRecordCreateWithoutTemplateInput[] | Prisma.QualityRecordUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutTemplateInput | Prisma.QualityRecordCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.QualityRecordUpsertWithWhereUniqueWithoutTemplateInput | Prisma.QualityRecordUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.QualityRecordCreateManyTemplateInputEnvelope;
    set?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    disconnect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    delete?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    update?: Prisma.QualityRecordUpdateWithWhereUniqueWithoutTemplateInput | Prisma.QualityRecordUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.QualityRecordUpdateManyWithWhereWithoutTemplateInput | Prisma.QualityRecordUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.QualityRecordScalarWhereInput | Prisma.QualityRecordScalarWhereInput[];
};
export type QualityRecordUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.QualityRecordCreateWithoutTemplateInput, Prisma.QualityRecordUncheckedCreateWithoutTemplateInput> | Prisma.QualityRecordCreateWithoutTemplateInput[] | Prisma.QualityRecordUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.QualityRecordCreateOrConnectWithoutTemplateInput | Prisma.QualityRecordCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.QualityRecordUpsertWithWhereUniqueWithoutTemplateInput | Prisma.QualityRecordUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.QualityRecordCreateManyTemplateInputEnvelope;
    set?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    disconnect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    delete?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    connect?: Prisma.QualityRecordWhereUniqueInput | Prisma.QualityRecordWhereUniqueInput[];
    update?: Prisma.QualityRecordUpdateWithWhereUniqueWithoutTemplateInput | Prisma.QualityRecordUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.QualityRecordUpdateManyWithWhereWithoutTemplateInput | Prisma.QualityRecordUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.QualityRecordScalarWhereInput | Prisma.QualityRecordScalarWhereInput[];
};
export type QualityRecordCreateWithoutTenantInput = {
    id?: string;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    template: Prisma.FormTemplateCreateNestedOneWithoutQualityRecordsInput;
    document?: Prisma.DocumentCreateNestedOneWithoutQualityRecordsInput;
    version?: Prisma.DocumentVersionCreateNestedOneWithoutQualityRecordsInput;
    completedBy: Prisma.UserCreateNestedOneWithoutQualityRecordsInput;
    attachments?: Prisma.FileAssetCreateNestedManyWithoutQualityRecordInput;
};
export type QualityRecordUncheckedCreateWithoutTenantInput = {
    id?: string;
    templateId: string;
    documentId?: string | null;
    versionId?: string | null;
    completedById: string;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attachments?: Prisma.FileAssetUncheckedCreateNestedManyWithoutQualityRecordInput;
};
export type QualityRecordCreateOrConnectWithoutTenantInput = {
    where: Prisma.QualityRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.QualityRecordCreateWithoutTenantInput, Prisma.QualityRecordUncheckedCreateWithoutTenantInput>;
};
export type QualityRecordCreateManyTenantInputEnvelope = {
    data: Prisma.QualityRecordCreateManyTenantInput | Prisma.QualityRecordCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type QualityRecordUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.QualityRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.QualityRecordUpdateWithoutTenantInput, Prisma.QualityRecordUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.QualityRecordCreateWithoutTenantInput, Prisma.QualityRecordUncheckedCreateWithoutTenantInput>;
};
export type QualityRecordUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.QualityRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.QualityRecordUpdateWithoutTenantInput, Prisma.QualityRecordUncheckedUpdateWithoutTenantInput>;
};
export type QualityRecordUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.QualityRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.QualityRecordUpdateManyMutationInput, Prisma.QualityRecordUncheckedUpdateManyWithoutTenantInput>;
};
export type QualityRecordScalarWhereInput = {
    AND?: Prisma.QualityRecordScalarWhereInput | Prisma.QualityRecordScalarWhereInput[];
    OR?: Prisma.QualityRecordScalarWhereInput[];
    NOT?: Prisma.QualityRecordScalarWhereInput | Prisma.QualityRecordScalarWhereInput[];
    id?: Prisma.StringFilter<"QualityRecord"> | string;
    tenantId?: Prisma.StringFilter<"QualityRecord"> | string;
    templateId?: Prisma.StringFilter<"QualityRecord"> | string;
    documentId?: Prisma.StringNullableFilter<"QualityRecord"> | string | null;
    versionId?: Prisma.StringNullableFilter<"QualityRecord"> | string | null;
    completedById?: Prisma.StringFilter<"QualityRecord"> | string;
    status?: Prisma.StringFilter<"QualityRecord"> | string;
    values?: Prisma.JsonFilter<"QualityRecord">;
    createdAt?: Prisma.DateTimeFilter<"QualityRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"QualityRecord"> | Date | string;
};
export type QualityRecordCreateWithoutCompletedByInput = {
    id?: string;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutQualityRecordsInput;
    template: Prisma.FormTemplateCreateNestedOneWithoutQualityRecordsInput;
    document?: Prisma.DocumentCreateNestedOneWithoutQualityRecordsInput;
    version?: Prisma.DocumentVersionCreateNestedOneWithoutQualityRecordsInput;
    attachments?: Prisma.FileAssetCreateNestedManyWithoutQualityRecordInput;
};
export type QualityRecordUncheckedCreateWithoutCompletedByInput = {
    id?: string;
    tenantId: string;
    templateId: string;
    documentId?: string | null;
    versionId?: string | null;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attachments?: Prisma.FileAssetUncheckedCreateNestedManyWithoutQualityRecordInput;
};
export type QualityRecordCreateOrConnectWithoutCompletedByInput = {
    where: Prisma.QualityRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.QualityRecordCreateWithoutCompletedByInput, Prisma.QualityRecordUncheckedCreateWithoutCompletedByInput>;
};
export type QualityRecordCreateManyCompletedByInputEnvelope = {
    data: Prisma.QualityRecordCreateManyCompletedByInput | Prisma.QualityRecordCreateManyCompletedByInput[];
    skipDuplicates?: boolean;
};
export type QualityRecordUpsertWithWhereUniqueWithoutCompletedByInput = {
    where: Prisma.QualityRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.QualityRecordUpdateWithoutCompletedByInput, Prisma.QualityRecordUncheckedUpdateWithoutCompletedByInput>;
    create: Prisma.XOR<Prisma.QualityRecordCreateWithoutCompletedByInput, Prisma.QualityRecordUncheckedCreateWithoutCompletedByInput>;
};
export type QualityRecordUpdateWithWhereUniqueWithoutCompletedByInput = {
    where: Prisma.QualityRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.QualityRecordUpdateWithoutCompletedByInput, Prisma.QualityRecordUncheckedUpdateWithoutCompletedByInput>;
};
export type QualityRecordUpdateManyWithWhereWithoutCompletedByInput = {
    where: Prisma.QualityRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.QualityRecordUpdateManyMutationInput, Prisma.QualityRecordUncheckedUpdateManyWithoutCompletedByInput>;
};
export type QualityRecordCreateWithoutDocumentInput = {
    id?: string;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutQualityRecordsInput;
    template: Prisma.FormTemplateCreateNestedOneWithoutQualityRecordsInput;
    version?: Prisma.DocumentVersionCreateNestedOneWithoutQualityRecordsInput;
    completedBy: Prisma.UserCreateNestedOneWithoutQualityRecordsInput;
    attachments?: Prisma.FileAssetCreateNestedManyWithoutQualityRecordInput;
};
export type QualityRecordUncheckedCreateWithoutDocumentInput = {
    id?: string;
    tenantId: string;
    templateId: string;
    versionId?: string | null;
    completedById: string;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attachments?: Prisma.FileAssetUncheckedCreateNestedManyWithoutQualityRecordInput;
};
export type QualityRecordCreateOrConnectWithoutDocumentInput = {
    where: Prisma.QualityRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.QualityRecordCreateWithoutDocumentInput, Prisma.QualityRecordUncheckedCreateWithoutDocumentInput>;
};
export type QualityRecordCreateManyDocumentInputEnvelope = {
    data: Prisma.QualityRecordCreateManyDocumentInput | Prisma.QualityRecordCreateManyDocumentInput[];
    skipDuplicates?: boolean;
};
export type QualityRecordUpsertWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.QualityRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.QualityRecordUpdateWithoutDocumentInput, Prisma.QualityRecordUncheckedUpdateWithoutDocumentInput>;
    create: Prisma.XOR<Prisma.QualityRecordCreateWithoutDocumentInput, Prisma.QualityRecordUncheckedCreateWithoutDocumentInput>;
};
export type QualityRecordUpdateWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.QualityRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.QualityRecordUpdateWithoutDocumentInput, Prisma.QualityRecordUncheckedUpdateWithoutDocumentInput>;
};
export type QualityRecordUpdateManyWithWhereWithoutDocumentInput = {
    where: Prisma.QualityRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.QualityRecordUpdateManyMutationInput, Prisma.QualityRecordUncheckedUpdateManyWithoutDocumentInput>;
};
export type QualityRecordCreateWithoutVersionInput = {
    id?: string;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutQualityRecordsInput;
    template: Prisma.FormTemplateCreateNestedOneWithoutQualityRecordsInput;
    document?: Prisma.DocumentCreateNestedOneWithoutQualityRecordsInput;
    completedBy: Prisma.UserCreateNestedOneWithoutQualityRecordsInput;
    attachments?: Prisma.FileAssetCreateNestedManyWithoutQualityRecordInput;
};
export type QualityRecordUncheckedCreateWithoutVersionInput = {
    id?: string;
    tenantId: string;
    templateId: string;
    documentId?: string | null;
    completedById: string;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attachments?: Prisma.FileAssetUncheckedCreateNestedManyWithoutQualityRecordInput;
};
export type QualityRecordCreateOrConnectWithoutVersionInput = {
    where: Prisma.QualityRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.QualityRecordCreateWithoutVersionInput, Prisma.QualityRecordUncheckedCreateWithoutVersionInput>;
};
export type QualityRecordCreateManyVersionInputEnvelope = {
    data: Prisma.QualityRecordCreateManyVersionInput | Prisma.QualityRecordCreateManyVersionInput[];
    skipDuplicates?: boolean;
};
export type QualityRecordUpsertWithWhereUniqueWithoutVersionInput = {
    where: Prisma.QualityRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.QualityRecordUpdateWithoutVersionInput, Prisma.QualityRecordUncheckedUpdateWithoutVersionInput>;
    create: Prisma.XOR<Prisma.QualityRecordCreateWithoutVersionInput, Prisma.QualityRecordUncheckedCreateWithoutVersionInput>;
};
export type QualityRecordUpdateWithWhereUniqueWithoutVersionInput = {
    where: Prisma.QualityRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.QualityRecordUpdateWithoutVersionInput, Prisma.QualityRecordUncheckedUpdateWithoutVersionInput>;
};
export type QualityRecordUpdateManyWithWhereWithoutVersionInput = {
    where: Prisma.QualityRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.QualityRecordUpdateManyMutationInput, Prisma.QualityRecordUncheckedUpdateManyWithoutVersionInput>;
};
export type QualityRecordCreateWithoutAttachmentsInput = {
    id?: string;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutQualityRecordsInput;
    template: Prisma.FormTemplateCreateNestedOneWithoutQualityRecordsInput;
    document?: Prisma.DocumentCreateNestedOneWithoutQualityRecordsInput;
    version?: Prisma.DocumentVersionCreateNestedOneWithoutQualityRecordsInput;
    completedBy: Prisma.UserCreateNestedOneWithoutQualityRecordsInput;
};
export type QualityRecordUncheckedCreateWithoutAttachmentsInput = {
    id?: string;
    tenantId: string;
    templateId: string;
    documentId?: string | null;
    versionId?: string | null;
    completedById: string;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QualityRecordCreateOrConnectWithoutAttachmentsInput = {
    where: Prisma.QualityRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.QualityRecordCreateWithoutAttachmentsInput, Prisma.QualityRecordUncheckedCreateWithoutAttachmentsInput>;
};
export type QualityRecordUpsertWithoutAttachmentsInput = {
    update: Prisma.XOR<Prisma.QualityRecordUpdateWithoutAttachmentsInput, Prisma.QualityRecordUncheckedUpdateWithoutAttachmentsInput>;
    create: Prisma.XOR<Prisma.QualityRecordCreateWithoutAttachmentsInput, Prisma.QualityRecordUncheckedCreateWithoutAttachmentsInput>;
    where?: Prisma.QualityRecordWhereInput;
};
export type QualityRecordUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: Prisma.QualityRecordWhereInput;
    data: Prisma.XOR<Prisma.QualityRecordUpdateWithoutAttachmentsInput, Prisma.QualityRecordUncheckedUpdateWithoutAttachmentsInput>;
};
export type QualityRecordUpdateWithoutAttachmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutQualityRecordsNestedInput;
    template?: Prisma.FormTemplateUpdateOneRequiredWithoutQualityRecordsNestedInput;
    document?: Prisma.DocumentUpdateOneWithoutQualityRecordsNestedInput;
    version?: Prisma.DocumentVersionUpdateOneWithoutQualityRecordsNestedInput;
    completedBy?: Prisma.UserUpdateOneRequiredWithoutQualityRecordsNestedInput;
};
export type QualityRecordUncheckedUpdateWithoutAttachmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedById?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QualityRecordCreateWithoutTemplateInput = {
    id?: string;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutQualityRecordsInput;
    document?: Prisma.DocumentCreateNestedOneWithoutQualityRecordsInput;
    version?: Prisma.DocumentVersionCreateNestedOneWithoutQualityRecordsInput;
    completedBy: Prisma.UserCreateNestedOneWithoutQualityRecordsInput;
    attachments?: Prisma.FileAssetCreateNestedManyWithoutQualityRecordInput;
};
export type QualityRecordUncheckedCreateWithoutTemplateInput = {
    id?: string;
    tenantId: string;
    documentId?: string | null;
    versionId?: string | null;
    completedById: string;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attachments?: Prisma.FileAssetUncheckedCreateNestedManyWithoutQualityRecordInput;
};
export type QualityRecordCreateOrConnectWithoutTemplateInput = {
    where: Prisma.QualityRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.QualityRecordCreateWithoutTemplateInput, Prisma.QualityRecordUncheckedCreateWithoutTemplateInput>;
};
export type QualityRecordCreateManyTemplateInputEnvelope = {
    data: Prisma.QualityRecordCreateManyTemplateInput | Prisma.QualityRecordCreateManyTemplateInput[];
    skipDuplicates?: boolean;
};
export type QualityRecordUpsertWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.QualityRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.QualityRecordUpdateWithoutTemplateInput, Prisma.QualityRecordUncheckedUpdateWithoutTemplateInput>;
    create: Prisma.XOR<Prisma.QualityRecordCreateWithoutTemplateInput, Prisma.QualityRecordUncheckedCreateWithoutTemplateInput>;
};
export type QualityRecordUpdateWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.QualityRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.QualityRecordUpdateWithoutTemplateInput, Prisma.QualityRecordUncheckedUpdateWithoutTemplateInput>;
};
export type QualityRecordUpdateManyWithWhereWithoutTemplateInput = {
    where: Prisma.QualityRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.QualityRecordUpdateManyMutationInput, Prisma.QualityRecordUncheckedUpdateManyWithoutTemplateInput>;
};
export type QualityRecordCreateManyTenantInput = {
    id?: string;
    templateId: string;
    documentId?: string | null;
    versionId?: string | null;
    completedById: string;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QualityRecordUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    template?: Prisma.FormTemplateUpdateOneRequiredWithoutQualityRecordsNestedInput;
    document?: Prisma.DocumentUpdateOneWithoutQualityRecordsNestedInput;
    version?: Prisma.DocumentVersionUpdateOneWithoutQualityRecordsNestedInput;
    completedBy?: Prisma.UserUpdateOneRequiredWithoutQualityRecordsNestedInput;
    attachments?: Prisma.FileAssetUpdateManyWithoutQualityRecordNestedInput;
};
export type QualityRecordUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedById?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attachments?: Prisma.FileAssetUncheckedUpdateManyWithoutQualityRecordNestedInput;
};
export type QualityRecordUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedById?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QualityRecordCreateManyCompletedByInput = {
    id?: string;
    tenantId: string;
    templateId: string;
    documentId?: string | null;
    versionId?: string | null;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QualityRecordUpdateWithoutCompletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutQualityRecordsNestedInput;
    template?: Prisma.FormTemplateUpdateOneRequiredWithoutQualityRecordsNestedInput;
    document?: Prisma.DocumentUpdateOneWithoutQualityRecordsNestedInput;
    version?: Prisma.DocumentVersionUpdateOneWithoutQualityRecordsNestedInput;
    attachments?: Prisma.FileAssetUpdateManyWithoutQualityRecordNestedInput;
};
export type QualityRecordUncheckedUpdateWithoutCompletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attachments?: Prisma.FileAssetUncheckedUpdateManyWithoutQualityRecordNestedInput;
};
export type QualityRecordUncheckedUpdateManyWithoutCompletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QualityRecordCreateManyDocumentInput = {
    id?: string;
    tenantId: string;
    templateId: string;
    versionId?: string | null;
    completedById: string;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QualityRecordUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutQualityRecordsNestedInput;
    template?: Prisma.FormTemplateUpdateOneRequiredWithoutQualityRecordsNestedInput;
    version?: Prisma.DocumentVersionUpdateOneWithoutQualityRecordsNestedInput;
    completedBy?: Prisma.UserUpdateOneRequiredWithoutQualityRecordsNestedInput;
    attachments?: Prisma.FileAssetUpdateManyWithoutQualityRecordNestedInput;
};
export type QualityRecordUncheckedUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedById?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attachments?: Prisma.FileAssetUncheckedUpdateManyWithoutQualityRecordNestedInput;
};
export type QualityRecordUncheckedUpdateManyWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedById?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QualityRecordCreateManyVersionInput = {
    id?: string;
    tenantId: string;
    templateId: string;
    documentId?: string | null;
    completedById: string;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QualityRecordUpdateWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutQualityRecordsNestedInput;
    template?: Prisma.FormTemplateUpdateOneRequiredWithoutQualityRecordsNestedInput;
    document?: Prisma.DocumentUpdateOneWithoutQualityRecordsNestedInput;
    completedBy?: Prisma.UserUpdateOneRequiredWithoutQualityRecordsNestedInput;
    attachments?: Prisma.FileAssetUpdateManyWithoutQualityRecordNestedInput;
};
export type QualityRecordUncheckedUpdateWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedById?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attachments?: Prisma.FileAssetUncheckedUpdateManyWithoutQualityRecordNestedInput;
};
export type QualityRecordUncheckedUpdateManyWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedById?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QualityRecordCreateManyTemplateInput = {
    id?: string;
    tenantId: string;
    documentId?: string | null;
    versionId?: string | null;
    completedById: string;
    status?: string;
    values: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QualityRecordUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutQualityRecordsNestedInput;
    document?: Prisma.DocumentUpdateOneWithoutQualityRecordsNestedInput;
    version?: Prisma.DocumentVersionUpdateOneWithoutQualityRecordsNestedInput;
    completedBy?: Prisma.UserUpdateOneRequiredWithoutQualityRecordsNestedInput;
    attachments?: Prisma.FileAssetUpdateManyWithoutQualityRecordNestedInput;
};
export type QualityRecordUncheckedUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedById?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attachments?: Prisma.FileAssetUncheckedUpdateManyWithoutQualityRecordNestedInput;
};
export type QualityRecordUncheckedUpdateManyWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completedById?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    values?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QualityRecordCountOutputType = {
    attachments: number;
};
export type QualityRecordCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attachments?: boolean | QualityRecordCountOutputTypeCountAttachmentsArgs;
};
export type QualityRecordCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualityRecordCountOutputTypeSelect<ExtArgs> | null;
};
export type QualityRecordCountOutputTypeCountAttachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileAssetWhereInput;
};
export type QualityRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    templateId?: boolean;
    documentId?: boolean;
    versionId?: boolean;
    completedById?: boolean;
    status?: boolean;
    values?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.FormTemplateDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.QualityRecord$documentArgs<ExtArgs>;
    version?: boolean | Prisma.QualityRecord$versionArgs<ExtArgs>;
    completedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    attachments?: boolean | Prisma.QualityRecord$attachmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.QualityRecordCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["qualityRecord"]>;
export type QualityRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    templateId?: boolean;
    documentId?: boolean;
    versionId?: boolean;
    completedById?: boolean;
    status?: boolean;
    values?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.FormTemplateDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.QualityRecord$documentArgs<ExtArgs>;
    version?: boolean | Prisma.QualityRecord$versionArgs<ExtArgs>;
    completedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["qualityRecord"]>;
export type QualityRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    templateId?: boolean;
    documentId?: boolean;
    versionId?: boolean;
    completedById?: boolean;
    status?: boolean;
    values?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.FormTemplateDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.QualityRecord$documentArgs<ExtArgs>;
    version?: boolean | Prisma.QualityRecord$versionArgs<ExtArgs>;
    completedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["qualityRecord"]>;
export type QualityRecordSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    templateId?: boolean;
    documentId?: boolean;
    versionId?: boolean;
    completedById?: boolean;
    status?: boolean;
    values?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type QualityRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "templateId" | "documentId" | "versionId" | "completedById" | "status" | "values" | "createdAt" | "updatedAt", ExtArgs["result"]["qualityRecord"]>;
export type QualityRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.FormTemplateDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.QualityRecord$documentArgs<ExtArgs>;
    version?: boolean | Prisma.QualityRecord$versionArgs<ExtArgs>;
    completedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    attachments?: boolean | Prisma.QualityRecord$attachmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.QualityRecordCountOutputTypeDefaultArgs<ExtArgs>;
};
export type QualityRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.FormTemplateDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.QualityRecord$documentArgs<ExtArgs>;
    version?: boolean | Prisma.QualityRecord$versionArgs<ExtArgs>;
    completedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type QualityRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.FormTemplateDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.QualityRecord$documentArgs<ExtArgs>;
    version?: boolean | Prisma.QualityRecord$versionArgs<ExtArgs>;
    completedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $QualityRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "QualityRecord";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
        template: Prisma.$FormTemplatePayload<ExtArgs>;
        document: Prisma.$DocumentPayload<ExtArgs> | null;
        version: Prisma.$DocumentVersionPayload<ExtArgs> | null;
        completedBy: Prisma.$UserPayload<ExtArgs>;
        attachments: Prisma.$FileAssetPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        templateId: string;
        documentId: string | null;
        versionId: string | null;
        completedById: string;
        status: string;
        values: runtime.JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["qualityRecord"]>;
    composites: {};
};
export type QualityRecordGetPayload<S extends boolean | null | undefined | QualityRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QualityRecordPayload, S>;
export type QualityRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QualityRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QualityRecordCountAggregateInputType | true;
};
export interface QualityRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['QualityRecord'];
        meta: {
            name: 'QualityRecord';
        };
    };
    findUnique<T extends QualityRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, QualityRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QualityRecordClient<runtime.Types.Result.GetResult<Prisma.$QualityRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends QualityRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QualityRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QualityRecordClient<runtime.Types.Result.GetResult<Prisma.$QualityRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends QualityRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, QualityRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__QualityRecordClient<runtime.Types.Result.GetResult<Prisma.$QualityRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends QualityRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QualityRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QualityRecordClient<runtime.Types.Result.GetResult<Prisma.$QualityRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends QualityRecordFindManyArgs>(args?: Prisma.SelectSubset<T, QualityRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QualityRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends QualityRecordCreateArgs>(args: Prisma.SelectSubset<T, QualityRecordCreateArgs<ExtArgs>>): Prisma.Prisma__QualityRecordClient<runtime.Types.Result.GetResult<Prisma.$QualityRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends QualityRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, QualityRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends QualityRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QualityRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QualityRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends QualityRecordDeleteArgs>(args: Prisma.SelectSubset<T, QualityRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__QualityRecordClient<runtime.Types.Result.GetResult<Prisma.$QualityRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends QualityRecordUpdateArgs>(args: Prisma.SelectSubset<T, QualityRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__QualityRecordClient<runtime.Types.Result.GetResult<Prisma.$QualityRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends QualityRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, QualityRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends QualityRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, QualityRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends QualityRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QualityRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QualityRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends QualityRecordUpsertArgs>(args: Prisma.SelectSubset<T, QualityRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__QualityRecordClient<runtime.Types.Result.GetResult<Prisma.$QualityRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends QualityRecordCountArgs>(args?: Prisma.Subset<T, QualityRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QualityRecordCountAggregateOutputType> : number>;
    aggregate<T extends QualityRecordAggregateArgs>(args: Prisma.Subset<T, QualityRecordAggregateArgs>): Prisma.PrismaPromise<GetQualityRecordAggregateType<T>>;
    groupBy<T extends QualityRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QualityRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: QualityRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QualityRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQualityRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: QualityRecordFieldRefs;
}
export interface Prisma__QualityRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    template<T extends Prisma.FormTemplateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FormTemplateDefaultArgs<ExtArgs>>): Prisma.Prisma__FormTemplateClient<runtime.Types.Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    document<T extends Prisma.QualityRecord$documentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QualityRecord$documentArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    version<T extends Prisma.QualityRecord$versionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QualityRecord$versionArgs<ExtArgs>>): Prisma.Prisma__DocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    completedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    attachments<T extends Prisma.QualityRecord$attachmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QualityRecord$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FileAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface QualityRecordFieldRefs {
    readonly id: Prisma.FieldRef<"QualityRecord", 'String'>;
    readonly tenantId: Prisma.FieldRef<"QualityRecord", 'String'>;
    readonly templateId: Prisma.FieldRef<"QualityRecord", 'String'>;
    readonly documentId: Prisma.FieldRef<"QualityRecord", 'String'>;
    readonly versionId: Prisma.FieldRef<"QualityRecord", 'String'>;
    readonly completedById: Prisma.FieldRef<"QualityRecord", 'String'>;
    readonly status: Prisma.FieldRef<"QualityRecord", 'String'>;
    readonly values: Prisma.FieldRef<"QualityRecord", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"QualityRecord", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"QualityRecord", 'DateTime'>;
}
export type QualityRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualityRecordSelect<ExtArgs> | null;
    omit?: Prisma.QualityRecordOmit<ExtArgs> | null;
    include?: Prisma.QualityRecordInclude<ExtArgs> | null;
    where: Prisma.QualityRecordWhereUniqueInput;
};
export type QualityRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualityRecordSelect<ExtArgs> | null;
    omit?: Prisma.QualityRecordOmit<ExtArgs> | null;
    include?: Prisma.QualityRecordInclude<ExtArgs> | null;
    where: Prisma.QualityRecordWhereUniqueInput;
};
export type QualityRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualityRecordSelect<ExtArgs> | null;
    omit?: Prisma.QualityRecordOmit<ExtArgs> | null;
    include?: Prisma.QualityRecordInclude<ExtArgs> | null;
    where?: Prisma.QualityRecordWhereInput;
    orderBy?: Prisma.QualityRecordOrderByWithRelationInput | Prisma.QualityRecordOrderByWithRelationInput[];
    cursor?: Prisma.QualityRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QualityRecordScalarFieldEnum | Prisma.QualityRecordScalarFieldEnum[];
};
export type QualityRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualityRecordSelect<ExtArgs> | null;
    omit?: Prisma.QualityRecordOmit<ExtArgs> | null;
    include?: Prisma.QualityRecordInclude<ExtArgs> | null;
    where?: Prisma.QualityRecordWhereInput;
    orderBy?: Prisma.QualityRecordOrderByWithRelationInput | Prisma.QualityRecordOrderByWithRelationInput[];
    cursor?: Prisma.QualityRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QualityRecordScalarFieldEnum | Prisma.QualityRecordScalarFieldEnum[];
};
export type QualityRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualityRecordSelect<ExtArgs> | null;
    omit?: Prisma.QualityRecordOmit<ExtArgs> | null;
    include?: Prisma.QualityRecordInclude<ExtArgs> | null;
    where?: Prisma.QualityRecordWhereInput;
    orderBy?: Prisma.QualityRecordOrderByWithRelationInput | Prisma.QualityRecordOrderByWithRelationInput[];
    cursor?: Prisma.QualityRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QualityRecordScalarFieldEnum | Prisma.QualityRecordScalarFieldEnum[];
};
export type QualityRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualityRecordSelect<ExtArgs> | null;
    omit?: Prisma.QualityRecordOmit<ExtArgs> | null;
    include?: Prisma.QualityRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QualityRecordCreateInput, Prisma.QualityRecordUncheckedCreateInput>;
};
export type QualityRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.QualityRecordCreateManyInput | Prisma.QualityRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type QualityRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualityRecordSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QualityRecordOmit<ExtArgs> | null;
    data: Prisma.QualityRecordCreateManyInput | Prisma.QualityRecordCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.QualityRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type QualityRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualityRecordSelect<ExtArgs> | null;
    omit?: Prisma.QualityRecordOmit<ExtArgs> | null;
    include?: Prisma.QualityRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QualityRecordUpdateInput, Prisma.QualityRecordUncheckedUpdateInput>;
    where: Prisma.QualityRecordWhereUniqueInput;
};
export type QualityRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.QualityRecordUpdateManyMutationInput, Prisma.QualityRecordUncheckedUpdateManyInput>;
    where?: Prisma.QualityRecordWhereInput;
    limit?: number;
};
export type QualityRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualityRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QualityRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QualityRecordUpdateManyMutationInput, Prisma.QualityRecordUncheckedUpdateManyInput>;
    where?: Prisma.QualityRecordWhereInput;
    limit?: number;
    include?: Prisma.QualityRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type QualityRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualityRecordSelect<ExtArgs> | null;
    omit?: Prisma.QualityRecordOmit<ExtArgs> | null;
    include?: Prisma.QualityRecordInclude<ExtArgs> | null;
    where: Prisma.QualityRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.QualityRecordCreateInput, Prisma.QualityRecordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.QualityRecordUpdateInput, Prisma.QualityRecordUncheckedUpdateInput>;
};
export type QualityRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualityRecordSelect<ExtArgs> | null;
    omit?: Prisma.QualityRecordOmit<ExtArgs> | null;
    include?: Prisma.QualityRecordInclude<ExtArgs> | null;
    where: Prisma.QualityRecordWhereUniqueInput;
};
export type QualityRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QualityRecordWhereInput;
    limit?: number;
};
export type QualityRecord$documentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
};
export type QualityRecord$versionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.DocumentVersionInclude<ExtArgs> | null;
    where?: Prisma.DocumentVersionWhereInput;
};
export type QualityRecord$attachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileAssetSelect<ExtArgs> | null;
    omit?: Prisma.FileAssetOmit<ExtArgs> | null;
    include?: Prisma.FileAssetInclude<ExtArgs> | null;
    where?: Prisma.FileAssetWhereInput;
    orderBy?: Prisma.FileAssetOrderByWithRelationInput | Prisma.FileAssetOrderByWithRelationInput[];
    cursor?: Prisma.FileAssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FileAssetScalarFieldEnum | Prisma.FileAssetScalarFieldEnum[];
};
export type QualityRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QualityRecordSelect<ExtArgs> | null;
    omit?: Prisma.QualityRecordOmit<ExtArgs> | null;
    include?: Prisma.QualityRecordInclude<ExtArgs> | null;
};
