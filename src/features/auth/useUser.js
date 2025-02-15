// import { useQuery } from "@tanstack/react-query";
// import { getUser } from "../../services/apiAuth";

// function useUser() {
//   //   const token = localStorage.getItem("authToken");
//   //   const userId = localStorage.getItem("userId")?.replace(/"/g, "");

//   const {
//     data: user,
//     isPending,
//     isError,
//     error,
//   } = useQuery({
//     queryKey: ["user"],
//     // queryFn: () => getUser({ token, userId }),
//     queryFn: () => getUser(token),
//     enabled: !!userId && !!token,
//   });
//   return { user, isPending, isError, error };
// }

// export default useUser;

import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const {
    data: user,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["user"],

    initialData: () => {
      // Get user data from localStorage
      const userData = localStorage.getItem("user");
      return userData ? JSON.parse(userData) : null;
    },
  });

  // console.log(user._id);
  return { user, isPending, isError };
}
