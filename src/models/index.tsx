
export const CATEGORIES: { value: string }[] = [
    { value: 'Nature' },
    { value: 'Travel' },
    { value: 'Decor' },
    { value: 'Animals' },
    { value: 'Architecture' },
    { value: 'Cooking' }
]

export type UnSplashPhoto = {
    alt_description: string;
    urls: {
        regular: string,
        small: string
    };
    user: {
        name: string;
    };
    width: string;
    height: string;
}
export type UnSplashResponse = {
    results: UnSplashPhoto[]
}

export type Photo = {
    src: string;
    alt: string;
    caption: string;
}


export type WizardContextModel = {
    wizardData?: RegistrationWizard | undefined,
    setWizardData?: Function | undefined,
    currentStep?: any,
    setDisableNextFinishBtn?: Function
}

export type RegistrationWizard = {
    form?: {
        userName: string | number | undefined;
        password: string | number | undefined;
        email: string | undefined;
    };
    categories?: string[];
    subCategories?: string[];
    [key: string]: any;
}