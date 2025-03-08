import AccountBalance from "@components/AccountBalance";
import Transactions from "@components/Transactions";

const Dashboard = () => {
  return (
    <div className="max-w-[900px] w-[100%] mx-auto">
        <AccountBalance />
        <Transactions transactions={[]} />
    </div>
  )
}
export default Dashboard;