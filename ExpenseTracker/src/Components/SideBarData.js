import { GrTransaction } from "react-icons/gr";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
export const sideBarData=[
  {
  id:"1",
  name:"Accounts",
  icon:<MdOutlineAccountBalanceWallet />,
  path:"/account"
  },
  {
    id:"2",
    name:"Transcations",
    icon:<GrTransaction />,
    path:"/transaction"
  }
]
