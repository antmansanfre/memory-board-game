import { describe, it, expect, beforeEach, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import App from '@/App.vue';

describe('App', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.resetAllMocks();
  });

  it('should render the App', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.exists()).toBeTruthy();
  });
});
