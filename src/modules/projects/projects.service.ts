import { Injectable } from '@nestjs/common';
import { ProjectRequestDTO } from './projects.dto';

@Injectable()
export class ProjectsService {
    findAll() {
      return [
        {
          id: '1',
          name: 'teste 1',
        },
        {
          id: '2',
          name: 'teste 2',
        },
      ]
    }

    findById(id: string) {
      return {
        id
      }
    }

    create(data: ProjectRequestDTO) {

    }

    update(id: string, data: ProjectRequestDTO) {

    }

    remove(id: string) {

    }
}
