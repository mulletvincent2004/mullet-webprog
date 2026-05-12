import Button from '../components/Button';
import heroImage from '../assets/styles/biglogo.jpg';
import cardone from '../assets/styles/p1.jpg';
import cardtwo from '../assets/styles/chocomousse.jpg';
import cardthree from '../assets/styles/OG.jpg';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* Hero Section */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Hero Section
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Great day! Welcome to Tealive Philippines.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Tealive is your go-to destination for refreshing tea-based drinks, crafted with bold flavors and a modern twist with matching of our delicous tostea. We’re committed to bringing joy, energy, and connection through every sip.
             </p>
            <div className="mt-6">
              <Button to="/about" variant="primary">
                Learn More
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-white overflow-hidden flex items-center justify-center p-8 max-h-[400px]">
  <img 
    src={heroImage} 
    alt="Tealive Logo" 
    className="max-w-full max-h-full object-contain" 
  />
</div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Brukada's
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Quick overview blocks</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">1200</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Branches
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Drinks
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">44</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Tosteas
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">4</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              LTO's
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Feature Cards
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Tealive - top South East Asian Milk tea</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Feature Card One */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
<div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 border-2 border-zinc-900 overflow-hidden">
    <img 
      src={cardone} 
      alt="ETON CENTRIS" 
      className="w-full h-full object-cover" 
    />
  </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Visit us at your nearby Tealive Branches</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Pick from a wide range of drinks with flexible packages to fit any celebration or budget..
            </p>
            <Button className="mt-4" variant="primary">View More</Button>
          </article>

          {/* Feature Card Two */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
<div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 border-2 border-zinc-900 overflow-hidden">
    <img 
      src={cardtwo} 
      alt="New! OG Choco Mousse!💜" 
      className="w-full h-full object-cover" 
    />
  </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">LTO's</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Your Gang-stir unlocked a new flavor layer to upgrade your chocolate— richer cocoa, silky mousse, and a more indulgent sip.
            </p>
            <Button className="mt-4" variant="primary">View More</Button>
          </article>

          {/* Feature Card Three */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 border-2 border-zinc-900 overflow-hidden">
    <img 
      src={cardthree} 
      alt="✨ OG, but make it upgraded ✨" 
      className="w-full h-full object-cover" 
    />
  </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">Shipping Company Office</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              🧋 Stronger tea
              🥛 Creamier taste
              🟤 Chewiest pearls

              Meet the levelled-up OG Bang Bang Mousse, now on our New Menu for a limited time only—with 3 delicious ways to enjoy.

            </p>
            <Button className="mt-4" variant="primary">View More</Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;