import { useState, useEffect } from 'react';
import Button from '../components/Button';
import ArticleList from '../components/ArticleList';
import marketing from '../assets/styles/marketing.jpg';
import { fetchArticles } from '../services/ArticleService';
import biglogo from '../assets/styles/biglogo.jpg';
import logo from '../assets/styles/a1.jpg';
import rob from '../assets/styles/rob.jpg';
import mango from '../assets/styles/Mango.jpg';
import thumbler from '../assets/styles/Thumbler.jpg';
import OG from '../assets/styles/chocomousse.jpg';
import fish from '../assets/styles/Fish.jpg';

const imageMap = {
  'team-eton-staff': logo,
  'meet-our-marketing-team': marketing,
  'smile-every-sip': rob,
  'tealive-company-members': biglogo,
  'mango-mvp': mango,
  'tealive-thumbler': thumbler,
  'og-chocomousse': OG,
  'fish-katsu': fish,
};

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const { data } = await fetchArticles();
        const activeArticles = data.articles
          .filter((a) => a.isActive)
          .map((a) => ({
            name: a.slug,
            title: a.title,
            content: a.paragraphs,
            image: a.image
              ? `http://localhost:5000${a.image}`
              : imageMap[a.slug] || null,
            _id: a._id,
          }));
        setArticles(activeArticles);
      } catch (err) {
        setError('Failed to load articles.');
      } finally {
        setLoading(false);
      }
    };
    loadArticles();
  }, []);

  return (
    <div className="flex w-full flex-col gap-6">
      {/* Hero Section */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-full border border-purple-300 bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-purple-600 mb-4">
              Our Stories
            </span>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              What is our story
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Before winning over the hearts of Filipinos, Tealive began its breakthrough journey as a humble tea brand from Malaysia and it's become the Southeast Asia's lifestyle tea brand, with 11 countries and over 1000 outlets worldwide. Tealive Philippines was established in 2022 with around 70 stores and plans to reach 100 stores soon.
            </p>
            <div className="mt-6">
              <Button to="/" variant="primary">Back Home</Button>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 overflow-hidden max-h-[340px]">
            <img
              src={marketing}
              alt="Tealive Story"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="border-y-2 border-zinc-900 bg-purple-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <span className="inline-block rounded-full border border-purple-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-purple-600 mb-3">
            Featured Articles
          </span>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Article card grid</h2>
        </div>

        {loading && <p className="text-zinc-500">Loading articles...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && <ArticleList articles={articles} />}
      </section>
    </div>
  );
};

export default ArticleListPage;