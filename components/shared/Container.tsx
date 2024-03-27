import { cn } from "@/utils/functions";

type ContainerProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
};

const Container = <T extends React.ElementType = "div">({
  as,
  className = "",
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> &
  ContainerProps<T>) => {
  let Component = as ?? "div";

  return (
    <Component
      className={cn(
        "w-full mx-auto max-w-[71.875rem] px-6 sm:px-10",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
