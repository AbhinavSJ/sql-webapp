"use client";
import { SIDEBAR_OPTIONS } from "@/components/Sidebar/sidebaroptions";

const API = {
  Table: {
    async getTables(database: any) {
      return SIDEBAR_OPTIONS;
    },

    async getTableData(tableName: string) {
      const response = await fetch(`${tableName}.json`);
      const data = await response.json();
      return data;
    },
  },
};

export default API;
