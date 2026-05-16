import Button from '../components/Button';
import ArticleList from '../components/ArticleList';
import articles from '../assets/styles/article-content.js';
import marketing from '../assets/styles/marketing.jpg';

const ArticleListPage = () => {
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
        <ArticleList articles={articles} />
      </section>
    </div>
  );
};

export default ArticleListPage;