import type { ReactNode } from "react";
import type { IconType } from "react-icons";

interface ChipProps {
  Icon?: IconType;
  children: ReactNode;
}

function Chip({ Icon, children }: ChipProps) {
  return (
    <span className="inline-flex items-center gap-2 border px-3 py-1.5">
      {Icon && <Icon className="text-lg" />}
      {children}
    </span>
  );
}

export default Chip;
