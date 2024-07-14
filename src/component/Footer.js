  
  export default function Footer(){
    return(
        <>
            <div className="bg-black-500 text-center sm:text-right text-white text-opacity-40 md:text-md font-normal sm:pr-20 py-4 sm:py-5">
                <p>© <span>{new Date().getFullYear()}</span> Ketsebaot Ertumo. All rights reserved.</p>
            </div>
        </>
    )
  }