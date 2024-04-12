export const toDto = <TInput, TDto>(input: TInput, mapping: Record<string, string>): TDto => {
  const dto: Partial<TDto> = {}; 

  for (const [key, value] of Object.entries(input)) {
    const mappedKey = mapping[key] || key;
    (dto as any)[mappedKey] = value; // Using type assertion (as any) to handle dynamic keys
  }
  return dto as TDto;
}