import Link from "next/link";

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen md:h-[70vh]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/finance.jpg')" }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[rgba(44,30,27,0.5)]" />

            {/* Text Content */}
            <div className="absolute mt-16 inset-0 flex flex-col justify-center text-white p-6 md:p-16">
                <h1 className="text-4xl md:text-6xl font-bold">Powering the Future of Finance</h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl">A cutting-edge financial management system designed for efficiency, security, and scalability. Explore the future of finance with our demo.</p>
                <Link href="/auth/register" className="max-w-[200px]">
                    <button className="mt-6 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-md cursor-pointer w-[100%]">Explore Demo</button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection;