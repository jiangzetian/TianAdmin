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

export {
    showTableOption,
    categoryTableOption
}