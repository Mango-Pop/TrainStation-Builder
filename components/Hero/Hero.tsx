"use client";
import Link from "next/link";

interface HeroProps {
    backgroundImage: string;
    subtitle: string;
    title: string;
    buttonText: string;
    buttonUrl: string;
}

function Hero({ backgroundImage, subtitle, title, buttonText, buttonUrl="#" }: HeroProps) {
    
    return (        
        <main style={{
            background: backgroundImage 
                ? `url('${backgroundImage}')`
                : 'transparent',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',            
        }}>  
            <div className={`hero min-h-[100vh] max-h-[1200px] pt-16 sm:pt-48'}`}>
                <div className="hero-content text-center">
                    <div className="max-w-[350px] md:max-w-[500px]">
                        {subtitle && (
                            <p className="text-saira text-sm sm:text-lg md:text-3xl lg:text-3xl text-center uppercase tracking-[5px] text-primary">{subtitle}</p>                        
                        )}
                        <h1 className="text-saira-condensed font-extrabold text-6xl sm:text-6xl md:text-8xl lg:text-8xl text-center uppercase tracking-tight leading-none pb-4">{title}</h1>
                        {buttonText && (
                            <Link href={buttonUrl} className="btn btn-primary uppercase">{buttonText}</Link>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hero;
