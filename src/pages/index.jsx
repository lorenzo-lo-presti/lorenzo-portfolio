import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Lorenzo — Portfolio & Learning Log"
      description="Portfolio, Learning Log e Knowledge Base di Lorenzo"
    >
      <main className="bg-white dark:bg-gray-900">
        <section className="h-screen flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Lorenzo — Portfolio & Learning Log
            </h1>
            <Link
              to="/portfolio"
              className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              Vai al Portfolio
            </Link>
          </div>
        </section>
        <section className="py-12 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Link
              to="/portfolio"
              className="block p-6 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Portfolio
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Progetti e lavori recenti.
              </p>
            </Link>
            <Link
              to="/docs/learning-log"
              className="block p-6 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Learning Log
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Il mio percorso di apprendimento.
              </p>
            </Link>
            <Link
              to="/docs/knowledge"
              className="block p-6 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Knowledge Base
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Appunti e risorse organizzate.
              </p>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

