const Employee = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    password: "123",

    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Login Page",
        taskDescription: "Design a responsive login page using React and Tailwind.",
        taskDate: "2026-05-22",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Fix navbar responsiveness issue.",
        taskDate: "2026-05-20",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with backend API.",
        taskDate: "2026-05-18",
        category: "Backend"
      }
    ]
  },

  {
    id: 2,
    name: "Priya Das",
    email: "priya@gmail.com",
    password: "123",

    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Dashboard UI",
        taskDescription: "Build admin dashboard UI.",
        taskDate: "2026-05-23",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Resolve sidebar collapsing bug.",
        taskDate: "2026-05-19",
        category: "Debugging"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Charts",
        taskDescription: "Add charts using Chart.js.",
        taskDate: "2026-05-24",
        category: "Development"
      }
    ]
  },

  {
    id: 3,
    name: "Aman Verma",
    email: "aman@gmail.com",
    password: "123",

    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Signup Form",
        taskDescription: "Create signup form with validation.",
        taskDate: "2026-05-21",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Schema",
        taskDescription: "Prepare MongoDB schema.",
        taskDate: "2026-05-17",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Authentication",
        taskDescription: "Implement JWT authentication.",
        taskDate: "2026-05-16",
        category: "Backend"
      }
    ]
  },

  {
    id: 4,
    name: "Sneha Patel",
    email: "sneha@gmail.com",
    password: "123",

    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Landing Page",
        taskDescription: "Design company landing page.",
        taskDate: "2026-05-25",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Footer Section",
        taskDescription: "Create responsive footer.",
        taskDate: "2026-05-20",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Animation Effects",
        taskDescription: "Add hover and transition effects.",
        taskDate: "2026-05-22",
        category: "UI/UX"
      }
    ]
  },

  {
    id: 5,
    name: "Rohit Singh",
    email: "rohit@gmail.com",
    password: "123",

    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Profile Page",
        taskDescription: "Build employee profile page.",
        taskDate: "2026-05-24",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Dark Mode",
        taskDescription: "Implement dark mode feature.",
        taskDate: "2026-05-18",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Project",
        taskDescription: "Deploy project on Vercel.",
        taskDate: "2026-05-15",
        category: "Deployment"
      }
    ]
  }
]

const Admin = [
  {
    id: 1,
    name: "admin",
    email: "admin@me.com",
    password: "1234",
    role: "admin"
  }
]


export const setlocalStorage=()=>{
localStorage.setItem('employees',JSON.stringify(Employee))
localStorage.setItem('admin',JSON.stringify(Admin))

}
export const getlocalStorage=()=>{
 const employees =JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return{employees,admin};
}
