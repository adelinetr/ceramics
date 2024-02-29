interface Input {
    placeholder: string,

}

export default function InputComponent(props: Input) {
    return(
        <div className="my-4">
            <input type="text" placeholder={props.placeholder} className="border font-inter font-light px-2 rounded-md py-1 outline-none" />
        </div>
    )
}