import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import GoogleIcon from "/src/assets/googlle.png";
import MuzirLogo from "/src/assets/muzir1.png";
import MobileLogo from "/src/assets/muzir_head.png";
import {
  Divider,
  FormCon,
  FormDiv,
  Form,
  GoogleButton,
  ImageCon,
  StyledError,
  StyledInput,
  StyledLogin,
  StyledButton,
  MobileLogoDiv,
  SignUpCTADiv,
} from "./Login";
import { useSignup } from "./useSignUp";

const DateInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 4px;

  @media (max-width: 375px) {
    /* flex-direction: column; */
  }
`;

const DateInput = styled(StyledInput)`
  width: 33%;
  text-align: center;

  @media (max-width: 375px) {
    width: 30%;
  }
`;

const GenderContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;

  @media (max-width: 375px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  input {
    cursor: pointer;
  }

  @media (max-width: 375px) {
  }
`;

const TermsText = styled.p`
  text-align: center;
  font-size: 0.8rem;
  margin: 1rem 0;
  color: #d9d9d9;
  opacity: 0.8;
`;

const LoginCTA = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  margin: 1rem 0 2rem;

  a {
    color: #8c52ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const DividerSignUp = styled(Divider)`
  &::before,
  &::after {
    background-color: var(--color-white);
  }
`;
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const { signup, isloading } = useSignup();
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const onSubmit = ({ email, password, confirmPassword, profileName }) => {
    console.log({ email, password, confirmPassword, profileName });
    signup({ email, password, confirmPassword, profileName });
  };

  return (
    <StyledLogin>
      <ImageCon onClick={() => navigate("/")}>
        <img src={MuzirLogo} alt="Muzir Logo" />
      </ImageCon>
      <FormCon>
        <MobileLogoDiv>
          <img src={MobileLogo} alt="mobile Logo" />
        </MobileLogoDiv>
        <h3>Sign in to Muzira</h3>
        <GoogleButton>
          <img src={GoogleIcon} alt="google Icon" />
          Continue With Google
        </GoogleButton>

        <DividerSignUp>OR</DividerSignUp>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormDiv>
            <StyledInput
              type="email"
              placeholder="Email Address"
              id="email"
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
              type="password"
              placeholder="Create Password"
              id="password"
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
            {errors?.password && (
              <StyledError>{errors?.password?.message}</StyledError>
            )}
          </FormDiv>

          <FormDiv>
            <StyledInput
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords needs to match",
              })}
            />
            {errors?.confirmPassword && (
              <StyledError>{errors?.confirmPassword?.message}</StyledError>
            )}
          </FormDiv>

          <FormDiv>
            <StyledInput
              type="text"
              id="pname"
              placeholder="Enter Profile Name"
              {...register("profileName", {
                required: "Profile name is required",
              })}
            />
            {errors?.profileName && (
              <StyledError>{errors?.profileName?.message}</StyledError>
            )}
          </FormDiv>

          <FormDiv>
            <label>What is your date of birth</label>
            <DateInputContainer>
              <DateInput
                type="text"
                placeholder="DD"
                maxLength="2"
                id="Bday"
                {...register("day", { required: "This field is required" })}
              />
              <DateInput
                type="text"
                placeholder="MM"
                maxLength="2"
                id="Bmonth"
                {...register("month", { required: "This field is required" })}
              />
              <DateInput
                type="text"
                placeholder="YYYY"
                maxLength="4"
                id="Byear"
                {...register("year", { required: "This field is required" })}
              />
            </DateInputContainer>
            {(errors?.day || errors?.month || errors?.year) && (
              <StyledError>Please enter a valid date</StyledError>
            )}
          </FormDiv>

          <FormDiv>
            <label>Gender</label>
            <GenderContainer>
              <RadioLabel>
                <input
                  type="radio"
                  value="male"
                  id="gmale"
                  {...register("gender", {
                    required: "Please select a gender",
                  })}
                />
                Male
              </RadioLabel>
              <RadioLabel>
                <input
                  type="radio"
                  value="female"
                  id="gfemale"
                  {...register("gender", {
                    required: "Please select a gender",
                  })}
                />
                Female
              </RadioLabel>
              <RadioLabel>
                <input
                  type="radio"
                  value="prefer-not-to-say"
                  {...register("gender", {
                    required: "Please select a gender",
                  })}
                />
                Prefer not to say
              </RadioLabel>
            </GenderContainer>
            {errors?.gender && (
              <StyledError>{errors?.gender?.message}</StyledError>
            )}
          </FormDiv>

          <TermsText>
            By clicking on sign-up you agree fully to the terms and conditions
            and privacy policy.
          </TermsText>

          <StyledButton type="submit">SIGN UP</StyledButton>
        </Form>

        <SignUpCTADiv>
          <span>Have an account?</span>
          <Link to="/login">Log in</Link>
        </SignUpCTADiv>
      </FormCon>
    </StyledLogin>
  );
}

export default SignUp;
