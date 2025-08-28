import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { EventosService } from "./eventos.service";

@Controller('eventos')
export class EventosController {
    constructor(private readonly eventosService: EventosService) {}

    @Get()
    findAll() {
        return this.eventosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.eventosService.findOne(+id);
    }

    @Post()
    create(@Body() body: {titulo: string; data: string; local: string}) {
        return this.eventosService.create(body.titulo, body.data, body.local);
    }
}