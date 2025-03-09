import Footer from "@components/Footer";
import CTASection from "@components/Home/CTASection";
import DepositsSection from "@components/Home/DepositSection";
import FeaturesSection from "@components/Home/FeatureSection";
import HeroSection from "@components/Home/HeroSection";
import SecuritySection from "@components/Home/SecuritySection";
import TransfersSection from "@components/Home/TransferSection";
import WithdrawalsSection from "@components/Home/WithdrawSection";
import MainNavbar from "@components/MainNavbar";

const Home = () => {
  return (
    <div>
      <MainNavbar />
      <HeroSection />
      <FeaturesSection />
      <DepositsSection />
      <WithdrawalsSection />
      <TransfersSection />
      <SecuritySection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default Home;
