export default function ExploreComponent(props: {
  image: string;
  heading: string;
  text: string;
}) {
  return (
    <div className="mx-5 mb-16">
      <div className="md:object-cover md:h-[260px] rounded-xl overflow-hidden md:w-[420px]">
        <img className="rounded-xl w-full h-full transition-all cursor-pointer hover:brightness-90 hover:scale-105 duration-300 object-cover" src={props.image} alt="" />
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-archivo font-medium">{props.heading}</h3>
          <svg
          className="lg:hidden"
            width="28"
            height="16"
            viewBox="0 0 28 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.7071 8.70711C28.0976 8.31658 28.0976 7.68342 27.7071 7.29289L21.3431 0.928932C20.9526 0.538408 20.3195 0.538408 19.9289 0.928932C19.5384 1.31946 19.5384 1.95262 19.9289 2.34315L25.5858 8L19.9289 13.6569C19.5384 14.0474 19.5384 14.6805 19.9289 15.0711C20.3195 15.4616 20.9526 15.4616 21.3431 15.0711L27.7071 8.70711ZM0 9H27V7H0V9Z"
              fill="#414141"
            />
          </svg>
        </div>
        <p className="text-[0.9rem] font-archivo text-[#535353]">{props.text}</p>
      </div>
    </div>
  );
}
