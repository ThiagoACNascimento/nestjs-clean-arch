import { Entity } from '../entity';

type StubProps = {
  prop1: string;
  prop2: number;
};

function isValidUUID(uuid: string): boolean {
  const regexExp =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/i;
  return regexExp.test(uuid);
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('should set proprs and id', () => {
    const props = {
      prop1: 'value1',
      prop2: 1,
    };

    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(isValidUUID(entity._id)).toBeTruthy();
  });

  it('should accept valid uuid', () => {
    const props = {
      prop1: 'value1',
      prop2: 1,
    };
    const id = 'cfd9f33b-5bc8-47e8-a9b4-7b800edf9b4a';
    const entity = new StubEntity(props, id);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(entity._id).toStrictEqual(id);
    expect(isValidUUID(entity._id)).toBeTruthy();
  });

  it('should convert entity to javascript object', () => {
    const props = {
      prop1: 'value1',
      prop2: 1,
    };
    const id = 'cfd9f33b-5bc8-47e8-a9b4-7b800edf9b4a';
    const entity = new StubEntity(props, id);

    console.log(entity.toJSON());
    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    });
  });
});
