import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server-micro';
import { UserTypes } from '@graphql/server/user/types';
import { PositionTypes } from '@graphql/server/position/types';
import { UserTypeTypes } from '@graphql/server/userType/types';
import { LikeTypes } from '@graphql/server/like/types';
import { NoteTypes } from '@graphql/server/note/types';
import { CourseTypes } from '@graphql/server/course/types';
import { CourseStateTypes } from '@graphql/server/course-state/types';
import { TrainingTypes } from '@graphql/server/training/types';
import { CommentTypes } from '@graphql/server/comment/types';

const CommonTypes = gql`
  scalar Date
`;

const GlobalTypes: DocumentNode[] = [
  CommonTypes,
  UserTypes,
  PositionTypes,
  UserTypeTypes,
  LikeTypes,
  NoteTypes,
  CourseTypes,
  CourseStateTypes,
  TrainingTypes,
  CommentTypes,
];

export { GlobalTypes };
