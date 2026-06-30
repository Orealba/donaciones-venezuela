import './style.css'
import { createHeaderFlags } from './components/HeaderFlags'
import { createHeroMessage } from './components/HeroMessage'
import { createMainButton } from './components/MainButton'
import { createFooterLinks } from './components/FooterLinks'
import { createSurveyForm } from './components/SurveyForm'

document.body.className = 'bg-amber-50'

const app = document.querySelector<HTMLDivElement>('#app')!
const landingClasses =
  'min-h-screen flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16 px-8 md:px-8 py-8 md:py-12 lg:py-16 text-center w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto'
const formClasses =
  'min-h-screen flex flex-col items-center gap-6 md:gap-8 px-8 md:px-8 py-8 md:py-12 lg:py-16 text-center w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto'

app.className = landingClasses

const mainButton = createMainButton()

app.append(
  createHeaderFlags(),
  createHeroMessage(),
  mainButton,
  createFooterLinks(),
)

mainButton.addEventListener('click', () => {
  app.innerHTML = ''
  app.className = formClasses
  app.append(createSurveyForm(() => {
    // TODO: navegar a la siguiente página
  }))
})
