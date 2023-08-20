import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setCredentials } from "../../features/auth/authSlice";
import { BASE_URL, REFRESH_TOKEN_URL } from "./constants";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "same-origin",
  prepareHeaders: (headers, { getState, endpoint }) => {
    const token = getState().auth.token;
    if (endpoint === REFRESH_TOKEN_URL) {
      headers.set("refreshToken", getState().auth.refreshToken);
    } else if (token) {
      headers.set("token", token);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus === 401) {
    const token = await baseQuery(
      { url: REFRESH_TOKEN_URL, method: "POST" },
      { ...api, endpoint: REFRESH_TOKEN_URL },
      extraOptions
    );
    if (token?.data) {
      api.dispatch(setCredentials({ ...token.data }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
