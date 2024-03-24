
import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

export default function BlogsSkeleton({number}:any) {
    const componentsArray = Array.from({length:number}, (index, value)=>index);
  return (
    <div className="grid grid-cols-1 gap-6 w-full space-y-4 lg:space-y-6 lg:col-span-3">

    {componentsArray.map((el,index)=>(
        
    <Card key={index}>
      <div className="flex items-center space-x-4 p-4">
        <Skeleton className="h-40 w-40" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[400px]" />
          <Skeleton className="h-20 w-[400px]" />
        </div>
      </div>
    </Card>
    ))}
    </div>

  )
}

