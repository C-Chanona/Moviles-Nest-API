"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const ticket_provider_1 = require("../../providers/ticket.provider");
const ticket_service_1 = require("../../services/ticket/ticket.service");
const ticket_controller_1 = require("../../controllers/ticket/ticket.controller");
let TicketModule = class TicketModule {
};
exports.TicketModule = TicketModule;
exports.TicketModule = TicketModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [...ticket_provider_1.ticketProvider, ticket_service_1.TicketService],
        controllers: [ticket_controller_1.TicketController],
    })
], TicketModule);
//# sourceMappingURL=ticket.module.js.map