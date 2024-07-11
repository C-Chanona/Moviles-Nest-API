"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskProvider = void 0;
const task_entity_1 = require("../entitities/task.entity");
exports.taskProvider = [
    {
        provide: 'TASK_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(task_entity_1.Task),
        inject: ['DATA_SOURCE']
    }
];
//# sourceMappingURL=task.provider.js.map