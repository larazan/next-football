import React from 'react'

const Breadcrumb = () => {
  return (
    <>
        <section className="py-2 bg-[#f5f7f9] md:py-4 md:text-sm w-full">
        <div className="grid-container2 px-0 lg:px-0 mx-auto w-11/12">
          <nav aria-label="breadcrumbs">
            <div className="relative w-full">
              
              <ul className="scrollbar-fix flex flex-row flex-nowrap justify-start overflow-x-scroll no-scrollbar">
                <li className="">
                  <a
                    className="whitespace-nowrap text-sm font-semibold hover:underline text-black text-[11px] uppercase leading-3 tracking-[2px] opacity-70"
                    href="/"
                  >
                    Product
                  </a>
                </li>
                
                
                <li className='before:inline before:px-1 before:text-sm before:content-[">"] text-black text-[11px] font-medium uppercase leading-3 tracking-[2px] opacity-70'>
                  <a
                    className="whitespace-nowrap text-sm font-semibold hover:underline text-black text-[11px] uppercase leading-3 tracking-[2px] opacity-70"
                    href="/"
                  >
                    Jersey
                  </a>
                </li>

                <li className='before:inline before:px-1 before:text-sm before:content-[">"] text-black text-[11px] font-medium uppercase leading-3 tracking-[2px] opacity-70'>
                  <a
                    className="whitespace-nowrap text-sm font-semibold hover:underline text-black text-[11px] uppercase leading-3 tracking-[2px] opacity-70"
                    href="/"
                  >
                    Home Jersey 
                  </a>
                </li>
                
              </ul>
              
            </div>
          </nav>
        </div>
      </section>
    </>
  )
}

export default Breadcrumb