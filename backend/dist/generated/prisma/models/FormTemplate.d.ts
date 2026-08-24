import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FormTemplateModel = runtime.Types.Result.DefaultSelection<Prisma.$FormTemplatePayload>;
export type AggregateFormTemplate = {
    _count: FormTemplateCountAggregateOutputType | null;
    _min: FormTemplateMinAggregateOutputType | null;
    _max: FormTemplateMaxAggregateOutputType | null;
};
export type FormTemplateMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    documentId: string | null;
    title: string | null;
    controlNumber: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FormTemplateMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    documentId: string | null;
    title: string | null;
    controlNumber: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FormTemplateCountAggregateOutputType = {
    id: number;
    tenantId: number;
    documentId: number;
    title: number;
    controlNumber: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FormTemplateMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    documentId?: true;
    title?: true;
    controlNumber?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FormTemplateMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    documentId?: true;
    title?: true;
    controlNumber?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FormTemplateCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    documentId?: true;
    title?: true;
    controlNumber?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FormTemplateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormTemplateWhereInput;
    orderBy?: Prisma.FormTemplateOrderByWithRelationInput | Prisma.FormTemplateOrderByWithRelationInput[];
    cursor?: Prisma.FormTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FormTemplateCountAggregateInputType;
    _min?: FormTemplateMinAggregateInputType;
    _max?: FormTemplateMaxAggregateInputType;
};
export type GetFormTemplateAggregateType<T extends FormTemplateAggregateArgs> = {
    [P in keyof T & keyof AggregateFormTemplate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFormTemplate[P]> : Prisma.GetScalarType<T[P], AggregateFormTemplate[P]>;
};
export type FormTemplateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormTemplateWhereInput;
    orderBy?: Prisma.FormTemplateOrderByWithAggregationInput | Prisma.FormTemplateOrderByWithAggregationInput[];
    by: Prisma.FormTemplateScalarFieldEnum[] | Prisma.FormTemplateScalarFieldEnum;
    having?: Prisma.FormTemplateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FormTemplateCountAggregateInputType | true;
    _min?: FormTemplateMinAggregateInputType;
    _max?: FormTemplateMaxAggregateInputType;
};
export type FormTemplateGroupByOutputType = {
    id: string;
    tenantId: string;
    documentId: string | null;
    title: string;
    controlNumber: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: FormTemplateCountAggregateOutputType | null;
    _min: FormTemplateMinAggregateOutputType | null;
    _max: FormTemplateMaxAggregateOutputType | null;
};
export type GetFormTemplateGroupByPayload<T extends FormTemplateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FormTemplateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FormTemplateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FormTemplateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FormTemplateGroupByOutputType[P]>;
}>>;
export type FormTemplateWhereInput = {
    AND?: Prisma.FormTemplateWhereInput | Prisma.FormTemplateWhereInput[];
    OR?: Prisma.FormTemplateWhereInput[];
    NOT?: Prisma.FormTemplateWhereInput | Prisma.FormTemplateWhereInput[];
    id?: Prisma.StringFilter<"FormTemplate"> | string;
    tenantId?: Prisma.StringFilter<"FormTemplate"> | string;
    documentId?: Prisma.StringNullableFilter<"FormTemplate"> | string | null;
    title?: Prisma.StringFilter<"FormTemplate"> | string;
    controlNumber?: Prisma.StringFilter<"FormTemplate"> | string;
    description?: Prisma.StringNullableFilter<"FormTemplate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"FormTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FormTemplate"> | Date | string;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    document?: Prisma.XOR<Prisma.DocumentNullableScalarRelationFilter, Prisma.DocumentWhereInput> | null;
    fields?: Prisma.FormFieldListRelationFilter;
    qualityRecords?: Prisma.QualityRecordListRelationFilter;
};
export type FormTemplateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    controlNumber?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    document?: Prisma.DocumentOrderByWithRelationInput;
    fields?: Prisma.FormFieldOrderByRelationAggregateInput;
    qualityRecords?: Prisma.QualityRecordOrderByRelationAggregateInput;
};
export type FormTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tenantId_controlNumber?: Prisma.FormTemplateTenantIdControlNumberCompoundUniqueInput;
    AND?: Prisma.FormTemplateWhereInput | Prisma.FormTemplateWhereInput[];
    OR?: Prisma.FormTemplateWhereInput[];
    NOT?: Prisma.FormTemplateWhereInput | Prisma.FormTemplateWhereInput[];
    tenantId?: Prisma.StringFilter<"FormTemplate"> | string;
    documentId?: Prisma.StringNullableFilter<"FormTemplate"> | string | null;
    title?: Prisma.StringFilter<"FormTemplate"> | string;
    controlNumber?: Prisma.StringFilter<"FormTemplate"> | string;
    description?: Prisma.StringNullableFilter<"FormTemplate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"FormTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FormTemplate"> | Date | string;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    document?: Prisma.XOR<Prisma.DocumentNullableScalarRelationFilter, Prisma.DocumentWhereInput> | null;
    fields?: Prisma.FormFieldListRelationFilter;
    qualityRecords?: Prisma.QualityRecordListRelationFilter;
}, "id" | "tenantId_controlNumber">;
export type FormTemplateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    controlNumber?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FormTemplateCountOrderByAggregateInput;
    _max?: Prisma.FormTemplateMaxOrderByAggregateInput;
    _min?: Prisma.FormTemplateMinOrderByAggregateInput;
};
export type FormTemplateScalarWhereWithAggregatesInput = {
    AND?: Prisma.FormTemplateScalarWhereWithAggregatesInput | Prisma.FormTemplateScalarWhereWithAggregatesInput[];
    OR?: Prisma.FormTemplateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FormTemplateScalarWhereWithAggregatesInput | Prisma.FormTemplateScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FormTemplate"> | string;
    tenantId?: Prisma.StringWithAggregatesFilter<"FormTemplate"> | string;
    documentId?: Prisma.StringNullableWithAggregatesFilter<"FormTemplate"> | string | null;
    title?: Prisma.StringWithAggregatesFilter<"FormTemplate"> | string;
    controlNumber?: Prisma.StringWithAggregatesFilter<"FormTemplate"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"FormTemplate"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FormTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FormTemplate"> | Date | string;
};
export type FormTemplateCreateInput = {
    id?: string;
    title: string;
    controlNumber: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutFormTemplatesInput;
    document?: Prisma.DocumentCreateNestedOneWithoutFormTemplatesInput;
    fields?: Prisma.FormFieldCreateNestedManyWithoutTemplateInput;
    qualityRecords?: Prisma.QualityRecordCreateNestedManyWithoutTemplateInput;
};
export type FormTemplateUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    documentId?: string | null;
    title: string;
    controlNumber: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fields?: Prisma.FormFieldUncheckedCreateNestedManyWithoutTemplateInput;
    qualityRecords?: Prisma.QualityRecordUncheckedCreateNestedManyWithoutTemplateInput;
};
export type FormTemplateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutFormTemplatesNestedInput;
    document?: Prisma.DocumentUpdateOneWithoutFormTemplatesNestedInput;
    fields?: Prisma.FormFieldUpdateManyWithoutTemplateNestedInput;
    qualityRecords?: Prisma.QualityRecordUpdateManyWithoutTemplateNestedInput;
};
export type FormTemplateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fields?: Prisma.FormFieldUncheckedUpdateManyWithoutTemplateNestedInput;
    qualityRecords?: Prisma.QualityRecordUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type FormTemplateCreateManyInput = {
    id?: string;
    tenantId: string;
    documentId?: string | null;
    title: string;
    controlNumber: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FormTemplateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FormTemplateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FormTemplateListRelationFilter = {
    every?: Prisma.FormTemplateWhereInput;
    some?: Prisma.FormTemplateWhereInput;
    none?: Prisma.FormTemplateWhereInput;
};
export type FormTemplateOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FormTemplateTenantIdControlNumberCompoundUniqueInput = {
    tenantId: string;
    controlNumber: string;
};
export type FormTemplateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    controlNumber?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FormTemplateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    controlNumber?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FormTemplateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    controlNumber?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FormTemplateScalarRelationFilter = {
    is?: Prisma.FormTemplateWhereInput;
    isNot?: Prisma.FormTemplateWhereInput;
};
export type FormTemplateCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.FormTemplateCreateWithoutTenantInput, Prisma.FormTemplateUncheckedCreateWithoutTenantInput> | Prisma.FormTemplateCreateWithoutTenantInput[] | Prisma.FormTemplateUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.FormTemplateCreateOrConnectWithoutTenantInput | Prisma.FormTemplateCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.FormTemplateCreateManyTenantInputEnvelope;
    connect?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
};
export type FormTemplateUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.FormTemplateCreateWithoutTenantInput, Prisma.FormTemplateUncheckedCreateWithoutTenantInput> | Prisma.FormTemplateCreateWithoutTenantInput[] | Prisma.FormTemplateUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.FormTemplateCreateOrConnectWithoutTenantInput | Prisma.FormTemplateCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.FormTemplateCreateManyTenantInputEnvelope;
    connect?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
};
export type FormTemplateUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.FormTemplateCreateWithoutTenantInput, Prisma.FormTemplateUncheckedCreateWithoutTenantInput> | Prisma.FormTemplateCreateWithoutTenantInput[] | Prisma.FormTemplateUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.FormTemplateCreateOrConnectWithoutTenantInput | Prisma.FormTemplateCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.FormTemplateUpsertWithWhereUniqueWithoutTenantInput | Prisma.FormTemplateUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.FormTemplateCreateManyTenantInputEnvelope;
    set?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
    disconnect?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
    delete?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
    connect?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
    update?: Prisma.FormTemplateUpdateWithWhereUniqueWithoutTenantInput | Prisma.FormTemplateUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.FormTemplateUpdateManyWithWhereWithoutTenantInput | Prisma.FormTemplateUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.FormTemplateScalarWhereInput | Prisma.FormTemplateScalarWhereInput[];
};
export type FormTemplateUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.FormTemplateCreateWithoutTenantInput, Prisma.FormTemplateUncheckedCreateWithoutTenantInput> | Prisma.FormTemplateCreateWithoutTenantInput[] | Prisma.FormTemplateUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.FormTemplateCreateOrConnectWithoutTenantInput | Prisma.FormTemplateCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.FormTemplateUpsertWithWhereUniqueWithoutTenantInput | Prisma.FormTemplateUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.FormTemplateCreateManyTenantInputEnvelope;
    set?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
    disconnect?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
    delete?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
    connect?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
    update?: Prisma.FormTemplateUpdateWithWhereUniqueWithoutTenantInput | Prisma.FormTemplateUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.FormTemplateUpdateManyWithWhereWithoutTenantInput | Prisma.FormTemplateUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.FormTemplateScalarWhereInput | Prisma.FormTemplateScalarWhereInput[];
};
export type FormTemplateCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.FormTemplateCreateWithoutDocumentInput, Prisma.FormTemplateUncheckedCreateWithoutDocumentInput> | Prisma.FormTemplateCreateWithoutDocumentInput[] | Prisma.FormTemplateUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.FormTemplateCreateOrConnectWithoutDocumentInput | Prisma.FormTemplateCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.FormTemplateCreateManyDocumentInputEnvelope;
    connect?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
};
export type FormTemplateUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.FormTemplateCreateWithoutDocumentInput, Prisma.FormTemplateUncheckedCreateWithoutDocumentInput> | Prisma.FormTemplateCreateWithoutDocumentInput[] | Prisma.FormTemplateUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.FormTemplateCreateOrConnectWithoutDocumentInput | Prisma.FormTemplateCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.FormTemplateCreateManyDocumentInputEnvelope;
    connect?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
};
export type FormTemplateUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.FormTemplateCreateWithoutDocumentInput, Prisma.FormTemplateUncheckedCreateWithoutDocumentInput> | Prisma.FormTemplateCreateWithoutDocumentInput[] | Prisma.FormTemplateUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.FormTemplateCreateOrConnectWithoutDocumentInput | Prisma.FormTemplateCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.FormTemplateUpsertWithWhereUniqueWithoutDocumentInput | Prisma.FormTemplateUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.FormTemplateCreateManyDocumentInputEnvelope;
    set?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
    disconnect?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
    delete?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
    connect?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
    update?: Prisma.FormTemplateUpdateWithWhereUniqueWithoutDocumentInput | Prisma.FormTemplateUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.FormTemplateUpdateManyWithWhereWithoutDocumentInput | Prisma.FormTemplateUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.FormTemplateScalarWhereInput | Prisma.FormTemplateScalarWhereInput[];
};
export type FormTemplateUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.FormTemplateCreateWithoutDocumentInput, Prisma.FormTemplateUncheckedCreateWithoutDocumentInput> | Prisma.FormTemplateCreateWithoutDocumentInput[] | Prisma.FormTemplateUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.FormTemplateCreateOrConnectWithoutDocumentInput | Prisma.FormTemplateCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.FormTemplateUpsertWithWhereUniqueWithoutDocumentInput | Prisma.FormTemplateUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.FormTemplateCreateManyDocumentInputEnvelope;
    set?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
    disconnect?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
    delete?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
    connect?: Prisma.FormTemplateWhereUniqueInput | Prisma.FormTemplateWhereUniqueInput[];
    update?: Prisma.FormTemplateUpdateWithWhereUniqueWithoutDocumentInput | Prisma.FormTemplateUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.FormTemplateUpdateManyWithWhereWithoutDocumentInput | Prisma.FormTemplateUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.FormTemplateScalarWhereInput | Prisma.FormTemplateScalarWhereInput[];
};
export type FormTemplateCreateNestedOneWithoutFieldsInput = {
    create?: Prisma.XOR<Prisma.FormTemplateCreateWithoutFieldsInput, Prisma.FormTemplateUncheckedCreateWithoutFieldsInput>;
    connectOrCreate?: Prisma.FormTemplateCreateOrConnectWithoutFieldsInput;
    connect?: Prisma.FormTemplateWhereUniqueInput;
};
export type FormTemplateUpdateOneRequiredWithoutFieldsNestedInput = {
    create?: Prisma.XOR<Prisma.FormTemplateCreateWithoutFieldsInput, Prisma.FormTemplateUncheckedCreateWithoutFieldsInput>;
    connectOrCreate?: Prisma.FormTemplateCreateOrConnectWithoutFieldsInput;
    upsert?: Prisma.FormTemplateUpsertWithoutFieldsInput;
    connect?: Prisma.FormTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FormTemplateUpdateToOneWithWhereWithoutFieldsInput, Prisma.FormTemplateUpdateWithoutFieldsInput>, Prisma.FormTemplateUncheckedUpdateWithoutFieldsInput>;
};
export type FormTemplateCreateNestedOneWithoutQualityRecordsInput = {
    create?: Prisma.XOR<Prisma.FormTemplateCreateWithoutQualityRecordsInput, Prisma.FormTemplateUncheckedCreateWithoutQualityRecordsInput>;
    connectOrCreate?: Prisma.FormTemplateCreateOrConnectWithoutQualityRecordsInput;
    connect?: Prisma.FormTemplateWhereUniqueInput;
};
export type FormTemplateUpdateOneRequiredWithoutQualityRecordsNestedInput = {
    create?: Prisma.XOR<Prisma.FormTemplateCreateWithoutQualityRecordsInput, Prisma.FormTemplateUncheckedCreateWithoutQualityRecordsInput>;
    connectOrCreate?: Prisma.FormTemplateCreateOrConnectWithoutQualityRecordsInput;
    upsert?: Prisma.FormTemplateUpsertWithoutQualityRecordsInput;
    connect?: Prisma.FormTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FormTemplateUpdateToOneWithWhereWithoutQualityRecordsInput, Prisma.FormTemplateUpdateWithoutQualityRecordsInput>, Prisma.FormTemplateUncheckedUpdateWithoutQualityRecordsInput>;
};
export type FormTemplateCreateWithoutTenantInput = {
    id?: string;
    title: string;
    controlNumber: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    document?: Prisma.DocumentCreateNestedOneWithoutFormTemplatesInput;
    fields?: Prisma.FormFieldCreateNestedManyWithoutTemplateInput;
    qualityRecords?: Prisma.QualityRecordCreateNestedManyWithoutTemplateInput;
};
export type FormTemplateUncheckedCreateWithoutTenantInput = {
    id?: string;
    documentId?: string | null;
    title: string;
    controlNumber: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fields?: Prisma.FormFieldUncheckedCreateNestedManyWithoutTemplateInput;
    qualityRecords?: Prisma.QualityRecordUncheckedCreateNestedManyWithoutTemplateInput;
};
export type FormTemplateCreateOrConnectWithoutTenantInput = {
    where: Prisma.FormTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.FormTemplateCreateWithoutTenantInput, Prisma.FormTemplateUncheckedCreateWithoutTenantInput>;
};
export type FormTemplateCreateManyTenantInputEnvelope = {
    data: Prisma.FormTemplateCreateManyTenantInput | Prisma.FormTemplateCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type FormTemplateUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.FormTemplateWhereUniqueInput;
    update: Prisma.XOR<Prisma.FormTemplateUpdateWithoutTenantInput, Prisma.FormTemplateUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.FormTemplateCreateWithoutTenantInput, Prisma.FormTemplateUncheckedCreateWithoutTenantInput>;
};
export type FormTemplateUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.FormTemplateWhereUniqueInput;
    data: Prisma.XOR<Prisma.FormTemplateUpdateWithoutTenantInput, Prisma.FormTemplateUncheckedUpdateWithoutTenantInput>;
};
export type FormTemplateUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.FormTemplateScalarWhereInput;
    data: Prisma.XOR<Prisma.FormTemplateUpdateManyMutationInput, Prisma.FormTemplateUncheckedUpdateManyWithoutTenantInput>;
};
export type FormTemplateScalarWhereInput = {
    AND?: Prisma.FormTemplateScalarWhereInput | Prisma.FormTemplateScalarWhereInput[];
    OR?: Prisma.FormTemplateScalarWhereInput[];
    NOT?: Prisma.FormTemplateScalarWhereInput | Prisma.FormTemplateScalarWhereInput[];
    id?: Prisma.StringFilter<"FormTemplate"> | string;
    tenantId?: Prisma.StringFilter<"FormTemplate"> | string;
    documentId?: Prisma.StringNullableFilter<"FormTemplate"> | string | null;
    title?: Prisma.StringFilter<"FormTemplate"> | string;
    controlNumber?: Prisma.StringFilter<"FormTemplate"> | string;
    description?: Prisma.StringNullableFilter<"FormTemplate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"FormTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FormTemplate"> | Date | string;
};
export type FormTemplateCreateWithoutDocumentInput = {
    id?: string;
    title: string;
    controlNumber: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutFormTemplatesInput;
    fields?: Prisma.FormFieldCreateNestedManyWithoutTemplateInput;
    qualityRecords?: Prisma.QualityRecordCreateNestedManyWithoutTemplateInput;
};
export type FormTemplateUncheckedCreateWithoutDocumentInput = {
    id?: string;
    tenantId: string;
    title: string;
    controlNumber: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fields?: Prisma.FormFieldUncheckedCreateNestedManyWithoutTemplateInput;
    qualityRecords?: Prisma.QualityRecordUncheckedCreateNestedManyWithoutTemplateInput;
};
export type FormTemplateCreateOrConnectWithoutDocumentInput = {
    where: Prisma.FormTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.FormTemplateCreateWithoutDocumentInput, Prisma.FormTemplateUncheckedCreateWithoutDocumentInput>;
};
export type FormTemplateCreateManyDocumentInputEnvelope = {
    data: Prisma.FormTemplateCreateManyDocumentInput | Prisma.FormTemplateCreateManyDocumentInput[];
    skipDuplicates?: boolean;
};
export type FormTemplateUpsertWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.FormTemplateWhereUniqueInput;
    update: Prisma.XOR<Prisma.FormTemplateUpdateWithoutDocumentInput, Prisma.FormTemplateUncheckedUpdateWithoutDocumentInput>;
    create: Prisma.XOR<Prisma.FormTemplateCreateWithoutDocumentInput, Prisma.FormTemplateUncheckedCreateWithoutDocumentInput>;
};
export type FormTemplateUpdateWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.FormTemplateWhereUniqueInput;
    data: Prisma.XOR<Prisma.FormTemplateUpdateWithoutDocumentInput, Prisma.FormTemplateUncheckedUpdateWithoutDocumentInput>;
};
export type FormTemplateUpdateManyWithWhereWithoutDocumentInput = {
    where: Prisma.FormTemplateScalarWhereInput;
    data: Prisma.XOR<Prisma.FormTemplateUpdateManyMutationInput, Prisma.FormTemplateUncheckedUpdateManyWithoutDocumentInput>;
};
export type FormTemplateCreateWithoutFieldsInput = {
    id?: string;
    title: string;
    controlNumber: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutFormTemplatesInput;
    document?: Prisma.DocumentCreateNestedOneWithoutFormTemplatesInput;
    qualityRecords?: Prisma.QualityRecordCreateNestedManyWithoutTemplateInput;
};
export type FormTemplateUncheckedCreateWithoutFieldsInput = {
    id?: string;
    tenantId: string;
    documentId?: string | null;
    title: string;
    controlNumber: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    qualityRecords?: Prisma.QualityRecordUncheckedCreateNestedManyWithoutTemplateInput;
};
export type FormTemplateCreateOrConnectWithoutFieldsInput = {
    where: Prisma.FormTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.FormTemplateCreateWithoutFieldsInput, Prisma.FormTemplateUncheckedCreateWithoutFieldsInput>;
};
export type FormTemplateUpsertWithoutFieldsInput = {
    update: Prisma.XOR<Prisma.FormTemplateUpdateWithoutFieldsInput, Prisma.FormTemplateUncheckedUpdateWithoutFieldsInput>;
    create: Prisma.XOR<Prisma.FormTemplateCreateWithoutFieldsInput, Prisma.FormTemplateUncheckedCreateWithoutFieldsInput>;
    where?: Prisma.FormTemplateWhereInput;
};
export type FormTemplateUpdateToOneWithWhereWithoutFieldsInput = {
    where?: Prisma.FormTemplateWhereInput;
    data: Prisma.XOR<Prisma.FormTemplateUpdateWithoutFieldsInput, Prisma.FormTemplateUncheckedUpdateWithoutFieldsInput>;
};
export type FormTemplateUpdateWithoutFieldsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutFormTemplatesNestedInput;
    document?: Prisma.DocumentUpdateOneWithoutFormTemplatesNestedInput;
    qualityRecords?: Prisma.QualityRecordUpdateManyWithoutTemplateNestedInput;
};
export type FormTemplateUncheckedUpdateWithoutFieldsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    qualityRecords?: Prisma.QualityRecordUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type FormTemplateCreateWithoutQualityRecordsInput = {
    id?: string;
    title: string;
    controlNumber: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutFormTemplatesInput;
    document?: Prisma.DocumentCreateNestedOneWithoutFormTemplatesInput;
    fields?: Prisma.FormFieldCreateNestedManyWithoutTemplateInput;
};
export type FormTemplateUncheckedCreateWithoutQualityRecordsInput = {
    id?: string;
    tenantId: string;
    documentId?: string | null;
    title: string;
    controlNumber: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fields?: Prisma.FormFieldUncheckedCreateNestedManyWithoutTemplateInput;
};
export type FormTemplateCreateOrConnectWithoutQualityRecordsInput = {
    where: Prisma.FormTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.FormTemplateCreateWithoutQualityRecordsInput, Prisma.FormTemplateUncheckedCreateWithoutQualityRecordsInput>;
};
export type FormTemplateUpsertWithoutQualityRecordsInput = {
    update: Prisma.XOR<Prisma.FormTemplateUpdateWithoutQualityRecordsInput, Prisma.FormTemplateUncheckedUpdateWithoutQualityRecordsInput>;
    create: Prisma.XOR<Prisma.FormTemplateCreateWithoutQualityRecordsInput, Prisma.FormTemplateUncheckedCreateWithoutQualityRecordsInput>;
    where?: Prisma.FormTemplateWhereInput;
};
export type FormTemplateUpdateToOneWithWhereWithoutQualityRecordsInput = {
    where?: Prisma.FormTemplateWhereInput;
    data: Prisma.XOR<Prisma.FormTemplateUpdateWithoutQualityRecordsInput, Prisma.FormTemplateUncheckedUpdateWithoutQualityRecordsInput>;
};
export type FormTemplateUpdateWithoutQualityRecordsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutFormTemplatesNestedInput;
    document?: Prisma.DocumentUpdateOneWithoutFormTemplatesNestedInput;
    fields?: Prisma.FormFieldUpdateManyWithoutTemplateNestedInput;
};
export type FormTemplateUncheckedUpdateWithoutQualityRecordsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fields?: Prisma.FormFieldUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type FormTemplateCreateManyTenantInput = {
    id?: string;
    documentId?: string | null;
    title: string;
    controlNumber: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FormTemplateUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.DocumentUpdateOneWithoutFormTemplatesNestedInput;
    fields?: Prisma.FormFieldUpdateManyWithoutTemplateNestedInput;
    qualityRecords?: Prisma.QualityRecordUpdateManyWithoutTemplateNestedInput;
};
export type FormTemplateUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fields?: Prisma.FormFieldUncheckedUpdateManyWithoutTemplateNestedInput;
    qualityRecords?: Prisma.QualityRecordUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type FormTemplateUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FormTemplateCreateManyDocumentInput = {
    id?: string;
    tenantId: string;
    title: string;
    controlNumber: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FormTemplateUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutFormTemplatesNestedInput;
    fields?: Prisma.FormFieldUpdateManyWithoutTemplateNestedInput;
    qualityRecords?: Prisma.QualityRecordUpdateManyWithoutTemplateNestedInput;
};
export type FormTemplateUncheckedUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fields?: Prisma.FormFieldUncheckedUpdateManyWithoutTemplateNestedInput;
    qualityRecords?: Prisma.QualityRecordUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type FormTemplateUncheckedUpdateManyWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FormTemplateCountOutputType = {
    fields: number;
    qualityRecords: number;
};
export type FormTemplateCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fields?: boolean | FormTemplateCountOutputTypeCountFieldsArgs;
    qualityRecords?: boolean | FormTemplateCountOutputTypeCountQualityRecordsArgs;
};
export type FormTemplateCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormTemplateCountOutputTypeSelect<ExtArgs> | null;
};
export type FormTemplateCountOutputTypeCountFieldsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormFieldWhereInput;
};
export type FormTemplateCountOutputTypeCountQualityRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QualityRecordWhereInput;
};
export type FormTemplateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    documentId?: boolean;
    title?: boolean;
    controlNumber?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.FormTemplate$documentArgs<ExtArgs>;
    fields?: boolean | Prisma.FormTemplate$fieldsArgs<ExtArgs>;
    qualityRecords?: boolean | Prisma.FormTemplate$qualityRecordsArgs<ExtArgs>;
    _count?: boolean | Prisma.FormTemplateCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["formTemplate"]>;
