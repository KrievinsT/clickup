import React from "@heroicons/react";
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <header className="border-b">
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
                        <Link to="Features" className="text-gray-600 hover:text-orange-500">Features</Link>
                        <Link to="Pricing" className="text-gray-600 hover:text-orange-500">Pricing</Link>
                        <Link to="AboutUs" className="text-gray-600 hover:text-orange-500">About Us</Link>
                        <Link to="Blog" className="text-gray-600 hover:text-orange-500">Blog</Link>
                        <a href="#" className="text-gray-600 hover:text-orange-500">Cart (0)</a>
                    </nav>
                    <button className="hidden md:inline-flex px-4 py-2 border border-gray-300 bg-white rounded-full hover:bg-orange-500">
                        Get Started
                    </button>
                </div>
            </header>
            <main>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between p-12 bg-white">
                    {/* Left Section */}
                    <div className="lg:w-2/3 lg:pr-12">
                        <div className="inline-block mb-6">
                            <span className="bg-[#FF7A59] text-white text-base font-medium px-4 py-1 rounded">New</span>
                            <span className="ml-4 text-lg text-gray-600">Connect and Grow with Clikup</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                            How did Clikup get
                            <span className="text-[#FF7A59]"> started ?</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-12">
                            It started with collaboration, communication, rapid growth, and full transparency—working just the way we wanted
                        </p>
                        <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-lg font-semibold text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">
                            Get Started for free
                        </button>
                        <span className="text-2xl font-bold text-orange-500 mt-4 block">100+</span>
                        <span className="text-base text-gray-500">Articles for you</span>
                    </div>

                    {/* Right Section */}
                    <div className="lg:w-1/3 mt-8 lg:mt-0 flex flex-col bg-white hover:bg-orange-500 transition duration-300 rounded-lg shadow-md p-4 lg:ml-8">
                        <img
                            src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f7be/67162d64b19e508876c5c00f_Frame%201000002328.webp"
                            alt="Project Overview"
                            className="rounded-md"
                        />
                        <h2 className="mt-4 text-base font-semibold text-gray-800 hover:text-white transition duration-300">
                            Maximizing CRM ROI: 7 Strategies for Better Customer Relationships
                        </h2>
                        <p className="mt-2 text-sm text-gray-500 hover:text-white transition duration-300">
                            Implementing a CRM is just the beginning—how you use it determines its success. This blog explores key strategies to get the most out of your CRM investment, from automating workflows to creating data-driven marketing campaigns.
                        </p>
                        <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-base font-semibold text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">
                            Read More
                        </button>
                    </div>
                </div>
            </main>
            <section>
                <div className="md:w-1/2 mb-12 md:mb-0 mx-auto text-center">
                    <div className="inline-block mb-4">
                        <span className="bg-[#FF7A59] text-white text-sm font-medium px-2.5 py-0.5 rounded">Clickup</span>
                        <span className="ml-2 text-gray-600">Articles</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                        Articles for
                        <span className="text-[#FF7A59]"> you</span>
                    </h1>
                </div>
            </section>

            <section>
    <div className="bg-gray-50 min-h-screen p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:bg-orange-500 transition-colors">
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <div className="bg-white rounded-xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-xl overflow-hidden">
                            <img
                                src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f7be/67162c328f4d3907218e917c_Frame%201000002197.webp"
                                alt="AI Transforming CRM"
                            />
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4">
                    How AI is Transforming CRM: The Future of Customer Relationship Management
                </h2>
                <p className="text-gray-600 mb-8">
                    AI is making CRM smarter, more intuitive, and incredibly powerful. This blog delves into how AI integrations are transforming customer relationships, from personalized marketing to predictive customer insights.
                </p>
                <div className="w-full py-4 bg-gray-100 rounded-full text-gray-800 font-medium hover:bg-gray-200 transition-colors text-center cursor-pointer">
                    Read Now
                </div>
            </div>

            {/* Right Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:bg-orange-500 transition-colors">
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <div className="bg-white rounded-xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-xl overflow-hidden">
                            <img
                                src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f7be/67162c8569621e2026560774_Frame%201000002324.webp"
                                alt="AI Transforming CRM"
                            />
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4">
                    How AI is Transforming CRM: The Future of Customer Relationship Management
                </h2>
                <p className="text-gray-600 mb-8">
                    AI is making CRM smarter, more intuitive, and incredibly powerful. This blog delves into how AI integrations are transforming customer relationships, from personalized marketing to predictive customer insights.
                </p>
                <div className="w-full py-4 bg-gray-100 rounded-full text-gray-800 font-medium hover:bg-gray-200 transition-colors text-center cursor-pointer">
                    Read Now
                </div>
            </div>

            {/* New Left Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:bg-orange-500 transition-colors">
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <div className="bg-white rounded-xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-xl overflow-hidden">
                        <img
                                src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f7be/67162cd7f4c1138196e796c7_Frame%201000002325.webp"
                                alt="AI Transforming CRM"
                            />
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4">
                Omnichannel CRM: Delivering Consistent Customer Experiences Across Platforms
                </h2>
                <p className="text-gray-600 mb-8">
                Customers today interact with businesses across multiple channels, from social media to email. This blog explores the importance of omnichannel CRM solutions and how they help businesses deliver a consistent, seamless customer experience.
                </p>
                <div className="w-full py-4 bg-gray-100 rounded-full text-gray-800 font-medium hover:bg-gray-200 transition-colors text-center cursor-pointer">
                    Read Now
                </div>
            </div>

            {/* New Right Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:bg-orange-500 transition-colors">
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <div className="bg-white rounded-xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-xl overflow-hidden">
                        <img
                                src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f7be/67162d0b6571b8a7f411eecd_Frame%201000002326.webp"
                                alt="AI Transforming CRM"
                            />
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4">
                Top CRM Metrics Every Business Should Track for Success
                </h2>
                <p className="text-gray-600 mb-8">
                Data is only valuable if it’s used effectively. This blog outlines the top CRM metrics businesses should track to measure success and improve decision-making, from customer retention rates to sales cycle lengths.
                </p>
                <div className="w-full py-4 bg-gray-100 rounded-full text-gray-800 font-medium hover:bg-gray-200 transition-colors text-center cursor-pointer">
                    Read Now
                </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:bg-orange-500 transition-colors">
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <div className="bg-white rounded-xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-xl overflow-hidden">
                        <img
                                src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f7be/67162d39b19e508876c5984c_Frame%201000002327%20(1).webp"
                                alt="AI Transforming CRM"
                            />
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4">
                Integrating CRM with Marketing Automation: A Game-Changer for Growth
                </h2>
                <p className="text-gray-600 mb-8">
                Marketing automation and CRM integration is a powerful combination for growing your business. This blog discusses how integrating these two systems can help you create personalized campaigns, nurture leads, and close more sales.
                </p>
                <div className="w-full py-4 bg-gray-100 rounded-full text-gray-800 font-medium hover:bg-gray-200 transition-colors text-center cursor-pointer">
                    Read Now
                </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:bg-orange-500 transition-colors">
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <div className="bg-white rounded-xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-xl overflow-hidden">
                        <img
                                src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f7be/67162d64b19e508876c5c00f_Frame%201000002328.webp"
                                alt="AI Transforming CRM"
                            />
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold mb-4">
                Maximizing CRM ROI: 7 Strategies for Better Customer Relationships
                </h2>
                <p className="text-gray-600 mb-8">
                Implementing a CRM is just the beginning—how you use it determines its success. This blog explores key strategies to get the most out of your CRM investment, from automating workflows to creating data-driven marketing campaigns.
                </p>
                <div className="w-full py-4 bg-gray-100 rounded-full text-gray-800 font-medium hover:bg-gray-200 transition-colors text-center cursor-pointer">
                    Read Now
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

export default Blog;
