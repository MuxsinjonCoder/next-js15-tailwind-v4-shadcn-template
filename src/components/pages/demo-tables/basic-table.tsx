"use client";

import CustomPagination from "@/components/shared/custom-pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

const basicTableDummyData = Array.from({ length: 57 }, (_, i) => ({
  id: i + 1,
  name: `User's fullname ${i + 1}`,
  email: `user${i + 1}@email.com`,
  phone: `+998-90-000-00${(i + 1).toString().padStart(2, "0")}`,
  role: "Just user",
  contractNumber: `CN-${12345 + i}`,
}));

const ITEMS_PER_PAGE = 5;

export default function BasicTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(basicTableDummyData.length / ITEMS_PER_PAGE);

  const paginatedData = basicTableDummyData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <h3 className="font-medium mb-4">Basic table example</h3>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Contract #</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.contractNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <CustomPagination
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
