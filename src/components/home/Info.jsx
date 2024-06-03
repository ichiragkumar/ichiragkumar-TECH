

const Info = () => {
  return (
    <div className="text-white ml-80 mt-6">
      <h1 className="text-6xl font-semibold">Everything <br/>
       related to tech <br/>
       in one place.</h1> 
       
    <h2 className="text-gray-400 mt-3 text-xl">Navigate the ever-evolving tech landscape<br/>
     effortlessly with the perfect hub to stay<br/>
      informed.
    </h2>

    <div className="flex justify-start">
        <div className="flex justify-between px-8  py-3 bg-[#E54A08] p-2 rounded-md  mt-4 hover:bg-[#f5703bf9] cursor-pointer">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="25" height="25"><path fill="#FAFAFA" d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"/></svg>
            </div>
            <div className="ml-2 font-semibold">About Me</div>
        </div>
        <div className="flex px-10 py-3 justify-between ml-8 bg-[#212020] p-2 rounded-md font-medium mt-4 hover:bg-[#131212] cursor-pointer">
            <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="25" height="25"><path fill="#FFFFFF" d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"/></svg></div>
            <div className="ml-2 font-semibold">Blogs</div>
        </div>
    </div>
    </div>



    
  )
}

export default Info
