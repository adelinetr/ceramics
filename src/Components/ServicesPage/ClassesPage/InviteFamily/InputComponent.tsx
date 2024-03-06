interface Input {
    placeholder: string,

}

export default function InputComponent(props: Input) {
    return(
        <div>
            <input type="text" placeholder={props.placeholder} className="border w-full lg:w-fit font-inter font-light px-2 rounded-md py-2 lg:py-0.5 outline-none" />
        </div>
    )
}