"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

interface CustomPaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function CustomPagination({
  totalPages,
  onPageChange,
}: CustomPaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={currentPage === i}
              onClick={(e) => {
                e.preventDefault();
                handleChange(i);
              }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      const showLeft = currentPage > 4;
      const showRight = currentPage < totalPages - 3;

      // Always show first two pages
      pages.push(
        <PaginationItem key={1}>
          <PaginationLink
            href="#"
            isActive={currentPage === 1}
            onClick={(e) => {
              e.preventDefault();
              handleChange(1);
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (currentPage !== 2) {
        pages.push(
          <PaginationItem key={2}>
            <PaginationLink
              href="#"
              isActive={currentPage === 2}
              onClick={(e) => {
                e.preventDefault();
                handleChange(2);
              }}
            >
              2
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (showLeft) {
        pages.push(<PaginationEllipsis key="start-ellipsis" />);
      }

      const start = Math.max(3, currentPage - 1);
      const end = Math.min(totalPages - 2, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={currentPage === i}
              onClick={(e) => {
                e.preventDefault();
                handleChange(i);
              }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (showRight) {
        pages.push(<PaginationEllipsis key="end-ellipsis" />);
      }

      // Always show last two pages
      for (let i = totalPages - 1; i <= totalPages; i++) {
        if (i > end) {
          pages.push(
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={currentPage === i}
                onClick={(e) => {
                  e.preventDefault();
                  handleChange(i);
                }}
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
      }
    }

    return pages;
  };

  return (
    <Pagination className="mt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleChange(currentPage - 1);
            }}
          />
        </PaginationItem>

        {renderPages()}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
