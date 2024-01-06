export interface ContentEntityType {
  id: number,
  title: string,
  body: string,
  image: string
}

const content: ContentEntityType[] = [
  {
    id: 1,
    title: 'Lorem ipsum',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'illustration-grow-together.svg',
  },
  {
    id: 2,
    title: 'Felis eget',
    body: "Felis eget velit aliquet sagittis id consectetur purus. Ullamcorper morbi tincidunt ornare massa eget.",
    image: 'illustration-flowing-conversation.svg',
  },
  {
    id: 3,
    title: 'Arcu risus quis',
    body: "Arcu risus quis varius quam quisque id diam vel. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Justo nec ultrices dui sapien.",
    image: 'illustration-your-users.svg',
  },
]

export default content
