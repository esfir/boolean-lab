import { useEffect, useState } from 'react';
import { LabBackground } from '../components/LabBackground';
import { PropertiesPanel } from '../components/PropertiesPanel';
import { TopBar } from '../components/TopBar';
import type { LevelData } from '../data/gameData';
import { uiText } from '../data/gameData';
import { RoomVisual } from './RoomVisual';
import { challenges, initialValues, isSolved } from '../data/challenges';
import type { PropertyName } from '../data/challenges';

export function GameScene({ level, muted, onMute, onToggle, onNext }: { level: LevelData; muted: boolean; onMute: () => void; onToggle: (value: boolean, solved: boolean) => void; onNext: () => void }) {
  const challenge = challenges[level.id];
  const [values, setValues] = useState(() => initialValues(level.id));
  const [hint, setHint] = useState(false);
  const solved = isSolved(values, challenge.target);
  useEffect(() => { setValues(initialValues(level.id)); setHint(false); }, [level]);
  useEffect(() => { const timer = window.setTimeout(() => { if (!solved) setHint(true); }, 9000); return () => clearTimeout(timer); }, [level, solved]);
  const toggle = (property: PropertyName) => {
    const next = { ...values, [property]: !values[property] };
    setValues(next);
    onToggle(next[property], isSolved(next, challenge.target));
  };
  return <main className="screen game-screen"><LabBackground /><TopBar current={level.id} muted={muted} onMute={onMute} />
    <div className="game-layout"><section className="mission-panel"><div className="mission-copy"><span>МИССИЯ</span><h2>{level.mission}</h2></div><RoomVisual level={level} solved={solved} /></section>
      <section className="control-column"><PropertiesPanel level={level} values={values} solved={solved} onToggle={toggle} />
        <div className={`feedback ${solved ? 'success' : ''}`} aria-live="polite"><span>{solved ? '✓' : 'i'}</span><p>{solved ? `Все 4 свойства верны! ${level.successText}` : challenge.task}</p></div>
        {hint && !solved && <div className="hint-card"><span>💡</span><p>{challenge.hint}</p></div>}
        <div className="action-row"><button className="hint-button" onClick={() => setHint(true)}>? {uiText.hintButton}</button>{solved && <button className="primary-button next" onClick={onNext}>{uiText.nextButton}<b>→</b></button>}</div>
      </section>
    </div>
  </main>;
}
