import type { LevelData } from '../data/gameData';
import { propertyNames, descriptions } from '../data/challenges';
import type { PropertyName, PropertyValues } from '../data/challenges';

export function PropertiesPanel({ level, values, solved, onToggle }: { level: LevelData; values: PropertyValues; solved: boolean; onToggle: (property: PropertyName) => void }) {
  return <aside className={`properties properties--four ${solved ? 'properties--solved' : ''}`}>
    <div className="properties-title"><span>НАСТРОЙ 4 СВОЙСТВА</span><span className="window-dots">•••</span></div>
    <div className="object-name"><span className="cube-icon">◇</span><div><small>УЧЕБНАЯ МОДЕЛЬ УСТРОЙСТВА</small><strong>{level.objectName}</strong></div></div>
    <div className="property-options" role="group" aria-label="Четыре свойства устройства">
      {propertyNames.map(property => <button key={property} className="property-row" role="switch" aria-checked={values[property]} aria-label={`${property} — ${descriptions[property]}`} onClick={() => onToggle(property)}>
        <span className="property-copy"><span className="property-name">{property}</span><small>{descriptions[property]}</small></span>
        <span className="property-state"><span className={`checkbox ${values[property] ? 'checked' : ''}`}>{values[property] ? '✓' : ''}</span><span>{values[property] ? 'true · ВКЛ' : 'false · ВЫКЛ'}</span></span>
      </button>)}
    </div>
    <div className="toggle-tip">Выбери, что включить, а что выключить.</div>
  </aside>;
}
