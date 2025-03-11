import {useSyncExternalStore} from 'react'

function subscribePrefersDark(cb: () => void): () => void {
    window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', cb)
    return (): void => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .removeEventListener('change', cb)
    }
}

function getPrefersDarkSnapshot(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function usePrefersDark(): boolean {
    return useSyncExternalStore(subscribePrefersDark, getPrefersDarkSnapshot)
}
