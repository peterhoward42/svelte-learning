// Note PLAIN JS - not a svelte file.

// Exposes a writable store called clickCount

import { writable } from 'svelte/store';

export const clickCount = writable(0);