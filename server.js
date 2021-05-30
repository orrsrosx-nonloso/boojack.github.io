const Koa = require("koa");
const Serve = require("koa-static");

const app = new Koa();

// 托管静态文件
app.use(
  Serve("./dist/", {
    // 缓存 1 月
    maxAge: 1000 * 60 * 60 * 24 * 30,
    defer: true,
  })
);

app.listen(8081, () => {
  console.log("server started in :8081");
});
