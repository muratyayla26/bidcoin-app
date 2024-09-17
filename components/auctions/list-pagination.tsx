"use client";

import useScrollToTop from "@/lib/hooks/scrollToTop";
import { Pagination } from "@nextui-org/pagination";
import { useRouter } from "next/navigation";

export const ListPagination = ({ page }: { page: string | undefined }) => {
  const router = useRouter();
  const initialPage = page ? Number(page) : 1;

  useScrollToTop("auctions-container");

  const handlePageChange = (event: number) => {
    router.push(`/auctions?page=${event}`);
  };

  return (
    <div className="my-6">
      <Pagination
        showControls
        total={10}
        initialPage={initialPage}
        onChange={handlePageChange}
      />
    </div>
  );
};
