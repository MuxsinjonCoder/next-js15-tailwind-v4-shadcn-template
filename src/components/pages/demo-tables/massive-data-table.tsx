"use client";

import { useState } from "react";
import CustomPagination from "@/components/shared/custom-pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { massiveDataTableDummyData } from "./massive-table-datas";

const ITEMS_PER_PAGE = 10;

export default function MassiveDataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(
    massiveDataTableDummyData.length / ITEMS_PER_PAGE
  );

  const paginatedData = massiveDataTableDummyData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <h3 className="font-medium mb-4">Massive data table example</h3>
      <div className="overflow-x-auto relative" style={{ maxWidth: "100%" }}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="sticky left-0 bg-white z-20"
                style={{ minWidth: 70 }}
              >
                ID
              </TableHead>
              <TableHead
                className="sticky left-[70px] bg-white z-20"
                style={{ minWidth: 150 }}
              >
                Name
              </TableHead>
              <TableHead> Email </TableHead>
              <TableHead> Phone </TableHead>
              <TableHead> Address </TableHead>
              <TableHead> Country </TableHead>
              <TableHead> City </TableHead>
              <TableHead> Zip </TableHead>
              <TableHead> Status </TableHead>
              <TableHead> Created </TableHead>
              <TableHead> Updated </TableHead>
              <TableHead> Role </TableHead>
              <TableHead> Gender </TableHead>
              <TableHead> Age </TableHead>
              <TableHead> Birth Date </TableHead>
              <TableHead> Company </TableHead>
              <TableHead> Position </TableHead>
              <TableHead> Department </TableHead>
              <TableHead> Salary </TableHead>
              <TableHead> Bonus </TableHead>
              <TableHead> Start </TableHead>
              <TableHead> End </TableHead>
              <TableHead> Manager </TableHead>
              <TableHead> Experience </TableHead>
              <TableHead> Education </TableHead>
              <TableHead> University </TableHead>
              <TableHead> Degree </TableHead>
              <TableHead> Skills </TableHead>
              <TableHead> Language </TableHead>
              <TableHead> Marital </TableHead>
              <TableHead> Children </TableHead>
              <TableHead> Nationality </TableHead>
              <TableHead> Passport </TableHead>
              <TableHead> Visa </TableHead>
              <TableHead> Join </TableHead>
              <TableHead> Contract </TableHead>
              <TableHead> Hours </TableHead>
              <TableHead> Remote </TableHead>
              <TableHead> Last Login </TableHead>
              <TableHead> Device </TableHead>
              <TableHead> Browser </TableHead>
              <TableHead> IP </TableHead>
              <TableHead> Acc. Status </TableHead>
              <TableHead> Verified </TableHead>
              <TableHead> Rating </TableHead>
              <TableHead> Feedback </TableHead>
              <TableHead> Notes </TableHead>
              <TableHead> Tags </TableHead>
              <TableHead> Projects </TableHead>
              <TableHead> Tasks </TableHead>
              <TableHead> Score </TableHead>
              <TableHead> Team </TableHead>
              <TableHead> Shift </TableHead>
              <TableHead> Access </TableHead>
              <TableHead> Subscription </TableHead>
              <TableHead> Plan </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell
                  className="sticky left-0 bg-white font-medium z-10"
                  style={{ minWidth: 70 }}
                >
                  {item.id}
                </TableCell>
                <TableCell
                  className="sticky left-[70px] bg-white font-medium z-10"
                  style={{ minWidth: 150 }}
                >
                  {item.name}
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.country}</TableCell>
                <TableCell>{item.city}</TableCell>
                <TableCell>{item.zipCode}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.createdAt}</TableCell>
                <TableCell>{item.updatedAt}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.birthDate}</TableCell>
                <TableCell>{item.company}</TableCell>
                <TableCell>{item.position}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>{item.salary}</TableCell>
                <TableCell>{item.bonus}</TableCell>
                <TableCell>{item.startDate}</TableCell>
                <TableCell>{item.endDate || "N/A"}</TableCell>
                <TableCell>{item.manager}</TableCell>
                <TableCell>{item.experience}</TableCell>
                <TableCell>{item.education}</TableCell>
                <TableCell>{item.university}</TableCell>
                <TableCell>{item.degree}</TableCell>
                <TableCell>{item.skills.join(", ")}</TableCell>
                <TableCell>{item.language}</TableCell>
                <TableCell>{item.maritalStatus}</TableCell>
                <TableCell>{item.children}</TableCell>
                <TableCell>{item.nationality}</TableCell>
                <TableCell>{item.passportNumber}</TableCell>
                <TableCell>{item.visaStatus}</TableCell>
                <TableCell>{item.joiningDate}</TableCell>
                <TableCell>{item.contractType}</TableCell>
                <TableCell>{item.workHours}</TableCell>
                <TableCell>{item.isRemote ? "Yes" : "No"}</TableCell>
                <TableCell>{item.lastLogin}</TableCell>
                <TableCell>{item.device}</TableCell>
                <TableCell>{item.browser}</TableCell>
                <TableCell>{item.ipAddress}</TableCell>
                <TableCell>{item.accountStatus}</TableCell>
                <TableCell>{item.isVerified ? "Yes" : "No"}</TableCell>
                <TableCell>{item.rating}</TableCell>
                <TableCell>{item.feedback}</TableCell>
                <TableCell>{item.notes}</TableCell>
                <TableCell>{item.tags.join(", ")}</TableCell>
                <TableCell>{item.projects}</TableCell>
                <TableCell>{item.tasksCompleted}</TableCell>
                <TableCell>{item.performanceScore}</TableCell>
                <TableCell>{item.team}</TableCell>
                <TableCell>{item.shift}</TableCell>
                <TableCell>{item.accessLevel}</TableCell>
                <TableCell>{item.subscription}</TableCell>
                <TableCell>{item.planType}</TableCell>
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
