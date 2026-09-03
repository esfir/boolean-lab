import hero from '../assets/images/aitigenik-idle.png';

export function Aitigenik({ state = 'idle' }: { state?: 'idle' | 'success' | 'moving' | 'blocked' }) {
  return (
    <div className={`hero hero--${state}`} aria-label="Айтигеник, дружелюбный зелёный робот">
      <img src={hero} alt="Айтигеник" draggable={false} />
      <span className="hero-shadow" />
    </div>
  );
}
