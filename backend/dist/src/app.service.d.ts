import { PrismaService } from './prisma/prisma.service.js';
export declare class AppService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getHello(): Promise<string>;
}
