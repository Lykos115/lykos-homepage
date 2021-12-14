import Header from '../components/header'
import Paragraph from '../components/paragraph'
import Button from '../components/button'
import BioSection from '../components/bioSection'
import BioYear from '../components/bioYear'


const Home = () => (

  <div>
    <div className='rounded-lg bg-zinc-700 text-center mb-6 p-3'>
      Hello, I&apos;m a front end developer based in California!
    </div>

    <div className='box-border md:flex'>
      <div className='grow'>
        <h2 className='text-4xl font-bold'>Francisco Herrera</h2>
        <p>Front End</p>
      </div>
      <div className='shrink-0 mt-4 text-center md:mt-0 md:ml-4'>
        <img src='https://i.imgur.com/qdrLFZe.jpeg' alt='profile image' className='border-slate-400 border-2 max-w-[100px] inline-block border-solid rounded-full' />
      </div>
    </div>

    <section>
      <Header>Work</Header>
      <Paragraph>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
      </Paragraph>
      <Button />
    </section>
    
    <section>
      <Header>Bio</Header>
      <BioSection>
        <BioYear>1999</BioYear>
        Born in Palo Alto, California
      </BioSection>
      <BioSection>
        <BioYear>2019</BioYear>
        Front end developer for non profit Digital Nest
      </BioSection>
      <BioSection>
        <BioYear>2020</BioYear>
        Completed CSin3 Bachelors's Program in California State University - Monterey Bay.
      </BioSection>
      <BioSection>
        <BioYear>2021</BioYear>
        Data Assistant for Santa Cruz Community Health Center
      </BioSection>
      <BioSection>
        <BioYear>Present</BioYear>
        Looking for new opportunities!
      </BioSection>
    </section>
    <section>
      <Header>I ♥</Header>
      <Paragraph>Art, Music, Playing Guitar, Skating, Streaming, Gaming, Coding Discord Bots</Paragraph>
    </section>
  </div>

)

export default Home
