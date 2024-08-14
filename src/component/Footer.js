import { Email, GitHub, Instagram, LinkedIn } from "@mui/icons-material";

export default function Footer(){
  return (
    <footer className="bg-black-400 text-white py-8 text-opacity-60">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-4">
          {/* Social Media Links */}
          <div className="mb-4">
            <a href="https://www.linkedin.com/in/ketsebaot-ertumo" className=" mx-2" aria-label="LinkedIn">
              <LinkedIn/>
            </a>
            <a href="https://github.com/ketsebaot-ertumo" className="text-gray-400 hover:text-gray-300 mx-2" aria-label="GitHub">
              <GitHub/>
            </a>
            <a href="mailto:ertumoketsebaot@gmail.com" className=" mx-2" aria-label="Email">
              <Email/>
            </a>
            <a href="https://www.instagram.com/e_ketsebaot" className=" mx-2" aria-label="Instagram">
              <Instagram/>
            </a>
          </div>

          <p className="text-sm mb-4">
            &copy; {new Date().getFullYear()} Ketsebaot Ertumo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

  // export default function Footer(){
  //   return(
  //       <>
  //           <div className="bg-black-400 text-center sm:text-right text-white text-opacity-40 md:text-sm font-normal sm:pr-20 py-4 sm:py-5">
  //               <p>&copy; {new Date().getFullYear()} Ketsebaot Ertumo. All rights reserved.</p>
  //           </div>
  //       </>
  //   )
  // }