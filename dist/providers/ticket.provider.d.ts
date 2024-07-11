import { DataSource } from "typeorm";
import { Ticket } from "src/entitities/ticket.entity";
export declare const ticketProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Ticket>;
    inject: string[];
}[];
