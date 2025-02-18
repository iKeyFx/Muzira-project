import { useQuery } from "@tanstack/react-query";
import { fetchTracks } from "../../services/apiTrack";

function useTrack() {
  const token = localStorage.getItem("authToken")?.replace(/"/g, "");
  //   console.log(token);
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["tracks"],
    queryFn: () => fetchTracks(token),
  });
  return { data, isPending };
}

export default useTrack;
