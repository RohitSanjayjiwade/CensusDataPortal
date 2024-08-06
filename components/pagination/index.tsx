"use client";
import { FC } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  pageCount: number;
}

interface PaginationArrowProps {
  direction: "left" | "right";
  href: string;
  isDisabled: boolean;
}

const PaginationArrow: FC<PaginationArrowProps> = ({
  direction,
  href,
  isDisabled,
}) => {
  const router = useRouter();
  const isLeft = direction === "left";
  const disabledClassName = isDisabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <Button
      onClick={() => router.push(href)}
      className={`bg-gray-100 text-gray-500 hover:bg-gray-200 ${disabledClassName}`}
      aria-disabled={isDisabled}
      disabled={isDisabled}
    >
      {isLeft ? "«" : "»"}
    </Button>
  );
};

export function PaginationDemo({ pageCount }: Readonly<PaginationProps>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

   const renderPaginationLinks = () => {
    const links = [];

    // Add first 3 pages
    for (let i = 1; i <= 3; i++) {
      links.push(
        <PaginationItem key={i}>
          <PaginationLink
            href={createPageURL(i)}
            className={currentPage === i ? "text-white bg-violet-500" : ""}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Add ellipsis if there are pages between the first 3 and the last 3
    if (pageCount > 6) {
      links.push(
        <PaginationItem key="ellipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Add last 3 pages
    for (let i = pageCount - 2; i <= pageCount; i++) {
      if (i > 3) {
        links.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={createPageURL(i)}
              className={currentPage === i ? "text-white bg-violet-500" : ""}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }

    return links;
  };

  return (
    <div>
      <Pagination>
        <PaginationContent className="rounded-lg bg-gray-200 mt-3">
          <PaginationItem>
            {/*<PaginationArrow
              direction="left"
              href={createPageURL(currentPage - 1)}
              isDisabled={currentPage <= 1}
            />*/}
           <PaginationPrevious href={createPageURL(currentPage - 1)} className={cn(currentPage == 1 ? "hidden" : "")} />
          </PaginationItem>
          {renderPaginationLinks()}
          <PaginationItem>
            {/*<PaginationArrow
              direction="right"
              href={createPageURL(currentPage + 1)}
              isDisabled={currentPage >= pageCount}
            />*/}
          <PaginationNext href={createPageURL(currentPage + 1)} className={currentPage >= pageCount ? "hidden" : ""} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
