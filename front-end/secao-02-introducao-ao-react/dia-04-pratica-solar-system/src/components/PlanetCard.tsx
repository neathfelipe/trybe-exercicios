type PlanetCardProps = {
  planetName: string,
  planetImage: string
  height: string,
};

export default function PlanetCard({ planetName, planetImage, height }: PlanetCardProps) {
  return (
    <div className="planetCard" data-testid="planet-card">
      <p data-testid="planet-name">
        {planetName}
      </p>
      <img src={ planetImage } alt={ `Planeta ${planetName}` } height={ height } />
    </div>
  );
}
