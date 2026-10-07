import { Controller, Get, Param } from '@nestjs/common';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Get()
  getAllVideos() {
    return this.videosService.getAllVideos();
  }

  @Get(':id')
  getVideoById(@Param('id') id: string) {
    return this.videosService.getVideoById(id);
  }
}
