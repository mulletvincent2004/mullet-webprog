import Button from '../components/Button';
import about2 from '../assets/styles/Mango.jpg';
import about3 from '../assets/styles/chocomousse.jpg';
import about4 from '../assets/styles/Thumbler.jpg';
import cardthree from '../assets/styles/Fish.jpg';

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* Hero */}
      <section className="border-y-2 border-zinc-900 bg-purple-700 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-purple-300 bg-purple-600 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-purple-100 mb-4">
            Tealive PH
          </span>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            TEALIVE STORIES
          </h1>
          <p className="mt-4 text-sm leading-7 text-purple-200 sm:text-base">
            No. 1 South East Asian Milk tea — discover our latest drops, LTOs, and Tealive moments.
          </p>
          <div className="mt-6">
            <Button to="/" variant="secondary">Back Home</Button>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="border-y-2 border-zinc-900 bg-purple-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <span className="inline-block rounded-full border border-purple-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-purple-600 mb-3">
            Featured Articles
          </span>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">New Drinks and LTO's</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {/* Article 01 */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden border-2 border-zinc-900">
              <img src={about2} alt="Mango" className="w-full h-full object-cover" />
            </div>
            <span className="mt-4 inline-block text-[11px] font-semibold uppercase tracking-[0.24em] text-purple-500">
              Article 01
            </span>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">MANGO MVP</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Mango is the MVP of Summer 🥭 Bright, refreshing, and made to keep you cool. Pick your MVP: Mango Fruit Tea with QQ, Mango Lotus Biscoff Smoothie, Mango Strawberry Smoothie with Coconut Jelly, and Mango Burst Smoothie.
            </p>
            <Button className="mt-4" variant="primary">Read More</Button>
          </article>

          {/* Article 02 */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden border-2 border-zinc-900">
              <img src={about3} alt="Choco Mousse" className="w-full h-full object-cover" />
            </div>
            <span className="mt-4 inline-block text-[11px] font-semibold uppercase tracking-[0.24em] text-purple-500">
              Article 02
            </span>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">Choco Mousse</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Your Gang-stir unlocked a new flavor layer to upgrade your chocolate — richer cocoa, silky mousse, and a more indulgent sip.
            </p>
            <Button className="mt-4" variant="primary">Read More</Button>
          </article>

          {/* Article 03 */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden border-2 border-zinc-900">
              <img src={about4} alt="Thumbler" className="w-full h-full object-cover" />
            </div>
            <span className="mt-4 inline-block text-[11px] font-semibold uppercase tracking-[0.24em] text-purple-500">
              Article 03
            </span>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">Thumbler</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Sustainability never looked this good. 💜 Reusable, stylish, and limited stocks only. Mark your calendars. #Tealiveph #BrewingPositivity
            </p>
            <Button className="mt-4" variant="primary">Read More</Button>
          </article>

          {/* Article 04 */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden border-2 border-zinc-900">
              <img src={cardthree} alt="Fish Katsu" className="w-full h-full object-cover" />
            </div>
            <span className="mt-4 inline-block text-[11px] font-semibold uppercase tracking-[0.24em] text-purple-500">
              Article 04
            </span>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">Fish Katsu</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              NEW DROP! Introducing the Golden Fish Katsu Toastea 💛 Crispy real fish katsu, tucked in buttery toasted bread with Asian-inspired flavors — made to pair with your favorite Tealive drink.
            </p>
            <Button className="mt-4" variant="primary">Read More</Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;