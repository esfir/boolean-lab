# Лаборатория Boolean

Полноэкранная обучающая мини-игра для детей 7–10 лет. Игрок помогает Айтигенику пройти четыре комнаты, экспериментируя с Boolean-свойствами в стилизованной панели Roblox Studio Properties.

**Играть:** https://esfir.github.io/boolean-lab/

## Запуск

```bash
npm install
npm run dev
```

Откройте адрес, который покажет Vite (обычно `http://localhost:5173`). Для production-сборки:

```bash
npm run build
npm run preview
```

## Структура

- `src/data/gameData.ts` — все игровые тексты и расширяемый массив уровней.
- `src/game/AudioManager.ts` — безопасная звуковая система.
- `src/scenes/` — старт, обучение, комнаты и финал.
- `src/components/` — общие элементы интерфейса.
- `src/assets/images/aitigenik-idle.png` — постоянный спрайт героя.
- `src/assets/audio/` — место для необязательных звуков.

Игра не падает, если mp3-файлов нет. Поддерживаемые имена перечислены в задании и `AudioManager.ts`. Чтобы заменить героя исходным референсом, достаточно заменить `aitigenik-idle.png`, сохранив имя файла.
