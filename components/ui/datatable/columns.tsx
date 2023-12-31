"use client";

import customerData from "@/public/customers.json";
import employeeData from "@/public/employees.json";
import { ColumnDef } from "@tanstack/react-table";

type Customer = (typeof customerData)[number];
type Employees = (typeof customerData)[number];

// Function to extract keys from JSON data
function extractKeysFromJson(jsonData: any) {
  if (jsonData.length === 0) {
    return [];
  }
  const keys = Object.keys(jsonData[0]);
  return keys;
}

// Generate column definitions dynamically
export function generateColumnsFromJson(
  jsonData: Customer[],
): ColumnDef<Customer>[] {
  const keys = extractKeysFromJson(jsonData);

  type jsonDataType = (typeof jsonData)[number];

  const columns: ColumnDef<jsonDataType>[] = keys.map((key) => ({
    header: key,
    accessorKey: key,
    cell: ({ row }) => {
      return (
        <div className="text-ellipsis overflow-hidden">{row.getValue(key)}</div>
      );
    },
  }));

  return columns;
}
