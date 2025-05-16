import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import i18n from './i18n'; // Import i18n instance
import { I18nextProvider } from 'react-i18next';

// Mock the remote components
vi.mock('microappOne/Button', () => ({
  default: () => <button>Mocked Button</button>
}));

vi.mock('microappTwo/Card', () => ({
  default: () => <div>Mocked Card</div>
}));

describe('App component', () => {
  const renderApp = () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );
  };

  test('renders host application greeting', async () => {
    renderApp();
    // Wait for translations to load if necessary, though with static resources it should be quick
    await waitFor(() => {
        expect(screen.getByText("Host Application")).toBeInTheDocument();
    });
  });

  test('renders mocked microfrontend components', async () => {
    renderApp();
    await waitFor(() => {
        expect(screen.getByText('Mocked Button')).toBeInTheDocument();
        expect(screen.getByText('Mocked Card')).toBeInTheDocument();
    });
  });

   test('language switcher changes greeting text', async () => {
    renderApp();
    const spanishButton = screen.getByText('Español');

    // Initial greeting
    await waitFor(() => {
        expect(screen.getByText("Host Application")).toBeInTheDocument();
    });

    // Click Spanish button
    spanishButton.click();

    // Check for Spanish greeting
    await waitFor(() => {
        expect(screen.getByText("Aplicación Anfitriona")).toBeInTheDocument();
    });

    // Click English button
    const englishButton = screen.getByText('English');
    englishButton.click();

    // Check for English greeting
    await waitFor(() => {
        expect(screen.getByText("Host Application")).toBeInTheDocument();
    });
  });
}); 