import { Icons } from "./Icons";
export const accordionItem = [
    {
      label: "Filter by Status",
      icon:Icons.info,
      options: [
        {
          name: "Pending",
        },
        {
          name: "Completed",
        },
        {
          name: "In Progress",
        },
      ],
    },
    {
      label: "Filter by Duration",
      icon:Icons.clock,
      options: [
        {
          name: "All",
        },
        {
          name: "Month",
        },
        {
          name: "Week",
        },
      ],
    },
    {
        label: "Users",
        icon:Icons.user,
        options: [
          {
            name: "Add Users",
          },
          {
            name: "Delete Users",
          },
        ],
      },
  ];
  