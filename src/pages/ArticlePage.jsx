import Button from '../components/Button';
import about2 from '../assets/styles/Mango.jpg';
import about3 from '../assets/styles/chocomousse.jpg';
import about4 from '../assets/styles/Thumbler.jpg';
import cardthree from '../assets/styles/Fish.jpg';

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Articles
        </p>
        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          TEALIVE STORIES
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
          No. 1 South East Asian Milk tea
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
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">New Drinks and LTO's</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {/* Article 01 */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img 
                  src={about2} 
                  alt="Mango" 
                  className="w-full h-full object-cover object-top" 
                />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 01
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">MANGO mvp</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
                Mango is the MVP of Summer 🥭​

Because this season’s star isn’t on the court—it’s in your hand.​
Bright, refreshing, and made to keep you cool, this mango moment is one you don’t want to miss.​

Pick your MVP:​
🥭 Mango Fruit Tea with QQ​
🥭 Mango Lotus Biscoff Smoothie​
🥭 Mango Strawberry Smoothie with Coconut Jelly​
🥭 Mango Burst Smoothie​
            </p>
            <Button className="mt-4">Read More</Button>
          </article>

          {/* Article 02 */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img 
                  src={about3} 
                  alt="chocomousse" 
                  className="w-full h-full object-cover object-top" 
                />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 02
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">Choco Mousse</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Your Gang-stir unlocked a new flavor layer to upgrade your chocolate— richer cocoa, silky mousse, and a more indulgent sip.
            </p>
            <Button className="mt-4">Read More</Button>
          </article>

          {/* Article 03 */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img 
                  src={about4} 
                  alt="Thumbler" 
                  className="w-full h-full object-cover object-top" 
                />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 03
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">Thumbler</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              NSustainability never looked this good. 💜😍
Reusable, stylish, and dropping on APRIL 8.

Limited stocks only. Mark your calendars.

#Tealiveph #BrewingPositivity
            </p>
            <Button className="mt-4">Read More</Button>
          </article>

          {/* Article 04 */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
                <img 
                  src={cardthree} 
                  alt="Fish" 
                  className="w-full h-full object-cover object-top" 
                />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 04
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">Fish Katsu</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              ✨ NEW DROP AT TEALIVE! ✨​
Introducing the Golden Fish Katsu Toastea 💛​

Crispy real fish katsu, tucked in buttery, soft, toasted bread, finished with Asian-inspired flavors — made to pair perfectly with your favorite Tealive drink.​

            </p>
            <Button className="mt-4">Read More</Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;