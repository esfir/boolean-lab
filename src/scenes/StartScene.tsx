import { Aitigenik } from '../components/Aitigenik';
import { LabBackground } from '../components/LabBackground';
import { uiText } from '../data/gameData';

export function StartScene({ onStart, muted, onMute }: { onStart: () => void; muted: boolean; onMute: () => void }) {
  return <main className="screen start-screen"><LabBackground />
    <button className="icon-button sound-floating" onClick={onMute}>{muted ? '🔇' : '🔊'}</button>
    <div className="start-copy"><div className="eyebrow"><i /> СЕКРЕТНЫЙ УЧЕБНЫЙ МОДУЛЬ</div>
      <h1>{uiText.startTitle}</h1><p>{uiText.startSubtitle}</p>
      <div className="binary-pills"><span className="true-pill">☑ true</span><span>□ false</span></div>
      <button className="primary-button" onClick={onStart}>{uiText.startButton}<b>→</b></button>
    </div>
    <div className="start-hero"><div className="hero-badge">АЙТИГЕНИК <span>● ONLINE</span></div><Aitigenik /></div>
    <div className="age-mark">7+ <small>лет</small></div>
  </main>;
}
