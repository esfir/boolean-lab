import { useState } from 'react';
import { levels } from './data/gameData';
import { audioManager } from './game/AudioManager';
import { FinishScene } from './scenes/FinishScene';
import { GameScene } from './scenes/GameScene';
import { StartScene } from './scenes/StartScene';
import { TutorialScene } from './scenes/TutorialScene';

type Stage = 'start' | 'tutorial' | 'game' | 'finish';

export function App() {
  const [stage, setStage] = useState<Stage>('start');
  const [levelIndex, setLevelIndex] = useState(0);
  const [muted, setMuted] = useState(false);
  const click = () => audioManager.play('click');
  const toggleMute = () => { setMuted((m) => { audioManager.setEnabled(m); return !m; }); };
  const toggleValue = (value: boolean) => {
    audioManager.play(value ? 'on' : 'off');
    if (value === levels[levelIndex].targetValue) {
      window.setTimeout(() => audioManager.play(levels[levelIndex].kind === 'enabled' ? 'laserOff' : 'success'), 180);
    }
  };
  const next = () => { click(); if (levelIndex === levels.length - 1) { audioManager.play('finish'); setStage('finish'); } else setLevelIndex((i) => i + 1); };
  const replay = () => { click(); setLevelIndex(0); setStage('start'); };
  if (stage === 'start') return <StartScene muted={muted} onMute={toggleMute} onStart={() => { click(); setStage('tutorial'); }} />;
  if (stage === 'tutorial') return <TutorialScene onDone={() => { click(); setStage('game'); }} />;
  if (stage === 'finish') return <FinishScene onReplay={replay} />;
  return <GameScene key={levels[levelIndex].id} level={levels[levelIndex]} muted={muted} onMute={toggleMute} onToggle={toggleValue} onNext={next} />;
}
