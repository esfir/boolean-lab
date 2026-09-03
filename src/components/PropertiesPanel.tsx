import type { LevelData } from '../data/gameData';

export function PropertiesPanel({ level, value, solved, onToggle }: { level: LevelData; value: boolean; solved: boolean; onToggle: () => void }) {
  return <aside className={`properties ${solved ? 'properties--solved' : ''}`}>
    <div className="properties-title"><span>PROPERTIES</span><span className="window-dots">•••</span></div>
    <div className="object-name"><span className="cube-icon">◇</span><div><small>OBJECT</small><strong>{level.objectName}</strong></div></div>
    <div className="property-section">BEHAVIOR</div>
    <button className="property-row" onClick={onToggle} aria-label={`${level.property}: ${value}`} aria-pressed={value}>
      <span className="property-name">{level.property}</span>
      <span className={`checkbox ${value ? 'checked' : ''}`}>{value ? '✓' : ''}</span>
    </button>
    <div className={`boolean-value ${value ? 'is-true' : 'is-false'}`}>
      <span className="value-dot" />
      <div><small>BOOLEAN VALUE</small><strong>{String(value)}</strong></div>
    </div>
    <div className="toggle-tip">Нажми на checkbox<br/><b>☑ true</b>&nbsp;&nbsp; <b>□ false</b></div>
  </aside>;
}
