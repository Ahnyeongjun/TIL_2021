import { server, init } from './config';

init(server);

server.listen(3000, () => {
  console.log('start koa server at http://localhost:3000');
});
