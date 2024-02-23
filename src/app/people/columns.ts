import { ColumnDef } from "@tanstack/react-table";
import { Person } from "@/data";

export const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "id",
    header: "Person ID",
  },
  {
    accessorKey: "first-name",
    header: "First Name",
  },
  {
    accessorKey: "last-name",
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
