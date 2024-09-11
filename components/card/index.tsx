import React from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

type CardProps = {
  title: string;
  footerContent: React.ReactNode;
  children: React.ReactNode
};

const DataCard = ({ title, children, footerContent }: CardProps) => {
  return (
    <Card className="w-full p-1">
      <CardHeader className="p-3 pb-0">
        <CardTitle className="text-xl">{title}</CardTitle>
        {/*<CardDescription>Deploy your new project in one-click.</CardDescription>*/}
      </CardHeader>
      <CardContent className="p-3 border-b">
       {children}
      </CardContent>
      <CardFooter className="grid justify-items-start gap-2 p-3">
        {footerContent}
      </CardFooter>
    </Card>

  );
};

export default DataCard;
