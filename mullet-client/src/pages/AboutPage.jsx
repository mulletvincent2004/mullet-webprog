import Button from '../components/Button';
import about1 from '../assets/styles/maamtin.jpg';
import about2 from '../assets/styles/bisente.jpg';
import about3 from '../assets/styles/za.jpg';
import about4 from '../assets/styles/melvs.jpg';
import about5 from '../assets/styles/famdaw.jpg';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* Hero Section */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-zinc-900 bg-white overflow-hidden flex items-center justify-center max-h-[500px]">
  <img 
    src={about1} 
    alt="TEALIVE PHILIPPINES" 
    className="w-full h-full object-cover object-top" 
  />
</div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About Us
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              TEALIVE PHILIPPINES
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Before winning over the hearts of Filipinos, Tealive began its breakthrough journey as a humble tea brand from Malaysia and it’s become the Southeast Asia’s lifestyle tea brand, with 11 countries and over 1000 outlets worldwide.

Tealive Philippines was established in 2022 with around 70 stores and plans to reach 100 stores soon. Our bestsellers are Signature Milk Tea, Aren Caramel Pearl Milk Tea, Brown Sugar Pearl Milk Tea, and Winter Melon Pearl Milk Tea, each crafted to perfection. Tealive improved its menu by collaborating with popular brands to create exciting smoothies and frappes.

A key attraction of Tealive is its commitment to catering to different tastes and cultures. In the Philippines, the brand has won over locals with flavors that suit the Filipino palate, partnering with renowned brands like Kitkat and Century Tuna, and offering culturally themed food and drinks.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/articles">Open Articles</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Profile Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Quick summary blocks</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">05</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Years
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">61</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
             Branch
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">61</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Menu
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Focus Areas
            </p>
          </div>
        </div>
      </section>

      {/* Section Flow & Visual Grid */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Section Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Contact Us</h2>
            
            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Tealive Philippines</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                 No. 1 South East Asian Milk tea
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Experience Block</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Visit us at your nearby Tealive Branches
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Contact Info</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Tealive Philippines - FACEBOOK & INSTAGRAM 
               </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Visual Grid
            </p>
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
  <div className="mt-5 grid gap-4 sm:grid-cols-2">
    {/* Array of your imported about images */}
    {[about2, about3, about4, about5].map((img, index) => (
      <div 
        key={index} 
        className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-white border-2 border-zinc-900 overflow-hidden"
      >
        <img 
          src={img} 
          alt={`Gallery item ${index + 1}`} 
          className="w-full h-full object-cover" 
        />
      </div>
    ))}
  </div>
</div>
            <Button className="mt-5">View Section</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;