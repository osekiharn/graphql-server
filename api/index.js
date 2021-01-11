const Koa = require('koa');

const bodyParser = require('koa-bodyparser');
const koaLogger = require('koa-logger');
const Router = require('koa-router');
const router = new Router();

const routes = require('./routes/users');

const graphqlServer = require('./graphql');

router.use('/', routes.routes(), routes.allowedMethods());

const app = new Koa();

app.use(bodyParser());
app.use(koaLogger());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.log(error);
    ctx.status = error.status || 500;
    ctx.body = { error: { message: error.message } };
  }
})

app.use(router.routes());
app.use(router.allowedMethods());

graphqlServer.applyMiddleware({ app });

if (process.env.NODE_ENV !== 'test') {
  app.listen(3005, () => { console.log(`🚀 Server ready at http://localhost:3005${graphqlServer.graphqlPath}`); });
}

module.exports = app;