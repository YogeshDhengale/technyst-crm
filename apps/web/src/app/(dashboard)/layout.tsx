import {
	SidebarInset,
	SidebarProvider,
} from "@technyst-crm/ui/components/sidebar";
import type { ReactNode } from "react";
import AppSidebar from "@/components/app-sidebar";
import Header from "@/components/header";

function layout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<div className="[--header-height:calc(--spacing(14))]">
			<SidebarProvider className="flex flex-col">
				<Header />
				<div className="flex flex-1">
					<AppSidebar />
					<SidebarInset>
						<div className="flex flex-1 flex-col gap-4 p-4">
							{children}
						</div>
					</SidebarInset>
				</div>
			</SidebarProvider>
		</div>
	);
}

export default layout;
