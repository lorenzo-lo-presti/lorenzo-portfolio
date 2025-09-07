import React from 'react';
import Layout from '@theme/Layout';

export default function ContattiPage() {
  return (
    <Layout title="Contatti" description="Come mettersi in contatto">
      <main className="container margin-vert--lg">
        <h1>Contatti</h1>
        <form className="max-w-lg" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">Nome</label>
            <input type="text" id="name" name="name" required className="w-full border rounded p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" name="_replyto" required className="w-full border rounded p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1">Messaggio</label>
            <textarea id="message" name="message" rows="5" required className="w-full border rounded p-2" />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Invia</button>
        </form>
        <p className="mt-6">
          Oppure contattami via email: <a href="mailto:lorenzo@example.com">lorenzo@example.com</a>
        </p>
      </main>
    </Layout>
  );
}
