import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DocumentRelationModel = runtime.Types.Result.DefaultSelection<Prisma.$DocumentRelationPayload>;
export type AggregateDocumentRelation = {
    _count: DocumentRelationCountAggregateOutputType | null;
    _min: DocumentRelationMinAggregateOutputType | null;
    _max: DocumentRelationMaxAggregateOutputType | null;
};
export type DocumentRelationMinAggregateOutputType = {
    id: string | null;
    fromDocumentId: string | null;
    toDocumentId: string | null;
    relationLabel: string | null;
};
export type DocumentRelationMaxAggregateOutputType = {
    id: string | null;
    fromDocumentId: string | null;
    toDocumentId: string | null;
    relationLabel: string | null;
};
export type DocumentRelationCountAggregateOutputType = {
    id: number;
    fromDocumentId: number;
    toDocumentId: number;
    relationLabel: number;
    _all: number;
};
export type DocumentRelationMinAggregateInputType = {
    id?: true;
    fromDocumentId?: true;
    toDocumentId?: true;
    relationLabel?: true;
};
export type DocumentRelationMaxAggregateInputType = {
    id?: true;
    fromDocumentId?: true;
    toDocumentId?: true;
    relationLabel?: true;
};
export type DocumentRelationCountAggregateInputType = {
    id?: true;
    fromDocumentId?: true;
    toDocumentId?: true;
    relationLabel?: true;
    _all?: true;
};
export type DocumentRelationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentRelationWhereInput;
    orderBy?: Prisma.DocumentRelationOrderByWithRelationInput | Prisma.DocumentRelationOrderByWithRelationInput[];
    cursor?: Prisma.DocumentRelationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DocumentRelationCountAggregateInputType;
    _min?: DocumentRelationMinAggregateInputType;
    _max?: DocumentRelationMaxAggregateInputType;
};
export type GetDocumentRelationAggregateType<T extends DocumentRelationAggregateArgs> = {
    [P in keyof T & keyof AggregateDocumentRelation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDocumentRelation[P]> : Prisma.GetScalarType<T[P], AggregateDocumentRelation[P]>;
};
export type DocumentRelationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentRelationWhereInput;
    orderBy?: Prisma.DocumentRelationOrderByWithAggregationInput | Prisma.DocumentRelationOrderByWithAggregationInput[];
    by: Prisma.DocumentRelationScalarFieldEnum[] | Prisma.DocumentRelationScalarFieldEnum;
    having?: Prisma.DocumentRelationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentRelationCountAggregateInputType | true;
    _min?: DocumentRelationMinAggregateInputType;
    _max?: DocumentRelationMaxAggregateInputType;
};
export type DocumentRelationGroupByOutputType = {
    id: string;
    fromDocumentId: string;
    toDocumentId: string;
    relationLabel: string | null;
    _count: DocumentRelationCountAggregateOutputType | null;
    _min: DocumentRelationMinAggregateOutputType | null;
    _max: DocumentRelationMaxAggregateOutputType | null;
};
export type GetDocumentRelationGroupByPayload<T extends DocumentRelationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DocumentRelationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DocumentRelationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DocumentRelationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DocumentRelationGroupByOutputType[P]>;
}>>;
export type DocumentRelationWhereInput = {
    AND?: Prisma.DocumentRelationWhereInput | Prisma.DocumentRelationWhereInput[];
    OR?: Prisma.DocumentRelationWhereInput[];
    NOT?: Prisma.DocumentRelationWhereInput | Prisma.DocumentRelationWhereInput[];
    id?: Prisma.StringFilter<"DocumentRelation"> | string;
    fromDocumentId?: Prisma.StringFilter<"DocumentRelation"> | string;
    toDocumentId?: Prisma.StringFilter<"DocumentRelation"> | string;
    relationLabel?: Prisma.StringNullableFilter<"DocumentRelation"> | string | null;
    fromDocument?: Prisma.XOR<Prisma.DocumentScalarRelationFilter, Prisma.DocumentWhereInput>;
    toDocument?: Prisma.XOR<Prisma.DocumentScalarRelationFilter, Prisma.DocumentWhereInput>;
};
export type DocumentRelationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fromDocumentId?: Prisma.SortOrder;
    toDocumentId?: Prisma.SortOrder;
    relationLabel?: Prisma.SortOrderInput | Prisma.SortOrder;
    fromDocument?: Prisma.DocumentOrderByWithRelationInput;
    toDocument?: Prisma.DocumentOrderByWithRelationInput;
};
export type DocumentRelationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    fromDocumentId_toDocumentId?: Prisma.DocumentRelationFromDocumentIdToDocumentIdCompoundUniqueInput;
    AND?: Prisma.DocumentRelationWhereInput | Prisma.DocumentRelationWhereInput[];
    OR?: Prisma.DocumentRelationWhereInput[];
    NOT?: Prisma.DocumentRelationWhereInput | Prisma.DocumentRelationWhereInput[];
    fromDocumentId?: Prisma.StringFilter<"DocumentRelation"> | string;
    toDocumentId?: Prisma.StringFilter<"DocumentRelation"> | string;
    relationLabel?: Prisma.StringNullableFilter<"DocumentRelation"> | string | null;
    fromDocument?: Prisma.XOR<Prisma.DocumentScalarRelationFilter, Prisma.DocumentWhereInput>;
    toDocument?: Prisma.XOR<Prisma.DocumentScalarRelationFilter, Prisma.DocumentWhereInput>;
}, "id" | "fromDocumentId_toDocumentId">;
export type DocumentRelationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fromDocumentId?: Prisma.SortOrder;
    toDocumentId?: Prisma.SortOrder;
    relationLabel?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.DocumentRelationCountOrderByAggregateInput;
    _max?: Prisma.DocumentRelationMaxOrderByAggregateInput;
    _min?: Prisma.DocumentRelationMinOrderByAggregateInput;
};
export type DocumentRelationScalarWhereWithAggregatesInput = {
    AND?: Prisma.DocumentRelationScalarWhereWithAggregatesInput | Prisma.DocumentRelationScalarWhereWithAggregatesInput[];
    OR?: Prisma.DocumentRelationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DocumentRelationScalarWhereWithAggregatesInput | Prisma.DocumentRelationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DocumentRelation"> | string;
    fromDocumentId?: Prisma.StringWithAggregatesFilter<"DocumentRelation"> | string;
    toDocumentId?: Prisma.StringWithAggregatesFilter<"DocumentRelation"> | string;
    relationLabel?: Prisma.StringNullableWithAggregatesFilter<"DocumentRelation"> | string | null;
};
export type DocumentRelationCreateInput = {
    id?: string;
    relationLabel?: string | null;
    fromDocument: Prisma.DocumentCreateNestedOneWithoutRelatedFromInput;
    toDocument: Prisma.DocumentCreateNestedOneWithoutRelatedToInput;
};
export type DocumentRelationUncheckedCreateInput = {
    id?: string;
    fromDocumentId: string;
    toDocumentId: string;
    relationLabel?: string | null;
};
export type DocumentRelationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    relationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fromDocument?: Prisma.DocumentUpdateOneRequiredWithoutRelatedFromNestedInput;
    toDocument?: Prisma.DocumentUpdateOneRequiredWithoutRelatedToNestedInput;
};
export type DocumentRelationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromDocumentId?: Prisma.StringFieldUpdateOperationsInput | string;
    toDocumentId?: Prisma.StringFieldUpdateOperationsInput | string;
    relationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DocumentRelationCreateManyInput = {
    id?: string;
    fromDocumentId: string;
    toDocumentId: string;
    relationLabel?: string | null;
};
export type DocumentRelationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    relationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DocumentRelationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromDocumentId?: Prisma.StringFieldUpdateOperationsInput | string;
    toDocumentId?: Prisma.StringFieldUpdateOperationsInput | string;
    relationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DocumentRelationListRelationFilter = {
    every?: Prisma.DocumentRelationWhereInput;
    some?: Prisma.DocumentRelationWhereInput;
    none?: Prisma.DocumentRelationWhereInput;
};
export type DocumentRelationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DocumentRelationFromDocumentIdToDocumentIdCompoundUniqueInput = {
    fromDocumentId: string;
    toDocumentId: string;
};
export type DocumentRelationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fromDocumentId?: Prisma.SortOrder;
    toDocumentId?: Prisma.SortOrder;
    relationLabel?: Prisma.SortOrder;
};
export type DocumentRelationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fromDocumentId?: Prisma.SortOrder;
    toDocumentId?: Prisma.SortOrder;
    relationLabel?: Prisma.SortOrder;
};
export type DocumentRelationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fromDocumentId?: Prisma.SortOrder;
    toDocumentId?: Prisma.SortOrder;
    relationLabel?: Prisma.SortOrder;
};
export type DocumentRelationCreateNestedManyWithoutFromDocumentInput = {
    create?: Prisma.XOR<Prisma.DocumentRelationCreateWithoutFromDocumentInput, Prisma.DocumentRelationUncheckedCreateWithoutFromDocumentInput> | Prisma.DocumentRelationCreateWithoutFromDocumentInput[] | Prisma.DocumentRelationUncheckedCreateWithoutFromDocumentInput[];
    connectOrCreate?: Prisma.DocumentRelationCreateOrConnectWithoutFromDocumentInput | Prisma.DocumentRelationCreateOrConnectWithoutFromDocumentInput[];
    createMany?: Prisma.DocumentRelationCreateManyFromDocumentInputEnvelope;
    connect?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
};
export type DocumentRelationCreateNestedManyWithoutToDocumentInput = {
    create?: Prisma.XOR<Prisma.DocumentRelationCreateWithoutToDocumentInput, Prisma.DocumentRelationUncheckedCreateWithoutToDocumentInput> | Prisma.DocumentRelationCreateWithoutToDocumentInput[] | Prisma.DocumentRelationUncheckedCreateWithoutToDocumentInput[];
    connectOrCreate?: Prisma.DocumentRelationCreateOrConnectWithoutToDocumentInput | Prisma.DocumentRelationCreateOrConnectWithoutToDocumentInput[];
    createMany?: Prisma.DocumentRelationCreateManyToDocumentInputEnvelope;
    connect?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
};
export type DocumentRelationUncheckedCreateNestedManyWithoutFromDocumentInput = {
    create?: Prisma.XOR<Prisma.DocumentRelationCreateWithoutFromDocumentInput, Prisma.DocumentRelationUncheckedCreateWithoutFromDocumentInput> | Prisma.DocumentRelationCreateWithoutFromDocumentInput[] | Prisma.DocumentRelationUncheckedCreateWithoutFromDocumentInput[];
    connectOrCreate?: Prisma.DocumentRelationCreateOrConnectWithoutFromDocumentInput | Prisma.DocumentRelationCreateOrConnectWithoutFromDocumentInput[];
    createMany?: Prisma.DocumentRelationCreateManyFromDocumentInputEnvelope;
    connect?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
};
export type DocumentRelationUncheckedCreateNestedManyWithoutToDocumentInput = {
    create?: Prisma.XOR<Prisma.DocumentRelationCreateWithoutToDocumentInput, Prisma.DocumentRelationUncheckedCreateWithoutToDocumentInput> | Prisma.DocumentRelationCreateWithoutToDocumentInput[] | Prisma.DocumentRelationUncheckedCreateWithoutToDocumentInput[];
    connectOrCreate?: Prisma.DocumentRelationCreateOrConnectWithoutToDocumentInput | Prisma.DocumentRelationCreateOrConnectWithoutToDocumentInput[];
    createMany?: Prisma.DocumentRelationCreateManyToDocumentInputEnvelope;
    connect?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
};
export type DocumentRelationUpdateManyWithoutFromDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentRelationCreateWithoutFromDocumentInput, Prisma.DocumentRelationUncheckedCreateWithoutFromDocumentInput> | Prisma.DocumentRelationCreateWithoutFromDocumentInput[] | Prisma.DocumentRelationUncheckedCreateWithoutFromDocumentInput[];
    connectOrCreate?: Prisma.DocumentRelationCreateOrConnectWithoutFromDocumentInput | Prisma.DocumentRelationCreateOrConnectWithoutFromDocumentInput[];
    upsert?: Prisma.DocumentRelationUpsertWithWhereUniqueWithoutFromDocumentInput | Prisma.DocumentRelationUpsertWithWhereUniqueWithoutFromDocumentInput[];
    createMany?: Prisma.DocumentRelationCreateManyFromDocumentInputEnvelope;
    set?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
    disconnect?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
    delete?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
    connect?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
    update?: Prisma.DocumentRelationUpdateWithWhereUniqueWithoutFromDocumentInput | Prisma.DocumentRelationUpdateWithWhereUniqueWithoutFromDocumentInput[];
    updateMany?: Prisma.DocumentRelationUpdateManyWithWhereWithoutFromDocumentInput | Prisma.DocumentRelationUpdateManyWithWhereWithoutFromDocumentInput[];
    deleteMany?: Prisma.DocumentRelationScalarWhereInput | Prisma.DocumentRelationScalarWhereInput[];
};
export type DocumentRelationUpdateManyWithoutToDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentRelationCreateWithoutToDocumentInput, Prisma.DocumentRelationUncheckedCreateWithoutToDocumentInput> | Prisma.DocumentRelationCreateWithoutToDocumentInput[] | Prisma.DocumentRelationUncheckedCreateWithoutToDocumentInput[];
    connectOrCreate?: Prisma.DocumentRelationCreateOrConnectWithoutToDocumentInput | Prisma.DocumentRelationCreateOrConnectWithoutToDocumentInput[];
    upsert?: Prisma.DocumentRelationUpsertWithWhereUniqueWithoutToDocumentInput | Prisma.DocumentRelationUpsertWithWhereUniqueWithoutToDocumentInput[];
    createMany?: Prisma.DocumentRelationCreateManyToDocumentInputEnvelope;
    set?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
    disconnect?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
    delete?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
    connect?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
    update?: Prisma.DocumentRelationUpdateWithWhereUniqueWithoutToDocumentInput | Prisma.DocumentRelationUpdateWithWhereUniqueWithoutToDocumentInput[];
    updateMany?: Prisma.DocumentRelationUpdateManyWithWhereWithoutToDocumentInput | Prisma.DocumentRelationUpdateManyWithWhereWithoutToDocumentInput[];
    deleteMany?: Prisma.DocumentRelationScalarWhereInput | Prisma.DocumentRelationScalarWhereInput[];
};
export type DocumentRelationUncheckedUpdateManyWithoutFromDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentRelationCreateWithoutFromDocumentInput, Prisma.DocumentRelationUncheckedCreateWithoutFromDocumentInput> | Prisma.DocumentRelationCreateWithoutFromDocumentInput[] | Prisma.DocumentRelationUncheckedCreateWithoutFromDocumentInput[];
    connectOrCreate?: Prisma.DocumentRelationCreateOrConnectWithoutFromDocumentInput | Prisma.DocumentRelationCreateOrConnectWithoutFromDocumentInput[];
    upsert?: Prisma.DocumentRelationUpsertWithWhereUniqueWithoutFromDocumentInput | Prisma.DocumentRelationUpsertWithWhereUniqueWithoutFromDocumentInput[];
    createMany?: Prisma.DocumentRelationCreateManyFromDocumentInputEnvelope;
    set?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
    disconnect?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
    delete?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
    connect?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
    update?: Prisma.DocumentRelationUpdateWithWhereUniqueWithoutFromDocumentInput | Prisma.DocumentRelationUpdateWithWhereUniqueWithoutFromDocumentInput[];
    updateMany?: Prisma.DocumentRelationUpdateManyWithWhereWithoutFromDocumentInput | Prisma.DocumentRelationUpdateManyWithWhereWithoutFromDocumentInput[];
    deleteMany?: Prisma.DocumentRelationScalarWhereInput | Prisma.DocumentRelationScalarWhereInput[];
};
export type DocumentRelationUncheckedUpdateManyWithoutToDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentRelationCreateWithoutToDocumentInput, Prisma.DocumentRelationUncheckedCreateWithoutToDocumentInput> | Prisma.DocumentRelationCreateWithoutToDocumentInput[] | Prisma.DocumentRelationUncheckedCreateWithoutToDocumentInput[];
    connectOrCreate?: Prisma.DocumentRelationCreateOrConnectWithoutToDocumentInput | Prisma.DocumentRelationCreateOrConnectWithoutToDocumentInput[];
    upsert?: Prisma.DocumentRelationUpsertWithWhereUniqueWithoutToDocumentInput | Prisma.DocumentRelationUpsertWithWhereUniqueWithoutToDocumentInput[];
    createMany?: Prisma.DocumentRelationCreateManyToDocumentInputEnvelope;
    set?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
    disconnect?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
    delete?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
    connect?: Prisma.DocumentRelationWhereUniqueInput | Prisma.DocumentRelationWhereUniqueInput[];
    update?: Prisma.DocumentRelationUpdateWithWhereUniqueWithoutToDocumentInput | Prisma.DocumentRelationUpdateWithWhereUniqueWithoutToDocumentInput[];
    updateMany?: Prisma.DocumentRelationUpdateManyWithWhereWithoutToDocumentInput | Prisma.DocumentRelationUpdateManyWithWhereWithoutToDocumentInput[];
    deleteMany?: Prisma.DocumentRelationScalarWhereInput | Prisma.DocumentRelationScalarWhereInput[];
};
export type DocumentRelationCreateWithoutFromDocumentInput = {
    id?: string;
    relationLabel?: string | null;
    toDocument: Prisma.DocumentCreateNestedOneWithoutRelatedToInput;
};
export type DocumentRelationUncheckedCreateWithoutFromDocumentInput = {
    id?: string;
    toDocumentId: string;
    relationLabel?: string | null;
};
export type DocumentRelationCreateOrConnectWithoutFromDocumentInput = {
    where: Prisma.DocumentRelationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentRelationCreateWithoutFromDocumentInput, Prisma.DocumentRelationUncheckedCreateWithoutFromDocumentInput>;
};
export type DocumentRelationCreateManyFromDocumentInputEnvelope = {
    data: Prisma.DocumentRelationCreateManyFromDocumentInput | Prisma.DocumentRelationCreateManyFromDocumentInput[];
    skipDuplicates?: boolean;
};
export type DocumentRelationCreateWithoutToDocumentInput = {
    id?: string;
    relationLabel?: string | null;
    fromDocument: Prisma.DocumentCreateNestedOneWithoutRelatedFromInput;
};
export type DocumentRelationUncheckedCreateWithoutToDocumentInput = {
    id?: string;
    fromDocumentId: string;
    relationLabel?: string | null;
};
export type DocumentRelationCreateOrConnectWithoutToDocumentInput = {
    where: Prisma.DocumentRelationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentRelationCreateWithoutToDocumentInput, Prisma.DocumentRelationUncheckedCreateWithoutToDocumentInput>;
};
export type DocumentRelationCreateManyToDocumentInputEnvelope = {
    data: Prisma.DocumentRelationCreateManyToDocumentInput | Prisma.DocumentRelationCreateManyToDocumentInput[];
    skipDuplicates?: boolean;
};
export type DocumentRelationUpsertWithWhereUniqueWithoutFromDocumentInput = {
    where: Prisma.DocumentRelationWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentRelationUpdateWithoutFromDocumentInput, Prisma.DocumentRelationUncheckedUpdateWithoutFromDocumentInput>;
    create: Prisma.XOR<Prisma.DocumentRelationCreateWithoutFromDocumentInput, Prisma.DocumentRelationUncheckedCreateWithoutFromDocumentInput>;
};
export type DocumentRelationUpdateWithWhereUniqueWithoutFromDocumentInput = {
    where: Prisma.DocumentRelationWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentRelationUpdateWithoutFromDocumentInput, Prisma.DocumentRelationUncheckedUpdateWithoutFromDocumentInput>;
};
export type DocumentRelationUpdateManyWithWhereWithoutFromDocumentInput = {
    where: Prisma.DocumentRelationScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentRelationUpdateManyMutationInput, Prisma.DocumentRelationUncheckedUpdateManyWithoutFromDocumentInput>;
};
export type DocumentRelationScalarWhereInput = {
    AND?: Prisma.DocumentRelationScalarWhereInput | Prisma.DocumentRelationScalarWhereInput[];
    OR?: Prisma.DocumentRelationScalarWhereInput[];
    NOT?: Prisma.DocumentRelationScalarWhereInput | Prisma.DocumentRelationScalarWhereInput[];
    id?: Prisma.StringFilter<"DocumentRelation"> | string;
    fromDocumentId?: Prisma.StringFilter<"DocumentRelation"> | string;
    toDocumentId?: Prisma.StringFilter<"DocumentRelation"> | string;
    relationLabel?: Prisma.StringNullableFilter<"DocumentRelation"> | string | null;
};
export type DocumentRelationUpsertWithWhereUniqueWithoutToDocumentInput = {
    where: Prisma.DocumentRelationWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentRelationUpdateWithoutToDocumentInput, Prisma.DocumentRelationUncheckedUpdateWithoutToDocumentInput>;
    create: Prisma.XOR<Prisma.DocumentRelationCreateWithoutToDocumentInput, Prisma.DocumentRelationUncheckedCreateWithoutToDocumentInput>;
};
export type DocumentRelationUpdateWithWhereUniqueWithoutToDocumentInput = {
    where: Prisma.DocumentRelationWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentRelationUpdateWithoutToDocumentInput, Prisma.DocumentRelationUncheckedUpdateWithoutToDocumentInput>;
};
export type DocumentRelationUpdateManyWithWhereWithoutToDocumentInput = {
    where: Prisma.DocumentRelationScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentRelationUpdateManyMutationInput, Prisma.DocumentRelationUncheckedUpdateManyWithoutToDocumentInput>;
};
export type DocumentRelationCreateManyFromDocumentInput = {
    id?: string;
    toDocumentId: string;
    relationLabel?: string | null;
};
export type DocumentRelationCreateManyToDocumentInput = {
    id?: string;
    fromDocumentId: string;
    relationLabel?: string | null;
};
export type DocumentRelationUpdateWithoutFromDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    relationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    toDocument?: Prisma.DocumentUpdateOneRequiredWithoutRelatedToNestedInput;
};
export type DocumentRelationUncheckedUpdateWithoutFromDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    toDocumentId?: Prisma.StringFieldUpdateOperationsInput | string;
    relationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DocumentRelationUncheckedUpdateManyWithoutFromDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    toDocumentId?: Prisma.StringFieldUpdateOperationsInput | string;
    relationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DocumentRelationUpdateWithoutToDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    relationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fromDocument?: Prisma.DocumentUpdateOneRequiredWithoutRelatedFromNestedInput;
};
export type DocumentRelationUncheckedUpdateWithoutToDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromDocumentId?: Prisma.StringFieldUpdateOperationsInput | string;
    relationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DocumentRelationUncheckedUpdateManyWithoutToDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fromDocumentId?: Prisma.StringFieldUpdateOperationsInput | string;
    relationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DocumentRelationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fromDocumentId?: boolean;
    toDocumentId?: boolean;
    relationLabel?: boolean;
    fromDocument?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    toDocument?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentRelation"]>;
