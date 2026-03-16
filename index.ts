import packageJson from './package.json';

const server = Bun.serve({
  port: 3000,
  fetch (request) {
    const version = packageJson.version;
    return new Response(JSON.stringify({ version }));
  }
});
