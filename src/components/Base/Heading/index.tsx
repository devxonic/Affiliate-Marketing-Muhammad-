import { twMerge } from "tailwind-merge";

interface PropsType {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: JSX.Element | string;
}

const baseClasses = [
  "text-[1.5rem] whitespace-nowrap text-ellipsis font-bold",
  "text-[1.3rem] whitespace-nowrap text-ellipsis font-semibold",
  "text-[1.2rem] whitespace-nowrap text-ellipsis font-medium",
  "text-[1.1rem] whitespace-nowrap text-ellipsis font-medium",
  "text-[1rem] whitespace-nowrap text-ellipsis font-medium",
  "text-[0.9rem] whitespace-nowrap text-ellipsis font-medium",
];

export default function Heading({ level, className, children }: PropsType) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={twMerge(baseClasses[level - 1], className)}>{children}</Tag>
  );
}
