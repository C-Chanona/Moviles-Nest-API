import { UserService } from 'src/services/user/user.service';
import { User } from '../../entitities/user.entity';
import { CreateUserDto } from 'src/dtos/create_user.dto';
import { UpdateUserDto } from 'src/dtos/update_user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    login(email: string, password: string): Promise<User>;
    newUser(user: CreateUserDto): Promise<User>;
    updateUser(id_user: number, updateUser: UpdateUserDto): Promise<User>;
}
