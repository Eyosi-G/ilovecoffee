import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [];

  createCoffee(createCoffeeDto: CreateCoffeeDto) {
    let coffee: Coffee = {
      ...createCoffeeDto,
      id: 1,
    };
    this.coffees.push(coffee);
  }

  getCoffees(): Coffee[] {
    return this.coffees;
  }

  getSingleCoffee(id: number): Coffee {
    let coffee = this.coffees.find((coffee: Coffee) => coffee.id === id);
    if (!coffee) {
      throw new HttpException(
        `couldn't find coffee with id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return coffee;
  }

  updateCoffee(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    let coffee = this.getSingleCoffee(id);
    if (coffee) {
    }
  }

  removeCoffee(id: number) {
    let coffees = this.coffees.filter((coffee) => coffee.id !== id);
    this.coffees = coffees;
    
  }
}
