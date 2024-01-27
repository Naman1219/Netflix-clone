import Header from './components/header/page';
import Banner from './components/banner/page';
import requests from '@/utils/requests';
import { Movie } from '@/typings';
import { NextPage } from 'next';
import Row from './components/row/page';

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
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
        <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List Component */}
          {/* {list.length > 0 && <Row title="My List" movies={list} />} */}
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {/* Modal */}
    </div>
  );
}

export default Home;