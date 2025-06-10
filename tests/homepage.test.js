import { expect, test } from 'vitest';
import fetch from 'node-fetch';

test('Website is running', async () => {
  const response = await fetch('http://localhost:5173'); // default Vite port
  expect(response.status).toBe(200);
});