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


const newBlog = (blogData = {}) => {
    return {
        id: 3
    }
}

// 修改
const updateBlog = (updateData = {}) => {
    return {
        id: 4,
        title: '修改标题',
        content: '修改内容'
    }
}

// 删除
const delBlog = (body) => {
    let res ={
        id: body.id
    }
    return res
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}