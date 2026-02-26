import type { User } from "./types";

export const apiResponse: unknown = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: "24" }, // invalid
  { name: "Jim", age: 25 },
];

function isValidUser(obj: unknown): obj is User {
  if (typeof obj === "object" && obj != null && "name" in obj && "age" in obj) {
    const user = obj as {name: unknown, age: unknown};
    return typeof obj.name === string && typeof obj.age === number;
  }
  else {
    return false;
}

export function getUsersData(): User[] {
  if (!Array.isArray(apiResponse) return [];

  return apiResponse
  .map((item) => {
    if (typeof obj === "object" && obj != null && "name" in obj && "age" in obj) {
    const user = obj as {name: unknown, age: unknown};
    let age: number | null = null; 

    if (typeof obj.age === "string"
  }
  return apiResponse as User[]; // intentionally unsafe
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => u.age.toFixed(0));
}