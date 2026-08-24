import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FormFieldModel = runtime.Types.Result.DefaultSelection<Prisma.$FormFieldPayload>;
export type AggregateFormField = {
    _count: FormFieldCountAggregateOutputType | null;
    _avg: FormFieldAvgAggregateOutputType | null;
    _sum: FormFieldSumAggregateOutputType | null;
    _min: FormFieldMinAggregateOutputType | null;
    _max: FormFieldMaxAggregateOutputType | null;
};
export type FormFieldAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type FormFieldSumAggregateOutputType = {
    sortOrder: number | null;
};
export type FormFieldMinAggregateOutputType = {
    id: string | null;
    templateId: string | null;
    fieldKey: string | null;
    label: string | null;
    type: $Enums.FormFieldType | null;
    required: boolean | null;
    sortOrder: number | null;
};
export type FormFieldMaxAggregateOutputType = {
    id: string | null;
    templateId: string | null;
    fieldKey: string | null;
    label: string | null;
    type: $Enums.FormFieldType | null;
    required: boolean | null;
    sortOrder: number | null;
};
export type FormFieldCountAggregateOutputType = {
    id: number;
    templateId: number;
    fieldKey: number;
    label: number;
    type: number;
    required: number;
    optionsJson: number;
    sortOrder: number;
    _all: number;
};
export type FormFieldAvgAggregateInputType = {
    sortOrder?: true;
};
export type FormFieldSumAggregateInputType = {
    sortOrder?: true;
};
export type FormFieldMinAggregateInputType = {
    id?: true;
    templateId?: true;
    fieldKey?: true;
    label?: true;
    type?: true;
    required?: true;
    sortOrder?: true;
};
export type FormFieldMaxAggregateInputType = {
    id?: true;
    templateId?: true;
    fieldKey?: true;
    label?: true;
    type?: true;
    required?: true;
    sortOrder?: true;
};
export type FormFieldCountAggregateInputType = {
    id?: true;
    templateId?: true;
    fieldKey?: true;
    label?: true;
    type?: true;
    required?: true;
    optionsJson?: true;
    sortOrder?: true;
    _all?: true;
};
export type FormFieldAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormFieldWhereInput;
    orderBy?: Prisma.FormFieldOrderByWithRelationInput | Prisma.FormFieldOrderByWithRelationInput[];
    cursor?: Prisma.FormFieldWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FormFieldCountAggregateInputType;
    _avg?: FormFieldAvgAggregateInputType;
    _sum?: FormFieldSumAggregateInputType;
    _min?: FormFieldMinAggregateInputType;
    _max?: FormFieldMaxAggregateInputType;
};
export type GetFormFieldAggregateType<T extends FormFieldAggregateArgs> = {
    [P in keyof T & keyof AggregateFormField]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFormField[P]> : Prisma.GetScalarType<T[P], AggregateFormField[P]>;
};
export type FormFieldGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormFieldWhereInput;
    orderBy?: Prisma.FormFieldOrderByWithAggregationInput | Prisma.FormFieldOrderByWithAggregationInput[];
    by: Prisma.FormFieldScalarFieldEnum[] | Prisma.FormFieldScalarFieldEnum;
    having?: Prisma.FormFieldScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FormFieldCountAggregateInputType | true;
    _avg?: FormFieldAvgAggregateInputType;
    _sum?: FormFieldSumAggregateInputType;
    _min?: FormFieldMinAggregateInputType;
    _max?: FormFieldMaxAggregateInputType;
};
export type FormFieldGroupByOutputType = {
    id: string;
    templateId: string;
    fieldKey: string;
    label: string;
    type: $Enums.FormFieldType;
    required: boolean;
    optionsJson: runtime.JsonValue | null;
    sortOrder: number;
    _count: FormFieldCountAggregateOutputType | null;
    _avg: FormFieldAvgAggregateOutputType | null;
    _sum: FormFieldSumAggregateOutputType | null;
    _min: FormFieldMinAggregateOutputType | null;
    _max: FormFieldMaxAggregateOutputType | null;
};
export type GetFormFieldGroupByPayload<T extends FormFieldGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FormFieldGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FormFieldGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FormFieldGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FormFieldGroupByOutputType[P]>;
}>>;
export type FormFieldWhereInput = {
    AND?: Prisma.FormFieldWhereInput | Prisma.FormFieldWhereInput[];
    OR?: Prisma.FormFieldWhereInput[];
    NOT?: Prisma.FormFieldWhereInput | Prisma.FormFieldWhereInput[];
    id?: Prisma.StringFilter<"FormField"> | string;
    templateId?: Prisma.StringFilter<"FormField"> | string;
    fieldKey?: Prisma.StringFilter<"FormField"> | string;
    label?: Prisma.StringFilter<"FormField"> | string;
    type?: Prisma.EnumFormFieldTypeFilter<"FormField"> | $Enums.FormFieldType;
    required?: Prisma.BoolFilter<"FormField"> | boolean;
    optionsJson?: Prisma.JsonNullableFilter<"FormField">;
    sortOrder?: Prisma.IntFilter<"FormField"> | number;
    template?: Prisma.XOR<Prisma.FormTemplateScalarRelationFilter, Prisma.FormTemplateWhereInput>;
};
export type FormFieldOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    fieldKey?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    required?: Prisma.SortOrder;
    optionsJson?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    template?: Prisma.FormTemplateOrderByWithRelationInput;
};
export type FormFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    templateId_fieldKey?: Prisma.FormFieldTemplateIdFieldKeyCompoundUniqueInput;
    AND?: Prisma.FormFieldWhereInput | Prisma.FormFieldWhereInput[];
    OR?: Prisma.FormFieldWhereInput[];
    NOT?: Prisma.FormFieldWhereInput | Prisma.FormFieldWhereInput[];
    templateId?: Prisma.StringFilter<"FormField"> | string;
    fieldKey?: Prisma.StringFilter<"FormField"> | string;
    label?: Prisma.StringFilter<"FormField"> | string;
    type?: Prisma.EnumFormFieldTypeFilter<"FormField"> | $Enums.FormFieldType;
    required?: Prisma.BoolFilter<"FormField"> | boolean;
    optionsJson?: Prisma.JsonNullableFilter<"FormField">;
    sortOrder?: Prisma.IntFilter<"FormField"> | number;
    template?: Prisma.XOR<Prisma.FormTemplateScalarRelationFilter, Prisma.FormTemplateWhereInput>;
}, "id" | "templateId_fieldKey">;
export type FormFieldOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    fieldKey?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    required?: Prisma.SortOrder;
    optionsJson?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    _count?: Prisma.FormFieldCountOrderByAggregateInput;
    _avg?: Prisma.FormFieldAvgOrderByAggregateInput;
    _max?: Prisma.FormFieldMaxOrderByAggregateInput;
    _min?: Prisma.FormFieldMinOrderByAggregateInput;
    _sum?: Prisma.FormFieldSumOrderByAggregateInput;
};
export type FormFieldScalarWhereWithAggregatesInput = {
    AND?: Prisma.FormFieldScalarWhereWithAggregatesInput | Prisma.FormFieldScalarWhereWithAggregatesInput[];
    OR?: Prisma.FormFieldScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FormFieldScalarWhereWithAggregatesInput | Prisma.FormFieldScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FormField"> | string;
    templateId?: Prisma.StringWithAggregatesFilter<"FormField"> | string;
    fieldKey?: Prisma.StringWithAggregatesFilter<"FormField"> | string;
    label?: Prisma.StringWithAggregatesFilter<"FormField"> | string;
    type?: Prisma.EnumFormFieldTypeWithAggregatesFilter<"FormField"> | $Enums.FormFieldType;
    required?: Prisma.BoolWithAggregatesFilter<"FormField"> | boolean;
    optionsJson?: Prisma.JsonNullableWithAggregatesFilter<"FormField">;
    sortOrder?: Prisma.IntWithAggregatesFilter<"FormField"> | number;
};
export type FormFieldCreateInput = {
    id?: string;
    fieldKey: string;
    label: string;
    type: $Enums.FormFieldType;
    required?: boolean;
    optionsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
    template: Prisma.FormTemplateCreateNestedOneWithoutFieldsInput;
};
export type FormFieldUncheckedCreateInput = {
    id?: string;
    templateId: string;
    fieldKey: string;
    label: string;
    type: $Enums.FormFieldType;
    required?: boolean;
    optionsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
};
export type FormFieldUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldKey?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumFormFieldTypeFieldUpdateOperationsInput | $Enums.FormFieldType;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    optionsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    template?: Prisma.FormTemplateUpdateOneRequiredWithoutFieldsNestedInput;
};
export type FormFieldUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldKey?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumFormFieldTypeFieldUpdateOperationsInput | $Enums.FormFieldType;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    optionsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FormFieldCreateManyInput = {
    id?: string;
    templateId: string;
    fieldKey: string;
    label: string;
    type: $Enums.FormFieldType;
    required?: boolean;
    optionsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
};
export type FormFieldUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldKey?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumFormFieldTypeFieldUpdateOperationsInput | $Enums.FormFieldType;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    optionsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FormFieldUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldKey?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumFormFieldTypeFieldUpdateOperationsInput | $Enums.FormFieldType;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    optionsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FormFieldListRelationFilter = {
    every?: Prisma.FormFieldWhereInput;
    some?: Prisma.FormFieldWhereInput;
    none?: Prisma.FormFieldWhereInput;
};
export type FormFieldOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FormFieldTemplateIdFieldKeyCompoundUniqueInput = {
    templateId: string;
    fieldKey: string;
};
export type FormFieldCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    fieldKey?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    required?: Prisma.SortOrder;
    optionsJson?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type FormFieldAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type FormFieldMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    fieldKey?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    required?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type FormFieldMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    fieldKey?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    required?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type FormFieldSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type FormFieldCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.FormFieldCreateWithoutTemplateInput, Prisma.FormFieldUncheckedCreateWithoutTemplateInput> | Prisma.FormFieldCreateWithoutTemplateInput[] | Prisma.FormFieldUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.FormFieldCreateOrConnectWithoutTemplateInput | Prisma.FormFieldCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.FormFieldCreateManyTemplateInputEnvelope;
    connect?: Prisma.FormFieldWhereUniqueInput | Prisma.FormFieldWhereUniqueInput[];
};
export type FormFieldUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: Prisma.XOR<Prisma.FormFieldCreateWithoutTemplateInput, Prisma.FormFieldUncheckedCreateWithoutTemplateInput> | Prisma.FormFieldCreateWithoutTemplateInput[] | Prisma.FormFieldUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.FormFieldCreateOrConnectWithoutTemplateInput | Prisma.FormFieldCreateOrConnectWithoutTemplateInput[];
    createMany?: Prisma.FormFieldCreateManyTemplateInputEnvelope;
    connect?: Prisma.FormFieldWhereUniqueInput | Prisma.FormFieldWhereUniqueInput[];
};
export type FormFieldUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.FormFieldCreateWithoutTemplateInput, Prisma.FormFieldUncheckedCreateWithoutTemplateInput> | Prisma.FormFieldCreateWithoutTemplateInput[] | Prisma.FormFieldUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.FormFieldCreateOrConnectWithoutTemplateInput | Prisma.FormFieldCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.FormFieldUpsertWithWhereUniqueWithoutTemplateInput | Prisma.FormFieldUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.FormFieldCreateManyTemplateInputEnvelope;
    set?: Prisma.FormFieldWhereUniqueInput | Prisma.FormFieldWhereUniqueInput[];
    disconnect?: Prisma.FormFieldWhereUniqueInput | Prisma.FormFieldWhereUniqueInput[];
    delete?: Prisma.FormFieldWhereUniqueInput | Prisma.FormFieldWhereUniqueInput[];
    connect?: Prisma.FormFieldWhereUniqueInput | Prisma.FormFieldWhereUniqueInput[];
    update?: Prisma.FormFieldUpdateWithWhereUniqueWithoutTemplateInput | Prisma.FormFieldUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.FormFieldUpdateManyWithWhereWithoutTemplateInput | Prisma.FormFieldUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.FormFieldScalarWhereInput | Prisma.FormFieldScalarWhereInput[];
};
export type FormFieldUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: Prisma.XOR<Prisma.FormFieldCreateWithoutTemplateInput, Prisma.FormFieldUncheckedCreateWithoutTemplateInput> | Prisma.FormFieldCreateWithoutTemplateInput[] | Prisma.FormFieldUncheckedCreateWithoutTemplateInput[];
    connectOrCreate?: Prisma.FormFieldCreateOrConnectWithoutTemplateInput | Prisma.FormFieldCreateOrConnectWithoutTemplateInput[];
    upsert?: Prisma.FormFieldUpsertWithWhereUniqueWithoutTemplateInput | Prisma.FormFieldUpsertWithWhereUniqueWithoutTemplateInput[];
    createMany?: Prisma.FormFieldCreateManyTemplateInputEnvelope;
    set?: Prisma.FormFieldWhereUniqueInput | Prisma.FormFieldWhereUniqueInput[];
    disconnect?: Prisma.FormFieldWhereUniqueInput | Prisma.FormFieldWhereUniqueInput[];
    delete?: Prisma.FormFieldWhereUniqueInput | Prisma.FormFieldWhereUniqueInput[];
    connect?: Prisma.FormFieldWhereUniqueInput | Prisma.FormFieldWhereUniqueInput[];
    update?: Prisma.FormFieldUpdateWithWhereUniqueWithoutTemplateInput | Prisma.FormFieldUpdateWithWhereUniqueWithoutTemplateInput[];
    updateMany?: Prisma.FormFieldUpdateManyWithWhereWithoutTemplateInput | Prisma.FormFieldUpdateManyWithWhereWithoutTemplateInput[];
    deleteMany?: Prisma.FormFieldScalarWhereInput | Prisma.FormFieldScalarWhereInput[];
};
export type EnumFormFieldTypeFieldUpdateOperationsInput = {
    set?: $Enums.FormFieldType;
};
export type FormFieldCreateWithoutTemplateInput = {
    id?: string;
    fieldKey: string;
    label: string;
    type: $Enums.FormFieldType;
    required?: boolean;
    optionsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
};
export type FormFieldUncheckedCreateWithoutTemplateInput = {
    id?: string;
    fieldKey: string;
    label: string;
    type: $Enums.FormFieldType;
    required?: boolean;
    optionsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
};
export type FormFieldCreateOrConnectWithoutTemplateInput = {
    where: Prisma.FormFieldWhereUniqueInput;
    create: Prisma.XOR<Prisma.FormFieldCreateWithoutTemplateInput, Prisma.FormFieldUncheckedCreateWithoutTemplateInput>;
};
export type FormFieldCreateManyTemplateInputEnvelope = {
    data: Prisma.FormFieldCreateManyTemplateInput | Prisma.FormFieldCreateManyTemplateInput[];
    skipDuplicates?: boolean;
};
export type FormFieldUpsertWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.FormFieldWhereUniqueInput;
    update: Prisma.XOR<Prisma.FormFieldUpdateWithoutTemplateInput, Prisma.FormFieldUncheckedUpdateWithoutTemplateInput>;
    create: Prisma.XOR<Prisma.FormFieldCreateWithoutTemplateInput, Prisma.FormFieldUncheckedCreateWithoutTemplateInput>;
};
export type FormFieldUpdateWithWhereUniqueWithoutTemplateInput = {
    where: Prisma.FormFieldWhereUniqueInput;
    data: Prisma.XOR<Prisma.FormFieldUpdateWithoutTemplateInput, Prisma.FormFieldUncheckedUpdateWithoutTemplateInput>;
};
export type FormFieldUpdateManyWithWhereWithoutTemplateInput = {
    where: Prisma.FormFieldScalarWhereInput;
    data: Prisma.XOR<Prisma.FormFieldUpdateManyMutationInput, Prisma.FormFieldUncheckedUpdateManyWithoutTemplateInput>;
};
export type FormFieldScalarWhereInput = {
    AND?: Prisma.FormFieldScalarWhereInput | Prisma.FormFieldScalarWhereInput[];
    OR?: Prisma.FormFieldScalarWhereInput[];
    NOT?: Prisma.FormFieldScalarWhereInput | Prisma.FormFieldScalarWhereInput[];
    id?: Prisma.StringFilter<"FormField"> | string;
    templateId?: Prisma.StringFilter<"FormField"> | string;
    fieldKey?: Prisma.StringFilter<"FormField"> | string;
    label?: Prisma.StringFilter<"FormField"> | string;
    type?: Prisma.EnumFormFieldTypeFilter<"FormField"> | $Enums.FormFieldType;
    required?: Prisma.BoolFilter<"FormField"> | boolean;
    optionsJson?: Prisma.JsonNullableFilter<"FormField">;
    sortOrder?: Prisma.IntFilter<"FormField"> | number;
};
export type FormFieldCreateManyTemplateInput = {
    id?: string;
    fieldKey: string;
    label: string;
    type: $Enums.FormFieldType;
    required?: boolean;
    optionsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
};
export type FormFieldUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldKey?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumFormFieldTypeFieldUpdateOperationsInput | $Enums.FormFieldType;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    optionsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FormFieldUncheckedUpdateWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldKey?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumFormFieldTypeFieldUpdateOperationsInput | $Enums.FormFieldType;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    optionsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FormFieldUncheckedUpdateManyWithoutTemplateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldKey?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumFormFieldTypeFieldUpdateOperationsInput | $Enums.FormFieldType;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    optionsJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type FormFieldSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    templateId?: boolean;
    fieldKey?: boolean;
    label?: boolean;
    type?: boolean;
    required?: boolean;
    optionsJson?: boolean;
    sortOrder?: boolean;
    template?: boolean | Prisma.FormTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["formField"]>;
