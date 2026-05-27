import { faker } from '@faker-js/faker';
import { UserProps } from '../../entities/user.entity';

type Props = {
  name?: string;
  email?: string;
  passwordHash?: string;
  createdAt?: Date;
};

export function userDataBuilder(props?: Props): UserProps {
  return {
    name: props?.name ?? faker.person.fullName(),
    email: props?.email ?? faker.internet.email(),
    passwordHash: props?.email ?? faker.internet.password(),
    createdAt: props?.createdAt ?? new Date(),
  };
}
