"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const data_layer_module_1 = require("./1-data-layer/data-layer.module");
const graphql_layer_module_1 = require("./3-graphql-layer/graphql-layer.module");
const process_layer_module_1 = require("./2-process-layer/process-layer.module");
const auxConfigs = new config_1.ConfigService();
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            process_layer_module_1.ProcessLayerModule,
            data_layer_module_1.DataLayerModule,
            graphql_layer_module_1.GraphqlLayerModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot(auxConfigs.get('MONGODB_URL')),
            graphql_1.GraphQLModule.forRoot({
                include: [graphql_layer_module_1.GraphqlLayerModule],
                autoSchemaFile: 'schema.gql',
                introspection: true,
                playground: true,
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map