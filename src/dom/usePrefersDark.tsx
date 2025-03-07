import {useCallback, useEffect, useState} from 'react'

export function usePrefersDark() {
    const [pref, setPref] = useState<boolean | null>(null)
    const setPrefWrapper = useCallback((e: MediaQueryListEvent): void => {
        setPref(e.matches)
    }, [])
    useEffect(() => {
        setPref(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }, [])
    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', setPrefWrapper)
        return () => {
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .removeEventListener('change', setPrefWrapper)
        }
    }, [setPrefWrapper])
    return pref
}
