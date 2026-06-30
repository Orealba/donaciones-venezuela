import './style.css'
import { createHeaderFlags } from './components/HeaderFlags'
import { createHeroMessage } from './components/HeroMessage'
import { createMainButton } from './components/MainButton'
import { createFooterLinks } from './components/FooterLinks'
import { createSurveyForm } from './components/SurveyForm'
import type { SurveyData } from './components/SurveyForm'
import { createThanksPage } from './components/ThanksPage'
import { createQuickThanksPage } from './components/QuickThanksPage'
import { createInventoryPage } from './components/InventoryPage'

document.body.className = 'bg-amber-50'

const app = document.querySelector<HTMLDivElement>('#app')!

const landingClasses =
  'min-h-screen flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16 px-8 md:px-8 py-8 md:py-12 lg:py-16 text-center w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto'
const formClasses =
  'min-h-screen flex flex-col items-center gap-4 md:gap-6 px-8 md:px-8 py-6 md:py-8 lg:py-10 text-center w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto'

function showInventory() {
  app.innerHTML = ''
  app.className = landingClasses
  app.append(createInventoryPage(showLanding))
}

function showLanding() {
  app.innerHTML = ''
  app.className = landingClasses
  const mainButton = createMainButton()
  app.append(
    createHeaderFlags(),
    createHeroMessage(),
    mainButton,
    createFooterLinks(showInventory),
  )
  mainButton.addEventListener('click', showSurvey)
}

function showSurvey() {
  app.innerHTML = ''
  app.className = formClasses
  app.append(
    createSurveyForm(
      (data: SurveyData) => {
        // TODO: conectar con Firebase para guardar los datos
        console.log('Datos del formulario:', data)
        showThanks()
      },
      showQuickThanks,
    ),
  )
}

function showThanks() {
  app.innerHTML = ''
  app.className = landingClasses
  app.append(createThanksPage(showLanding))
}

function showQuickThanks() {
  app.innerHTML = ''
  app.className = landingClasses
  app.append(createQuickThanksPage(showLanding))
}

showLanding()
