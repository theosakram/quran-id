// Simple fetcher utility for use with React Query
export interface FetcherOptions extends RequestInit {
  baseURL?: string;
}

export class FetchError extends Error {
  constructor(
    message: string,
    public status: number,
    public statusText: string,
  ) {
    super(message);
    this.name = "FetchError";
  }
}

class Fetcher {
  private baseURL: string;

  constructor(baseURL = "") {
    this.baseURL = baseURL;
  }

  private buildURL(endpoint: string, baseURL?: string): string {
    const base = baseURL || this.baseURL;
    if (!base) return endpoint;

    const cleanBase = base.replace(/\/$/, "");
    const cleanEndpoint = endpoint.replace(/^\//, "");

    return `${cleanBase}/${cleanEndpoint}`;
  }

  async request<T = any>(
    url: string,
    options: FetcherOptions = {},
  ): Promise<T> {
    const { baseURL, ...fetchOptions } = options;
    const fullURL = this.buildURL(url, baseURL);

    // Set default headers
    const headers = {
      "Content-Type": "application/json",
      ...fetchOptions.headers,
    };

    const response = await fetch(fullURL, {
      ...fetchOptions,
      headers,
    });

    if (!response.ok) {
      throw new FetchError(
        `HTTP Error: ${response.status} ${response.statusText}`,
        response.status,
        response.statusText,
      );
    }

    // Handle different content types
    const contentType = response.headers.get("content-type");

    if (contentType?.includes("application/json")) {
      return response.json();
    }

    if (contentType?.includes("text/")) {
      return response.text() as unknown as T;
    }

    return response.blob() as unknown as T;
  }

  // Convenience methods
  get<T = any>(
    url: string,
    options?: Omit<FetcherOptions, "method" | "body">,
  ): Promise<T> {
    return this.request<T>(url, { ...options, method: "GET" });
  }

  post<T = any>(
    url: string,
    data?: any,
    options?: Omit<FetcherOptions, "method">,
  ): Promise<T> {
    return this.request<T>(url, {
      ...options,
      method: "POST",
      body: data ? JSON.stringify(data) : options?.body,
    });
  }

  put<T = any>(
    url: string,
    data?: any,
    options?: Omit<FetcherOptions, "method">,
  ): Promise<T> {
    return this.request<T>(url, {
      ...options,
      method: "PUT",
      body: data ? JSON.stringify(data) : options?.body,
    });
  }

  patch<T = any>(
    url: string,
    data?: any,
    options?: Omit<FetcherOptions, "method">,
  ): Promise<T> {
    return this.request<T>(url, {
      ...options,
      method: "PATCH",
      body: data ? JSON.stringify(data) : options?.body,
    });
  }

  delete<T = any>(
    url: string,
    options?: Omit<FetcherOptions, "method" | "body">,
  ): Promise<T> {
    return this.request<T>(url, { ...options, method: "DELETE" });
  }
}

// Create default instance
const fetcher = new Fetcher();

// Export the class and default instance
export { Fetcher };
export default fetcher;

// Convenience functions using the default instance
export const get = <T = any>(
  url: string,
  options?: Omit<FetcherOptions, "method" | "body">,
) => fetcher.get<T>(url, options);

export const post = <T = any>(
  url: string,
  data?: any,
  options?: Omit<FetcherOptions, "method">,
) => fetcher.post<T>(url, data, options);

export const put = <T = any>(
  url: string,
  data?: any,
  options?: Omit<FetcherOptions, "method">,
) => fetcher.put<T>(url, data, options);

export const patch = <T = any>(
  url: string,
  data?: any,
  options?: Omit<FetcherOptions, "method">,
) => fetcher.patch<T>(url, data, options);

export const del = <T = any>(
  url: string,
  options?: Omit<FetcherOptions, "method" | "body">,
) => fetcher.delete<T>(url, options);

// Create API client with base URL
export const createAPIClient = (baseURL: string) => {
  return new Fetcher(baseURL);
};
