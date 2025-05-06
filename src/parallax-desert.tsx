// App.tsx
import React from 'react';
import Parallax from './parallax.tsx';
// import './style.css'; // Assume you have CSS for backgrounds
import './parallax-desert.module.css';

const ParallaxDesert: React.FC = () => {
  return (
    <section id="multi-layered-parallax-desert-body" className="z-0 max-w-[120vw] max-h-[120vh] w-[120vw] h-[120vh] relative desert" >
        {/* <div className={styles.desert}> */}
        <div className="w-[120vw] h-[120vh]">
        <div className="parallax">
          <Parallax moveFactor={6}>
            <div className={`absolute w-[125vw] h-[120vh] right-[0%] bottom-[0%] left-[0%] top-[0%]`}>
              <img
                src='/images/wallpaper-desert-sunset-3k-1.png'
                loading="lazy"
                style={{objectFit: "fill", bottom: "0", right: "0"}}
                alt="desert background layer 1"
              />
            </div>
          </Parallax>
          <Parallax moveFactor={9}>
          <div className={`absolute w-[120vw] h-[120vh] right-[0%] bottom-[0%] left-[0%] top-[0%]`}>
              <img
              
                src='/images/wallpaper-desert-sunset-3k-2.png'
                
                loading="lazy"
                style={{objectFit: "fill", bottom: "0", right: "0"}}
                alt="desert background layer 2"
              />
            </div>
          </Parallax>
          <Parallax moveFactor={12}>
          <div className={`absolute w-[120vw] h-[120vh] right-[0%] bottom-[0%] left-[0%] top-[0%]`}>
              <img
                src='/images/wallpaper-desert-sunset-3k-3.png'
                
                loading="lazy"
                style={{objectFit: "fill", bottom: "0", right: "0"}}
                alt="desert background layer 3"
              />
            </div>
          </Parallax>
          <Parallax moveFactor={15}>
          <div className={`absolute w-[120vw] h-[120vh] right-[0%] bottom-[0%] left-[0%] top-[0%]`}>
              <img
                src='/images/wallpaper-desert-sunset-3k-4.png'
                
                loading="lazy"
                style={{objectFit: "fill", bottom: "0", right: "0"}}
                alt="desert background layer 4"
              />
            </div>
          </Parallax>
          <Parallax moveFactor={6}>
          <div className={`absolute w-[120vw] h-[120vh] right-[0%] bottom-[0%] left-[0%] top-[0%]`}>
              <img
                src='/images/wallpaper-desert-sunset-3k-5.png'
                
                loading="lazy"
                style={{objectFit: "fill", bottom: "0", right: "0"}}
                alt="desert background layer 5"
              />
            </div>
          </Parallax>
          <Parallax moveFactor={21}>
          <div className={`absolute w-[120vw] h-[120vh] right-[0%] bottom-[0%] left-[0%] top-[0%]`}>
              <img
                src='/images/wallpaper-desert-sunset-3k-6.png'
                
                loading="lazy"
                style={{objectFit: "fill", bottom: "0", right: "0"}}
                alt="desert background layer 6"
              />
            </div>
          </Parallax>
        </div>
        </div>
    </section>
  );
};

export default ParallaxDesert;