import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { AppDispatch } from "@/redux/redux-store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { loginAuth } from "@/components/apis/auth/login";

export default function Login() {
  // Navigation
  const navigate = useNavigate();

  // Redux
  const dispatch = useDispatch<AppDispatch>();

  // Form & Validation
  const LoginSchema = z.object({
    email: z
      .string({ required_error: "email is required" })
      .email("Email is valid"),
    password: z.string({ required_error: "password is required" }),
  });

  type Input = z.infer<typeof LoginSchema>;

  const form = useForm<Input>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<Input> = (values) => {
    dispatch(loginAuth(values));
    navigate("/");

    // Toast
    toast.success("Login Successful!");
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <h3 className="font-bold text-4xl text-red-400">Login</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-[500px]"
        >
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Email" className="h-12" />
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Password"
                    type="password"
                    className="h-12"
                  />
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="h-12 font-bold cursor-pointer bg-red-400">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}
