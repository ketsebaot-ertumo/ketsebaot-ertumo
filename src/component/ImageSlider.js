import React, { useRef, useState, useEffect } from 'react';

const ImageSlider = ({ images, backgroundColor, buttonColor }) => {
    const containerRef = useRef(null);
    const [isLeftDisabled, setIsLeftDisabled] = useState(true);
    const [isRightDisabled, setIsRightDisabled] = useState(false);
    // const container = containerRef.current;

    const scrollWidth = 250; // Width to scroll

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -scrollWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: scrollWidth, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (container) {
                const maxScrollLeft = container.scrollWidth - container.clientWidth;
                setIsLeftDisabled(container.scrollLeft <= 0);
                setIsRightDisabled(container.scrollLeft >= maxScrollLeft);
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);

            // // Set initial state
            // const maxScrollLeft = container.scrollWidth - container.clientWidth;
            // setIsRightDisabled(container.scrollLeft >= maxScrollLeft);
            // setIsLeftDisabled(container.scrollLeft <= 0);

            // Trigger handleScroll to set initial states
            setTimeout(handleScroll, 100);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [images.length]);

    return (
        <div className="relative py-5">
            <div className={`absolute left-0 top-0 w-10 md:w-40 h-full ${backgroundColor}`}></div>
            {!isLeftDisabled && (
                <button
                    className={`absolute left-2 md:left-20 top-1/2 transform -translate-y-1/2 px-5 py-3 rounded-full ${buttonColor}`}
                    onClick={scrollLeft}
                >
                    &lt;
                </button>
            )}
            <div ref={containerRef} className="flex gap-5 overflow-x-auto scrollbar-hide pl-8 py-10 md:pl-40 w-[360px] sm:w-[372px] h-[140px] md:w-[1200px] md:h-[240px]">
                {images.map((src, i) => (
                    <img key={i} src={src} alt={`slide ${i}`} className="object-cover" />
                ))}
            </div>
            {!isRightDisabled && (
                <button
                    className={`absolute right-2 md:right-16 top-1/2 transform -translate-y-1/2 px-5 py-3 rounded-full ${buttonColor}`}
                    onClick={scrollRight}
                    // disabled={isRightDisabled}
                >
                    &gt;
                </button>
            )}
        </div>
    );
};

export default ImageSlider;







// import React, { useRef, useEffect, useState } from 'react';

// // Dummy image imports
// import react from "../images/react.png";
// import reactNative from "../images/reactNative.png";
// import node from "../images/node.png";
// import java from "../images/java.png";
// import cplusplus from "../images/c++.png";
// import next from "../images/next.png";
// import typeScript from "../images/typescript.jpeg";
// import postgreSQL from '../images/postgreSQL.png';
// import mongoDB from '../images/mongodb.png';
// import mariaDB from '../images/mariaDB.png';
// import graphQL from '../images/graphQL.png';

// const ImageSlider = () => {
//     const containerRef = useRef(null);
//     const [isLeftDisabled, setIsLeftDisabled] = useState(true);
//     const [isRightDisabled, setIsRightDisabled] = useState(false);

//     const images = [
//         cplusplus, java, node, react, reactNative, next,
//         postgreSQL, mongoDB, mariaDB, graphQL
//     ];
//     const scrollWidth = 250; // Width to scroll

//     const scrollLeft = () => {
//         if (containerRef.current) {
//             containerRef.current.scrollBy({ left: -scrollWidth, behavior: 'smooth' });
//         }
//     };

//     const scrollRight = () => {
//         if (containerRef.current) {
//             containerRef.current.scrollBy({ left: scrollWidth, behavior: 'smooth' });
//         }
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             const container = containerRef.current;
//             if (container) {
//                 const maxScrollLeft = container.scrollWidth - container.clientWidth;
//                 setIsLeftDisabled(container.scrollLeft <= 0);
//                 setIsRightDisabled(container.scrollLeft >= maxScrollLeft);
//             }
//         };

//         const container = containerRef.current;
//         if (container) {
//             container.addEventListener('scroll', handleScroll);
//             handleScroll(); // Set initial state
//         }

//         return () => {
//             if (container) {
//                 container.removeEventListener('scroll', handleScroll);
//             }
//         };
//     }, [images.length]);

//     return (
//         <div className="relative bg-black-300 py-5">
//             <div className='absolute left-0 top-0 bg-black-300 w-10 md:w-40 h-full flex inline-block'></div>
//             {!isLeftDisabled && (
//                 <button
//                 className="absolute left-2 md:left-20 top-1/2 transform -translate-y-1/2 bg-black-400 px-5 py-3 rounded-full"
//                 onClick={scrollLeft}
//             >
//                 &lt;
//             </button>
//             )}
//             <div ref={containerRef} className="flex gap-5 overflow-x-auto scrollbar-hide pl-8 py-10 md:pl-40 w-[360px] sm:w-[372px] h-[150px] md:w-[1200px] md:h-[250px]">
//                 {images.map((src, i) => (
//                     <img key={i} src={src} alt="" className="object-cover" />
//                 ))}
//             </div>
//             {!isRightDisabled && (
//                 <button
//                     className="absolute right-2 md:right-16 top-1/2 transform -translate-y-1/2 bg-black-400 px-5 py-3 rounded-full"
//                     onClick={scrollRight}
//                 >
//                     &gt;
//                 </button>
//             )}
//         </div>
//     );
// };

// export default ImageSlider;
