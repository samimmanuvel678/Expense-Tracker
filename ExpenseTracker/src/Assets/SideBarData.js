import { GrTransaction } from "react-icons/gr";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { RiHome8Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

export const sideBarData=[
  {
    id:"1",
    name:"Home",
    icon:<RiHome8Line />,
    path:"/"
  },
  {
  id:"2",
  name:"Accounts",
  icon:<MdOutlineAccountBalanceWallet />,
  path:"/account"
  },
  {
    id:"3",
    name:"Transcations",
    icon:<GrTransaction />,
    path:"/transaction"
  },
]
