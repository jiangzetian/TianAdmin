const dataOption= {
    span:6,
    data: [
        {
            click: function (item) {
                alert(JSON.stringify(item));
            },
            count: 100,
            title: '总访问量',
            href:'https://avuejs.com',
            target:'_blank'
        },
        {
            click: function (item) {
                alert(JSON.stringify(item));
            },
            count: '3,000',
            title: '总文章数',
            href:'https://avuejs.com',
            target:'_blank'
        },
        {
            click: function (item) {
                alert(JSON.stringify(item));
            },
            count: '20,000',
            title: '总分类数',
            href:'https://avuejs.com',
            target:'_blank'
        },
        {
            click: function (item) {
                alert(JSON.stringify(item));
            },
            count: '40,000',
            title: '今日文章',
            href:'https://avuejs.com',
            target:'_blank'
        }
    ]
};

export {dataOption}