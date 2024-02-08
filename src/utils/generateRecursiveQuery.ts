export function generateRecursiveQuery(
  field: string,
  nestedFields: string[],
  depth: number,
): string {
  if (depth === 0) {
    return `
            ${nestedFields.join('\n')}
            ${field} {
                ${nestedFields.join('\n')}
            }
        `
  } else {
    const nestedQuery = generateRecursiveQuery(field, nestedFields, depth - 1)
    return `
            ${nestedFields.join('\n')}
            ${field} {
                ${nestedQuery}
            }
        `
  }
}
