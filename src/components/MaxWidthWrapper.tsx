import { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Creating a container

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string; // optional
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
