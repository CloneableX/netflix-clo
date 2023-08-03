'use client'

import useInfoModalStore from "@/hooks/useInfoModalStore";
import {InfoModal} from "@/app/components/InfoModal";

export const MovieInfoModal = () => {
  const {isOpen, closeModal} = useInfoModalStore()

  return (
    <InfoModal visible={isOpen} onClose={closeModal} />
  );
};