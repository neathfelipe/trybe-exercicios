type CityInfoProps = {
  cityInfo: {
    city: string;
    country: string;
    imageUrl: string;
    visited?: boolean;
  };
};

export default function Card({ cityInfo }: CityInfoProps) {
  const { city, country, imageUrl, visited } = cityInfo;
  return (
    <div className="card">
      <p>{ city }</p>
      <p>{ country }</p>
      <img src={ imageUrl } alt={ city } />
      {visited ? <p> Já fui! </p> : <p>Não fui.</p>}
    </div>
  );
}
