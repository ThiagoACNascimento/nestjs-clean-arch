import { Entity } from '@/shared/domain/entities/entity';

export type UserProps = {
  name: string;
  email: string;
  passwordHash: string;
  createdAt?: Date;
};

export class UserEntity extends Entity<UserProps> {
  constructor(
    public readonly props: UserProps,
    id?: string,
  ) {
    super(props, id);
    this.props.createdAt = this.props.createdAt ?? new Date();
  }

  updateName(value: string): void {
    this.name = value;
  }

  updatePasswordHash(value: string): void {
    this.passwordHash = value;
  }

  get name(): string {
    return this.props.name;
  }

  private set name(value: string) {
    this.props.name = value;
  }

  get email(): string {
    return this.props.email;
  }

  get passwordHash(): string {
    return this.props.passwordHash;
  }

  private set passwordHash(value: string) {
    this.props.passwordHash = value;
  }

  get createdAt(): Date | undefined {
    return this.props.createdAt;
  }
}
