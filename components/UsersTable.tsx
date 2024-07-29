"use client";
// import { UserProps, createBulkUsers, deleteUsers } from "@/actions/users";
// import { User } from "@prisma/client";
import React, { useState } from "react";
import * as XLSX from "xlsx";
export default function UsersTable() {
  // file
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState("");
  console.log(file);
  // json stringified (purpose of previewing)
  function previewData() {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target?.result;
        if (data) {
          const workbook = XLSX.read(data, { type: 'array' });
          // SheetName
          const sheetName = workbook.SheetNames[0];
          console.log("oyy",sheetName)
          // Worksheet
          const workSheet = workbook.Sheets[sheetName];
          console.log("oyy",workSheet)
          // Json
          const json = XLSX.utils.sheet_to_json(workSheet);
          setJsonData(JSON.stringify(json, null, 2));
        }
      };
      
      reader.readAsArrayBuffer(file);
    }
  }
  function saveData() {
    if (file) {
      setLoading(true);
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = e.target?.result;
        if (data) {
          const workbook = XLSX.read(data, { type: "binary" });
          // SheetName
          const sheetName = workbook.SheetNames[0];
          // Worksheet
          const workSheet = workbook.Sheets[sheetName];
          // Json
          // const json: UserProps[] = XLSX.utils.sheet_to_json(workSheet);
          //Save to the DB
          try {
            // console.log(json);
            // await createBulkUsers(json);
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        }
      };
      reader.readAsBinaryString(file);
    }
  }
  async function clearData() {
    try {
      // await deleteUsers();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="py-8 space-y-8">
      {/* BUTTONS */}
      {/* upload input, preview btn , save btn , clear Data */}
      <div className="flex items-center gap-8">
        <div className="">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
            accept=".xls,.xlsx"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          />
        </div>
        <button
          onClick={previewData}
          className="py-2 px-6 rounded bg-slate-300 text-slate-900 "
        >
          Preview Data
        </button>
        <button
          onClick={saveData}
          className="py-2 px-6 rounded bg-purple-600 text-slate-100 "
        >
          Save Data
        </button>
        <button
          onClick={clearData}
          className="py-2 px-6 rounded bg-red-600 text-slate-100 "
        >
          Clear Data
        </button>
      </div>
      <pre>{jsonData}</pre>
  

      {/* Table */}
    </div>
  );
}