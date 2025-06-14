import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div>
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
    </div>
  );
}

export default loading;
