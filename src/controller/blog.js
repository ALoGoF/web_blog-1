const getList = (author, keyword) => {
    return [{
        id: 1,
        title: '标题',
        content: '内容',
        createTime: 1600821926523,
        author: 'zhangsan'
    },{
        id: 2,
        title: '标题',
        content: '内容',
        createTime: 1600821988289,
        author: 'lisi'
    }]
};

const getDetail = (id) => {

    return {
        id: 1,
        title: '标题',
        content: '内容',
        createTime: 1600821926523,
        author: 'zhangsan'
    }
}

module.exports = {
    getList,
    getDetail
}