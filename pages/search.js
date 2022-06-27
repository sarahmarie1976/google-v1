import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import SearchHeaderOptions from '../components/SearchHeaderOptions';

export default function search() {
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>

      {/* Search Header */}
        <SearchHeader  />


      {/* Search Results */}

        <SearchHeaderOptions />


    </div>
  );
}
