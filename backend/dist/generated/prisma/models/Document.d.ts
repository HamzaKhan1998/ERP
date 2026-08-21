import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DocumentModel = runtime.Types.Result.DefaultSelection<Prisma.$DocumentPayload>;
export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null;
    _min: DocumentMinAggregateOutputType | null;
    _max: DocumentMaxAggregateOutputType | null;
};
export type DocumentMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    title: string | null;
    controlNumber: string | null;
    level: $Enums.DocumentLevel | null;
    status: $Enums.DocumentStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DocumentMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    title: string | null;
    controlNumber: string | null;
    level: $Enums.DocumentLevel | null;
    status: $Enums.DocumentStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DocumentCountAggregateOutputType = {
    id: number;
    tenantId: number;
    title: number;
    controlNumber: number;
    level: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DocumentMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    title?: true;
    controlNumber?: true;
    level?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DocumentMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    title?: true;
    controlNumber?: true;
    level?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DocumentCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    title?: true;
    controlNumber?: true;
    level?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DocumentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DocumentCountAggregateInputType;
    _min?: DocumentMinAggregateInputType;
    _max?: DocumentMaxAggregateInputType;
};
export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDocument[P]> : Prisma.GetScalarType<T[P], AggregateDocument[P]>;
};
export type DocumentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithAggregationInput | Prisma.DocumentOrderByWithAggregationInput[];
    by: Prisma.DocumentScalarFieldEnum[] | Prisma.DocumentScalarFieldEnum;
    having?: Prisma.DocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentCountAggregateInputType | true;
    _min?: DocumentMinAggregateInputType;
    _max?: DocumentMaxAggregateInputType;
};
export type DocumentGroupByOutputType = {
    id: string;
    tenantId: string;
    title: string;
    controlNumber: string;
    level: $Enums.DocumentLevel;
    status: $Enums.DocumentStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: DocumentCountAggregateOutputType | null;
    _min: DocumentMinAggregateOutputType | null;
    _max: DocumentMaxAggregateOutputType | null;
};
export type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DocumentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DocumentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DocumentGroupByOutputType[P]>;
}>>;
export type DocumentWhereInput = {
    AND?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    OR?: Prisma.DocumentWhereInput[];
    NOT?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    id?: Prisma.StringFilter<"Document"> | string;
    tenantId?: Prisma.StringFilter<"Document"> | string;
    title?: Prisma.StringFilter<"Document"> | string;
    controlNumber?: Prisma.StringFilter<"Document"> | string;
    level?: Prisma.EnumDocumentLevelFilter<"Document"> | $Enums.DocumentLevel;
    status?: Prisma.EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus;
    createdAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    versions?: Prisma.DocumentVersionListRelationFilter;
    relatedFrom?: Prisma.DocumentRelationListRelationFilter;
    relatedTo?: Prisma.DocumentRelationListRelationFilter;
};
export type DocumentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    controlNumber?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    versions?: Prisma.DocumentVersionOrderByRelationAggregateInput;
    relatedFrom?: Prisma.DocumentRelationOrderByRelationAggregateInput;
    relatedTo?: Prisma.DocumentRelationOrderByRelationAggregateInput;
};
export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tenantId_controlNumber?: Prisma.DocumentTenantIdControlNumberCompoundUniqueInput;
    AND?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    OR?: Prisma.DocumentWhereInput[];
    NOT?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    tenantId?: Prisma.StringFilter<"Document"> | string;
    title?: Prisma.StringFilter<"Document"> | string;
    controlNumber?: Prisma.StringFilter<"Document"> | string;
    level?: Prisma.EnumDocumentLevelFilter<"Document"> | $Enums.DocumentLevel;
    status?: Prisma.EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus;
    createdAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    versions?: Prisma.DocumentVersionListRelationFilter;
    relatedFrom?: Prisma.DocumentRelationListRelationFilter;
    relatedTo?: Prisma.DocumentRelationListRelationFilter;
}, "id" | "tenantId_controlNumber">;
export type DocumentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    controlNumber?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DocumentCountOrderByAggregateInput;
    _max?: Prisma.DocumentMaxOrderByAggregateInput;
    _min?: Prisma.DocumentMinOrderByAggregateInput;
};
export type DocumentScalarWhereWithAggregatesInput = {
    AND?: Prisma.DocumentScalarWhereWithAggregatesInput | Prisma.DocumentScalarWhereWithAggregatesInput[];
    OR?: Prisma.DocumentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DocumentScalarWhereWithAggregatesInput | Prisma.DocumentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    tenantId?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    controlNumber?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    level?: Prisma.EnumDocumentLevelWithAggregatesFilter<"Document"> | $Enums.DocumentLevel;
    status?: Prisma.EnumDocumentStatusWithAggregatesFilter<"Document"> | $Enums.DocumentStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Document"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Document"> | Date | string;
};
export type DocumentCreateInput = {
    id?: string;
    title: string;
    controlNumber: string;
    level: $Enums.DocumentLevel;
    status?: $Enums.DocumentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutDocumentsInput;
    versions?: Prisma.DocumentVersionCreateNestedManyWithoutDocumentInput;
    relatedFrom?: Prisma.DocumentRelationCreateNestedManyWithoutFromDocumentInput;
    relatedTo?: Prisma.DocumentRelationCreateNestedManyWithoutToDocumentInput;
};
export type DocumentUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    title: string;
    controlNumber: string;
    level: $Enums.DocumentLevel;
    status?: $Enums.DocumentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    versions?: Prisma.DocumentVersionUncheckedCreateNestedManyWithoutDocumentInput;
    relatedFrom?: Prisma.DocumentRelationUncheckedCreateNestedManyWithoutFromDocumentInput;
    relatedTo?: Prisma.DocumentRelationUncheckedCreateNestedManyWithoutToDocumentInput;
};
export type DocumentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumDocumentLevelFieldUpdateOperationsInput | $Enums.DocumentLevel;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutDocumentsNestedInput;
    versions?: Prisma.DocumentVersionUpdateManyWithoutDocumentNestedInput;
    relatedFrom?: Prisma.DocumentRelationUpdateManyWithoutFromDocumentNestedInput;
    relatedTo?: Prisma.DocumentRelationUpdateManyWithoutToDocumentNestedInput;
};
export type DocumentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumDocumentLevelFieldUpdateOperationsInput | $Enums.DocumentLevel;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    versions?: Prisma.DocumentVersionUncheckedUpdateManyWithoutDocumentNestedInput;
    relatedFrom?: Prisma.DocumentRelationUncheckedUpdateManyWithoutFromDocumentNestedInput;
    relatedTo?: Prisma.DocumentRelationUncheckedUpdateManyWithoutToDocumentNestedInput;
};
export type DocumentCreateManyInput = {
    id?: string;
    tenantId: string;
    title: string;
    controlNumber: string;
    level: $Enums.DocumentLevel;
    status?: $Enums.DocumentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumDocumentLevelFieldUpdateOperationsInput | $Enums.DocumentLevel;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumDocumentLevelFieldUpdateOperationsInput | $Enums.DocumentLevel;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentListRelationFilter = {
    every?: Prisma.DocumentWhereInput;
    some?: Prisma.DocumentWhereInput;
    none?: Prisma.DocumentWhereInput;
};
export type DocumentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DocumentTenantIdControlNumberCompoundUniqueInput = {
    tenantId: string;
    controlNumber: string;
};
export type DocumentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    controlNumber?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DocumentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    controlNumber?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DocumentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    controlNumber?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DocumentScalarRelationFilter = {
    is?: Prisma.DocumentWhereInput;
    isNot?: Prisma.DocumentWhereInput;
};
export type DocumentCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutTenantInput, Prisma.DocumentUncheckedCreateWithoutTenantInput> | Prisma.DocumentCreateWithoutTenantInput[] | Prisma.DocumentUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutTenantInput | Prisma.DocumentCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.DocumentCreateManyTenantInputEnvelope;
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
};
export type DocumentUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutTenantInput, Prisma.DocumentUncheckedCreateWithoutTenantInput> | Prisma.DocumentCreateWithoutTenantInput[] | Prisma.DocumentUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutTenantInput | Prisma.DocumentCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.DocumentCreateManyTenantInputEnvelope;
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
};
export type DocumentUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutTenantInput, Prisma.DocumentUncheckedCreateWithoutTenantInput> | Prisma.DocumentCreateWithoutTenantInput[] | Prisma.DocumentUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutTenantInput | Prisma.DocumentCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.DocumentUpsertWithWhereUniqueWithoutTenantInput | Prisma.DocumentUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.DocumentCreateManyTenantInputEnvelope;
    set?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    disconnect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    delete?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    update?: Prisma.DocumentUpdateWithWhereUniqueWithoutTenantInput | Prisma.DocumentUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.DocumentUpdateManyWithWhereWithoutTenantInput | Prisma.DocumentUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
};
export type DocumentUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutTenantInput, Prisma.DocumentUncheckedCreateWithoutTenantInput> | Prisma.DocumentCreateWithoutTenantInput[] | Prisma.DocumentUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutTenantInput | Prisma.DocumentCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.DocumentUpsertWithWhereUniqueWithoutTenantInput | Prisma.DocumentUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.DocumentCreateManyTenantInputEnvelope;
    set?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    disconnect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    delete?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    update?: Prisma.DocumentUpdateWithWhereUniqueWithoutTenantInput | Prisma.DocumentUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.DocumentUpdateManyWithWhereWithoutTenantInput | Prisma.DocumentUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
};
export type EnumDocumentLevelFieldUpdateOperationsInput = {
    set?: $Enums.DocumentLevel;
};
export type EnumDocumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.DocumentStatus;
};
export type DocumentCreateNestedOneWithoutVersionsInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutVersionsInput, Prisma.DocumentUncheckedCreateWithoutVersionsInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutVersionsInput;
    connect?: Prisma.DocumentWhereUniqueInput;
};
export type DocumentUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutVersionsInput, Prisma.DocumentUncheckedCreateWithoutVersionsInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutVersionsInput;
    upsert?: Prisma.DocumentUpsertWithoutVersionsInput;
    connect?: Prisma.DocumentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DocumentUpdateToOneWithWhereWithoutVersionsInput, Prisma.DocumentUpdateWithoutVersionsInput>, Prisma.DocumentUncheckedUpdateWithoutVersionsInput>;
};
export type DocumentCreateNestedOneWithoutRelatedFromInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutRelatedFromInput, Prisma.DocumentUncheckedCreateWithoutRelatedFromInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutRelatedFromInput;
    connect?: Prisma.DocumentWhereUniqueInput;
};
export type DocumentCreateNestedOneWithoutRelatedToInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutRelatedToInput, Prisma.DocumentUncheckedCreateWithoutRelatedToInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutRelatedToInput;
    connect?: Prisma.DocumentWhereUniqueInput;
};
export type DocumentUpdateOneRequiredWithoutRelatedFromNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutRelatedFromInput, Prisma.DocumentUncheckedCreateWithoutRelatedFromInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutRelatedFromInput;
    upsert?: Prisma.DocumentUpsertWithoutRelatedFromInput;
    connect?: Prisma.DocumentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DocumentUpdateToOneWithWhereWithoutRelatedFromInput, Prisma.DocumentUpdateWithoutRelatedFromInput>, Prisma.DocumentUncheckedUpdateWithoutRelatedFromInput>;
};
export type DocumentUpdateOneRequiredWithoutRelatedToNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutRelatedToInput, Prisma.DocumentUncheckedCreateWithoutRelatedToInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutRelatedToInput;
    upsert?: Prisma.DocumentUpsertWithoutRelatedToInput;
    connect?: Prisma.DocumentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DocumentUpdateToOneWithWhereWithoutRelatedToInput, Prisma.DocumentUpdateWithoutRelatedToInput>, Prisma.DocumentUncheckedUpdateWithoutRelatedToInput>;
};
export type DocumentCreateWithoutTenantInput = {
    id?: string;
    title: string;
    controlNumber: string;
    level: $Enums.DocumentLevel;
    status?: $Enums.DocumentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    versions?: Prisma.DocumentVersionCreateNestedManyWithoutDocumentInput;
    relatedFrom?: Prisma.DocumentRelationCreateNestedManyWithoutFromDocumentInput;
    relatedTo?: Prisma.DocumentRelationCreateNestedManyWithoutToDocumentInput;
};
export type DocumentUncheckedCreateWithoutTenantInput = {
    id?: string;
    title: string;
    controlNumber: string;
    level: $Enums.DocumentLevel;
    status?: $Enums.DocumentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    versions?: Prisma.DocumentVersionUncheckedCreateNestedManyWithoutDocumentInput;
    relatedFrom?: Prisma.DocumentRelationUncheckedCreateNestedManyWithoutFromDocumentInput;
    relatedTo?: Prisma.DocumentRelationUncheckedCreateNestedManyWithoutToDocumentInput;
};
export type DocumentCreateOrConnectWithoutTenantInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutTenantInput, Prisma.DocumentUncheckedCreateWithoutTenantInput>;
};
export type DocumentCreateManyTenantInputEnvelope = {
    data: Prisma.DocumentCreateManyTenantInput | Prisma.DocumentCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type DocumentUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.DocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutTenantInput, Prisma.DocumentUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutTenantInput, Prisma.DocumentUncheckedCreateWithoutTenantInput>;
};
export type DocumentUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.DocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutTenantInput, Prisma.DocumentUncheckedUpdateWithoutTenantInput>;
};
export type DocumentUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.DocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyWithoutTenantInput>;
};
export type DocumentScalarWhereInput = {
    AND?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
    OR?: Prisma.DocumentScalarWhereInput[];
    NOT?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
    id?: Prisma.StringFilter<"Document"> | string;
    tenantId?: Prisma.StringFilter<"Document"> | string;
    title?: Prisma.StringFilter<"Document"> | string;
    controlNumber?: Prisma.StringFilter<"Document"> | string;
    level?: Prisma.EnumDocumentLevelFilter<"Document"> | $Enums.DocumentLevel;
    status?: Prisma.EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus;
    createdAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
};
export type DocumentCreateWithoutVersionsInput = {
    id?: string;
    title: string;
    controlNumber: string;
    level: $Enums.DocumentLevel;
    status?: $Enums.DocumentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutDocumentsInput;
    relatedFrom?: Prisma.DocumentRelationCreateNestedManyWithoutFromDocumentInput;
    relatedTo?: Prisma.DocumentRelationCreateNestedManyWithoutToDocumentInput;
};
export type DocumentUncheckedCreateWithoutVersionsInput = {
    id?: string;
    tenantId: string;
    title: string;
    controlNumber: string;
    level: $Enums.DocumentLevel;
    status?: $Enums.DocumentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    relatedFrom?: Prisma.DocumentRelationUncheckedCreateNestedManyWithoutFromDocumentInput;
    relatedTo?: Prisma.DocumentRelationUncheckedCreateNestedManyWithoutToDocumentInput;
};
export type DocumentCreateOrConnectWithoutVersionsInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutVersionsInput, Prisma.DocumentUncheckedCreateWithoutVersionsInput>;
};
export type DocumentUpsertWithoutVersionsInput = {
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutVersionsInput, Prisma.DocumentUncheckedUpdateWithoutVersionsInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutVersionsInput, Prisma.DocumentUncheckedCreateWithoutVersionsInput>;
    where?: Prisma.DocumentWhereInput;
};
export type DocumentUpdateToOneWithWhereWithoutVersionsInput = {
    where?: Prisma.DocumentWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutVersionsInput, Prisma.DocumentUncheckedUpdateWithoutVersionsInput>;
};
export type DocumentUpdateWithoutVersionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumDocumentLevelFieldUpdateOperationsInput | $Enums.DocumentLevel;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutDocumentsNestedInput;
    relatedFrom?: Prisma.DocumentRelationUpdateManyWithoutFromDocumentNestedInput;
    relatedTo?: Prisma.DocumentRelationUpdateManyWithoutToDocumentNestedInput;
};
export type DocumentUncheckedUpdateWithoutVersionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumDocumentLevelFieldUpdateOperationsInput | $Enums.DocumentLevel;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    relatedFrom?: Prisma.DocumentRelationUncheckedUpdateManyWithoutFromDocumentNestedInput;
    relatedTo?: Prisma.DocumentRelationUncheckedUpdateManyWithoutToDocumentNestedInput;
};
export type DocumentCreateWithoutRelatedFromInput = {
    id?: string;
    title: string;
    controlNumber: string;
    level: $Enums.DocumentLevel;
    status?: $Enums.DocumentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutDocumentsInput;
    versions?: Prisma.DocumentVersionCreateNestedManyWithoutDocumentInput;
    relatedTo?: Prisma.DocumentRelationCreateNestedManyWithoutToDocumentInput;
};
export type DocumentUncheckedCreateWithoutRelatedFromInput = {
    id?: string;
    tenantId: string;
    title: string;
    controlNumber: string;
    level: $Enums.DocumentLevel;
    status?: $Enums.DocumentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    versions?: Prisma.DocumentVersionUncheckedCreateNestedManyWithoutDocumentInput;
    relatedTo?: Prisma.DocumentRelationUncheckedCreateNestedManyWithoutToDocumentInput;
};
export type DocumentCreateOrConnectWithoutRelatedFromInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutRelatedFromInput, Prisma.DocumentUncheckedCreateWithoutRelatedFromInput>;
};
export type DocumentCreateWithoutRelatedToInput = {
    id?: string;
    title: string;
    controlNumber: string;
    level: $Enums.DocumentLevel;
    status?: $Enums.DocumentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutDocumentsInput;
    versions?: Prisma.DocumentVersionCreateNestedManyWithoutDocumentInput;
    relatedFrom?: Prisma.DocumentRelationCreateNestedManyWithoutFromDocumentInput;
};
export type DocumentUncheckedCreateWithoutRelatedToInput = {
    id?: string;
    tenantId: string;
    title: string;
    controlNumber: string;
    level: $Enums.DocumentLevel;
    status?: $Enums.DocumentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    versions?: Prisma.DocumentVersionUncheckedCreateNestedManyWithoutDocumentInput;
    relatedFrom?: Prisma.DocumentRelationUncheckedCreateNestedManyWithoutFromDocumentInput;
};
export type DocumentCreateOrConnectWithoutRelatedToInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutRelatedToInput, Prisma.DocumentUncheckedCreateWithoutRelatedToInput>;
};
export type DocumentUpsertWithoutRelatedFromInput = {
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutRelatedFromInput, Prisma.DocumentUncheckedUpdateWithoutRelatedFromInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutRelatedFromInput, Prisma.DocumentUncheckedCreateWithoutRelatedFromInput>;
    where?: Prisma.DocumentWhereInput;
};
export type DocumentUpdateToOneWithWhereWithoutRelatedFromInput = {
    where?: Prisma.DocumentWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutRelatedFromInput, Prisma.DocumentUncheckedUpdateWithoutRelatedFromInput>;
};
export type DocumentUpdateWithoutRelatedFromInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumDocumentLevelFieldUpdateOperationsInput | $Enums.DocumentLevel;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutDocumentsNestedInput;
    versions?: Prisma.DocumentVersionUpdateManyWithoutDocumentNestedInput;
    relatedTo?: Prisma.DocumentRelationUpdateManyWithoutToDocumentNestedInput;
};
export type DocumentUncheckedUpdateWithoutRelatedFromInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumDocumentLevelFieldUpdateOperationsInput | $Enums.DocumentLevel;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    versions?: Prisma.DocumentVersionUncheckedUpdateManyWithoutDocumentNestedInput;
    relatedTo?: Prisma.DocumentRelationUncheckedUpdateManyWithoutToDocumentNestedInput;
};
export type DocumentUpsertWithoutRelatedToInput = {
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutRelatedToInput, Prisma.DocumentUncheckedUpdateWithoutRelatedToInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutRelatedToInput, Prisma.DocumentUncheckedCreateWithoutRelatedToInput>;
    where?: Prisma.DocumentWhereInput;
};
export type DocumentUpdateToOneWithWhereWithoutRelatedToInput = {
    where?: Prisma.DocumentWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutRelatedToInput, Prisma.DocumentUncheckedUpdateWithoutRelatedToInput>;
};
export type DocumentUpdateWithoutRelatedToInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumDocumentLevelFieldUpdateOperationsInput | $Enums.DocumentLevel;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutDocumentsNestedInput;
    versions?: Prisma.DocumentVersionUpdateManyWithoutDocumentNestedInput;
    relatedFrom?: Prisma.DocumentRelationUpdateManyWithoutFromDocumentNestedInput;
};
export type DocumentUncheckedUpdateWithoutRelatedToInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumDocumentLevelFieldUpdateOperationsInput | $Enums.DocumentLevel;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    versions?: Prisma.DocumentVersionUncheckedUpdateManyWithoutDocumentNestedInput;
    relatedFrom?: Prisma.DocumentRelationUncheckedUpdateManyWithoutFromDocumentNestedInput;
};
export type DocumentCreateManyTenantInput = {
    id?: string;
    title: string;
    controlNumber: string;
    level: $Enums.DocumentLevel;
    status?: $Enums.DocumentStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumDocumentLevelFieldUpdateOperationsInput | $Enums.DocumentLevel;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    versions?: Prisma.DocumentVersionUpdateManyWithoutDocumentNestedInput;
    relatedFrom?: Prisma.DocumentRelationUpdateManyWithoutFromDocumentNestedInput;
    relatedTo?: Prisma.DocumentRelationUpdateManyWithoutToDocumentNestedInput;
};
export type DocumentUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumDocumentLevelFieldUpdateOperationsInput | $Enums.DocumentLevel;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    versions?: Prisma.DocumentVersionUncheckedUpdateManyWithoutDocumentNestedInput;
    relatedFrom?: Prisma.DocumentRelationUncheckedUpdateManyWithoutFromDocumentNestedInput;
    relatedTo?: Prisma.DocumentRelationUncheckedUpdateManyWithoutToDocumentNestedInput;
};
export type DocumentUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    controlNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.EnumDocumentLevelFieldUpdateOperationsInput | $Enums.DocumentLevel;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentCountOutputType = {
    versions: number;
    relatedFrom: number;
    relatedTo: number;
};
export type DocumentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    versions?: boolean | DocumentCountOutputTypeCountVersionsArgs;
    relatedFrom?: boolean | DocumentCountOutputTypeCountRelatedFromArgs;
    relatedTo?: boolean | DocumentCountOutputTypeCountRelatedToArgs;
};
export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentCountOutputTypeSelect<ExtArgs> | null;
};
export type DocumentCountOutputTypeCountVersionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentVersionWhereInput;
};
export type DocumentCountOutputTypeCountRelatedFromArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentRelationWhereInput;
};
export type DocumentCountOutputTypeCountRelatedToArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentRelationWhereInput;
};
export type DocumentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    title?: boolean;
    controlNumber?: boolean;
    level?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    versions?: boolean | Prisma.Document$versionsArgs<ExtArgs>;
    relatedFrom?: boolean | Prisma.Document$relatedFromArgs<ExtArgs>;
    relatedTo?: boolean | Prisma.Document$relatedToArgs<ExtArgs>;
    _count?: boolean | Prisma.DocumentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["document"]>;
