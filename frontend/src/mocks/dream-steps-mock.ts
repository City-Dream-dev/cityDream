import { DreamStepProps } from '../components/project';

export const dreamStepsMock: DreamStepProps[] = [
  {
    step: 'Етап 1',
    isActive: true,
    options: [
      {
        checkboxProps: {
          checked: true,
        },
        labelProps: {
          label: 'Пакети для будівельного сміття (20 штук)'
        }
      },
      {
        checkboxProps: {
          checked: true,
        },
        labelProps: {
          label: 'Робочі рукавиці (10 штук)'
        }
      },
      {
        checkboxProps: {
          checked: true,
        },
        labelProps: {
          label: 'Щільна плівка, щоб заклеїти вікно на вході'
        }
      },
      {
        checkboxProps: {
          checked: true,
        },
        labelProps: {
          label: 'Віник та совок (10 комплектів)'
        }
      },
      {
        checkboxProps: {
          checked: true,
        },
        labelProps: {
          label: 'Великий стіл (1 шт) або середніх розмірів (2 шт)'
        }
      },
      {
        checkboxProps: {
          checked: true,
        },
        labelProps: {
          label: 'Місця для сидіння: стільці, лавки тощо (50 шт)'
        }
      },
      {
        checkboxProps: {
          checked: true,
        },
        labelProps: {
          label: 'Лампочки на 100 Вт (5 штук)'
        }
      },
      {
        checkboxProps: {
          checked: true,
        },
        labelProps: {
          label: 'Аптечки першої допомоги (5 штук)'
        }
      },
    ]
  },
  {
    step: '2 Етап',
    isActive: true,
    options: [
      {
        checkboxProps: {
          checked: true,
        },
        labelProps: {
          label: 'Прибирання приміщення (10 людей)'
        }
      },
      {
        checkboxProps: {
          checked: true,
        },
        labelProps: {
          label: 'Розчищення території поряд з укриттям (5 людей)'
        }
      },
      {
        checkboxProps: {
          checked: false,
        },
        labelProps: {
          label: 'Щоб занести речі у сховище (5 людей)'
        }
      },
      {
        checkboxProps: {
          checked: false,
        },
        labelProps: {
          label: 'Автомобіль, щоб вивезти сміття'
        }
      },
    ]
  },
  {
    step: 'Етап 3',
    isActive: false,
    options: [
      {
        checkboxProps: {
          checked: false,
        },
        labelProps: {
          label: 'Lorem ipsum dolor sit amet ipsum.'
        }
      },
      {
        checkboxProps: {
          checked: false,
        },
        labelProps: {
          label: 'Lorem ipsum dolor sit amet ipsum.'
        }
      },
      {
        checkboxProps: {
          checked: false,
        },
        labelProps: {
          label: 'Lorem ipsum dolor sit amet ipsum.'
        }
      },
      {
        checkboxProps: {
          checked: false,
        },
        labelProps: {
          label: 'Lorem ipsum dolor sit amet ipsum.'
        }
      },
      {
        checkboxProps: {
          checked: false,
        },
        labelProps: {
          label: 'Lorem ipsum dolor sit amet ipsum.'
        }
      },
    ]
  },
];