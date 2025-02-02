
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DropController } from './dropsign.controller';
import { DropService } from './dropsign.service';
import { Document} from './dropsign.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Document])],
  controllers: [DropController],
  providers: [DropService],
  exports: [DropService],
})
export class DropModule {}
