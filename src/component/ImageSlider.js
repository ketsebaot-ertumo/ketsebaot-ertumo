import React, { useRef, useEffect, useState } from 'react';

// Dummy image imports
import react from "../images/react.png";
import reactNative from "../images/reactNative.png";
import node from "../images/node.png";
import java from "../images/java.png";
import cplusplus from "../images/c++.png";
import next from "../images/next.png";
// import typeScript from "../images/typescript.jpeg";
import postgreSQL from '../images/postgreSQL.png';
import mongoDB from '../images/mongodb.png';
import mariaDB from '../images/mariaDB.png';
import graphQL from '../images/graphQL.png';

const ImageSlider = () => {
    const containerRef = useRef(null);
    const [isLeftDisabled, setIsLeftDisabled] = useState(true);
    const [isRightDisabled, setIsRightDisabled] = useState(false);

    const images = [
        cplusplus, java, node, react, reactNative, next,
        postgreSQL, mongoDB, mariaDB, graphQL
    ];
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
            handleScroll(); // Set initial state
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [images.length]);

    return (
        <div className="relative">
            <div className='absolute left-0 top-0 bg-black-400 w-10 md:w-40 h-full'></div>
            {!isLeftDisabled && (
                <button
                className="absolute left-2 md:left-20 top-1/2 transform -translate-y-1/2 bg-black-300 px-5 py-3 rounded-full"
                onClick={scrollLeft}
            >
                &lt;
            </button>
            )}
            <div ref={containerRef} className="flex gap-5 overflow-x-auto scrollbar-hide pl-8 py-10 md:pl-40 w-[360px] sm:w-[372px] h-[150px] md:w-[1200px] md:h-[250px]">
                {images.map((src, i) => (
                    <img key={i} src={src} alt="" className="object-cover" />
                ))}
            </div>
            {!isRightDisabled && (
                <button
                    className="absolute right-2 md:right-[-80px] top-1/2 transform -translate-y-1/2 bg-black-300 px-5 py-3 rounded-full"
                    onClick={scrollRight}
                >
                    &gt;
                </button>
            )}
        </div>
    );
};

export default ImageSlider;









// import React, { useState, useRef } from 'react';

// // Dummy image imports
// import react from "../images/react.png";
// import reactNative from "../images/reactNative.png";
// import node from "../images/node.png";
// import java from "../images/java.png";
// import cplusplus from "../images/c++.png";
// import next from "../images/next.png";
// // import typeScript from "../images/typescript.jpeg";
// import postgreSQL from '../images/postgreSQL.png';
// import mongoDB from '../images/mongodb.png';
// import mariaDB from '../images/mariaDB.png';
// import graphQL from '../images/graphQL.png';

// const ImageSlider = () => {
//     const [index, setIndex] = useState(0);
//     const containerRef = useRef(null);
//     const images = [
//         cplusplus, java, node, react, reactNative, next,
//         postgreSQL, mongoDB, mariaDB, graphQL
//     ];

//     const scrollLeft = () => {
//         if (index > 0) {
//             setIndex(index - 1);
//             console.log('left index, +', index);
//             containerRef.current.scrollBy({ left: -290, behavior: 'smooth' });
//         }
//     };

//     const scrollRight = () => {
//         if (index < images.length - 1) {
//             setIndex(index + 1);
//             console.log('right index, +', index);
//             containerRef.current.scrollBy({ left: 290, behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className="relative w-[1200px] h-[260px]">
//             <div className='absolute left-o top-0 bg-black-400 w-40 h-full'></div>
//             <button
//                 className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-black-300 px-5 py-3 rounded-full"
//                 onClick={scrollLeft}
//                 disabled={index === 0}
//             >
//                 &lt;
//             </button>
//             <div ref={containerRef} className="flex gap-5 overflow-x-auto scrollbar-hide py-10 pl-40 w-[1200px] h-[250px]">
//                 {images.map((src, i) => (
//                     <img key={i} src={src} alt="" className="object-cover" />
//                 ))}
//             </div>
//             <button
//                 className="absolute right-[-80px] top-1/2 transform -translate-y-1/2 bg-black-300 px-5 py-3 rounded-full"
//                 onClick={scrollRight}
//                 disabled={index === images.length - 1}
//             >
//                 &gt;
//             </button>
//         </div>
//     );
// };

// export default ImageSlider;
