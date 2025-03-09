const FeatureCard = ({ title, description }: any) => {
    return (
      <div className="bg-white p-6 shadow-md rounded-lg w-72">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    );
}

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Seamless Financial Transactions</h2>
      <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
        Our system makes deposits, withdrawals, and transfers easy, secure, and fast.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <FeatureCard title="Deposit" description="Fund your account quickly and securely." />
        <FeatureCard title="Withdraw" description="Access your money anytime with ease." />
        <FeatureCard title="Transfer" description="Send money instantly and securely." />
      </div>
    </section>
  );
}

export default FeaturesSection;