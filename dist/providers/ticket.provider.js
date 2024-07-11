"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketProvider = void 0;
const ticket_entity_1 = require("../entitities/ticket.entity");
exports.ticketProvider = [
    {
        provide: 'TICKET_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(ticket_entity_1.Ticket),
        inject: ['DATA_SOURCE']
    }
];
//# sourceMappingURL=ticket.provider.js.map