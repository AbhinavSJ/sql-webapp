"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const downloadJson = (data: any[], filename: string) => {
  // Convert the data to a JSON string
  const jsonData = JSON.stringify(data);

  // Create a Blob object for the JSON data
  const blob = new Blob([jsonData], { type: "application/json" });

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create a temporary <a> element and trigger a click event to download the file
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();

  // Release the Blob URL
  URL.revokeObjectURL(url);
};

export function Datatable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <div>
      {/* Div for table*/}
      <div className="rounded-md border h-[550px] max-w-[1656px] overflow-y-auto overflow-x-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>No result</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Div for pagination*/}
      <div className="flex items-center justify-between py-4">
        <div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
            className="ml-2"
          >
            Next
          </Button>
        </div>
        <div className="flex items-center">
          <div>{`${data.length} Rows`}</div>
          <Button
            variant="outline"
            size="sm"
            className="border-[#4ABF67] ml-2 hover:bg-slate-600"
            onClick={() => downloadJson(data, "data.json")}
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Datatable;