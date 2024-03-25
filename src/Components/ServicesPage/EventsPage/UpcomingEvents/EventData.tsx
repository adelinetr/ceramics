import Event1 from "./images/Event1.png";
import Event2 from "./images/Event2.png";
import Event3 from "./images/Event3.png";
import Event4 from "./images/Event4.png";
import Event5 from "./images/Event5.png";
import Event6 from "./images/Event6.png";
import Event7 from "./images/Event7.png";
import Event9 from "./images/Event9.png";

class Event {
  constructor(
    public heading: string,
    public date: string,
    public description: string,
    public image: string,
    public price?: number
  ) {}
}

export const EVENT_DATA = [
  new Event(
    "Introduction to Pottery",
    "20th of march - 13:00-15:00",
    "Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet. Lorem ipsum dolor sit amet consectetur. ",
    Event1
  ),
  new Event(
    "Special Workshop: 'Mastering the Art of Ceramics'",
    "27th of march - 11:00-12:30",
    "Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet. Lorem ipsum dolor sit amet consectetur. ",
    Event2,
    45
  ),
  new Event(
    "Free Workshop: Art in Ceramics",
    "1st of april - 10:00-12:00",
    "Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet. Lorem ipsum dolor sit amet consectetur. ",
    Event3
  ),
  new Event(
    "Artistic Ceramics",
    "21st of april - 16:00-17:00",
    "Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet. Lorem ipsum dolor sit amet consectetur. ",
    Event4,
    30
  ),
  new Event(
    "Themed Pottery Nights",
    "20th of march - 13:00-15:00",
    "Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet. Lorem ipsum dolor sit amet consectetur. ",
    Event5,
    35
  ),
  new Event(
    "Kids Clay Play Day",
    "20th of march - 13:00-15:00",
    "Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet. Lorem ipsum dolor sit amet consectetur. ",
    Event6,
    15
  ),
  new Event(
    "Ceramic Jewelry Making",
    "20th of march - 13:00-15:00",
    "Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet. Lorem ipsum dolor sit amet consectetur. ",
    Event7,
    35
  ),
  new Event(
    "Introduction to Pottery",
    "20th of march - 13:00-15:00",
    "Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet. Lorem ipsum dolor sit amet consectetur. ",
    Event1
  ),
  new Event(
    "Sculpting with Clay",
    "20th of march - 13:00-15:00",
    "Lorem ipsum dolor sit amet consectetur. Enim massa dictumst nullam nam. In cum scelerisque egestas laoreet. Lorem ipsum dolor sit amet consectetur. ",
    Event9,
    20
  ),
];
