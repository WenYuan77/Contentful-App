import React from 'react';
import heroImg from './assets/hero.svg'  // 这里是直接创建了一个叫 heroImg 的变量，该变量包含路径中的内容（一张图片）。

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-center'>
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis 
                        inventore quas veniam earum voluptates voluptatem molestias quos quo enim eveniet quasi, 
                        neque alias a accusamus! Distinctio voluptatum cupiditate corrupti?
                    </p>
                </div>
                <div className='img-container'>
                    <img src={heroImg} alt="woman and the browser" />  
                    {/* 直接用上面的变量。 */}
                </div>
            </div>
        </section>
    );
}

export default Hero