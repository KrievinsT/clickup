import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: "Starter Plan",
    description: "Perfect for Small Teams and Startups",
    price: 50,
    features: [
      "Unlimited docs",
      "200+ templates",
      "5GB file storage",
      "Automations (250 actions per month)",
    ],
  },
  {
    name: "Professional Plan",
    description: "For Growing Businesses Ready to Scale",
    price: 80,
    features: [
      "Unlimited docs",
      "200+ templates",
      "5GB file storage",
      "Automations (250 actions per month)",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise Plan",
    description: "Perfect for Large Organizations",
    price: 150,
    features: [
      "Unlimited docs",
      "200+ templates",
      "5GB file storage",
      "Automations (250 actions per month)",
    ],
  },
];

function Pricing() {
  const [selected, setSelected] = useState('monthly');

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6706c5a11280e578e46fadd6_Logo%20(10).svg"
              alt="Clikup Logo"
              className="w-8 h-8 rounded-md"
            />
            <span className="text-xl font-semibold">Clikup</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/features" className="text-gray-600 hover:text-orange-500">Features</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-orange-500">Pricing</Link>
            <a href="#" className="text-gray-600 hover:text-orange-500">About Us</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Blog</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Cart (0)</a>
          </nav>
          <button className="hidden md:inline-flex px-4 py-2 border border-gray-300 bg-white rounded-full hover:bg-orange-500">
            Get Started
          </button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12 md:py-24 flex flex-col items-center justify-center">
        <div className="md:w-1/2 mb-12 md:mb-0 text-center">
          <div className="inline-block mb-4">
            <span className="bg-[#FF7A59] text-white text-sm font-medium px-2.5 py-0.5 rounded">Clickup</span>
            <span className="ml-2 text-gray-600">Pricing for you</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Boost your 
            <span className="text-[#FF7A59]"> teamwork</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">Manage it all with a fully customizable, no-code platform</p>
        </div>
        <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm border">
          <button
            onClick={() => setSelected("monthly")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selected === "monthly"
                ? "bg-gray-900 text-white"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setSelected("yearly")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selected === "yearly"
                ? "bg-gray-900 text-white"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Yearly
          </button>
        </div>
      </main>
      <section className="bg-gray-100">
        <div className="container mx-auto grid gap-6 md:grid-cols-3 px-4 py-8">
          {tiers.map((tier, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-semibold">${tier.price}</span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
                <button
                  className={`w-full py-2 px-4 rounded-full font-semibold mb-6 ${
                    tier.highlighted
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-white text-gray-900 border border-gray-300 hover:bg-orange-500"
                  }`}
                >
                  Get Started
                </button>
                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <img
                      src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6709534530ef40acb872cc5b_icon-park-solid_check-one.svg"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
      <div className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="text-center">
            <div className="text-gray-500 mb-2">Starter Plan</div>
            <div className="text-4xl font-semibold">
              $50.00 <span className="text-base font-normal text-gray-500">/month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Efficiency</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-4 items-center bg-gray-50 py-4">
              <div className="col-span-1 font-medium">Public forms</div>
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 items-center bg-gray-50 py-4">
              <div className="col-span-1 font-medium">Tailored notifications</div>
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 items-center bg-gray-50 py-4">
              <div className="col-span-1 font-medium">Adjustable fields</div>
              <div className="text-blue-500 text-center">Limited</div>
              {[1, 2].map((_, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 items-center bg-gray-50 py-4">
              <div className="col-span-1 font-medium">Premium app integrations</div>
              <div className="text-blue-500 text-center">Limited</div>
              <div className="text-blue-500 text-center">Limited</div>
              <div className="flex justify-center">
                <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Insights & analytics</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-4 items-center bg-gray-50 py-4">
              <div className="col-span-1 font-medium">Action log</div>
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 items-center bg-gray-50 py-4">
              <div className="col-span-1 font-medium">Endless dashboards</div>
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 items-center bg-gray-50 py-4">
              <div className="col-span-1 font-medium">Kanbanan layout</div>
              <div className="text-blue-500 text-center">Limited</div>
              {[1, 2].map((_, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 items-center bg-gray-50 py-4">
              <div className="col-span-1 font-medium">Timeline display</div>
              <div className="text-blue-500 text-center">Limited</div>
              <div className="text-blue-500 text-center">Limited</div>
              <div className="flex justify-center">
                <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 p-6">
  <div className="flex items-center justify-between max-w-4xl">
    <div className="flex flex-col items-center gap-4">
      <button className="px-12 py-3 text-[15px] font-medium bg-white border border-gray-200 rounded-full hover:bg-orange-500 transition-colors">
        Get Started
      </button>
    </div>
    <div className="flex flex-col items-center gap-4">
      <button className="px-12 py-3 text-[15px] font-medium text-white bg-black rounded-full hover:bg-gray-900 transition-colors">
        Get Started
      </button>
    </div>
    <div className="flex flex-col items-center gap-4">
      <button className="px-12 py-3 text-[15px] font-medium bg-white border border-gray-200 rounded-full hover:bg-orange-500 transition-colors">
        Get Started
      </button>
    </div>
  </div>
</div>
    </div>
</section>

<section>
<div className="flex justify-center items-center p-4">
    <span className="bg-[#FF7A59] text-white text-sm font-medium px-3 py-1 rounded-full mr-2">New</span>
    <span className="text-gray-600">Testimonials</span>
  </div>
  <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center">
    <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
    Experience Clikup in <span className="text-[#FF7A59]">action</span>
    </h1>
    <p className="text-sm text-gray-600 leading-relaxed">
    Combine all your essential processes and data in Tuesday CRM for the smoothest workflows.
    </p>
    <div class="container mx-auto px-4">
  
</div>
<div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-x-8 gap-y-10 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          
        <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm">
            <div>
            <img 
  src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670796a30114b192ef761bd7_Logo%20(13).svg" 
  alt="Logoipsum logo"  
  className="mb-4 border-0"
/>
              <div className="mt-8 text-lg font-medium leading-relaxed text-gray-900">
                "Clikup is a game-changer! It’s intuitive, flexible, and makes managing sales a breeze. Highly recommend"
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-300" aria-label="Alex Johnson's profile picture"></div>
              <div>
                <div className="font-semibold text-gray-900">Alex Johnson</div>
                <div className="text-sm text-gray-600">Sales Manager</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm">
            <div>
            <img 
  src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670796c428e3688d4252e1c3_Logo%20(12).svg" 
  alt="Logoipsum logo"  
  className="mb-4 border-0"
/>
              <div className="mt-8 text-lg font-medium leading-relaxed text-gray-900">
                "Clikup has completely transformed our customer engagement. It's easy to use and has streamlined our workflows immensely. Highly recommend it!"
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-300" aria-label="Emma Rogers's profile picture"></div>
              <div>
                <div className="font-semibold text-gray-900">Emma Rogers</div>
                <div className="text-sm text-gray-600">Customer Success Manager</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm">
            <div>
            <img 
  src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670796a3958f65d10e11275a_Logo%20(11).svg" 
  alt="Logoipsum logo"  
  className="mb-4 border-0"
/>
              <div className="mt-8 text-lg font-medium leading-relaxed text-gray-900">
                "Thanks to Clikup, we've seen a 40% improvement in response times. The platform is incredibly user-friendly and has made collaboration effortless."
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-300" aria-label="Michael Thompson's profile picture"></div>
              <div>
                <div className="font-semibold text-gray-900">Michael Thompson</div>
                <div className="text-sm text-gray-600">Operations Director</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm">
            <div>
                <img
            src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670796c428e3688d4252e1c3_Logo%20(12).svg"
            alt="Logoipsum"
            className="mb-4 border-0"
            />
              <div className="mt-8 text-lg font-medium leading-relaxed text-gray-900">
                "Clikup is a powerful tool! It integrates perfectly with our existing systems and has helped our team close deals faster than ever before."
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-300" aria-label="Sofia Martinez's profile picture"></div>
              <div>
                <div className="font-semibold text-gray-900">Sofia Martinez</div>
                <div className="text-sm text-gray-600">Sales Executive</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm">
            <div>
              <img
              src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670796a3958f65d10e11275a_Logo%20(11).svg"
              alt="Logoipsum"
              classNmae="mb-4 border-0"
              />
              <div className="mt-8 text-lg font-medium leading-relaxed text-gray-900">
                "Since we started using Clikup, our team's productivity has skyrocketed. The intuitive interface and robust features are just what we needed!"
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-300" aria-label="David Lin's profile picture"></div>
              <div>
                <div className="font-semibold text-gray-900">David Lin</div>
                <div className="text-sm text-gray-600">Product Manager</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm">
            <div>
              <img
              src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670796a30114b192ef761bd7_Logo%20(13).svg"
              alt="Logoipsum"
              className="mb-4 border-0"
              />
              <div className="mt-8 text-lg font-medium leading-relaxed text-gray-900">
                "Clikup has been a game-changer for our company. It's flexible, reliable, and the customer support is exceptional. Perfect for growing businesses!"
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-300" aria-label="Rachel Kim's profile picture"></div>
              <div>
                <div className="font-semibold text-gray-900">Rachel Kim</div>
                <div className="text-sm text-gray-600">Marketing Specialist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
<div className="flex justify-center items-center p-4">
    <span className="bg-[#FF7A59] text-white text-sm font-medium px-3 py-1 rounded-full mr-2">Clickup</span>
    <span className="text-gray-600">FAQ</span>
  </div>
  <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center">
    <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
    Frequently answer <span className="text-[#FF7A59]">questions</span>
    </h1>
    <p className="text-sm text-gray-600 leading-relaxed">
    Manage it all with a fully customizable, no code platform
    </p>
    <div class="container mx-auto px-4">
</div>
</div>
<div className="max-w-3xl mx-auto space-y-4 p-4">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="w-full px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-normal text-[#1a1a1a]">
            What is Customer Relationship Management (CRM)?
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#333333] text-white">
            <div className="text-2xl font-light leading-none mb-1">+</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="w-full px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-normal text-[#1a1a1a]">
            What is CRM Software Used For?
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#333333] text-white">
            <div className="text-2xl font-light leading-none mb-1">+</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="w-full px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-normal text-[#1a1a1a]">
            How Can CRM Help Improve Customer Retention?
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#333333] text-white">
            <div className="text-2xl font-light leading-none mb-1">+</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="w-full px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-normal text-[#1a1a1a]">
            What Are the Key Features of CRM Software?
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#333333] text-white">
            <div className="text-2xl font-light leading-none mb-1">+</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="w-full px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-normal text-[#1a1a1a]">
            Is CRM Software Useful for Small Businesses?
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#333333] text-white">
            <div className="text-2xl font-light leading-none mb-1">+</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="w-full px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-normal text-[#1a1a1a]">
            How Does CRM Software Support Sales Growth?
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#333333] text-white">
            <div className="text-2xl font-light leading-none mb-1">+</div>
          </div>
        </div>
      </div>
    </div>
</section>
<footer>
  <div className="w-full px-6 py-12 bg-white rounded-lg">
    <div className="container mx-auto max-w-7xl">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <img
            src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6706c5a11280e578e46fadd6_Logo%20(10).svg"
          />
          <div className="text-xl font-semibold">Clikup</div>
        </div>
        <div className="text-gray-600 max-w-xs">
          Manage it all with a fully customizable, no code platform
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <div className="text-gray-500 font-medium mb-4">Useful Link</div>
          <div className="space-y-3">
            <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Features</div>
            <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Pricing</div>
            <div className="text-gray-700 hover:text-gray-900 cursor-pointer">About Us</div>
            <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Blog</div>
          </div>
        </div>

        <div>
          <div className="text-gray-500 font-medium mb-4">Product</div>
          <div className="space-y-3">
            <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Product Teams</div>
            <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Finance Teams</div>
            <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Data Teams</div>
          </div>
        </div>

        <div>
          <div className="text-gray-500 font-medium mb-4">Company</div>
          <div className="space-y-3">
            <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Sign up</div>
            <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Login</div>
            <div className="text-gray-700 hover:text-gray-900 cursor-pointer">More Templates</div>
          </div>
        </div>

        {/* soc tīklu ikonas  */}
        <div className="lg:col-span-2">
          <div className="text-gray-500 font-medium mb-4">Social</div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200">
            <img
            src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6709660d53f171b0c1fe196e_mage_x.svg"
            />
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200">
            <img
            src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6709660dd84fe251d18953c3_ic_baseline-facebook.svg"
            />
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200">
            <img
            src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6709660d385fd8991b073faa_ri_instagram-fill.svg"
            />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t">
        <div className="text-gray-600">Made in Webflow</div>
        <div className="flex gap-6">
          <div className="text-gray-600 hover:text-gray-900 cursor-pointer">Temlis</div>
          <div className="text-gray-600 hover:text-gray-900 cursor-pointer">Licensing</div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

export default Pricing;
