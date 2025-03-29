import { AlertTriangle, Lock, LucideIcon, ShieldCheck } from "lucide-react";
import { IconType } from "react-icons";

const SecurityFeature = ({ title, Icon }: {title: string, Icon: IconType | LucideIcon}) => {
    return (
      <div className="bg-gray-700 p-6 shadow-md rounded-lg w-72 flex flex-col items-center">
        <div className="text-orange-400 mb-3"><Icon size={40} /></div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    );
}

const SecuritySection = () => {
    return (
      <section className="py-20 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold">Your Security is Our Priority</h2>
        <p className="mt-4 max-w-3xl mx-auto">We ensure secure transactions with top-tier encryption and fraud detection.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <SecurityFeature title="256-bit Encryption" Icon={ShieldCheck} />
          <SecurityFeature title="Real-time Fraud Detection" Icon={AlertTriangle} />
          <SecurityFeature title="Secure Authentication" Icon={Lock} />
        </div>
      </section>
    );
}

export default SecuritySection;