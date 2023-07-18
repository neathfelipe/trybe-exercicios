import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './profile.css';
import { User, TweetType } from '../../utils/types';
import { fetchData } from '../../utils/fetch';
import Tweet from '../../components/tweet';

function Profile() {
  const [tweets, setTweets] = useState<TweetType[]>([]);
  const [profiles, setProfiles] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const { username } = useParams();

  useEffect(() => {
    const getData = async () => {
      const urlData = 'https://public-apis-473v4ntrr-felipemuller20.vercel.app/api/tweets';
      const data = await fetchData(urlData);
      setTweets(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const urlData = 'https://public-apis-473v4ntrr-felipemuller20.vercel.app/api/twitter-users';
      const data = await fetchData(urlData);
      setProfiles(data);
      setLoading(false);
    };
    getData();
  });

  const perfil = profiles.find((user) => user.username === username);
  const perfilTweets = tweets
    .filter((tweet: TweetType) => (perfil
      ? tweet.owner.username === perfil.username : ''));

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {!loading && perfil && (
        <div className="profile-page">
          <div className="profile-container">
            <img
              className="cover-profile"
              src={ perfil.backgroundPicture }
              alt="fundo de Perfil"
            />
            <img
              className="avatar-profile"
              src={ perfil.profilePicture }
              alt="imagem de Perfil"
            />
            <div className="bio-container">
              <h2>{perfil.name}</h2>
              <span className="span-bio">
                {perfil.username}
              </span>
              <p>{perfil.bio}</p>
            </div>
          </div>
          <div className="tweet-list">
            {perfilTweets.map(({ id,
              owner, commentsCount, retweetsCount, likesCount, tweet }:TweetType) => (
                <Tweet
                  key={ id }
                  image={ owner.profilePicture }
                  username={ owner.username }
                  name={ owner.name }
                  tweet={ tweet }
                  comments={ commentsCount }
                  retweets={ retweetsCount }
                  likes={ likesCount }
                />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
