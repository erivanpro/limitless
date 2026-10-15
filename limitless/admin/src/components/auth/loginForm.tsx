import { FC } from "react";
// import { useFormik } from "formik";
// import { LoginFormSchema } from "@/schemas/auth/login-form.schema";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import Input from "../inputs/input";
import PasswordInput from "../inputs/password-input";
import Button from "../buttons/button";
import { LoginFormSchema } from "../../schemas/auth/login-form.schema";
import { useAdminLoginMutation } from "../../services/auth/login";
import { LoginResponse } from "../../types/auth";
import { useFormik } from "formik";

const initialValues = {
  email: "",
  password: "",
};

const SignInView: FC = () => {
  const [, setCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const { mutateAsync } = useAdminLoginMutation();

  const formik = useFormik({
    initialValues,
    validationSchema: LoginFormSchema,
    onSubmit: async (values) => {
      const data = (await mutateAsync({
        ...values,
      })) as LoginResponse;
      if (data.token) {
        setCookie("access_token", data.token, { path: "/" });
        navigate("/users");
      }
    },
  });

  const { values, errors, handleChange, handleBlur, touched, handleSubmit } =
    formik;

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-150 rounded-2xl bg-white p-10 sm:p-8 shadow-lg">
        <div className="flex flex-col gap-y-10 w-full">
          <h3 className="text-text-primary text-3xl sm:text-4xl font-semibold tracking-tight">
            Log in
          </h3>

          <form
            className="flex flex-col gap-y-6 w-full"
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              label="Email Address"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
              className="
            bg-neutral-100
            border border-transparent
            rounded-xl
            px-4 py-3
            text-sm text-neutral-900
            placeholder:text-neutral-400
            transition
            focus:bg-white
            focus:border-black/20
            focus:ring-2 focus:ring-black/10
          "
            />

            <PasswordInput
              type="password"
              label="Password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              error={errors.password}
              touched={touched.password}
              className="
            bg-neutral-100
            border border-transparent
            rounded-xl
            px-4 py-3
            text-sm text-neutral-900
            placeholder:text-neutral-400
            transition
            focus:bg-white
            focus:border-black/20
            focus:ring-2 focus:ring-black/10
          "
            />
            <div className="w-full pt-4">
              <Button
                type="submit"
                text="Log in"
                className="
                    w-full
                    justify-center
                    rounded-full
                    bg-[#33bb78]
                    py-6
                    text-lg
                    font-semibold
                    text-white
                    shadow-sm
                    transition-all
                    duration-200
                    hover:brightness-95
                    active:scale-[0.98]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#33bb78]/40
                  "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInView;
