"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const ws_1 = require("ws");
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
const wss = new ws_1.WebSocketServer({ server });
app.get('/', (req, res) => { res.send('hi there'); });
wss.on('connection', (ws) => {
    console.log('✅ WebSocket connection established');
    // ws.on('message', (data) => {
    //   console.log('📩 Received:', data.toString());
    //   ws.send('Echo: ' + data);
    // });
    ws.send('Hello from server');
});
server.listen(8080, () => {
    console.log('🚀 Server listening on port 8080');
});
