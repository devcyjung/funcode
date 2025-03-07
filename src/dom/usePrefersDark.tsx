import {useSyncExternalStore} from 'react'

const subscribePrefersDark: (cb: () => void) => () => void = (
    cb: () => void
): (() => void) => {
    window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', cb)
    return (): void => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .removeEventListener('change', cb)
    }
}

const getPrefersDarkSnapshot: () => boolean = (): boolean => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function usePrefersDark(): boolean {
    return useSyncExternalStore(subscribePrefersDark, getPrefersDarkSnapshot)
}
