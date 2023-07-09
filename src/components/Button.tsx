import { propsButton } from "../types"

function Button({children,title,handledSubmit}:propsButton) {
    return (
        <button onClick={() => handledSubmit?.(1)} className="btn__orange">
            {children}
            <span>{title}</span>
        </button>
    )
}

export default Button