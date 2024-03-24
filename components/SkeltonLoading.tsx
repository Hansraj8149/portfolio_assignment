import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function SkeletonLoading({ number }: any) {
  const componentsArray = Array.from({ length: number }, (value, index) => index);
  return (
      <div className="grid grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-3">
   { componentsArray.map((el, index) => (
        <div key={index} className="border flex flex-col items-stretch gap-2 border-gray-200 dark:border-gray-700 p-4 rounded-lg">

          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <Skeleton className="h-4" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[95%]" />
          </div>
        </div>
    ))}
    </div>
  )
}
