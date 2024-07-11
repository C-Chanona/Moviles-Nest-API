import { TicketService } from 'src/services/ticket/ticket.service';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    createTicket(scores: number): Promise<string>;
}