export type DocumentRelationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fromDocumentId?: boolean;
    toDocumentId?: boolean;
    relationLabel?: boolean;
    fromDocument?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    toDocument?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentRelation"]>;
export type DocumentRelationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fromDocumentId?: boolean;
    toDocumentId?: boolean;
    relationLabel?: boolean;
    fromDocument?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    toDocument?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentRelation"]>;
export type DocumentRelationSelectScalar = {
    id?: boolean;
    fromDocumentId?: boolean;
    toDocumentId?: boolean;
    relationLabel?: boolean;
};
export type DocumentRelationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fromDocumentId" | "toDocumentId" | "relationLabel", ExtArgs["result"]["documentRelation"]>;
export type DocumentRelationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fromDocument?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    toDocument?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
};
export type DocumentRelationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fromDocument?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    toDocument?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
};
export type DocumentRelationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fromDocument?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
    toDocument?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
};
export type $DocumentRelationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DocumentRelation";
    objects: {
        fromDocument: Prisma.$DocumentPayload<ExtArgs>;
        toDocument: Prisma.$DocumentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        fromDocumentId: string;
        toDocumentId: string;
        relationLabel: string | null;
    }, ExtArgs["result"]["documentRelation"]>;
    composites: {};
};
export type DocumentRelationGetPayload<S extends boolean | null | undefined | DocumentRelationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DocumentRelationPayload, S>;
export type DocumentRelationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DocumentRelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DocumentRelationCountAggregateInputType | true;
};
export interface DocumentRelationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DocumentRelation'];
        meta: {
            name: 'DocumentRelation';
        };
    };
    findUnique<T extends DocumentRelationFindUniqueArgs>(args: Prisma.SelectSubset<T, DocumentRelationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DocumentRelationClient<runtime.Types.Result.GetResult<Prisma.$DocumentRelationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DocumentRelationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DocumentRelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentRelationClient<runtime.Types.Result.GetResult<Prisma.$DocumentRelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DocumentRelationFindFirstArgs>(args?: Prisma.SelectSubset<T, DocumentRelationFindFirstArgs<ExtArgs>>): Prisma.Prisma__DocumentRelationClient<runtime.Types.Result.GetResult<Prisma.$DocumentRelationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DocumentRelationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DocumentRelationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentRelationClient<runtime.Types.Result.GetResult<Prisma.$DocumentRelationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DocumentRelationFindManyArgs>(args?: Prisma.SelectSubset<T, DocumentRelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DocumentRelationCreateArgs>(args: Prisma.SelectSubset<T, DocumentRelationCreateArgs<ExtArgs>>): Prisma.Prisma__DocumentRelationClient<runtime.Types.Result.GetResult<Prisma.$DocumentRelationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DocumentRelationCreateManyArgs>(args?: Prisma.SelectSubset<T, DocumentRelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DocumentRelationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DocumentRelationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentRelationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DocumentRelationDeleteArgs>(args: Prisma.SelectSubset<T, DocumentRelationDeleteArgs<ExtArgs>>): Prisma.Prisma__DocumentRelationClient<runtime.Types.Result.GetResult<Prisma.$DocumentRelationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DocumentRelationUpdateArgs>(args: Prisma.SelectSubset<T, DocumentRelationUpdateArgs<ExtArgs>>): Prisma.Prisma__DocumentRelationClient<runtime.Types.Result.GetResult<Prisma.$DocumentRelationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DocumentRelationDeleteManyArgs>(args?: Prisma.SelectSubset<T, DocumentRelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DocumentRelationUpdateManyArgs>(args: Prisma.SelectSubset<T, DocumentRelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DocumentRelationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DocumentRelationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentRelationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DocumentRelationUpsertArgs>(args: Prisma.SelectSubset<T, DocumentRelationUpsertArgs<ExtArgs>>): Prisma.Prisma__DocumentRelationClient<runtime.Types.Result.GetResult<Prisma.$DocumentRelationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DocumentRelationCountArgs>(args?: Prisma.Subset<T, DocumentRelationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DocumentRelationCountAggregateOutputType> : number>;
    aggregate<T extends DocumentRelationAggregateArgs>(args: Prisma.Subset<T, DocumentRelationAggregateArgs>): Prisma.PrismaPromise<GetDocumentRelationAggregateType<T>>;
    groupBy<T extends DocumentRelationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DocumentRelationGroupByArgs['orderBy'];
    } : {
        orderBy?: DocumentRelationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DocumentRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DocumentRelationFieldRefs;
}
export interface Prisma__DocumentRelationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    fromDocument<T extends Prisma.DocumentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentDefaultArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    toDocument<T extends Prisma.DocumentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentDefaultArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DocumentRelationFieldRefs {
    readonly id: Prisma.FieldRef<"DocumentRelation", 'String'>;
    readonly fromDocumentId: Prisma.FieldRef<"DocumentRelation", 'String'>;
    readonly toDocumentId: Prisma.FieldRef<"DocumentRelation", 'String'>;
    readonly relationLabel: Prisma.FieldRef<"DocumentRelation", 'String'>;
}
export type DocumentRelationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentRelationSelect<ExtArgs> | null;
    omit?: Prisma.DocumentRelationOmit<ExtArgs> | null;
    include?: Prisma.DocumentRelationInclude<ExtArgs> | null;
    where: Prisma.DocumentRelationWhereUniqueInput;
};
export type DocumentRelationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentRelationSelect<ExtArgs> | null;
    omit?: Prisma.DocumentRelationOmit<ExtArgs> | null;
    include?: Prisma.DocumentRelationInclude<ExtArgs> | null;
    where: Prisma.DocumentRelationWhereUniqueInput;
};
export type DocumentRelationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DocumentRelationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DocumentRelationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DocumentRelationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentRelationSelect<ExtArgs> | null;
    omit?: Prisma.DocumentRelationOmit<ExtArgs> | null;
    include?: Prisma.DocumentRelationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentRelationCreateInput, Prisma.DocumentRelationUncheckedCreateInput>;
};
export type DocumentRelationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DocumentRelationCreateManyInput | Prisma.DocumentRelationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DocumentRelationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentRelationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentRelationOmit<ExtArgs> | null;
    data: Prisma.DocumentRelationCreateManyInput | Prisma.DocumentRelationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DocumentRelationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DocumentRelationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentRelationSelect<ExtArgs> | null;
    omit?: Prisma.DocumentRelationOmit<ExtArgs> | null;
    include?: Prisma.DocumentRelationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentRelationUpdateInput, Prisma.DocumentRelationUncheckedUpdateInput>;
    where: Prisma.DocumentRelationWhereUniqueInput;
};
export type DocumentRelationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DocumentRelationUpdateManyMutationInput, Prisma.DocumentRelationUncheckedUpdateManyInput>;
    where?: Prisma.DocumentRelationWhereInput;
    limit?: number;
};
export type DocumentRelationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentRelationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentRelationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentRelationUpdateManyMutationInput, Prisma.DocumentRelationUncheckedUpdateManyInput>;
    where?: Prisma.DocumentRelationWhereInput;
    limit?: number;
    include?: Prisma.DocumentRelationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DocumentRelationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentRelationSelect<ExtArgs> | null;
    omit?: Prisma.DocumentRelationOmit<ExtArgs> | null;
    include?: Prisma.DocumentRelationInclude<ExtArgs> | null;
    where: Prisma.DocumentRelationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentRelationCreateInput, Prisma.DocumentRelationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DocumentRelationUpdateInput, Prisma.DocumentRelationUncheckedUpdateInput>;
};
export type DocumentRelationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentRelationSelect<ExtArgs> | null;
    omit?: Prisma.DocumentRelationOmit<ExtArgs> | null;
    include?: Prisma.DocumentRelationInclude<ExtArgs> | null;
    where: Prisma.DocumentRelationWhereUniqueInput;
};
export type DocumentRelationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentRelationWhereInput;
    limit?: number;
};
export type DocumentRelationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentRelationSelect<ExtArgs> | null;
    omit?: Prisma.DocumentRelationOmit<ExtArgs> | null;
    include?: Prisma.DocumentRelationInclude<ExtArgs> | null;
};
