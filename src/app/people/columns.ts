import { ColumnDef } from "@tanstack/react-table";
// import { Person } from "@/data";

export type Person = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
};

export const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "id",
    header: "Person ID",
  },
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
];
