import type { User } from "./types";

export const apiResponse: unknown = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: "24" }, // invalid
  { name: "Jim", age: 25 },
];

function isValidUser(obj: unknown): obj is User {
  if (typeof obj === "object" && obj != null && "name" in obj && "age" in obj) {
    const user = obj as {name: unknown, age: unknown};
    return typeof user.name === "string" && typeof user.age === "number";
  }
  else {
    return false;
  }
}

export function getUsersData(): User[] {
  if (!Array.isArray(apiResponse)) return [];

  return apiResponse
  .map((item) => {
    if (typeof item === "object" && item != null && "name" in ite
 && "age" in item) {
      const user = item as {name: unknown, age: unknown};
      let age: number | null = null; 

      if (typeof user.age === "string") {
        const numAge = Number(user.age);
        if (!isNaN(numAge)) { 
          age = numAge;
        }
      } 
      else if (typeof user.age === "number") {
        age = user.age;
      }

      if (typeof user.age === "string" && age !== null) {
        return { name: user.name, age: age };
      }
    }
    return null;
  }).filter((user): user is User => u !== null);
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => u.age.toFixed(0));
}