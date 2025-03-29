import AccountBalance from "@components/AccountBalance";
import Transactions from "@components/Transactions";
import { getData, getTransactionData } from "@lib/getData";

const Dashboard = async() => {
  const user:any = await getData('/user');
  const transactions: any[] = await getTransactionData(`/transactions?user_id=${user?.id}`);
  
  return (
    <div className="max-w-[900px] w-[100%] mx-auto">
        <AccountBalance user={user} />
        <Transactions transactions={transactions} />
    </div>
  )
}
export default Dashboard;