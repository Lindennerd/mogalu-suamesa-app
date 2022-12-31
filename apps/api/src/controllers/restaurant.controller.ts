import { RestaurantService } from "../service/restaurant.service";

export class RestaurantController {
  private readonly restaurantService: RestaurantService;

  constructor() {
    this.restaurantService = new RestaurantService();
  }

  public get(id: string) {
    return this.restaurantService.get(id);
  }
}
