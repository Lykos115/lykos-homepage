interface HeaderProp {
  children: string
}

const header = ({children}: HeaderProp) =>  (
  <h3 className='font-bold underline underline-offset-4 decoration-4 mt-3 mb-4 text-xl decoration-neutral-600'>{children}</h3>
)

export default header
