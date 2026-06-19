import { Outlet } from "react-router-dom";
import { useSidebarStore } from "@/store/useSidebarStore";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarTrigger,
} from "@/components/ui/sidebar";

function AppLayout() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>NovaDesk</SidebarContent>
      </Sidebar>
      <SidebarTrigger />
      <main>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default AppLayout;
