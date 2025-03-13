import {JSX, PropsWithChildren} from 'react'

export function Performance({children}: PropsWithChildren): JSX.Element {
    return (
        <>
            <p>
                {(performance.now() / 1000).toLocaleString('en-US', {
                    minimumFractionDigits: 4,
                    maximumFractionDigits: 4,
                })}
            </p>
            {children}
        </>
    )
}
