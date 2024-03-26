import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";


const useVideos = () => {
  const axiosSecure = useAxiosSecure();

  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      try {
        const response = await axiosSecure.get(`/all-videos`);
        return response.data;
      } catch (error) {
        console.error("Error fetching tasks data:", error);
        throw new Error("Error fetching tasks data");
      }
    },
  });

  return { data, refetch, isLoading, isError };
};

export default useVideos;
