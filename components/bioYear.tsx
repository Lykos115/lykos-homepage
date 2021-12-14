interface BioYear {
  children: string
}

const bioYear = ({children}:BioYear) => (
  <span className='font-bold mr-4'>{children}</span>
)

export default bioYear
