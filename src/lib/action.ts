"use server"

import prisma from "./database"

export const getUser = async () => {
    const user = prisma.user.findMany();
    return user;
}