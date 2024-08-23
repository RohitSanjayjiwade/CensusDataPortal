import Image from "next/image";
import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full grid grid-cols-2 max-sm:grid-cols-1 gap-6  mt-32"> 
    {/*<div className="flex-1 mt-32 overflow-hidden">*/}
     <Card className="w-full p-1">
      <CardHeader className="p-3 pb-0">
        <CardTitle className="text-xl">Most Populated Cities</CardTitle>
        {/*<CardDescription>Deploy your new project in one-click.</CardDescription>*/}
      </CardHeader>
      <CardContent className="p-3 border-b">
        <Table>
          <TableHeader>
            <TableRow className='bg-blue-600 text-base hover:bg-blue-800'>
              <TableHead className='text-white font-bold'>City</TableHead>
              <TableHead className='text-white font-bold'>State</TableHead>
              <TableHead className='text-white font-bold'>Population</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-base">
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2">Credit Card</TableCell>
                <TableCell className="py-2">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2">Credit Card</TableCell>
                <TableCell className="py-2">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2">Credit Card</TableCell>
                <TableCell className="py-2">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2">Credit Card</TableCell>
                <TableCell className="py-2">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2">Credit Card</TableCell>
                <TableCell className="py-2">$250.00</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="grid justify-items-start gap-2 p-3">
        <p className="text-gray-800 text-base">The Urban Metropolitan regions have witness huge population increase in the last 10 years.</p>
        <Button asChild className="bg-blue-600 text-base hover:bg-blue-800"><Link href="#" className=''>Most Populated Metropolitan</Link></Button>
      </CardFooter>
    </Card>

    <Card className="w-full p-1">
      <CardHeader className="p-3 pb-0">
        <CardTitle className="text-xl">Top Literate States</CardTitle>
        {/*<CardDescription>Deploy your new project in one-click.</CardDescription>*/}
      </CardHeader>
      <CardContent className="p-3 border-b">
        <Table>
          <TableHeader>
            <TableRow className='bg-blue-600 text-base hover:bg-blue-800'>
              <TableHead className='text-white font-bold'>State</TableHead>
              <TableHead className='text-white font-bold text-center'>Literacy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-base">
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2 text-center">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2 text-center">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2 text-center">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2 text-center">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2 text-center">$250.00</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="grid justify-items-start gap-2 p-3">
        <p className="text-gray-800 text-base">Kerala has consistently ranked top in last few decades in terms of literacy.</p>
        <Button asChild className="bg-blue-600 text-base hover:bg-blue-800"><Link href="#" className=''>Top Literate States</Link></Button>
      </CardFooter>
    </Card>

    <Card className="w-full p-1">
      <CardHeader className="p-3 pb-0">
        <CardTitle className="text-xl">Best Sex Ratio</CardTitle>
        {/*<CardDescription>Deploy your new project in one-click.</CardDescription>*/}
      </CardHeader>
      <CardContent className="p-3 border-b">
        <Table>
          <TableHeader>
            <TableRow className='bg-blue-600 text-base hover:bg-blue-800'>
              <TableHead className='text-white font-bold'>State</TableHead>
              <TableHead className='text-white font-bold text-center'>Sex Ratio</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-base">
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2 text-center">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2 text-center">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2 text-center">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2 text-center">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2 text-center">$250.00</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="grid justify-items-start gap-2 p-3">
        <p className="text-gray-800 text-base">India&apos;s sex ratio is comparitively very low except few southern states .</p>
        <Button asChild className="bg-blue-600 text-base hover:bg-blue-800"><Link href="#" className=''>Best Sex Ratio</Link></Button>
      </CardFooter>
    </Card>

    <Card className="w-full p-1">
      <CardHeader className="p-3 pb-0">
        <CardTitle className="text-xl">Top Growth Rate</CardTitle>
        {/*<CardDescription>Deploy your new project in one-click.</CardDescription>*/}
      </CardHeader>
      <CardContent className="p-3 border-b">
        <Table>
          <TableHeader>
            <TableRow className='bg-blue-600 text-base hover:bg-blue-800'>
              <TableHead className='text-white font-bold'>State</TableHead>
              <TableHead className='text-white font-bold text-center'>Percentage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-base">
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2 text-center">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2 text-center">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2 text-center">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2 text-center">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2">Paid</TableCell>
                <TableCell className="py-2 text-center">$250.00</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="grid justify-items-start gap-2 p-3">
        <p className="text-gray-800 text-base">Few states are witnessing population growth either due to immigration or fertility rate.</p>
        <Button asChild className="bg-blue-600 text-base hover:bg-blue-800"><Link href="#" className=''>State List ...</Link></Button>
      </CardFooter>
    </Card>
    </div>
  );
}