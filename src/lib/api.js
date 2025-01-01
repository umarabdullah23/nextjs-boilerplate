import { APP_CONFIG } from '@/constants';

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

const defaultHeaders = {
  'Content-Type': 'application/json',
};

export async function fetchApi(endpoint, options = {}) {
  const { method = 'GET', headers = {}, body, ...rest } = options;

  const response = await fetch(`${APP_CONFIG.apiUrl}${endpoint}`, {
    method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    ...rest,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new ApiError(data.message || 'Something went wrong', response.status);
  }

  return data;
}

export const api = {
  get: (endpoint, options = {}) =>
    fetchApi(endpoint, { ...options, method: 'GET' }),
  post: (endpoint, body, options = {}) =>
    fetchApi(endpoint, { ...options, method: 'POST', body }),
  put: (endpoint, body, options = {}) =>
    fetchApi(endpoint, { ...options, method: 'PUT', body }),
  delete: (endpoint, options = {}) =>
    fetchApi(endpoint, { ...options, method: 'DELETE' }),
};
