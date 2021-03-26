import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { DataLayerModule } from './1-data-layer/data-layer.module';
import { GraphqlLayerModule } from './3-graphql-layer/graphql-layer.module';
import { ProcessLayerModule } from './2-process-layer/process-layer.module';

const auxConfigs = new ConfigService();

@Module({
  imports: [
    // Capas principales
    ProcessLayerModule,
    DataLayerModule,
    GraphqlLayerModule,
    // Configuraciones
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // Dependencias externas
    MongooseModule.forRoot(auxConfigs.get('MONGODB_URL')),
    GraphQLModule.forRoot({
      include: [GraphqlLayerModule],
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
