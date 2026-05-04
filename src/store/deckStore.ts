import { create } from 'zustand';
import { SCENES } from '../data/scenes';

interface DeckState {
  currentSceneId: string;
  modalId: string | null;
  activeModule: string | null;
  formPrefill: Record<string, string> | null;
  openingVideoProgress: number;
  siteVisitProgress: number;
  goToScene: (id: string) => void;
  nextScene: () => void;
  previousScene: () => void;
  openModal: (id: string) => void;
  closeModal: () => void;
  openModule: (id: string) => void;
  closeModule: () => void;
  setFormPrefill: (data: Record<string, string> | null) => void;
  setOpeningVideoProgress: (value: number) => void;
  setSiteVisitProgress: (value: number) => void;
}

const firstSceneId = SCENES[0]?.id ?? 'opening';

export const useDeckStore = create<DeckState>((set, get) => ({
  currentSceneId: firstSceneId,
  modalId: null,
  activeModule: null,
  formPrefill: null,
  openingVideoProgress: 0,
  siteVisitProgress: 0,
  goToScene: (id) => set({ currentSceneId: id }),
  nextScene: () => {
    const currentIndex = SCENES.findIndex((scene) => scene.id === get().currentSceneId);
    const nextScene = SCENES[Math.min(currentIndex + 1, SCENES.length - 1)];
    if (nextScene) set({ currentSceneId: nextScene.id });
  },
  previousScene: () => {
    const currentIndex = SCENES.findIndex((scene) => scene.id === get().currentSceneId);
    const previous = SCENES[Math.max(currentIndex - 1, 0)];
    if (previous) set({ currentSceneId: previous.id });
  },
  openModal: (id) => set({ modalId: id }),
  closeModal: () => set({ modalId: null }),
  openModule: (id) => set({ activeModule: id }),
  closeModule: () => set({ activeModule: null }),
  setFormPrefill: (data) => set({ formPrefill: data }),
  setOpeningVideoProgress: (value) => set({ openingVideoProgress: value })
  ,setSiteVisitProgress: (value) => set({ siteVisitProgress: value })
}));
