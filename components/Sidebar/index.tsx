"use client";

import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "@/app/context/store";
import Link from "next/link";
import { HardDriveDownload } from "lucide-react";

import { SIDEBAR_OPTIONS } from "./sidebaroptions";
import API from "@/app/services/api";
import { Button } from "../ui/button";

type Table = {
  name: string;
  // Add other properties related to tables here
};

const Sidebar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  //rendering all the tables data got from connecting DB

  //boilerplate for getting table data from database
  const [tables, setTables] = useState<Table[]>([]);
  const fetchTables = async () => {
    try {
      const response: any = await API.Table.getTables(state.dbName);
      setTables(response);
    } catch (error) {
      console.error("Error fetching tables:", error);
    }
  };
  useEffect(() => {
    fetchTables();
  }, []);

  return (
    <div className="bg-[#1E2021] w-56 py-8 ">
      <div className="px-6 flex">
        <HardDriveDownload />
        <div className="ml-3">{state.dbName}</div>
      </div>
      <div className=" text-white mt-10 flex flex-col border-t border-slate-700">
        {tables.map((item, i) => (
          <Button
            key={i}
            className={`w-auto py-8 hover:bg-[#4AB567] border-b border-slate-700 ${
              state.tabSelected === item.name ? "bg-[#4AB567]" : "none"
            }`}
            onClick={() => dispatch({ type: "SET_TABLE", payload: item.name })}
          >
            <div className="px-8"># {item.name}</div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
