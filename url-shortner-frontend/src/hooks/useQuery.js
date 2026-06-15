import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export const useFetchTotalClicks = (token, onError) => {
  return useQuery({
    queryKey: ["total-clicks"],

    queryFn: async () => {
      const response = await api.get(
        "/api/urls/totalClicks?startDate=2024-12-01&endDate=2024-12-07",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    },

    select: (data) => {
      return Object.keys(data).map((key) => ({
        clickDate: key,
        count: data[key],
      }));
    },

    enabled: !!token,
    staleTime: 5000,
    onError,
  });
};