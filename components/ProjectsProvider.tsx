"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { PROJECTS } from "@/lib/projects";

/** How long each project stays on stage before the deck advances. */
export const ROTATE_MS = 6800;

type ProjectsState = {
  /** Index of the project on stage. */
  active: number;
  /** Bumped on every (re)start of the rotation timer — used to restart the tab progress bar. */
  cycle: number;
  select: (index: number) => void;
};

const ProjectsContext = createContext<ProjectsState | null>(null);

/**
 * Shared state for the work deck: which project is on stage, auto-advancing
 * every ROTATE_MS (paused while the tab is hidden or the user prefers reduced
 * motion). Lets other sections (testimonials) put a project on stage.
 */
export function ProjectsProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({ active: 0, cycle: 0 });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setState((s) =>
        !document.hidden && !reduceMotion
          ? { active: (s.active + 1) % PROJECTS.length, cycle: s.cycle + 1 }
          : { ...s, cycle: s.cycle + 1 },
      );
    }, ROTATE_MS);
    return () => window.clearTimeout(timer);
  }, [state]);

  const select = useCallback((index: number) => {
    setState((s) => ({ active: index, cycle: s.cycle + 1 }));
  }, []);

  const value = useMemo(() => ({ active: state.active, cycle: state.cycle, select }), [state, select]);

  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
}

export function useProjects() {
  const ctx = useContext(ProjectsContext);
  if (!ctx) throw new Error("useProjects must be used inside <ProjectsProvider>");
  return ctx;
}
