import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSwitcher from './LanguageSwitcher.tsx';
import { describe, it, expect, vi } from 'vitest';

describe('LanguageSwitcher', () => {
  it('renders language buttons and calls handler', () => {
    const onLanguageChange = vi.fn();
    render(LanguageSwitcher({ selectedLanguage: 'en', onLanguageChange }));
    expect(screen.getByText('EN')).toBeDefined();
    expect(screen.getByText('ES')).toBeDefined();

    fireEvent.click(screen.getByText('ES'));
    expect(onLanguageChange).toHaveBeenCalledWith('es');
  });
}); 

