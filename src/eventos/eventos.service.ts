import { Injectable } from "@nestjs/common";

export interface Evento {
    id: number;
    titulo: string;
    data: string;
    local: string;
}

@Injectable()
export class EventosService {
    private eventos: Evento[] = [];

    findAll(): Evento[] { // vai encontrar todos os eventos
        return this.eventos;
    }

    findOne(id: number): Evento { // vai encontrar um especifico de acordo com o id
        const evento = this.eventos.find(evento => evento.id == id);
        if (!evento) {
            throw new Error(`Evento com ID ${id} não encontrado`);
        }
        return evento;
    }
}