export type FormFieldSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    templateId?: boolean;
    fieldKey?: boolean;
    label?: boolean;
    type?: boolean;
    required?: boolean;
    optionsJson?: boolean;
    sortOrder?: boolean;
    template?: boolean | Prisma.FormTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["formField"]>;
export type FormFieldSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    templateId?: boolean;
    fieldKey?: boolean;
    label?: boolean;
    type?: boolean;
    required?: boolean;
    optionsJson?: boolean;
    sortOrder?: boolean;
    template?: boolean | Prisma.FormTemplateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["formField"]>;
export type FormFieldSelectScalar = {
    id?: boolean;
    templateId?: boolean;
    fieldKey?: boolean;
    label?: boolean;
    type?: boolean;
    required?: boolean;
    optionsJson?: boolean;
    sortOrder?: boolean;
};
export type FormFieldOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "templateId" | "fieldKey" | "label" | "type" | "required" | "optionsJson" | "sortOrder", ExtArgs["result"]["formField"]>;
export type FormFieldInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    template?: boolean | Prisma.FormTemplateDefaultArgs<ExtArgs>;
};
export type FormFieldIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    template?: boolean | Prisma.FormTemplateDefaultArgs<ExtArgs>;
};
export type FormFieldIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    template?: boolean | Prisma.FormTemplateDefaultArgs<ExtArgs>;
};
export type $FormFieldPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FormField";
    objects: {
        template: Prisma.$FormTemplatePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        templateId: string;
        fieldKey: string;
        label: string;
        type: $Enums.FormFieldType;
        required: boolean;
        optionsJson: runtime.JsonValue | null;
        sortOrder: number;
    }, ExtArgs["result"]["formField"]>;
    composites: {};
};
export type FormFieldGetPayload<S extends boolean | null | undefined | FormFieldDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FormFieldPayload, S>;
export type FormFieldCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FormFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FormFieldCountAggregateInputType | true;
};
export interface FormFieldDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FormField'];
        meta: {
            name: 'FormField';
        };
    };
    findUnique<T extends FormFieldFindUniqueArgs>(args: Prisma.SelectSubset<T, FormFieldFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FormFieldClient<runtime.Types.Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FormFieldFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FormFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FormFieldClient<runtime.Types.Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FormFieldFindFirstArgs>(args?: Prisma.SelectSubset<T, FormFieldFindFirstArgs<ExtArgs>>): Prisma.Prisma__FormFieldClient<runtime.Types.Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FormFieldFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FormFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FormFieldClient<runtime.Types.Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FormFieldFindManyArgs>(args?: Prisma.SelectSubset<T, FormFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FormFieldCreateArgs>(args: Prisma.SelectSubset<T, FormFieldCreateArgs<ExtArgs>>): Prisma.Prisma__FormFieldClient<runtime.Types.Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FormFieldCreateManyArgs>(args?: Prisma.SelectSubset<T, FormFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FormFieldCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FormFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FormFieldDeleteArgs>(args: Prisma.SelectSubset<T, FormFieldDeleteArgs<ExtArgs>>): Prisma.Prisma__FormFieldClient<runtime.Types.Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FormFieldUpdateArgs>(args: Prisma.SelectSubset<T, FormFieldUpdateArgs<ExtArgs>>): Prisma.Prisma__FormFieldClient<runtime.Types.Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FormFieldDeleteManyArgs>(args?: Prisma.SelectSubset<T, FormFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FormFieldUpdateManyArgs>(args: Prisma.SelectSubset<T, FormFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FormFieldUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FormFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FormFieldUpsertArgs>(args: Prisma.SelectSubset<T, FormFieldUpsertArgs<ExtArgs>>): Prisma.Prisma__FormFieldClient<runtime.Types.Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FormFieldCountArgs>(args?: Prisma.Subset<T, FormFieldCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FormFieldCountAggregateOutputType> : number>;
    aggregate<T extends FormFieldAggregateArgs>(args: Prisma.Subset<T, FormFieldAggregateArgs>): Prisma.PrismaPromise<GetFormFieldAggregateType<T>>;
    groupBy<T extends FormFieldGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FormFieldGroupByArgs['orderBy'];
    } : {
        orderBy?: FormFieldGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FormFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FormFieldFieldRefs;
}
export interface Prisma__FormFieldClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    template<T extends Prisma.FormTemplateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FormTemplateDefaultArgs<ExtArgs>>): Prisma.Prisma__FormTemplateClient<runtime.Types.Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FormFieldFieldRefs {
    readonly id: Prisma.FieldRef<"FormField", 'String'>;
    readonly templateId: Prisma.FieldRef<"FormField", 'String'>;
    readonly fieldKey: Prisma.FieldRef<"FormField", 'String'>;
    readonly label: Prisma.FieldRef<"FormField", 'String'>;
    readonly type: Prisma.FieldRef<"FormField", 'FormFieldType'>;
    readonly required: Prisma.FieldRef<"FormField", 'Boolean'>;
    readonly optionsJson: Prisma.FieldRef<"FormField", 'Json'>;
    readonly sortOrder: Prisma.FieldRef<"FormField", 'Int'>;
}
export type FormFieldFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormFieldSelect<ExtArgs> | null;
    omit?: Prisma.FormFieldOmit<ExtArgs> | null;
    include?: Prisma.FormFieldInclude<ExtArgs> | null;
    where: Prisma.FormFieldWhereUniqueInput;
};
export type FormFieldFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormFieldSelect<ExtArgs> | null;
    omit?: Prisma.FormFieldOmit<ExtArgs> | null;
    include?: Prisma.FormFieldInclude<ExtArgs> | null;
    where: Prisma.FormFieldWhereUniqueInput;
};
export type FormFieldFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FormFieldFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FormFieldFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FormFieldCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormFieldSelect<ExtArgs> | null;
    omit?: Prisma.FormFieldOmit<ExtArgs> | null;
    include?: Prisma.FormFieldInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FormFieldCreateInput, Prisma.FormFieldUncheckedCreateInput>;
};
export type FormFieldCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FormFieldCreateManyInput | Prisma.FormFieldCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FormFieldCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormFieldSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FormFieldOmit<ExtArgs> | null;
    data: Prisma.FormFieldCreateManyInput | Prisma.FormFieldCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FormFieldIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FormFieldUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormFieldSelect<ExtArgs> | null;
    omit?: Prisma.FormFieldOmit<ExtArgs> | null;
    include?: Prisma.FormFieldInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FormFieldUpdateInput, Prisma.FormFieldUncheckedUpdateInput>;
    where: Prisma.FormFieldWhereUniqueInput;
};
export type FormFieldUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FormFieldUpdateManyMutationInput, Prisma.FormFieldUncheckedUpdateManyInput>;
    where?: Prisma.FormFieldWhereInput;
    limit?: number;
};
export type FormFieldUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormFieldSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FormFieldOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FormFieldUpdateManyMutationInput, Prisma.FormFieldUncheckedUpdateManyInput>;
    where?: Prisma.FormFieldWhereInput;
    limit?: number;
    include?: Prisma.FormFieldIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FormFieldUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormFieldSelect<ExtArgs> | null;
    omit?: Prisma.FormFieldOmit<ExtArgs> | null;
    include?: Prisma.FormFieldInclude<ExtArgs> | null;
    where: Prisma.FormFieldWhereUniqueInput;
    create: Prisma.XOR<Prisma.FormFieldCreateInput, Prisma.FormFieldUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FormFieldUpdateInput, Prisma.FormFieldUncheckedUpdateInput>;
};
export type FormFieldDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormFieldSelect<ExtArgs> | null;
    omit?: Prisma.FormFieldOmit<ExtArgs> | null;
    include?: Prisma.FormFieldInclude<ExtArgs> | null;
    where: Prisma.FormFieldWhereUniqueInput;
};
export type FormFieldDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FormFieldWhereInput;
    limit?: number;
};
export type FormFieldDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FormFieldSelect<ExtArgs> | null;
    omit?: Prisma.FormFieldOmit<ExtArgs> | null;
    include?: Prisma.FormFieldInclude<ExtArgs> | null;
};
