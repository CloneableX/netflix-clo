import {create} from "zustand";

type InfoModalStoreType = {
  movieId?: string,
  isOpen: boolean,
  openModal: (movieId: string) => void,
  closeModal: () => void
}

const useInfoModalStore = create<InfoModalStoreType>((set) => ({
  movieId: undefined,
  isOpen: false,
  openModal: (movieId: string) => set({isOpen: true, movieId}),
  closeModal: () => set({isOpen: false, movieId: undefined})
}))

export default useInfoModalStore
