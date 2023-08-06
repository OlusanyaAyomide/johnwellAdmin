import { Icons } from "./Icons";
import { IBaseInterface } from "./interfaces";
export const accordionItem = [
    {
      label: "Filter by Status",
      icon:Icons.info,
      options: [
        {
          name: "All",
        },
        {
          name: "Active",
        },
        {
          name: "Pending",
        },
        {
          name: "Completed",
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
            name: "Manage Users",
          },
        ],
      },
  ];
  
export const statusPreview=[
    {
      name:"active",
      count:"24",
      icon:Icons.inProgress
    },
    {
      name:"Pending",
      count:"4",
      icon:Icons.pending
    },
    {
      name:"Completed",
      count:"54",
      icon:Icons.completed
    },
]


export function formatDate(dateTimeString:string) {
  const options:Intl.DateTimeFormatOptions= { day: 'numeric', month: 'long', year: 'numeric' };
  const inputDate = new Date(dateTimeString)
  const formattedDate = inputDate.toLocaleDateString('en-GB', options);

  const day = inputDate.getDate();
  const month = formattedDate.split(' ')[1];
  const year = inputDate.getFullYear();

  const formattedOutput = `${day}${day === 1 || day === 21 || day === 31 ? 'st' : day === 2 || day === 22 ? 'nd' : day === 3 || day === 23 ? 'rd' : 'th'} ${month} ${year}`;
  return formattedOutput

}

// Example usage:
const dateTimeString = '2023-07-07T12:00:00Z';
const formattedDate = formatDate(dateTimeString);
console.log(formattedDate); // Output: "7th July 2023"

export const DemoTable = [
  {
    "firstName": "JohnAnd",
    "surName": "Doe",
    "email": "johndoe@example.com",
    "businessType": "partnership",
    "companyName1": "AlphaCorp",
    "companyName2": "BetaSolutions",
    "status":"active",
    "createdAt": "2023-07-23T10:15:30Z"
  },
  {
    "firstName": "Alice",
    "surName": "Smith",
    "email": "alicesmith@example.com",
    "businessType": "partnership",
    "companyName1": "TechGenius",
    "companyName2": "InnovateTech",
    "status":"Completed",
    "createdAt": "2023-07-22T08:45:20Z"
  },
  {
    "firstName": "Bob",
    "surName": "Johnson",
    "email": "bjohnson@example.com",
    "businessType": "partnership",
    "companyName1": "SwiftSolutions",
    "companyName2": "ProService",
    "status":"Pending",
    "createdAt": "2023-07-21T15:30:10Z"
  },
  {
    "firstName": "Sarah",
    "surName": "Williams",
    "email": "swilliams@example.com",
    "businessType": "partnership",
    "companyName1": "AquaTech",
    "status":"active",
    "companyName2": "EcoSolutions",
    "createdAt": "2023-07-20T12:00:05Z"
  },
  {
    "firstName": "Michael",
    "surName": "Brown",
    "email": "mbrown@example.com",
    "businessType": "partnership",
    "companyName1": "GlobalTrade",
    "companyName2": "WorldWideCo",
    "status":"Pending",
    "createdAt": "2023-07-19T09:25:15Z"
  },
  {
    "firstName": "Emily",
    "surName": "Clark",
    "email": "eclark@example.com",
    "businessType": "partnership",
    "companyName1": "SmartInnovations",
    "companyName2": "IntelliTech",
    "status":"active",
    "createdAt": "2023-07-18T14:30:40Z"
  },
  {
    "firstName": "David",
    "surName": "Lee",
    "email": "davidlee@example.com",
    "businessType": "partnership",
    "companyName1": "AgriGrowth",
    "companyName2": "FarmersChoice",
    "status":"Completed",
    "createdAt": "2023-07-17T16:55:30Z"
  },
  {
    "firstName": "Olivia",
    "surName": "Miller",
    "email": "omiller@example.com",
    "businessType": "partnership",
    "companyName1": "HealthFirst",
    "companyName2": "FitLife",
    "status":"Completed",
    "createdAt": "2023-07-16T20:10:55Z"
  },
  {
    "firstName": "James",
    "surName": "Anderson",
    "email": "jamesanderson@example.com",
    "businessType": "partnership",
    "companyName1": "BuildWise",
    "companyName2": "ConstructCo",
    "status":"active",
    "createdAt": "2023-07-15T11:40:25Z"
  },
  {
    "firstName": "Sophia",
    "surName": "Turner",
    "email": "sturner@example.com",
    "businessType": "partnership",
    "companyName1": "FashionTrends",
    "companyName2": "StylePro",
    "createdAt": "2023-07-14T09:20:30Z",
    "status":"Completed"
  }
]


