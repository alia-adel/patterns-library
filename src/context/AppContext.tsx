import React from 'react'
import { RegistrationWizard } from '../models'
export const RegistrationWizardContext = React.createContext<RegistrationWizard>({
    form: {
        userName: undefined,
        password: undefined,
        email: undefined,
    },
    category: [],
    subCategories: []
})