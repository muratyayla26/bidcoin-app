"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Pagination } from "@nextui-org/pagination";
import useScrollToTop from "@/lib/hooks/scrollToTop";

export const ListPagination = ({ page }: { page: string | undefined }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialPage = page ? Number(page) : 1;
  const [isMounted, setIsMounted] = useState(false);
  const [isRouting, setIsRouting] = useState(false);

  useScrollToTop("auctions-container");

  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      setIsRouting(false);
    }
  }, [searchParams]);

  const handlePageChange = (event: number) => {
    setIsRouting(true);
    router.push(`/auctions?page=${event}`);
  };

  return (
    <div className="my-6">
      <Pagination
        isDisabled={isRouting}
        showControls
        total={10}
        initialPage={initialPage}
        onChange={handlePageChange}
      />
    </div>
  );
};
