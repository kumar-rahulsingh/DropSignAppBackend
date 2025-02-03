import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { DropModule } from './dropsign/dropsign.module';
import { Document } from './dropsign/dropsign.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
     
    DropModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST ,
      port: parseInt(process.env.DB_PORT || '5432', 10), 
      username: process.env.DB_USER ,
      password: process.env.DB_PASS ,
      database: process.env.DB_NAME ,
      entities: [Document],
      synchronize: true,
      logging: true,
    }),
    DropModule,
  ],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log('Database connection successfully ');
  }
}

export default AppModule; 
