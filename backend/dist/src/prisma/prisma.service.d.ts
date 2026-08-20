import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client.js';
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    constructor();
    onModuleInit(): Promise<void>;
    healthCheck(): Promise<{
        status: string;
        database: string;
        connected: boolean;
    }>;
}
