import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FileAssetModel = runtime.Types.Result.DefaultSelection<Prisma.$FileAssetPayload>;
export type AggregateFileAsset = {
    _count: FileAssetCountAggregateOutputType | null;
    _avg: FileAssetAvgAggregateOutputType | null;
    _sum: FileAssetSumAggregateOutputType | null;
    _min: FileAssetMinAggregateOutputType | null;
    _max: FileAssetMaxAggregateOutputType | null;
};
export type FileAssetAvgAggregateOutputType = {
    sizeBytes: number | null;
};
export type FileAssetSumAggregateOutputType = {
    sizeBytes: number | null;
};
export type FileAssetMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    documentId: string | null;
    versionId: string | null;
    uploadedById: string | null;
    originalName: string | null;
    storageKey: string | null;
    mimeType: string | null;
    sizeBytes: number | null;
    checksum: string | null;
    createdAt: Date | null;
};
export type FileAssetMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    documentId: string | null;
    versionId: string | null;
    uploadedById: string | null;
    originalName: string | null;
    storageKey: string | null;
    mimeType: string | null;
    sizeBytes: number | null;
    checksum: string | null;
    createdAt: Date | null;
};
export type FileAssetCountAggregateOutputType = {
    id: number;
    tenantId: number;
    documentId: number;
    versionId: number;
    uploadedById: number;
    originalName: number;
    storageKey: number;
    mimeType: number;
    sizeBytes: number;
    checksum: number;
    createdAt: number;
    _all: number;
};
export type FileAssetAvgAggregateInputType = {
    sizeBytes?: true;
};
export type FileAssetSumAggregateInputType = {
    sizeBytes?: true;
};
export type FileAssetMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    documentId?: true;
    versionId?: true;
    uploadedById?: true;
    originalName?: true;
    storageKey?: true;
    mimeType?: true;
    sizeBytes?: true;
    checksum?: true;
    createdAt?: true;
};
export type FileAssetMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    documentId?: true;
    versionId?: true;
    uploadedById?: true;
    originalName?: true;
    storageKey?: true;
    mimeType?: true;
    sizeBytes?: true;
    checksum?: true;
    createdAt?: true;
};
export type FileAssetCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    documentId?: true;
    versionId?: true;
    uploadedById?: true;
    originalName?: true;
    storageKey?: true;
    mimeType?: true;
    sizeBytes?: true;
    checksum?: true;
    createdAt?: true;
    _all?: true;
};
export type FileAssetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileAssetWhereInput;
    orderBy?: Prisma.FileAssetOrderByWithRelationInput | Prisma.FileAssetOrderByWithRelationInput[];
    cursor?: Prisma.FileAssetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FileAssetCountAggregateInputType;
    _avg?: FileAssetAvgAggregateInputType;
    _sum?: FileAssetSumAggregateInputType;
    _min?: FileAssetMinAggregateInputType;
    _max?: FileAssetMaxAggregateInputType;
};
export type GetFileAssetAggregateType<T extends FileAssetAggregateArgs> = {
    [P in keyof T & keyof AggregateFileAsset]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFileAsset[P]> : Prisma.GetScalarType<T[P], AggregateFileAsset[P]>;
};
export type FileAssetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileAssetWhereInput;
    orderBy?: Prisma.FileAssetOrderByWithAggregationInput | Prisma.FileAssetOrderByWithAggregationInput[];
    by: Prisma.FileAssetScalarFieldEnum[] | Prisma.FileAssetScalarFieldEnum;
    having?: Prisma.FileAssetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FileAssetCountAggregateInputType | true;
    _avg?: FileAssetAvgAggregateInputType;
    _sum?: FileAssetSumAggregateInputType;
    _min?: FileAssetMinAggregateInputType;
    _max?: FileAssetMaxAggregateInputType;
};
export type FileAssetGroupByOutputType = {
    id: string;
    tenantId: string;
    documentId: string | null;
    versionId: string | null;
    uploadedById: string;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    checksum: string;
    createdAt: Date;
    _count: FileAssetCountAggregateOutputType | null;
    _avg: FileAssetAvgAggregateOutputType | null;
    _sum: FileAssetSumAggregateOutputType | null;
    _min: FileAssetMinAggregateOutputType | null;
    _max: FileAssetMaxAggregateOutputType | null;
};
export type GetFileAssetGroupByPayload<T extends FileAssetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FileAssetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FileAssetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FileAssetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FileAssetGroupByOutputType[P]>;
}>>;
export type FileAssetWhereInput = {
    AND?: Prisma.FileAssetWhereInput | Prisma.FileAssetWhereInput[];
    OR?: Prisma.FileAssetWhereInput[];
    NOT?: Prisma.FileAssetWhereInput | Prisma.FileAssetWhereInput[];
    id?: Prisma.StringFilter<"FileAsset"> | string;
    tenantId?: Prisma.StringFilter<"FileAsset"> | string;
    documentId?: Prisma.StringNullableFilter<"FileAsset"> | string | null;
    versionId?: Prisma.StringNullableFilter<"FileAsset"> | string | null;
    uploadedById?: Prisma.StringFilter<"FileAsset"> | string;
    originalName?: Prisma.StringFilter<"FileAsset"> | string;
    storageKey?: Prisma.StringFilter<"FileAsset"> | string;
    mimeType?: Prisma.StringFilter<"FileAsset"> | string;
    sizeBytes?: Prisma.IntFilter<"FileAsset"> | number;
    checksum?: Prisma.StringFilter<"FileAsset"> | string;
    createdAt?: Prisma.DateTimeFilter<"FileAsset"> | Date | string;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    document?: Prisma.XOR<Prisma.DocumentNullableScalarRelationFilter, Prisma.DocumentWhereInput> | null;
    version?: Prisma.XOR<Prisma.DocumentVersionNullableScalarRelationFilter, Prisma.DocumentVersionWhereInput> | null;
    uploadedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type FileAssetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    versionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    document?: Prisma.DocumentOrderByWithRelationInput;
    version?: Prisma.DocumentVersionOrderByWithRelationInput;
    uploadedBy?: Prisma.UserOrderByWithRelationInput;
};
export type FileAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    storageKey?: string;
    AND?: Prisma.FileAssetWhereInput | Prisma.FileAssetWhereInput[];
    OR?: Prisma.FileAssetWhereInput[];
    NOT?: Prisma.FileAssetWhereInput | Prisma.FileAssetWhereInput[];
    tenantId?: Prisma.StringFilter<"FileAsset"> | string;
    documentId?: Prisma.StringNullableFilter<"FileAsset"> | string | null;
    versionId?: Prisma.StringNullableFilter<"FileAsset"> | string | null;
    uploadedById?: Prisma.StringFilter<"FileAsset"> | string;
    originalName?: Prisma.StringFilter<"FileAsset"> | string;
    mimeType?: Prisma.StringFilter<"FileAsset"> | string;
    sizeBytes?: Prisma.IntFilter<"FileAsset"> | number;
    checksum?: Prisma.StringFilter<"FileAsset"> | string;
    createdAt?: Prisma.DateTimeFilter<"FileAsset"> | Date | string;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    document?: Prisma.XOR<Prisma.DocumentNullableScalarRelationFilter, Prisma.DocumentWhereInput> | null;
    version?: Prisma.XOR<Prisma.DocumentVersionNullableScalarRelationFilter, Prisma.DocumentVersionWhereInput> | null;
    uploadedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "storageKey">;
