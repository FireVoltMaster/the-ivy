import { useEffect, useState } from 'react'


const className = (...classes) => classes.filter(Boolean).join('')

export function ScrollToTop() {
    const [isVisable, setIsVisable] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisable(true);
        } else {
            setIsVisable(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="animate-pulse hover:animate-bounce fixed bottom-[45px] right-[15px] z-10">
            <button
                type="button"
                onClick={scrollToTop}
                className={className(
                    isVisable ? 'opacity-100' : 'opacity-0 ',
                    ' flex items-center justify-center text-neon-pink transition-all hover:bg-neon-pink hover:text-white focus:outline-none rounded-full'

                )}
                aria-label="Right Align"
            >
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </button>
        </div>
    );
}
