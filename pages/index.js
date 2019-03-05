
import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

/*
const PostLink = (props) => (
  <li>
    <Link as={`/post/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)
*/

const Index = (props) => (
  <div>
    <Layout>
      <h2>Batman TV Shows</h2>
      <ul>
        {props.shows.map(({show}) => (
          <li key={show.id}>
            <Link as={`/post/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
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