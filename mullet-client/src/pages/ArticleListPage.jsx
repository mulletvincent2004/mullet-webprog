import Button from '../components/Button';
import ArticleList from '../components/ArticleList';
import articles from '../assets/styles/article-content.js';
 
const ArticleListPage = () => {
  return (
<div className="flex w-full flex-col gap-6">
<section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
<p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Articles
</p>
 
        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          What is our story 
</h1>
 
        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
         Before winning over the hearts of Filipinos, Tealive began its breakthrough journey as a humble tea brand from Malaysia and it’s become the Southeast Asia’s lifestyle tea brand, with 11 countries and over 1000 outlets worldwide.

Tealive Philippines was established in 2022 with around 70 stores and plans to reach 100 stores soon. Our bestsellers are Signature Milk Tea, Aren Caramel Pearl Milk Tea, Brown Sugar Pearl Milk Tea, and Winter Melon Pearl Milk Tea, each crafted to perfection. Tealive improved its menu by collaborating with popular brands to create exciting smoothies and frappes.

A key attraction of Tealive is its commitment to catering to different tastes and cultures. In the Philippines, the brand has won over locals with flavors that suit the Filipino palate, partnering with renowned brands like Kitkat and Century Tuna, and offering culturally themed food and drinks.
</p>
 
        <div className="mt-6">
<Button to="/">Back Home</Button>
</div>
</section>
 
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
<div className="mb-6">
<p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Featured Articles
</p>
 
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Article card grid
</h2>
</div>
 
        <ArticleList articles={articles} />
</section>
 
    </div>
  );
};
 
export default ArticleListPage;