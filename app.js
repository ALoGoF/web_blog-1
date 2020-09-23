const handleBlogRouter  = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');
const querystring = require('querystring')

const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
      if(req.method !== 'POST') {
              resolve({});
              return 
      };

      if(req.headers['content-type'] !== 'application/json') {
          resolve({});
          return 
      }

      let postData = '';
      req.on('data', chunk => {
          postData += chunk.toString();
      });

      req.on('end', () => {
          if(!postData) {
              resolve({});
              return
          }else {
              resolve(postData);
              return
          }
      })
  })
  return promise
}
const serverHandler = (req, res) => {

  // 设置返回格式
  res.setHeader('content-type','application/json');
  
  // 获取请求路径
  const url = req.url;
  req.path = url.split('?')[0];
  
  // 获取请求参数
  req.query = querystring.parse(url.split('?')[1]);

  getPostData(req).then(postData => {
      req.body = JSON.parse(postData);
      // 关于博客内容的请求
      const blogData = handleBlogRouter(req, res);

      // 关于用户信息的请求
      const userData = handleUserRouter(req, res);

      // 关于博客请求的返回数据
      if(blogData) {
        res.end(
          JSON.stringify(blogData)
        );
        return 
      }
      //  关于用户请求的返回数据
      if(userData) {
        res.end(
          JSON.stringify(userData)
        )
        return 
      };
      
      //  在无匹配请求情况下的 404
      res.writeHeader(404, {'Content-type':'text/plain'});
      res.write('404 Not Found\n');
      res.end()
  })
};

module.exports = serverHandler

// process.env.NODE_ENV