
import { createServer } from 'vite';

async function start() {
  const server = await createServer({
    configFile: './vite.config.js'
  });
  await server.listen();
  console.log('Frontend server started!');
  server.printUrls();
}

start().catch(console.error);
