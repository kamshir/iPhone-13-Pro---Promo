const accordeon = () => {
  // Выбираем родителя всех табов
  const characteristicsList = document.querySelector('.characteristics__list')
  // Отлавливаем нужный таб при клике по нему внутри списка
  characteristicsList.addEventListener('click', e => {
    const target = e.target.closest('.characteristics__item')
    if (target){
      const title = target.querySelector('.characteristics__title') // Кнопка, стрелочка
      const description = target.querySelector('.characteristics__description') // Описание
      if (description && title){
        // Если таб закрытый
        if (!description.classList.contains('open') && !title.classList.contains('active')){
          closeAllTabs() // Закрываем все табы
          // Открываем таб, по которому кликнули
          title.classList.add('active')
          description.style.height = description.scrollHeight + 'px'
          description.classList.add('open')
        } else {
          // Просто закрываем таб
          title.classList.remove('active')
          description.style.height = 0
          description.classList.remove('open')
        }
      }
    }
  })
}

// Закрываем все табы
const closeAllTabs = () => {
  // Выбираем родителя всех табов
  const characteristicsList = document.querySelector('.characteristics__list')
  if (characteristicsList){
    // Выбираем все табы
    const tabs = characteristicsList.querySelectorAll('.characteristics__item')
    if (tabs){
      // Перебираем табы
      tabs.forEach(tab => {
        const title = tab.querySelector('.characteristics__title')
        if (title){
          // Закрываем кнопку
          title.classList.remove('active')
        }
        // Выбираем описание таба
        const description = tab.querySelector('.characteristics__description')
        if (description){
          description.style.height = ''
          // закрываем описание
          description.classList.remove('open')
        }
      })
    }
  }
}

closeAllTabs()
accordeon()