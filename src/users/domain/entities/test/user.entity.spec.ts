import { userDataBuilder } from '../../testing/healpers/users-data-builders';
import { UserEntity, UserProps } from '../user.entity';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = userDataBuilder();

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

  describe('Getters', () => {
    it('Getter of name field', () => {
      expect(sut.props.name).toBeDefined();
      expect(sut.props.name).toEqual(props.name);
      expect(typeof sut.props.name).toBe('string');
    });

    it('Getter of email field', () => {
      expect(sut.props.email).toBeDefined();
      expect(sut.props.email).toEqual(props.email);
      expect(typeof sut.props.email).toBe('string');
    });

    it('Getter of passwordHash field', () => {
      expect(sut.props.passwordHash).toBeDefined();
      expect(sut.props.passwordHash).toEqual(props.passwordHash);
      expect(typeof sut.props.passwordHash).toBe('string');
    });

    it('Getter of createdAt field', () => {
      expect(sut.props.createdAt).toBeDefined();
      expect(sut.props.createdAt).toBeInstanceOf(Date);
    });
  });

  describe('Setters', () => {
    it('Name field', () => {
      sut['name'] = 'Name2';
      expect(sut.props.name).toEqual('Name2');
      expect(typeof sut.props.name).toBe('string');
    });

    it('Password field', () => {
      sut['passwordHash'] = 'password2';
      expect(sut.props.passwordHash).toEqual('password2');
      expect(typeof sut.props.passwordHash).toBe('string');
    });
  });

  describe('Update methods', () => {
    it('Name field', () => {
      sut.updateName('Name3');
      expect(sut.props.name).toEqual('Name3');
    });
    it('PassowordHash field', () => {
      sut.updatePasswordHash('Password3');
      expect(sut.props.passwordHash).toEqual('Password3');
    });
  });
});