export const entryData : IBaseInterface = {
  activationKey: "dummy-activation-key",
  firstName: "John",
  surName: "Doe",
  middleName: "Smith",
  email: "john.doe@example.com",
  phone: "+1234567890",
  houseAdress: "123 Main St",
  city: "New York",
  zipcode: "10001",
  dateOfBirth: "2023-07-15T11:40:25Z",
  business: {
    companyName1: "ABC Corporation",
    companyName2: "XYZ Enterprises",
    companyName3: "Sample Co.",
    businessType: "Limited Liability",
    ngoType: "Charity",
    companyDescription: "Lorem ipsum dolor sit amet.",
    info: [
      {
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        phone: "+9876543210",
        address: "456 Elm St",
        city: "Los Angeles",
        zipcode: "90001",
        passport:
          "https://res.cloudinary.com/da3wqzkz3/image/upload/v1689721692/Cloudinary-React/qehoqkrkmxupsfvntwre.png",
        signature:
          "https://res.cloudinary.com/da3wqzkz3/image/upload/v1689722420/Cloudinary-React/ze5qnqnbzltoygjltaa9.png",
        userid:
          "https://res.cloudinary.com/da3wqzkz3/image/upload/v1671811423/edmlhdnboede1kzxnk4x.png",
        shares: 100,
      },
      {
        firstName: "Bob",
        lastName: "Smith",
        email: "bob.smith@example.com",
        phone: "+9182736450",
        address: "789 Oak Ave",
        city: "Chicago",
        zipcode: "60007",
        passport:
          "https://res.cloudinary.com/da3wqzkz3/image/upload/v1689886688/Cloudinary-React/aq3khk3qydaisrqhgrv0.png",
        signature:
          "https://res.cloudinary.com/da3wqzkz3/image/upload/v1689722420/Cloudinary-React/ze5qnqnbzltoygjltaa9.png",
        userid:
          "https://res.cloudinary.com/da3wqzkz3/image/upload/v1689886688/Cloudinary-React/aq3khk3qydaisrqhgrv0.png",
        shares: "50",
      },
      {
        firstName: "Eve",
        lastName: "Anderson",
        email: "eve.anderson@example.com",
        phone: "+5555555555",
        address: "101 Pine Rd",
        city: "San Francisco",
        zipcode: "94101",
        passport:
          "https://res.cloudinary.com/da3wqzkz3/image/upload/v1689721692/Cloudinary-React/qehoqkrkmxupsfvntwre.png",
        signature:
          "https://res.cloudinary.com/da3wqzkz3/image/upload/v1689722420/Cloudinary-React/ze5qnqnbzltoygjltaa9.png",
        userid:
          "https://res.cloudinary.com/da3wqzkz3/image/upload/v1689886690/Cloudinary-React/p2ep4hfqme1o8yr59vnx.png",
        shares: 75,
      },
    ],
  },
};



export const mockPost = [
  {
    firstName: "John",
    activationKey: "abc123",
    lastName: "Doe",
    description: "Software Engineer",
    companyName: "Acme Inc.",
    createdAt: "2023-07-14T09:20:30Z",
  },
  {
    firstName: "Jane",
    activationKey: "xyz456",
    lastName: "Smith",
    description: "Data Analyst",
    companyName: "DataCo",
    createdAt: "2023-07-14T09:20:30Z",
  },

  {
    firstName: "Alice",
    activationKey: "123qwe",
    lastName: "Johnson",
    description: "Project Manager",
    companyName: "TechCorp",
    createdAt: "2023-07-14T09:20:30Z",
  },
  {
    firstName: "Bob",
    activationKey: "789rty",
    lastName: "Williams",
    description: "Designer",
    companyName: "DesignWorks",
    createdAt: "2023-07-14T09:20:30Z",
  },
  {
    firstName: "Jane",
    activationKey: "xyz456",
    lastName: "Smith",
    description: "Data Analyst",
    companyName: "DataCo",
    createdAt: "2023-07-14T09:20:30Z",
  },

  {
    firstName: "Alice",
    activationKey: "123qwe",
    lastName: "Johnson",
    description: "Project Manager",
    companyName: "TechCorp",
    createdAt: "2023-07-14T09:20:30Z",
  },
  {
    firstName: "Bob",
    activationKey: "789rty",
    lastName: "Williams",
    description: "Designer",
    companyName: "DesignWorks",
    createdAt: "2023-07-14T09:20:30Z",
  },
  {
    firstName: "John",
    activationKey: "abc123",
    lastName: "Doe",
    description: "Software Engineer",
    companyName: "Acme Inc.",
    createdAt: "2023-07-14T09:20:30Z",
  },
  {
    firstName: "Jane",
    activationKey: "xyz456",
    lastName: "Smith",
    description: "Data Analyst",
    companyName: "DataCo",
    createdAt: "2023-07-14T09:20:30Z",
  },

  {
    firstName: "Alice",
    activationKey: "123qwe",
    lastName: "Johnson",
    description: "Project Manager",
    companyName: "TechCorp",
    createdAt: "2023-07-14T09:20:30Z",
  },
  

];

export const PostImgDemo =[  "https://res.cloudinary.com/da3wqzkz3/image/upload/v1689886688/Cloudinary-React/aq3khk3qydaisrqhgrv0.png",
"https://res.cloudinary.com/da3wqzkz3/image/upload/v1689722420/Cloudinary-React/ze5qnqnbzltoygjltaa9.png",
  "https://res.cloudinary.com/da3wqzkz3/image/upload/v1689886688/Cloudinary-React/aq3khk3qydaisrqhgrv0.png",
]



const getDaySuffix = (day: number) => {
  if (day >= 11 && day <= 13) {
    return "th";
  }

  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export const dateToString =(date:Date)=>{
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const daySuffix = getDaySuffix(day);

  return `${day}${daySuffix} ${month} ${year}`;

}