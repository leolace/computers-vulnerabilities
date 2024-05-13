import { innerWidth } from "$lib/stores/store";
import { contents } from "./data"

const getSlotSize = (innerWidth) => {
  return contents.length * 2500;
};

// values in pixeis
export const SCROLL_OFFSET = 600;
export const CONTAINER_SIZE = getSlotSize();
export const SLOT_SIZE = getSlotSize() / contents.length;

