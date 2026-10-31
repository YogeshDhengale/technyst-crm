import {
  Settings2,
  Gauge,
  Headphones,
  Users,
  Building2,
  Filter,
  Receipt,
  File,
  FileAudio,
  DollarSign,
  WalletCards,
  CreditCard,
  ShoppingBasket,
  Tags,
  ChartArea,
} from "lucide-react";

export const navMenu = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Gauge,
  },
  {
    title: "Customers",
    url: "/customers",
    icon: Headphones,
  },
  {
    title: "Peoples",
    url: "/peoples",
    icon: Users,
  },
  {
    title: "Companies",
    url: "/companies",
    icon: Building2,
  },
  {
    title: "Leads",
    url: "/leads",
    icon: Filter,
  },
  {
    title: "Invoices",
    url: "/invoices",
    icon: Receipt,
  },
  {
    title: "Offers",
    url: "/offers",
    icon: File,
  },
  {
    title: "Proforma Invoice",
    url: "/proforma-invoice",
    icon: FileAudio,
  },
  {
    title: "Payments",
    url: "/payments",
    icon: DollarSign,
  },
  {
    title: "Expenses",
    url: "/expenses",
    icon: CreditCard,
  },
  {
    title: "Expenses Category",
    url: "/expenses-category",
    icon: WalletCards,
  },
  {
    title: "Products",
    url: "/products",
    icon: ShoppingBasket,
  },
  {
    title: "Products Category",
    url: "/products-category",
    icon: Tags,
  },
  {
    title: "Report",
    url: "/report",
    icon: ChartArea,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings2,
    items: [
      {
        title: "Admin",
        url: "/settings/admin",
      },
      {
        title: "Branch",
        url: "/settings/admin",
      },
      {
        title: "Settings",
        url: "/setting",
      },
      {
        title: "Public Form",
        url: "/settings/public-form",
      },
      {
        title: "Taxes",
        url: "/settings/taxes",
      },
      {
        title: "Currencies",
        url: "/settings/currencies",
      },
      {
        title: "Payments Mode",
        url: "/setting/payments-mode",
      },
      {
        title: "About",
        url: "/settings/about",
      },
    ],
  },
];
