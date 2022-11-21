import prisma from '@config/prisma';
import { Resolver } from 'types';

const UserTypeResolvers: Resolver = {
  UserType: {
    users: async (parent, args) => {
      const users = await prisma.user.findMany({
        where: {
          user_type_id: {
            equals: parent.id,
          },
        },
      });
      return users;
    },
  },
  Query: {
    getUserType: async (parent, args) => {
      const userType = await prisma.userType.findUnique({
        where: {
          id: args.id,
        },
      });
      return userType;
    },
    getUserTypes: async (parent, args) => {
      const userTypes = await prisma.userType.findMany();
      return userTypes;
    },
  },
  Mutation: {
    createUserType: async (parent, args) => {
      const newUserType = await prisma.userType.create({
        data: {
          name: args.data.name,
        },
      });
      return newUserType;
    },
    updateUserType: async (parent, args) => {
      const updatedUserType = await prisma.userType.update({
        where: {
          id: args.data.id,
        },
        data: {
          name: {
            set: args.data.name,
          },
        },
      });
      return updatedUserType;
    },
    deleteUserType: async (parent, args) => {
      const deletedUserType = await prisma.userType.delete({
        where: {
          id: args.id,
        },
      });
      return deletedUserType;
    },
  },
};

export { UserTypeResolvers };
