
// import React from 'react'
// import { Spinner } from '@/components/spinner'

// type LoaderProps = {
//   noPadding?: boolean
// }

// const Loader = ({
//   noPadding,
// }: LoaderProps) => {
//   return (
//     <div className={'w-full py-5 flex items-center justify-center'}>
//       <Spinner noPadding={noPadding} />
//     </div>
//   );
// }

// export default Loader

import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonCard() {
  return (
    <div className="flex-1 flex-col mt-32">
      <Skeleton className="h-[125px] mb-2 w-full space-y-2 rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  )
}
