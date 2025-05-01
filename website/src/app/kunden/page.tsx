'use client';

import { useEffect, useState } from 'react';

import './style.css';

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsSidebarOpen(sessionStorage.getItem('sidebar') === 'true' || false);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('sidebar-closed');
      sessionStorage.setItem('sidebar', 'false');
    } else {
      document.body.classList.remove('sidebar-closed');
      sessionStorage.setItem('sidebar', 'true');
    }
  }, [isSidebarOpen]);

  return (
    <div className="flex bg-[#f4f3ef]">
        <div className="sidebar flex flex-col h-[100vh] overflow-hidden" style={{ background: 'linear-gradient(#66615b,#000 80%)' }}>
            <a href="/" className="flex items-center h-[63px] p-[7px .7rem] gap-[16px]">
                <img src="./icon.png" className="icon ml-[22px]" alt="" width={32} height={32} />
                <span className='text font-bold tracking-wider'>FLORLIX</span>
            </a>
            <div className="flex justify-center">
                <div className="h-[1px] w-[calc(100%-1.4rem)] bg-[rgba(255,255,255,0.5)]"></div>
            </div>
            <div className="flex flex-col">
              <a href="/profil" className='flex items-center gap-[12px] pt-[20px] pb-[20px] cursor-pointer'>
                <svg className="ml-[22px] min-w-[32px] min-h-[32px] size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="rgba(255,255,255,1)" ><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                <span className='text whitespace-nowrap overflow-hidden'>Mein Profil</span>
              </a>
              <div className="flex justify-center">
                  <div className="h-[1px] w-[calc(100%-1.4rem)] bg-[rgba(255,255,255,0.3)]"></div>
              </div>
            </div>
            <a href="/dashboard" className='flex items-center gap-[12px] pt-[20px] pb-[20px] cursor-pointer text-[rgba(255,255,255,0.6)] hover:text-[rgba(255,255,255,1)] transition-colors duration-300 ease-in-out'>
              <svg className="ml-[22px] min-w-[28px] min-h-[28px] size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
              <span className='text whitespace-nowrap overflow-hidden text-[14px] font-bold'>DASHBOARD</span>
            </a>
            <a href="/kunden" className='flex items-center gap-[12px] pt-[20px] pb-[20px] cursor-pointer text-[#00a2a2] transition-colors duration-300 ease-in-out'>
              <svg className="ml-[22px] min-w-[28px] min-h-[28px] size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>
              <span className='text whitespace-nowrap overflow-hidden text-[14px] font-bold'>KUNDEN</span>
            </a>
            <a href="/rechnungen" className='flex items-center gap-[12px] pt-[20px] pb-[20px] cursor-pointer text-[rgba(255,255,255,0.6)] hover:text-[rgba(255,255,255,1)] transition-colors duration-300 ease-in-out'>
              <svg className="ml-[22px] min-w-[28px] min-h-[28px] size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
              <span className='text whitespace-nowrap overflow-hidden text-[14px] font-bold'>RECHNUNGEN</span>
            </a>
            <a href="/finanzen" className='flex items-center gap-[12px] pt-[20px] pb-[20px] cursor-pointer text-[rgba(255,255,255,0.6)] hover:text-[rgba(255,255,255,1)] transition-colors duration-300 ease-in-out'>
              <svg className="ml-[22px] min-w-[28px] min-h-[28px] size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" /></svg>
              <span className='text whitespace-nowrap overflow-hidden text-[14px] font-bold'>FINANZEN</span>
            </a>
            <a href="/einstellungen" className='flex items-center gap-[12px] pt-[20px] pb-[20px] cursor-pointer text-[rgba(255,255,255,0.6)] hover:text-[rgba(255,255,255,1)] transition-colors duration-300 ease-in-out'>
              <svg className="ml-[22px] min-w-[28px] min-h-[28px] size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
              <span className='text whitespace-nowrap overflow-hidden text-[14px] font-bold'>EINSTELLUNGEN</span>
            </a>
        </div>
        <div className="flex flex-col h-[100vh] content">
          <div className="flex items-center border-b border-gray-300 w-full h-[63px] pl-[31px] pr-[31px]">
            <button className='flex items-center justify-center bg-[#66615b] w-[38px] h-[38px] rounded-full cursor-pointer mr-[10px]' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" ><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
              )}
            </button>
            <h1 className='text-[rgba(0,0,0,1)]'>Kunden</h1>
            <div className='flex ml-auto bg-[rgba(222,222,222,0.3)] mr-[15.2px] transition-colors duration-300 ease-in-out rounded-[4px] searching'>
              <input type="text" placeholder='Search...' className='p-[11px] h-[40px] w-[170px] text-[#66615b] !outline-none' onFocus={() => {document.querySelector('.searching')?.classList.remove('bg-[rgba(222,222,222,0.3)]'); document.querySelector('.searching')?.classList.add('bg-[rgba(222,222,222,0.5)]')}} onBlur={() => {document.querySelector('.searching')?.classList.add('bg-[rgba(222,222,222,0.3)]'); document.querySelector('.searching')?.classList.remove('bg-[rgba(222,222,222,0.5)]')}} />
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#66615b" className="mt-auto mb-auto mr-[8px]"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
            </div>
            <a href='/aktivitäten' className='bell text-[rgba(0,0,0,1)] mr-[4px] pt-[.5rem] pb-[.5rem] pr-[.7rem] pl-[.7rem]'>
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>
            </a>
            <a href='/einstellungen' className='settings text-[rgba(0,0,0,1)] mr-[4px] pt-[.5rem] pb-[.5rem] pr-[.7rem] pl-[.7rem]'>
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
            </a>
          </div>
        </div>
    </div>
  );
}