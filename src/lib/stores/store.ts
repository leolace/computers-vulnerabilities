import { writable } from "svelte/store"

export let scrollX = writable(0)

export let scrollTo = (value) => $scrollX += value;

export let scrollContainer: HTMLDivElement = writable(null);
