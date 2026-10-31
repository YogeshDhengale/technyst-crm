import { Sidebar, SidebarContent } from "@technyst-crm/ui/components/sidebar";
import { NavMain } from "./nav-main";

function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar
			className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
			{...props}
		>
			<SidebarContent>
				<NavMain />
			</SidebarContent>
		</Sidebar>
	);
}

export default AppSidebar;
