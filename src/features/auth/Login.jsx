import styled from "styled-components";
import MuzirLogo from "/src/assets/muzir1.png";
// import BG from "../assets/Rectangle 1167.png";
import Vector from "/src/assets/Vector 7.png";
import GoogleIcon from "/src/assets/googlle.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createPortal } from "react-dom";
import MobileLogo from "/src/assets/muzir_head.png";
import useLogin from "./useLogin";
import { useState } from "react";
import { useUser } from "./useUser";
import BounceLoader from "../../ui/BounceLoader";
import useTrack from "../music/useTrack";

export const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100dvh;
  width: 100%;
  color: #d9d9d9;
  position: relative;
  background: linear-gradient(180deg, #13091b 0%, #1e0f2d 100%);
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background-color: #0f0b0b;
  color: var(--color-white);
  font-size: 0.8rem;
  /* width: 100%; */
  &::placeholder {
    color: #d9d9d9;
    opacity: 0.7;
  }

  &:focus {
    outline: 1px solid var(--color-primary);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const FormDiv = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
`;

export const ImageCon = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  cursor: pointer;
  @media (max-width: 730px) {
    display: none;
  }
`;

export const Form = styled.form`
  width: 100%;
`;
export const FormCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #0f0b0b;
  min-height: 100dvh;
  max-width: 460px;
  width: 100%;
  padding: 0 2rem;

  h3 {
    /* margin-bottom: 0; */
  }
`;
export const ForgetPassWord = styled.span`
  font-size: 12px;
  color: var(--color-primary);
  cursor: pointer;
`;
export const StyledError = styled.span`
  color: red;
  /* display: flex; */
  font-size: 12px;
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  padding: 0.5rem;
  background-color: var(--color-primary);
  font-family: "Poppins", serif;
  color: #d9d9d9;
  border: none;
  border-radius: 8px;
  margin-top: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 600;
  &:hover {
    color: var(--color-white);
    /* border: 1px solid var(--color-primary); */
    background-color: #7440e0;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  font-family: "Poppins", serif;
  font-size: 1rem;
  font-weight: 600;
  gap: 1rem;
  width: 100%;
  color: #d9d9d9;
  justify-content: center;
  background-color: transparent;
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;

  img {
    width: 30px;
    height: 30px;
  }
  &:hover {
    border-color: var(--color-white);
  }
  @media (max-width: 420px) {
    gap: 0.2rem;
  }
`;

export const SignUpCTADiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
  justify-content: center;
  a {
    color: #d9d9d9;

    &:hover {
      color: var(--color-primary);
    }
  }
`;
export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  gap: 1rem;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: var(--color-primary);
  }
`;

export const MobileLogoDiv = styled.div`
  display: none;

  @media (max-width: 730px) {
    display: flex;
    justify-content: center;
  }
`;
function Login() {
  const {
    register,
    watch,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [email] = useState("testing2@gmail.com");
  const [password] = useState("Test@123");
  const { login, isPending } = useLogin();
  // const { user, isPending: isPending2, isError, error } = useUser();

  const navigate = useNavigate();
  const onSubmit = ({ email, password }) => {
    console.log({ email, password });
    login({ email, password });
  };
  return (
    <StyledLogin>
      <ImageCon onClick={() => navigate("/")}>
        <img src={MuzirLogo} alt="Music Logo" />
      </ImageCon>
      <FormCon>
        <MobileLogoDiv>
          <img src={MobileLogo} alt="mobile Logo" />
        </MobileLogoDiv>
        <h3>Login to Muzira</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormDiv>
            <StyledInput
              placeholder="Email Address"
              id="email"
              disabled={isPending}
              value={email}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
            {errors?.email && (
              <StyledError>{errors?.email?.message}</StyledError>
            )}
          </FormDiv>
          <FormDiv>
            <StyledInput
              placeholder="Password"
              id="password"
              disabled={isPending}
              value={password}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password needs a minimum of 8 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
                },
              })}
            />
            <div>
              {errors?.password && (
                <StyledError>{errors?.password?.message}</StyledError>
              )}
              <ForgetPassWord>Forget Password?</ForgetPassWord>
            </div>
          </FormDiv>
          <StyledButton disabled={isPending}>
            {isPending ? <BounceLoader /> : "LOGIN"}
          </StyledButton>
        </Form>

        <div>
          <Divider>Or</Divider>
          <GoogleButton>
            <img src={GoogleIcon} alt="google Icon" />
            Continue With Google
          </GoogleButton>
        </div>
        <SignUpCTADiv>
          <p>Don't have an account?</p>
          <Link to="/sign-up">Sign Up</Link>
        </SignUpCTADiv>
      </FormCon>
    </StyledLogin>
  );
}

export default Login;
