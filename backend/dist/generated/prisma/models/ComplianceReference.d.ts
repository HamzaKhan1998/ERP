import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ComplianceReferenceModel = runtime.Types.Result.DefaultSelection<Prisma.$ComplianceReferencePayload>;
export type AggregateComplianceReference = {
    _count: ComplianceReferenceCountAggregateOutputType | null;
    _min: ComplianceReferenceMinAggregateOutputType | null;
    _max: ComplianceReferenceMaxAggregateOutputType | null;
};
export type ComplianceReferenceMinAggregateOutputType = {
    id: string | null;
    versionId: string | null;
    standard: string | null;
    edition: string | null;
    clause: string | null;
    description: string | null;
};
export type ComplianceReferenceMaxAggregateOutputType = {
    id: string | null;
    versionId: string | null;
    standard: string | null;
    edition: string | null;
    clause: string | null;
    description: string | null;
};
export type ComplianceReferenceCountAggregateOutputType = {
    id: number;
    versionId: number;
    standard: number;
    edition: number;
    clause: number;
    description: number;
    _all: number;
};
export type ComplianceReferenceMinAggregateInputType = {
    id?: true;
    versionId?: true;
    standard?: true;
    edition?: true;
    clause?: true;
    description?: true;
};
export type ComplianceReferenceMaxAggregateInputType = {
    id?: true;
    versionId?: true;
    standard?: true;
    edition?: true;
    clause?: true;
    description?: true;
};
export type ComplianceReferenceCountAggregateInputType = {
    id?: true;
    versionId?: true;
    standard?: true;
    edition?: true;
    clause?: true;
    description?: true;
    _all?: true;
};
export type ComplianceReferenceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplianceReferenceWhereInput;
    orderBy?: Prisma.ComplianceReferenceOrderByWithRelationInput | Prisma.ComplianceReferenceOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceReferenceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ComplianceReferenceCountAggregateInputType;
    _min?: ComplianceReferenceMinAggregateInputType;
    _max?: ComplianceReferenceMaxAggregateInputType;
};
export type GetComplianceReferenceAggregateType<T extends ComplianceReferenceAggregateArgs> = {
    [P in keyof T & keyof AggregateComplianceReference]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateComplianceReference[P]> : Prisma.GetScalarType<T[P], AggregateComplianceReference[P]>;
};
export type ComplianceReferenceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplianceReferenceWhereInput;
    orderBy?: Prisma.ComplianceReferenceOrderByWithAggregationInput | Prisma.ComplianceReferenceOrderByWithAggregationInput[];
    by: Prisma.ComplianceReferenceScalarFieldEnum[] | Prisma.ComplianceReferenceScalarFieldEnum;
    having?: Prisma.ComplianceReferenceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ComplianceReferenceCountAggregateInputType | true;
    _min?: ComplianceReferenceMinAggregateInputType;
    _max?: ComplianceReferenceMaxAggregateInputType;
};
export type ComplianceReferenceGroupByOutputType = {
    id: string;
    versionId: string;
    standard: string;
    edition: string | null;
    clause: string;
    description: string | null;
    _count: ComplianceReferenceCountAggregateOutputType | null;
    _min: ComplianceReferenceMinAggregateOutputType | null;
    _max: ComplianceReferenceMaxAggregateOutputType | null;
};
export type GetComplianceReferenceGroupByPayload<T extends ComplianceReferenceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ComplianceReferenceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ComplianceReferenceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ComplianceReferenceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ComplianceReferenceGroupByOutputType[P]>;
}>>;
export type ComplianceReferenceWhereInput = {
    AND?: Prisma.ComplianceReferenceWhereInput | Prisma.ComplianceReferenceWhereInput[];
    OR?: Prisma.ComplianceReferenceWhereInput[];
    NOT?: Prisma.ComplianceReferenceWhereInput | Prisma.ComplianceReferenceWhereInput[];
    id?: Prisma.StringFilter<"ComplianceReference"> | string;
    versionId?: Prisma.StringFilter<"ComplianceReference"> | string;
    standard?: Prisma.StringFilter<"ComplianceReference"> | string;
    edition?: Prisma.StringNullableFilter<"ComplianceReference"> | string | null;
    clause?: Prisma.StringFilter<"ComplianceReference"> | string;
    description?: Prisma.StringNullableFilter<"ComplianceReference"> | string | null;
    version?: Prisma.XOR<Prisma.DocumentVersionScalarRelationFilter, Prisma.DocumentVersionWhereInput>;
};
export type ComplianceReferenceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    standard?: Prisma.SortOrder;
    edition?: Prisma.SortOrderInput | Prisma.SortOrder;
    clause?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    version?: Prisma.DocumentVersionOrderByWithRelationInput;
};
export type ComplianceReferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ComplianceReferenceWhereInput | Prisma.ComplianceReferenceWhereInput[];
    OR?: Prisma.ComplianceReferenceWhereInput[];
    NOT?: Prisma.ComplianceReferenceWhereInput | Prisma.ComplianceReferenceWhereInput[];
    versionId?: Prisma.StringFilter<"ComplianceReference"> | string;
    standard?: Prisma.StringFilter<"ComplianceReference"> | string;
    edition?: Prisma.StringNullableFilter<"ComplianceReference"> | string | null;
    clause?: Prisma.StringFilter<"ComplianceReference"> | string;
    description?: Prisma.StringNullableFilter<"ComplianceReference"> | string | null;
    version?: Prisma.XOR<Prisma.DocumentVersionScalarRelationFilter, Prisma.DocumentVersionWhereInput>;
}, "id">;
export type ComplianceReferenceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    standard?: Prisma.SortOrder;
    edition?: Prisma.SortOrderInput | Prisma.SortOrder;
    clause?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ComplianceReferenceCountOrderByAggregateInput;
    _max?: Prisma.ComplianceReferenceMaxOrderByAggregateInput;
    _min?: Prisma.ComplianceReferenceMinOrderByAggregateInput;
};
export type ComplianceReferenceScalarWhereWithAggregatesInput = {
    AND?: Prisma.ComplianceReferenceScalarWhereWithAggregatesInput | Prisma.ComplianceReferenceScalarWhereWithAggregatesInput[];
    OR?: Prisma.ComplianceReferenceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ComplianceReferenceScalarWhereWithAggregatesInput | Prisma.ComplianceReferenceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ComplianceReference"> | string;
    versionId?: Prisma.StringWithAggregatesFilter<"ComplianceReference"> | string;
    standard?: Prisma.StringWithAggregatesFilter<"ComplianceReference"> | string;
    edition?: Prisma.StringNullableWithAggregatesFilter<"ComplianceReference"> | string | null;
    clause?: Prisma.StringWithAggregatesFilter<"ComplianceReference"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"ComplianceReference"> | string | null;
};
export type ComplianceReferenceCreateInput = {
    id?: string;
    standard: string;
    edition?: string | null;
    clause: string;
    description?: string | null;
    version: Prisma.DocumentVersionCreateNestedOneWithoutComplianceRefsInput;
};
export type ComplianceReferenceUncheckedCreateInput = {
    id?: string;
    versionId: string;
    standard: string;
    edition?: string | null;
    clause: string;
    description?: string | null;
};
export type ComplianceReferenceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    standard?: Prisma.StringFieldUpdateOperationsInput | string;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clause?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.DocumentVersionUpdateOneRequiredWithoutComplianceRefsNestedInput;
};
export type ComplianceReferenceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.StringFieldUpdateOperationsInput | string;
    standard?: Prisma.StringFieldUpdateOperationsInput | string;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clause?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ComplianceReferenceCreateManyInput = {
    id?: string;
    versionId: string;
    standard: string;
    edition?: string | null;
    clause: string;
    description?: string | null;
};
export type ComplianceReferenceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    standard?: Prisma.StringFieldUpdateOperationsInput | string;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clause?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ComplianceReferenceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.StringFieldUpdateOperationsInput | string;
    standard?: Prisma.StringFieldUpdateOperationsInput | string;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clause?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ComplianceReferenceListRelationFilter = {
    every?: Prisma.ComplianceReferenceWhereInput;
    some?: Prisma.ComplianceReferenceWhereInput;
    none?: Prisma.ComplianceReferenceWhereInput;
};
export type ComplianceReferenceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ComplianceReferenceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    standard?: Prisma.SortOrder;
    edition?: Prisma.SortOrder;
    clause?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type ComplianceReferenceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    standard?: Prisma.SortOrder;
    edition?: Prisma.SortOrder;
    clause?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type ComplianceReferenceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    standard?: Prisma.SortOrder;
    edition?: Prisma.SortOrder;
    clause?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type ComplianceReferenceCreateNestedManyWithoutVersionInput = {
    create?: Prisma.XOR<Prisma.ComplianceReferenceCreateWithoutVersionInput, Prisma.ComplianceReferenceUncheckedCreateWithoutVersionInput> | Prisma.ComplianceReferenceCreateWithoutVersionInput[] | Prisma.ComplianceReferenceUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.ComplianceReferenceCreateOrConnectWithoutVersionInput | Prisma.ComplianceReferenceCreateOrConnectWithoutVersionInput[];
    createMany?: Prisma.ComplianceReferenceCreateManyVersionInputEnvelope;
    connect?: Prisma.ComplianceReferenceWhereUniqueInput | Prisma.ComplianceReferenceWhereUniqueInput[];
};
export type ComplianceReferenceUncheckedCreateNestedManyWithoutVersionInput = {
    create?: Prisma.XOR<Prisma.ComplianceReferenceCreateWithoutVersionInput, Prisma.ComplianceReferenceUncheckedCreateWithoutVersionInput> | Prisma.ComplianceReferenceCreateWithoutVersionInput[] | Prisma.ComplianceReferenceUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.ComplianceReferenceCreateOrConnectWithoutVersionInput | Prisma.ComplianceReferenceCreateOrConnectWithoutVersionInput[];
    createMany?: Prisma.ComplianceReferenceCreateManyVersionInputEnvelope;
    connect?: Prisma.ComplianceReferenceWhereUniqueInput | Prisma.ComplianceReferenceWhereUniqueInput[];
};
export type ComplianceReferenceUpdateManyWithoutVersionNestedInput = {
    create?: Prisma.XOR<Prisma.ComplianceReferenceCreateWithoutVersionInput, Prisma.ComplianceReferenceUncheckedCreateWithoutVersionInput> | Prisma.ComplianceReferenceCreateWithoutVersionInput[] | Prisma.ComplianceReferenceUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.ComplianceReferenceCreateOrConnectWithoutVersionInput | Prisma.ComplianceReferenceCreateOrConnectWithoutVersionInput[];
    upsert?: Prisma.ComplianceReferenceUpsertWithWhereUniqueWithoutVersionInput | Prisma.ComplianceReferenceUpsertWithWhereUniqueWithoutVersionInput[];
    createMany?: Prisma.ComplianceReferenceCreateManyVersionInputEnvelope;
    set?: Prisma.ComplianceReferenceWhereUniqueInput | Prisma.ComplianceReferenceWhereUniqueInput[];
    disconnect?: Prisma.ComplianceReferenceWhereUniqueInput | Prisma.ComplianceReferenceWhereUniqueInput[];
    delete?: Prisma.ComplianceReferenceWhereUniqueInput | Prisma.ComplianceReferenceWhereUniqueInput[];
    connect?: Prisma.ComplianceReferenceWhereUniqueInput | Prisma.ComplianceReferenceWhereUniqueInput[];
    update?: Prisma.ComplianceReferenceUpdateWithWhereUniqueWithoutVersionInput | Prisma.ComplianceReferenceUpdateWithWhereUniqueWithoutVersionInput[];
    updateMany?: Prisma.ComplianceReferenceUpdateManyWithWhereWithoutVersionInput | Prisma.ComplianceReferenceUpdateManyWithWhereWithoutVersionInput[];
    deleteMany?: Prisma.ComplianceReferenceScalarWhereInput | Prisma.ComplianceReferenceScalarWhereInput[];
};
export type ComplianceReferenceUncheckedUpdateManyWithoutVersionNestedInput = {
    create?: Prisma.XOR<Prisma.ComplianceReferenceCreateWithoutVersionInput, Prisma.ComplianceReferenceUncheckedCreateWithoutVersionInput> | Prisma.ComplianceReferenceCreateWithoutVersionInput[] | Prisma.ComplianceReferenceUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.ComplianceReferenceCreateOrConnectWithoutVersionInput | Prisma.ComplianceReferenceCreateOrConnectWithoutVersionInput[];
    upsert?: Prisma.ComplianceReferenceUpsertWithWhereUniqueWithoutVersionInput | Prisma.ComplianceReferenceUpsertWithWhereUniqueWithoutVersionInput[];
    createMany?: Prisma.ComplianceReferenceCreateManyVersionInputEnvelope;
    set?: Prisma.ComplianceReferenceWhereUniqueInput | Prisma.ComplianceReferenceWhereUniqueInput[];
    disconnect?: Prisma.ComplianceReferenceWhereUniqueInput | Prisma.ComplianceReferenceWhereUniqueInput[];
    delete?: Prisma.ComplianceReferenceWhereUniqueInput | Prisma.ComplianceReferenceWhereUniqueInput[];
    connect?: Prisma.ComplianceReferenceWhereUniqueInput | Prisma.ComplianceReferenceWhereUniqueInput[];
    update?: Prisma.ComplianceReferenceUpdateWithWhereUniqueWithoutVersionInput | Prisma.ComplianceReferenceUpdateWithWhereUniqueWithoutVersionInput[];
    updateMany?: Prisma.ComplianceReferenceUpdateManyWithWhereWithoutVersionInput | Prisma.ComplianceReferenceUpdateManyWithWhereWithoutVersionInput[];
    deleteMany?: Prisma.ComplianceReferenceScalarWhereInput | Prisma.ComplianceReferenceScalarWhereInput[];
};
export type ComplianceReferenceCreateWithoutVersionInput = {
    id?: string;
    standard: string;
    edition?: string | null;
    clause: string;
    description?: string | null;
};
export type ComplianceReferenceUncheckedCreateWithoutVersionInput = {
    id?: string;
    standard: string;
    edition?: string | null;
    clause: string;
    description?: string | null;
};
export type ComplianceReferenceCreateOrConnectWithoutVersionInput = {
    where: Prisma.ComplianceReferenceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComplianceReferenceCreateWithoutVersionInput, Prisma.ComplianceReferenceUncheckedCreateWithoutVersionInput>;
};
export type ComplianceReferenceCreateManyVersionInputEnvelope = {
    data: Prisma.ComplianceReferenceCreateManyVersionInput | Prisma.ComplianceReferenceCreateManyVersionInput[];
    skipDuplicates?: boolean;
};
export type ComplianceReferenceUpsertWithWhereUniqueWithoutVersionInput = {
    where: Prisma.ComplianceReferenceWhereUniqueInput;
    update: Prisma.XOR<Prisma.ComplianceReferenceUpdateWithoutVersionInput, Prisma.ComplianceReferenceUncheckedUpdateWithoutVersionInput>;
    create: Prisma.XOR<Prisma.ComplianceReferenceCreateWithoutVersionInput, Prisma.ComplianceReferenceUncheckedCreateWithoutVersionInput>;
};
export type ComplianceReferenceUpdateWithWhereUniqueWithoutVersionInput = {
    where: Prisma.ComplianceReferenceWhereUniqueInput;
    data: Prisma.XOR<Prisma.ComplianceReferenceUpdateWithoutVersionInput, Prisma.ComplianceReferenceUncheckedUpdateWithoutVersionInput>;
};
export type ComplianceReferenceUpdateManyWithWhereWithoutVersionInput = {
    where: Prisma.ComplianceReferenceScalarWhereInput;
    data: Prisma.XOR<Prisma.ComplianceReferenceUpdateManyMutationInput, Prisma.ComplianceReferenceUncheckedUpdateManyWithoutVersionInput>;
};
export type ComplianceReferenceScalarWhereInput = {
    AND?: Prisma.ComplianceReferenceScalarWhereInput | Prisma.ComplianceReferenceScalarWhereInput[];
    OR?: Prisma.ComplianceReferenceScalarWhereInput[];
    NOT?: Prisma.ComplianceReferenceScalarWhereInput | Prisma.ComplianceReferenceScalarWhereInput[];
    id?: Prisma.StringFilter<"ComplianceReference"> | string;
    versionId?: Prisma.StringFilter<"ComplianceReference"> | string;
    standard?: Prisma.StringFilter<"ComplianceReference"> | string;
    edition?: Prisma.StringNullableFilter<"ComplianceReference"> | string | null;
    clause?: Prisma.StringFilter<"ComplianceReference"> | string;
    description?: Prisma.StringNullableFilter<"ComplianceReference"> | string | null;
};
export type ComplianceReferenceCreateManyVersionInput = {
    id?: string;
    standard: string;
    edition?: string | null;
    clause: string;
    description?: string | null;
};
export type ComplianceReferenceUpdateWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    standard?: Prisma.StringFieldUpdateOperationsInput | string;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clause?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ComplianceReferenceUncheckedUpdateWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    standard?: Prisma.StringFieldUpdateOperationsInput | string;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clause?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ComplianceReferenceUncheckedUpdateManyWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    standard?: Prisma.StringFieldUpdateOperationsInput | string;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clause?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ComplianceReferenceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    versionId?: boolean;
    standard?: boolean;
    edition?: boolean;
    clause?: boolean;
    description?: boolean;
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["complianceReference"]>;
export type ComplianceReferenceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    versionId?: boolean;
    standard?: boolean;
    edition?: boolean;
    clause?: boolean;
    description?: boolean;
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["complianceReference"]>;
export type ComplianceReferenceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    versionId?: boolean;
    standard?: boolean;
    edition?: boolean;
    clause?: boolean;
    description?: boolean;
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["complianceReference"]>;
export type ComplianceReferenceSelectScalar = {
    id?: boolean;
    versionId?: boolean;
    standard?: boolean;
    edition?: boolean;
    clause?: boolean;
    description?: boolean;
};
export type ComplianceReferenceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "versionId" | "standard" | "edition" | "clause" | "description", ExtArgs["result"]["complianceReference"]>;
export type ComplianceReferenceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
};
export type ComplianceReferenceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
};
export type ComplianceReferenceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
};
export type $ComplianceReferencePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ComplianceReference";
    objects: {
        version: Prisma.$DocumentVersionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        versionId: string;
        standard: string;
        edition: string | null;
        clause: string;
        description: string | null;
    }, ExtArgs["result"]["complianceReference"]>;
    composites: {};
};
export type ComplianceReferenceGetPayload<S extends boolean | null | undefined | ComplianceReferenceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ComplianceReferencePayload, S>;
export type ComplianceReferenceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ComplianceReferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ComplianceReferenceCountAggregateInputType | true;
};
export interface ComplianceReferenceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ComplianceReference'];
        meta: {
            name: 'ComplianceReference';
        };
    };
    findUnique<T extends ComplianceReferenceFindUniqueArgs>(args: Prisma.SelectSubset<T, ComplianceReferenceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ComplianceReferenceClient<runtime.Types.Result.GetResult<Prisma.$ComplianceReferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ComplianceReferenceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ComplianceReferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComplianceReferenceClient<runtime.Types.Result.GetResult<Prisma.$ComplianceReferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ComplianceReferenceFindFirstArgs>(args?: Prisma.SelectSubset<T, ComplianceReferenceFindFirstArgs<ExtArgs>>): Prisma.Prisma__ComplianceReferenceClient<runtime.Types.Result.GetResult<Prisma.$ComplianceReferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ComplianceReferenceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ComplianceReferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ComplianceReferenceClient<runtime.Types.Result.GetResult<Prisma.$ComplianceReferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ComplianceReferenceFindManyArgs>(args?: Prisma.SelectSubset<T, ComplianceReferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplianceReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ComplianceReferenceCreateArgs>(args: Prisma.SelectSubset<T, ComplianceReferenceCreateArgs<ExtArgs>>): Prisma.Prisma__ComplianceReferenceClient<runtime.Types.Result.GetResult<Prisma.$ComplianceReferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ComplianceReferenceCreateManyArgs>(args?: Prisma.SelectSubset<T, ComplianceReferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ComplianceReferenceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ComplianceReferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplianceReferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ComplianceReferenceDeleteArgs>(args: Prisma.SelectSubset<T, ComplianceReferenceDeleteArgs<ExtArgs>>): Prisma.Prisma__ComplianceReferenceClient<runtime.Types.Result.GetResult<Prisma.$ComplianceReferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ComplianceReferenceUpdateArgs>(args: Prisma.SelectSubset<T, ComplianceReferenceUpdateArgs<ExtArgs>>): Prisma.Prisma__ComplianceReferenceClient<runtime.Types.Result.GetResult<Prisma.$ComplianceReferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ComplianceReferenceDeleteManyArgs>(args?: Prisma.SelectSubset<T, ComplianceReferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ComplianceReferenceUpdateManyArgs>(args: Prisma.SelectSubset<T, ComplianceReferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ComplianceReferenceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ComplianceReferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComplianceReferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ComplianceReferenceUpsertArgs>(args: Prisma.SelectSubset<T, ComplianceReferenceUpsertArgs<ExtArgs>>): Prisma.Prisma__ComplianceReferenceClient<runtime.Types.Result.GetResult<Prisma.$ComplianceReferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ComplianceReferenceCountArgs>(args?: Prisma.Subset<T, ComplianceReferenceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ComplianceReferenceCountAggregateOutputType> : number>;
    aggregate<T extends ComplianceReferenceAggregateArgs>(args: Prisma.Subset<T, ComplianceReferenceAggregateArgs>): Prisma.PrismaPromise<GetComplianceReferenceAggregateType<T>>;
    groupBy<T extends ComplianceReferenceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ComplianceReferenceGroupByArgs['orderBy'];
    } : {
        orderBy?: ComplianceReferenceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ComplianceReferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplianceReferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ComplianceReferenceFieldRefs;
}
export interface Prisma__ComplianceReferenceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    version<T extends Prisma.DocumentVersionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentVersionDefaultArgs<ExtArgs>>): Prisma.Prisma__DocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ComplianceReferenceFieldRefs {
    readonly id: Prisma.FieldRef<"ComplianceReference", 'String'>;
    readonly versionId: Prisma.FieldRef<"ComplianceReference", 'String'>;
    readonly standard: Prisma.FieldRef<"ComplianceReference", 'String'>;
    readonly edition: Prisma.FieldRef<"ComplianceReference", 'String'>;
    readonly clause: Prisma.FieldRef<"ComplianceReference", 'String'>;
    readonly description: Prisma.FieldRef<"ComplianceReference", 'String'>;
}
export type ComplianceReferenceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceReferenceSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceReferenceOmit<ExtArgs> | null;
    include?: Prisma.ComplianceReferenceInclude<ExtArgs> | null;
    where: Prisma.ComplianceReferenceWhereUniqueInput;
};
export type ComplianceReferenceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceReferenceSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceReferenceOmit<ExtArgs> | null;
    include?: Prisma.ComplianceReferenceInclude<ExtArgs> | null;
    where: Prisma.ComplianceReferenceWhereUniqueInput;
};
export type ComplianceReferenceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceReferenceSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceReferenceOmit<ExtArgs> | null;
    include?: Prisma.ComplianceReferenceInclude<ExtArgs> | null;
    where?: Prisma.ComplianceReferenceWhereInput;
    orderBy?: Prisma.ComplianceReferenceOrderByWithRelationInput | Prisma.ComplianceReferenceOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceReferenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplianceReferenceScalarFieldEnum | Prisma.ComplianceReferenceScalarFieldEnum[];
};
export type ComplianceReferenceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceReferenceSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceReferenceOmit<ExtArgs> | null;
    include?: Prisma.ComplianceReferenceInclude<ExtArgs> | null;
    where?: Prisma.ComplianceReferenceWhereInput;
    orderBy?: Prisma.ComplianceReferenceOrderByWithRelationInput | Prisma.ComplianceReferenceOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceReferenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplianceReferenceScalarFieldEnum | Prisma.ComplianceReferenceScalarFieldEnum[];
};
export type ComplianceReferenceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceReferenceSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceReferenceOmit<ExtArgs> | null;
    include?: Prisma.ComplianceReferenceInclude<ExtArgs> | null;
    where?: Prisma.ComplianceReferenceWhereInput;
    orderBy?: Prisma.ComplianceReferenceOrderByWithRelationInput | Prisma.ComplianceReferenceOrderByWithRelationInput[];
    cursor?: Prisma.ComplianceReferenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComplianceReferenceScalarFieldEnum | Prisma.ComplianceReferenceScalarFieldEnum[];
};
export type ComplianceReferenceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceReferenceSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceReferenceOmit<ExtArgs> | null;
    include?: Prisma.ComplianceReferenceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComplianceReferenceCreateInput, Prisma.ComplianceReferenceUncheckedCreateInput>;
};
export type ComplianceReferenceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ComplianceReferenceCreateManyInput | Prisma.ComplianceReferenceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ComplianceReferenceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceReferenceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ComplianceReferenceOmit<ExtArgs> | null;
    data: Prisma.ComplianceReferenceCreateManyInput | Prisma.ComplianceReferenceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ComplianceReferenceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ComplianceReferenceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceReferenceSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceReferenceOmit<ExtArgs> | null;
    include?: Prisma.ComplianceReferenceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComplianceReferenceUpdateInput, Prisma.ComplianceReferenceUncheckedUpdateInput>;
    where: Prisma.ComplianceReferenceWhereUniqueInput;
};
export type ComplianceReferenceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ComplianceReferenceUpdateManyMutationInput, Prisma.ComplianceReferenceUncheckedUpdateManyInput>;
    where?: Prisma.ComplianceReferenceWhereInput;
    limit?: number;
};
export type ComplianceReferenceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceReferenceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ComplianceReferenceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ComplianceReferenceUpdateManyMutationInput, Prisma.ComplianceReferenceUncheckedUpdateManyInput>;
    where?: Prisma.ComplianceReferenceWhereInput;
    limit?: number;
    include?: Prisma.ComplianceReferenceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ComplianceReferenceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceReferenceSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceReferenceOmit<ExtArgs> | null;
    include?: Prisma.ComplianceReferenceInclude<ExtArgs> | null;
    where: Prisma.ComplianceReferenceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ComplianceReferenceCreateInput, Prisma.ComplianceReferenceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ComplianceReferenceUpdateInput, Prisma.ComplianceReferenceUncheckedUpdateInput>;
};
export type ComplianceReferenceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceReferenceSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceReferenceOmit<ExtArgs> | null;
    include?: Prisma.ComplianceReferenceInclude<ExtArgs> | null;
    where: Prisma.ComplianceReferenceWhereUniqueInput;
};
export type ComplianceReferenceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComplianceReferenceWhereInput;
    limit?: number;
};
export type ComplianceReferenceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComplianceReferenceSelect<ExtArgs> | null;
    omit?: Prisma.ComplianceReferenceOmit<ExtArgs> | null;
    include?: Prisma.ComplianceReferenceInclude<ExtArgs> | null;
};
