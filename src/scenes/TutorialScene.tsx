import { Aitigenik } from '../components/Aitigenik';
import { LabBackground } from '../components/LabBackground';
import { uiText } from '../data/gameData';

export function TutorialScene({ onDone }: { onDone: () => void }) {
  return <main className="screen tutorial-screen"><LabBackground />
    <section className="tutorial-card"><div className="tutorial-hero"><Aitigenik state="moving" /><div className="speech">Привет! Я Айтигеник.<br/>Раскроем секрет Boolean?</div></div>
      <div className="lesson"><div className="eyebrow"><i /> БЫСТРОЕ ОБУЧЕНИЕ</div><h2>{uiText.lessonTitle}</h2><p>{uiText.lessonLead}</p>
        <div className="boolean-cards"><div className="bool-card true"><span>✓</span><strong>true</strong><small>ДА • ВКЛЮЧЕНО</small></div><div className="bool-card false"><span>×</span><strong>false</strong><small>НЕТ • ВЫКЛЮЧЕНО</small></div></div>
        <div className="checkbox-explain"><div><b>☑</b><strong>true</strong></div><div><b>□</b><strong>false</strong></div><p>{uiText.lessonCheckbox}</p></div>
        <button className="primary-button" onClick={onDone}>{uiText.lessonButton}<b>→</b></button>
      </div>
    </section>
  </main>;
}
