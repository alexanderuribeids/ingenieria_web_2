import prisma from '@config/prisma';
import { Resolver } from 'types';

const TrainingResolvers: Resolver = {
  Training: {
    courses: async (parent, args) => {
      const courses = await prisma.course.findMany({
        where: {
          trainings: {
            some: {
              id: parent.id,
            },
          },
        },
      });
      return courses;
    },
    users: async (parent, args) => {
      const users = await prisma.user.findMany({
        where: {
          trainings: {
            some: {
              id: parent.id,
            },
          },
        },
      });
      return users;
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
  },
  Query: {
    getTraining: async (parent, args) => {
      const training = await prisma.training.findUnique({
        where: {
          id: args.id,
        },
      });
      return training;
    },
    getTrainings: async () => {
      const trainings = await prisma.training.findMany();
      return trainings;
    },
  },
  Mutation: {
    createTraining: async (parent, args) => {
      const newTraining = await prisma.training.create({
        data: {
          name: args.data.name,
          description: args.data.description,
        },
      });
      return newTraining;
    },
    updateTraining: async (parent, args) => {
      const updatedTraining = await prisma.training.update({
        where: {
          id: args.id,
        },
        data: {
          ...args.data,
        },
      });
      return updatedTraining;
    },
    deleteTraining: async (parent, args) => {
      const deletedTraining = await prisma.training.delete({
        where: {
          id: args.id,
        },
      });

      return deletedTraining;
    },
  },
};

export { TrainingResolvers };
