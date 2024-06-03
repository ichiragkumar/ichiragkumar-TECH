
import Blog1 from "../../assets/home/blog1.png"
import Blog2 from "../../assets/home/edgedb.png"
import Blog3 from "../../assets/home/nextjs.png"
import Blog4 from "../../assets/home/supbase.png"
import Blog5 from "../../assets/home/flutter.jpg"
import Blog6 from "../../assets/home/autofetching.jpeg"
const Recommended = () => {
  return (
    <div className="grid grid-cols-2 grid-flow-rows gap-4 mr-4">
       
    <div className="max-w-sm bg-[#212020] border border-gray-600 rounded-lg shadow-md dark:bg-[#212020] dark:border-gray-700 hover:border-white">
        
            <img className="rounded-t-lg" src={Blog1} alt="" />
       
        <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Typescript</h5>
            <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale</p>
            <a href="https://helpichirag.hashnode.dev/typescript" target="_blank" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#E54A08] rounded-lg hover:bg-[#f5703bf9] focus:ring-4 focus:outline-none">
                Read more
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>

    <div className="max-w-sm bg-[#212020] border border-gray-600 rounded-lg shadow-md dark:bg-[#212020] dark:border-gray-700 hover:border-white">
        
            <img className="rounded-t-lg" src={Blog4} alt="" />
     
        <div className="p-5">
           
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">React with Supabase</h5>
          
            <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">Supabase is an open source Firebase alternative.
Start your project with a Postgres database, Authentication.</p>
            <a href="https://helpichirag.hashnode.dev/setting-up-react-with-supabase" target="_blank" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#E54A08] rounded-lg hover:bg-[#f5703bf9] focus:ring-4 focus:outline-none">
                Read more
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>

    <div className="max-w-sm bg-[#212020] border border-gray-600 rounded-lg shadow-md dark:bg-[#212020] dark:border-gray-700 hover:border-white">
       
            <img className="rounded-t-lg" src={Blog2} alt="" />
      
        <div className="p-5">
           
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">EdgeDB</h5>
        
            <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">EdgeDB is the next-generation object-relational database</p>
            <a href="https://helpichirag.hashnode.dev/edgedb" target="_blank" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#E54A08] rounded-lg hover:bg-[#f5703bf9] focus:ring-4 focus:outline-none">
                Read more
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>



    <div className="max-w-sm bg-[#212020] border border-gray-600 rounded-lg shadow-md dark:bg-[#212020] dark:border-gray-700 hover:border-white">
            <img className="rounded-t-lg" src={Blog3} alt="" />
        <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">NextJS</h5>
          
            <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">The React Framework for the Web -A Full Stack Framework</p>
            <a href="https://helpichirag.hashnode.dev/nextjs-101" target="_blank" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#E54A08] rounded-lg hover:bg-[#f5703bf9] focus:ring-4 focus:outline-none">
                Read more
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>

    <div className="max-w-sm bg-[#212020] border border-gray-600 rounded-lg shadow-md dark:bg-[#212020] dark:border-gray-700 hover:border-white">
            <img className="rounded-t-lg w-full "  src={Blog5}  alt="" />
        <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Flutter</h5>
          
            <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">How to create Fullstate widget in flutter manually</p>
            <a href="https://helpichirag.hashnode.dev/how-to-create-fullstate-widget-in-flutter-manually" target="_blank" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#E54A08] rounded-lg hover:bg-[#f5703bf9] focus:ring-4 focus:outline-none">
                Read more
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>

    <div className="max-w-sm bg-[#212020] border border-gray-600 rounded-lg shadow-md dark:bg-[#212020] dark:border-gray-700 hover:border-white">
            <img className="rounded-t-lg" src={Blog6} alt="" />
        <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">AutoFetching in React</h5>
          
            <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">AutoFetching with custom Hook in React</p>
            <a href="https://helpichirag.hashnode.dev/nextjs-101" target="_blank" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#E54A08] rounded-lg hover:bg-[#f5703bf9] focus:ring-4 focus:outline-none">
                Read more
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
  
</div>
  )
}

export default Recommended
