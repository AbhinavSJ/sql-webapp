"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Unplug } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormInput,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useContext, useState } from "react";
import { GlobalContext } from "@/app/context/store";
import { useRouter } from "next/navigation";
import { PASSWORD_RULE } from "@/lib/constants";

const formSchema = z.object({
  dbname: z.string().nonempty("This field cannot be empty"),
  username: z.string().nonempty("This field cannot be empty"),
  email: z.string().email(),
  password: PASSWORD_RULE,
  checkbox: z.boolean().default(false),
});

const Onboard = () => {
  const router = useRouter();

  const { state, dispatch } = useContext(GlobalContext);
  const [connecting, Setconnecting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dbname: "",
      username: "",
      email: "",
      password: "",
      checkbox: false,
    },
  });

  const connectDB = () => {
    Setconnecting(true);
    setTimeout(() => {
      router.push("/mainpage");
    }, 1000);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    dispatch({ type: "SET_DB", payload: values.dbname });
    sessionStorage.setItem("isOnboarded", "true");

    connectDB();
  };

  return (
    <>
      <Label className="text-[#fff] text-[32px] font-bold mb-[30px]">
        {connecting
          ? `connecting to ${state.dbName}..`
          : "Let's get you onboarded!"}
      </Label>
      {connecting ? (
        <div className="w-full h-[450px] flex flex-col justify-center items-center mt-5">
          <Unplug color="#4ABF67" size="32px" className="rotate-45 " />

          <div className="loader-line"></div>
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-[36px]"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormInput
                  labelName="Username"
                  inputProps={{ ...field, placeholder: "username" }}
                />
              )}
            />
            <FormField
              control={form.control}
              name="dbname"
              render={({ field }) => (
                <FormInput
                  labelName="DB Name"
                  inputProps={{ ...field, placeholder: "dbname" }}
                />
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormInput
                  labelName="Email"
                  inputProps={{ ...field, placeholder: "email" }}
                />
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormInput
                  labelName="Password"
                  inputProps={{
                    ...field,
                    placeholder: "password",
                    type: "password",
                  }}
                />
              )}
            />
            <FormField
              control={form.control}
              name="checkbox"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <Checkbox
                    className="mt-[7px] mr-2"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <FormLabel className="text-white text-[12px] m-px">
                    Remember me
                  </FormLabel>
                </FormItem>
              )}
            />
            <Button variant="onboard" type="submit">
              Create an account
            </Button>
          </form>
        </Form>
      )}
    </>
  );
};

export default Onboard;
