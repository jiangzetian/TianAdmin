const categoryTableOption =  {
    title:'社媒管理',
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
const mavonEditorOption =  {
    bold: true, // 粗体
    italic: true, // 斜体
    header: true, // 标题
    underline: true, // 下划线
    strikethrough: true, // 中划线
    mark: true, // 标记
    superscript: true, // 上角标
    subscript: true, // 下角标
    quote: true, // 引用
    ol: true, // 有序列表
    ul: true, // 无序列表
    link: true, // 链接
    imagelink: true, // 图片链接
    code: true, // code
    table: true, // 表格
    fullscreen: true, // 全屏编辑
    readmodel: true, // 沉浸式阅读
    htmlcode: true, // 展示html源码
    help: true, // 帮助
    /* 1.3.5 */
    undo: false, // 上一步
    redo: false, // 下一步
    trash: false, // 清空
    save: false, // 保存（触发events中的save事件）
    /* 1.4.2 */
    navigation: true, // 导航目录
    /* 2.1.8 */
    alignleft: true, // 左对齐
    aligncenter: true, // 居中
    alignright: true, // 右对齐
    /* 2.2.1 */
    subfield: true, // 单双栏模式
    preview: true, // 预览
};
export {
    categoryTableOption,
    mavonEditorOption
}
