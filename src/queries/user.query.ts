import prisma from '../database/prisma.client';

export class UserQuery {
  async getUsers() {
    return prisma.user.findMany();
  }
}

export const userQuery = new UserQuery();
