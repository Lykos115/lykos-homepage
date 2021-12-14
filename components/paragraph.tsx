interface ParagraphProp {
  children: string
}

const paragraph = ({children}:ParagraphProp) => (
  <p className='text-justify indent-4'>{children}</p>
)

export default paragraph
