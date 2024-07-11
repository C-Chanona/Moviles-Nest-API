import { Repository } from 'typeorm';
import { User } from 'src/entitities/user.entity';
import { CreateUserDto } from 'src/dtos/create_user.dto';
import { UpdateUserDto } from 'src/dtos/update_user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findById(id: number): Promise<User>;
    createUser(user: CreateUserDto): Promise<User>;
    updateUser(id: number, updateUser: UpdateUserDto): Promise<User>;
}
