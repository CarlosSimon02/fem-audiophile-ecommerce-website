"use client";
import { cn } from "@/utils/functions";
import { useRouter } from "next/navigation";

type GoBackProps = {
  className?: string;
};

const GoBack = ({ className }: GoBackProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={cn("link-button", className)}
    >
      Go back
    </button>
  );
};

export default GoBack;
