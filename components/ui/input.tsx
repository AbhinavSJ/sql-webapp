import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIconClick?: () => void;
  leftIconClick?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      rightIcon,
      leftIcon,
      rightIconClick,
      leftIconClick,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="relative">
        {rightIcon ? (
          <Button
            aria-label="right-icon-button"
            type="button"
            onClick={rightIconClick}
            variant={"ghost"}
            className="absolute w-[45px]"
          >
            {rightIcon}
          </Button>
        ) : null}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-sm border border-[#707070] bg-[#0A0A0A] px-3 py-2 text-sm text-white ring-offset-[#4ABF67]  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        {leftIcon ? (
          <Button
            aria-label="left-icon-button"
            type="button"
            onClick={leftIconClick}
            variant={"ghost"}
            className="absolute w-[45px] right-0 top-0 border-t border-b border-r border-solid border-[#707070] rounded-tl-none rounded-bl-none"
          >
            {leftIcon}
          </Button>
        ) : null}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