export type FileAssetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    versionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FileAssetCountOrderByAggregateInput;
    _avg?: Prisma.FileAssetAvgOrderByAggregateInput;
    _max?: Prisma.FileAssetMaxOrderByAggregateInput;
    _min?: Prisma.FileAssetMinOrderByAggregateInput;
    _sum?: Prisma.FileAssetSumOrderByAggregateInput;
};
export type FileAssetScalarWhereWithAggregatesInput = {
    AND?: Prisma.FileAssetScalarWhereWithAggregatesInput | Prisma.FileAssetScalarWhereWithAggregatesInput[];
    OR?: Prisma.FileAssetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FileAssetScalarWhereWithAggregatesInput | Prisma.FileAssetScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FileAsset"> | string;
    tenantId?: Prisma.StringWithAggregatesFilter<"FileAsset"> | string;
    documentId?: Prisma.StringNullableWithAggregatesFilter<"FileAsset"> | string | null;
    versionId?: Prisma.StringNullableWithAggregatesFilter<"FileAsset"> | string | null;
    uploadedById?: Prisma.StringWithAggregatesFilter<"FileAsset"> | string;
    originalName?: Prisma.StringWithAggregatesFilter<"FileAsset"> | string;
    storageKey?: Prisma.StringWithAggregatesFilter<"FileAsset"> | string;
    mimeType?: Prisma.StringWithAggregatesFilter<"FileAsset"> | string;
    sizeBytes?: Prisma.IntWithAggregatesFilter<"FileAsset"> | number;
    checksum?: Prisma.StringWithAggregatesFilter<"FileAsset"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FileAsset"> | Date | string;
};
export type FileAssetCreateInput = {
    id?: string;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    checksum: string;
    createdAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutFilesInput;
    document?: Prisma.DocumentCreateNestedOneWithoutFilesInput;
    version?: Prisma.DocumentVersionCreateNestedOneWithoutFilesInput;
    uploadedBy: Prisma.UserCreateNestedOneWithoutUploadedFilesInput;
};
export type FileAssetUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    documentId?: string | null;
    versionId?: string | null;
    uploadedById: string;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    checksum: string;
    createdAt?: Date | string;
};
export type FileAssetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutFilesNestedInput;
    document?: Prisma.DocumentUpdateOneWithoutFilesNestedInput;
    version?: Prisma.DocumentVersionUpdateOneWithoutFilesNestedInput;
    uploadedBy?: Prisma.UserUpdateOneRequiredWithoutUploadedFilesNestedInput;
};
export type FileAssetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileAssetCreateManyInput = {
    id?: string;
    tenantId: string;
    documentId?: string | null;
    versionId?: string | null;
    uploadedById: string;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    checksum: string;
    createdAt?: Date | string;
};
export type FileAssetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileAssetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileAssetListRelationFilter = {
    every?: Prisma.FileAssetWhereInput;
    some?: Prisma.FileAssetWhereInput;
    none?: Prisma.FileAssetWhereInput;
};
export type FileAssetOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FileAssetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FileAssetAvgOrderByAggregateInput = {
    sizeBytes?: Prisma.SortOrder;
};
export type FileAssetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FileAssetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    uploadedById?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FileAssetSumOrderByAggregateInput = {
    sizeBytes?: Prisma.SortOrder;
};
export type FileAssetCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.FileAssetCreateWithoutTenantInput, Prisma.FileAssetUncheckedCreateWithoutTenantInput> | Prisma.FileAssetCreateWithoutTenantInput[] | Prisma.FileAssetUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.FileAssetCreateOrConnectWithoutTenantInput | Prisma.FileAssetCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.FileAssetCreateManyTenantInputEnvelope;
    connect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
};
export type FileAssetUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.FileAssetCreateWithoutTenantInput, Prisma.FileAssetUncheckedCreateWithoutTenantInput> | Prisma.FileAssetCreateWithoutTenantInput[] | Prisma.FileAssetUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.FileAssetCreateOrConnectWithoutTenantInput | Prisma.FileAssetCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.FileAssetCreateManyTenantInputEnvelope;
    connect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
};
export type FileAssetUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.FileAssetCreateWithoutTenantInput, Prisma.FileAssetUncheckedCreateWithoutTenantInput> | Prisma.FileAssetCreateWithoutTenantInput[] | Prisma.FileAssetUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.FileAssetCreateOrConnectWithoutTenantInput | Prisma.FileAssetCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.FileAssetUpsertWithWhereUniqueWithoutTenantInput | Prisma.FileAssetUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.FileAssetCreateManyTenantInputEnvelope;
    set?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    disconnect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    delete?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    connect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    update?: Prisma.FileAssetUpdateWithWhereUniqueWithoutTenantInput | Prisma.FileAssetUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.FileAssetUpdateManyWithWhereWithoutTenantInput | Prisma.FileAssetUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.FileAssetScalarWhereInput | Prisma.FileAssetScalarWhereInput[];
};
export type FileAssetUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.FileAssetCreateWithoutTenantInput, Prisma.FileAssetUncheckedCreateWithoutTenantInput> | Prisma.FileAssetCreateWithoutTenantInput[] | Prisma.FileAssetUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.FileAssetCreateOrConnectWithoutTenantInput | Prisma.FileAssetCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.FileAssetUpsertWithWhereUniqueWithoutTenantInput | Prisma.FileAssetUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.FileAssetCreateManyTenantInputEnvelope;
    set?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    disconnect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    delete?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    connect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    update?: Prisma.FileAssetUpdateWithWhereUniqueWithoutTenantInput | Prisma.FileAssetUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.FileAssetUpdateManyWithWhereWithoutTenantInput | Prisma.FileAssetUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.FileAssetScalarWhereInput | Prisma.FileAssetScalarWhereInput[];
};
export type FileAssetCreateNestedManyWithoutUploadedByInput = {
    create?: Prisma.XOR<Prisma.FileAssetCreateWithoutUploadedByInput, Prisma.FileAssetUncheckedCreateWithoutUploadedByInput> | Prisma.FileAssetCreateWithoutUploadedByInput[] | Prisma.FileAssetUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.FileAssetCreateOrConnectWithoutUploadedByInput | Prisma.FileAssetCreateOrConnectWithoutUploadedByInput[];
    createMany?: Prisma.FileAssetCreateManyUploadedByInputEnvelope;
    connect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
};
export type FileAssetUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: Prisma.XOR<Prisma.FileAssetCreateWithoutUploadedByInput, Prisma.FileAssetUncheckedCreateWithoutUploadedByInput> | Prisma.FileAssetCreateWithoutUploadedByInput[] | Prisma.FileAssetUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.FileAssetCreateOrConnectWithoutUploadedByInput | Prisma.FileAssetCreateOrConnectWithoutUploadedByInput[];
    createMany?: Prisma.FileAssetCreateManyUploadedByInputEnvelope;
    connect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
};
export type FileAssetUpdateManyWithoutUploadedByNestedInput = {
    create?: Prisma.XOR<Prisma.FileAssetCreateWithoutUploadedByInput, Prisma.FileAssetUncheckedCreateWithoutUploadedByInput> | Prisma.FileAssetCreateWithoutUploadedByInput[] | Prisma.FileAssetUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.FileAssetCreateOrConnectWithoutUploadedByInput | Prisma.FileAssetCreateOrConnectWithoutUploadedByInput[];
    upsert?: Prisma.FileAssetUpsertWithWhereUniqueWithoutUploadedByInput | Prisma.FileAssetUpsertWithWhereUniqueWithoutUploadedByInput[];
    createMany?: Prisma.FileAssetCreateManyUploadedByInputEnvelope;
    set?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    disconnect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    delete?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    connect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    update?: Prisma.FileAssetUpdateWithWhereUniqueWithoutUploadedByInput | Prisma.FileAssetUpdateWithWhereUniqueWithoutUploadedByInput[];
    updateMany?: Prisma.FileAssetUpdateManyWithWhereWithoutUploadedByInput | Prisma.FileAssetUpdateManyWithWhereWithoutUploadedByInput[];
    deleteMany?: Prisma.FileAssetScalarWhereInput | Prisma.FileAssetScalarWhereInput[];
};
export type FileAssetUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: Prisma.XOR<Prisma.FileAssetCreateWithoutUploadedByInput, Prisma.FileAssetUncheckedCreateWithoutUploadedByInput> | Prisma.FileAssetCreateWithoutUploadedByInput[] | Prisma.FileAssetUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.FileAssetCreateOrConnectWithoutUploadedByInput | Prisma.FileAssetCreateOrConnectWithoutUploadedByInput[];
    upsert?: Prisma.FileAssetUpsertWithWhereUniqueWithoutUploadedByInput | Prisma.FileAssetUpsertWithWhereUniqueWithoutUploadedByInput[];
    createMany?: Prisma.FileAssetCreateManyUploadedByInputEnvelope;
    set?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    disconnect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    delete?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    connect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    update?: Prisma.FileAssetUpdateWithWhereUniqueWithoutUploadedByInput | Prisma.FileAssetUpdateWithWhereUniqueWithoutUploadedByInput[];
    updateMany?: Prisma.FileAssetUpdateManyWithWhereWithoutUploadedByInput | Prisma.FileAssetUpdateManyWithWhereWithoutUploadedByInput[];
    deleteMany?: Prisma.FileAssetScalarWhereInput | Prisma.FileAssetScalarWhereInput[];
};
export type FileAssetCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.FileAssetCreateWithoutDocumentInput, Prisma.FileAssetUncheckedCreateWithoutDocumentInput> | Prisma.FileAssetCreateWithoutDocumentInput[] | Prisma.FileAssetUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.FileAssetCreateOrConnectWithoutDocumentInput | Prisma.FileAssetCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.FileAssetCreateManyDocumentInputEnvelope;
    connect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
};
export type FileAssetUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.FileAssetCreateWithoutDocumentInput, Prisma.FileAssetUncheckedCreateWithoutDocumentInput> | Prisma.FileAssetCreateWithoutDocumentInput[] | Prisma.FileAssetUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.FileAssetCreateOrConnectWithoutDocumentInput | Prisma.FileAssetCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.FileAssetCreateManyDocumentInputEnvelope;
    connect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
};
export type FileAssetUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.FileAssetCreateWithoutDocumentInput, Prisma.FileAssetUncheckedCreateWithoutDocumentInput> | Prisma.FileAssetCreateWithoutDocumentInput[] | Prisma.FileAssetUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.FileAssetCreateOrConnectWithoutDocumentInput | Prisma.FileAssetCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.FileAssetUpsertWithWhereUniqueWithoutDocumentInput | Prisma.FileAssetUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.FileAssetCreateManyDocumentInputEnvelope;
    set?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    disconnect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    delete?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    connect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    update?: Prisma.FileAssetUpdateWithWhereUniqueWithoutDocumentInput | Prisma.FileAssetUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.FileAssetUpdateManyWithWhereWithoutDocumentInput | Prisma.FileAssetUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.FileAssetScalarWhereInput | Prisma.FileAssetScalarWhereInput[];
};
export type FileAssetUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.FileAssetCreateWithoutDocumentInput, Prisma.FileAssetUncheckedCreateWithoutDocumentInput> | Prisma.FileAssetCreateWithoutDocumentInput[] | Prisma.FileAssetUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.FileAssetCreateOrConnectWithoutDocumentInput | Prisma.FileAssetCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.FileAssetUpsertWithWhereUniqueWithoutDocumentInput | Prisma.FileAssetUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.FileAssetCreateManyDocumentInputEnvelope;
    set?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    disconnect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    delete?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    connect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    update?: Prisma.FileAssetUpdateWithWhereUniqueWithoutDocumentInput | Prisma.FileAssetUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.FileAssetUpdateManyWithWhereWithoutDocumentInput | Prisma.FileAssetUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.FileAssetScalarWhereInput | Prisma.FileAssetScalarWhereInput[];
};
export type FileAssetCreateNestedManyWithoutVersionInput = {
    create?: Prisma.XOR<Prisma.FileAssetCreateWithoutVersionInput, Prisma.FileAssetUncheckedCreateWithoutVersionInput> | Prisma.FileAssetCreateWithoutVersionInput[] | Prisma.FileAssetUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.FileAssetCreateOrConnectWithoutVersionInput | Prisma.FileAssetCreateOrConnectWithoutVersionInput[];
    createMany?: Prisma.FileAssetCreateManyVersionInputEnvelope;
    connect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
};
export type FileAssetUncheckedCreateNestedManyWithoutVersionInput = {
    create?: Prisma.XOR<Prisma.FileAssetCreateWithoutVersionInput, Prisma.FileAssetUncheckedCreateWithoutVersionInput> | Prisma.FileAssetCreateWithoutVersionInput[] | Prisma.FileAssetUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.FileAssetCreateOrConnectWithoutVersionInput | Prisma.FileAssetCreateOrConnectWithoutVersionInput[];
    createMany?: Prisma.FileAssetCreateManyVersionInputEnvelope;
    connect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
};
export type FileAssetUpdateManyWithoutVersionNestedInput = {
    create?: Prisma.XOR<Prisma.FileAssetCreateWithoutVersionInput, Prisma.FileAssetUncheckedCreateWithoutVersionInput> | Prisma.FileAssetCreateWithoutVersionInput[] | Prisma.FileAssetUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.FileAssetCreateOrConnectWithoutVersionInput | Prisma.FileAssetCreateOrConnectWithoutVersionInput[];
    upsert?: Prisma.FileAssetUpsertWithWhereUniqueWithoutVersionInput | Prisma.FileAssetUpsertWithWhereUniqueWithoutVersionInput[];
    createMany?: Prisma.FileAssetCreateManyVersionInputEnvelope;
    set?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    disconnect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    delete?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    connect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    update?: Prisma.FileAssetUpdateWithWhereUniqueWithoutVersionInput | Prisma.FileAssetUpdateWithWhereUniqueWithoutVersionInput[];
    updateMany?: Prisma.FileAssetUpdateManyWithWhereWithoutVersionInput | Prisma.FileAssetUpdateManyWithWhereWithoutVersionInput[];
    deleteMany?: Prisma.FileAssetScalarWhereInput | Prisma.FileAssetScalarWhereInput[];
};
export type FileAssetUncheckedUpdateManyWithoutVersionNestedInput = {
    create?: Prisma.XOR<Prisma.FileAssetCreateWithoutVersionInput, Prisma.FileAssetUncheckedCreateWithoutVersionInput> | Prisma.FileAssetCreateWithoutVersionInput[] | Prisma.FileAssetUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.FileAssetCreateOrConnectWithoutVersionInput | Prisma.FileAssetCreateOrConnectWithoutVersionInput[];
    upsert?: Prisma.FileAssetUpsertWithWhereUniqueWithoutVersionInput | Prisma.FileAssetUpsertWithWhereUniqueWithoutVersionInput[];
    createMany?: Prisma.FileAssetCreateManyVersionInputEnvelope;
    set?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    disconnect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    delete?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    connect?: Prisma.FileAssetWhereUniqueInput | Prisma.FileAssetWhereUniqueInput[];
    update?: Prisma.FileAssetUpdateWithWhereUniqueWithoutVersionInput | Prisma.FileAssetUpdateWithWhereUniqueWithoutVersionInput[];
    updateMany?: Prisma.FileAssetUpdateManyWithWhereWithoutVersionInput | Prisma.FileAssetUpdateManyWithWhereWithoutVersionInput[];
    deleteMany?: Prisma.FileAssetScalarWhereInput | Prisma.FileAssetScalarWhereInput[];
};
export type FileAssetCreateWithoutTenantInput = {
    id?: string;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    checksum: string;
    createdAt?: Date | string;
    document?: Prisma.DocumentCreateNestedOneWithoutFilesInput;
    version?: Prisma.DocumentVersionCreateNestedOneWithoutFilesInput;
    uploadedBy: Prisma.UserCreateNestedOneWithoutUploadedFilesInput;
};
export type FileAssetUncheckedCreateWithoutTenantInput = {
    id?: string;
    documentId?: string | null;
    versionId?: string | null;
    uploadedById: string;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    checksum: string;
    createdAt?: Date | string;
};
export type FileAssetCreateOrConnectWithoutTenantInput = {
    where: Prisma.FileAssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileAssetCreateWithoutTenantInput, Prisma.FileAssetUncheckedCreateWithoutTenantInput>;
};
export type FileAssetCreateManyTenantInputEnvelope = {
    data: Prisma.FileAssetCreateManyTenantInput | Prisma.FileAssetCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type FileAssetUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.FileAssetWhereUniqueInput;
    update: Prisma.XOR<Prisma.FileAssetUpdateWithoutTenantInput, Prisma.FileAssetUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.FileAssetCreateWithoutTenantInput, Prisma.FileAssetUncheckedCreateWithoutTenantInput>;
};
export type FileAssetUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.FileAssetWhereUniqueInput;
    data: Prisma.XOR<Prisma.FileAssetUpdateWithoutTenantInput, Prisma.FileAssetUncheckedUpdateWithoutTenantInput>;
};
export type FileAssetUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.FileAssetScalarWhereInput;
    data: Prisma.XOR<Prisma.FileAssetUpdateManyMutationInput, Prisma.FileAssetUncheckedUpdateManyWithoutTenantInput>;
};
export type FileAssetScalarWhereInput = {
    AND?: Prisma.FileAssetScalarWhereInput | Prisma.FileAssetScalarWhereInput[];
    OR?: Prisma.FileAssetScalarWhereInput[];
    NOT?: Prisma.FileAssetScalarWhereInput | Prisma.FileAssetScalarWhereInput[];
    id?: Prisma.StringFilter<"FileAsset"> | string;
    tenantId?: Prisma.StringFilter<"FileAsset"> | string;
    documentId?: Prisma.StringNullableFilter<"FileAsset"> | string | null;
    versionId?: Prisma.StringNullableFilter<"FileAsset"> | string | null;
    uploadedById?: Prisma.StringFilter<"FileAsset"> | string;
    originalName?: Prisma.StringFilter<"FileAsset"> | string;
    storageKey?: Prisma.StringFilter<"FileAsset"> | string;
    mimeType?: Prisma.StringFilter<"FileAsset"> | string;
    sizeBytes?: Prisma.IntFilter<"FileAsset"> | number;
    checksum?: Prisma.StringFilter<"FileAsset"> | string;
    createdAt?: Prisma.DateTimeFilter<"FileAsset"> | Date | string;
};
export type FileAssetCreateWithoutUploadedByInput = {
    id?: string;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    checksum: string;
    createdAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutFilesInput;
    document?: Prisma.DocumentCreateNestedOneWithoutFilesInput;
    version?: Prisma.DocumentVersionCreateNestedOneWithoutFilesInput;
};
export type FileAssetUncheckedCreateWithoutUploadedByInput = {
    id?: string;
    tenantId: string;
    documentId?: string | null;
    versionId?: string | null;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    checksum: string;
    createdAt?: Date | string;
};
export type FileAssetCreateOrConnectWithoutUploadedByInput = {
    where: Prisma.FileAssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileAssetCreateWithoutUploadedByInput, Prisma.FileAssetUncheckedCreateWithoutUploadedByInput>;
};
export type FileAssetCreateManyUploadedByInputEnvelope = {
    data: Prisma.FileAssetCreateManyUploadedByInput | Prisma.FileAssetCreateManyUploadedByInput[];
    skipDuplicates?: boolean;
};
export type FileAssetUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: Prisma.FileAssetWhereUniqueInput;
    update: Prisma.XOR<Prisma.FileAssetUpdateWithoutUploadedByInput, Prisma.FileAssetUncheckedUpdateWithoutUploadedByInput>;
    create: Prisma.XOR<Prisma.FileAssetCreateWithoutUploadedByInput, Prisma.FileAssetUncheckedCreateWithoutUploadedByInput>;
};
export type FileAssetUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: Prisma.FileAssetWhereUniqueInput;
    data: Prisma.XOR<Prisma.FileAssetUpdateWithoutUploadedByInput, Prisma.FileAssetUncheckedUpdateWithoutUploadedByInput>;
};
export type FileAssetUpdateManyWithWhereWithoutUploadedByInput = {
    where: Prisma.FileAssetScalarWhereInput;
    data: Prisma.XOR<Prisma.FileAssetUpdateManyMutationInput, Prisma.FileAssetUncheckedUpdateManyWithoutUploadedByInput>;
};
export type FileAssetCreateWithoutDocumentInput = {
    id?: string;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    checksum: string;
    createdAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutFilesInput;
    version?: Prisma.DocumentVersionCreateNestedOneWithoutFilesInput;
    uploadedBy: Prisma.UserCreateNestedOneWithoutUploadedFilesInput;
};
export type FileAssetUncheckedCreateWithoutDocumentInput = {
    id?: string;
    tenantId: string;
    versionId?: string | null;
    uploadedById: string;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    checksum: string;
    createdAt?: Date | string;
};
export type FileAssetCreateOrConnectWithoutDocumentInput = {
    where: Prisma.FileAssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileAssetCreateWithoutDocumentInput, Prisma.FileAssetUncheckedCreateWithoutDocumentInput>;
};
export type FileAssetCreateManyDocumentInputEnvelope = {
    data: Prisma.FileAssetCreateManyDocumentInput | Prisma.FileAssetCreateManyDocumentInput[];
    skipDuplicates?: boolean;
};
export type FileAssetUpsertWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.FileAssetWhereUniqueInput;
    update: Prisma.XOR<Prisma.FileAssetUpdateWithoutDocumentInput, Prisma.FileAssetUncheckedUpdateWithoutDocumentInput>;
    create: Prisma.XOR<Prisma.FileAssetCreateWithoutDocumentInput, Prisma.FileAssetUncheckedCreateWithoutDocumentInput>;
};
export type FileAssetUpdateWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.FileAssetWhereUniqueInput;
    data: Prisma.XOR<Prisma.FileAssetUpdateWithoutDocumentInput, Prisma.FileAssetUncheckedUpdateWithoutDocumentInput>;
};
export type FileAssetUpdateManyWithWhereWithoutDocumentInput = {
    where: Prisma.FileAssetScalarWhereInput;
    data: Prisma.XOR<Prisma.FileAssetUpdateManyMutationInput, Prisma.FileAssetUncheckedUpdateManyWithoutDocumentInput>;
};
export type FileAssetCreateWithoutVersionInput = {
    id?: string;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    checksum: string;
    createdAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutFilesInput;
    document?: Prisma.DocumentCreateNestedOneWithoutFilesInput;
    uploadedBy: Prisma.UserCreateNestedOneWithoutUploadedFilesInput;
};
export type FileAssetUncheckedCreateWithoutVersionInput = {
    id?: string;
    tenantId: string;
    documentId?: string | null;
    uploadedById: string;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    checksum: string;
    createdAt?: Date | string;
};
export type FileAssetCreateOrConnectWithoutVersionInput = {
    where: Prisma.FileAssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileAssetCreateWithoutVersionInput, Prisma.FileAssetUncheckedCreateWithoutVersionInput>;
};
export type FileAssetCreateManyVersionInputEnvelope = {
    data: Prisma.FileAssetCreateManyVersionInput | Prisma.FileAssetCreateManyVersionInput[];
    skipDuplicates?: boolean;
};
export type FileAssetUpsertWithWhereUniqueWithoutVersionInput = {
    where: Prisma.FileAssetWhereUniqueInput;
    update: Prisma.XOR<Prisma.FileAssetUpdateWithoutVersionInput, Prisma.FileAssetUncheckedUpdateWithoutVersionInput>;
    create: Prisma.XOR<Prisma.FileAssetCreateWithoutVersionInput, Prisma.FileAssetUncheckedCreateWithoutVersionInput>;
};
export type FileAssetUpdateWithWhereUniqueWithoutVersionInput = {
    where: Prisma.FileAssetWhereUniqueInput;
    data: Prisma.XOR<Prisma.FileAssetUpdateWithoutVersionInput, Prisma.FileAssetUncheckedUpdateWithoutVersionInput>;
};
export type FileAssetUpdateManyWithWhereWithoutVersionInput = {
    where: Prisma.FileAssetScalarWhereInput;
    data: Prisma.XOR<Prisma.FileAssetUpdateManyMutationInput, Prisma.FileAssetUncheckedUpdateManyWithoutVersionInput>;
};
export type FileAssetCreateManyTenantInput = {
    id?: string;
    documentId?: string | null;
    versionId?: string | null;
    uploadedById: string;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    checksum: string;
    createdAt?: Date | string;
};
export type FileAssetUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.DocumentUpdateOneWithoutFilesNestedInput;
    version?: Prisma.DocumentVersionUpdateOneWithoutFilesNestedInput;
    uploadedBy?: Prisma.UserUpdateOneRequiredWithoutUploadedFilesNestedInput;
};
export type FileAssetUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileAssetUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileAssetCreateManyUploadedByInput = {
    id?: string;
    tenantId: string;
    documentId?: string | null;
    versionId?: string | null;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    checksum: string;
    createdAt?: Date | string;
};
export type FileAssetUpdateWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutFilesNestedInput;
    document?: Prisma.DocumentUpdateOneWithoutFilesNestedInput;
    version?: Prisma.DocumentVersionUpdateOneWithoutFilesNestedInput;
};
export type FileAssetUncheckedUpdateWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileAssetUncheckedUpdateManyWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileAssetCreateManyDocumentInput = {
    id?: string;
    tenantId: string;
    versionId?: string | null;
    uploadedById: string;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    checksum: string;
    createdAt?: Date | string;
};
export type FileAssetUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutFilesNestedInput;
    version?: Prisma.DocumentVersionUpdateOneWithoutFilesNestedInput;
    uploadedBy?: Prisma.UserUpdateOneRequiredWithoutUploadedFilesNestedInput;
};
export type FileAssetUncheckedUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileAssetUncheckedUpdateManyWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileAssetCreateManyVersionInput = {
    id?: string;
    tenantId: string;
    documentId?: string | null;
    uploadedById: string;
    originalName: string;
    storageKey: string;
    mimeType: string;
    sizeBytes: number;
    checksum: string;
    createdAt?: Date | string;
};
export type FileAssetUpdateWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutFilesNestedInput;
    document?: Prisma.DocumentUpdateOneWithoutFilesNestedInput;
    uploadedBy?: Prisma.UserUpdateOneRequiredWithoutUploadedFilesNestedInput;
};
export type FileAssetUncheckedUpdateWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileAssetUncheckedUpdateManyWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploadedById?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    checksum?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileAssetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    documentId?: boolean;
    versionId?: boolean;
    uploadedById?: boolean;
    originalName?: boolean;
    storageKey?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    checksum?: boolean;
    createdAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.FileAsset$documentArgs<ExtArgs>;
    version?: boolean | Prisma.FileAsset$versionArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fileAsset"]>;
