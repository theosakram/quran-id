import dotenv from "dotenv";
import { FullConfig } from "../types";

dotenv.config({ path: __dirname + "/../../.env" });

export const config: FullConfig = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  quran: {
    clientId: process.env.QURAN_CLIENT_ID || "",
    clientSecret: process.env.QURAN_CLIENT_SECRET || "",
    tokenUrl: process.env.QURAN_TOKEN_ENDPOINT || "",
    baseUrl: process.env.QURAN_ENDPOINT || "",
  },
};
