import { Restaurant } from "database";
import { Get, Query, Route } from "tsoa";
import { prisma } from "../lib/prisma";

export type RestaurantInput = Pick<Restaurant, "address" | "name" | "phone">;

@Route("restaurant")
export class RestaurantService {
  @Get("{id}")
  public async get(@Query() id: string): Promise<Restaurant | null> {
    return await prisma.restaurant.findUnique({
      where: { id },
    });
  }
}
