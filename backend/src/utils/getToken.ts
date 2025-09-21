import axios from "axios";

export const getAccessToken = async (): Promise<string | null> => {
  const clientId = process.env.QURAN_CLIENT_ID || "YOUR_CLIENT_ID";
  const clientSecret = process.env.QURAN_CLIENT_SECRET || "YOUR_CLIENT_SECRET";

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  try {
    const response = await axios({
      method: "post",
      url:
        process.env.QURAN_TOKEN_ENDPOINT ||
        "https://prelive-oauth2.quran.foundation/oauth2/token",
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
};
