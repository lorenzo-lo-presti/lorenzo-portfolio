import React from 'react';
import Layout from '@theme/Layout';

const projects = [
  {
    title: 'Project One',
    description: 'Descrizione breve del primo progetto.',
    link: 'https://example.com/project-one',
    image: 'https://via.placeholder.com/400x200',
  },
  {
    title: 'Project Two',
    description: 'Descrizione breve del secondo progetto.',
    link: 'https://example.com/project-two',
    image: 'https://via.placeholder.com/400x200',
  },
  {
    title: 'Project Three',
    description: 'Descrizione breve del terzo progetto.',
    link: 'https://example.com/project-three',
    image: 'https://via.placeholder.com/400x200',
  },
];

export default function Portfolio() {
  return (
    <Layout title="Portfolio" description="Progetti realizzati">
      <main className="container margin-vert--lg">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg p-4 shadow--md">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
              )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--primary button--sm mt-2"
              >
                Visita
              </a>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

