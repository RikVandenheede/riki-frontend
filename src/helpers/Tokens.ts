interface TokenProps {
  accessToken: string;
  refreshToken: string;
}

export const storeTokens = ({
  accessToken,
  refreshToken,
}: TokenProps): void => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export const hasAccessToken = (): boolean => {
  return Boolean(localStorage.getItem("accessToken"));
};

export const getAccessToken = (): string => {
  return localStorage.getItem("accessToken") || "";
};

export const getRefreshToken = (): string => {
  return localStorage.getItem("refreshToken") || "";
};

export const clearTokens = (): void => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};
