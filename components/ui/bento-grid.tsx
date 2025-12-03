import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  className,
  title,
  description,
  header,
  icon,
  children,
  span = 1,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  span?: 1 | 2;
}) => {
  return (
    <div
      className={cn(
        "rounded-3xl group/bento hover:shadow-xl transition duration-200 p-6 glass-strong justify-between flex flex-col space-y-4",
        span === 2 && "md:col-span-2",
        className
      )}
    >
      {header && <div>{header}</div>}
      <div className="group-hover/bento:translate-x-2 transition duration-200 flex-1 flex flex-col">
        {icon}
        {title && (
          <div className="font-bold text-white mb-2 mt-2">
            {title}
          </div>
        )}
        {description && (
          <div className="font-normal text-muted-foreground text-sm">
            {description}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

