import { faker } from '@faker-js/faker';

import { AuthorizationStatus } from '../constants';


export const mockAuthStatus = () => faker.datatype.boolean() ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth;
