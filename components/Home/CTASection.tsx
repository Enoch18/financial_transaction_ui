import Link from "next/link";

const CTASection = () => {
    return (
      <section className="py-20 bg-orange-700 text-white text-center">
        <h2 className="text-3xl font-bold">Experience the Future of Finance</h2>
        <p className="mt-4 max-w-3xl mx-auto">Join thousands of users managing their finances seamlessly. Try our demo now.</p>
        <Link href="/auth/register">
            <button className="mt-6 px-6 py-3 bg-white text-orange-700 font-semibold rounded-lg shadow-md cursor-pointer">Get Started</button>
        </Link>
      </section>
    );
}

export default CTASection;