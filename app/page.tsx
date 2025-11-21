'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Shield, Users, Clock, DollarSign, Target, CheckCircle2, Star, BarChart3, Zap, Lock, Award, Globe, ChevronDown, Play } from 'lucide-react';

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [visibleStats, setVisibleStats] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Animated counter
  const [stats, setStats] = useState({
    successRate: 0,
    members: 0,
    countries: 0,
    dailyReturn: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check if stats are in viewport
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible && !visibleStats) {
          setVisibleStats(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleStats]);

  // Animate stats when visible
  useEffect(() => {
    if (visibleStats) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setStats({
          successRate: Math.min(99.6, progress * 99.6),
          members: Math.min(400000, progress * 400000),
          countries: Math.min(100, progress * 100),
          dailyReturn: Math.min(1.3, progress * 1.3)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [visibleStats]);

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'AI-Powered Signals',
      description: 'Advanced machine learning algorithms analyze millions of data points to deliver 99.6% accurate trading signals in real-time',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Bank-Grade Security',
      description: 'Multi-layer encryption and regulated infrastructure with institutional-grade fund protection',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Network',
      description: 'Join a global network of traders and earn rewards through community building and collaboration',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-Time Execution',
      description: 'Lightning-fast signal delivery with instant notifications and automated execution options',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive performance tracking with detailed analytics and portfolio insights',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Proven Track Record',
      description: 'Consistent 99.6% success rate backed by verifiable historical performance data',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah L.',
      location: 'Singapore',
      rating: 5,
      text: 'Started with $1,000 and saw incredible results in just 60 days. The AI signals are remarkably accurate and the platform is easy to use.',
      avatar: 'SL',
      profit: '+127%'
    },
    {
      name: 'Michael R.',
      location: 'United States',
      rating: 5,
      text: 'The analytics dashboard gives me complete visibility into my performance. Support team is responsive and professional.',
      avatar: 'MR',
      profit: '+89%'
    },
    {
      name: 'Chen W.',
      location: 'Hong Kong',
      rating: 5,
      text: 'Building my network has been incredible. The community aspect adds another dimension of value beyond just the trading signals.',
      avatar: 'CW',
      profit: '+156%'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      amount: '$300',
      signals: '2 daily signals',
      returns: 'Up to 1.3% daily',
      bonus: '6 bonus signals',
      popular: false
    },
    {
      name: 'Growth',
      amount: '$1,000',
      signals: '2 daily signals + bonuses',
      returns: 'Up to 3.8% daily',
      bonus: '20 bonus signals',
      popular: true
    },
    {
      name: 'Premium',
      amount: '$5,000+',
      signals: 'Unlimited signals',
      returns: 'Up to 5.2% daily',
      bonus: 'VIP support included',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl top-0 left-0 animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse delay-1000" />
        <div className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-indigo-500/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-lg opacity-50" />
                <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                AI Trading Platform
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="group relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Launch Dashboard
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-indigo-500/30 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-fade-in">
              <Award className="w-4 h-4 text-yellow-400" />
              99.6% Success Rate • Verified Performance
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight">
              Your Gateway to
              <br />
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 blur-2xl opacity-50" />
                <span className="relative bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI-Powered Trading
                </span>
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join 400,000+ traders worldwide leveraging institutional-grade AI algorithms
              for consistent daily returns with proven 99.6% accuracy
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
              <Link
                href="/dashboard"
                className="group relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-2 border-white/30 hover:border-white/50 text-white px-10 py-5 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                See How It Works
              </button>
            </div>

            {/* Animated Stats */}
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { value: stats.successRate.toFixed(1), suffix: '%', label: 'Success Rate', icon: <Award className="w-6 h-6" /> },
                { value: (stats.members / 1000).toFixed(0), suffix: 'K+', label: 'Active Traders', icon: <Users className="w-6 h-6" /> },
                { value: stats.countries.toFixed(0), suffix: '+', label: 'Countries', icon: <Globe className="w-6 h-6" /> },
                { value: stats.dailyReturn.toFixed(1), suffix: '%', label: 'Daily Returns', icon: <TrendingUp className="w-6 h-6" /> }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300" />
                  <div className="relative">
                    <div className="text-indigo-400 mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-4xl font-bold text-white mb-2">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-indigo-400" />
        </div>
      </section>

      {/* Features Section with Tabs */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience institutional-grade AI trading with comprehensive tools,
              proven results, and unmatched support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Start Trading in Minutes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, secure, and straightforward. Get started with just three easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30" />

            {[
              {
                step: '01',
                title: 'Create Account',
                description: 'Quick registration with secure verification. Set up your profile and get instant access to the platform.',
                icon: <Users className="w-8 h-8" />
              },
              {
                step: '02',
                title: 'Fund & Activate',
                description: 'Deposit starting from $300 USDT. Receive welcome bonuses and activate your AI trading signals.',
                icon: <DollarSign className="w-8 h-8" />
              },
              {
                step: '03',
                title: 'Trade & Earn',
                description: 'Follow AI signals, execute trades, and watch your portfolio grow. Track everything in real-time.',
                icon: <TrendingUp className="w-8 h-8" />
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500" />

                  <div className="relative z-10">
                    <div className="text-8xl font-bold text-indigo-500/20 mb-4">
                      {item.step}
                    </div>

                    <div className="inline-flex p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl mb-6">
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-12 h-12 text-indigo-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible options designed to match your investment goals and trading style
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border transition-all duration-500 hover:scale-105 ${
                  tier.popular
                    ? 'border-indigo-500 ring-2 ring-indigo-500/50 shadow-2xl shadow-indigo-500/20'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                  <div className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {tier.amount}
                  </div>
                  <p className="text-gray-400">Minimum deposit</p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: <Zap className="w-5 h-5" />, text: tier.signals },
                    { icon: <TrendingUp className="w-5 h-5" />, text: tier.returns },
                    { icon: <Award className="w-5 h-5" />, text: tier.bonus }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="text-indigo-400">{item.icon}</div>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/dashboard"
                  className={`block w-full py-4 rounded-full font-semibold text-center transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-xl hover:shadow-indigo-500/50 hover:scale-105'
                      : 'border-2 border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Trusted Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of successful traders achieving their financial goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="text-green-400 font-bold text-xl">
                    {testimonial.profit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-xl p-16 rounded-3xl border border-indigo-500/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to Transform Your Trading?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join our community of successful traders and start your journey to financial independence today
              </p>

              <Link
                href="/dashboard"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/50 group"
              >
                Launch Dashboard Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-300 text-sm mt-10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  Start from $300
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  24/7 Support
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  Instant activation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-lg opacity-50" />
                  <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="text-xl font-bold text-white">AI Trading Platform</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Empowering traders worldwide with institutional-grade AI technology.
                Experience consistent returns backed by proven 99.6% accuracy.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <p className="text-gray-400">
                24/7 Professional Support
              </p>
              <p className="text-gray-400 mt-2">
                Available via platform
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 mb-3">
              © 2025 AI Trading Platform. For educational and informational purposes only.
            </p>
            <p className="text-gray-500 text-sm max-w-3xl mx-auto">
              Trading involves risk. Past performance does not guarantee future results.
              The stated 99.6% success rate is based on historical data and may not reflect future performance.
              This platform and its operators are not financial advisors and do not provide investment advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
