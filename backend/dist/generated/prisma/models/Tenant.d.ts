import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TenantModel = runtime.Types.Result.DefaultSelection<Prisma.$TenantPayload>;
export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null;
    _min: TenantMinAggregateOutputType | null;
    _max: TenantMaxAggregateOutputType | null;
};
export type TenantMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    subdomain: string | null;
    status: $Enums.TenantStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TenantMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    subdomain: string | null;
    status: $Enums.TenantStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TenantCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    subdomain: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TenantMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    subdomain?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TenantMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    subdomain?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TenantCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    subdomain?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TenantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TenantWhereInput;
    orderBy?: Prisma.TenantOrderByWithRelationInput | Prisma.TenantOrderByWithRelationInput[];
    cursor?: Prisma.TenantWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TenantCountAggregateInputType;
    _min?: TenantMinAggregateInputType;
    _max?: TenantMaxAggregateInputType;
};
export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
    [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTenant[P]> : Prisma.GetScalarType<T[P], AggregateTenant[P]>;
};
export type TenantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TenantWhereInput;
    orderBy?: Prisma.TenantOrderByWithAggregationInput | Prisma.TenantOrderByWithAggregationInput[];
    by: Prisma.TenantScalarFieldEnum[] | Prisma.TenantScalarFieldEnum;
    having?: Prisma.TenantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TenantCountAggregateInputType | true;
    _min?: TenantMinAggregateInputType;
    _max?: TenantMaxAggregateInputType;
};
export type TenantGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    subdomain: string;
    status: $Enums.TenantStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: TenantCountAggregateOutputType | null;
    _min: TenantMinAggregateOutputType | null;
    _max: TenantMaxAggregateOutputType | null;
};
export type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TenantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TenantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TenantGroupByOutputType[P]>;
}>>;
export type TenantWhereInput = {
    AND?: Prisma.TenantWhereInput | Prisma.TenantWhereInput[];
    OR?: Prisma.TenantWhereInput[];
    NOT?: Prisma.TenantWhereInput | Prisma.TenantWhereInput[];
    id?: Prisma.StringFilter<"Tenant"> | string;
    name?: Prisma.StringFilter<"Tenant"> | string;
    slug?: Prisma.StringFilter<"Tenant"> | string;
    subdomain?: Prisma.StringFilter<"Tenant"> | string;
    status?: Prisma.EnumTenantStatusFilter<"Tenant"> | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFilter<"Tenant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Tenant"> | Date | string;
    users?: Prisma.UserListRelationFilter;
    documents?: Prisma.DocumentListRelationFilter;
    changeRequests?: Prisma.ChangeRequestListRelationFilter;
    periodicReviews?: Prisma.PeriodicReviewListRelationFilter;
    files?: Prisma.FileAssetListRelationFilter;
    formTemplates?: Prisma.FormTemplateListRelationFilter;
    qualityRecords?: Prisma.QualityRecordListRelationFilter;
};
export type TenantOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    subdomain?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    users?: Prisma.UserOrderByRelationAggregateInput;
    documents?: Prisma.DocumentOrderByRelationAggregateInput;
    changeRequests?: Prisma.ChangeRequestOrderByRelationAggregateInput;
    periodicReviews?: Prisma.PeriodicReviewOrderByRelationAggregateInput;
    files?: Prisma.FileAssetOrderByRelationAggregateInput;
    formTemplates?: Prisma.FormTemplateOrderByRelationAggregateInput;
    qualityRecords?: Prisma.QualityRecordOrderByRelationAggregateInput;
};
export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    subdomain?: string;
    AND?: Prisma.TenantWhereInput | Prisma.TenantWhereInput[];
    OR?: Prisma.TenantWhereInput[];
    NOT?: Prisma.TenantWhereInput | Prisma.TenantWhereInput[];
    name?: Prisma.StringFilter<"Tenant"> | string;
    status?: Prisma.EnumTenantStatusFilter<"Tenant"> | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFilter<"Tenant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Tenant"> | Date | string;
    users?: Prisma.UserListRelationFilter;
    documents?: Prisma.DocumentListRelationFilter;
    changeRequests?: Prisma.ChangeRequestListRelationFilter;
    periodicReviews?: Prisma.PeriodicReviewListRelationFilter;
    files?: Prisma.FileAssetListRelationFilter;
    formTemplates?: Prisma.FormTemplateListRelationFilter;
    qualityRecords?: Prisma.QualityRecordListRelationFilter;
}, "id" | "slug" | "subdomain">;
export type TenantOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    subdomain?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TenantCountOrderByAggregateInput;
    _max?: Prisma.TenantMaxOrderByAggregateInput;
    _min?: Prisma.TenantMinOrderByAggregateInput;
};
export type TenantScalarWhereWithAggregatesInput = {
    AND?: Prisma.TenantScalarWhereWithAggregatesInput | Prisma.TenantScalarWhereWithAggregatesInput[];
    OR?: Prisma.TenantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TenantScalarWhereWithAggregatesInput | Prisma.TenantScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Tenant"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Tenant"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Tenant"> | string;
    subdomain?: Prisma.StringWithAggregatesFilter<"Tenant"> | string;
    status?: Prisma.EnumTenantStatusWithAggregatesFilter<"Tenant"> | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Tenant"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Tenant"> | Date | string;
};
export type TenantCreateInput = {
    id?: string;
    name: string;
    slug: string;
    subdomain: string;
    status?: $Enums.TenantStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutTenantInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutTenantInput;
    changeRequests?: Prisma.ChangeRequestCreateNestedManyWithoutTenantInput;
    periodicReviews?: Prisma.PeriodicReviewCreateNestedManyWithoutTenantInput;
    files?: Prisma.FileAssetCreateNestedManyWithoutTenantInput;
    formTemplates?: Prisma.FormTemplateCreateNestedManyWithoutTenantInput;
    qualityRecords?: Prisma.QualityRecordCreateNestedManyWithoutTenantInput;
};
export type TenantUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    subdomain: string;
    status?: $Enums.TenantStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutTenantInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutTenantInput;
    changeRequests?: Prisma.ChangeRequestUncheckedCreateNestedManyWithoutTenantInput;
    periodicReviews?: Prisma.PeriodicReviewUncheckedCreateNestedManyWithoutTenantInput;
    files?: Prisma.FileAssetUncheckedCreateNestedManyWithoutTenantInput;
    formTemplates?: Prisma.FormTemplateUncheckedCreateNestedManyWithoutTenantInput;
    qualityRecords?: Prisma.QualityRecordUncheckedCreateNestedManyWithoutTenantInput;
};
export type TenantUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subdomain?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutTenantNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutTenantNestedInput;
    changeRequests?: Prisma.ChangeRequestUpdateManyWithoutTenantNestedInput;
    periodicReviews?: Prisma.PeriodicReviewUpdateManyWithoutTenantNestedInput;
    files?: Prisma.FileAssetUpdateManyWithoutTenantNestedInput;
    formTemplates?: Prisma.FormTemplateUpdateManyWithoutTenantNestedInput;
    qualityRecords?: Prisma.QualityRecordUpdateManyWithoutTenantNestedInput;
};
export type TenantUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subdomain?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutTenantNestedInput;
    changeRequests?: Prisma.ChangeRequestUncheckedUpdateManyWithoutTenantNestedInput;
    periodicReviews?: Prisma.PeriodicReviewUncheckedUpdateManyWithoutTenantNestedInput;
    files?: Prisma.FileAssetUncheckedUpdateManyWithoutTenantNestedInput;
    formTemplates?: Prisma.FormTemplateUncheckedUpdateManyWithoutTenantNestedInput;
    qualityRecords?: Prisma.QualityRecordUncheckedUpdateManyWithoutTenantNestedInput;
};
export type TenantCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    subdomain: string;
    status?: $Enums.TenantStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TenantUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subdomain?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TenantUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subdomain?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TenantCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    subdomain?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TenantMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    subdomain?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TenantMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    subdomain?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TenantNullableScalarRelationFilter = {
    is?: Prisma.TenantWhereInput | null;
    isNot?: Prisma.TenantWhereInput | null;
};
export type TenantScalarRelationFilter = {
    is?: Prisma.TenantWhereInput;
    isNot?: Prisma.TenantWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumTenantStatusFieldUpdateOperationsInput = {
    set?: $Enums.TenantStatus;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type TenantCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutUsersInput, Prisma.TenantUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutUsersInput;
    connect?: Prisma.TenantWhereUniqueInput;
};
export type TenantUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutUsersInput, Prisma.TenantUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.TenantUpsertWithoutUsersInput;
    disconnect?: Prisma.TenantWhereInput | boolean;
    delete?: Prisma.TenantWhereInput | boolean;
    connect?: Prisma.TenantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TenantUpdateToOneWithWhereWithoutUsersInput, Prisma.TenantUpdateWithoutUsersInput>, Prisma.TenantUncheckedUpdateWithoutUsersInput>;
};
export type TenantCreateNestedOneWithoutDocumentsInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutDocumentsInput, Prisma.TenantUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutDocumentsInput;
    connect?: Prisma.TenantWhereUniqueInput;
};
export type TenantUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutDocumentsInput, Prisma.TenantUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutDocumentsInput;
    upsert?: Prisma.TenantUpsertWithoutDocumentsInput;
    connect?: Prisma.TenantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TenantUpdateToOneWithWhereWithoutDocumentsInput, Prisma.TenantUpdateWithoutDocumentsInput>, Prisma.TenantUncheckedUpdateWithoutDocumentsInput>;
};
export type TenantCreateNestedOneWithoutChangeRequestsInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutChangeRequestsInput, Prisma.TenantUncheckedCreateWithoutChangeRequestsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutChangeRequestsInput;
    connect?: Prisma.TenantWhereUniqueInput;
};
export type TenantUpdateOneRequiredWithoutChangeRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutChangeRequestsInput, Prisma.TenantUncheckedCreateWithoutChangeRequestsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutChangeRequestsInput;
    upsert?: Prisma.TenantUpsertWithoutChangeRequestsInput;
    connect?: Prisma.TenantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TenantUpdateToOneWithWhereWithoutChangeRequestsInput, Prisma.TenantUpdateWithoutChangeRequestsInput>, Prisma.TenantUncheckedUpdateWithoutChangeRequestsInput>;
};
export type TenantCreateNestedOneWithoutPeriodicReviewsInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutPeriodicReviewsInput, Prisma.TenantUncheckedCreateWithoutPeriodicReviewsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutPeriodicReviewsInput;
    connect?: Prisma.TenantWhereUniqueInput;
};
export type TenantUpdateOneRequiredWithoutPeriodicReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutPeriodicReviewsInput, Prisma.TenantUncheckedCreateWithoutPeriodicReviewsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutPeriodicReviewsInput;
    upsert?: Prisma.TenantUpsertWithoutPeriodicReviewsInput;
    connect?: Prisma.TenantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TenantUpdateToOneWithWhereWithoutPeriodicReviewsInput, Prisma.TenantUpdateWithoutPeriodicReviewsInput>, Prisma.TenantUncheckedUpdateWithoutPeriodicReviewsInput>;
};
export type TenantCreateNestedOneWithoutFilesInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutFilesInput, Prisma.TenantUncheckedCreateWithoutFilesInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutFilesInput;
    connect?: Prisma.TenantWhereUniqueInput;
};
export type TenantUpdateOneRequiredWithoutFilesNestedInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutFilesInput, Prisma.TenantUncheckedCreateWithoutFilesInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutFilesInput;
    upsert?: Prisma.TenantUpsertWithoutFilesInput;
    connect?: Prisma.TenantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TenantUpdateToOneWithWhereWithoutFilesInput, Prisma.TenantUpdateWithoutFilesInput>, Prisma.TenantUncheckedUpdateWithoutFilesInput>;
};
export type TenantCreateNestedOneWithoutFormTemplatesInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutFormTemplatesInput, Prisma.TenantUncheckedCreateWithoutFormTemplatesInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutFormTemplatesInput;
    connect?: Prisma.TenantWhereUniqueInput;
};
export type TenantUpdateOneRequiredWithoutFormTemplatesNestedInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutFormTemplatesInput, Prisma.TenantUncheckedCreateWithoutFormTemplatesInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutFormTemplatesInput;
    upsert?: Prisma.TenantUpsertWithoutFormTemplatesInput;
    connect?: Prisma.TenantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TenantUpdateToOneWithWhereWithoutFormTemplatesInput, Prisma.TenantUpdateWithoutFormTemplatesInput>, Prisma.TenantUncheckedUpdateWithoutFormTemplatesInput>;
};
export type TenantCreateNestedOneWithoutQualityRecordsInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutQualityRecordsInput, Prisma.TenantUncheckedCreateWithoutQualityRecordsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutQualityRecordsInput;
    connect?: Prisma.TenantWhereUniqueInput;
};
export type TenantUpdateOneRequiredWithoutQualityRecordsNestedInput = {
    create?: Prisma.XOR<Prisma.TenantCreateWithoutQualityRecordsInput, Prisma.TenantUncheckedCreateWithoutQualityRecordsInput>;
    connectOrCreate?: Prisma.TenantCreateOrConnectWithoutQualityRecordsInput;
    upsert?: Prisma.TenantUpsertWithoutQualityRecordsInput;
    connect?: Prisma.TenantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TenantUpdateToOneWithWhereWithoutQualityRecordsInput, Prisma.TenantUpdateWithoutQualityRecordsInput>, Prisma.TenantUncheckedUpdateWithoutQualityRecordsInput>;
};
export type TenantCreateWithoutUsersInput = {
    id?: string;
    name: string;
    slug: string;
    subdomain: string;
    status?: $Enums.TenantStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.DocumentCreateNestedManyWithoutTenantInput;
    changeRequests?: Prisma.ChangeRequestCreateNestedManyWithoutTenantInput;
    periodicReviews?: Prisma.PeriodicReviewCreateNestedManyWithoutTenantInput;
    files?: Prisma.FileAssetCreateNestedManyWithoutTenantInput;
    formTemplates?: Prisma.FormTemplateCreateNestedManyWithoutTenantInput;
    qualityRecords?: Prisma.QualityRecordCreateNestedManyWithoutTenantInput;
};
export type TenantUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    slug: string;
    subdomain: string;
    status?: $Enums.TenantStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutTenantInput;
    changeRequests?: Prisma.ChangeRequestUncheckedCreateNestedManyWithoutTenantInput;
    periodicReviews?: Prisma.PeriodicReviewUncheckedCreateNestedManyWithoutTenantInput;
    files?: Prisma.FileAssetUncheckedCreateNestedManyWithoutTenantInput;
    formTemplates?: Prisma.FormTemplateUncheckedCreateNestedManyWithoutTenantInput;
    qualityRecords?: Prisma.QualityRecordUncheckedCreateNestedManyWithoutTenantInput;
};
export type TenantCreateOrConnectWithoutUsersInput = {
    where: Prisma.TenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantCreateWithoutUsersInput, Prisma.TenantUncheckedCreateWithoutUsersInput>;
};
export type TenantUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.TenantUpdateWithoutUsersInput, Prisma.TenantUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.TenantCreateWithoutUsersInput, Prisma.TenantUncheckedCreateWithoutUsersInput>;
    where?: Prisma.TenantWhereInput;
};
export type TenantUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.TenantWhereInput;
    data: Prisma.XOR<Prisma.TenantUpdateWithoutUsersInput, Prisma.TenantUncheckedUpdateWithoutUsersInput>;
};
export type TenantUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subdomain?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DocumentUpdateManyWithoutTenantNestedInput;
    changeRequests?: Prisma.ChangeRequestUpdateManyWithoutTenantNestedInput;
    periodicReviews?: Prisma.PeriodicReviewUpdateManyWithoutTenantNestedInput;
    files?: Prisma.FileAssetUpdateManyWithoutTenantNestedInput;
    formTemplates?: Prisma.FormTemplateUpdateManyWithoutTenantNestedInput;
    qualityRecords?: Prisma.QualityRecordUpdateManyWithoutTenantNestedInput;
};
export type TenantUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subdomain?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutTenantNestedInput;
    changeRequests?: Prisma.ChangeRequestUncheckedUpdateManyWithoutTenantNestedInput;
    periodicReviews?: Prisma.PeriodicReviewUncheckedUpdateManyWithoutTenantNestedInput;
    files?: Prisma.FileAssetUncheckedUpdateManyWithoutTenantNestedInput;
    formTemplates?: Prisma.FormTemplateUncheckedUpdateManyWithoutTenantNestedInput;
    qualityRecords?: Prisma.QualityRecordUncheckedUpdateManyWithoutTenantNestedInput;
};
export type TenantCreateWithoutDocumentsInput = {
    id?: string;
    name: string;
    slug: string;
    subdomain: string;
    status?: $Enums.TenantStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutTenantInput;
    changeRequests?: Prisma.ChangeRequestCreateNestedManyWithoutTenantInput;
    periodicReviews?: Prisma.PeriodicReviewCreateNestedManyWithoutTenantInput;
    files?: Prisma.FileAssetCreateNestedManyWithoutTenantInput;
    formTemplates?: Prisma.FormTemplateCreateNestedManyWithoutTenantInput;
    qualityRecords?: Prisma.QualityRecordCreateNestedManyWithoutTenantInput;
};
export type TenantUncheckedCreateWithoutDocumentsInput = {
    id?: string;
    name: string;
    slug: string;
    subdomain: string;
    status?: $Enums.TenantStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutTenantInput;
    changeRequests?: Prisma.ChangeRequestUncheckedCreateNestedManyWithoutTenantInput;
    periodicReviews?: Prisma.PeriodicReviewUncheckedCreateNestedManyWithoutTenantInput;
    files?: Prisma.FileAssetUncheckedCreateNestedManyWithoutTenantInput;
    formTemplates?: Prisma.FormTemplateUncheckedCreateNestedManyWithoutTenantInput;
    qualityRecords?: Prisma.QualityRecordUncheckedCreateNestedManyWithoutTenantInput;
};
export type TenantCreateOrConnectWithoutDocumentsInput = {
    where: Prisma.TenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantCreateWithoutDocumentsInput, Prisma.TenantUncheckedCreateWithoutDocumentsInput>;
};
export type TenantUpsertWithoutDocumentsInput = {
    update: Prisma.XOR<Prisma.TenantUpdateWithoutDocumentsInput, Prisma.TenantUncheckedUpdateWithoutDocumentsInput>;
    create: Prisma.XOR<Prisma.TenantCreateWithoutDocumentsInput, Prisma.TenantUncheckedCreateWithoutDocumentsInput>;
    where?: Prisma.TenantWhereInput;
};
export type TenantUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: Prisma.TenantWhereInput;
    data: Prisma.XOR<Prisma.TenantUpdateWithoutDocumentsInput, Prisma.TenantUncheckedUpdateWithoutDocumentsInput>;
};
export type TenantUpdateWithoutDocumentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subdomain?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutTenantNestedInput;
    changeRequests?: Prisma.ChangeRequestUpdateManyWithoutTenantNestedInput;
    periodicReviews?: Prisma.PeriodicReviewUpdateManyWithoutTenantNestedInput;
    files?: Prisma.FileAssetUpdateManyWithoutTenantNestedInput;
    formTemplates?: Prisma.FormTemplateUpdateManyWithoutTenantNestedInput;
    qualityRecords?: Prisma.QualityRecordUpdateManyWithoutTenantNestedInput;
};
export type TenantUncheckedUpdateWithoutDocumentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subdomain?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput;
    changeRequests?: Prisma.ChangeRequestUncheckedUpdateManyWithoutTenantNestedInput;
    periodicReviews?: Prisma.PeriodicReviewUncheckedUpdateManyWithoutTenantNestedInput;
    files?: Prisma.FileAssetUncheckedUpdateManyWithoutTenantNestedInput;
    formTemplates?: Prisma.FormTemplateUncheckedUpdateManyWithoutTenantNestedInput;
    qualityRecords?: Prisma.QualityRecordUncheckedUpdateManyWithoutTenantNestedInput;
};
export type TenantCreateWithoutChangeRequestsInput = {
    id?: string;
    name: string;
    slug: string;
    subdomain: string;
    status?: $Enums.TenantStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutTenantInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutTenantInput;
    periodicReviews?: Prisma.PeriodicReviewCreateNestedManyWithoutTenantInput;
    files?: Prisma.FileAssetCreateNestedManyWithoutTenantInput;
    formTemplates?: Prisma.FormTemplateCreateNestedManyWithoutTenantInput;
    qualityRecords?: Prisma.QualityRecordCreateNestedManyWithoutTenantInput;
};
export type TenantUncheckedCreateWithoutChangeRequestsInput = {
    id?: string;
    name: string;
    slug: string;
    subdomain: string;
    status?: $Enums.TenantStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutTenantInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutTenantInput;
    periodicReviews?: Prisma.PeriodicReviewUncheckedCreateNestedManyWithoutTenantInput;
    files?: Prisma.FileAssetUncheckedCreateNestedManyWithoutTenantInput;
    formTemplates?: Prisma.FormTemplateUncheckedCreateNestedManyWithoutTenantInput;
    qualityRecords?: Prisma.QualityRecordUncheckedCreateNestedManyWithoutTenantInput;
};
export type TenantCreateOrConnectWithoutChangeRequestsInput = {
    where: Prisma.TenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantCreateWithoutChangeRequestsInput, Prisma.TenantUncheckedCreateWithoutChangeRequestsInput>;
};
export type TenantUpsertWithoutChangeRequestsInput = {
    update: Prisma.XOR<Prisma.TenantUpdateWithoutChangeRequestsInput, Prisma.TenantUncheckedUpdateWithoutChangeRequestsInput>;
    create: Prisma.XOR<Prisma.TenantCreateWithoutChangeRequestsInput, Prisma.TenantUncheckedCreateWithoutChangeRequestsInput>;
    where?: Prisma.TenantWhereInput;
};
export type TenantUpdateToOneWithWhereWithoutChangeRequestsInput = {
    where?: Prisma.TenantWhereInput;
    data: Prisma.XOR<Prisma.TenantUpdateWithoutChangeRequestsInput, Prisma.TenantUncheckedUpdateWithoutChangeRequestsInput>;
};
export type TenantUpdateWithoutChangeRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subdomain?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutTenantNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutTenantNestedInput;
    periodicReviews?: Prisma.PeriodicReviewUpdateManyWithoutTenantNestedInput;
    files?: Prisma.FileAssetUpdateManyWithoutTenantNestedInput;
    formTemplates?: Prisma.FormTemplateUpdateManyWithoutTenantNestedInput;
    qualityRecords?: Prisma.QualityRecordUpdateManyWithoutTenantNestedInput;
};
export type TenantUncheckedUpdateWithoutChangeRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subdomain?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutTenantNestedInput;
    periodicReviews?: Prisma.PeriodicReviewUncheckedUpdateManyWithoutTenantNestedInput;
    files?: Prisma.FileAssetUncheckedUpdateManyWithoutTenantNestedInput;
    formTemplates?: Prisma.FormTemplateUncheckedUpdateManyWithoutTenantNestedInput;
    qualityRecords?: Prisma.QualityRecordUncheckedUpdateManyWithoutTenantNestedInput;
};
export type TenantCreateWithoutPeriodicReviewsInput = {
    id?: string;
    name: string;
    slug: string;
    subdomain: string;
    status?: $Enums.TenantStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutTenantInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutTenantInput;
    changeRequests?: Prisma.ChangeRequestCreateNestedManyWithoutTenantInput;
    files?: Prisma.FileAssetCreateNestedManyWithoutTenantInput;
    formTemplates?: Prisma.FormTemplateCreateNestedManyWithoutTenantInput;
    qualityRecords?: Prisma.QualityRecordCreateNestedManyWithoutTenantInput;
};
export type TenantUncheckedCreateWithoutPeriodicReviewsInput = {
    id?: string;
    name: string;
    slug: string;
    subdomain: string;
    status?: $Enums.TenantStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutTenantInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutTenantInput;
    changeRequests?: Prisma.ChangeRequestUncheckedCreateNestedManyWithoutTenantInput;
    files?: Prisma.FileAssetUncheckedCreateNestedManyWithoutTenantInput;
    formTemplates?: Prisma.FormTemplateUncheckedCreateNestedManyWithoutTenantInput;
    qualityRecords?: Prisma.QualityRecordUncheckedCreateNestedManyWithoutTenantInput;
};
export type TenantCreateOrConnectWithoutPeriodicReviewsInput = {
    where: Prisma.TenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantCreateWithoutPeriodicReviewsInput, Prisma.TenantUncheckedCreateWithoutPeriodicReviewsInput>;
};
export type TenantUpsertWithoutPeriodicReviewsInput = {
    update: Prisma.XOR<Prisma.TenantUpdateWithoutPeriodicReviewsInput, Prisma.TenantUncheckedUpdateWithoutPeriodicReviewsInput>;
    create: Prisma.XOR<Prisma.TenantCreateWithoutPeriodicReviewsInput, Prisma.TenantUncheckedCreateWithoutPeriodicReviewsInput>;
    where?: Prisma.TenantWhereInput;
};
export type TenantUpdateToOneWithWhereWithoutPeriodicReviewsInput = {
    where?: Prisma.TenantWhereInput;
    data: Prisma.XOR<Prisma.TenantUpdateWithoutPeriodicReviewsInput, Prisma.TenantUncheckedUpdateWithoutPeriodicReviewsInput>;
};
export type TenantUpdateWithoutPeriodicReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subdomain?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutTenantNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutTenantNestedInput;
    changeRequests?: Prisma.ChangeRequestUpdateManyWithoutTenantNestedInput;
    files?: Prisma.FileAssetUpdateManyWithoutTenantNestedInput;
    formTemplates?: Prisma.FormTemplateUpdateManyWithoutTenantNestedInput;
    qualityRecords?: Prisma.QualityRecordUpdateManyWithoutTenantNestedInput;
};
export type TenantUncheckedUpdateWithoutPeriodicReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subdomain?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutTenantNestedInput;
    changeRequests?: Prisma.ChangeRequestUncheckedUpdateManyWithoutTenantNestedInput;
    files?: Prisma.FileAssetUncheckedUpdateManyWithoutTenantNestedInput;
    formTemplates?: Prisma.FormTemplateUncheckedUpdateManyWithoutTenantNestedInput;
    qualityRecords?: Prisma.QualityRecordUncheckedUpdateManyWithoutTenantNestedInput;
};
export type TenantCreateWithoutFilesInput = {
    id?: string;
    name: string;
    slug: string;
    subdomain: string;
    status?: $Enums.TenantStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutTenantInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutTenantInput;
    changeRequests?: Prisma.ChangeRequestCreateNestedManyWithoutTenantInput;
    periodicReviews?: Prisma.PeriodicReviewCreateNestedManyWithoutTenantInput;
    formTemplates?: Prisma.FormTemplateCreateNestedManyWithoutTenantInput;
    qualityRecords?: Prisma.QualityRecordCreateNestedManyWithoutTenantInput;
};
export type TenantUncheckedCreateWithoutFilesInput = {
    id?: string;
    name: string;
    slug: string;
    subdomain: string;
    status?: $Enums.TenantStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutTenantInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutTenantInput;
    changeRequests?: Prisma.ChangeRequestUncheckedCreateNestedManyWithoutTenantInput;
    periodicReviews?: Prisma.PeriodicReviewUncheckedCreateNestedManyWithoutTenantInput;
    formTemplates?: Prisma.FormTemplateUncheckedCreateNestedManyWithoutTenantInput;
    qualityRecords?: Prisma.QualityRecordUncheckedCreateNestedManyWithoutTenantInput;
};
export type TenantCreateOrConnectWithoutFilesInput = {
    where: Prisma.TenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantCreateWithoutFilesInput, Prisma.TenantUncheckedCreateWithoutFilesInput>;
};
export type TenantUpsertWithoutFilesInput = {
    update: Prisma.XOR<Prisma.TenantUpdateWithoutFilesInput, Prisma.TenantUncheckedUpdateWithoutFilesInput>;
    create: Prisma.XOR<Prisma.TenantCreateWithoutFilesInput, Prisma.TenantUncheckedCreateWithoutFilesInput>;
    where?: Prisma.TenantWhereInput;
};
export type TenantUpdateToOneWithWhereWithoutFilesInput = {
    where?: Prisma.TenantWhereInput;
    data: Prisma.XOR<Prisma.TenantUpdateWithoutFilesInput, Prisma.TenantUncheckedUpdateWithoutFilesInput>;
};
export type TenantUpdateWithoutFilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subdomain?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutTenantNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutTenantNestedInput;
    changeRequests?: Prisma.ChangeRequestUpdateManyWithoutTenantNestedInput;
    periodicReviews?: Prisma.PeriodicReviewUpdateManyWithoutTenantNestedInput;
    formTemplates?: Prisma.FormTemplateUpdateManyWithoutTenantNestedInput;
    qualityRecords?: Prisma.QualityRecordUpdateManyWithoutTenantNestedInput;
};
export type TenantUncheckedUpdateWithoutFilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subdomain?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutTenantNestedInput;
    changeRequests?: Prisma.ChangeRequestUncheckedUpdateManyWithoutTenantNestedInput;
    periodicReviews?: Prisma.PeriodicReviewUncheckedUpdateManyWithoutTenantNestedInput;
    formTemplates?: Prisma.FormTemplateUncheckedUpdateManyWithoutTenantNestedInput;
    qualityRecords?: Prisma.QualityRecordUncheckedUpdateManyWithoutTenantNestedInput;
};
export type TenantCreateWithoutFormTemplatesInput = {
    id?: string;
    name: string;
    slug: string;
    subdomain: string;
    status?: $Enums.TenantStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutTenantInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutTenantInput;
    changeRequests?: Prisma.ChangeRequestCreateNestedManyWithoutTenantInput;
    periodicReviews?: Prisma.PeriodicReviewCreateNestedManyWithoutTenantInput;
    files?: Prisma.FileAssetCreateNestedManyWithoutTenantInput;
    qualityRecords?: Prisma.QualityRecordCreateNestedManyWithoutTenantInput;
};
export type TenantUncheckedCreateWithoutFormTemplatesInput = {
    id?: string;
    name: string;
    slug: string;
    subdomain: string;
    status?: $Enums.TenantStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutTenantInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutTenantInput;
    changeRequests?: Prisma.ChangeRequestUncheckedCreateNestedManyWithoutTenantInput;
    periodicReviews?: Prisma.PeriodicReviewUncheckedCreateNestedManyWithoutTenantInput;
    files?: Prisma.FileAssetUncheckedCreateNestedManyWithoutTenantInput;
    qualityRecords?: Prisma.QualityRecordUncheckedCreateNestedManyWithoutTenantInput;
};
export type TenantCreateOrConnectWithoutFormTemplatesInput = {
    where: Prisma.TenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantCreateWithoutFormTemplatesInput, Prisma.TenantUncheckedCreateWithoutFormTemplatesInput>;
};
export type TenantUpsertWithoutFormTemplatesInput = {
    update: Prisma.XOR<Prisma.TenantUpdateWithoutFormTemplatesInput, Prisma.TenantUncheckedUpdateWithoutFormTemplatesInput>;
    create: Prisma.XOR<Prisma.TenantCreateWithoutFormTemplatesInput, Prisma.TenantUncheckedCreateWithoutFormTemplatesInput>;
    where?: Prisma.TenantWhereInput;
};
export type TenantUpdateToOneWithWhereWithoutFormTemplatesInput = {
    where?: Prisma.TenantWhereInput;
    data: Prisma.XOR<Prisma.TenantUpdateWithoutFormTemplatesInput, Prisma.TenantUncheckedUpdateWithoutFormTemplatesInput>;
};
export type TenantUpdateWithoutFormTemplatesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subdomain?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutTenantNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutTenantNestedInput;
    changeRequests?: Prisma.ChangeRequestUpdateManyWithoutTenantNestedInput;
    periodicReviews?: Prisma.PeriodicReviewUpdateManyWithoutTenantNestedInput;
    files?: Prisma.FileAssetUpdateManyWithoutTenantNestedInput;
    qualityRecords?: Prisma.QualityRecordUpdateManyWithoutTenantNestedInput;
};
export type TenantUncheckedUpdateWithoutFormTemplatesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subdomain?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutTenantNestedInput;
    changeRequests?: Prisma.ChangeRequestUncheckedUpdateManyWithoutTenantNestedInput;
    periodicReviews?: Prisma.PeriodicReviewUncheckedUpdateManyWithoutTenantNestedInput;
    files?: Prisma.FileAssetUncheckedUpdateManyWithoutTenantNestedInput;
    qualityRecords?: Prisma.QualityRecordUncheckedUpdateManyWithoutTenantNestedInput;
};
export type TenantCreateWithoutQualityRecordsInput = {
    id?: string;
    name: string;
    slug: string;
    subdomain: string;
    status?: $Enums.TenantStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutTenantInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutTenantInput;
    changeRequests?: Prisma.ChangeRequestCreateNestedManyWithoutTenantInput;
    periodicReviews?: Prisma.PeriodicReviewCreateNestedManyWithoutTenantInput;
    files?: Prisma.FileAssetCreateNestedManyWithoutTenantInput;
    formTemplates?: Prisma.FormTemplateCreateNestedManyWithoutTenantInput;
};
export type TenantUncheckedCreateWithoutQualityRecordsInput = {
    id?: string;
    name: string;
    slug: string;
    subdomain: string;
    status?: $Enums.TenantStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutTenantInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutTenantInput;
    changeRequests?: Prisma.ChangeRequestUncheckedCreateNestedManyWithoutTenantInput;
    periodicReviews?: Prisma.PeriodicReviewUncheckedCreateNestedManyWithoutTenantInput;
    files?: Prisma.FileAssetUncheckedCreateNestedManyWithoutTenantInput;
    formTemplates?: Prisma.FormTemplateUncheckedCreateNestedManyWithoutTenantInput;
};
export type TenantCreateOrConnectWithoutQualityRecordsInput = {
    where: Prisma.TenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantCreateWithoutQualityRecordsInput, Prisma.TenantUncheckedCreateWithoutQualityRecordsInput>;
};
export type TenantUpsertWithoutQualityRecordsInput = {
    update: Prisma.XOR<Prisma.TenantUpdateWithoutQualityRecordsInput, Prisma.TenantUncheckedUpdateWithoutQualityRecordsInput>;
    create: Prisma.XOR<Prisma.TenantCreateWithoutQualityRecordsInput, Prisma.TenantUncheckedCreateWithoutQualityRecordsInput>;
    where?: Prisma.TenantWhereInput;
};
export type TenantUpdateToOneWithWhereWithoutQualityRecordsInput = {
    where?: Prisma.TenantWhereInput;
    data: Prisma.XOR<Prisma.TenantUpdateWithoutQualityRecordsInput, Prisma.TenantUncheckedUpdateWithoutQualityRecordsInput>;
};
export type TenantUpdateWithoutQualityRecordsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subdomain?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutTenantNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutTenantNestedInput;
    changeRequests?: Prisma.ChangeRequestUpdateManyWithoutTenantNestedInput;
    periodicReviews?: Prisma.PeriodicReviewUpdateManyWithoutTenantNestedInput;
    files?: Prisma.FileAssetUpdateManyWithoutTenantNestedInput;
    formTemplates?: Prisma.FormTemplateUpdateManyWithoutTenantNestedInput;
};
export type TenantUncheckedUpdateWithoutQualityRecordsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subdomain?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTenantStatusFieldUpdateOperationsInput | $Enums.TenantStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutTenantNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutTenantNestedInput;
    changeRequests?: Prisma.ChangeRequestUncheckedUpdateManyWithoutTenantNestedInput;
    periodicReviews?: Prisma.PeriodicReviewUncheckedUpdateManyWithoutTenantNestedInput;
    files?: Prisma.FileAssetUncheckedUpdateManyWithoutTenantNestedInput;
    formTemplates?: Prisma.FormTemplateUncheckedUpdateManyWithoutTenantNestedInput;
};
export type TenantCountOutputType = {
    users: number;
    documents: number;
    changeRequests: number;
    periodicReviews: number;
    files: number;
    formTemplates: number;
    qualityRecords: number;
};
export type TenantCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | TenantCountOutputTypeCountUsersArgs;
    documents?: boolean | TenantCountOutputTypeCountDocumentsArgs;
    changeRequests?: boolean | TenantCountOutputTypeCountChangeRequestsArgs;
    periodicReviews?: boolean | TenantCountOutputTypeCountPeriodicReviewsArgs;
    files?: boolean | TenantCountOutputTypeCountFilesArgs;
    formTemplates?: boolean | TenantCountOutputTypeCountFormTemplatesArgs;
    qualityRecords?: boolean | TenantCountOutputTypeCountQualityRecordsArgs;
};
export type TenantCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantCountOutputTypeSelect<ExtArgs> | null;
};
export type TenantCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type TenantCountOutputTypeCountDocumentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
};
export type TenantCountOutputTypeCountChangeRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChangeRequestWhereInput;
};
export type TenantCountOutputTypeCountPeriodicReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PeriodicReviewWhereInput;
};
export type TenantCountOutputTypeCountFilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileAssetWhereInput;
};
export type TenantCountOutputTypeCountFormTemplatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormTemplateWhereInput;
};
export type TenantCountOutputTypeCountQualityRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QualityRecordWhereInput;
};
export type TenantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    subdomain?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    users?: boolean | Prisma.Tenant$usersArgs<ExtArgs>;
    documents?: boolean | Prisma.Tenant$documentsArgs<ExtArgs>;
    changeRequests?: boolean | Prisma.Tenant$changeRequestsArgs<ExtArgs>;
    periodicReviews?: boolean | Prisma.Tenant$periodicReviewsArgs<ExtArgs>;
    files?: boolean | Prisma.Tenant$filesArgs<ExtArgs>;
    formTemplates?: boolean | Prisma.Tenant$formTemplatesArgs<ExtArgs>;
    qualityRecords?: boolean | Prisma.Tenant$qualityRecordsArgs<ExtArgs>;
    _count?: boolean | Prisma.TenantCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tenant"]>;
