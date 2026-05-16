import { Outlet } from 'react-router-dom';
import mangoImg from '../assets/styles/Mango.jpg';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        {/* Left decorative panel */}
        <div className="hidden lg:block relative overflow-hidden">
          <img
            src={mangoImg}
            alt="Tealive Mango Summer Season"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Right: auth form */}
        <main className="flex items-center bg-zinc-50 px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;