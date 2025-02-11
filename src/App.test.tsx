import { render, screen, fireEvent, getByText } from '@testing-library/react'
import App from './App';


const sum = (x: number, y:number) => {
    return x + y;
}

sum(4, 4)

describe('App Component', () => {
    it('should sum correctly', () => {
        expect(sum(4, 4)).toBe(8);
    });

    it('should render app with hello message', () => {
        render(<App />)

        screen.getByText("Hello world!")
    })
});

export default {}; 