export type TenantSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    subdomain?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["tenant"]>;
export type TenantSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    subdomain?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["tenant"]>;
export type TenantSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    subdomain?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TenantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "subdomain" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>;
export type TenantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.Tenant$usersArgs<ExtArgs>;
    documents?: boolean | Prisma.Tenant$documentsArgs<ExtArgs>;
    changeRequests?: boolean | Prisma.Tenant$changeRequestsArgs<ExtArgs>;
    periodicReviews?: boolean | Prisma.Tenant$periodicReviewsArgs<ExtArgs>;
    files?: boolean | Prisma.Tenant$filesArgs<ExtArgs>;
    formTemplates?: boolean | Prisma.Tenant$formTemplatesArgs<ExtArgs>;
    qualityRecords?: boolean | Prisma.Tenant$qualityRecordsArgs<ExtArgs>;
    _count?: boolean | Prisma.TenantCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TenantIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TenantIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TenantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Tenant";
    objects: {
        users: Prisma.$UserPayload<ExtArgs>[];
        documents: Prisma.$DocumentPayload<ExtArgs>[];
        changeRequests: Prisma.$ChangeRequestPayload<ExtArgs>[];
        periodicReviews: Prisma.$PeriodicReviewPayload<ExtArgs>[];
        files: Prisma.$FileAssetPayload<ExtArgs>[];
        formTemplates: Prisma.$FormTemplatePayload<ExtArgs>[];
        qualityRecords: Prisma.$QualityRecordPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        subdomain: string;
        status: $Enums.TenantStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["tenant"]>;
    composites: {};
};
export type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TenantPayload, S>;
export type TenantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TenantCountAggregateInputType | true;
};
export interface TenantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Tenant'];
        meta: {
            name: 'Tenant';
        };
    };
    findUnique<T extends TenantFindUniqueArgs>(args: Prisma.SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TenantFindFirstArgs>(args?: Prisma.SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TenantFindManyArgs>(args?: Prisma.SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TenantCreateArgs>(args: Prisma.SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TenantCreateManyArgs>(args?: Prisma.SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TenantDeleteArgs>(args: Prisma.SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TenantUpdateArgs>(args: Prisma.SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TenantDeleteManyArgs>(args?: Prisma.SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TenantUpdateManyArgs>(args: Prisma.SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TenantUpsertArgs>(args: Prisma.SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TenantCountArgs>(args?: Prisma.Subset<T, TenantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TenantCountAggregateOutputType> : number>;
    aggregate<T extends TenantAggregateArgs>(args: Prisma.Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>;
    groupBy<T extends TenantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TenantGroupByArgs['orderBy'];
    } : {
        orderBy?: TenantGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TenantFieldRefs;
}
export interface Prisma__TenantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.Tenant$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tenant$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    documents<T extends Prisma.Tenant$documentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tenant$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    changeRequests<T extends Prisma.Tenant$changeRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tenant$changeRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChangeRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    periodicReviews<T extends Prisma.Tenant$periodicReviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tenant$periodicReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PeriodicReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    files<T extends Prisma.Tenant$filesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tenant$filesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FileAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    formTemplates<T extends Prisma.Tenant$formTemplatesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tenant$formTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    qualityRecords<T extends Prisma.Tenant$qualityRecordsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tenant$qualityRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QualityRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TenantFieldRefs {
    readonly id: Prisma.FieldRef<"Tenant", 'String'>;
    readonly name: Prisma.FieldRef<"Tenant", 'String'>;
    readonly slug: Prisma.FieldRef<"Tenant", 'String'>;
    readonly subdomain: Prisma.FieldRef<"Tenant", 'String'>;
    readonly status: Prisma.FieldRef<"Tenant", 'TenantStatus'>;
    readonly createdAt: Prisma.FieldRef<"Tenant", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Tenant", 'DateTime'>;
}
export type TenantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    where: Prisma.TenantWhereUniqueInput;
};
export type TenantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    where: Prisma.TenantWhereUniqueInput;
};
export type TenantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    where?: Prisma.TenantWhereInput;
    orderBy?: Prisma.TenantOrderByWithRelationInput | Prisma.TenantOrderByWithRelationInput[];
    cursor?: Prisma.TenantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TenantScalarFieldEnum | Prisma.TenantScalarFieldEnum[];
};
export type TenantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    where?: Prisma.TenantWhereInput;
    orderBy?: Prisma.TenantOrderByWithRelationInput | Prisma.TenantOrderByWithRelationInput[];
    cursor?: Prisma.TenantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TenantScalarFieldEnum | Prisma.TenantScalarFieldEnum[];
};
export type TenantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    where?: Prisma.TenantWhereInput;
    orderBy?: Prisma.TenantOrderByWithRelationInput | Prisma.TenantOrderByWithRelationInput[];
    cursor?: Prisma.TenantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TenantScalarFieldEnum | Prisma.TenantScalarFieldEnum[];
};
export type TenantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TenantCreateInput, Prisma.TenantUncheckedCreateInput>;
};
export type TenantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TenantCreateManyInput | Prisma.TenantCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TenantCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    data: Prisma.TenantCreateManyInput | Prisma.TenantCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TenantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TenantUpdateInput, Prisma.TenantUncheckedUpdateInput>;
    where: Prisma.TenantWhereUniqueInput;
};
export type TenantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TenantUpdateManyMutationInput, Prisma.TenantUncheckedUpdateManyInput>;
    where?: Prisma.TenantWhereInput;
    limit?: number;
};
export type TenantUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TenantUpdateManyMutationInput, Prisma.TenantUncheckedUpdateManyInput>;
    where?: Prisma.TenantWhereInput;
    limit?: number;
};
export type TenantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    where: Prisma.TenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.TenantCreateInput, Prisma.TenantUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TenantUpdateInput, Prisma.TenantUncheckedUpdateInput>;
};
export type TenantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    where: Prisma.TenantWhereUniqueInput;
};
export type TenantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TenantWhereInput;
    limit?: number;
};
export type Tenant$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type Tenant$documentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Tenant$changeRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Tenant$periodicReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Tenant$filesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Tenant$formTemplatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Tenant$qualityRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TenantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
};
