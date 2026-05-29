import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { UserProps } from '../entities/user.entity';
import { ClassValidatorFields } from '@/shared/domain/validators/class-validator-fields';

export class UserRules {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name!: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @MaxLength(70)
  @IsString()
  @IsNotEmpty()
  passwordHash!: string;

  @IsDate()
  @IsOptional()
  createdAt!: Date;

  constructor({ email, name, passwordHash, createdAt }: UserProps) {
    Object.assign(this, { email, name, passwordHash, createdAt });
  }
}

export class UserValidator extends ClassValidatorFields<UserRules> {
  validate(data: UserProps): boolean {
    return super.validate(new UserRules(data ?? {}));
  }
}

export class UserValidatorFectory {
  static create(): UserValidator {
    return new UserValidator();
  }
}
