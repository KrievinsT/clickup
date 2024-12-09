import React from 'react';
import { Link } from 'react-router-dom'; 

function Features() {
  return (
    <>
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
            <Link to="/features" className="text-gray-600 hover:text-orange-500">Features</Link>
            <Link to="Pricing" className="text-gray-600 hover:text-orange-500">Pricing</Link>
            <a href="#" className="text-gray-600 hover:text-orange-500">About Us</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Blog</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Cart (0)</a>
          </nav>
          <button className="hidden md:inline-flex px-4 py-2 border border-gray-300 bg-white rounded-full hover:bg-orange-500">
            Get Started
          </button>
        </div>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2">
          <span className="rounded-full bg-[#FF7A5C] px-2 py-0.5 text-sm font-medium text-white">
            New
          </span>
          <span className="text-sm">Connect and Grow with Clickup</span>
        </div>

        <h1 className="max-w-4xl text-5xl font-medium leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Powerful features built for small{' '}
          <span className="text-[#FF7A5C]">businesses</span>
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Manage it all with a fully customizable, no code platform
        </p>

        <div className="mt-12 flex justify-center space-x-4">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="h-12 w-12 overflow-hidden rounded-full border-2 border-white"
            >
              <img
                src={`https://randomuser.me/api/portraits/men/${index}.jpg`} 
                alt={`User ${index}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-xl font-medium text-[#FF7A5C]">4.9/5.0</span>
          <span className="text-gray-600">Rated by +100,000 users</span>
        </div>
      </main>

      <section className="relative w-full h-[600px] mt-12">
        <div className="flex justify-center items-center space-x-4">
          <img
            src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e1d2ede56f7d5d4063508_Frame%201000002315.webp"
            alt="First"
            className="w-[300px] h-auto"
          />
          <img
            src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670d4ea093014d9b49e4e808_Frame%201000002314-p-500.webp"
            alt="Third"
            className="w-[300px] h-auto relative -top-10"
          />
          <img
            src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e1d2e2a315ffbe8ac1b6a_Frame%201000002316.webp"
            alt="Fourth"
            className="w-[300px] h-auto"
          />
        </div>
      </section>

      <section>
        <div className="min-h-screen bg-white p-8 md:p-16 flex items-center justify-center">
          <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-16">
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-2">
                <div className="bg-[#FF7A5C] text-white px-4 py-1 rounded-full text-sm">Clikup</div>
                <div className="text-sm">Send bills</div>
              </div>

              <div className="space-y-4">
                <div className="text-5xl md:text-6xl font-medium">
                  Create and send <span className="text-[#FF7A5C]">bills</span>
                </div>
                <div className="text-gray-500">Send bills more revenue for you</div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                    <img
                    src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e766cbcd1b78e3ff15f0e_icon-park-solid_check-one%20(1).svg"
                    />
                  </div>
                  <div className="text-xl">Secure and simple online payments</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                  <img
                    src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e766cbcd1b78e3ff15f0e_icon-park-solid_check-one%20(1).svg"
                    />
                  </div>
                  <div className="text-xl">Payment timelines and alerts</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                  <img
                    src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e766cbcd1b78e3ff15f0e_icon-park-solid_check-one%20(1).svg"
                    />
                  </div>
                  <div className="text-xl">Automatically saved item catalog</div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <img
                src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670d4ea093014d9b49e4e808_Frame%201000002314.webp"
                alt="Invoice Preview"
                className="w-[325px] h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="min-h-screen bg-white p-8 md:p-16 flex items-center justify-center">
  <div className="w-full max-w-[1200px] flex flex-col lg:flex-row-reverse gap-16">
    <div className="flex-1 space-y-8">
      <div className="flex items-center gap-2">
        <div className="bg-[#FF7A5C] text-white px-4 py-1 rounded-full text-sm">Clikup</div>
        <div className="text-sm">Agreements</div>
      </div>

      <div className="space-y-4">
        <div className="text-5xl md:text-6xl font-medium">
          Create and send <span className="text-[#FF7A5C]">Agreements</span>
        </div>
        <div className="text-gray-500">Agreements elegant and versatile</div>
      </div>

      <div className="space-y-8">

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border flex items-center justify-center">
          <img
                    src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e766cbcd1b78e3ff15f0e_icon-park-solid_check-one%20(1).svg"
                    />
          </div>
          <div className="text-xl">Combine invoice, contract, and payment</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border flex items-center justify-center">
          <img
                    src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e766cbcd1b78e3ff15f0e_icon-park-solid_check-one%20(1).svg"
                    />
          </div>
          <div className="text-xl">Easy 1-2-3 client booking</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border flex items-center justify-center">
          <img
            src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e766cbcd1b78e3ff15f0e_icon-park-solid_check-one%20(1).svg"
            />
          </div>
          <div className="text-xl">Customized branding</div>
        </div>
      </div>
    </div>

    <div className="flex-1 flex justify-center">
      <img
        src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e88d90c62cfbf70ce4311_Frame%201000002317.webp"
        alt="Invoice Preview"
        className="w-[325px] h-auto rounded-xl shadow-lg"
      />
    </div>
  </div>
</div>
      </section>
      <section>
      <div className="min-h-screen bg-white p-8 md:p-16 flex items-center justify-center">
          <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-16">
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-2">
                <div className="bg-[#FF7A5C] text-white px-4 py-1 rounded-full text-sm">Clikup</div>
                <div className="text-sm">Schedule</div>
              </div>

              <div className="space-y-4">
                <div className="text-5xl md:text-6xl font-medium">
                Arrange and <span className="text-[#FF7A5C]">schedule</span>
                </div>
                <div className="text-gray-500">Scheduling more revenue for you</div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                    <img
                    src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e766cbcd1b78e3ff15f0e_icon-park-solid_check-one%20(1).svg"
                    />
                  </div>
                  <div className="text-xl">Share your meeting link and secure bookings</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                  <img
                    src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e766cbcd1b78e3ff15f0e_icon-park-solid_check-one%20(1).svg"
                    />
                  </div>
                  <div className="text-xl">Completely customized to fit your brand</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                  <img
                    src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e766cbcd1b78e3ff15f0e_icon-park-solid_check-one%20(1).svg"
                    />
                  </div>
                  <div className="text-xl">Automatic confirmations and reminders</div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <img
                src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e1d2ede56f7d5d4063508_Frame%201000002315.webp"
                alt="Invoice Preview"
                className="w-[325px] h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="min-h-screen bg-white p-8 md:p-16 flex items-center justify-center">
  <div className="w-full max-w-[1200px] flex flex-col lg:flex-row-reverse gap-16">
    <div className="flex-1 space-y-8">
      <div className="flex items-center gap-2">
        <div className="bg-[#FF7A5C] text-white px-4 py-1 rounded-full text-sm">Clikup</div>
        <div className="text-sm">Automation</div>
      </div>

      <div className="space-y-4">
        <div className="text-5xl md:text-6xl font-medium">
          Streamline your <span className="text-[#FF7A5C]">workflows</span>
        </div>
        <div className="text-gray-500">Automation productivity on overdrive</div>
      </div>

      <div className="space-y-8">

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border flex items-center justify-center">
          <img
                    src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e766cbcd1b78e3ff15f0e_icon-park-solid_check-one%20(1).svg"
                    />
          </div>
          <div className="text-xl">CCustom step-by-step workflows</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border flex items-center justify-center">
          <img
                    src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e766cbcd1b78e3ff15f0e_icon-park-solid_check-one%20(1).svg"
                    />
          </div>
          <div className="text-xl">Automate emails, tasks, and more</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border flex items-center justify-center">
          <img
            src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e766cbcd1b78e3ff15f0e_icon-park-solid_check-one%20(1).svg"
            />
          </div>
          <div className="text-xl">Save time and mental effort</div>
        </div>
      </div>
    </div>

    <div className="flex-1 flex justify-center">
      <img
        src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e88d93b3c0c86503aa482_Frame%201000002318.webp"
        alt="Invoice Preview"
        className="w-[325px] h-auto rounded-xl shadow-lg"
      />
    </div>
  </div>
</div>
      </section>
      <section>
      <div className="min-h-screen bg-white p-8 md:p-16 flex items-center justify-center">
          <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-16">
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-2">
                <div className="bg-[#FF7A5C] text-white px-4 py-1 rounded-full text-sm">Clikup</div>
                <div className="text-sm">Projects</div>
              </div>

              <div className="space-y-4">
                <div className="text-5xl md:text-6xl font-medium">
                Oversee <span className="text-[#FF7A5C]">projects</span>
                </div>
                <div className="text-gray-500">Projects simpler, smarter business</div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                    <img
                    src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e766cbcd1b78e3ff15f0e_icon-park-solid_check-one%20(1).svg"
                    />
                  </div>
                  <div className="text-xl">Secure and simple online payments</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                  <img
                    src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e766cbcd1b78e3ff15f0e_icon-park-solid_check-one%20(1).svg"
                    />
                  </div>
                  <div className="text-xl">Payment timelines and alerts</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                  <img
                    src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e766cbcd1b78e3ff15f0e_icon-park-solid_check-one%20(1).svg"
                    />
                  </div>
                  <div className="text-xl">Automatically saved item catalog</div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <img
                src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670e1d2e2a315ffbe8ac1b6a_Frame%201000002316.webp"
                alt="Invoice Preview"
                className="w-[325px] h-auto rounded-xl shadow-lg"
              />
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
    </>
  );
}

export default Features;
