export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        <h1 className="font style-cursieve text-xl">Bhakti Shinde</h1>

        <div className="hidden md:flex gap-8">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#certificates">Certificates</a>
          <a href="#projects">Projects</a>
          
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}