import { UserEntity, UserProps } from '../user.entity';
import { faker } from '@faker-js/faker';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      passwordHash: faker.internet.password(),
    };

    sut = new UserEntity(props);
  });

  it('Constructor method', () => {
    expect(sut.props).toEqual({
      name: props.name,
      email: props.email,
      passwordHash: props.passwordHash,
      createdAt: sut.props.createdAt,
    });
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });
});
