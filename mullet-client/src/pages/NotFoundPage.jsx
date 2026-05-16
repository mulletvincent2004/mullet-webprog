import Button from '../components/Button';

function NotFoundPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-purple-50 px-4 py-10 sm:px-6 lg:px-8">
      <section className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border-2 border-zinc-900 bg-white shadow-xl text-center px-8 py-16">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-3 bg-purple-700" />

        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-500 mb-4">
          Tealive Philippines
        </p>

        <h1 className="text-[120px] font-black leading-none tracking-tight text-purple-700 sm:text-[160px]">
          404
        </h1>

        <p className="text-2xl font-semibold text-zinc-900 sm:text-3xl -mt-2">
          Page Not Found
        </p>

        <p className="mt-4 text-sm leading-7 text-zinc-500 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or may have been moved. Let's get you back to sipping good tea. 🧋
        </p>

        <div className="mt-8 flex justify-center">
          <Button to="/" variant="primary">Back Home</Button>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 w-full h-3 bg-purple-700" />
      </section>
    </div>
  );
}

export default NotFoundPage;