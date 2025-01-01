<script lang="ts">
  export let href: string;
  export let label: string;
  export let icon: string;
  export let active: boolean;
</script>

<li aria-current={active ? 'page' : undefined}>
  <a {href} class="flex items-center gap-2">
    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      {@html icon}
    </svg>
    {label}
  </a>
</li>

<style>
  li {
    position: relative;
    height: 100%;
  }

  li[aria-current='page']::before {
    --size: 6px;
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--color-theme-1);
  }

  a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-text);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-theme-1);
  }
</style>