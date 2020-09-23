const handleBlogRouter  = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');
const querystring = require('querystring')

const serverHandler = (req, res) => {
  // 设置返回格式
  res.setHeader('Content-type','application/json');
  
  const url = req.url;
  req.path = url.split('?')[0];
  req.query = querystring.parse(url.split('?')[1])
  const blogData = handleBlogRouter(req, res);
  const userData = handleUserRouter(req, res);

   if(blogData) {
    res.end(
      JSON.stringify(blogData)
    );
    return 
   }

   if(userData) {
     res.end(
       JSON.stringify(userData)
     )
     return 
   }

  //  404
  res.writeHeader(404, {'Content-type':'text/plain'});
  res.write('404 Not Found\n');
  res.end()
};

module.exports = serverHandler

// process.env.NODE_ENV