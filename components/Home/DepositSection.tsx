import { Banknote, CreditCard, ShieldCheck } from "lucide-react";

const DepositsSection = () => {
    return (
      <section className="py-20 bg-gradient-to-r from-white to-gray-100 text-black text-center">
        <h2 className="text-3xl font-bold">Fast & Secure Deposits</h2>
        <p className="mt-4 max-w-3xl mx-auto">Easily fund your account through secure methods, ensuring instant availability.</p>
        <div className="mt-8 flex flex-col items-center">
          <div className="flex items-center gap-4 text-lg">
            <CreditCard size={32} /> Choose deposit method
          </div>
          <div className="flex items-center gap-4 text-lg mt-2">
            <Banknote size={32} /> Enter amount
          </div>
          <div className="flex items-center gap-4 text-lg mt-2">
            <ShieldCheck size={32} /> Confirm & receive instantly
          </div>
        </div>
      </section>
    );
}

export default DepositsSection;