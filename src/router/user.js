const handleUserRouter = (req, res) => {
    const method = req.method;
    const path = req.path
    if(method === 'POST' && path === '/api/user/login') {
        return {
            message: '这是登录接口'
        }
    };
    
}

module.exports = handleUserRouter