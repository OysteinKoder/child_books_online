import Hammer from "../img/items/hammer.jpg";
import Bus from "../img/items/bus.jpg";
import Car from "../img/items/car.jpg";
import Chair from "../img/items/chair.jpg";
import Helicopter from "../img/items/helicopter.jpg";
import Pants from "../img/items/pants.jpg";
import Plane from "../img/items/plane.jpg";
import Shoes from "../img/items/shoes.jpg";
import Tshirt from "../img/items/tShirt.jpg";

import BusVoice from "../audio/items/bus.mp3";
import CarVoice from "../audio/items/car.mp3";
import ChairVoice from "../audio/items/chair.mp3";
import HammerVoice from "../audio/items/hammer.mp3";
import HelicopterVoice from "../audio/items/helicopter.mp3";
import PantsVoice from "../audio/items/pants.mp3";
import PlaneVoice from "../audio/items/plane.mp3";
import ShoesVoice from "../audio/items/shoes.mp3";
import TshirtVoice from "../audio/items/tshirt.mp3";

export const itemData = {
  hammer: {
    image: Hammer,
    audio: HammerVoice,
    alt: "Hammer",
  },
  bus: {
    image: Bus,
    audio: BusVoice,
    alt: "Bus",
  },
  car: {
    image: Car,
    audio: CarVoice,
    alt: "Car",
  },
  chair: {
    image: Chair,
    audio: ChairVoice,
    alt: "Chair",
  },
  helicopter: {
    image: Helicopter,
    audio: HelicopterVoice,
    alt: "Helicopter",
  },
  pants: {
    image: Pants,
    audio: PantsVoice,
    alt: "Pants",
  },
  plane: {
    image: Plane,
    audio: PlaneVoice,
    alt: "Plane",
  },
  shoes: {
    image: Shoes,
    audio: ShoesVoice,
    alt: "Shoes",
  },
  tshirt: {
    image: Tshirt,
    audio: TshirtVoice,
    alt: "Tshirt",
  },
};
