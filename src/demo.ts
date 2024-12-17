console.warn('Le typage en TS')

//! Déclaration de variable
//! ***********************
//  nature nomVariable : type


//! Les types de données primitive
{
    // Nombre (Entier / Réel)
    const nb1: number = 42;
    const nb2 = 1_337;
    const nb3 = 3.14;
    const nb4 = 0x1AF;  // 0b0100_0100;
    let nb5: number;
    nb5 = 42;

    // Chaine de charactere
    const msg1: string = "Della Duck";
    let msg2: string;
    msg2 = `Hello ${msg1}`;

    // Booléen
    const test: boolean = true;

    // Collection
    const tab1: Array<string> = ['Riri', 'Fifi', 'Loulou'];
    const tab2: string[] = ['Donald', 'Daisy'];

    const matrice1: Array<Array<number>> = [
        [5, 1],
        [9, 3, 0],
        [1, 2, 3, 4, 5],
    ];
    const matrice2: number[][] = [
        [5, 1],
        [9, 3, 0],
        [1, 2, 3, 4, 5],
    ];

    // Collection - Avec un contenu restraint
    const tab3: [string] = ['Archibald'];
    const tab4: [number, number, number] = [42, 3, -5];
    const tab5: [string, ...string[]] = ['Riri', 'Zaza']

    // Tout type de donnée (A évité)
    let nawak: any;

    nawak = 42;
    console.log(typeof (nawak));  // Number
    nawak = 'Test';
    console.log(typeof (nawak));  // String
    nawak = null;
    console.log(typeof (nawak));  // Object
}


//! Les énumerations
// Permet de créer un type de donnée avec des choix limité
// Le TypeScript permet d'en définir avec le mot clef "enum"
{
    // Une enum est un ensemble de constante liée
    // Par defaut, c'est des valeur numerique incrémenté
    enum StopLight1 {
        GREEN, ORANGE, RED
    };

    // Il est possible de customiser la valeur. Bonne pratique : 
    // - On défini toutes les valeurs
    // - Utiliser le même type de donnée (number, string, ...)
    enum StopLight2 {
        GREEN = 10, ORANGE = 5, WARNING = 5, RED = 1
    };

    // Utilisation
    let light1: StopLight1 = StopLight1.RED;
    let light2: StopLight2 = StopLight2.RED;
    
    let light3: StopLight1 = 2;
    let light4: number = StopLight2.RED;
}


//! Le type "Objet" (Sans créer de prototype)
{
    let person1: {
    firstname: string,
    lastname: string,
    birthdate?: Date         // Optionnel
};

person1 = {
    firstname: 'Della',
    lastname: 'Duck',
    birthdate: new Date(1992, 6, 13)
};

person1 = {
    firstname: 'Zaza',
    lastname: 'Vanderquack',
};

    const person2: {
    firstname: string,
    lastname: string,
    birthdate?: Date
} = {
    firstname: 'Balthazar',
    lastname: 'Picsou',
        birthdate: new Date(1967, 11, 3)
};
}

//! Définition de type
{
// Nouveau type de donnée pour les "objet" en JS
type Sandwich = {
    name: string,
    description?: string,
    ingredients: string[],
    isVege: boolean,
    isHalal: boolean
}

    const sandwich1: Sandwich = {
    name: 'Cordon bleu',
    ingredients: [
        'Cordon bleu',
        'Dallas'
    ],
    isVege: false,
    isHalal: true
};

    const sandwich2: Sandwich = {
    name: 'Jambon Fromage',
    ingredients: [
        'Jambon',
        'Fromage',
        'Mayo'
    ],
    isVege: false,
    isHalal: false
}

function eatSandwich(s: Sandwich) {
    console.log(`Je mange un ${s.name}`)
    console.log('Les ingrés sont : ' + s.ingredients.join(', ') + '!');
}
eatSandwich(sandwich2);


// Utilisation des types défini pour les éléments du DOM
const input1: HTMLElement = document.getElementById('test')!;
const input2 = document.getElementById('test') as HTMLInputElement;


    // Nouveau type de donnée pour les "tableaux" en JS
    type StringArray = string[];
    type NumberArrayMinTwoElement = [number, number, ...number[]];

    let names: StringArray;
    names = ['Riri', 'Zaza', 'Della'];

    let nbs: NumberArrayMinTwoElement;
    nbs = [9, 9, 1, 2, 3, 4];
    nbs = [-9, 9];
}

//! Composition de type
{
    // L'opérateur "Union"
    // *******************
    //? L'opérateur "|" permet de créer un type basé sur une combinaison de type possible

    // - Type nullable
    type NullableNumber = number | null;

    let nb1: NullableNumber;
    nb1 = 42;
    nb1 = null;

    // - Combiné des types
    type NumberOrString = number | string;
    let ex: NumberOrString;
    ex = 42;
    ex = 'Hello World';


    // Type basé sur un template string
    // ********************************
    type CountryCode = 'BE' | 'CH' | 'FR' | 'JP';
    const flagCode1: CountryCode = "BE";
    const flagCode2: CountryCode = "JP";

    type Account = `${CountryCode}${number}`;
    const account1: Account = 'BE123456789'
    const account2: Account = `${flagCode1}987654321`;


    // L'opérateur "Intersection"
    // **************************
    //? L'opérateur "&" permet de créer un type basé sur une fusion des types

    type Person = {
        firstname: string,
        lastname: string,
        birthdate?: Date
    };

    type Email = `${string}@${string}`;
    const testEmail: Email = '@'   // Check uniquement la présence d'un @. 
    // En vrai, on fera une regex en runtime :p

    type Student = Person & {
        login: string,
        email: Email
    };

    type Prof = Person & {
        birthdate: Date,
        email: Email,
        course: string
    };

    type Assistant = Student & Prof;

    const st1: Student = {
        firstname: 'Zaza',
        lastname: 'Vanderquack',
        login: 'zaz42',
        email: 'zaza@dc.be'
    };

    const prof: Prof = {
        firstname: 'Della',
        lastname: 'Duck',
        birthdate: new Date(1991, 6, 9),
        email: 'della.duck@dc.be',
        course: 'JavaScript'
    };


    // Attention a ne pas créer des types "impossible" -> Never
    type Fruit = {
        name: string,
        price: number
    }

    type Meal = {
        name: string,
        code: string,
        price: string
    }

    type BadType = Fruit & Meal
    /*
    const bad : BadType = {
        name: 'Test',
        code: '42A',
        price: 42 // Impossible :(
    };
    */
}