export type FormTemplateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    documentId?: boolean;
    title?: boolean;
    controlNumber?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.FormTemplate$documentArgs<ExtArgs>;
}, ExtArgs["result"]["formTemplate"]>;
export type FormTemplateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    documentId?: boolean;
    title?: boolean;
    controlNumber?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.FormTemplate$documentArgs<ExtArgs>;
}, ExtArgs["result"]["formTemplate"]>;
export type FormTemplateSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    documentId?: boolean;
    title?: boolean;
    controlNumber?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FormTemplateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "documentId" | "title" | "controlNumber" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["formTemplate"]>;
export type FormTemplateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.FormTemplate$documentArgs<ExtArgs>;
    fields?: boolean | Prisma.FormTemplate$fieldsArgs<ExtArgs>;
    qualityRecords?: boolean | Prisma.FormTemplate$qualityRecordsArgs<ExtArgs>;
    _count?: boolean | Prisma.FormTemplateCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FormTemplateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.FormTemplate$documentArgs<ExtArgs>;
};
export type FormTemplateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.FormTemplate$documentArgs<ExtArgs>;
};
export type $FormTemplatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FormTemplate";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
        document: Prisma.$DocumentPayload<ExtArgs> | null;
        fields: Prisma.$FormFieldPayload<ExtArgs>[];
        qualityRecords: Prisma.$QualityRecordPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        documentId: string | null;
        title: string;
        controlNumber: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["formTemplate"]>;
    composites: {};
};
export type FormTemplateGetPayload<S extends boolean | null | undefined | FormTemplateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FormTemplatePayload, S>;
export type FormTemplateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FormTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FormTemplateCountAggregateInputType | true;
};
export interface FormTemplateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FormTemplate'];
        meta: {
            name: 'FormTemplate';
        };
    };
    findUnique<T extends FormTemplateFindUniqueArgs>(args: Prisma.SelectSubset<T, FormTemplateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FormTemplateClient<runtime.Types.Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FormTemplateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FormTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FormTemplateClient<runtime.Types.Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FormTemplateFindFirstArgs>(args?: Prisma.SelectSubset<T, FormTemplateFindFirstArgs<ExtArgs>>): Prisma.Prisma__FormTemplateClient<runtime.Types.Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FormTemplateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FormTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FormTemplateClient<runtime.Types.Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FormTemplateFindManyArgs>(args?: Prisma.SelectSubset<T, FormTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FormTemplateCreateArgs>(args: Prisma.SelectSubset<T, FormTemplateCreateArgs<ExtArgs>>): Prisma.Prisma__FormTemplateClient<runtime.Types.Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FormTemplateCreateManyArgs>(args?: Prisma.SelectSubset<T, FormTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FormTemplateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FormTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FormTemplateDeleteArgs>(args: Prisma.SelectSubset<T, FormTemplateDeleteArgs<ExtArgs>>): Prisma.Prisma__FormTemplateClient<runtime.Types.Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FormTemplateUpdateArgs>(args: Prisma.SelectSubset<T, FormTemplateUpdateArgs<ExtArgs>>): Prisma.Prisma__FormTemplateClient<runtime.Types.Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FormTemplateDeleteManyArgs>(args?: Prisma.SelectSubset<T, FormTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FormTemplateUpdateManyArgs>(args: Prisma.SelectSubset<T, FormTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FormTemplateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FormTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FormTemplateUpsertArgs>(args: Prisma.SelectSubset<T, FormTemplateUpsertArgs<ExtArgs>>): Prisma.Prisma__FormTemplateClient<runtime.Types.Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FormTemplateCountArgs>(args?: Prisma.Subset<T, FormTemplateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FormTemplateCountAggregateOutputType> : number>;
    aggregate<T extends FormTemplateAggregateArgs>(args: Prisma.Subset<T, FormTemplateAggregateArgs>): Prisma.PrismaPromise<GetFormTemplateAggregateType<T>>;
    groupBy<T extends FormTemplateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FormTemplateGroupByArgs['orderBy'];
    } : {
        orderBy?: FormTemplateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FormTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FormTemplateFieldRefs;
}
export interface Prisma__FormTemplateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    document<T extends Prisma.FormTemplate$documentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FormTemplate$documentArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    fields<T extends Prisma.FormTemplate$fieldsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FormTemplate$fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    qualityRecords<T extends Prisma.FormTemplate$qualityRecordsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FormTemplate$qualityRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QualityRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FormTemplateFieldRefs {
    readonly id: Prisma.FieldRef<"FormTemplate", 'String'>;
    readonly tenantId: Prisma.FieldRef<"FormTemplate", 'String'>;
    readonly documentId: Prisma.FieldRef<"FormTemplate", 'String'>;
    readonly title: Prisma.FieldRef<"FormTemplate", 'String'>;
    readonly controlNumber: Prisma.FieldRef<"FormTemplate", 'String'>;
    readonly description: Prisma.FieldRef<"FormTemplate", 'String'>;
    readonly createdAt: Prisma.FieldRef<"FormTemplate", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FormTemplate", 'DateTime'>;
}
export type FormTemplateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormTemplateSelect<ExtArgs> | null;
    omit?: Prisma.FormTemplateOmit<ExtArgs> | null;
    include?: Prisma.FormTemplateInclude<ExtArgs> | null;
    where: Prisma.FormTemplateWhereUniqueInput;
};
export type FormTemplateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormTemplateSelect<ExtArgs> | null;
    omit?: Prisma.FormTemplateOmit<ExtArgs> | null;
    include?: Prisma.FormTemplateInclude<ExtArgs> | null;
    where: Prisma.FormTemplateWhereUniqueInput;
};
export type FormTemplateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormTemplateSelect<ExtArgs> | null;
    omit?: Prisma.FormTemplateOmit<ExtArgs> | null;
    include?: Prisma.FormTemplateInclude<ExtArgs> | null;
    where?: Prisma.FormTemplateWhereInput;
    orderBy?: Prisma.FormTemplateOrderByWithRelationInput | Prisma.FormTemplateOrderByWithRelationInput[];
    cursor?: Prisma.FormTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FormTemplateScalarFieldEnum | Prisma.FormTemplateScalarFieldEnum[];
};
export type FormTemplateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormTemplateSelect<ExtArgs> | null;
    omit?: Prisma.FormTemplateOmit<ExtArgs> | null;
    include?: Prisma.FormTemplateInclude<ExtArgs> | null;
    where?: Prisma.FormTemplateWhereInput;
    orderBy?: Prisma.FormTemplateOrderByWithRelationInput | Prisma.FormTemplateOrderByWithRelationInput[];
    cursor?: Prisma.FormTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FormTemplateScalarFieldEnum | Prisma.FormTemplateScalarFieldEnum[];
};
export type FormTemplateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormTemplateSelect<ExtArgs> | null;
    omit?: Prisma.FormTemplateOmit<ExtArgs> | null;
    include?: Prisma.FormTemplateInclude<ExtArgs> | null;
    where?: Prisma.FormTemplateWhereInput;
    orderBy?: Prisma.FormTemplateOrderByWithRelationInput | Prisma.FormTemplateOrderByWithRelationInput[];
    cursor?: Prisma.FormTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FormTemplateScalarFieldEnum | Prisma.FormTemplateScalarFieldEnum[];
};
export type FormTemplateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormTemplateSelect<ExtArgs> | null;
    omit?: Prisma.FormTemplateOmit<ExtArgs> | null;
    include?: Prisma.FormTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FormTemplateCreateInput, Prisma.FormTemplateUncheckedCreateInput>;
};
export type FormTemplateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FormTemplateCreateManyInput | Prisma.FormTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FormTemplateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormTemplateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FormTemplateOmit<ExtArgs> | null;
    data: Prisma.FormTemplateCreateManyInput | Prisma.FormTemplateCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FormTemplateIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FormTemplateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormTemplateSelect<ExtArgs> | null;
    omit?: Prisma.FormTemplateOmit<ExtArgs> | null;
    include?: Prisma.FormTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FormTemplateUpdateInput, Prisma.FormTemplateUncheckedUpdateInput>;
    where: Prisma.FormTemplateWhereUniqueInput;
};
export type FormTemplateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FormTemplateUpdateManyMutationInput, Prisma.FormTemplateUncheckedUpdateManyInput>;
    where?: Prisma.FormTemplateWhereInput;
    limit?: number;
};
export type FormTemplateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormTemplateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FormTemplateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FormTemplateUpdateManyMutationInput, Prisma.FormTemplateUncheckedUpdateManyInput>;
    where?: Prisma.FormTemplateWhereInput;
    limit?: number;
    include?: Prisma.FormTemplateIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FormTemplateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormTemplateSelect<ExtArgs> | null;
    omit?: Prisma.FormTemplateOmit<ExtArgs> | null;
    include?: Prisma.FormTemplateInclude<ExtArgs> | null;
    where: Prisma.FormTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.FormTemplateCreateInput, Prisma.FormTemplateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FormTemplateUpdateInput, Prisma.FormTemplateUncheckedUpdateInput>;
};
export type FormTemplateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormTemplateSelect<ExtArgs> | null;
    omit?: Prisma.FormTemplateOmit<ExtArgs> | null;
    include?: Prisma.FormTemplateInclude<ExtArgs> | null;
    where: Prisma.FormTemplateWhereUniqueInput;
};
export type FormTemplateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormTemplateWhereInput;
    limit?: number;
};
export type FormTemplate$documentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
};
export type FormTemplate$fieldsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormFieldSelect<ExtArgs> | null;
    omit?: Prisma.FormFieldOmit<ExtArgs> | null;
    include?: Prisma.FormFieldInclude<ExtArgs> | null;
    where?: Prisma.FormFieldWhereInput;
    orderBy?: Prisma.FormFieldOrderByWithRelationInput | Prisma.FormFieldOrderByWithRelationInput[];
    cursor?: Prisma.FormFieldWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FormFieldScalarFieldEnum | Prisma.FormFieldScalarFieldEnum[];
};
export type FormTemplate$qualityRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FormTemplateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormTemplateSelect<ExtArgs> | null;
    omit?: Prisma.FormTemplateOmit<ExtArgs> | null;
    include?: Prisma.FormTemplateInclude<ExtArgs> | null;
};
