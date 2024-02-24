export default function ClassComponent(props: {
  image: string;
  heading: string;
  text: string;
  className?: string;
}) {
  return (
    <div className={`${props.className} mx-auto font-archivo mt-5 w-[350px] lg:w-[320px] h-auto object-cover`}>
      <div
        className='md:flex justify-center items-center md:space-x-5'
      >
        <img
          src={props.image}
          className="rounded-md hover:brightness-75 transition-all duration-200 cursor-pointer w-[350px] lg:w-[320px] h-[230px] object-cover"
          alt=""
        />
      </div>

      <div className="flex justify-between items-center mb-2">
        <h4 className="uppercase text-lg font-medium mt-3">{props.heading}</h4>
        <span className="text-lg font-medium">45$</span>
      </div>

      <p className="font-inter text-sm text-[#535353]">{props.text}</p>
    </div>
  );
}
