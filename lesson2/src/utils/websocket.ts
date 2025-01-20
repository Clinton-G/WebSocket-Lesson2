import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://your-websocket-server-url');

export const connectWebSocket = (onMessage: (data: any) => void) => {
  client.onopen = () => {
    console.log('WebSoket Connected');
  };

  client.onmessage = (message) => {
    if (typeof message.data === 'string') {
      try {
        onMessage(JSON.parse(message.data));
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    } else {
      console.error('Received non-string data:', message.data);
    }
  };

  client.onerror = (error) => {
    console.error('WebSocket Error', error);
  };

  client.onclose = () => {
    console.log('WebSocket Close');
  };
};
