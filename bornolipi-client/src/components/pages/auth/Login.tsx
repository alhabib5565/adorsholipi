import MyForm from "@/components/from/MyForm";
import MyInput from "@/components/from/MyInput";
import { Button } from "@/components/ui/button";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

const formSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({ message: "Invalid email address" }),

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, { message: "Password must be at least 6 characters long" }),
});

const defaultValue = {
  email: "",
  password: "",
};

const Login = () => {
  const onSubmit = (value: FieldValues) => {
    console.log(value);
  };
  return (
    <div className="flex flex-col gap-14 py-10 justify-center items-center min-h-screen h-full ">
      <div className="max-w-[1124px] rounded-[16px] overflow-hidden border-2 border-primary w-full h-[664px] grid grid-cols-1 md:grid-cols-2">
        {/* left */}
        <div className="bg-primary  hidden md:flex justify-center items-center">
          <h2 className="w-[283px] text-white text-5xl font-extrabold leading-[60px]">
            Smart Adorsholipi
          </h2>
        </div>
        {/* right */}
        <div className="grid place-items-center">
          <div className="w-[356px]">
            <h1 className="text-[#344054] text-[32px] font-bold leading-[38.40px] tracking-tight mb-12">
              Hello Again!
            </h1>
            <MyForm
              onSubmit={onSubmit}
              resolver={zodResolver(formSchema)}
              defaultValues={defaultValue}
            >
              <div className="grid gap-4 grid-cols-1">
                <MyInput
                  name="email"
                  label="Enter Email"
                  type="email"
                  placeholder="Email"
                />
                <MyInput
                  name="password"
                  label="Enter Password"
                  type="password"
                  placeholder="Password"
                />
                <div className="flex justify-between">
                  <span className="text-[#667085] text-base font-normal font-roboto leading-normal">
                    Remember me
                  </span>

                  <Link
                    to={"#"}
                    className="text-[#ffcd05] text-base font-normal font-roboto leading-normal"
                  >
                    Forgot Password
                  </Link>
                </div>
                <Button>Sign In</Button>
              </div>
            </MyForm>
          </div>
        </div>
      </div>

      <p>
        <span className="text-[#344054] text-[32px] font-bold font-['Nunito'] leading-[38.40px] tracking-tight">
          Don’t have an account?{" "}
        </span>
        <Link
          to="/register"
          className="text-[#0056b3] text-[32px] font-bold font-['Nunito'] leading-[38.40px] tracking-tight"
        >
          Create
        </Link>
      </p>
    </div>
  );
};

export default Login;
