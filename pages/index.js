
import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <div>
    <Layout>
      <h3>My Blog</h3>
      <ul>
        <PostLink title="Hello Next.js"/>
        <PostLink title="Learn Next.js is awesome"/>
        <PostLink title="Deploy apps with Zeit"/>
      </ul>
    </Layout>
  </div>
)

export default Index