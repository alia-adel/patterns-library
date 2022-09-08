
export type Categories = {
    [key: string]: any
}

export const CATEGORIES: Categories = {
    'nature': ['sea', 'mountains', 'forests', 'flowers'], 
    'travel': ['adventure', 'leisure'], 
    'decor': ['living', 'bathroom', 'dinning', 'kitchen'], 
    'animals': ['wild', 'pets', 'birds', 'insects', 'sea'], 
    'architecture': ['cottage', 'building', 'skyscrapper'], 
    'cooking': ['grill', 'baking', 'asian food', 'healthy food']
}
export type UnSplashPhoto = {
    alt_description: string;
    urls: {
        regular: string,
        small: string
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


export type WizardContextModel= {
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