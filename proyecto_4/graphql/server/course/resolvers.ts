import prisma from '@config/prisma';
import { Resolver } from 'types';

const CourseResolver: Resolver = {
    Query: {
        getCourses: () => {
            return prisma.course.findMany()
        }
    },
    Mutation: {
        createCourse: async (parent, args) => {
            const newCourse = await prisma.course.create(
                {
                    data: {
                        name: args.data.name,
                        duration: args.data.duration,
                        link: args.data.link
                    }
                }
            );
            return newCourse;
        },
        deleteCourse: async (parent, args) => {
            const courseToDelete = await prisma.course.delete({
                where: {
                    id: args.id,
                }
            });
            return courseToDelete;
        }
    }
}

export { CourseResolver };