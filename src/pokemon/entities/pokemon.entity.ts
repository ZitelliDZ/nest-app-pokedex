
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PokemonDocument = HydratedDocument<Pokemon>;

@Schema()
export class Pokemon {

    //id: string; // MongoDB will create an id 

    @Prop({
        required: true,
        unique: true,
        index: true
    })
    name: string;

    @Prop({
        required: true,
        unique: true,
        index: true
    })
    @Prop()
    no: number;

}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);

