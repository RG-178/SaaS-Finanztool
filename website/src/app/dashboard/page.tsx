'use client';

import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('sidebar-closed');
    } else {
      document.body.classList.remove('sidebar-closed');
    }
  }, [isSidebarOpen]);

  return (
    <div className="flex bg-[#f4f3ef]">
        <div className="flex flex-col w-[260px] h-[100vh]" style={{ background: 'linear-gradient(#66615b,#000 80%)' }}>
            <div className="flex items-center h-[63px] p-[7px .7rem] gap-[16px]">
                <img src="./icon.png" className="ml-[22px]" alt="" width={36} height={36} />
                <h1>FLORLIX</h1>
            </div>
            <div className="flex justify-center p-[0 .7rem]">
                <div className="h-[1px] w-[calc(100%-1.4rem)] bg-white"></div>
            </div>
            <div className="flex flex-col">
              <div>

              </div>
              <div className="flex justify-center p-[0 .7rem]">
                  <div className="h-[1px] w-[calc(100%-1.4rem)] bg-white"></div>
              </div>
            </div>
        </div>
        <div className="flex flex-col w-[calc(100%-260px)] h-[100vh]">
          <div className="flex border-b border-gray-300 w-full h-[63px]">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              Toggle Sidebar
            </button>
          </div>
        </div>
    </div>
  );
}