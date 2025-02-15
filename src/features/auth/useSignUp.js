import { useMutation } from "@tanstack/react-query";
import { fetchSignUp } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: fetchSignUp,
    onSuccess: (data) => {
      //   console.log(data);
      toast.success(`Account Successfully Created, please continue to login`);
      navigate("/login");
    },
  });

  return { signup, isLoading };
}
