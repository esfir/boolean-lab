import { Aitigenik } from '../components/Aitigenik';
import type { LevelData } from '../data/gameData';

export function RoomVisual({ level, solved }: { level: LevelData; solved: boolean }) {
  return <div className={`room-visual scene-${level.kind} ${solved ? 'is-solved' : ''}`}>
    <div className="room-label"><span>КОМНАТА 0{level.id}</span><b>{level.title}</b></div>
    <div className="scene-lights"><i/><i/><i/><i/><i/></div>
    <div className="scene-floor" />
    <div className="hero-slot"><Aitigenik state={solved ? 'success' : level.kind === 'collide' ? 'blocked' : 'idle'} /></div>
    {level.kind === 'anchored' && <><div className="energy-pit"><i/><i/><i/></div><div className="platform"><span className="lock">◆</span></div><div className="exit-pad">EXIT</div></>}
    {level.kind === 'collide' && <><div className="energy-wall"><i/><i/><i/><strong>COLLISION</strong></div><div className="exit-pad">EXIT</div></>}
    {level.kind === 'touch' && <><div className="touch-pad"><span>◎</span><b>{solved ? 'КАСАНИЕ ОБНАРУЖЕНО!' : 'TOUCH SENSOR'}</b></div><div className="lab-door"><div className="door-light"/><span>03</span></div></>}
    {level.kind === 'enabled' && <><div className="laser-unit left"/><div className="laser-unit right"/><div className="lasers"><i/><i/><i/><i/></div><div className="exit-glow">ВЫХОД</div></>}
  </div>;
}
