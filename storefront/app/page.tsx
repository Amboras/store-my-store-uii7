'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, Truck, Shield, RotateCcw, Star, Zap, Heart, Gift } from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'
import { trackMetaEvent } from '@/lib/meta-pixel'
import { HERO_PLACEHOLDER, LIFESTYLE_PLACEHOLDER } from '@/lib/utils/placeholder-images'

const categoryCards = [
  { label: 'Action Toys', emoji: '🚀', color: 'bg-blue-100 border-blue-300 hover:bg-blue-200', href: '/products' },
  { label: 'Building Sets', emoji: '🧱', color: 'bg-yellow-100 border-yellow-300 hover:bg-yellow-200', href: '/products' },
  { label: 'Stuffed Animals', emoji: '🧸', color: 'bg-pink-100 border-pink-300 hover:bg-pink-200', href: '/products' },
  { label: 'Board Games', emoji: '🎲', color: 'bg-green-100 border-green-300 hover:bg-green-200', href: '/products' },
  { label: 'Art & Crafts', emoji: '🎨', color: 'bg-purple-100 border-purple-300 hover:bg-purple-200', href: '/products' },
  { label: 'Outdoor Play', emoji: '⚽', color: 'bg-orange-100 border-orange-300 hover:bg-orange-200', href: '/products' },
]

