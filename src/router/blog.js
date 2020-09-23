
const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog');
const { SuccessModel, ErrorMolde } = require('../model/resModel');


const handleBlogRouter = (req, res) => {
    const method = req.method;

    if(method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const listData = getList(author, keyword);
        return new SuccessModel(listData)
    };
    if(method === 'GET' && req.path === '/api/blog/detail') {
        const id = req.query.id;
        const detailData = getDetail(id)
        return new SuccessModel(detailData)
    };
    if(method === 'POST' && req.path === '/api/blog/new') {
        const data = newBlog(req.postData);
        return new SuccessModel(data)
    };
    if(method === 'POST' && req.path === '/api/blog/update') {
        const updateData = updateBlog(req.postData);
        return new SuccessModel(updateData)
    };
    if(method === 'POST' && req.path === '/api/blog/del') {
        const delData = delBlog(req.postData);
        return new SuccessModel(delData)
    }
}

module.exports = handleBlogRouter;


// 获取博客列表的接口 /api/blog/list  GET
// 获取博客内容的接口 /api/blog/detail GET
// 新增一篇博客 /api/blog/new POST
// 修改一篇博客的接口 /api/blog/update POST
// 删除一篇博客 /api/blog/del POST