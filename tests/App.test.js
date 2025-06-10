import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/vue';
import App from '../src/App.vue'
import i18n from '../src/i18n.js';
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../src/assets/main.css'

// 2. Test
describe('App.vue', () => {
  it('renders without JavaScript errors', () => {
    // Spy on console.error and console.warn
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    // Attempt to render
    expect(() => {
      render(App, {
        global: {
          plugins: [i18n],
        },
      });
    }).not.toThrow();

    // Check that console.error/warn were not called
    expect(errorSpy).not.toHaveBeenCalled();
    expect(warnSpy).not.toHaveBeenCalled();

    // Cleanup
    errorSpy.mockRestore();
    warnSpy.mockRestore();
  });
});