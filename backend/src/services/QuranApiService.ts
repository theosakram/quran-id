import axios from "axios";
import { QuranApiConfig } from "../types";

export class QuranApiService {
  private config: QuranApiConfig;
  private cachedToken: string | null = null;
  private tokenExpiry: Date | null = null;

  constructor(config: QuranApiConfig) {
    this.config = config;
  }

  private async getAccessToken(): Promise<string | null> {
    const auth = Buffer.from(
      `${this.config.clientId}:${this.config.clientSecret}`,
    ).toString("base64");

    try {
      const response = await axios({
        method: "post",
        url: this.config.tokenUrl,
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: "grant_type=client_credentials&scope=content",
      });

      return response.data.access_token;
    } catch (error) {
      console.error("Error getting access token:", error);
      return null;
    }
  }

  private async makeAuthenticatedRequest(endpoint: string): Promise<any> {
    const token = await this.getAccessToken();

    try {
      const response = await axios({
        method: "get",
        url: `${this.config.baseUrl}${endpoint}`,
        headers: {
          "x-auth-token": token,
          "x-client-id": this.config.clientId,
        },
        timeout: 15000,
      });

      return response.data;
    } catch (error: any) {
      console.error(`API request failed for ${endpoint}`, error);

      if (error.response?.status === 401) {
        // Token might be expired, clear cache and retry once
        this.clearTokenCache();
        throw new Error("Authentication expired");
      }

      throw new Error(
        `API request failed: ${error.response?.status || error.message}`,
      );
    }
  }

  async getChapters(): Promise<any> {
    return this.makeAuthenticatedRequest("/chapters");
  }

  async getChapter(chapterId: number): Promise<any> {
    return this.makeAuthenticatedRequest(`/chapters/${chapterId}`);
  }

  private clearTokenCache(): void {
    this.cachedToken = null;
    this.tokenExpiry = null;
  }
}
