// massive-data.ts

type DummyData = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  city: string;
  zipCode: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  role: string;
  gender: string;
  age: number;
  birthDate: string;
  company: string;
  position: string;
  department: string;
  salary: number;
  bonus: number;
  startDate: string;
  endDate: string | null;
  manager: string;
  experience: string;
  education: string;
  university: string;
  degree: string;
  skills: string[];
  language: string;
  maritalStatus: string;
  children: number;
  nationality: string;
  passportNumber: string;
  visaStatus: string;
  joiningDate: string;
  contractType: string;
  workHours: number;
  isRemote: boolean;
  lastLogin: string;
  device: string;
  browser: string;
  ipAddress: string;
  accountStatus: string;
  isVerified: boolean;
  rating: number;
  feedback: string;
  notes: string;
  tags: string[];
  projects: number;
  tasksCompleted: number;
  performanceScore: number;
  team: string;
  shift: string;
  accessLevel: string;
  subscription: string;
  planType: string;
};

const getRandom = <T,>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];
const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const names = [
  "John Doe",
  "Jane Smith",
  "Ali Valiyev",
  "Anna Ivanova",
  "Lee Minho",
];
const emails = [
  "john@example.com",
  "jane@example.com",
  "ali@example.uz",
  "anna@mail.ru",
  "lee@korea.kr",
];
const phones = [
  "+123456789",
  "+987654321",
  "+998901234567",
  "+79261234567",
  "+821012345678",
];
const cities = ["Tashkent", "New York", "London", "Seoul", "Moscow"];
const countries = ["Uzbekistan", "USA", "UK", "South Korea", "Russia"];
const statuses = ["Active", "Inactive", "Pending"];
const roles = ["Admin", "User", "Editor"];
const departments = ["IT", "Finance", "QA", "HR", "Support"];
const universities = ["MIT", "Oxford", "TATU", "Harvard", "Inha"];
const degrees = ["CS", "Economics", "Software Eng", "Business", "Math"];
const skills = [
  ["React", "Node"],
  ["SQL", "Excel"],
  ["Cypress"],
  ["HRMS"],
  ["Python"],
];
const browsers = ["Chrome", "Firefox", "Edge", "Safari"];
const devices = ["MacBook", "Dell", "Acer", "HP", "Lenovo"];
const shifts = ["Morning", "Evening", "Night"];
const contractTypes = ["Full-time", "Part-time", "Contract"];
const planTypes = ["Monthly", "Yearly", "Quarterly"];
const genders = ["Male", "Female"];
const languages = ["English", "Uzbek", "Russian", "Korean"];
const maritalStatuses = ["Single", "Married"];

export const massiveDataTableDummyData: DummyData[] = [];

for (let i = 1; i <= 100; i++) {
  massiveDataTableDummyData.push({
    id: i,
    name: getRandom(names),
    email: getRandom(emails),
    phone: getRandom(phones),
    address: `Address ${i}`,
    country: getRandom(countries),
    city: getRandom(cities),
    zipCode: `1000${i}`,
    status: getRandom(statuses),
    createdAt: `2023-0${getRandomInt(1, 9)}-${getRandomInt(10, 28)}`,
    updatedAt: `2024-0${getRandomInt(1, 9)}-${getRandomInt(10, 28)}`,
    role: getRandom(roles),
    gender: getRandom(genders),
    age: getRandomInt(20, 50),
    birthDate: `19${getRandomInt(70, 99)}-${getRandomInt(1, 12)}-${getRandomInt(
      10,
      28
    )}`,
    company: `Company ${i}`,
    position: `Position ${i}`,
    department: getRandom(departments),
    salary: getRandomInt(30000, 100000),
    bonus: getRandomInt(0, 10000),
    startDate: `2022-${getRandomInt(1, 12)}-${getRandomInt(1, 28)}`,
    endDate: null,
    manager: getRandom(names),
    experience: `${getRandomInt(1, 10)} years`,
    education: "Bachelor",
    university: getRandom(universities),
    degree: getRandom(degrees),
    skills: getRandom(skills),
    language: getRandom(languages),
    maritalStatus: getRandom(maritalStatuses),
    children: getRandomInt(0, 3),
    nationality: getRandom(countries),
    passportNumber: `P${getRandomInt(1000000, 9999999)}`,
    visaStatus: "N/A",
    joiningDate: `2022-${getRandomInt(1, 12)}-${getRandomInt(1, 28)}`,
    contractType: getRandom(contractTypes),
    workHours: getRandomInt(20, 40),
    isRemote: Math.random() < 0.5,
    lastLogin: `2024-${getRandomInt(1, 12)}-${getRandomInt(1, 28)}`,
    device: getRandom(devices),
    browser: getRandom(browsers),
    ipAddress: `192.168.${getRandomInt(0, 255)}.${getRandomInt(0, 255)}`,
    accountStatus: getRandom(["Verified", "Pending"]),
    isVerified: Math.random() < 0.5,
    rating: parseFloat((Math.random() * 5).toFixed(1)),
    feedback: "Auto-generated feedback",
    notes: "Generated data",
    tags: getRandom(skills),
    projects: getRandomInt(1, 10),
    tasksCompleted: getRandomInt(10, 200),
    performanceScore: getRandomInt(60, 100),
    team: `Team ${getRandomInt(1, 5)}`,
    shift: getRandom(shifts),
    accessLevel: getRandom(["High", "Medium", "Normal"]),
    subscription: getRandom(["Free", "Basic", "Pro"]),
    planType: getRandom(planTypes),
  });
}
