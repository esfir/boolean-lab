import { useEffect, useState } from 'react';
import { LabBackground } from '../components/LabBackground';
import { PropertiesPanel } from '../components/PropertiesPanel';
import { TopBar } from '../components/TopBar';
import type { LevelData } from '../data/gameData';
import { uiText } from '../data/gameData';
import { RoomVisual } from './RoomVisual';

export function GameScene({ level, muted, onMute, onToggle, onNext }: { level: LevelData; muted: boolean; onMute: () => void; onToggle: (value: boolean) => void; onNext: () => void }) {
  const [value, setValue] = useState(level.initialValue);
  const [hint, setHint] = useState(false);
  const solved = value === level.targetValue;
  useEffect(() => { setValue(level.initialValue); setHint(false); }, [level]);
  useEffect(() => { const timer = window.setTimeout(() => { if (!solved) setHint(true); }, 9000); return () => clearTimeout(timer); }, [level, solved]);
  const toggle = () => { const next = !value; setValue(next); onToggle(next); };
  return <main className="screen game-screen"><LabBackground /><TopBar current={level.id} muted={muted} onMute={onMute} />
    <div className="game-layout"><section className="mission-panel"><div className="mission-copy"><span>МИССИЯ</span><h2>{level.mission}</h2></div><RoomVisual level={level} solved={solved} /></section>
      <section className="control-column"><PropertiesPanel level={level} value={value} solved={solved} onToggle={toggle} />
        <div className={`feedback ${solved ? 'success' : ''}`}><span>{solved ? '✓' : 'i'}</span><p>{solved ? level.successText : level.idleText}</p></div>
        {hint && !solved && <div className="hint-card"><span>💡</span><p>{level.hint}</p></div>}
        <div className="action-row"><button className="hint-button" onClick={() => setHint(true)}>? {uiText.hintButton}</button>{solved && <button className="primary-button next" onClick={onNext}>{uiText.nextButton}<b>→</b></button>}</div>
      </section>
    </div>
  </main>;
}
