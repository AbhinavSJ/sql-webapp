"use client";
import { DatabaseZap } from "lucide-react";
import { Code2 } from "lucide-react";
import { Button } from "../ui/button";

type HeaderProps = {
  headerText: string;
};

const redirectSite = () => {
  window.open("https://github.com/AbhinavSJ/sql-app", "_blank");
};
const Header = ({ headerText }: HeaderProps) => {
  return (
    <div>
      <div className="h-[70px] w-full bg-black flex justify-between items-center px-[24px] border-b-[1px] border-[#4ABF67]">
        <div className="flex">
          <DatabaseZap />
          <div className="text-white text-xl ml-2">{headerText}</div>
        </div>
        <Button
          variant="outline"
          className="hover:bg-slate-600 border-[#4ABF67]"
          onClick={redirectSite}
        >
          <Code2 />
        </Button>
      </div>
    </div>
  );
};

export default Header;
