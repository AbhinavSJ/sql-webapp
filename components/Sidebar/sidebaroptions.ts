//This data might as well be coming from DB after connecting, displaying a list of tables and hence dynamically render on the sidebar
const SIDEBAR_OPTIONS = [
  {
    name: "customers",
    fileName: "customers",
    enabled: true,
  },
  {
    name: "employees",
    fileName: "employees",
    enabled: true,
  },
  {
    name: "order_details",
    fileName: "order_details",
    enabled: true,
  },
  {
    name: "products",
    fileName: "products",
    enabled: true,
  },
  {
    name: "suppliers",
    fileName: "suppliers",
    enabled: true,
  },
];

export { SIDEBAR_OPTIONS };