export type FileAssetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    documentId?: boolean;
    versionId?: boolean;
    uploadedById?: boolean;
    originalName?: boolean;
    storageKey?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    checksum?: boolean;
    createdAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.FileAsset$documentArgs<ExtArgs>;
    version?: boolean | Prisma.FileAsset$versionArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fileAsset"]>;
export type FileAssetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    documentId?: boolean;
    versionId?: boolean;
    uploadedById?: boolean;
    originalName?: boolean;
    storageKey?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    checksum?: boolean;
    createdAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.FileAsset$documentArgs<ExtArgs>;
    version?: boolean | Prisma.FileAsset$versionArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fileAsset"]>;
export type FileAssetSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    documentId?: boolean;
    versionId?: boolean;
    uploadedById?: boolean;
    originalName?: boolean;
    storageKey?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    checksum?: boolean;
    createdAt?: boolean;
};
export type FileAssetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "documentId" | "versionId" | "uploadedById" | "originalName" | "storageKey" | "mimeType" | "sizeBytes" | "checksum" | "createdAt", ExtArgs["result"]["fileAsset"]>;
export type FileAssetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.FileAsset$documentArgs<ExtArgs>;
    version?: boolean | Prisma.FileAsset$versionArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FileAssetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.FileAsset$documentArgs<ExtArgs>;
    version?: boolean | Prisma.FileAsset$versionArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FileAssetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    document?: boolean | Prisma.FileAsset$documentArgs<ExtArgs>;
    version?: boolean | Prisma.FileAsset$versionArgs<ExtArgs>;
    uploadedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $FileAssetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FileAsset";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
        document: Prisma.$DocumentPayload<ExtArgs> | null;
        version: Prisma.$DocumentVersionPayload<ExtArgs> | null;
        uploadedBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        documentId: string | null;
        versionId: string | null;
        uploadedById: string;
        originalName: string;
        storageKey: string;
        mimeType: string;
        sizeBytes: number;
        checksum: string;
        createdAt: Date;
    }, ExtArgs["result"]["fileAsset"]>;
    composites: {};
};
export type FileAssetGetPayload<S extends boolean | null | undefined | FileAssetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FileAssetPayload, S>;
export type FileAssetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FileAssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FileAssetCountAggregateInputType | true;
};
export interface FileAssetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FileAsset'];
        meta: {
            name: 'FileAsset';
        };
    };
    findUnique<T extends FileAssetFindUniqueArgs>(args: Prisma.SelectSubset<T, FileAssetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FileAssetClient<runtime.Types.Result.GetResult<Prisma.$FileAssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FileAssetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FileAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FileAssetClient<runtime.Types.Result.GetResult<Prisma.$FileAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FileAssetFindFirstArgs>(args?: Prisma.SelectSubset<T, FileAssetFindFirstArgs<ExtArgs>>): Prisma.Prisma__FileAssetClient<runtime.Types.Result.GetResult<Prisma.$FileAssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FileAssetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FileAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FileAssetClient<runtime.Types.Result.GetResult<Prisma.$FileAssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FileAssetFindManyArgs>(args?: Prisma.SelectSubset<T, FileAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FileAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FileAssetCreateArgs>(args: Prisma.SelectSubset<T, FileAssetCreateArgs<ExtArgs>>): Prisma.Prisma__FileAssetClient<runtime.Types.Result.GetResult<Prisma.$FileAssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FileAssetCreateManyArgs>(args?: Prisma.SelectSubset<T, FileAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FileAssetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FileAssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FileAssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FileAssetDeleteArgs>(args: Prisma.SelectSubset<T, FileAssetDeleteArgs<ExtArgs>>): Prisma.Prisma__FileAssetClient<runtime.Types.Result.GetResult<Prisma.$FileAssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FileAssetUpdateArgs>(args: Prisma.SelectSubset<T, FileAssetUpdateArgs<ExtArgs>>): Prisma.Prisma__FileAssetClient<runtime.Types.Result.GetResult<Prisma.$FileAssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FileAssetDeleteManyArgs>(args?: Prisma.SelectSubset<T, FileAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FileAssetUpdateManyArgs>(args: Prisma.SelectSubset<T, FileAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FileAssetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FileAssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FileAssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FileAssetUpsertArgs>(args: Prisma.SelectSubset<T, FileAssetUpsertArgs<ExtArgs>>): Prisma.Prisma__FileAssetClient<runtime.Types.Result.GetResult<Prisma.$FileAssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FileAssetCountArgs>(args?: Prisma.Subset<T, FileAssetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FileAssetCountAggregateOutputType> : number>;
    aggregate<T extends FileAssetAggregateArgs>(args: Prisma.Subset<T, FileAssetAggregateArgs>): Prisma.PrismaPromise<GetFileAssetAggregateType<T>>;
    groupBy<T extends FileAssetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FileAssetGroupByArgs['orderBy'];
    } : {
        orderBy?: FileAssetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FileAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FileAssetFieldRefs;
}
export interface Prisma__FileAssetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    document<T extends Prisma.FileAsset$documentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FileAsset$documentArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    version<T extends Prisma.FileAsset$versionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FileAsset$versionArgs<ExtArgs>>): Prisma.Prisma__DocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    uploadedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FileAssetFieldRefs {
    readonly id: Prisma.FieldRef<"FileAsset", 'String'>;
    readonly tenantId: Prisma.FieldRef<"FileAsset", 'String'>;
    readonly documentId: Prisma.FieldRef<"FileAsset", 'String'>;
    readonly versionId: Prisma.FieldRef<"FileAsset", 'String'>;
    readonly uploadedById: Prisma.FieldRef<"FileAsset", 'String'>;
    readonly originalName: Prisma.FieldRef<"FileAsset", 'String'>;
    readonly storageKey: Prisma.FieldRef<"FileAsset", 'String'>;
    readonly mimeType: Prisma.FieldRef<"FileAsset", 'String'>;
    readonly sizeBytes: Prisma.FieldRef<"FileAsset", 'Int'>;
    readonly checksum: Prisma.FieldRef<"FileAsset", 'String'>;
    readonly createdAt: Prisma.FieldRef<"FileAsset", 'DateTime'>;
}
export type FileAssetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileAssetSelect<ExtArgs> | null;
    omit?: Prisma.FileAssetOmit<ExtArgs> | null;
    include?: Prisma.FileAssetInclude<ExtArgs> | null;
    where: Prisma.FileAssetWhereUniqueInput;
};
export type FileAssetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileAssetSelect<ExtArgs> | null;
    omit?: Prisma.FileAssetOmit<ExtArgs> | null;
    include?: Prisma.FileAssetInclude<ExtArgs> | null;
    where: Prisma.FileAssetWhereUniqueInput;
};
export type FileAssetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FileAssetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FileAssetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FileAssetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileAssetSelect<ExtArgs> | null;
    omit?: Prisma.FileAssetOmit<ExtArgs> | null;
    include?: Prisma.FileAssetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FileAssetCreateInput, Prisma.FileAssetUncheckedCreateInput>;
};
export type FileAssetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FileAssetCreateManyInput | Prisma.FileAssetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FileAssetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileAssetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FileAssetOmit<ExtArgs> | null;
    data: Prisma.FileAssetCreateManyInput | Prisma.FileAssetCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FileAssetIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FileAssetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileAssetSelect<ExtArgs> | null;
    omit?: Prisma.FileAssetOmit<ExtArgs> | null;
    include?: Prisma.FileAssetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FileAssetUpdateInput, Prisma.FileAssetUncheckedUpdateInput>;
    where: Prisma.FileAssetWhereUniqueInput;
};
export type FileAssetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FileAssetUpdateManyMutationInput, Prisma.FileAssetUncheckedUpdateManyInput>;
    where?: Prisma.FileAssetWhereInput;
    limit?: number;
};
export type FileAssetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileAssetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FileAssetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FileAssetUpdateManyMutationInput, Prisma.FileAssetUncheckedUpdateManyInput>;
    where?: Prisma.FileAssetWhereInput;
    limit?: number;
    include?: Prisma.FileAssetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FileAssetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileAssetSelect<ExtArgs> | null;
    omit?: Prisma.FileAssetOmit<ExtArgs> | null;
    include?: Prisma.FileAssetInclude<ExtArgs> | null;
    where: Prisma.FileAssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileAssetCreateInput, Prisma.FileAssetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FileAssetUpdateInput, Prisma.FileAssetUncheckedUpdateInput>;
};
export type FileAssetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileAssetSelect<ExtArgs> | null;
    omit?: Prisma.FileAssetOmit<ExtArgs> | null;
    include?: Prisma.FileAssetInclude<ExtArgs> | null;
    where: Prisma.FileAssetWhereUniqueInput;
};
export type FileAssetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileAssetWhereInput;
    limit?: number;
};
export type FileAsset$documentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
};
export type FileAsset$versionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.DocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.DocumentVersionInclude<ExtArgs> | null;
    where?: Prisma.DocumentVersionWhereInput;
};
export type FileAssetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileAssetSelect<ExtArgs> | null;
    omit?: Prisma.FileAssetOmit<ExtArgs> | null;
    include?: Prisma.FileAssetInclude<ExtArgs> | null;
};
