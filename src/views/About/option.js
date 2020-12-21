const categoryTableOption =  {
    title:'文章类别',
    page:true,
    align:'center',
    menuAlign:'center',
    searchShow:false,
    column:[
        {
            label:'编号',
            prop:'id',
            display:false,
        },
        {
            label:'名称',
            prop:'name',
            rules: [{
                required: true,
                message: "请输入联系的名称",
            }],
            search:true,
            searchRules: [{
                required: false,
                message: "请输入联系的名称",
                trigger: "blur"
            }],
        },
        {
            label:'描述',
            prop:'desc',
            rules: [{
                required: true,
                message: "请输入联系的描述",
            }],
            searchRules: [{
                required: false,
                message: "请输入联系的描述",
                trigger: "blur"
            }],
        },
        {
            label: "链接",
            prop:'url',
            type:'url',
            alone:true,
            overHidden:true,
            rules: [{
                required: true,
                message: "请输入分类的排序等级",
            }]
        },
        {
            label: "图片",
            prop:'img',
            type:'img',
            alone:true,
            overHidden:true,
            rules: [{
                required: true,
                message: "请输入分类的排序等级",
            }]
        },
        {
            label: "颜色",
            prop:'color',
            type:'color',
            rules: [{
                required: true,
                message: "请输入分类的排序等级",
            }]
        },
        {
            label: "排序",
            prop:'sort',
            type:'number',
            precision:0,
            value:0,
            rules: [{
                required: true,
                message: "请输入分类的排序等级",
            }]
        }
    ]
};

export {
    categoryTableOption,
}
