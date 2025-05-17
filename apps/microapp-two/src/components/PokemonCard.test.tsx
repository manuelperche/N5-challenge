import { render, screen } from '@testing-library/react';
import PokemonCard from './PokemonCard';
import i18n from '../utils/i18n';

i18n.init();

describe('PokemonCard', () => {
  it('renders pokemon info', () => {
    const pokemon = {
      id: 1,
      name: 'bulbasaur',
      sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
      types: [
        { type: { name: 'grass' } },
        { type: { name: 'poison' } }
      ],
      height: 7,
      weight: 69,
    };
    render(<PokemonCard pokemon={pokemon} />);
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
    expect(screen.getByText(/Types/i)).toBeInTheDocument();
    expect(screen.getByText(/Grass/i)).toBeInTheDocument();
    expect(screen.getByText(/Poison/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', pokemon.sprites.front_default);
  });
}); 