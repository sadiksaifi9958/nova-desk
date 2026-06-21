import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const users = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Mehta",
    email: "priya.mehta@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 3,
    name: "Rohan Verma",
    email: "rohan.verma@example.com",
    role: "Viewer",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Sneha Iyer",
    email: "sneha.iyer@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 5,
    name: "Karan Singh",
    email: "karan.singh@example.com",
    role: "Viewer",
    status: "Inactive",
  },
];

function Users() {
  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>
                <Badge
                  variant={item.status === "Active" ? "default" : "secondary"}
                >
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Users;
