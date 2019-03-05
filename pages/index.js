
import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const PostLink = ({ show }) => (
  <li>
    <Link as={`/post/${show.id}`} href={`/post?id=${show.id}`}>
      <a>{show.name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

const Index = (props) => (
  <div>
    <Layout>
      <h2>Batman TV Shows</h2>
      <ul>
        {props.shows.map(({show}) => (
          <PostLink key={show.id} show={show} />
        ))}
      </ul>
      <style jsx>{`
      h2, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }
    `}</style>
    </Layout>
  </div>
)

Index.getInitialProps = async function(){
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`)
  return { shows: data }
}


export default Index