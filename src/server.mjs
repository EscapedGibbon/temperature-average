import fastifyStatic from '@fastify/static';
import Fastify from 'fastify';

import { avgPerHour } from './routes/avgPerHour.mjs';
import { avgTemp } from './routes/avgTemp.mjs';
import { lastValue } from './routes/lastValue.mjs';

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyStatic, {
  root: new URL('web', import.meta.url).pathname,
  prefix: '/', // optional: default '/'
});

fastify.get('/lastValue', (req, res) => {
  res.send(lastValue());
});

fastify.get('/avgTemp', (req, res) => {
  res.send(avgTemp());
});

fastify.get('/avgPerHour', (req, res) => {
  res.send(avgPerHour());
});

// Run the server!
const start = async () => {
  await fastify.listen({ port: 3000, host: '0.0.0.0' });
};
start();
