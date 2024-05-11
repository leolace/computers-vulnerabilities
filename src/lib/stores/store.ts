import { writable } from "svelte/store"
import type { Writable} from "svelte/store"

export let scrollX = writable(0)

export let scrollTo = (value) => $scrollX += value;

export let scrollContainer: Writable<HTMLElement> = writable(null);

export let innerWidth: Writable<number> = writable(0);

export let activeIndex: Writable<number> = writable(0);
