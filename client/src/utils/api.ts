import { createContext } from "react";

interface RequestOptions extends RequestInit {
  body?: string;
}

export class Api {
  authToken: string | null;

  constructor(initialToken: string | null) {
    this.authToken = initialToken
  }

  async makeRequest(url: string, method: string, body: object | null): Promise<any> {
    const options: RequestOptions = {};
    if (method === 'POST' || method === 'PUT') {
      options.body = JSON.stringify(body);
    }

    const res = await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${this.authToken}`,
        'Content-Type': 'application/json',
      },
      ...options,
    });
    return res.json();
  }

  get(url: string) {
    return this.makeRequest(url, 'GET', null);
  }

  post(url: string, body = {}) {
    return this.makeRequest(url, 'POST', body);
  }

  put(url: string, body = {}) {
    return this.makeRequest(url, 'PUT', body);
  }

  del(url: string) {
    return this.makeRequest(url, 'DELETE', null);
  }
}

export const ApiContext = createContext(new Api(null));