import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { people } from "@/data";

type Props = {};

const People = (props: Props) => {
  return <DataTable columns={columns} data={people} />;
};

export default People;
