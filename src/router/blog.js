
const { getList, getDetail } = require('../controller/blog');
const { SuccessModel, ErrorMolde } = require('../model/resModel');
const handleBlogRouter = (req, res) => {
    const method = req.method;
    const path = req.path
    if(method === 'GET' && path === '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const listData = getList(author, keyword);
        return new SuccessModel(listData)
    };
    if(method === 'GET' && path === '/api/blog/detail') {
        const id = req.query.id;
        const detailData = getDetail(id)
        return new SuccessModel(detailData)
    };
    if(method === 'POST' && path === '/api/blog/new') {
        return {
            message: '这是新增博客的接口'
        }
    };
    if(method === 'POST' && path === '/api/blog/update') {
        return {
            message: '这是更新博客的接口'
        }
    };
    if(method === 'POST' && path === 'api/blog/del') {
        return {
            message: '这是删除博客的接口'
        }
    }
}

module.exports = handleBlogRouter;
// 获取博客列表的接口 /api/blog/list  GET
// 获取博客内容的接口 /api/blog/detail GET
// 新增一篇博客 /api/blog/new POST
// 修改一篇博客的接口 /api/blog/update POST
// 删除一篇博客 /api/blog/del POST