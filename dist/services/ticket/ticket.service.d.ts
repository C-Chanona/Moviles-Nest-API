import { Repository } from 'typeorm';
import { Ticket } from 'src/entitities/ticket.entity';
export declare class TicketService {
    private readonly ticketRepository;
    constructor(ticketRepository: Repository<Ticket>);
    generateTicket(scores: number): Promise<string>;
}
