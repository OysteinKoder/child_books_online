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
    alt: "katt",
  },
  chicken: {
    image: Chicken,
    audio: RoosterVoice,
    alt: "Kylling",
  },
  cow: {
    image: Cow,
    audio: CowVoice,
    alt: "Ku",
  },
  dog: {
    image: Dog,
    audio: DogVoice,
    alt: "Hund",
  },
  hippo: {
    image: Hippo,
    audio: HippoVoice,
    alt: "Flodhest",
  },
  horse: {
    image: Horse,
    audio: HorseVoice,
    alt: "Hest",
  },
  lion: {
    image: Lion,
    audio: LionVoice,
    alt: "Løve",
  },
  sheep: {
    image: Sheep,
    audio: SheepVoice,
    alt: "Sau",
  },
  zebra: {
    image: Zebra,
    audio: ZeebraVoice,
    alt: "Zebra",
  },
};
