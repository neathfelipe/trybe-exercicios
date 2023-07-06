type MissionCardProps = {
  name: string,
  year: string,
  country: string,
  destination: string,
};

function MissionCard({ name, year, country, destination }: MissionCardProps) {
  return (
    <div className="box-mission" data-testid="mission-card">
      <div className="name-mission">
        <p data-testid="mission-name">{name}</p>
      </div>
      <hr className="line" />
      <div className="date-name">
        <div className="date-mission">
          <p data-testid="mission-year">
            <img src="/images/date.svg" alt="data" />
            {year}
          </p>
          <p data-testid="mission-country">
            <img src="/images/location.svg" alt="location" />
            {country === 'Estados Unidos' ? 'USA' : country}
          </p>
        </div>
        <div className="name-planet">
          <p data-testid="mission-destination">
            <img src="/images/planet.svg" alt="planet" />
            {destination}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionCard;
