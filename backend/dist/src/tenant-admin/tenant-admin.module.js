var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { MembersController } from './members/members.controller.js';
import { MembersService } from './members/members.service.js';
let TenantAdminModule = class TenantAdminModule {
};
TenantAdminModule = __decorate([
    Module({
        controllers: [MembersController],
        providers: [MembersService],
    })
], TenantAdminModule);
export { TenantAdminModule };
//# sourceMappingURL=tenant-admin.module.js.map