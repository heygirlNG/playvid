import { Injectable } from '@nestjs/common';
import { videos } from '../data/mock-data';

@Injectable()
export class VideosService {
  getAllVideos() {
    return videos;
  }

  getVideoById(id: string) {
    return videos.find((video) => video.id === id) ?? null;
  }
}
