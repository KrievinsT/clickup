import React from 'react';

const pageSections = [
  {
    id: "tasks",
    title: "Ideas to tasks in seconds",
    content: "Turn ideas into actionable tasks within seconds with Clikup's seamless task management system. No more wasting time organizing, get started instantly.",
  },
  {
    id: "emails",
    title: "Create emails fast",
    content: "Generate and send emails quickly with Clikup's integrated email creation tool. Save time while personalizing your messages and staying in touch with clients.",
  },
  {
    id: "content",
    title: "Generate and summarize content",
    content: "Clikup helps you generate insightful content on the fly and summarize important information, all with the power of AI. Stay ahead of the game without the hassle.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
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
            <a href="#" className="text-gray-600 hover:text-orange-500">Features</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">About Us</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Blog</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Cart (0)</a>
          </nav>
          <button className="hidden md:inline-flex px-4 py-2 border border-gray-300 bg-white rounded-full hover:bg-orange-500">
            Get Started
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <div className="inline-block mb-4">
            <span className="bg-[#FF7A59] text-white text-sm font-medium px-2.5 py-0.5 rounded">New</span>
            <span className="ml-2 text-gray-600">Connect and Grow with Clikup</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Effortless client relationships with
            <span className="text-[#FF7A59]"> Clikup</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">Manage it all with a fully customizable, no-code platform</p>
          <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white text-lg font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">
            Get Started for free
          </button>
        </div>

        <div className="md:w-1/2 flex justify-end items-center relative">
          <div className="relative w-full h-full flex justify-center items-center">
            <img
              src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/670798cc9da98c92e99a7350_Frame%201000002196.webp"
              alt="Client Image"
              className="lazyload w-full max-w-[1200px] sm:max-w-[800px] md:max-w-[500px]"
            />
            {/* Floating images */}
            <img
              src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/67079ce81c28f88fc76b29d9_Frame%201000002280.webp"
              alt="Floating USA Image"
              className="w-[30vw] sm:w-[35vw] md:w-[28vw] lg:w-[22vw] absolute top-[12%] left-1/2 transform -translate-x-1/2"
            />
            <img
              src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/67079cf28c9ac56f0c2a7e19_Frame%201000002018.webp"
              alt="Floating Image Below USA"
              className="w-[30vw] sm:w-[35vw] md:w-[28vw] lg:w-[22vw] absolute top-[30%] left-1/2 transform -translate-x-1/2"
            />
            <img
              src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/67079ce9c0cfebcc24527446_Frame%201000002278.webp"
              alt="Floating Image Below"
              className="w-[30vw] sm:w-[35vw] md:w-[28vw] lg:w-[22vw] absolute top-[77%] left-1/2 transform -translate-x-1/2"
            />
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-full bg-white p-3 shadow-sm">
                <img
                  src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6707ca998f28ae9e6f733a03_ri_headphone-fill.svg"
                  className="w-10 h-10"
                  alt="Customer Insights"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Customer insights</h3>
                <p className="text-gray-600">Analyze customer interactions across touchpoints with the platform.</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-full bg-white p-3 shadow-sm">
                <img
                  src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6707cb8a37f5275c28e7ac37_majesticons_box.svg"
                  className="w-10 h-10"
                  alt="Product Metrics"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Product metrics</h3>
                <p className="text-gray-600">Track your products with performance in real-time.</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-full bg-white p-3 shadow-sm">
                <img
                  src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6707cb8a243c1416b975afb3_material-symbols_campaign-rounded.svg"
                  className="w-10 h-10"
                  alt="Campaign Optimization"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Campaign optimization</h3>
                <p className="text-gray-600">Measure campaign success with key metrics like conversion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section with AI content */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 flex justify-center md:justify-start items-center relative mb-12 md:mb-0">
            <div className="relative w-full h-full flex justify-center items-center">
              <img
                src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6707d03325c55f0079737802_Group%2061.webp"
                alt="AI Content"
                className="w-full max-w-[1200px] sm:max-w-[800px] md:max-w-[500px]"
              />
              <img
                src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6707d23d35e1ad45ec310233_Frame%201000002305.webp"
                alt="New Floating Image"
                className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] max-w-xs h-auto rounded-lg shadow-lg absolute top-[10%] left-[50%] transform -translate-x-1/2"
              />
              <img
                src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6707d23e3538874302488a7e_Frame%201000002304.webp"
                alt="Additional Floating Image"
                className="w-[80%] sm:w-[75%] md:w-[70%] lg:w-[60%] max-w-xs h-auto rounded-lg shadow-lg absolute top-[35%] left-[50%] transform -translate-x-1/2"
              />
            </div>
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-block mb-4">
              <span className="bg-[#FF7A59] text-white text-sm font-medium px-2.5 py-0.5 rounded">Clickup</span>
              <span className="ml-2 text-gray-600">Benefits</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Stay one step ahead with 
              <span className="text-[#FF7A59]"> Ai</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Manage it all with a fully customizable, no-code platform
            </p>
            <div className="grid gap-8">
              {pageSections.map(section => (
                <div key={section.id} className="flex flex-col items-start space-y-4">
                  <h3 className="text-2xl font-bold">{section.title}</h3>
                  <p className="text-gray-600">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 bg-gray-50">
  <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center">
    <div className="inline-block mb-8 text-center">
      <span className="bg-[#FF7A59] text-white text-sm font-medium px-2.5 py-0.5 rounded">
        Clickup
      </span>
      <span className="ml-2 text-gray-600">Adaptable and user-friendly</span>
      <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
      Fit your sales cycle with <span className="text-[#FF7A59]">ease</span>
      </h1>
    </div>

    {/* Image container with overlay */}
    <div className="relative mt-8 w-full max-w-[800px] mx-auto">
      <img
        src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6708e814abb51277c595b3ca_Group%2046895.webp"
        alt="Effortless Automation"
        className="w-full rounded-lg"
      />
      <img
        src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6708e6defc90d5764ad5eda3_Frame%201000002305%20(1).webp"
        alt="Overlay Image"
        className="absolute top-[12%] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[85%] rounded-lg"
      />
    </div>
  </div>
</section>
<section> 
<div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center">
    <div className="inline-block mb-8 text-center">
      <span className="bg-[#FF7A59] text-white text-sm font-medium px-2.5 py-0.5 rounded">
        Clickup
      </span>
      <span className="ml-2 text-gray-600">Manage emails & activities efficiently</span>
      <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
      Efficiently manage client <span className="text-[#FF7A59]">communication</span>
      </h1>
    </div>

    {/* Image container with overlay */}
    <div className="relative mt-8 w-full max-w-[800px] mx-auto">
   <img
      src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6708e814abb51277c595b3ca_Group%2046895.webp"
      alt="Effortless Automation"
      class="resized-image"
    />
    <img
  src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6708ec93e82809f4e1a44acf_Frame%201000002306.webp"
  alt="Overlay Image"
  className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-[80%] sm:w-[75%] rounded-lg"
/>
    </div>
  </div>
</section>
<section>
  <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center">
    <span className="ml-2 text-gray-600">Manage emails & activities efficiently</span>
    <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
      Integrate your favorite tools <span className="text-[#FF7A59]">effortlessly</span>
    </h1>
  </div>

  
  <div className="relative mt-8 w-full max-w-[900px] mx-auto">
   
  <img
      src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6708f040fc90d5764adf1b9d_Frame%201000002312.webp"
      alt="Overlay Image"
      className="w-full rounded-lg resized-image"
    />
    {/* <img
      src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6708e814abb51277c595b3ca_Group%2046895.webp"
      alt="Foreground Image"
      className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-[80%] sm:w-[75%] rounded-lg"
    /> */}


  </div>
</section>

<section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2">
            <span className="bg-[#FF7A59] text-white text-sm font-medium px-3 py-1 rounded">Clikup</span>
            <span className="text-gray-600">Why Clikup</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Why Clikup stands out from the{" "}
            <span className="text-[#FF7A59]">rest</span>
          </h1>
          
          <p className="text-xl text-gray-600">
            Clearly state what makes your CRM unique and better than competitors.
          </p>

          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-4">
              <img
                src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6707ca998f28ae9e6f733a03_ri_headphone-fill.svg"
                alt="Headphone Icon"
                width={40}
                height={40}
                className="mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-900">
                Centralized Customer
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Access all your customer interactions, communications, and data in one place—ensuring every team member is up-to-date.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6707cb8a37f5275c28e7ac37_majesticons_box.svg"
                alt="Box Icon"
                width={40}
                height={40}
                className="mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-900">
                Scale Your Business
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Whether you're a startup or an enterprise, our CRM is designed to grow with you, adapting to your evolving needs.
              </p>
            </div>
          </div>
        </div>

       {/* sana fotene */}
        <div className="relative">
          <img
            src="https://cdn.prod.website-files.com/6706a99d653627fc4a24f79b/6708fa4652d35183ae497b9d_Frame%201000002308.webp"
            alt="Dashboard Preview"
            width={600}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>

    <section className="py-8">
  <div className="flex justify-center items-center p-4">
    <span className="bg-[#FF7A59] text-white text-sm font-medium px-3 py-1 rounded-full mr-2">New</span>
    <span className="text-gray-600">Testimonials</span>
  </div>
  <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center">
    <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
      Integrate your favorite tools <span className="text-[#FF7A59]">effortlessly</span>
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

<section>
    
</section>


    </div>
  );
}
