import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { fetchLogin } from "../../services/apiAuth";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => fetchLogin({ email, password }),

    onSuccess: (data) => {
      //   localStorage.setItem("authToken", JSON.stringify(data.data.token));
      //   localStorage.setItem("userId", JSON.stringify(data.data.user._id));
      localStorage.setItem("user", JSON.stringify(data.data.user));

      queryClient.setQueryData(["user"], data.data.user);
      navigate("/home", { replace: true });
      //   console.log(data);
    },

    onError: (error) => {
      console.log(error);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isPending };
}

export default useLogin;
