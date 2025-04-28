//Written by Julian Lim Jun Ren
/* 
    This component is a dropdown menu. It takes in props for styling, option name, options, choice, and setChoice function.
    These props determine what type of thing the user is selecting. 
    As its highly customisable based on the passed props, it can be reused for different dropdowns in the app (history page and home page).
 */
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