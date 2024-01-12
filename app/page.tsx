import Header from './components/header/page';
import Banner from './components/banner/page';
import requests from '@/utils/requests';
import { Movie } from '@/typings';
import { NextPage } from 'next';

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

export const getMovies = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals,{cache:"no-store"}).then((res) => res.json()),
    fetch(requests.fetchTrending,{cache:"no-store"}).then((res) => res.json()),
    fetch(requests.fetchTopRated,{cache:"no-store"}).then((res) => res.json()),
    fetch(requests.fetchActionMovies,{cache:"no-store"}).then((res) => res.json()),
    fetch(requests.fetchComedyMovies,{cache:"no-store"}).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies,{cache:"no-store"}).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies,{cache:"no-store"}).then((res) => res.json()),
    fetch(requests.fetchDocumentaries,{cache:"no-store"}).then((res) => res.json()),
  ])
  return{
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results
    }
  };
};

  const Home: NextPage<Props> = async() => {
    const movieData:Props = await getMovies().then((result) =>result.props);
    const {
      netflixOriginals,
      trendingNow,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries
    } = movieData;
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10
    to-[#010511] lg:h-[140vh]">
      <Header />
      <main>
        <Banner netflixOriginals={netflixOriginals} />
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
      {/* Modal */}
    </div>
  );
}

export default Home;