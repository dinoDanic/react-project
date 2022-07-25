import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ISO8601DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Accept invitation */
  acceptInvitation?: Maybe<OrganizationUser>;
  /** Invites the user to the organization */
  inviteUsersToOrganization?: Maybe<Array<OrganizationUser>>;
  /** Creates a new organization */
  organizationCreate?: Maybe<Organization>;
  /** Updates an organization */
  organizationUpdate?: Maybe<Organization>;
  /** Creates a new project */
  projectCreate?: Maybe<Project>;
  /** Updates a project */
  projectUpdate?: Maybe<Project>;
  /** Create a new task */
  taskCreate?: Maybe<Task>;
  /** Updates a given task */
  taskUpdate?: Maybe<Task>;
};


export type MutationAcceptInvitationArgs = {
  invitationToken: Scalars['String'];
};


export type MutationInviteUsersToOrganizationArgs = {
  emails: Array<Scalars['String']>;
  organizationId: Scalars['ID'];
};


export type MutationOrganizationCreateArgs = {
  name: Scalars['String'];
};


export type MutationOrganizationUpdateArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationProjectCreateArgs = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  organizationId: Scalars['ID'];
  visibility: Visibility;
};


export type MutationProjectUpdateArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  participants?: InputMaybe<Array<Scalars['ID']>>;
  visibility?: InputMaybe<Visibility>;
};


export type MutationTaskCreateArgs = {
  assigneeId?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentTaskId?: InputMaybe<Scalars['ID']>;
  projectId: Scalars['ID'];
  status?: InputMaybe<TaskStatus>;
};


export type MutationTaskUpdateArgs = {
  assigneeId?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<TaskStatus>;
  taskId: Scalars['ID'];
};

export type Organization = {
  __typename?: 'Organization';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  creator?: Maybe<User>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  participants?: Maybe<Array<User>>;
  projects?: Maybe<Array<Project>>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type OrganizationUser = {
  __typename?: 'OrganizationUser';
  acceptedAt?: Maybe<Scalars['ISO8601DateTime']>;
  id?: Maybe<Scalars['ID']>;
  invitationToken?: Maybe<Scalars['String']>;
  inviter?: Maybe<User>;
  organization?: Maybe<Organization>;
  sentToEmail?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Project = {
  __typename?: 'Project';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  participants?: Maybe<Array<User>>;
  rootTasks?: Maybe<Array<Task>>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  visibility?: Maybe<Visibility>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetch tasks assigned to me */
  assignedToMe: Array<Task>;
  /** Get all public projects in organization */
  getAllPublicProjectsInOrganization: Array<Project>;
  /** Fetches all users that are joined in the organization */
  getAllUsersInOrganization: Array<User>;
  /** Fetch project by its ID */
  getProjectById: Project;
  /** Fetch task by its ID */
  getTask: Task;
  /** Fetch current user */
  me: User;
};


export type QueryGetAllPublicProjectsInOrganizationArgs = {
  organizationId: Scalars['ID'];
};


export type QueryGetAllUsersInOrganizationArgs = {
  organizationId: Scalars['ID'];
};


export type QueryGetProjectByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetTaskArgs = {
  id: Scalars['ID'];
};

export type Task = {
  __typename?: 'Task';
  assignee?: Maybe<User>;
  childTasks?: Maybe<Array<Task>>;
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  parentTask?: Maybe<Task>;
  project?: Maybe<Project>;
  status?: Maybe<TaskStatus>;
};

export enum TaskStatus {
  /** Task is still in progress */
  Active = 'active',
  /** Task is completed */
  Completed = 'completed'
}

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['ISO8601DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  organizations?: Maybe<Array<Organization>>;
  projects?: Maybe<Array<Project>>;
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export enum Visibility {
  /** Sets project to be visible to certain users inside the organization */
  PrivateVisibility = 'private_visibility',
  /** Sets project to be visible for all users inside the organization */
  PublicVisibility = 'public_visibility'
}

export type MeEssentialDataQueryVariables = Exact<{ [key: string]: never; }>;


export type MeEssentialDataQuery = { __typename?: 'Query', me: { __typename?: 'User', id?: string | null, email?: string | null } };


export const MeEssentialDataDocument = gql`
    query MeEssentialData {
  me {
    id
    email
  }
}
    `;

/**
 * __useMeEssentialDataQuery__
 *
 * To run a query within a React component, call `useMeEssentialDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeEssentialDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeEssentialDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeEssentialDataQuery(baseOptions?: Apollo.QueryHookOptions<MeEssentialDataQuery, MeEssentialDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeEssentialDataQuery, MeEssentialDataQueryVariables>(MeEssentialDataDocument, options);
      }
export function useMeEssentialDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeEssentialDataQuery, MeEssentialDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeEssentialDataQuery, MeEssentialDataQueryVariables>(MeEssentialDataDocument, options);
        }
export type MeEssentialDataQueryHookResult = ReturnType<typeof useMeEssentialDataQuery>;
export type MeEssentialDataLazyQueryHookResult = ReturnType<typeof useMeEssentialDataLazyQuery>;
export type MeEssentialDataQueryResult = Apollo.QueryResult<MeEssentialDataQuery, MeEssentialDataQueryVariables>;