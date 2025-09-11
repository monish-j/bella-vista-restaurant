'use client';

import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Phone, Mail, Star, ChefHat, Users, Award, Instagram, Facebook, Twitter, Menu, X, ArrowRight } from 'lucide-react';

const RestaurantWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [isVisible, setIsVisible] = useState({});
  const [showReservationDemo, setShowReservationDemo] = useState(false);

  const handleReserveTable = () => {
    setShowReservationDemo(true);
    setTimeout(() => setShowReservationDemo(false), 3000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const menuItems = {
    appetizers: [
      { name: "Truffle Arancini", description: "Crispy risotto balls with truffle oil and parmesan", price: "$14" },
      { name: "Burrata Caprese", description: "Fresh burrata with heirloom tomatoes and basil oil", price: "$16" },
      { name: "Tuna Tartare", description: "Yellowfin tuna with avocado, citrus, and sesame", price: "$18" },
      { name: "Charcuterie Board", description: "Selection of artisanal meats, cheeses, and accompaniments", price: "$22" }
    ],
    mains: [
      { name: "Dry-Aged Ribeye", description: "28-day aged ribeye with roasted bone marrow and red wine jus", price: "$48" },
      { name: "Pan-Seared Halibut", description: "Alaska halibut with cauliflower puree and brown butter", price: "$32" },
      { name: "Duck Confit", description: "Slow-cooked duck leg with cherry gastrique and wild rice", price: "$28" },
      { name: "Lobster Risotto", description: "Maine lobster with saffron risotto and microgreens", price: "$36" }
    ],
    desserts: [
      { name: "Chocolate Soufflé", description: "Dark chocolate soufflé with vanilla bean ice cream", price: "$12" },
      { name: "Tiramisu", description: "Classic Italian tiramisu with espresso and mascarpone", price: "$10" },
      { name: "Crème Brûlée", description: "Vanilla custard with caramelized sugar and fresh berries", price: "$11" },
      { name: "Seasonal Fruit Tart", description: "Pastry tart with seasonal fruits and pastry cream", price: "$9" }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Demo Reservation Notification */}
      {showReservationDemo && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg shadow-2xl animate-bounce">
          <div className="text-center">
            <div className="font-bold text-lg">🍽️ Demo Only</div>
            <div className="text-sm">This is a portfolio showcase - reservations are not functional</div>
          </div>
        </div>
      )}
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-slate-900">Bella Vista</div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-amber-600 transition-colors font-medium">Home</a>
              <a href="#menu" className="text-slate-700 hover:text-amber-600 transition-colors font-medium">Menu</a>
              <a href="#about" className="text-slate-700 hover:text-amber-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-slate-700 hover:text-amber-600 transition-colors font-medium">Contact</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+1234567890" className="text-amber-600 hover:text-amber-700 font-semibold">
                (123) 456-7890
              </a>
              <button 
                onClick={handleReserveTable}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Reserve Table
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-700 hover:text-amber-600 transition-colors p-2 rounded-lg hover:bg-slate-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-slate-700 hover:text-amber-600 transition-colors font-medium">Home</a>
                <a href="#menu" className="text-slate-700 hover:text-amber-600 transition-colors font-medium">Menu</a>
                <a href="#about" className="text-slate-700 hover:text-amber-600 transition-colors font-medium">About</a>
                <a href="#contact" className="text-slate-700 hover:text-amber-600 transition-colors font-medium">Contact</a>
                <button 
                  onClick={handleReserveTable}
                  className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold w-full"
                >
                  Reserve Table
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop" 
            alt="Restaurant interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className={`max-w-3xl transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="hero">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              An Unforgettable
              <span className="block text-amber-400">Dining Experience</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Experience the perfect blend of Italian tradition and modern culinary artistry in the heart of downtown.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleReserveTable}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center"
              >
                Reserve Your Table
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} id="about">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Where Tradition Meets Innovation
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Since 1985, Bella Vista has been serving authentic Italian cuisine with a modern twist. 
                  Our head chef, Marco Rossi, brings over 20 years of experience from Milan&apos;s finest restaurants.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We source the finest ingredients locally and from Italy, creating dishes that honor tradition 
                  while embracing contemporary culinary techniques.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-2">15+</div>
                  <div className="text-sm text-slate-600">Awards Won</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-2">50K+</div>
                  <div className="text-sm text-slate-600">Happy Guests</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-2">4.9</div>
                  <div className="text-sm text-slate-600">Rating</div>
                </div>
              </div>
            </div>
            
            <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1616299915952-04c803388e5f?w=800&h=600&fit=crop&auto=format&q=80" 
                  alt="Chef cooking" 
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
                  <div className="flex items-center space-x-2 mb-2">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-slate-900">Michelin Recommended</div>
                  <div className="text-sm text-slate-600">2019 - 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.menu ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="menu">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Menu</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of authentic Italian dishes, 
              crafted with the finest ingredients and traditional techniques.
            </p>
          </div>

          {/* Menu Categories */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 p-2 rounded-2xl inline-flex">
              {Object.keys(menuItems).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 capitalize ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems[activeCategory].map((item, index) => (
              <div 
                key={index}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{item.name}</h3>
                  <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                </div>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Download Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Gallery</h2>
            <p className="text-lg text-slate-600">A visual journey through our culinary artistry</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=800&h=600&fit=crop&auto=format&q=80",
              "https://plus.unsplash.com/premium_photo-1667682942148-a0c98d1d70db?w=800&h=600&fit=crop&auto=format&q=80",
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1614961908593-2c6bf2bdf2ba?w=800&h=600&fit=crop&auto=format&q=80",
              "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=400&fit=crop"
            ].map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl group">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className={`transform transition-all duration-1000 ${isVisible.contact ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} id="contact">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Visit Us Today</h2>
              <p className="text-xl text-gray-300 mb-12">
                Experience the magic of authentic Italian cuisine in an elegant atmosphere.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white mb-1">Location</div>
                    <div className="text-gray-300">123 Downtown Street<br />New York, NY 10001</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white mb-1">Hours</div>
                    <div className="text-gray-300">
                      Mon-Thu: 5:00 PM - 10:00 PM<br />
                      Fri-Sat: 5:00 PM - 11:00 PM<br />
                      Sun: 4:00 PM - 9:00 PM
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white mb-1">Contact</div>
                    <div className="text-gray-300">
                      (123) 456-7890<br />
                      info@bellavista.com
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <div className="text-lg font-semibold text-white mb-4">Follow Us</div>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className={`transform transition-all duration-1000 ${isVisible.contact ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-white p-10 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Make a Reservation</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Date</label>
                      <input type="date" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Guests</label>
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                        <option>2 Guests</option>
                        <option>4 Guests</option>
                        <option>6 Guests</option>
                        <option>8+ Guests</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Special Requests</label>
                    <textarea rows="3" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="Any dietary restrictions or special occasions?"></textarea>
                  </div>
                  <button 
                    onClick={handleReserveTable}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Reserve Table
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white">Bella Vista</div>
          </div>
          <p className="text-gray-400 mb-6">
            Authentic Italian cuisine in the heart of New York
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">
              © 2024 Bella Vista Restaurant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantWebsite;