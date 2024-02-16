import { Injectable } from '@nestjs/common';
//import axios,{AxiosInstance} from 'axios';
import { PokemonResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon, PokemonDocument } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  //private readonly axios: AxiosInstance = axios
  

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<PokemonDocument>,

    private readonly http: AxiosAdapter
  ) {}

  async executeSeed() {
    
    await this.pokemonModel.deleteMany({}) // Clear the collection

    const data = await this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')


    const pokemonToInsert: Pokemon[] = [] 

    //const insertPromisesArray = []
    data.results.forEach(async ({name,url}) => {
      const segments = url.split('/')
      const no:number = +segments[segments.length - 2]
      //await this.pokemonModel.create({name,no})
      //insertPromisesArray.push(this.pokemonModel.create({name,no}))
      pokemonToInsert.push({name,no})
    })
    
    //await Promise.all(insertPromisesArray)
    await this.pokemonModel.insertMany(pokemonToInsert)

    return 'Seeding completed'
  }
}
