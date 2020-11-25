import router from "../../router";
const dataOption= {
    span:6,
    data: [
        {
            count: 0,
            title: '总访问量',
        },
        {
            count: 0,
            title: '总点赞数',
        },
        {
            count: 0,
            title: '总文章数',
            click: function (item) {
                router.push({path:'/article/show'})
            },
        },
        {
            count: 0,
            title: '总分类数',
            click: function (item) {
                router.push({path:'/article/category'})
            },
        }
    ]
};

export {dataOption}
