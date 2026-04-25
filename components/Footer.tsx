export default function Footer() {
  return (
    <footer className="bg-ink py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-heading text-xl font-bold text-paper">
          Banaawat<span className="text-brand">.</span>
        </span>
        <p className="text-paper/40 text-sm">© 2025 Banaawat. Built to book.</p>
        <a href="#" className="text-paper/40 hover:text-paper/80 text-sm transition-colors">LinkedIn</a>
      </div>
    </footer>
  )
}
