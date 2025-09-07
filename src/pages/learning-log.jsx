import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function LearningLog() {
  const req = require.context('@site/blog', true, /\\.mdx?$/);
  const posts = req
    .keys()
    .map((key) => req(key).metadata)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Layout title="Learning Log" description="Elenco cronologico dei post del Learning Log">
      <main className="container margin-vert--lg">
        <h1>Learning Log</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.permalink} style={{ marginBottom: '1.5rem' }}>
              <div>
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                {" "}—{" "}
                <Link to={post.permalink}>{post.title}</Link>
              </div>
              {post.description && <p>{post.description}</p>}
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export default LearningLog;
