export function assertDefined<T>(
    name: string,
    value: T
): asserts value is NonNullable<T> {
    if (value === null || value === undefined) {
        throw new Error(`${name} is not defined`)
    }
}
