export interface User {
    id: number;
    username: string;
    passwordHash: string; // hashed password
    role: string; // admin, user, etc.
    profileImageUrl: string; // url of the user's picture
    email: string; // email of the user
    firstName: string; // first name of the user
    lastName: string; // last name of the user
    createdAt: Date; // date of creation
    updatedAt: Date; // date of last update
    isActive: boolean; // true if the user is active
}
