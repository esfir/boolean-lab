import { uiText } from '../data/gameData';

export function TopBar({ current, muted, onMute }: { current: number; muted: boolean; onMute: () => void }) {
  return <header className="topbar">
    <div className="brand"><span className="brand-mark">B</span><span>{uiText.gameTitle}</span></div>
    <div className="progress" aria-label={`Комната ${current} из 4`}>
      {[1,2,3,4].map((step) => <div key={step} className={`progress-step ${step < current ? 'done' : ''} ${step === current ? 'active' : ''}`}>
        <span>{step < current ? '✓' : step}</span><small>{step === current ? `${current} / 4` : ''}</small>
      </div>)}
    </div>
    <button className="icon-button" onClick={onMute} aria-label={muted ? 'Включить звук' : 'Выключить звук'}>{muted ? '🔇' : '🔊'}</button>
  </header>;
}
