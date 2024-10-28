import React from 'react';

const Blog6: React.FC = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Card 1 */}
        <a href="#" className="group relative block rounded-xl focus:outline-none">
          <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/70">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </div>

          {/* Top Overlay for Avatar */}
          <div className="absolute top-0 inset-x-0 z-10 p-4 sm:p-6">
            <div className="flex items-center">
              <div className="shrink-0">
                <img
                  className="w-[46px] h-[46px] border-2 border-white rounded-full"
                  src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
              </div>
              <div className="ml-2.5 sm:ml-4">
                <h4 className="font-semibold text-white">Gloria</h4>
                <p className="text-xs text-white/80">Jan 09, 2021</p>
              </div>
            </div>
          </div>

          {/* Bottom Overlay for Text */}
          <div className="absolute bottom-0 inset-x-0 z-10 p-4 sm:p-6">
            <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
              Facebook is creating a news section in Watch to feature breaking news
            </h3>
            <p className="mt-2 text-white/80">Facebook launched the Watch platform in August</p>
          </div>
        </a>
        {/* End Card 1 */}

        {/* Card 2 */}
        <a href="#" className="group relative block rounded-xl focus:outline-none">
          <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/70">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </div>

          {/* Top Overlay for Avatar */}
          <div className="absolute top-0 inset-x-0 z-10 p-4 sm:p-6">
            <div className="flex items-center">
              <div className="shrink-0">
                <img
                  className="w-[46px] h-[46px] border-2 border-white rounded-full"
                  src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
              </div>
              <div className="ml-2.5 sm:ml-4">
                <h4 className="font-semibold text-white">Gloria</h4>
                <p className="text-xs text-white/80">May 30, 2021</p>
              </div>
            </div>
          </div>

          {/* Bottom Overlay for Text */}
          <div className="absolute bottom-0 inset-x-0 z-10 p-4 sm:p-6">
            <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
              What CFR (Conversations, Feedback, Recognition) really is about
            </h3>
            <p className="mt-2 text-white/80">For a lot of people these days, Measure What Matters.</p>
          </div>
        </a>
        {/* End Card 2 */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default Blog6;
