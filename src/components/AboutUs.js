import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  // Sample users array with 5 users
  const users = [
    { image: 'https://via.placeholder.com/150' },
    { image: 'https://via.placeholder.com/150' },
    { image: 'https://via.placeholder.com/150' },
    { image: 'https://via.placeholder.com/150' }, // Added 2 more users
    { image: 'https://via.placeholder.com/150' },
  ];

  

  return (
    <div>
      <header className="border-b">
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6706c5a11280e578e46fadd6_Logo%20(10).svg"
              alt="Clikup Logo"
              className="w-12 h-12 rounded-md"
            />
            <span className="text-3xl font-semibold">Clikup</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="Features" className="text-gray-600 hover:text-orange-500 text-lg">Features</Link>
            <Link to="Pricing" className="text-gray-600 hover:text-orange-500 text-lg">Pricing</Link>
            <Link to="AboutUs" className="text-gray-600 hover:text-orange-500 text-lg">About Us</Link>
            <Link to="Blog" className="text-gray-600 hover:text-orange-500 text-lg">Blog</Link>
            <a href="#" className="text-gray-600 hover:text-orange-500 text-lg">Cart (0)</a>
          </nav>
          <button className="hidden md:inline-flex px-6 py-3 border border-gray-300 bg-white rounded-full hover:bg-orange-500 text-lg">
            Get Started
          </button>
        </div>
        </div>
      </header>
      <main className="flex justify-center items-start mt-12">
        <div className="flex flex-col md:flex-row items-start space-x-16">
          <div className="relative flex-shrink-0">
            <img
              src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/671226b8e61cbe86fb52f026_Group%2046899%20(1).webp"
              alt="About Us"
              className="w-96 h-auto"
            />
            <img
              src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/671226b87c8aab1688f1f66e_Frame%201000002304%20(2).webp"
              alt="Frame"
              className="absolute top-14 left-14 w-64 h-auto"
            />
            <img
              src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/671226b7baf92e3ed5a54379_Frame%201000002278%20(1).webp"
              alt="New Frame"
              className="absolute top-96 left-14 w-64 h-auto"
            />
          </div>

          {/* Move content to the right by adjusting margin */}
          <div className="md:w-1/2 mb-16 md:mb-0 ml-[150px]">  {/* Increased left margin to 150px */}
            <div className="inline-block mb-6">
              <span className="bg-[#FF7A59] text-white text-lg font-medium px-4 py-1 rounded">New</span>
              <span className="ml-4 text-xl text-gray-600">Connect and Grow with Clikup</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
              How did Clikup get
              <span className="text-[#FF7A59]"> started ?</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12">
              It started with collaboration, communication, rapid growth, and full transparency—working just the way we wanted
            </p>
            <button className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-xl font-semibold text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">
              Get Started for free
            </button>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex -space-x-3">
                {users.map((user, index) => (
                  <div 
                    key={index} 
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                  >
                    <img 
                      src={user.image} 
                      alt={`User ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#ff7b5c] text-xl font-medium">4.9/5.0</span>
                <span className="text-gray-500 text-lg">Rated by +100,000 users</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section>
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
    {/* Make the white container smaller */}
    <div className="max-w-7xl w-full bg-white rounded-xl shadow-lg p-8 flex" style={{ minHeight: '70vh' }}>
      <div className="w-1/2 pr-8">
        <div className="flex mb-6">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full mr-2">Clikup</button>
          <button className="text-gray-600 px-4 py-2 rounded-full">Our story</button>
        </div>
        <h1 className="text-4xl font-bold mb-4">
          We keep growing as a multi-product <span className="text-orange-500">company</span>
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          On February 8th, 2021, Tuesday marked a new chapter by going public on Nasdaq. Today, we keep growing as a multi-product company.
        </p>
      </div>
      <div className="w-1/2 relative">
        {/* Left Image - Moved to the right to cover the right image */}
        <div className="absolute top-24 left-16 w-80 h-[250px] bg-white border rounded-lg shadow-md p-4 transform -translate-x-10" style={{ clipPath: 'inset(0 0 15% 0)' }}>
          <img src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/67123c8b7485c427d889e51e_Frame%201000002319.webp" alt="Invoice" className="w-full h-full mb-4 rounded"/>
          <div>
            <p className="text-left text-sm font-bold">Invoice</p>
            <p className="text-left text-xs text-gray-500 mb-2">#12645</p>
            <p className="text-left text-sm font-bold">Rona Zepri</p>
            <p className="text-left text-xs text-gray-500 mb-2">October 7, 2024</p>
            <div className="flex justify-between text-sm border-t pt-2">
              <p>Macbook M1</p>
              <p>$1,500</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Iphone 13</p>
              <p>$1,200 x 2 = $2,400</p>
            </div>
          </div>
        </div>
        
        {/* Right Image - Slightly moved to the left */}
        <div className="absolute top-4 right-16 w-80 h-[250px] bg-white border rounded-lg shadow-md p-4 transform translate-x-10" style={{ clipPath: 'inset(0 0 15% 0)' }}>
          <img src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/67123c8b44f733a87fcd2ae3_Frame%201000002320.webp" alt="Contract Agreement" className="w-full h-full mb-4 rounded"/>
          <div>
            <p className="text-left text-sm font-bold">Contract Agreement</p>
            <p className="text-left text-sm font-bold">Anna Marrie</p>
            <p className="text-left text-xs text-gray-500">Los Angeles, USA</p>
            <p className="text-left text-xs text-gray-500">annamarrie@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
<div className="bg-[#2A2B2A] rounded-[32px] px-8 py-8 md:py-12 flex flex-col items-center text-center max-w-7xl mx-auto">
    <div className="max-w-xl mx-auto space-y-8"> {/* Decreased max-width */}
      {/* Top badge */}
      <div className="inline-flex items-center gap-2 bg-white rounded-full pl-3 pr-4 py-1.5 mb-12">
    <span className="bg-[#E97458] text-white text-sm font-medium px-2 py-0.5 rounded-full">
      Clikup
    </span>
    <span className="text-black text-sm">
      Our achivemnts
    </span>
  </div>

      {/* Heading */}
      <div className="text-5xl font-medium text-white">
        Milestones and{" "}
        <div className="inline text-[#F26D21]">Recognitions</div>
      </div>

      {/* Subtitle */}
      <div className="text-gray-400 text-lg">
        Since our launch, Clikup has achieved several significant milestones and received numerous accolades
      </div>

      {/* Get Started button */}
      <div className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors cursor-pointer">
        Get Started
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
        <div className="space-y-2">
          <div className="text-white text-5xl font-medium">1500+</div>
          <div className="text-gray-400">People building Clikup</div>
        </div>
        <div className="space-y-2">
          <div className="text-white text-5xl font-medium">500+</div>
          <div className="text-gray-400">Countries use Clikup</div>
        </div>
        <div className="space-y-2">
          <div className="text-white text-5xl font-medium">3B+</div>
          <div className="text-gray-400">Actions daily</div>
        </div>
        <div className="space-y-2">
          <div className="text-white text-5xl font-medium">300K+</div>
          <div className="text-gray-400">Customers</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2">
          <span className="rounded-full bg-[#FF7A5C] px-2 py-0.5 text-sm font-medium text-white">
            New
          </span>
          <span className="text-sm">Testimonials</span>
        </div>

        <h1 className="max-w-4xl text-5xl font-medium leading-tight tracking-tight md:text-6xl lg:text-7xl">
        Experience Clikup in{' '}
          <span className="text-[#FF7A5C]">action</span>
        </h1>

        <p className="mt-6 text-xl text-gray-600">
        Combine all your essential processes and data in Tuesday CRM for the smoothest workflows.
        </p>
</section>
<section>
<div className="bg-gray-100">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <img 
        src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/671274750d83317acca30b2b_ph_star-fill%20(1).svg"
        />
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
          <div className="w-6 h-6" style={{backgroundImage: "url('/placeholder.svg?height=24&width=24')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
        </div>
        <div className="mb-4 text-xl font-medium text-gray-900">
          Innovations
        </div>
        <div className="text-gray-500 leading-relaxed">
          We strive to stay ahead of the curve, continuously enhancing our platform with the latest technologies and features.
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm">
      <img 
        src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/671274730054dba92e58235e_flowbite_search-solid.svg"
        />
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
          <div className="w-6 h-6" style={{backgroundImage: "url('/placeholder.svg?height=24&width=24')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
        </div>
        <div className="mb-4 text-xl font-medium text-gray-900">
          Integrity
        </div>
        <div className="text-gray-500 leading-relaxed">
          We operate with honesty and transparency, building trust with our customers, partners, and employees.
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm">
      <img 
        src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/67127472c409d9f6f7f866a6_bxs_like.svg"
        />
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
          <div className="w-6 h-6" style={{backgroundImage: "url('/placeholder.svg?height=24&width=24')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
        </div>
        <div className="mb-4 text-xl font-medium text-gray-900">
          Excellence
        </div>
        <div className="text-gray-500 leading-relaxed">
          We are committed to delivering high-quality products and services, constantly seeking ways to improve and excel.
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm">
      <img 
        src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/671274736c43c97f2c6ca9af_tabler_user-filled.svg"
        />
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
          <div className="w-6 h-6" style={{backgroundImage: "url('/placeholder.svg?height=24&width=24')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
        </div>
        <div className="mb-4 text-xl font-medium text-gray-900">
          Customer-Centricity
        </div>
        <div className="text-gray-500 leading-relaxed">
          We are committed to delivering high-quality products and services, constantly seeking ways to improve and excel.
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm">
      <img 
        src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/67127473f207e846746cbe6f_ic_baseline-workspace-premium.svg"
        />
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
          <div className="w-6 h-6" style={{backgroundImage: "url('/placeholder.svg?height=24&width=24')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
        </div>
        <div className="mb-4 text-xl font-medium text-gray-900">
          Collaboration
        </div>
        <div className="text-gray-500 leading-relaxed">
          We strive to stay ahead of the curve, continuously enhancing our platform with the latest technologies and features.
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm">
      <img 
        src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/67127473b807dbb72afbbb6b_basil_bag-solid.svg"
        />
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
          <div className="w-6 h-6" style={{backgroundImage: "url('/placeholder.svg?height=24&width=24')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
        </div>
        <div className="mb-4 text-xl font-medium text-gray-900">
          Rock-Solid Reliability
        </div>
        <div className="text-gray-500 leading-relaxed">
          We strive to stay ahead of the curve, continuously enhancing our platform with the latest technologies and features.
        </div>
      </div>
    </div>
    </div>
</section>
<section>
<div className="bg-[#2A2B2A] rounded-[32px] px-8 py-8 md:py-12 flex flex-col items-center text-center max-w-7xl mx-auto">
  <div className="inline-flex items-center gap-2 bg-white rounded-full pl-3 pr-4 py-1.5 mb-12">
    <span className="bg-[#E97458] text-white text-sm font-medium px-2 py-0.5 rounded-full">
      New
    </span>
    <span className="text-black text-sm">
      Connect and Grow with Clikup
    </span>
  </div>

  <h1 className="text-4xl md:text-6xl font-medium text-white max-w-4xl mb-6">
    Start building stronger{' '}
    <span className="text-[#E97458]">connections</span>
  </h1>

  <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12">
    Sign up today for a free trial and see how Clikup can transform your business.
  </p>

  <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors">
    Get Started
  </button>
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
};

export default AboutUs;
