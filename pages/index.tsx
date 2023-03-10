import axios from "axios";
import Head from "next/head";
import { BASE_URL } from "../config";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";
import { GenreType, MovieType } from "../types";

type HomeProps = {
  results: MovieType[];
};

const Home = ({ results }: HomeProps) => {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
};

export default Home;

export const getServerSideProps = async (context: {
  query: { genre: GenreType };
}) => {
  const genre = context.query.genre;

  const request = await axios
    .get(`${BASE_URL}${requests[genre]?.url || requests.fetchTrending.url}`)
    .then((res) => res.data);

  return {
    props: {
      results: request.results,
    },
  };
};
