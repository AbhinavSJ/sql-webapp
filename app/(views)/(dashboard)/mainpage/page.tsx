"use client";
import EditorInputDialog from "@/components/EditorInput";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Play } from "lucide-react";

import API from "@/app/services/api";
import { Loader2 } from "lucide-react";

import Datatable from "@/components/ui/datatable/datatable";
import { generateColumnsFromJson } from "@/components/ui/datatable/columns"; //custom script to generate dynamic column data
import { GlobalContext } from "@/app/context/store";

export default function Mainpage() {
  const { state, dispatch } = useContext(GlobalContext);

  const [sqlQuery, setsqlQuery] = useState(`select * from `);
  const [tableValues, setTableVlues] = useState([]);

  const [loading, setLoading] = useState(false);

  //function calls api to get selected table data
  const callTableData = async () => {
    setLoading(true);
    const response = await API.Table.getTableData(state.tabSelected);
    if (response) {
      setTableVlues(response);
    }
    setLoading(false);
  };

  useEffect(() => {
    callTableData();
    setsqlQuery(`select * from ${state.tabSelected}`);
  }, [state.tabSelected]);

  const handleQuery = (val: string) => {
    setsqlQuery(val);
  };

  return (
    <div className="flex flex-col">
      <div className="border rounded p-6 m-8">
        <div className="flex justify-between ">
          <div className="flex items-center">SQL Query:</div>
          {/* The editor section */}
          <div className="flex items-center">
            <EditorInputDialog SubmitText={handleQuery} query={sqlQuery} />
            <Button
              variant="outline"
              className="border-[#4ABF67] ml-3"
              onClick={() => callTableData}
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Play />
              )}
            </Button>
          </div>
        </div>
        <div className="mt-4">
          <SyntaxHighlighter language="sql" style={atomOneDark}>
            {sqlQuery}
          </SyntaxHighlighter>
        </div>
      </div>

      {/* The table section */}
      <div className="px-8 ">
        <Datatable
          columns={generateColumnsFromJson(tableValues)}
          data={tableValues}
        />
      </div>
    </div>
  );
}
