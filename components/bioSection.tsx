interface BioSectionProp {
  children: React.ReactNode
}

const bioSection = ({children}: BioSectionProp) => (
  <div className='box-border pl-14 -indent-14'>
    {children}
  </div>
)

export default bioSection
