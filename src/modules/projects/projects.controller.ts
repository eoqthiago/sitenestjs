import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common'
import { ProjectsService } from './projects.service'
import { ProjectRequestDTO, ProjectResponseDTO } from './projects.dto'
import { ApiResponse } from '@nestjs/swagger'

@Controller({
  version: '1',
  path: 'projects',
})
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiResponse({
    type: [ProjectResponseDTO],
  })
  findAll() {
    return this.projectsService.findAll()
  }

  @Get(':id')
  @ApiResponse({
    type: ProjectResponseDTO,
  })
  findById(@Param('id', ParseUUIDPipe) id: string) {
    return this.projectsService.findById(id)
  }

  @Post()
  @ApiResponse({
    type: ProjectResponseDTO,
  })
  create(@Body() data: ProjectRequestDTO) {
    return this.projectsService.create(data)
  }

  @Put(':id')
    @ApiResponse({
    type: ProjectResponseDTO,
  })
  update(@Param('id') id: string, @Body() data: ProjectRequestDTO) {
    return this.projectsService.update(id, data)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.projectsService.remove(id)
  }
}
