import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from "../../hooks/useCounter";

describe('Pruebas en useCounter', () => {

    test('debe de retornar valores por defecto ', () => {

        const { result } = renderHook(() => useCounter());

        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        expect(typeof increment).toBe('function');
        expect(typeof decrement).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('debe de tener el counter en 100 ', () => {

        const { result } = renderHook(() => useCounter(100));

        const { counter } = result.current;

        expect(counter).toBe(100);

    });


    test('debe de incrementar el counter en 1', () => {

        const { result } = renderHook(() => useCounter(100));

        const { increment } = result.current;

        act(() => {
            increment();
        });

        const { counter } = result.current;

        expect(counter).toBe(101);

    });

    test('debe de decrementar el counter en 1 ', () => {

        const { result } = renderHook(() => useCounter(100));

        const { decrement } = result.current;

        act(() => {
            decrement();
        });

        const { counter } = result.current;

        expect(counter).toBe(99);

    });

    test('debe de resetear el counter a su valor inicial', () => {

        const { result } = renderHook(() => useCounter(100));

        const { increment, reset } = result.current;

        act(() => {
            increment();
            reset();
        });

        const { counter } = result.current;

        expect(counter).toBe(100);

    });



})
