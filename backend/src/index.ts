import { createUser, showUser, User } from 'shared';
import Koa from 'koa';

const app = new Koa();

const user: User = createUser('Super user', 18);

app.use(async ctx => {
  ctx.body = showUser(user);
});

const KOA_PORT = 3000;
app.listen(KOA_PORT, () => console.info(`running on ${KOA_PORT}`));

