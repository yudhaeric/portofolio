import { create } from "zustand";

interface SectionStore {
  sectionRefs: Record<string, HTMLElement | null>;
  setSectionRef: (name: string, ref: HTMLElement) => void;
}

export const useSectionStore = create<SectionStore>((set) => ({
  sectionRefs: {},
  setSectionRef: (name, ref) =>
    set((state) => ({
      sectionRefs: { ...state.sectionRefs, [name]: ref },
    })),
}));
