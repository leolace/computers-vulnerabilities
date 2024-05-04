import { contents } from "./data.ts"

const getSlotSize = () => {
  return contents.length * 2000;
};

// values in pixeis
export const SCROLL_OFFSET = 600;
export const CONTAINER_SIZE = getSlotSize();
export const SLOT_SIZE = getSlotSize() / contents.length;

