import Arrow from "./Arrow.svg";

interface ImgButton {
  image: string;
  heading: string;
  text: string;
}

export default function ImageButton(props: ImgButton) {
  return (
    <div>
      <div className="lg:mx-0 cursor-pointer group relative lg:mt-1 flex my-1 mx-1 lg:my-0 justify-center items-center">
        <div className=" overflow-hidden rounded-md">
          <img
            className="h-[40vh] w-[100vw] brightness-50 group-hover:brightness-75 group-hover:scale-125 transition-all duration-200 lg:rounded-md lg:w-[50vw] object-cover"
            src={props.image}
            alt=""
          />
        </div>
        <div className="absolute flex flex-col">
          <h3 className=" flex gap-4 uppercase text-white tracking-widest font-archivo text-3xl md:text-4xl font-light">
            {props.heading}
            <img
              className="lg:invisible transition-all ease-in-out group-hover:visible"
              src={Arrow}
              alt=""
            />
          </h3>
          <div>
            <p className="lg:invisible group-hover:visible font-archivo font-extralight tracking-wider mt-2 text-base text-white">
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
