import React from 'react';
import Link from '@docusaurus/Link';
import categories from '../data/knowledgeCategories.json';

export default function Knowledge() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Knowledge</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/docs/knowledge/${category}`}
            className="block p-6 border rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold capitalize">{category}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
