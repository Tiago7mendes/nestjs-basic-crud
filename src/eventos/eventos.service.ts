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
    private nextId = 1;

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

    create(titulo: string, data: string, local: string): Evento {
        const evento = {id: this.nextId++, titulo, data, local};
        this.eventos.push(evento);
        return evento;
    }

    update(id: number, titulo: string, data: string, local: string): Evento {
        const evento = this.findOne(id);
        if(evento) {
            evento.titulo = titulo;
            evento.data = data;
            evento.local = local;
        }
        return evento;
    }

    remove(id: number): void {
        this.eventos = this.eventos.filter(evento => evento.id !== id);
    }
}