import Cat from "../img/cat.jpg";
import Chicken from "../img/chicken.jpg";
import Cow from "../img/cow.jpg";
import Dog from "../img/dog.jpg";
import Hippo from "../img/hippo.jpg";
import Horse from "../img/horse.jpg";
import Lion from "../img/lion.jpg";
import Sheep from "../img/sheep.jpg";
import Zebra from "../img/zebra.jpg";

import CatVoice from "../audio/animals/cat.mp3";
import CowVoice from "../audio/animals/cow.mp3";
import DogVoice from "../audio/animals/dog.mp3";
import HippoVoice from "../audio/animals/hippo.mp3";
import HorseVoice from "../audio/animals/horse.mp3";
import LionVoice from "../audio/animals/lion.mp3";
import RoosterVoice from "../audio/animals/rooster.mp3";
import SheepVoice from "../audio/animals/sheep.mp3";
import ZeebraVoice from "../audio/animals/zeebra.mp3";

export const animalData = {
  cat: {
    image: Cat,
    audio: CatVoice,
  },
  chicken: {
    image: Chicken,
    audio: RoosterVoice,
  },
  cow: {
    image: Cow,
    audio: CowVoice,
  },
  dog: {
    image: Dog,
    audio: DogVoice,
  },
  hippo: {
    image: Hippo,
    audio: HippoVoice,
  },
  horse: {
    image: Horse,
    audio: HorseVoice,
  },
  lion: {
    image: Lion,
    audio: LionVoice,
  },
  sheep: {
    image: Sheep,
    audio: SheepVoice,
  },
  zebra: {
    image: Zebra,
    audio: ZeebraVoice,
  },
};
