import { Aitigenik } from '../components/Aitigenik';
import { LabBackground } from '../components/LabBackground';
import { levels, uiText } from '../data/gameData';

export function FinishScene({ onReplay }: { onReplay: () => void }) {
  return <main className="screen finish-screen"><LabBackground /><div className="confetti" aria-hidden="true">◆ ✦ ● ✦ ◆ ● ✦</div>
    <div className="finish-hero"><div className="medal">★<span>{uiText.rank}</span></div><Aitigenik state="success" /></div>
    <section className="finish-card"><div className="eyebrow"><i /> МИССИЯ ВЫПОЛНЕНА</div><h1>{uiText.finishTitle}</h1><p>{uiText.finishSubtitle}</p>
      <div className="summary-grid">{levels.map((level) => <div key={level.id}><span>✓</span><b>{level.property}</b><small>ОСВОЕНО</small></div>)}</div>
      <div className="master-formula"><span>ГЛАВНАЯ ФОРМУЛА</span><div><b>☑</b> = <strong>true</strong><i/> <b>□</b> = <em>false</em></div></div>
      <button className="primary-button" onClick={onReplay}>{uiText.replay}<b>↻</b></button>
    </section>
  </main>;
}
