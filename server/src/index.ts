import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

app.get('/', (req, res) => {res.send('hi there')});

wss.on('connection', (ws) => {
  console.log('✅ WebSocket connection established');

  ws.on('message', (data) => {
    console.log('📩 Received:', data.toString());
    ws.send('Echo: ' + data);
  });

  ws.send('Hello from server');
});

server.listen(8080, () => {
  console.log('🚀 Server listening on port 8080');
});
