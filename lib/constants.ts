import { z } from "zod";
export const PASSWORD_RULE = z
  .string()
  .nonempty("The field cannot be left blank")
  .min(8, {
    message: "Password cannot be less than 8",
  });
