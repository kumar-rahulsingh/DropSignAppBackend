import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { DropService } from './dropsign.service';

@Controller('dropsign')
export class DropController {
  constructor(private readonly documentsService: DropService) {}

  @Post()
  async sendTemplate(@Body() body: any) {
    try {
      const result = await this.documentsService.createSignatureRequest(body);
      return {
        message: 'Template sent successfully ',
        document: result,
      };
    } catch (error) {
      console.error('Error in creating signature request:', error.message);
      throw new HttpException(
        `Failed to send template: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}