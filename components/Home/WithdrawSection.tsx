import { Banknote, CreditCard, ShieldCheck } from "lucide-react";

const WithdrawalsSection = () => {
    return (
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Hassle-Free Withdrawals</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">Withdraw your money quickly and securely with multiple payout options.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg w-64">
            <CreditCard size={40} className="text-blue-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-3">Select withdrawal method</h3>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg w-64">
            <Banknote size={40} className="text-green-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-3">Enter amount</h3>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg w-64">
            <ShieldCheck size={40} className="text-yellow-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-3">Receive funds instantly</h3>
          </div>
        </div>
      </section>
    );
}

export default WithdrawalsSection;