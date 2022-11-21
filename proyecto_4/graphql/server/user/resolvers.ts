import prisma from '@config/prisma';
import { Resolver } from 'types';

const UserResolvers: Resolver = {
  User: {
    position: async (parent, args) => {
      const position = await prisma.position.findUnique({
        where: {
          id: parent.position_id,
        },
      });
      return position;
    },
    user_type: async (parent, args) => {
      const userType = await prisma.userType.findUnique({
        where: {
          id: parent.user_type_id,
        },
      });
      return userType;
    },
    course_states: async (parent, args) => {
      const courseStates = await prisma.courseState.findMany({
        where: {
          user_id: {
            equals: parent.id,
          },
        },
      });
      return courseStates;
    },
    notes: async (parent, args) => {
      const notes = await prisma.note.findMany({
        where: {
          user_id: {
            equals: parent.id,
          },
        },
      });
      return notes;
    },
    comments: async (parent, args) => {
      const comments = await prisma.comment.findMany({
        where: {
          user_id: {
            equals: parent.id,
          },
        },
      });
      return comments;
    },
    likes: async (parent, args) => {
      const likes = await prisma.like.findMany({
        where: {
          user_id: {
            equals: parent.id,
          },
        },
      });
      return likes;
    },
    trainings: async (parent, args) => {
      const trainings = await prisma.training.findMany({
        where: {
          users: {
            some: {
              id: parent.id,
            },
          },
        },
      });
      return trainings;
    },
  },
  Query: {
    getUser: async (parent, args) => {
      const user = await prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
      return user;
    },
    getUsers: async (parent, args) => {
      const users = await prisma.user.findMany();
      return users;
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const newUser = await prisma.user.create({
        // data: {
        //   ...args.data,
        // },
        data: {
          email: args.data.email,
          full_name: args.data.full_name,
          phone: args.data.phone,
          address: args.data.address,
          photo_link: args.data.photo_link,
          position: {
            connect: {
              id: args.data.position_id,
            },
          },
          user_type: {
            connect: {
              id: args.data.user_type_id,
            },
          },
        },
      });
      return newUser;
    },
    updateUser: async (parent, args) => {
      const updatedUser = await prisma.user.update({
        where: {
          id: args.id,
        },
        data: {
          ...args.data,
        },
      });
      return updatedUser;
    },
    deleteUser: async (parent, args) => {
      const deletedUser = await prisma.user.delete({
        where: {
          id: args.id,
        },
      });
      return deletedUser;
    },
  },
};

export { UserResolvers };
