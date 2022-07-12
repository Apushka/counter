import { FC } from "react";

interface CounterPropsType {
    value: number,
    name: string,
    id: number,
    onDecrement: (id: number) => void,
    onIncrement: (id: number) => void,
    onDelete: (id: number) => void
}

const Counter: FC<CounterPropsType> = ({ value, name, id, onDecrement, onIncrement, onDelete }) => {

    const formatValue = (): string | number => {
        return value === 0 ? "empty" : value;
    };
    const getBageClasses = (): string => {
        let classes: string = "badge m-2 ";
        classes += value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    };

    return (
        <div>
            <span>{name}</span>
            <span className={getBageClasses()}>{formatValue()}</span>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={() => onIncrement(id)}
            >
                +
            </button>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={() => onDecrement(id)}
            >
                -
            </button>
            <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => onDelete(id)}
            >Delete</button>
        </div>
    );
};

export default Counter;
