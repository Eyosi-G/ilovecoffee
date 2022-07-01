import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}
  @Get()
  getCoffees(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return this.coffeeService.getCoffees();
  }

  @Get(':id')
  getSingleCoffee(@Param('id') id: number) {
    return this.coffeeService.getSingleCoffee(id);
  }

  @Post()
  createCoffee(@Body() createCoffeeDto: CreateCoffeeDto) {
    return createCoffeeDto;
    return this.coffeeService.createCoffee(createCoffeeDto);
  }

  @Patch(':id')
  updateCoffee(
    @Param('id') id: number,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeeService.updateCoffee(id, updateCoffeeDto);
  }

  @Delete(':id')
  deleteCoffee(@Param('id') id: number) {
    return this.coffeeService.removeCoffee(id);
  }
}
