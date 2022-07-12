import { FC, useState } from "react";
import Counter from "./counter";
import { ICounter } from "./types";

const CountersList: FC = () => {
    const initialState: ICounter[] = [
        { id: 0, value: 0, name: 'Ненужная вещь' },
        { id: 1, value: 4, name: 'Ложка' },
        { id: 2, value: 0, name: 'Вилка' },
        { id: 3, value: 0, name: 'Тарелка' },
        { id: 4, value: 0, name: 'Набор минималиста' }
    ]
    const [counters, setCounters] = useState<ICounter[]>(initialState);

    const handleDelete = (id: number): void => {
        setCounters(counters.filter(counter => counter.id !== id));
    };

    const handleDecrement = (id: number): void => {
        setCounters(counters.map(c => {
            if (c.id === id) c.value--;
            return c;
        }))
    };

    const handleIncrement = (id: number): void => {
        setCounters(counters.map(c => {
            if (c.id === id) c.value++;
            return c;
        }))
    };

    return <>
        {counters.map(counter => <Counter
            key={counter.id}
            {...counter}
            onDelete={handleDelete}
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
        />)}
    </>
};

export default CountersList;