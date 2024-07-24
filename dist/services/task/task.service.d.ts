import { Repository } from 'typeorm';
import { Task } from 'src/entitities/task.entity';
import { CreateTaskDto } from 'src/dtos/task.dto';
export declare class TaskService {
    private readonly taskRepository;
    constructor(taskRepository: Repository<Task>);
    allTasks(): Promise<any>;
    getTaskById(id: number): Promise<Task>;
    getTasksDone(): Promise<Task[]>;
    createTask(task: CreateTaskDto): Promise<Task>;
    deleteTask(id: number): Promise<string>;
}
