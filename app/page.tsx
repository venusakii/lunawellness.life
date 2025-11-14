import { Sparkles, Heart, Brain, Leaf, Calendar, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import Link from 'next/link'

export default function LunaWellnessPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-sage/10">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-sage" />
            <span className="font-serif text-2xl text-sage">Luna Wellness</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-warmGray hover:text-sage transition-colors">Services</Link>
            <Link href="#about" className="text-warmGray hover:text-sage transition-colors">About</Link>
            <Link href="#contact" className="text-warmGray hover:text-sage transition-colors">Contact</Link>
            <Button className="bg-terracotta hover:bg-terracotta/90 text-cream">Book Now</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-sage leading-tight text-balance">
                Find harmony in every moment of life
              </h1>
              <p className="text-xl text-warmGray leading-relaxed text-pretty">
                Personalized wellness programs for your physical and mental wellbeing. Begin your journey to holistic health today.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-terracotta hover:bg-terracotta/90 text-cream">
                  Start Your Journey
                </Button>
                <Button size="lg" variant="outline" className="border-sage text-sage hover:bg-sage/5">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/peaceful-meditation-woman-in-natural-light.jpg"
                alt="Peaceful meditation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-sage mb-4">Our Practices</h2>
            <p className="text-lg text-warmGray max-w-2xl mx-auto text-pretty">
              Individual approach to every client, based on holistic health philosophy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-cream border-none hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Heart className="h-12 w-12 text-terracotta" />
              </div>
              <h3 className="font-serif text-2xl text-sage mb-3">Meditation & Mindfulness</h3>
              <p className="text-warmGray leading-relaxed mb-4">
                Learn to be present in the moment through mindfulness practices and guided meditation. Reduce stress and find inner peace.
              </p>
              <ul className="space-y-2 text-warmGray">
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span>Group and individual sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span>Breathing and relaxation techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span>Programs from 4 to 12 weeks</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-cream border-none hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Brain className="h-12 w-12 text-terracotta" />
              </div>
              <h3 className="font-serif text-2xl text-sage mb-3">Psychological Counseling</h3>
              <p className="text-warmGray leading-relaxed mb-4">
                Professional support in working with emotions, stress and life changes. Create healthy thinking patterns.
              </p>
              <ul className="space-y-2 text-warmGray">
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span>Cognitive behavioral therapy</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span>Stress and anxiety management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span>Online and offline sessions</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-cream border-none hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Sparkles className="h-12 w-12 text-terracotta" />
              </div>
              <h3 className="font-serif text-2xl text-sage mb-3">Yoga & Movement</h3>
              <p className="text-warmGray leading-relaxed mb-4">
                Restore the connection between body and mind through gentle yoga practices. Improve flexibility, strength and balance in a comfortable atmosphere.
              </p>
              <ul className="space-y-2 text-warmGray">
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span>Hatha and vinyasa yoga</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span>Therapeutic yoga for beginners</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span>Small groups up to 8 people</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-cream border-none hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Calendar className="h-12 w-12 text-terracotta" />
              </div>
              <h3 className="font-serif text-2xl text-sage mb-3">Wellness Programs</h3>
              <p className="text-warmGray leading-relaxed mb-4">
                Comprehensive approach to health: nutrition, movement, sleep and emotional wellbeing. Personalized 90-day plan.
              </p>
              <ul className="space-y-2 text-warmGray">
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span>Current state assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span>Individual nutrition plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                  <span>Weekly coach support</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden order-2 md:order-1">
              <Image
                src="/wellness-studio-with-plants-and-natural-light.jpg"
                alt="Luna Wellness studio"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="font-serif text-4xl md:text-5xl text-sage text-balance">
                Philosophy of holistic wellbeing
              </h2>
              <p className="text-lg text-warmGray leading-relaxed">
                Luna Wellness was born from the belief that true health is harmony of body, mind and soul. In today's world full of stress and constant rush, we created a space to return to yourself.
              </p>
              <p className="text-lg text-warmGray leading-relaxed">
                Our team of certified specialists - psychologists, yoga instructors and wellness coaches - works with a holistic approach. We don't treat symptoms, we help find the root of imbalance and restore the body's natural ability to heal.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="font-serif text-4xl text-sage mb-2">500+</div>
                  <div className="text-sm text-warmGray">Clients</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-4xl text-sage mb-2">5 years</div>
                  <div className="text-sm text-warmGray">Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-4xl text-sage mb-2">95%</div>
                  <div className="text-sm text-warmGray">Satisfied</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-sage mb-4">Client Testimonials</h2>
            <p className="text-lg text-warmGray">Stories of transformation and healing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-cream border-none">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} className="h-5 w-5 text-terracotta fill-terracotta" />
                ))}
              </div>
              <p className="text-warmGray leading-relaxed mb-6 italic">
                "Luna Wellness helped me find balance after a year of constant stress. The meditations and consultations changed my outlook on life."
              </p>
              <div className="font-medium text-sage">Anna K.</div>
              <div className="text-sm text-warmGray">Moscow</div>
            </Card>

            <Card className="p-8 bg-cream border-none">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} className="h-5 w-5 text-terracotta fill-terracotta" />
                ))}
              </div>
              <p className="text-warmGray leading-relaxed mb-6 italic">
                "The personalized wellness program taught me to care for myself. I sleep better and feel energized every day."
              </p>
              <div className="font-medium text-sage">Maria S.</div>
              <div className="text-sm text-warmGray">Saint Petersburg</div>
            </Card>

            <Card className="p-8 bg-cream border-none">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} className="h-5 w-5 text-terracotta fill-terracotta" />
                ))}
              </div>
              <p className="text-warmGray leading-relaxed mb-6 italic">
                "An atmosphere of calm and acceptance. For the first time I felt it's okay to be vulnerable. Thank you Luna team!"
              </p>
              <div className="font-medium text-sage">Elena R.</div>
              <div className="text-sm text-warmGray">Kazan</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-sage mb-4 text-balance">
                  Start your journey to wellbeing
                </h2>
                <p className="text-lg text-warmGray leading-relaxed">
                  Book a free consultation or contact us in any convenient way
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-sage mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sage mb-1">Phone</div>
                    <a href="tel:+16175955269" className="text-warmGray hover:text-sage transition-colors">
                      +1 (617) 595-5269
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-sage mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sage mb-1">Email</div>
                    <a href="mailto:hello@lunawellness.life" className="text-warmGray hover:text-sage transition-colors">
                      hello@lunawellness.life
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-sage mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sage mb-1">Address</div>
                    <p className="text-warmGray">
                      2306 Cedar Lane<br />
                      Arkdale, Wisconsin 54613<br />
                      United States<br />
                      Mon-Sun: 9:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Link href="#" className="p-3 bg-cream rounded-full hover:bg-sage hover:text-cream transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="p-3 bg-cream rounded-full hover:bg-sage hover:text-cream transition-colors">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="p-3 bg-cream rounded-full hover:bg-sage hover:text-cream transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white border-none shadow-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sage mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Anna Smith"
                    className="border-sage/20 focus:border-sage"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sage mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="anna@example.com"
                    className="border-sage/20 focus:border-sage"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-sage mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (___) ___-____"
                    className="border-sage/20 focus:border-sage"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sage mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what interests you..."
                    rows={4}
                    className="border-sage/20 focus:border-sage"
                  />
                </div>

                <Button className="w-full bg-terracotta hover:bg-terracotta/90 text-cream" size="lg">
                  Send Request
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage text-cream py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6" />
                <span className="font-serif text-xl">Luna Wellness</span>
              </div>
              <p className="text-cream/80 text-sm leading-relaxed">
                Center for holistic health and wellbeing
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-cream/80">
                <li><Link href="#" className="hover:text-cream transition-colors">Meditation</Link></li>
                <li><Link href="#" className="hover:text-cream transition-colors">Counseling</Link></li>
                <li><Link href="#" className="hover:text-cream transition-colors">Yoga</Link></li>
                <li><Link href="#" className="hover:text-cream transition-colors">Wellness Programs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-cream/80">
                <li><Link href="#" className="hover:text-cream transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-cream transition-colors">Team</Link></li>
                <li><Link href="#" className="hover:text-cream transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-cream transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Newsletter</h3>
              <p className="text-sm text-cream/80 mb-4">
                Get wellness tips and updates
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/50"
                />
                <Button className="bg-terracotta hover:bg-terracotta/90 text-cream">
                  →
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/80">
            <p>© 2025 Luna Wellness. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-cream transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-cream transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
