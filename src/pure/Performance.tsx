export function Performance() {
    return (
        <p>
            {(performance.now() / 1000).toLocaleString('en-US', {
                minimumFractionDigits: 4,
                maximumFractionDigits: 4,
            })}
        </p>
    )
}
