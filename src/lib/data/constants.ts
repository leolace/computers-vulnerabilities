import { innerWidth } from "$lib/stores/store";
import { contents } from "./data"

const getContainerSize = () => {
  return contents.length * 2500;
};

// values in pixeis
export const SCROLL_OFFSET = 600;
export const CONTAINER_SIZE = getContainerSize() + (16 * 30 * contents.length);
export const SLOT_SIZE = getContainerSize() / contents.length;