const features = [
  { icon: Truck, emoji: '🚚', title: 'Fast Delivery', desc: 'Free shipping over ₹999', color: 'bg-blue-50 border-blue-200', iconColor: 'text-blue-500' },
  { icon: Star, emoji: '⭐', title: 'Top Rated Toys', desc: 'Loved by kids & parents', color: 'bg-yellow-50 border-yellow-200', iconColor: 'text-yellow-500' },
  { icon: Shield, emoji: '🛡️', title: 'Safe & Certified', desc: 'BIS certified, child safe', color: 'bg-green-50 border-green-200', iconColor: 'text-green-500' },
  { icon: RotateCcw, emoji: '🔄', title: 'Easy Returns', desc: '30-day return policy', color: 'bg-pink-50 border-pink-200', iconColor: 'text-pink-500' },
]

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    setSubscribed(true)
    trackMetaEvent('Lead', { content_name: 'newsletter_signup', status: 'submitted' })
  }

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        {/* Colorful background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-yellow-200/50 blur-3xl" />
          <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-pink-200/50 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-blue-200/40 blur-3xl" />
        </div>

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-8 items-center py-12 lg:py-20">
          {/* Text */}
          <div className="space-y-6 animate-fade-in-up">
            {/* Fun badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 font-bold text-sm px-4 py-2 rounded-full shadow-md">
              <span className="animate-sparkle">✨</span>
              New Arrivals Just In!
              <span className="animate-sparkle">✨</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight">
              <span className="text-blue-500">Play</span>
              <span className="text-pink-500">, </span>
              <span className="text-yellow-500">Learn</span>
              <span className="text-pink-500">, </span>
              <span className="text-green-500">Grow!</span>
              <span className="block text-foreground text-4xl lg:text-5xl mt-2">🎉 The Fun Starts Here</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed font-medium">
              Discover amazing toys, games & activities that spark creativity and joy in every child — from toddlers to teens! 🌈
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/products"
                className="btn-bubble inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-base font-bold uppercase tracking-wide"
                prefetch={true}
              >
                <Gift className="h-5 w-5" />
                Shop Toys!
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/collections"
                className="btn-bubble inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 px-8 py-4 text-base font-bold uppercase tracking-wide"
                prefetch={true}
              >
                🎯 Browse All
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm font-bold ml-1 text-muted-foreground">4.9/5 (2k+ reviews)</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[3rem] overflow-hidden border-8 border-yellow-300 shadow-2xl animate-fade-in">
              <Image
                src={HERO_PLACEHOLDER}
                alt="Amazing Toys for Kids"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Floating badges on image */}
              <div className="absolute top-4 left-4 bg-red-500 text-white font-bold text-sm px-3 py-1.5 rounded-full shadow-lg animate-bounce-slow">
                🔥 HOT SALE
              </div>
              <div className="absolute bottom-4 right-4 bg-white text-foreground font-bold text-sm px-4 py-2 rounded-2xl shadow-xl border-2 border-yellow-300">
                🎁 Free Gift Wrapping!
              </div>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -top-6 -right-6 text-5xl animate-bounce-slow">🌟</div>
            <div className="absolute -bottom-4 -left-4 text-4xl animate-spin-slow">🎡</div>
            <div className="absolute top-1/3 -right-8 text-4xl animate-bounce-slow" style={{animationDelay: '0.5s'}}>🚀</div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY QUICK LINKS ===== */}
      <section className="py-10 bg-gradient-to-b from-background to-muted/40">
        <div className="container-custom">
          <h2 className="text-center text-3xl font-heading font-bold mb-8">
            🎮 Shop by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categoryCards.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className={`toy-card border-4 ${cat.color} p-4 flex flex-col items-center gap-3 text-center group`}
              >
                <span className="text-4xl group-hover:scale-125 transition-transform duration-200">{cat.emoji}</span>
                <span className="text-sm font-bold text-foreground">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COLLECTIONS ===== */}
      {isLoading ? (
        <section className="py-section">
          <div className="container-custom">
            <div className="animate-pulse space-y-4 text-center">
              <div className="h-4 w-32 bg-yellow-200 rounded-full mx-auto" />
              <div className="h-10 w-72 bg-pink-100 rounded-full mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] bg-muted rounded-3xl animate-pulse" />
              ))}
            </div>
          </div>
        </section>
      ) : collections && collections.length > 0 ? (
        <>
          {collections.map((collection: { id: string; handle: string; title: string; metadata?: Record<string, unknown> }, index: number) => (
            <CollectionSection
              key={collection.id}
              collection={collection}
              alternate={index % 2 === 1}
            />
          ))}
        </>
      ) : null}

      {/* ===== WHY KIDS LOVE US ===== */}
      <section className="py-section bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 relative overflow-hidden">
        {/* Decorative emojis background */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-10 text-6xl flex flex-wrap gap-16 p-8 overflow-hidden">
          {['🎈','🧸','🚂','🎨','⭐','🎪','🌈','🎯','🪀','🎠','🎡','🏆','🎁','🦄','🐣','🌟','🎭','🛸'].map((e, i) => (
            <span key={i}>{e}</span>
          ))}
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 font-bold text-sm px-4 py-2 rounded-full mb-4">
              <Heart className="h-4 w-4 fill-purple-500 text-purple-500" /> Why Parents Love Us
            </div>
            <h2 className="text-h2 font-heading font-bold">
              🌈 The ToyLand Promise
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => (
              <div key={feat.title} className={`${feat.color} border-2 rounded-3xl p-6 text-center hover:scale-105 transition-transform duration-200 shadow-sm`}>
                <div className="text-4xl mb-3">{feat.emoji}</div>
                <h3 className="font-heading font-bold text-lg mb-1">{feat.title}</h3>
                <p className="text-sm text-muted-foreground font-medium">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRAND STORY ===== */}
      <section className="py-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-yellow-100 to-orange-100 rounded-[3rem] overflow-hidden border-8 border-orange-200 relative">
                <Image
                  src={LIFESTYLE_PLACEHOLDER}
                  alt="Kids playing with toys"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-yellow-900 font-bold text-base px-6 py-3 rounded-2xl shadow-xl border-2 border-yellow-500 rotate-3">
                🏆 #1 Kids Toy Store in India!
              </div>
            </div>
            <div className="space-y-6 lg:max-w-md">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 font-bold text-sm px-4 py-2 rounded-full">
                <Zap className="h-4 w-4" /> Our Story
              </div>
              <h2 className="text-h2 font-heading font-bold">
                Bringing <span className="text-pink-500">Joy</span> to Every <span className="text-blue-500">Child</span> 🧡
              </h2>
              <p className="text-muted-foreground leading-relaxed font-medium">
                At ToyLand, we believe every child deserves the best playtime experience. Our handpicked collection of toys, games, and activities are designed to nurture creativity, learning, and pure, unbridled fun!
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium">
                Every toy is safety-tested and BIS certified — because your child&apos;s safety is our #1 priority. 💖
              </p>
              <Link
                href="/about"
                className="btn-bubble inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 text-sm font-bold uppercase tracking-wide"
                prefetch={true}
              >
                Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="py-section">
        <div className="container-custom max-w-2xl">
          <div className="bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-[3rem] p-10 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 space-y-4">
              <div className="text-5xl">🎁</div>
              <h2 className="text-3xl font-heading font-bold">Get 10% Off Your First Order!</h2>
              <p className="text-white/90 font-medium text-lg">
                Join our ToyLand family — be the first to hear about new arrivals, exclusive deals & special offers just for kids!
              </p>
              {subscribed ? (
                <div className="bg-white/20 rounded-2xl px-8 py-4 font-bold text-xl">
                  🎉 Yay! You&apos;re in! Check your inbox for your discount!
                </div>
              ) : (
                <form className="flex flex-col sm:flex-row gap-3 mt-6" onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address 📧"
                    className="flex-1 rounded-full px-6 py-4 text-foreground font-medium text-sm focus:outline-none focus:ring-4 focus:ring-yellow-400 bg-white"
                  />
                  <button
                    type="submit"
                    className="btn-bubble bg-yellow-400 hover:bg-yellow-300 text-yellow-900 px-8 py-4 text-sm font-bold uppercase tracking-wide whitespace-nowrap"
                  >
                    🚀 Subscribe!
                  </button>
                </form>
              )}
              <p className="text-white/70 text-xs">No spam, ever! Unsubscribe anytime. 🔒</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
