"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import { useState, useEffect } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

type DialogProps = {
  SubmitText: (text: string) => void;
  query: string;
};

const EditorInputDialog = ({ SubmitText, query }: DialogProps) => {
  const [text, setText] = useState("SELECT * FROM");
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    setText(query);
  }, [query]);

  const handleSubmit = () => {
    setisOpen(false);
    SubmitText(text);
  };
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-[#4ABF67]"
          onClick={() => setisOpen(true)}
        >
          Edit query
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black">
        <DialogHeader>
          <DialogTitle className="flex justify-between">
            <div>Add query</div>
            <button onClick={() => setisOpen(false)}>x</button>
          </DialogTitle>
          <DialogDescription>
            <Textarea
              className="bg-black text-white mt-4"
              placeholder="Enter your SQL query here"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <div className="mt-2">
              Live syntax highlighting was a challenge, hence this
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4"></div>
        <DialogFooter>
          <Button
            variant="outline"
            className="hover:bg-slate-600 border-[#4ABF67]"
            onClick={handleSubmit}
          >
            Add query
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditorInputDialog;
