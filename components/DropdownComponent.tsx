//done by Julian Lim Jun Ren
export default function DropdownComponent(props: { styling: string, optionName: string, options: string[], choice: string, setChoice: (choice: string) => void }) {
    const dropdownStyling = props.styling
    return(
        
        <div>
            <select
                id={props.optionName}
                value={props.choice}
                onChange={(e) => props.setChoice(e.target.value)}
                className={dropdownStyling}
                required
            >
                <option value="" className="text-black">-- {props.optionName} --</option>
                {props.options.map((option) => (
                    <option key={option} value={option} className="text-black">{option}</option>
                ))}
            </select>
        </div>
    )
}