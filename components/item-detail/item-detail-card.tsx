import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { FC } from "react";

interface ItemDetailCardProps {
  id: number;
  title: string;
}

export const ItemDetailCard: FC<ItemDetailCardProps> = ({ id, title }) => {
  return (
    <Card className="border-none h-fit min-h-[450px]">
      <CardBody className="overflow-hidden">
        <h4 className="font-medium text-xl text-center ">{title}</h4>
        <h4 className="font-normal text-sm text-center pt-3">
          LIL panz is your entry to boomlands where mealz are serverd weekly
        </h4>
        <div className="text-left w-full pt-10">
          <div className="flex justify-start items-center mb-3">
            <p className="w-[7rem] text-base font-medium text-gray-500 dark:text-textcontent1">
              Leader
            </p>
            <p className="text-base font-normal">TestUser2131</p>
          </div>
          <div className="flex justify-start items-center mb-3">
            <p className="w-[7rem] text-base font-medium text-gray-500 dark:text-textcontent1">
              Price
            </p>
            <p className="text-base font-normal">4.23 SOL</p>
          </div>
          <div className="flex justify-start items-center mb-3">
            <p className="w-[7rem] text-base font-medium text-gray-500 dark:text-textcontent1">
              Time Left
            </p>
            <p className="text-base font-normal">0.20</p>
          </div>
          <div className="flex justify-start items-center mb-3">
            <p className="w-[7rem] text-base font-medium text-gray-500 dark:text-textcontent1">
              Total Bids
            </p>
            <p className="text-base font-normal">15</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-start pt-5 gap-4">
          <Button color="primary" className="w-[50%]">
            Bid
          </Button>
          <Button color="primary" variant="ghost" className="w-[50%]">
            Track
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
