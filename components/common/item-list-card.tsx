import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { FC } from "react";

interface ItemListCardProps {
  id: number;
  imgUrl: string;
  title: string;
}

export const ItemListCard: FC<ItemListCardProps> = ({ id, imgUrl, title }) => {
  return (
    <Card className="border-none">
      <CardBody className="overflow-hidden p-0">
        <Link href={`/item/${id}`} id="item-list-card-link">
          <Image
            isZoomed
            alt={title}
            className="w-full h-full object-cover rounded-none cursor-pointer"
            src={imgUrl}
          />
        </Link>
      </CardBody>
      <CardFooter className="flex-col pt-0">
        <h4 className="pt-3 font-medium text-base text-center text-ellipsis overflow-hidden w-full whitespace-nowrap">
          {title}
        </h4>
        <div className="text-left w-full pt-2">
          <div className="flex justify-start items-center">
            <p className="w-[5rem] text-sm font-medium text-gray-500 dark:text-textcontent1">
              Leader
            </p>
            <p className="text-sm font-normal">TestUser2131</p>
          </div>
          <div className="flex justify-start items-center">
            <p className="w-[5rem] text-sm font-medium text-gray-500 dark:text-textcontent1">
              Price
            </p>
            <p className="text-sm font-normal">4.23 SOL</p>
          </div>
          <div className="flex justify-start items-center">
            <p className="w-[5rem] text-sm font-medium text-gray-500 dark:text-textcontent1">
              Time Left
            </p>
            <p className="text-sm font-normal">0.20</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-between pt-3 gap-4">
          <Button
            as={Link}
            href={`/item/${id}`}
            color="primary"
            className="w-[50%]"
          >
            Bid
          </Button>
          <Button color="primary" variant="ghost" className="w-[50%]">
            Track
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
