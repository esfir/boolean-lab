export type LevelKind = 'anchored' | 'collide' | 'touch' | 'enabled';

export interface LevelData {
  id: number;
  kind: LevelKind;
  property: 'Anchored' | 'CanCollide' | 'CanTouch' | 'Enabled';
  objectName: string;
  title: string;
  mission: string;
  initialValue: boolean;
  targetValue: boolean;
  hint: string;
  idleText: string;
  successText: string;
}

export const uiText = {
  gameTitle: 'Лаборатория Boolean',
  startTitle: 'ЛАБОРАТОРИЯ BOOLEAN',
  startSubtitle: 'Помоги Айтигенику выбраться!',
  startButton: 'НАЧАТЬ',
  lessonTitle: 'Секрет Boolean',
  lessonLead: 'Boolean умеет хранить только два значения',
  lessonCheckbox: 'В Roblox Studio Boolean часто выглядит как галочка',
  lessonButton: 'ПОНЯТНО!',
  hintButton: 'Подсказка',
  nextButton: 'ДАЛЬШЕ',
  finishTitle: 'ЛАБОРАТОРИЯ ПРОЙДЕНА!',
  finishSubtitle: 'Теперь ты знаешь Boolean',
  rank: 'BOOLEAN MASTER',
  replay: 'ИГРАТЬ ЕЩЁ РАЗ',
};

export const levels: LevelData[] = [
  {
    id: 1, kind: 'anchored', property: 'Anchored', objectName: 'Platform',
    title: 'Шаткая платформа', mission: 'Закрепи платформу над энергией.',
    initialValue: false, targetValue: true,
    hint: 'Нам нужно, чтобы платформа была закреплена.',
    idleText: 'Платформа шатается. Как сделать её неподвижной?',
    successText: 'Готово! Anchored = true — платформа закреплена.',
  },
  {
    id: 2, kind: 'collide', property: 'CanCollide', objectName: 'EnergyWall',
    title: 'Энергетическая стена', mission: 'Помоги Айтигенику пройти сквозь стену.',
    initialValue: true, targetValue: false,
    hint: 'Нам нужно пройти сквозь стену.',
    idleText: 'Пока не получается пройти. Попробуй изменить свойство.',
    successText: 'Отлично! CanCollide = false — теперь через объект можно пройти.',
  },
  {
    id: 3, kind: 'touch', property: 'CanTouch', objectName: 'TouchPad',
    title: 'Сенсорная дверь', mission: 'Включи сенсор, чтобы открыть дверь.',
    initialValue: false, targetValue: true,
    hint: 'Нам нужно, чтобы панель заметила касание.',
    idleText: 'Панель пока не замечает касание. Измени её свойство.',
    successText: 'Верно! CanTouch = true — объект реагирует на касание.',
  },
  {
    id: 4, kind: 'enabled', property: 'Enabled', objectName: 'LaserBeam',
    title: 'Лазерный барьер', mission: 'Выключи лазер и открой путь к выходу.',
    initialValue: true, targetValue: false,
    hint: 'Нам нужно выключить лазер.',
    idleText: 'Лазер всё ещё работает. Как его отключить?',
    successText: 'Получилось! Enabled = false — лазер выключен.',
  },
];
