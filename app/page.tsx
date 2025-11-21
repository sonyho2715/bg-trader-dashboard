'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Shield, Users, Clock, DollarSign, Target, CheckCircle2, Star, BarChart3 } from 'lucide-react';

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <div className="text-3xl">💎</div>
              <span className="text-2xl font-bold text-white">BG Wealth Sharing</span>
            </div>
            <Link
              href="/dashboard"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 flex items-center gap-2"
            >
              Access Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                99.6% Success Rate Trading Platform
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Financial
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Future with AI Trading
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join 400,000+ members worldwide earning daily returns through AI-powered trading signals with proven 99.6% accuracy
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/dashboard"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center gap-2 group"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">99.6%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">400K+</div>
                <div className="text-gray-400">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">1.3%</div>
                <div className="text-gray-400">Daily Returns</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why Choose BG Wealth Sharing?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the power of AI-driven trading with institutional-grade tools and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'AI-Powered Signals',
                description: 'Advanced machine learning algorithms analyze millions of data points to deliver 99.6% accurate trading signals'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Secure & Licensed',
                description: 'Fully licensed and regulated with £30M guarantee fund protecting all member investments'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Team Building',
                description: 'Build your own team and earn additional passive income through referral bonuses and volume dividends'
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Daily Signals',
                description: 'Receive 2 fixed trading signals daily, plus bonus signals for higher returns up to 5.2% daily'
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: 'Low Entry',
                description: 'Start with as little as $300 USDT and scale your investment as you grow comfortable'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Expert Support',
                description: '24/7 support from Professor Stephen Beard and dedicated team via BonChat platform'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20"
              >
                <div className="text-indigo-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get started in just a few simple steps and start earning daily
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Register & Verify',
                description: 'Create your DSJ Exchange account and complete KYC verification for security'
              },
              {
                step: '2',
                title: 'Fund Your Account',
                description: 'Deposit USDT (min $300) and receive 6 bonus signals for 1.5 days'
              },
              {
                step: '3',
                title: 'Follow Signals & Earn',
                description: 'Execute AI signals daily earning 1.3% (or 5.2% with bonuses) and compound your wealth'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300">
                  <div className="text-6xl font-bold text-indigo-400/30 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">
                    {item.description}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-indigo-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Trusted by Members Worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-2xl border border-white/10">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Started with $1,000 and doubled my investment in under 60 days. The AI signals are incredibly accurate and the support team is always available to help."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  JM
                </div>
                <div>
                  <div className="text-white font-semibold">John M.</div>
                  <div className="text-gray-400 text-sm">USA</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-2xl border border-white/10">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "The team building aspect is amazing. I've built a team of 25 members and now earn passive income from volume dividends on top of my daily trading returns."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  NT
                </div>
                <div>
                  <div className="text-white font-semibold">Nguyen T.</div>
                  <div className="text-gray-400 text-sm">Vietnam</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm p-12 rounded-3xl border border-white/10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Start Your Wealth Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of members already earning daily with our AI-powered trading platform
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                href="/dashboard"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center gap-2 group"
              >
                Access Your Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Start with $300
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl">💎</div>
                <span className="text-xl font-bold text-white">BG Wealth Sharing</span>
              </div>
              <p className="text-gray-400">
                Transform your financial future with AI-powered trading signals
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">
                Professor Stephen Beard
              </p>
              <p className="text-gray-400">
                24/7 Support via BonChat
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p className="mb-2">
              © 2025 BG Wealth Sharing. For educational and informational purposes only.
            </p>
            <p className="text-xs">
              Trading involves risk. Past performance does not guarantee future results. The stated 99.6% win rate is based on historical data.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
