import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

export default function Missions() {
  return (
    <div className="boxMissions" data-testid="missions">
      <Title headline="Missões" />
      <div className="missions">
        {missions
          .map(({ name, year, country, destination }) => (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))}
      </div>
    </div>
  );
}
