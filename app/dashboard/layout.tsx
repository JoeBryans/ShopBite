import SideBar from "@/components/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Layout = ({ children }: any) => {
  return (
    <SidebarProvider>
      <div className="flex gap-4 w-screen overflow-hidden ">
        <SideBar />

        <main className="relative">
          <SidebarTrigger />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};
export default Layout;
