import { Button } from "@/components/ui/button";
import { Mail, Music, Instagram, Smartphone } from "lucide-react";
import { useState } from "react";

/**
 * DESIGN PHILOSOPHY: Brutalist Minimalism - Pure Black & White
 * - Pure black background with white text (Newcastle tribute)
 * - Strict black and white only - no color accents
 * - Asymmetric layouts with generous whitespace
 * - Bold, commanding typography (Bebas Neue for display)
 * - Fast, snappy animations
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setMessage("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur z-50 border-b border-gray-800">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img
              src="/manus-storage/photo_AQADxA9rG5d8AVB9_2337c1a6.jpg"
              alt="AH Logo"
              className="w-12 h-12"
            />
          </div>
          <div className="flex gap-6 text-sm font-mono">
            <a href="#music" className="hover:text-gray-300 transition">
              MUSIC
            </a>
            <a href="#about" className="hover:text-gray-300 transition">
              ABOUT
            </a>
            <a href="#contact" className="hover:text-gray-300 transition">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="space-y-6">
              <div>
                <h1 className="text-6xl md:text-7xl font-black leading-tight mb-2">
                  ADAM
                </h1>
                <h1 className="text-6xl md:text-7xl font-black leading-tight">
                  HOLLINSHEAD
                </h1>
              </div>
              <p className="text-xl md:text-2xl font-light tracking-wide text-gray-300">
                Indie Pop from Newcastle
              </p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md">
                17-year-old singer-songwriter crafting personal stories through indie pop. 
                On a mission to represent the UK at Eurovision, headline stages, and sign to a label.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://open.spotify.com/artist/2cxqpgaEnJPdHuT756M49i?si=pseZ0rVgT-qJx6cSnuF4kw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-bold tracking-widest hover:bg-gray-200 transition border-2 border-white"
                >
                  LISTEN NOW
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border-2 border-white text-white font-bold tracking-widest hover:bg-white hover:text-black transition"
                >
                  BOOK
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-96 md:h-full">
              <img
                src="/manus-storage/photo_headshot_990fb5f4.jpg"
                alt="Adam Hollinshead"
                className="w-full h-full object-cover border-2 border-white"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-white bg-black/50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>

      {/* Music Section */}
      <section id="music" className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12">
            MUSIC
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Spotify Embed */}
            <div className="flex justify-center">
              <iframe
                style={{ borderRadius: "0px" }}
                src="https://open.spotify.com/embed/artist/2cxqpgaEnJPdHuT756M49i?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="border-2 border-white"
              ></iframe>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Stream Adam's latest tracks across all platforms. Personal, raw, and unapologetically indie.
              </p>
              <div className="space-y-3 font-mono text-sm">
                <p className="text-gray-400">
                  <span className="text-white">→</span> Original compositions
                </p>
                <p className="text-gray-400">
                  <span className="text-white">→</span> Produced & recorded in Newcastle
                </p>
                <p className="text-gray-400">
                  <span className="text-white">→</span> Influences: Oasis, Coldplay, Sam Fender
                </p>
              </div>
              <a
                href="https://open.spotify.com/artist/2cxqpgaEnJPdHuT756M49i?si=pseZ0rVgT-qJx6cSnuF4kw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white text-black font-bold tracking-widest hover:bg-gray-200 transition border-2 border-white"
              >
                OPEN ON SPOTIFY
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12">
            ABOUT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-gray-900/50 border border-gray-700 p-8 hover:border-white transition">
              <h3 className="text-2xl font-black mb-4">THE ARTIST</h3>
              <p className="text-gray-300 leading-relaxed">
                Adam is a 17-year-old indie pop singer-songwriter from Newcastle, UK. 
                He writes deeply personal stories that resonate with his generation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900/50 border border-gray-700 p-8 hover:border-white transition">
              <h3 className="text-2xl font-black mb-4">THE VISION</h3>
              <p className="text-gray-300 leading-relaxed">
                Headline major venues across the UK and Europe. 
                Represent the United Kingdom at Eurovision next year.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900/50 border border-gray-700 p-8 hover:border-white transition">
              <h3 className="text-2xl font-black mb-4">THE GOAL</h3>
              <p className="text-gray-300 leading-relaxed">
                Sign to a major record label and establish himself as a leading voice 
                in contemporary indie pop.
              </p>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/manus-storage/photo_studio_bw_e1a78a5a.jpg"
              alt="Adam in studio"
              className="w-full h-80 object-cover border-2 border-gray-700 hover:border-white transition"
            />
            <img
              src="/manus-storage/photo_guitar_bf28dc1a.jpg"
              alt="Adam with guitar"
              className="w-full h-80 object-cover border-2 border-gray-700 hover:border-white transition"
            />
            <img
              src="/manus-storage/photo_seaside_d92d1c0a.jpg"
              alt="Adam by the sea"
              className="w-full h-80 object-cover border-2 border-gray-700 hover:border-white transition md:col-span-2"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>

      {/* Social Links Section */}
      <section className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12">
            CONNECT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/adamontheradio_?igsh=MWc5bHM2bTV2NDVlYg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border-2 border-gray-700 hover:border-white transition bg-gray-900/30 hover:bg-gray-900/60"
            >
              <Instagram className="w-8 h-8 mb-4 text-white group-hover:text-gray-300 transition" />
              <h3 className="text-xl font-black mb-2">INSTAGRAM</h3>
              <p className="text-sm text-gray-400">@adamontheradio_</p>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@djadamh?_r=1&_t=ZN-96FKjXEl8Dq"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border-2 border-gray-700 hover:border-white transition bg-gray-900/30 hover:bg-gray-900/60"
            >
              <Smartphone className="w-8 h-8 mb-4 text-white group-hover:text-gray-300 transition" />
              <h3 className="text-xl font-black mb-2">TIKTOK</h3>
              <p className="text-sm text-gray-400">@djadamh</p>
            </a>

            {/* Spotify */}
            <a
              href="https://open.spotify.com/artist/2cxqpgaEnJPdHuT756M49i?si=pseZ0rVgT-qJx6cSnuF4kw"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border-2 border-gray-700 hover:border-white transition bg-gray-900/30 hover:bg-gray-900/60"
            >
              <Music className="w-8 h-8 mb-4 text-white group-hover:text-gray-300 transition" />
              <h3 className="text-xl font-black mb-2">SPOTIFY</h3>
              <p className="text-sm text-gray-400">Listen & Follow</p>
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12">
            BOOKING
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Interested in booking Adam for events, festivals, or collaborations? 
            Get in touch below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold tracking-widest mb-2">
                YOUR EMAIL
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-gray-900 border-2 border-gray-700 text-white px-4 py-3 focus:border-white focus:outline-none transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold tracking-widest mb-2">
                MESSAGE
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="w-full bg-gray-900 border-2 border-gray-700 text-white px-4 py-3 focus:border-white focus:outline-none transition"
                placeholder="Tell us about your event or opportunity..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-white text-black font-bold tracking-widest hover:bg-gray-200 transition border-2 border-white"
            >
              SEND INQUIRY
            </button>

            {submitted && (
              <div className="p-4 bg-gray-900 border border-white text-white text-center">
                Thanks for reaching out! We'll be in touch soon.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Adam Hollinshead. All rights reserved.</p>
          <p className="text-gray-400 font-mono">Newcastle, UK</p>
        </div>
      </footer>
    </div>
  );
}
