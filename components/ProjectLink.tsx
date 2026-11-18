"use client";

import type { AnchorHTMLAttributes } from "react";
import { useProjects } from "@/components/ProjectsProvider";

type Props = { index: number } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

/** Link to the work section that also puts project `index` on stage. */
export function ProjectLink({ index, onClick, ...rest }: Props) {
  const { select } = useProjects();
  return (
    <a
      href="#work"
      {...rest}
      onClick={(e) => {
        select(index);
        onClick?.(e);
      }}
    />
  );
}
