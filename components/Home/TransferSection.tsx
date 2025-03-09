import { Banknote, Send, ShieldCheck } from "lucide-react";

const TransfersSection = () => {
    return (
      <section className="py-20 bg-gradient-to-r from-gray-200 to-gray-50 text-black">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-center md:text-left">Instant Money Transfers</h2>
            <p className="mt-4 px-6 md:px-0">Send funds to other accounts securely and instantly.</p>
            <ul className="mt-4 text-lg text-left px-6 md:px-0">
              <li className="flex items-center gap-4 mt-2"><Send size={32} /> Select recipient</li>
              <li className="flex items-center gap-4 mt-2"><Banknote size={32} /> Enter amount</li>
              <li className="flex items-center gap-4 mt-2"><ShieldCheck size={32} /> Confirm transfer</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 px-6 md:px-0">
            <img src="/images/transfer.jpg" alt="Money Transfer" className="w-full rounded-lg shadow-md" />
          </div>
        </div>
      </section>
    );
}

export default TransfersSection;