export type DocumentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    title?: boolean;
    controlNumber?: boolean;
    level?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["document"]>;
export type DocumentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    title?: boolean;
    controlNumber?: boolean;
    level?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["document"]>;
export type DocumentSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    title?: boolean;
    controlNumber?: boolean;
    level?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DocumentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "title" | "controlNumber" | "level" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["document"]>;
export type DocumentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    versions?: boolean | Prisma.Document$versionsArgs<ExtArgs>;
    relatedFrom?: boolean | Prisma.Document$relatedFromArgs<ExtArgs>;
    relatedTo?: boolean | Prisma.Document$relatedToArgs<ExtArgs>;
    _count?: boolean | Prisma.DocumentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DocumentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type $DocumentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Document";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
        versions: Prisma.$DocumentVersionPayload<ExtArgs>[];
        relatedFrom: Prisma.$DocumentRelationPayload<ExtArgs>[];
        relatedTo: Prisma.$DocumentRelationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        title: string;
        controlNumber: string;
        level: $Enums.DocumentLevel;
        status: $Enums.DocumentStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["document"]>;
    composites: {};
};
export type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DocumentPayload, S>;
export type DocumentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DocumentCountAggregateInputType | true;
};
export interface DocumentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Document'];
        meta: {
            name: 'Document';
        };
    };
    findUnique<T extends DocumentFindUniqueArgs>(args: Prisma.SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DocumentFindFirstArgs>(args?: Prisma.SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DocumentFindManyArgs>(args?: Prisma.SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DocumentCreateArgs>(args: Prisma.SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DocumentCreateManyArgs>(args?: Prisma.SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DocumentDeleteArgs>(args: Prisma.SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DocumentUpdateArgs>(args: Prisma.SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DocumentDeleteManyArgs>(args?: Prisma.SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DocumentUpdateManyArgs>(args: Prisma.SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DocumentUpsertArgs>(args: Prisma.SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DocumentCountArgs>(args?: Prisma.Subset<T, DocumentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DocumentCountAggregateOutputType> : number>;
    aggregate<T extends DocumentAggregateArgs>(args: Prisma.Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>;
    groupBy<T extends DocumentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DocumentGroupByArgs['orderBy'];
    } : {
        orderBy?: DocumentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DocumentFieldRefs;
}
export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    versions<T extends Prisma.Document$versionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Document$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    relatedFrom<T extends Prisma.Document$relatedFromArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Document$relatedFromArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    relatedTo<T extends Prisma.Document$relatedToArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Document$relatedToArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DocumentFieldRefs {
    readonly id: Prisma.FieldRef<"Document", 'String'>;
    readonly tenantId: Prisma.FieldRef<"Document", 'String'>;
    readonly title: Prisma.FieldRef<"Document", 'String'>;
    readonly controlNumber: Prisma.FieldRef<"Document", 'String'>;
    readonly level: Prisma.FieldRef<"Document", 'DocumentLevel'>;
    readonly status: Prisma.FieldRef<"Document", 'DocumentStatus'>;
    readonly createdAt: Prisma.FieldRef<"Document", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Document", 'DateTime'>;
}
export type DocumentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
export type DocumentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
export type DocumentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
export type DocumentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentCreateInput, Prisma.DocumentUncheckedCreateInput>;
};
export type DocumentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DocumentCreateManyInput | Prisma.DocumentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DocumentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    data: Prisma.DocumentCreateManyInput | Prisma.DocumentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DocumentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DocumentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentUpdateInput, Prisma.DocumentUncheckedUpdateInput>;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyInput>;
    where?: Prisma.DocumentWhereInput;
    limit?: number;
};
export type DocumentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyInput>;
    where?: Prisma.DocumentWhereInput;
    limit?: number;
    include?: Prisma.DocumentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DocumentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateInput, Prisma.DocumentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DocumentUpdateInput, Prisma.DocumentUncheckedUpdateInput>;
};
export type DocumentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
    limit?: number;
};
export type Document$versionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Document$relatedFromArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentRelationSelect<ExtArgs> | null;
    omit?: Prisma.DocumentRelationOmit<ExtArgs> | null;
    include?: Prisma.DocumentRelationInclude<ExtArgs> | null;
    where?: Prisma.DocumentRelationWhereInput;
    orderBy?: Prisma.DocumentRelationOrderByWithRelationInput | Prisma.DocumentRelationOrderByWithRelationInput[];
    cursor?: Prisma.DocumentRelationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentRelationScalarFieldEnum | Prisma.DocumentRelationScalarFieldEnum[];
};
export type Document$relatedToArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentRelationSelect<ExtArgs> | null;
    omit?: Prisma.DocumentRelationOmit<ExtArgs> | null;
    include?: Prisma.DocumentRelationInclude<ExtArgs> | null;
    where?: Prisma.DocumentRelationWhereInput;
    orderBy?: Prisma.DocumentRelationOrderByWithRelationInput | Prisma.DocumentRelationOrderByWithRelationInput[];
    cursor?: Prisma.DocumentRelationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentRelationScalarFieldEnum | Prisma.DocumentRelationScalarFieldEnum[];
};
export type DocumentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
};
