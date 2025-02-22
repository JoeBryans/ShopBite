import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  LayoutDashboard,
  SearchCheck,
  BaggageClaim,
  HandCoinsIcon,
  User2,
} from "lucide-react";
import { CreditCard } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "DashBoard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Product",
    url: "/dashboard/products",
    icon: BaggageClaim,
  },
  {
    title: "Order",
    url: "/dashboard/orders",
    icon: CreditCard,
  },
  {
    title: "Revenue",
    url: "/dashboard/revenue",
    icon: HandCoinsIcon,
  },
  // {
  //   title: "Inbox",
  //   url: "#",
  //   icon: Inbox,
  // },
  {
    title: "Customers",
    url: "#",
    icon: User2,
  },
  // {
  //   title: "Calendar",
  //   url: "#",
  //   icon: Calendar,
  // },

  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

const SideBar = () => {
  return (
    <div className="flex flex-col border-0 overflow-hidden  bg-blue-500 w-64">
      <Sidebar className="border-0">
        <SidebarContent>
          <SidebarGroup>
            <br />
            <br />

            {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className="cursor-pointer hover:bg-slate-200 w-max px-2 mt-4"
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div></div>
    </div>
  );
};

export default SideBar;
