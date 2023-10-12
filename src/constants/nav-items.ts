type Item = {
  name: string
  link: string
  enabled?: boolean
}

export const items: Item[] = [
  { name: 'Home', link: '/' },
  { name: 'Blog', link: '/blog', enabled: false },
  { name: 'About Me', link: '/about' },
  { name: 'Projects', link: '/projects', enabled: false },
  { name: 'Contact', link: '/contact', enabled: false }
]

export default items
