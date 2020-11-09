const showTableOption = {
    title:'文章列表',
    page:false,
    align:'center',
    menuAlign:'center',
    column:[
        {
            label:'姓名',
            prop:'name'
        },
        {
            label:'性别',
            prop:'sex'
        },{
            label: "日期",
            prop: "date",
            type: "date",
            format: "yyyy-MM-dd hh:mm:ss",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
        }
    ]
};

const categoryTableOption =  {
    title:'文章类别',
    page:false,
    align:'center',
    menuAlign:'center',
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
                message: "请输入分类的名称",
            }]
        },{
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
    showTableOption,
    categoryTableOption
}