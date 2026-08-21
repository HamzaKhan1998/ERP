import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RevisionHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$RevisionHistoryPayload>;
export type AggregateRevisionHistory = {
    _count: RevisionHistoryCountAggregateOutputType | null;
    _min: RevisionHistoryMinAggregateOutputType | null;
    _max: RevisionHistoryMaxAggregateOutputType | null;
};
export type RevisionHistoryMinAggregateOutputType = {
    id: string | null;
    versionId: string | null;
    pageNumber: string | null;
    revisionNumber: string | null;
    changeDescription: string | null;
    createdAt: Date | null;
};
export type RevisionHistoryMaxAggregateOutputType = {
    id: string | null;
    versionId: string | null;
    pageNumber: string | null;
    revisionNumber: string | null;
    changeDescription: string | null;
    createdAt: Date | null;
};
export type RevisionHistoryCountAggregateOutputType = {
    id: number;
    versionId: number;
    pageNumber: number;
    revisionNumber: number;
    changeDescription: number;
    createdAt: number;
    _all: number;
};
export type RevisionHistoryMinAggregateInputType = {
    id?: true;
    versionId?: true;
    pageNumber?: true;
    revisionNumber?: true;
    changeDescription?: true;
    createdAt?: true;
};
export type RevisionHistoryMaxAggregateInputType = {
    id?: true;
    versionId?: true;
    pageNumber?: true;
    revisionNumber?: true;
    changeDescription?: true;
    createdAt?: true;
};
export type RevisionHistoryCountAggregateInputType = {
    id?: true;
    versionId?: true;
    pageNumber?: true;
    revisionNumber?: true;
    changeDescription?: true;
    createdAt?: true;
    _all?: true;
};
export type RevisionHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RevisionHistoryWhereInput;
    orderBy?: Prisma.RevisionHistoryOrderByWithRelationInput | Prisma.RevisionHistoryOrderByWithRelationInput[];
    cursor?: Prisma.RevisionHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RevisionHistoryCountAggregateInputType;
    _min?: RevisionHistoryMinAggregateInputType;
    _max?: RevisionHistoryMaxAggregateInputType;
};
export type GetRevisionHistoryAggregateType<T extends RevisionHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregateRevisionHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRevisionHistory[P]> : Prisma.GetScalarType<T[P], AggregateRevisionHistory[P]>;
};
export type RevisionHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RevisionHistoryWhereInput;
    orderBy?: Prisma.RevisionHistoryOrderByWithAggregationInput | Prisma.RevisionHistoryOrderByWithAggregationInput[];
    by: Prisma.RevisionHistoryScalarFieldEnum[] | Prisma.RevisionHistoryScalarFieldEnum;
    having?: Prisma.RevisionHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RevisionHistoryCountAggregateInputType | true;
    _min?: RevisionHistoryMinAggregateInputType;
    _max?: RevisionHistoryMaxAggregateInputType;
};
export type RevisionHistoryGroupByOutputType = {
    id: string;
    versionId: string;
    pageNumber: string | null;
    revisionNumber: string;
    changeDescription: string;
    createdAt: Date;
    _count: RevisionHistoryCountAggregateOutputType | null;
    _min: RevisionHistoryMinAggregateOutputType | null;
    _max: RevisionHistoryMaxAggregateOutputType | null;
};
export type GetRevisionHistoryGroupByPayload<T extends RevisionHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RevisionHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RevisionHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RevisionHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RevisionHistoryGroupByOutputType[P]>;
}>>;
export type RevisionHistoryWhereInput = {
    AND?: Prisma.RevisionHistoryWhereInput | Prisma.RevisionHistoryWhereInput[];
    OR?: Prisma.RevisionHistoryWhereInput[];
    NOT?: Prisma.RevisionHistoryWhereInput | Prisma.RevisionHistoryWhereInput[];
    id?: Prisma.StringFilter<"RevisionHistory"> | string;
    versionId?: Prisma.StringFilter<"RevisionHistory"> | string;
    pageNumber?: Prisma.StringNullableFilter<"RevisionHistory"> | string | null;
    revisionNumber?: Prisma.StringFilter<"RevisionHistory"> | string;
    changeDescription?: Prisma.StringFilter<"RevisionHistory"> | string;
    createdAt?: Prisma.DateTimeFilter<"RevisionHistory"> | Date | string;
    version?: Prisma.XOR<Prisma.DocumentVersionScalarRelationFilter, Prisma.DocumentVersionWhereInput>;
};
export type RevisionHistoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    pageNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    revisionNumber?: Prisma.SortOrder;
    changeDescription?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    version?: Prisma.DocumentVersionOrderByWithRelationInput;
};
export type RevisionHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RevisionHistoryWhereInput | Prisma.RevisionHistoryWhereInput[];
    OR?: Prisma.RevisionHistoryWhereInput[];
    NOT?: Prisma.RevisionHistoryWhereInput | Prisma.RevisionHistoryWhereInput[];
    versionId?: Prisma.StringFilter<"RevisionHistory"> | string;
    pageNumber?: Prisma.StringNullableFilter<"RevisionHistory"> | string | null;
    revisionNumber?: Prisma.StringFilter<"RevisionHistory"> | string;
    changeDescription?: Prisma.StringFilter<"RevisionHistory"> | string;
    createdAt?: Prisma.DateTimeFilter<"RevisionHistory"> | Date | string;
    version?: Prisma.XOR<Prisma.DocumentVersionScalarRelationFilter, Prisma.DocumentVersionWhereInput>;
}, "id">;
export type RevisionHistoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    pageNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    revisionNumber?: Prisma.SortOrder;
    changeDescription?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RevisionHistoryCountOrderByAggregateInput;
    _max?: Prisma.RevisionHistoryMaxOrderByAggregateInput;
    _min?: Prisma.RevisionHistoryMinOrderByAggregateInput;
};
export type RevisionHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.RevisionHistoryScalarWhereWithAggregatesInput | Prisma.RevisionHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.RevisionHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RevisionHistoryScalarWhereWithAggregatesInput | Prisma.RevisionHistoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RevisionHistory"> | string;
    versionId?: Prisma.StringWithAggregatesFilter<"RevisionHistory"> | string;
    pageNumber?: Prisma.StringNullableWithAggregatesFilter<"RevisionHistory"> | string | null;
    revisionNumber?: Prisma.StringWithAggregatesFilter<"RevisionHistory"> | string;
    changeDescription?: Prisma.StringWithAggregatesFilter<"RevisionHistory"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RevisionHistory"> | Date | string;
};
export type RevisionHistoryCreateInput = {
    id?: string;
    pageNumber?: string | null;
    revisionNumber: string;
    changeDescription: string;
    createdAt?: Date | string;
    version: Prisma.DocumentVersionCreateNestedOneWithoutRevisionHistoryInput;
};
export type RevisionHistoryUncheckedCreateInput = {
    id?: string;
    versionId: string;
    pageNumber?: string | null;
    revisionNumber: string;
    changeDescription: string;
    createdAt?: Date | string;
};
export type RevisionHistoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pageNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revisionNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    changeDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.DocumentVersionUpdateOneRequiredWithoutRevisionHistoryNestedInput;
};
export type RevisionHistoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.StringFieldUpdateOperationsInput | string;
    pageNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revisionNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    changeDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevisionHistoryCreateManyInput = {
    id?: string;
    versionId: string;
    pageNumber?: string | null;
    revisionNumber: string;
    changeDescription: string;
    createdAt?: Date | string;
};
export type RevisionHistoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pageNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revisionNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    changeDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevisionHistoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionId?: Prisma.StringFieldUpdateOperationsInput | string;
    pageNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revisionNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    changeDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevisionHistoryListRelationFilter = {
    every?: Prisma.RevisionHistoryWhereInput;
    some?: Prisma.RevisionHistoryWhereInput;
    none?: Prisma.RevisionHistoryWhereInput;
};
export type RevisionHistoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RevisionHistoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    pageNumber?: Prisma.SortOrder;
    revisionNumber?: Prisma.SortOrder;
    changeDescription?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RevisionHistoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    pageNumber?: Prisma.SortOrder;
    revisionNumber?: Prisma.SortOrder;
    changeDescription?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RevisionHistoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    versionId?: Prisma.SortOrder;
    pageNumber?: Prisma.SortOrder;
    revisionNumber?: Prisma.SortOrder;
    changeDescription?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RevisionHistoryCreateNestedManyWithoutVersionInput = {
    create?: Prisma.XOR<Prisma.RevisionHistoryCreateWithoutVersionInput, Prisma.RevisionHistoryUncheckedCreateWithoutVersionInput> | Prisma.RevisionHistoryCreateWithoutVersionInput[] | Prisma.RevisionHistoryUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.RevisionHistoryCreateOrConnectWithoutVersionInput | Prisma.RevisionHistoryCreateOrConnectWithoutVersionInput[];
    createMany?: Prisma.RevisionHistoryCreateManyVersionInputEnvelope;
    connect?: Prisma.RevisionHistoryWhereUniqueInput | Prisma.RevisionHistoryWhereUniqueInput[];
};
export type RevisionHistoryUncheckedCreateNestedManyWithoutVersionInput = {
    create?: Prisma.XOR<Prisma.RevisionHistoryCreateWithoutVersionInput, Prisma.RevisionHistoryUncheckedCreateWithoutVersionInput> | Prisma.RevisionHistoryCreateWithoutVersionInput[] | Prisma.RevisionHistoryUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.RevisionHistoryCreateOrConnectWithoutVersionInput | Prisma.RevisionHistoryCreateOrConnectWithoutVersionInput[];
    createMany?: Prisma.RevisionHistoryCreateManyVersionInputEnvelope;
    connect?: Prisma.RevisionHistoryWhereUniqueInput | Prisma.RevisionHistoryWhereUniqueInput[];
};
export type RevisionHistoryUpdateManyWithoutVersionNestedInput = {
    create?: Prisma.XOR<Prisma.RevisionHistoryCreateWithoutVersionInput, Prisma.RevisionHistoryUncheckedCreateWithoutVersionInput> | Prisma.RevisionHistoryCreateWithoutVersionInput[] | Prisma.RevisionHistoryUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.RevisionHistoryCreateOrConnectWithoutVersionInput | Prisma.RevisionHistoryCreateOrConnectWithoutVersionInput[];
    upsert?: Prisma.RevisionHistoryUpsertWithWhereUniqueWithoutVersionInput | Prisma.RevisionHistoryUpsertWithWhereUniqueWithoutVersionInput[];
    createMany?: Prisma.RevisionHistoryCreateManyVersionInputEnvelope;
    set?: Prisma.RevisionHistoryWhereUniqueInput | Prisma.RevisionHistoryWhereUniqueInput[];
    disconnect?: Prisma.RevisionHistoryWhereUniqueInput | Prisma.RevisionHistoryWhereUniqueInput[];
    delete?: Prisma.RevisionHistoryWhereUniqueInput | Prisma.RevisionHistoryWhereUniqueInput[];
    connect?: Prisma.RevisionHistoryWhereUniqueInput | Prisma.RevisionHistoryWhereUniqueInput[];
    update?: Prisma.RevisionHistoryUpdateWithWhereUniqueWithoutVersionInput | Prisma.RevisionHistoryUpdateWithWhereUniqueWithoutVersionInput[];
    updateMany?: Prisma.RevisionHistoryUpdateManyWithWhereWithoutVersionInput | Prisma.RevisionHistoryUpdateManyWithWhereWithoutVersionInput[];
    deleteMany?: Prisma.RevisionHistoryScalarWhereInput | Prisma.RevisionHistoryScalarWhereInput[];
};
export type RevisionHistoryUncheckedUpdateManyWithoutVersionNestedInput = {
    create?: Prisma.XOR<Prisma.RevisionHistoryCreateWithoutVersionInput, Prisma.RevisionHistoryUncheckedCreateWithoutVersionInput> | Prisma.RevisionHistoryCreateWithoutVersionInput[] | Prisma.RevisionHistoryUncheckedCreateWithoutVersionInput[];
    connectOrCreate?: Prisma.RevisionHistoryCreateOrConnectWithoutVersionInput | Prisma.RevisionHistoryCreateOrConnectWithoutVersionInput[];
    upsert?: Prisma.RevisionHistoryUpsertWithWhereUniqueWithoutVersionInput | Prisma.RevisionHistoryUpsertWithWhereUniqueWithoutVersionInput[];
    createMany?: Prisma.RevisionHistoryCreateManyVersionInputEnvelope;
    set?: Prisma.RevisionHistoryWhereUniqueInput | Prisma.RevisionHistoryWhereUniqueInput[];
    disconnect?: Prisma.RevisionHistoryWhereUniqueInput | Prisma.RevisionHistoryWhereUniqueInput[];
    delete?: Prisma.RevisionHistoryWhereUniqueInput | Prisma.RevisionHistoryWhereUniqueInput[];
    connect?: Prisma.RevisionHistoryWhereUniqueInput | Prisma.RevisionHistoryWhereUniqueInput[];
    update?: Prisma.RevisionHistoryUpdateWithWhereUniqueWithoutVersionInput | Prisma.RevisionHistoryUpdateWithWhereUniqueWithoutVersionInput[];
    updateMany?: Prisma.RevisionHistoryUpdateManyWithWhereWithoutVersionInput | Prisma.RevisionHistoryUpdateManyWithWhereWithoutVersionInput[];
    deleteMany?: Prisma.RevisionHistoryScalarWhereInput | Prisma.RevisionHistoryScalarWhereInput[];
};
export type RevisionHistoryCreateWithoutVersionInput = {
    id?: string;
    pageNumber?: string | null;
    revisionNumber: string;
    changeDescription: string;
    createdAt?: Date | string;
};
export type RevisionHistoryUncheckedCreateWithoutVersionInput = {
    id?: string;
    pageNumber?: string | null;
    revisionNumber: string;
    changeDescription: string;
    createdAt?: Date | string;
};
export type RevisionHistoryCreateOrConnectWithoutVersionInput = {
    where: Prisma.RevisionHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.RevisionHistoryCreateWithoutVersionInput, Prisma.RevisionHistoryUncheckedCreateWithoutVersionInput>;
};
export type RevisionHistoryCreateManyVersionInputEnvelope = {
    data: Prisma.RevisionHistoryCreateManyVersionInput | Prisma.RevisionHistoryCreateManyVersionInput[];
    skipDuplicates?: boolean;
};
export type RevisionHistoryUpsertWithWhereUniqueWithoutVersionInput = {
    where: Prisma.RevisionHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.RevisionHistoryUpdateWithoutVersionInput, Prisma.RevisionHistoryUncheckedUpdateWithoutVersionInput>;
    create: Prisma.XOR<Prisma.RevisionHistoryCreateWithoutVersionInput, Prisma.RevisionHistoryUncheckedCreateWithoutVersionInput>;
};
export type RevisionHistoryUpdateWithWhereUniqueWithoutVersionInput = {
    where: Prisma.RevisionHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.RevisionHistoryUpdateWithoutVersionInput, Prisma.RevisionHistoryUncheckedUpdateWithoutVersionInput>;
};
export type RevisionHistoryUpdateManyWithWhereWithoutVersionInput = {
    where: Prisma.RevisionHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.RevisionHistoryUpdateManyMutationInput, Prisma.RevisionHistoryUncheckedUpdateManyWithoutVersionInput>;
};
export type RevisionHistoryScalarWhereInput = {
    AND?: Prisma.RevisionHistoryScalarWhereInput | Prisma.RevisionHistoryScalarWhereInput[];
    OR?: Prisma.RevisionHistoryScalarWhereInput[];
    NOT?: Prisma.RevisionHistoryScalarWhereInput | Prisma.RevisionHistoryScalarWhereInput[];
    id?: Prisma.StringFilter<"RevisionHistory"> | string;
    versionId?: Prisma.StringFilter<"RevisionHistory"> | string;
    pageNumber?: Prisma.StringNullableFilter<"RevisionHistory"> | string | null;
    revisionNumber?: Prisma.StringFilter<"RevisionHistory"> | string;
    changeDescription?: Prisma.StringFilter<"RevisionHistory"> | string;
    createdAt?: Prisma.DateTimeFilter<"RevisionHistory"> | Date | string;
};
export type RevisionHistoryCreateManyVersionInput = {
    id?: string;
    pageNumber?: string | null;
    revisionNumber: string;
    changeDescription: string;
    createdAt?: Date | string;
};
export type RevisionHistoryUpdateWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pageNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revisionNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    changeDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevisionHistoryUncheckedUpdateWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pageNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revisionNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    changeDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevisionHistoryUncheckedUpdateManyWithoutVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pageNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revisionNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    changeDescription?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevisionHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    versionId?: boolean;
    pageNumber?: boolean;
    revisionNumber?: boolean;
    changeDescription?: boolean;
    createdAt?: boolean;
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["revisionHistory"]>;
export type RevisionHistorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    versionId?: boolean;
    pageNumber?: boolean;
    revisionNumber?: boolean;
    changeDescription?: boolean;
    createdAt?: boolean;
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["revisionHistory"]>;
export type RevisionHistorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    versionId?: boolean;
    pageNumber?: boolean;
    revisionNumber?: boolean;
    changeDescription?: boolean;
    createdAt?: boolean;
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["revisionHistory"]>;
export type RevisionHistorySelectScalar = {
    id?: boolean;
    versionId?: boolean;
    pageNumber?: boolean;
    revisionNumber?: boolean;
    changeDescription?: boolean;
    createdAt?: boolean;
};
export type RevisionHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "versionId" | "pageNumber" | "revisionNumber" | "changeDescription" | "createdAt", ExtArgs["result"]["revisionHistory"]>;
export type RevisionHistoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
};
export type RevisionHistoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
};
export type RevisionHistoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    version?: boolean | Prisma.DocumentVersionDefaultArgs<ExtArgs>;
};
export type $RevisionHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RevisionHistory";
    objects: {
        version: Prisma.$DocumentVersionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        versionId: string;
        pageNumber: string | null;
        revisionNumber: string;
        changeDescription: string;
        createdAt: Date;
    }, ExtArgs["result"]["revisionHistory"]>;
    composites: {};
};
export type RevisionHistoryGetPayload<S extends boolean | null | undefined | RevisionHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RevisionHistoryPayload, S>;
export type RevisionHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RevisionHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RevisionHistoryCountAggregateInputType | true;
};
export interface RevisionHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RevisionHistory'];
        meta: {
            name: 'RevisionHistory';
        };
    };
    findUnique<T extends RevisionHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, RevisionHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RevisionHistoryClient<runtime.Types.Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RevisionHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RevisionHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RevisionHistoryClient<runtime.Types.Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RevisionHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, RevisionHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__RevisionHistoryClient<runtime.Types.Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RevisionHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RevisionHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RevisionHistoryClient<runtime.Types.Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RevisionHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, RevisionHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RevisionHistoryCreateArgs>(args: Prisma.SelectSubset<T, RevisionHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__RevisionHistoryClient<runtime.Types.Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RevisionHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, RevisionHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RevisionHistoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RevisionHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RevisionHistoryDeleteArgs>(args: Prisma.SelectSubset<T, RevisionHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__RevisionHistoryClient<runtime.Types.Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RevisionHistoryUpdateArgs>(args: Prisma.SelectSubset<T, RevisionHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__RevisionHistoryClient<runtime.Types.Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RevisionHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, RevisionHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RevisionHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, RevisionHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RevisionHistoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RevisionHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RevisionHistoryUpsertArgs>(args: Prisma.SelectSubset<T, RevisionHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__RevisionHistoryClient<runtime.Types.Result.GetResult<Prisma.$RevisionHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RevisionHistoryCountArgs>(args?: Prisma.Subset<T, RevisionHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RevisionHistoryCountAggregateOutputType> : number>;
    aggregate<T extends RevisionHistoryAggregateArgs>(args: Prisma.Subset<T, RevisionHistoryAggregateArgs>): Prisma.PrismaPromise<GetRevisionHistoryAggregateType<T>>;
    groupBy<T extends RevisionHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RevisionHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: RevisionHistoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RevisionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevisionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RevisionHistoryFieldRefs;
}
export interface Prisma__RevisionHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    version<T extends Prisma.DocumentVersionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentVersionDefaultArgs<ExtArgs>>): Prisma.Prisma__DocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$DocumentVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RevisionHistoryFieldRefs {
    readonly id: Prisma.FieldRef<"RevisionHistory", 'String'>;
    readonly versionId: Prisma.FieldRef<"RevisionHistory", 'String'>;
    readonly pageNumber: Prisma.FieldRef<"RevisionHistory", 'String'>;
    readonly revisionNumber: Prisma.FieldRef<"RevisionHistory", 'String'>;
    readonly changeDescription: Prisma.FieldRef<"RevisionHistory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"RevisionHistory", 'DateTime'>;
}
export type RevisionHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevisionHistorySelect<ExtArgs> | null;
    omit?: Prisma.RevisionHistoryOmit<ExtArgs> | null;
    include?: Prisma.RevisionHistoryInclude<ExtArgs> | null;
    where: Prisma.RevisionHistoryWhereUniqueInput;
};
export type RevisionHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevisionHistorySelect<ExtArgs> | null;
    omit?: Prisma.RevisionHistoryOmit<ExtArgs> | null;
    include?: Prisma.RevisionHistoryInclude<ExtArgs> | null;
    where: Prisma.RevisionHistoryWhereUniqueInput;
};
export type RevisionHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevisionHistorySelect<ExtArgs> | null;
    omit?: Prisma.RevisionHistoryOmit<ExtArgs> | null;
    include?: Prisma.RevisionHistoryInclude<ExtArgs> | null;
    where?: Prisma.RevisionHistoryWhereInput;
    orderBy?: Prisma.RevisionHistoryOrderByWithRelationInput | Prisma.RevisionHistoryOrderByWithRelationInput[];
    cursor?: Prisma.RevisionHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RevisionHistoryScalarFieldEnum | Prisma.RevisionHistoryScalarFieldEnum[];
};
export type RevisionHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevisionHistorySelect<ExtArgs> | null;
    omit?: Prisma.RevisionHistoryOmit<ExtArgs> | null;
    include?: Prisma.RevisionHistoryInclude<ExtArgs> | null;
    where?: Prisma.RevisionHistoryWhereInput;
    orderBy?: Prisma.RevisionHistoryOrderByWithRelationInput | Prisma.RevisionHistoryOrderByWithRelationInput[];
    cursor?: Prisma.RevisionHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RevisionHistoryScalarFieldEnum | Prisma.RevisionHistoryScalarFieldEnum[];
};
export type RevisionHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevisionHistorySelect<ExtArgs> | null;
    omit?: Prisma.RevisionHistoryOmit<ExtArgs> | null;
    include?: Prisma.RevisionHistoryInclude<ExtArgs> | null;
    where?: Prisma.RevisionHistoryWhereInput;
    orderBy?: Prisma.RevisionHistoryOrderByWithRelationInput | Prisma.RevisionHistoryOrderByWithRelationInput[];
    cursor?: Prisma.RevisionHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RevisionHistoryScalarFieldEnum | Prisma.RevisionHistoryScalarFieldEnum[];
};
export type RevisionHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevisionHistorySelect<ExtArgs> | null;
    omit?: Prisma.RevisionHistoryOmit<ExtArgs> | null;
    include?: Prisma.RevisionHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RevisionHistoryCreateInput, Prisma.RevisionHistoryUncheckedCreateInput>;
};
export type RevisionHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RevisionHistoryCreateManyInput | Prisma.RevisionHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RevisionHistoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevisionHistorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RevisionHistoryOmit<ExtArgs> | null;
    data: Prisma.RevisionHistoryCreateManyInput | Prisma.RevisionHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RevisionHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RevisionHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevisionHistorySelect<ExtArgs> | null;
    omit?: Prisma.RevisionHistoryOmit<ExtArgs> | null;
    include?: Prisma.RevisionHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RevisionHistoryUpdateInput, Prisma.RevisionHistoryUncheckedUpdateInput>;
    where: Prisma.RevisionHistoryWhereUniqueInput;
};
export type RevisionHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RevisionHistoryUpdateManyMutationInput, Prisma.RevisionHistoryUncheckedUpdateManyInput>;
    where?: Prisma.RevisionHistoryWhereInput;
    limit?: number;
};
export type RevisionHistoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevisionHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RevisionHistoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RevisionHistoryUpdateManyMutationInput, Prisma.RevisionHistoryUncheckedUpdateManyInput>;
    where?: Prisma.RevisionHistoryWhereInput;
    limit?: number;
    include?: Prisma.RevisionHistoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RevisionHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevisionHistorySelect<ExtArgs> | null;
    omit?: Prisma.RevisionHistoryOmit<ExtArgs> | null;
    include?: Prisma.RevisionHistoryInclude<ExtArgs> | null;
    where: Prisma.RevisionHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.RevisionHistoryCreateInput, Prisma.RevisionHistoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RevisionHistoryUpdateInput, Prisma.RevisionHistoryUncheckedUpdateInput>;
};
export type RevisionHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevisionHistorySelect<ExtArgs> | null;
    omit?: Prisma.RevisionHistoryOmit<ExtArgs> | null;
    include?: Prisma.RevisionHistoryInclude<ExtArgs> | null;
    where: Prisma.RevisionHistoryWhereUniqueInput;
};
export type RevisionHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RevisionHistoryWhereInput;
    limit?: number;
};
export type RevisionHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevisionHistorySelect<ExtArgs> | null;
    omit?: Prisma.RevisionHistoryOmit<ExtArgs> | null;
    include?: Prisma.RevisionHistoryInclude<ExtArgs> | null;
};
