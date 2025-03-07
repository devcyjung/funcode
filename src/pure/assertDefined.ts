export function assertDefined<T>(value: T): asserts value is NonNullable<T> {
    if (value === null || value === undefined) {
        throw new Error(`${value} is not defined`)
    }
}
