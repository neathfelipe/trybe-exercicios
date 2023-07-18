import { useEffect, useState } from 'react';
import Tweet from '../../components/tweet';
import { fetchData } from '../../utils/fetch';
import { TweetType } from '../../utils/types';
import './home.css';

function Home() {
  const [tweets, setTweets] = useState<TweetType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const urlData = 'https://public-apis-473v4ntrr-felipemuller20.vercel.app/api/tweets';
      const data = await fetchData(urlData);
      setTweets(data);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="home-page">
      {loading && <h2>Loading...</h2>}
      {!loading && tweets.map(({ id,
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
  );
}

export default Home;
