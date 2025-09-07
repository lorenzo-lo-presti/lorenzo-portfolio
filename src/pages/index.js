import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Lorenzo — Portfolio & Learning Log"
      description="Portfolio, Learning Log e Knowledge Base di Lorenzo"
    >
      <main className="container margin-vert--lg">
        <div className="text--center">
          <h1>Lorenzo — Portfolio & Learning Log</h1>
          <p>Benvenuto! Qui trovi il mio percorso di apprendimento, il portfolio dei progetti e una knowledge base strutturata.</p>
          <div style={{ marginTop: '2rem' }}>
            <Link className="button button--primary margin-right--md" to="/docs/learning-log">
              🙱 Learning Log
            </Link>
            <Link className="button button--secondary margin-right--md" to="/docs/knowledge/index">
              🔤 Knowledge Base
            </Link>
            <Link className="button button--outline" to="/docs/intro">
              💧 Portfolio
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
