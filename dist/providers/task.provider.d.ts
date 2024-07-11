import { DataSource } from "typeorm";
import { Task } from "src/entitities/task.entity";
export declare const taskProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Task>;
    inject: string[];
}[];
