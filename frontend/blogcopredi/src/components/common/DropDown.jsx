import {useState} from "react";
import {NavLink} from "react-router-dom";
import {CaretDown, CaretRight} from "phosphor-react";


const DropDown = ({title, options}) => {

    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center mr-1 font-title text-white">{title}
                <div className="">
                    {isExpanded && <CaretDown size={18} weight="bold"/>}
                    {!isExpanded && <CaretRight size={18} weight="bold"/>}
                </div>
            </button>
            {isExpanded &&
                <div className="absolute bg-white opacity-80 rounded  border w-40 py-2 mt-10">
                    <ul>
                        {options.map((option, index) => (
                            <li key={index} className="hover:bg-black px-2 py-1"><NavLink className="text-black"
                                                                                          to={option.to}>{option.name}</NavLink>
                            </li>
                        ))}
                    </ul>

                </div>}

        </div>
    );
}

export default DropDown;