export const propertyNames = ['Anchored', 'CanCollide', 'CanTouch', 'Enabled'] as const;
export type PropertyName = typeof propertyNames[number];
export type PropertyValues = Record<PropertyName, boolean>;
export const descriptions: Record<PropertyName, string> = {
  Anchored: 'Закреплён на месте', CanCollide: 'Не пропускает сквозь себя',
  CanTouch: 'Замечает касание', Enabled: 'Устройство работает',
};
export const isSolved = (values: PropertyValues, target: PropertyValues) =>
  propertyNames.every(property => values[property] === target[property]);
export const challenges: Record<number, { target: PropertyValues; task: string; hint: string }> = {
  1: { target: { Anchored: true, CanCollide: true, CanTouch: false, Enabled: true },
    task: 'Платформа должна стоять на месте, держать робота и работать. Касание замечать не нужно.',
    hint: 'Включи Anchored, CanCollide и Enabled. Выключи CanTouch.' },
  2: { target: { Anchored: true, CanCollide: false, CanTouch: false, Enabled: true },
    task: 'Стена должна стоять на месте и работать, но пропускать робота. Касание замечать не нужно.',
    hint: 'Включи Anchored и Enabled. Выключи CanCollide и CanTouch.' },
  3: { target: { Anchored: true, CanCollide: false, CanTouch: true, Enabled: true },
    task: 'Сенсор должен стоять на месте, работать и замечать касание, но не мешать движению робота.',
    hint: 'Включи Anchored, CanTouch и Enabled. Выключи CanCollide.' },
  4: { target: { Anchored: true, CanCollide: false, CanTouch: false, Enabled: false },
    task: 'Установка должна стоять на месте. Выключи лазер, убери преграду и реакцию на касание.',
    hint: 'Включи только Anchored. Остальные три свойства выключи.' },
};
export const initialValues = (id: number): PropertyValues => {
  return { Anchored: false, CanCollide: id !== 1, CanTouch: id === 4, Enabled: id === 2 || id === 4 };
};
