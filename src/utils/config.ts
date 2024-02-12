export const headers = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const sidebarFilterItems = () => {
  return ["Show all", "Icons", "Articles"];
};
