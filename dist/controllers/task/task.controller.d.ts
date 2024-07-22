import { TaskService } from 'src/services/task/task.service';
import { Task } from 'src/entitities/task.entity';
import { CreateTaskDto } from 'src/dtos/task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    getAllTasks(): Promise<Task[]>;
    getTasksDone(): Promise<Task[]>;
    getTaskById(id_task: number): Promise<Task>;
    createTask(task: CreateTaskDto): Promise<Task>;
    deleteTask(id_task: number): Promise<string>;
}
