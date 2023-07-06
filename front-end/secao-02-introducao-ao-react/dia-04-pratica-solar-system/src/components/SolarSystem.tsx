import PlanetCard from './PlanetCard';
import Title from './Title';
import Planets from '../data/planets';

export default function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      <div className="planets">
        {Planets.map(({ name, image, height }) => {
          return (<PlanetCard
            key={ name }
            planetName={ name }
            planetImage={ image }
            height={ height }
          />);
        })}
        <hr />
      </div>
    </div>
  );
}
